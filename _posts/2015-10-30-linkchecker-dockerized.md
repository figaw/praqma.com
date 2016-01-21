---
title: LinkChecker - Dockerized
tags: [LinkChecker, Gijeli, Jekyll, Jenkins]
avatar: /images/stories/docker-linkchecker.4x3.png
author: Waqar Ali Zaidi
---

The reason for dockerizing LinkChecker is to facilitate Praqma's [Gijeli set-up](/stories/GiJeLi-tool-stack-howto) and produce reports for web projects. 
There are other docker images of LinkChecker out there, but we find them lacking when it comes to entertaining _stable automated builds._
Any change applied to the image will trigger a new Jenkins job and the build process will tag each release with a version number.
<!--break-->

### Resources 

- [Docker hub](https://hub.docker.com/r/praqma/linkchecker/)
- [Context repository](https://github.com/Praqma/linkchecker)
- [Jenkins job](http://code.praqma.net/ci/view/GiJeLi/job/linkchecker-docker_buld-and-publish/)


### Pulling LinkChecker Docker Image

All versions will be available at [Praqma's Docker Hub](https://hub.docker.com/r/praqma/linkchecker/).

```
  docker pull praqma/linkchecker:v[version number]
```

### Usage

  linux / iOS:

```
    docker run -v $(pwd):/data praqma/linkchecker:v[version number] [Options] [Output Options] [URL]
```

  Windows:

```
    docker run -v /$(pwd):\\data praqma/linkchecker:v[version number] [Options] [Output Options] [URL]
```


### Example

Using the LinkChecker Docker image we want to produce a report for **http://www.yourURL.com/** in **CSV** format named **linkchecker.report.csv** and place it in **/your-project/your-report-folder/**. 
To achieve this, the following steps will be taken:

1. cd to _your-project_ directory
2. Create _your-report-folder_ with **write** privileges. `mkdir -p -m 777 your-report-folder`
3. Run the LinkChecker Docker image with the following command:

```
docker run -v $(pwd):/data praqma/linkchecker:v1 --check-css --check-html --complete --anchors -F=csv/your-report-folder/linkchecker.report.csv http://www.yourURL.com/
```

Have a cup of coffee or tea while you wait for your report to be generated. 
We are using Jenkins jobs to automate report production for our _jekyll_ web projects. 
Don't forget to read our [extra article](/stories/linkckecker-jekyll-flavor) for a deeper dive into generating and publishing LinkChecker reports.

_For a detailed overview of LinkChecker options see the [documentation](https://wummel.github.io/linkchecker/man1/linkchecker.1.html)_
