---
title:      A Pragmatic Workflow
caption:    A workflow automated and optimized for simplicity
tags:       [How We Work]
avatar:     /images/stories/jenkinsdocker.png
nav-weight: 40
---

Imagine a workflow so sophisticated, that you couldn't break the integration branch even if you tried, and at the same time you would'nt have to go anywhere else than you terminal and your favorite IDE to manage issues, promotions and deploys.
{: .highlight}

<!--break-->

## The ideal workflow from the perspective of a developer

So as a developer I'd like a workflow that goes like this:

Tasks and issues are groomed and ready to work on, when I want to work on a task I set up a branch for the purpose and when I'm done with my work I deliver it for integration - and hopefully I'll never have to go back to that again; The Jenkins automation backend tests and verifies that everything is OK, and if not I get a notification. The issues are promoted automatically, through the task management system.

We have given ourselves the luxury to choose a simple minimalistic tool-stack that supports our ideal wokflow. We use it for a wide range of our deliveries and it's easy to demonstrate, since most of these are Open Source.

## Ingredients

* We're using git
* `master` is the interation branch if it exist locally - otherwise its' `gh-pages`
* We're using GitHub
* Our taskes are in [GitHub issues](https://guides.github.com/features/issues/)
* We have a [waffle.io](http://waffle.io) on top of our GitHub issues
* We're using [Jenkins](http://www.jenkins-ci.org), the [Git plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin) and the [Pretested Integration Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Pretested+Integration+Plugin)
* We're using a super simple branching strategy as described in the [automated Josra Flow](http://www.josra.org/blog/An-automated-git-branching-strategy.html).
* The Pretested Integration Plugin is monitoring `origin/ready/**` branches
* We're using [`ghi`](https://github.com/stephencelis/ghi)

## Here's what happens automatically

### GitHub issues integration to git commits messages
* When a commit message mentions an issue number prefixed with a # (hash) a reference to that partiuclar commit is automatically added to the issue.
* It the commit message is mentiones one of the [keywords](https://help.github.com/articles/closing-issues-via-commit-messages/){: target="_blank"} `fixed`, `resolved` or `closed` before the issue - It's automatically closed.

### In Waffle.io integration with branch naming conventions and labels

* When a branch is created that mentions a issue number: like this `112-fix`or `fix-#112` and it's pushed to `origin` then waffle.io will mark issue #112 as _work in progress_.
* The same effect can occur event without actually pushing the branch to `origin`, but simply by adding the label that Waffle.io uses for marking work in progress (we use the label "Status - In progress").
* When the label that waffle.io uses to indicate an issue is workable (groomed) is a signed to an issue - it's automatically moved to the _Workable_ column (we use the label "Status - workable" for this)

### On Jenkins CI
* The Pretested Integration Plugin is setup to monitor when a branch is push that follows the naming convention `ready/*`. Then the integration onto the GitGub default branch - typically `master` or `gh-pages`-  runs automatically.
* When the integration is done the integration is pushed to `origin` and the `ready/*` branch is removed.

## Setting up labels

![Labels](/images/stories/ghi-labels.png){: .pic .right .small} We're using the same set of labels in all our GitHub repositories and in the flow wetween columns in waffle.io.

The _action_ labels are set to indicate that the person who the issue is assigned to needs to take som kind af action - the issue is in a blocked state.

The _priority_ labels follows the MoSCow rules and are set my the issue or product owner.

The _size_ labels indicates the estimated workload on the developer or asignee and are set by the person who shal implement the solution. Size 0 is used to indicate that the issue is not workable - is't a briefing or an epic. It describes something that will have to be broken into task. _Small_ Indicates  that it can be done in less tha two hours. _Medium_ is up to five hours of work, and _large_ is up to a full days work. If the estimate is _too big_ then it indicates that it will take more than a day to implement and it will have to be broken down.

The _status_ lables are the ones that we use in waffle.io to indcate the promotions between columns, except the black _duplicate_ which allows you to close a case, without any other comment, than a reference to the issue it duplicates.

### On the client we use ghi

[GHI](https://github.com/stephencelis/ghi) is a ruby gem you can install simply by running:

{% highlight shell %}
gem install ghi
{% endhighlight %}

It allows you to manipulate all the GitHub issues, labels and milstones. All you have to do is to have your current working directory in a clone of a GitHub repo, and the ghi command you issue will operate on the issues there.

Ghi allows us to create all these labels in a new repository like this:

{% highlight shell %}
ghi label "Action - awaiting feed-back" -c 6EB82C
ghi label "Action - needs grooming"     -c 009800
ghi label "Prio 1 - must have"          -c E83D0F
ghi label "Prio 2 - should have"        -c EB6420
ghi label "Prio 3 - could have"         -c E8850F
ghi label "Prio 4 - won't have"         -c E8A80F
ghi label "Size 0 - Briefing"           -c C7DEF8
ghi label "Size 1 - small"              -c 20B4E5
ghi label "Size 2 - medium"             -c 208FE5
ghi label "Size 3 - large"              -c 0052CC
ghi label "Size 4 - too big"            -c 100B6B
ghi label "Status - duplicate"          -c 111111
ghi label "Status - workable"           -c EDEDED
ghi label "Status - in progress"        -c EDEDED
ghi label "Status - up Next"            -c EEEEEE
{% endhighlight %}

If it really is a brand new repo, or at least on where issues hasn't been used before, you probably want to start with removing all the default labels to get a fresh start:

{% highlight shell %}
ghi label -l | sed "s/\'/\\\'/g" | xargs -I %lb sh -c 'ghi label -D "%lb"'
{% endhighlight  %}

## Jenkins will do the integration

Jenkins is used to do the integration. So a dedicated job will monitor any branch that is named `ready/**` and when it finds one it will checkout the default branch, integrate the branch the triggered it, commit and then runn the toll-gate test. If the buil is successful the new commit is pushed to origin and if it's not then a message goes out to the committer.

This is all done simply by installing the Pretested Integration Plugin and then just go with the default settings.

## Git aliases and extensions

We have created a handful of Git aliases that we're using to support this flow.

{% highlight shell %}
[alias]
  addremove = add -A .
  deliver = "!BRANCH=`git symbolic-ref --short HEAD`;REMOTEBRANCH=ready/$BRANCH;   git push origin $BRANCH:$REMOTEBRANCH && git branch -m delivered/$BRANCH"
  co = checkout
  wrapup = "!f() { MSG='close #'`git symbolic-ref --short HEAD | sed 's/-/ /g'`; echo $MSG > ~/WRAPUP_EDITMSG; git addremove; git commit -F ~/WRAPUP_EDITMSG; rm ~/WRAPUP_EDITMSG; }; f"
  purge-all-delivered = "!f() { git co master; git branch | grep 'delivered/' |   sed 's/delivered\\///g' | xargs -I %br sh -c 'git branch -D delivered/%br; git   push origin :%br' 2>/dev/null; }; f "
  default-branch = "!f(){ if git show-ref refs/heads/master >/dev/null 2>&1; then   echo master; elif git show-ref refs/heads/gh-pages >/dev/null 2>&1; then echo   gh-pages; fi; }; f"
  issue-branch = "!f() { MATCH=#$1:; ghi show $1 2>/dev/null | grep $MATCH | sed   s/$MATCH/$1/g | sed 's/ /-/g' | sed s/[:\\']//g; }; f"
  issue-wip = "!f() { ghi label $1 'Status - in progress'; }; f"
  work-on	= "!f() { BRANCH=`git issue-branch $1`; git fetch origin; git co $BRANCH   2> /dev/null || git co -b $BRANCH origin/`git default-branch`; git issue-wip $1;   }; f"
{% endhighlight  %}

To use these aliases simply copy them to the aliases section of your `.gitconfig` file:

{% highlight shell %}
git config --global --edit
{% endhighlight  %}

### What does the aliases do?

`git issue-wip <issue-number>` will set the label used to mark an issue as _work in progress_ In waffle.io it will be moved to the corresponding column.

`git issue-branch <issue-number` will take the title of the issue and based on that construct a string, that will essentially make up a good branch name for working on this issue.

`git default-branch` we use this to determine if our integration branch is `master` or `gh-pages` simply assuming that if `master` exists then that takes precedence.

`git work-on <issue-number>` will fetch from origin and branch off from the `<default-branch>/origin` this as the intended side effect, that when you create a branch off a remote brance rather than a local

`git addremove` is the taking every change in the workspace and adding or removing it to the index. If you're familiar with Mercurial Hg you know the usefullness of this already.

`git wrapup` Used to automatically `addremove` everything and then commit it with a close message - and the title of the issue.

`git deliver` will simply push your current branch to a `ready/<current-branch>` to the remote and then rename your local branch to `delivered/<current-branch>`. You might not wnat to delete your branch just yet, until you've seen that it's succesfully integrated.

`git purge-all-delivered` will remove all local branches named `delivered/**` and at the same time remove any branches you may have pushed to origin - without the `ready/**` prefix.

## User scenarios
With this set of ingridients we can carry out a series of useful everyday scenarios without even leving the terminal

### Work on an existing issue

In my terminal I can simply run `ghi list --mine` to get a list of the isses that are assigend to me:

![ghi list --mine](/images/stories/ghi-list-mine.png){: .pic .center .large}

The I can run `git work-on 200` to work on this blog post. It will creaate a branch called `200-Story-on-how-we-work`. I fact I already did, you see in the picture above that the issue is already marked as _work in progress_.

If you look at in [waffle](http://waffle.io/praqma/praqma.com) you'll see that it's moved to the _in progress_ column.

![waffle](/images/stories/waffle-wip.png){: .pic .center .large}

When I'm done I simply run `git wrapup 200`. The command will add, remove and commit everything with a commet message in the format `close #200 Story on how we work`

![git wrapup](/images/stories/git-wrapup.png){: .pic .center .medium}

When I run `git deliver` it will kick off the Jenkins job I have waiting to do the integation. A few seconds later it's integrated:

![Jenkins Ready Branch](/images/stories/jenkins-ready-branch.png){: .pic .center .medium}

In waffle, the issue is automatically moved to _done_ because of my commit message mentioning `close #200`.

![waffle](/images/stories/waffle-done.png){: .pic .center .large}

And on GitHub issues the log is maintained nicely - even with a reference to the commit I made, and all the various labels being applied:

![GitHub issues](/images/stories/github-issue.png){: .pic .center .large}

### Creating a new issue and working on that

Ghi suports that you can create new issues locally, right in you editor all you have to do is to run `ghi open`. I use Atom as my favorite editor but for creating issues I like to stay in my terminal so I have instructed ghi to use nano, simply by adding it to my `.gitconfig` like this:

{% highlight shell %}
[ghi]
  editor = nano
{% endhighlight %}

The first line becomes the title and the rest of the file content is added as the issue description. When I close the file in nano, ghi displays the number of the newly created issue: `201` and I can simply continue with business as usual `git work-on 201`.

Hack, hack hack.
