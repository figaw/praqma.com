---
title:      Delving into Job DSL
subtitle:   Tips, tricks and notes on working with Jenkins Job DSL
caption:    Tips, tricks and notes on working with Jenkins Job DSL
tags:       [Jenkins, Job DSL]
avatar:     /images/stories/jenkins.png
nav-weight: 40
---

A short blog post for those working or wanting to work with the popular [Jenkins Job DSL](https://github.com/jenkinsci/job-dsl-plugin/wiki). 
After migrating a fair number of jobs, I’ve decided to jot down some notes for future projects. 
Hopefully these notes will also prove helpful to other Job DSL enthusiasts out there.

<!--break-->

## Overview
* [The right tools for the job](#tools)
    * [API viewer](#api-viewer)
    * [Job DSL Playground](#playground)
    * [Target job/config.xml](#target-config)
    * [Empty config.xml](#empty-config)                   
    * [Groovy skills](#groovy-skills)    
    * [Decent IDE](#ide)                            
    * [Regex](#regex)                                   
    * [Job DSL mailing list](#mailing-list)      
* [Tips, tricks and warnings](#tips-and-tricks)
    * [Keeping it clean](#keeping-it-clean)
    * [Order of elements](#order-of-elements)
    * [Don't DSLify defaults](#dont-dslify-defaults)
    * [Don't overdo it](#dont-overdo-it)
* [Wrap-up](#wrap-up)

## The right tools for the job <a name="tools" />
Indiana Jones never went anywhere without his trusty hat and whip. 
Neither should we dive into Job DSL without our own trustworthy tools. 
Here's a list of things that'll definitely come in handy.

### API viewer <a name="api-viewer" />
The [API viewer](https://jenkinsci.github.io/job-dsl-plugin/) is your main reference point for DSL methods. 
You'll find the majority of the methods you need right here. 
Refer to the wiki of individual plugins if you can't find them in the API viewer, as it doesn't list all plugins implementing Job DSL support through the new *ContextExtensionPoint* yet.
If nothing is mentioned on the plugin's wiki, it's off to [the configure block](https://github.com/jenkinsci/job-dsl-plugin/wiki/The-Configure-Block) for a custom implementation.

### Job DSL Playground <a name="playground" />
You can quickly test your DSL scripts on the [Job DSL playground ](http://job-dsl.herokuapp.com/). 
It lets you write and run snippets of code and immediately inspect the resulting XML file. 
It’s perfect for tinkering away at configure blocks due to the short feedback loop.
 
Note that, just like the API viewer, the playground doesn't support plugins implementing Job DSL support through the new *ContextExtensionPoint* yet. 
These plugins need to be installed on the server for their Job DSL implementation to work.

### Target job/config.xml <a name="target-config"/>
Keep the job you're converting and it's *config.xml* close. 
Comparing configurations using the Jenkins UI is a very fast way of making sure you're on the right path. 
If only the *config.xml* is provided, create a job from it!

It's easy to sneak a quick peek at an existing job's *config.xml* in Jenkins by simply browsing to it.
`http://myJenkins:8080/job/myJob/config.xml`

### Empty config.xml <a name="empty-config"/> 
It’s not uncommon for plugins to always have a small default block added to a job’s *config.xml* on job creation. 
There's no point in writing giant configure blocks for these XML blocks as they'll just be generated automatically anyway. 
Create or ask for an empty job's *config.xml* and take note of what's added automatically before churning out redundant code. 

### Groovy skills <a name="groovy-skills"/> 
Don't forget that you are working with a Groovy DSL and have full access to the power of Groovy while writing your scripts. 
If you have no experience with Groovy (or it's close relative Java), don’t hesitate to go through a tutorial!

### Decent IDE <a name="ide"/> 
Get yourself an IDE with Groovy support. 
Code completion and a fabulous color scheme really help when you’re dealing with bigger scripts.
 
My personal recommendation would be [IDEA](https://www.jetbrains.com/idea/).

### Regex <a name="regex"/>
You'll often find yourself digging through big XML files while converting jobs to Job DSL. 
Don't underestimate how much Regex can contribute to finding and transforming those XML blocks.

### Job DSL mailing list <a name="mailing-list"/> 
The [Job DSL mailing list](https://groups.google.com/d/forum/job-dsl-plugin) is the place to be when you’re having issues and questions you can’t seem to find an answer to.
Don't be afraid to ask your brothers-in-arms as they’re a helpful and friendly bunch.

## Tips, tricks and warnings <a name="tips-and-tricks"/> 
Here's a couple extra notes to keep in mind while you're hacking away at your scripts.

### Keeping it clean <a name="keeping-it-clean"/>
It's possible to put code in a separate script that's shared with your other scripts. 
This is a great way to avoid duplicate code and minimize cluttering in your scripts. 
Again, remember you have Groovy's toolkit at your disposal. Be creative!
 
#### A simple example

##### Shared script
    package utilities
     
    class Configures {
       static def CopyArtifactPermission (def job, String downstreamJobName) {
          job.with {
             it/'properties'/'hudson.plugins.copyartifact.CopyArtifactPermissionProperty'{
                'projectNameList' {
                   'string'(downstreamJobname)
                }
             }
          }
       }
    }

##### Job DSL script
    import utilities.Configures

    def myJob = job('step_one')
    Configures.CopyArtifactPermission(myJob, 'step_two')

##### XML output
    <project>
       <properties>
          <hudson.plugins.copyartifact.CopyArtifactPermissionProperty>
             <projectNameList>
                <string>step_two</string>
             </projectNameList>
          </hudson.plugins.copyartifact.CopyArtifactPermissionProperty>
       </properties>
    </project>
 

#### A fancier example

##### Shared script
    package utilities
     
    public class Defaults {
       static def getBaseJob(def job, Closure optionalClosure = null){
          job.with {
             description 'A default description.'
          }
          if(optionalClosure) {
             optionalClosure.delegate = job
             optionalClosure.run()
          }
       }
    }

##### Job DSL script
    import utilities.Defaults
     
    Defaults.getBaseJob(job('myJob')){
       scm {
          git ('git@github.com/william/the-juggler.git')
       }
    }

##### XML output
    <project>
       <description>A default description.</description>
       <scm class='hudson.plugins.git.GitSCM'>
          <userRemoteConfigs>
             <hudson.plugins.git.UserRemoteConfig>
                <url>git@github.com/william/the-juggler.git</url>
             </hudson.plugins.git.UserRemoteConfig>
          </userRemoteConfigs>
       </scm>
    </project>

### Order of elements <a name="order-of-elements"/>
The order of your job elements is often important, especially when it comes to build steps and publishers. 
Don't worry though, the order in which you add elements to your script is the order in which they’re added to the *config.xml* and the Jenkins job.

### Don’t DSLify defaults <a name="dont-dslify-defaults"/>
Always check your empty *config.xml* before starting work on another configure block or plugin configuration. 
You don't want to waste time by writing code to generate blocks that are added anyway at Job creation.

### Don’t overdo it <a name="dont-overdo-it"/>
A globally applicable creed that’s sadly often forgotten. 
Don’t burn hours churning out a fancy common library filled with helpful, reusable scripts when you really only have to migrate a simple job or two. 
Learning Job DSL and how to do it nicely is surprisingly fun, but don’t get too carried away.

## Wrap-up  <a name="wrap-up"/>
Hopefully you picked up a trick or two while going through this.
I hope to revisit this list and add to it whenever I'm working with Jenkins Job DSL.
If you have tips and tricks of your own, feel free to suggest them and I'll add them to the list (with due credit, of course!)
