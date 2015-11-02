---
title: LinkChecker - Dockerized
tags: [Linkchecker, Gijeli, Jekyll, Jenkins]
avatar: /images/blog/placeholder.png
author: Waqar Ali Zaidi
---

The reason of dockerizing linkchecker is to facilitate Praqma's [Gijeli set-up](/pages/blog/GiJeLi-tool-stack-howto.html) to produce report for web projects. There are other docker images of linkchecker out there but we find them lacking behind to entertain _stable automated builds._
Any applied change to image will trig a new jenkins job and build process will tag each release with version number, resources are:
<!--break-->

- [Docker Hub](https://hub.docker.com/r/praqma/linkchecker/)
- [Context Repo.](https://github.com/Praqma/linkchecker)
- [Jenkins Job](http://code.praqma.net/ci/view/GiJeLi/job/linkchecker-docker_buld-and-publish/)


#Pulling Linkchecker Docker Image

All versions will be available at [Praqma's Docker Hub](https://hub.docker.com/r/praqma/linkchecker/) page.

**Command:**

```
  docker pull praqma/linkchecker:v[version number]
```

#Usage

Command structure:

  linux / iOS:

```
    docker run -v $(pwd):/data praqma/linkchecker:v[version number] [Options] [Output Options] [URL]
```

  Windows:

```
    docker run -v /$(pwd):\\data praqma/linkchecker:v[version number] [Options] [Output Options] [URL]
```


###Example:

For the sake of an example, using linckecker docker image we want to produce a report for **http://www.yourURL.com/** in **CSV** format named **linkchecker.report.csv** and place it in **/your-project/your-report-folder/**. To achieve this following steps will be taken:

1. Change terminal to _your-project_ directory
2. To make _your-report-folder_ with **write** privileges execute: <br>
```
  mkdir -p -m 777 your-report-folder
```

3. You are all set to run the following command:

```
docker run -v $(pwd):/data praqma/linkchecker:v1 --check-css --check-html --complete --anchors -F=csv/your-report-folder/linkchecker.report.csv http://www.yourURL.com/
```

....and keep patience or have a cup of coffee or tea may be, till your report is generated. For automated build we are using _step 2_ and _step 3_ to produce report for our _jekyll_ web projects' automated build process on _jenkins_ and don't forget to read our [Featured Article](/pages/blog/linkckecker-jekyll-flavor.html) for deeper dive into generating and publishing linkchecker report.

>For detailed overview of Linkchecker options see [Documentation](https://wummel.github.io/linkchecker/man1/linkchecker.1.html)
