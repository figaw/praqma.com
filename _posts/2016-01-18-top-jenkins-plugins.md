---
title:      Top Jenkins plugins
caption:    Pragmatic plugins for pupils and pros alike.
tags:       [Jenkins]
avatar:     /images/stories/cool-jenkins.png
nav-weight: 40
---

## A list of pragmatic plugins for pupils and pros alike.
{: .subtitle}

In bygone times, Praqma composed a list of useful Jenkins plugins to spice up your CI life with. 
However, 2013 is ancient history and we've decided that our list is long overdue for a refreshing rewrite.
Now we present to you an updated list of handy plugins fixing problems you didn't even realize you had.

<!--break-->

## Overview

* [Server plugins](#server-plugins)
    * [Server Monitoring](#server-monitoring)
    * [Nested views](#nested-views)
    * [Restarting safely](#restarting-safely)       
    * [Green balls](#green-balls)
* [Pipeline plugins](#pipeline-plugins)
    * [Build pipelines](#build-pipelines)
    * [Build badges and promotions](#build-badges-and-promotions)
    * [Building a better dashboard](#building-a-better-dashboard)       
* [Job plugins](#job-plugins)
    * [Jobs as code](#jobs-as-code)
    * [Job scripting and parameterization](#job-scripting-and-parameterization)
    * [Analysis](#analysis)
        * [Compiler warnings](#compiler-warnings)
        * [Test results and coverage](#test-results-and-coverage)
        * [Task scanning](#task-scanning) 
    * [Job configuration history](#job-configuration-history)
* [Wrap-up](#wrap-up)

## Server plugins <a name="server-plugins" />

### Server monitoring <a name="server-monitoring" />
*Plugins:* [Disk Usage](https://wiki.jenkins-ci.org/display/JENKINS/Disk+Usage+Plugin+Plugin), [Monitoring](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring) 

Keeping a watchful eye on your server lets you avoid some sticky situations.
Why not employ some plugins to provide basic monitoring of your master and slaves?
Use the Disk Usage plugin to keep your disk space in check and the Monitoring plugin to oversee a whole slew of interesting metrics in its very own monitoring page.

![Monitoring bits](/images/stories/top-plugins/monitoring.png){: .pic .large .center}

### Nested views <a name="nested-views" />
*Plugin:* [Nested View](https://wiki.jenkins-ci.org/display/JENKINS/Nested+View+Plugin)

Organizing your jobs into separate views helps keep your Jenkins organized.
Larger Jenkins instances, however, are quickly overwhelmed with dozens of views.
Sadly, vanilla Jenkins doesn't allow for grouping of views, but that's where the Nested View plugin comes in.
It allows you to group relevant views together under a parent view, creating comfortably traversed view trees.

![Team nested views](/images/stories/top-plugins/nested-view.png){: .pic .large .center}

### Restarting safely <a name="restarting-safely" />
*Plugin:* [SafeRestart](https://wiki.jenkins-ci.org/display/JENKINS/SafeRestart+Plugin)

Jenkins needs to restart every now and then, oftentimes when installing or updating plugins.
This plugin allows you to put new jobs on hold and reboot the server once your running jobs are finished.
The reboot can be scheduled from both the Jenkins configuration page and the main dashboard.

![SafeRestart button](/images/stories/top-plugins/safe-restart.png){: .pic .large .center}

### Green balls <a name="green-balls" />
*Plugin*: [Green Balls](https://wiki.jenkins-ci.org/display/JENKINS/Green+Balls)

Jenkins uses blue balls to mark successful builds [for a reason.](https://jenkins-ci.org/blog/2012/03/13/why-does-jenkins-have-blue-balls/)
However, enough people prefer green balls for this plugin, which changes the ball color, to be one of the most popular plugins out there.
 
![Green balls](/images/stories/top-plugins/green-balls.png){: .pic .large .center} 

## Pipeline plugins <a name="pipeline-plugins" />

### Build pipelines <a name="build-pipelines" />
*Plugin:* [Build Pipeline](https://wiki.jenkins-ci.org/display/JENKINS/Build+Pipeline+Plugin)

The Build Pipeline plugin visualizes your up- and downstream connected jobs in a prettified view and helps you get a nice overview of your build process, start to finish.
It also comes with the handy ability to add manual triggers to your jobs. 
This allows you to fit external processes, such as a review before deployment, into your pipeline.

![Build pipeline preview](/images/stories/top-plugins/build-pipeline.png){: .pic .large .center}

### Build badges and promotions <a name="build-badges-and-promotions" />
*Plugins:* [Promoted Builds](https://wiki.jenkins-ci.org/display/JENKINS/Promoted+Builds+Plugin), [Build Trigger Badge](https://wiki.jenkins-ci.org/display/JENKINS/Build+Trigger+Badge+Plugin)

Promote your builds as they go and decorate them with informative badges.
The Build Trigger Badge plugin decorates your builds with a small badge depicting the build cause. 
Was it triggered manually, by an SCM change, or did it come from upstream?

   
Use the Promoted Builds plugin to take it one step further, promoting and decorating your builds throughout your entire pipeline.
With every passing step, you can decorate your build with a badge depicting its success.
Just a glance at a build will tell you what originally started it and how well it performed further down the pipeline.
For the creative users out there, it's possible to trigger jobs when certain promotion levels are met.

![Promoted builds example](/images/stories/top-plugins/promoted-builds.png){: .pic .large .center}


### Building a better dashboard <a name="building-a-better-dashboard" />
*Plugins:* [Build Monitor](https://wiki.jenkins-ci.org/display/JENKINS/Build+Monitor+Plugin), [Dashboard View](https://wiki.jenkins-ci.org/display/JENKINS/Dashboard+View), [Radiator View](https://wiki.jenkins-ci.org/display/JENKINS/Radiator+View+Plugin)  

Piece together your dream dashboard and display the status of your key jobs on that big monitor by the coffee machine. 
Sip  your coffee with pride as you bask in its green glow (or scurry back to your desk to fix that last commit instead).
Gather and display interesting statistics about your builds on a different dashboard, letting you to identify fragile parts of your build process and pinpoint its ills. 

![Build Monitor dashboard](/images/stories/top-plugins/build-monitor.png){: .pic .large .center}

## Job plugins <a name="job-plugins" />

### Jobs as code <a name="jobs-as-code" />
*Plugin:* [Job DSL](https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin)

Storing your job and pipeline configuration as code comes with a myriad of advantages.
It allows you to version control your configuration, regenerate your jobs on the fly, spin up and configure new Jenkins instances in a heartbeat, etc.
The Jenkins Job DSL is a popular and exceptionally well documented Groovy DSL for configuring pipelines and jobs via scripts.
Sinking your teeth into this one will doubtlessly open up some new doors.

![Job DSL snippet](/images/stories/top-plugins/job-dsl.png){: .pic .large .center}

### Job scripting and parameterization <a name="job-scripting-and-parameterization" />
*Plugins:* [EnvInject](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin), [Environment Script](https://wiki.jenkins-ci.org/display/JENKINS/Environment+Script+Plugin)

Reduce redundancy and increase reusability of your jobs by parameterizing their variable values.
Use the EnvInject and Environment Script plugin to help you inject necessary values into your jobs.
They're surprisingly flexible and can really help you construct generic jobs.
As an added bonus, once your jobs are parameterized, it will be trivial to convert them to clean scripts using Job DSL. 

![Environment Script example](/images/stories/top-plugins/environment-script.png){: .pic .large .center}

### Analysis, Analysis, Analysis <a name="analysis" />
A good build pipeline records a vast assortment of interesting metrics regarding your code (and an even better pipeline sets warnings and thresholds on them).
Below are a few plugins to help you analyze and point out frailties in your code. 

#### Compiler warnings <a name="compiler-warnings" />
*Plugin:* [Warnings](https://wiki.jenkins-ci.org/display/JENKINS/Warnings+Plugin)

Keep track of compiler warnings thrown in your builds, they're a great indicator of potential problems in the code. 
Don't panic if your first build returns hundreds of issues, trends are more important than absolute values.
You can steadily bring those numbers down with diligence and you'll rest easy knowing the code gets a little better with every commit.

![Warnings report](/images/stories/top-plugins/warnings.png){: .pic .large .center}

#### Test results and coverage <a name="test-results-and-coverage" />
*Plugins:* [xunit](https://wiki.jenkins-ci.org/display/JENKINS/xunit+Plugin), [junit](https://wiki.jenkins-ci.org/display/JENKINS/junit+Plugin), [nunit](https://wiki.jenkins-ci.org/display/JENKINS/nunit+Plugin), [Test Results Analyzer](https://wiki.jenkins-ci.org/display/JENKINS/Test+Results+Analyzer+Plugin)   

Round up the results of your tests and plot them in helpful graphs and statistics. (You do have tests, don't you?)
Identify fragile tests and invest some time to fortify them (or the code they're testing).   
Keep an eye on your test coverage trend, challenge yourself to increase that percentage with every commit.

![Test results graph](/images/stories/top-plugins/test-results.png){: .pic .large .center}

#### Task scanning <a name="task-scanning" />
*Plugin:* [Task Scanner](https://wiki.jenkins-ci.org/display/JENKINS/Task+Scanner+Plugin)   

Remember that `//TODO` you left last friday? Or that `@deprecated` method you still need to replace throughout the code? 
We know you'll go back to fix them eventually, but don't let them pile up too high, use the Task Scanner plugin to keep them in check. 
It comes with a bunch of handy features like trend reports, prioritization and thresholds.

![Task Scanner report](/images/stories/top-plugins/task-scanner.png){: .pic .large .center}

### Job configuration history <a name="job-configuration-history" />
*Plugin:* [JobConfigHistory](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)

Useful for keeping track of what changes you (or that bozo Jim across the room) have made to your Jenkins jobs.
The plugin stores a copy of a job's configuration whenever it is changed, allowing for change tracking, diffing and painless configuration restoration.

![JobConfigHistory diff](/images/stories/top-plugins/job-config-history.png){: .pic .large .center}

## Wrap-up <a name="wrap-up" />

Hungry for more Jenkins customization? 
Dig around in the list of available plugins under the Jenkins plugin manager.
Search and ye shall find!

Did we miss an awesome plugin? Perhaps even an up-and-coming plugin you've been working on? Let us know! We'd love to try it out. If we like it, it might even end up on the list!