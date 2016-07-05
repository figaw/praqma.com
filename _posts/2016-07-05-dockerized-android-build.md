---
title: Building Android aosp in Docker
tags: [Android, Docker] 
avatar: /images/stories/Android-Docker.png
nav-weight: 40
---

Dockerizing different environments is becoming more and more popular. We got the idea to make an environment that would allow us to build Android aosp for any target in a Docker container. As a foundation, we decide to build Android Marshmallow (6.0.1) for Nexus9.
<!--break-->
Android build has limitation for HW. It requires minimum: a 64-bit environment for Gingerbread (2.3.x) and newer versions, including the master branch, at least 100GB of free disk space for a checkout, 150GB for a single build. Read more about [HW requirements](https://source.android.com/source/requirements.html)
We tested this environment on AWS and DigitalOcean machines. For better performance, we would recommend using the host with 8 cores, 32Gb RAM and at least 200Gb SSD. We found a few issues using Ubuntu 14.04LTS as a host OS for building Android aosp in Docker container, see "Known issues" below. So, we would recommend RedHat or Ubuntu 16.04 LTS as a host OS. 
  
## Preparations

There is a setup for building Android Marshmallow, branch: *android-6.0.1_r40*, for Nexus9 kernel: *aosp_flo*. We suggest to run the setup by the root user. The Marshmallow branch requires openjdk-7, but if you want to build a master branch you will have to upgrade Java in the Dockerfile to  openjdk-8.

This setup has been tested on:

- AWS EC2 instance c4.4xlarge 30 Gb RAM, 16VCPU 62ECU 320 Gb SSD. OS Ubuntu Trusty 14.04 LTS, kernel version: 3.13.0-77-generic. Docker version 1.11.2, Docker compose version 1.7.1

- AWS EC2 instance m4.4xlarge 64 Gb RAM Pure, 16VCPU 240 Gb SSD. OS RedHat RHEL 7.2, kernel version: 3.10.0-327.el7.x86_64. Docker version 1.11.2, Docker compose version 1.7.1

- DigitalOcean droplet 16 Gb RAM, 8 VCPU 160 Gb SSD. OS Ubuntu Xenial 16.04 LTS, kernel version 4.4.0-24-generic. Docker version 1.11.2, Docker compose version 1.7.1 
In this documentation, we assume that you have a similar host with GIT, Docker v1.11.2 and docker-compose v1.7.1 installed. 

See [Install Docker on Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
See [Install Docker on RedHat](https://docs.docker.com/engine/installation/linux/rhel/)

## Installation
Download Android sources. To save a build time this setup is supposed to map sources dir as a volume disk. You will do it once and be able to reuse the same sources for many containers. We follow instructions from the [source.android.com](https://source.android.com/source/downloading.html)

Install Repo tool and download sources

	mkdir ~/bin
	PATH=~/bin:$PATH
	curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
	chmod a+x ~/bin/repo
	# Repo is a python script, so
	apt-get install python

Make a directory download the sources to. Go to this directory and set git global configuration:

	git config --global user.name "Your Name"
	git config --global user.email "you@example.com"
	mdkir ~/source
	cd ~/source
	# -b android-6.0.1_r40 is to checkout sources for Nexus 9
	repo init -u https://android.googlesource.com/platform/manifest -b android-6.0.1_r40
	repo sync

See [Installing Repo and Download sources](https://source.android.com/source/downloading.html) for more details

Clone this git project
	
	cd ~/
	git clone https://github.com/Praqma/AndroidAospInDocker.git

Make two more directories: one for ccache and one to set build output from the repo directory

	mkdir ~/ccache
	mkdir ~/build

Change the docker-compose file with new paths: Set the paths to the source directory, ccache and build output directories on the host.
The Dockerfile and running script you will find on [this](https://github.com/Praqma/AndroidAospInDocker.git) GitHub repo.

## The build time!

Go to the git repo with Dockerfile you downloaded, and run:

	cd ~/AndroidAospInDocker
	docker-compose up -d --build


For the first time, the build can take about 30min on the largest of our instances. After that you will be able to use ccache and the build will take about 15min. 

You can follow the building log by using:

	docker logs -f <ContainerID>

After the build finishes you will find an image in the directory, you redirected the output to.

## Known issues

### Parallel jobs execution on Ubuntu 14.04

For reasons we are still investigating, 'make' build in Docker container can not support more than three parallel jobs. It leads to defunct java processes those can not be killed any other way than reboot the host. There is a few reference on the problems with Java in Docker could be connected with this particular problem. This issue observed only on Ubuntu 14.04, 16.04 worked just fine. It is working fine for RedHat RHEL 7.2 also.