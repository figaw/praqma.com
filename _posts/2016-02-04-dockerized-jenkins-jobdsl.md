---
title:      Dockerized Jenkins environment
subtitle:   A solution which is easy to deploy
caption:    A ready solution which is easy to deploy
tags:       [Jenkins, Job DSL, Docker]
avatar:     /images/stories/jenkinsdocker.png
nav-weight: 40
---

## Introduction

Once, during a discussion about optimizing DevOps processes, we realized it would be great to have a Jenkins template setup as a container solution. The solution would provide the package as Docker containers with predefined job configurations. As an exercise, we implemented such a solution for one of our customers. After some brainstorming and investigating, we decided on three vital requirements for our setup.

<!--break-->

Firstly, the Jenkins setup to be easy to deploy.
This makes it a powerful tool in build pipelines and can make server migration trivial. It should come with all user accounts and job configurations set up already. It should be a system independent master/slaves configuration, which isn’t too hard to achieve using Docker. All the required sources and Docker files should be stored in a Git repository, allowing anybody to clone or fork it, including Jenkins itself.

Secondly, all of the jobs should be stored as a code.
This avoids having to make manual changes in Jenkins UI and makes it easy to keep track of job configuration. [The Jenkins Job DSL plugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin) is an excellent tool for this. The plugin provides a DSL (Domain Specific Language) that allows users to describe jobs using a Groovy-based language. For more information on the Jenkins Job DSL, see our previous post about [Job DSL](http://www.praqma.com/stories/delving-into-job-dsl/).

Thirdly, when  creating or changing jobs, we’d like to test them before pushing them to the Jenkins server. In other words, we want continuous integration of the jobs themselves. This is where [the Pretested Integration plugin](https://wiki.jenkins-ci.org/display/JENKINS/Pretested+Integration+Plugin) comes in handy.

## Docker images

It’s good practice to set up your Jenkins as a master/slave configuration. Hence the need for two Docker images, one for the master and one for the slave.

The Jenkins master image is based on the official Jenkins Docker image (jenkins:1.609.3).
It contains predefined configuration including links to our Git repository, a seed job, preconfigured users, various global Jenkins configurations, etc. All of this is contained in Groovy scripts and a list of plugins that are copied into Jenkins when the image is built.

The slave agent container is based on the official Java Docker image (java:8-jdk).
As the slaves will be executing all our jobs, all the tools we need for the build process, such as git, make, npm and so on, should be available to them. We used apt in our Dockerfile to install all our requirements.

The complete setup is run using docker-compose. The slave containers link to the master and scale as much as we want. Jenkins’ access to the Git repository is managed through SSH keys.

## Job DSL

As mentioned above, one of the general ideas is provide Jenkins jobs as a code. All jobs configurations are kept in scripts following a simple naming convention (*.dsl). The Jenkins Job DSL plugin allows you to define a job as code, offering a useful set of functions to configure job components and grants direct access to the config.xml to generate the job. The script is actually Groovy code, so you have the full power of Groovy at your disposal.

#### Very trivial example of the dsl job
``` groovy
	job('example') {
		scm {
			git {
				remote {
					url('git@yourremote:account/repo1.git')
				}
			}
		}
		steps{
			gradle('build', '', true)
		}
	}
```

When configured in the Jenkins UI (through adding a “Process Job DSLs” build step to your job), it allows you to execute given code or scripts found in the workspace. We already defined a seed job on our Jenkins master, so we just want to run it on startup. We did this programmatically using a Groovy script that’s run during the Jenkins startup:

#### Example of the code

	import hudson.model.*
	import jenkins.model.*
	import hudson.slaves.*
	import javaposse.jobdsl.plugin.*
	import hudson.plugins.git.*
	import java.util.Collections
	import java.util.List

	def jobName = 'seed-job'
	def instance = Jenkins.getInstance()
	def project = new FreeStyleProject(Jenkins.instance, jobName)

	def projectURL = "git@yourremote:accaount/repo1.git"
	List<BranchSpec> branches = Collections.singletonList(new BranchSpec("*/branch"));
	List<SubmoduleConfig> submoduleCnf = Collections.<SubmoduleConfig>emptyList();
	// We are using predefined user id jenkins. You change it in the global config
	List<UserRemoteConfig> usersconfig = Collections.singletonList(new UserRemoteConfig(projectURL, '', '', 'jenkins'))
	def scm = new GitSCM(usersconfig, branches, false, submoduleCnf, null, null, null)
	project.setScm(scm)
	// Get script execute from checked out git repository:
	def jobDslBuildStep = new ExecuteDslScripts(scriptLocation=
		new ExecuteDslScripts.ScriptLocation(value = "false", targets="path-to-all-dsl", scriptText=""),
	                            ignoreExisting=false,
	                            removedJobAction=RemovedJobAction.DELETE,
	                            removedViewAction=RemovedViewAction.DELETE,
	                            lookupStrategy=LookupStrategy.JENKINS_ROOT,
	                            additionalClasspath='path-to-helpersclass');

	project.getBuildersList().add(jobDslBuildStep)

The seed job runs again every night to prevent configuration drift:

#### Example of the code
	import hudson.triggers.TimerTrigger

	project.addTrigger(new TimerTrigger("@midnight"))
	project.save()
	Jenkins.instance.reload()

So now we have what we want: A Dockerized Jenkins setup with all jobs contained in Job DSL scripts. One script - one job. The scripts are under source control, just like the rest of the project.

As a final feature, we want the possibility to test changes in  our Job DSL scripts.
We do this by running the scripts locally through a nifty bash script. This script allows building xml files from the dsl's scripts. If the build is successful then the scripts are correct.

We set up a small pipeline to allow for continuous integration of our Job DSL scripts.
It uses the Pretested Integration plugin to run the above verification whenever changes are commited before merging them into the master branch. After a successful merge, our seed job is run, which updates all of our jobs with the new configuration.

The benefits of this setup are obvious. It’s easy to set up for different projects, prevents configuration drift for that project’s Jenkins jobs and, since the Job DSL scripts are stored in Git, grants you fully version controlled build configuration.

Future improvements could include replacing the ‘testing’ bash script to Gradle and a continuous delivery setup for our Docker images.
