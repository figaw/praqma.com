---
title:      Top Jenkins plugins
caption:    A catchy subtitle!
tags:       [Jenkins]
avatar:     /images/stories/cool-jenkins.png
nav-weight: 40
---

## A comprehensive list for pupils and pros alike.
{: .subtitle}

In bygone times, Praqma composed a list of useful Jenkins plugins to spice up your CI life with. 
However, 2013 is ancient history and we've decided that our list is long overdue for a refreshing rewrite.
Now we present to you an updated list of practical plugins fixing problems you didn't even realize you had.

<!--break-->

## Job configuration history
*Plugin:* [JobConfigHistory](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)

Useful for keeping track of what changes you (or that bozo Jim across the room) have made to your Jenkins jobs.
The plugin stores a copy of a job's configuration whenever it is changed, allowing for change tracking, diffing and painless configuration restoration.

![JobConfigHistory diff](/images/stories/top-plugins/job-config-history.png){: .pic .large .center}

## Restarting safely
*Plugin:* [SafeRestart](https://wiki.jenkins-ci.org/display/JENKINS/SafeRestart+Plugin)

Jenkins needs to restart every now and then, oftentimes when installing or updating plugins.
This plugin allows you to put new jobs on hold and reboot the server once your running jobs are finished.
The reboot can be scheduled from both the Jenkins configuration page and the main dashboard.

![SafeRestart button](/images/stories/top-plugins/safe-restart.png){: .pic .large .center}

## Publishing builds to your server master
Having more Jenkins servers, maybe one per team, you should publish the most significant jobs to a Jenkins company master.
Use the plug-in called Build Publisher Pluginand configure the jobs to publish to the company master.


https://wiki.jenkins-ci.org/display/JENKINS/Build+Publisher+Plugin

## Jenkins server monitoring
If you do not employ a full blown server monitoring system, you should enable basic monitoring of your build system and slaves.
Track disk usage for both builds and Jenkins master with the plug-in called Disk Usage Plugin


https://wiki.jenkins-ci.org/display/JENKINS/Disk+Usage+Plugin
{image}


Also install the plug-in named Monitoring to give a monitoring page in Jenkins on the front page. 
There you can monitor key metrics on the Jenkins server like memory usage and processes.


https://wiki.jenkins-ci.org/display/JENKINS/Monitoring


## Jenkins user identities
Jenkins will automatically gather users from your SCM commit when it builds jobs. 
If those users do not match your Jenkins server users, this little nice plug-in can bundle your SCM user account with your Jenkins account. 
This way the monitoring can send the mail to the right users (your Jenkins user).
The plugin is called: additional-identities-plugin


https://wiki.jenkins-ci.org/display/JENKINS/Additional+Identities+Plugin 

## Build pipelines
We favor build pipelines because they provide a nice visual overview, support the divide and conquer principles about splitting the work between jobs.
It's also easy to understand that one man's ceiling is another man's floor, as commits pass through the pipeline quality gates from job to job.
Use the plugin name Build Pipeline Plugin
Configure up- and downstream project (last step is a manually triggered release job!), then create a new view (tab on the frontpage) and choose a pipeline view type.


https://wiki.jenkins-ci.org/display/JENKINS/Build+Pipeline+Plugin


{image}


## Visualization with pipelines
Doing pipelines with just a few jobs, it nice to have an overview as developer of the first job in the pipeline. 
You are are constantly monitoring it anyway, so put some niceness to it with these two plug-ins;
First the simple, yet informative plug-in named Build Trigger Badge Plugin.
This plugin will add small icons beside every build, showing if the build was started by a SCM change, a user, or changes in upstream jobs.


https://wiki.jenkins-ci.org/display/JENKINS/Build+Trigger+Badge+Plugin


The pipelines are also well fitted for larger wall displays - especially making those red builds visible.

## Visualization with promotion levels
   
Next, after using pipelines, use the promotion concept to add visual effects. 
You can add a promotion process to a job, that for example triggers when a downstream job completes. 
The promotion can have a little star icon beside the builds like the trigger badge plug-in.
   

We often add a small promotion icon for each quality level in our pipeline that a bunch of commits go through. 
I will then as developer be able to see that the first job I started with a commit, later had high quality, as it got promotion start from both static analysis and functional tests as it passed. 
It gives a quick overview of the pipeline process on the first job.


Name of the plug-in: Jenkins promoted builds plugin


http://wiki.jenkins-ci.org/display/JENKINS/Promoted+Builds+Plugin


By the way, the promotion plug-in is also very useful for other situations, like starting jobs based on other jobs promotion etc.


## Jenkins awareness
Make your organization follow your Jenkins server, and make it visible to every one how your build status of the most important projects are.
It's nice to be able poke your colleague over lunch that he should be fixing the red build instead of eating.
The plug-in named Radiator View Pluginit fitted for large screens and uses very red color when something is broken. 
Configure a radiator view and add your important jobs. Show the URL in a browser on the large screen.


https://wiki.jenkins-ci.org/display/JENKINS/Radiator+View+Plugin


If you want to summarize some statistics from your builds, be either one project or across projects, define a dashboard view. It's useful in addition to publishing important jobs to the company server as you can then show some stats on the important jobs as well.


The plugin is named: Dashboard View


https://wiki.jenkins-ci.org/display/JENKINS/Dashboard+View


There are lots of awareness plug-ins out there - which one is your favourite ? Add a comment.


## Simple daily views
While we are at the visual stuff we also recommend a few plugins that help creating nice views and help organize your Jenkins jobs.


Often, you will find yourself with quite a few jobs. 
These jobs are by default just put in a long list, or you may already have created some views for them.
   

Since your aim is to have Jenkins being a developers daily tool, you should aim to keep it clean and simple.
   

The following plug-ins will help you organize jobs and order views so it's easier and faster to use for the developers.
   

The most important thing in CI is visibility. 
Build pipelines are great ways of achieving this. 
A pipeline is a view showing all stages in your verification process, and it shows which stages that failed. 
It's also a great way to show the manager how far you are in the project if you are using TDD (Test Driven Development).


https://wiki.jenkins-ci.org/display/JENKINS/Build+Pipeline+Plugin


The build pipeline also gives you the opportunity to create one entry to all your projects, which is achieved with the Nested View Plugin this allows you to put in multiple build chains as one project.


https://wiki.jenkins-ci.org/display/JENKINS/Nested+View+Plugin


## Important groups of plugins
For almost any successful Jenkins instance running a number of jobs for a project we see some group of plugins that we almost always use as well.


We cannot list every such plugin, as they depend heavily on the project, the programming language, and other technologies, but have a look at these common types of plugins.


### Compiler warnings
You should always scan for compiler warnings. 
The Warnings Plugin is probably one of the most used. 
You configure it to scan your console log of the build for compiler warnings. 
It supports a large number of plug-ins or you can use your regexp-fu to write your own scanner.


https://wiki.jenkins-ci.org/display/JENKINS/Warnings+Plugin


### Track unit tests results
    
Of course your project has some unit tests to run! 
So it's natural to let Jenkins keep track if they are failing. 
Make your build run the tests and configure Jenkins to gather the resulting output files. 
They typically are in some kind of xunit format, so have a look at the plug-in named xUnit Plugin or the Jenkins build-in Publish JUnit test result report post-build action. 
Maybe MSTest if you are in a Windows world.

### Test coverage
    
Running your unit test is more fun if you measure coverage. 
Install some of the coverage plug-ins that match your generated coverage format output.

{image}

### FIXME and TODO
    
Do you also forget your FIXME and TODOs in your code? 
Install the Task Scanner Plugin and make it scan for those words and you will be surprised by such a simple static analysis on your code.


https://wiki.jenkins-ci.org/display/JENKINS/Task+Scanner+Plugin


## Plugin Scripting and parameters
   
Use a parametrized scripting approach on your Jenkins jobs. We would normally say that if your build steps is not a oneliner, you put to much build information in your Jenkins.
Think about revision control everything that directly affects your builds and that later on is useful is you should be able to rebuild the project.
By a parametrized approach we mean taking advantages of parsing variable values from job to job in a build pipeline, and using variable during build to control for example which build configuration is used, which functional test types are executed etc.


There is a large collection of plug-ins to help with these things. 
We currently uses mostly the following.
Install the plug-in named EnvInject Plugin


https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin


Use the plugin to insert key,value pairs into the environment before building. 
Your build scripts can then use the variables and you can use them in your job configuration. 
Eg. to determine which files you need to upload.


Also install the plug-in named Environment Script Plugin


https://wiki.jenkins-ci.org/display/JENKINS/Environment+Script+Plugin


Use the different features of this plug-in also to load environment variables. 
It can inject the values from script files and simple scripts directly in Jenkins.


# ancient history intro


For our Jenkins CI User Event 2013 we created a small folder with some useful tips and ideas for the novice Jenkins user. 
There might also be a little tip or trick for you who are more advanced.

 
The folder is called Jenkins - Rules of Thumb
 

To support many of our recommendations and tips we maintain this list of plug-ins that we currently like. 
Actually we like them so much that we see ourselves install them on most of our Jenkins servers we use ourselves and at our customers.
You should really try these plug-ins. 
Read our folder as well.


The plug-in names listed refer to the names used when you browse the list of available plug-ins on your Jenkins server under Manage Jenkins -> Manage Plug-ins


We used Jenkins 1.509.1 (a LTS version) writing this list, but the plug-ins are available on most older and never versions as well.


A small tip is to go the Available tab under Manage Plugins in your Jenkins and search for your tool or buzzword. 
Be inspired as you will surely find something interesting related to the tools used in your project. 
If you're using a tool chances are that there might exists a plugin you can use for your tool in Jenkins.


Now...on with the list of useful plugins!
