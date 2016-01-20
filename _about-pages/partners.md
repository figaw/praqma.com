---
title:      Partners
caption:    We're proud of our partnerships - they're our friends
avatar:     /images/about/partners.png
nav-weight: 40

partners:
  -
    name: Atlassian
    logo: /images/partners/atlassian.png
    link: http://atlassian.com/
    description: |
      **Atlassian** is an enterprise software company that develops a
      suite of products supporting the entire product development process.  

      As an official Atlassian Expert Partner Praqma offers full-service
      assistance tailored to our clients' specific needs on the entire
      Atlassian tool suite. We provide consultancy, plugin development,
      training, support, and migration to Git and Stash from Subversion,
      ClearCase, etc.
  -
    name: IBM
    logo: /images/partners/ibm.png
    link: http://ibm.com/
    description: |
      **IBM Rational** is a pioneer, practice leader, and world-class
      platform provider in software and systems development.

      As an official IBM business partner Praqma provides consulting
      services across the entire IBM Rational portfolio. Over the years
      we have built strong skills and vast experience in designing,
      configuring, and implementing the IBM Rational software solutions.
      Through this we help our customers seize business opportunities
      and achieve their goals. 
  -
    name: Ranger4
    logo: /images/partners/ranger4.png
    link: http://ranger4.com/
    description: |
      **Ranger4** is all about harnessing technology to make IT development
      and operations teams' lives more fun. Their solutions help companies:  

      *   Take the pain out of managing complex software environments
      *   Make it possible to focus on delivering innovation, fast, to its costumers
      *   Get the answers needed, quickly, so issues can be fixed quickly and easily  

      Ranger4 is based out of the UK, however, has en extensive costumer
      base spread out over the most of Europe.
  -
    name: CloudBees
    logo: /images/partners/cloudbees.png
    link: http://cloudbees.com/
    description: |
      **CloudBees** are the innovative leaders when it comes to Java
      Platform as a Service (PaaS), and they are constantly working
      on turbo-charging the way Java applications are build and deployed
      to meet the rapid pace of business in an off-line and increasingly
      mobile world. Their platform features Jenkins in the cloud for
      its core development services.

      CloudBees are of course also the home of Jenkins, and of Koshuke
      Kawaguchi, the founder and lead developer of Jenkins.

      As a part of our cooperation with CloudBees we support Jenkins
      users in Europe, and we host the annual Jenkins CI User Event
      in Copenhagen.

      Furthermore this partnership gives us the opportunity to host
      CloudBees official Jenkins courses, as well as support the Enterprise
      version of Jenkins.
  -
    name: Docker
    logo: /images/partners/docker.png
    link: http://docker.com/
    description: |
      **Docker** Docker is the original author and primary sponsor of the Docker
      open source project. Together with the community of maintainers and
      contributors, Docker aims to deliver open tools to help developers build
      applications with open APIs to help sysadmins better manage these
      applications.

      We are consulting and training consulting partners with docker, which
      allows us to provide certified docker training and consulting services
      to our customers.
  -
    name: PRQA
    logo: /images/partners/prqa.png
    link: http://programmingresearch.com/
    description: |
      **PRQA** is the leader in defect prevention. Their solutions
      are designed to work hand-in-hand with developers, and to promote
      safe coding practices and proactively ensure the highest quality
      code for safety-critical and mission-critical systems.

      PRQAs are making tools that programmers use for static code analysis,
      and Praqma has helped their customers implementing these tools.
      To this end we have developed [the PRQA Plugin][6] for Jenkins
      CI Server, which support both the implementation of the tools,
      as well as the integration of these tools in customer's automated
      QA processes.

      PRQA started as one of our customers, and today we have a very
      valuable cooperation, where we jointly help our customers improving
      their software quality.
  -
    name: Styckybit
    logo: /images/partners/stickybit.png
    link: http://stickybit.se/
    description: |
      **Stickybit** has been created as an instrument for innovation
      and development. They work with model driven coding, optimization
      of ICT-systems, system integration and software development.

      The partnership with Stickybit means that we now have the most
      powerful offer within the "Øresunds region", when it comes to
      tools, configuration management and system integration.
  -
    name: DIKU Business Club
    logo: /images/partners/diku.png
    link: http://diku.dk/diku_business_club/
    description: |
      **DIKU Business Club** is a framework for the cooperation between
      business and DIKU (Datalogisk Institut København Universitet),
      concerning innovation, growth and knowledge sharing. With this
      partnership, Praqma is able to offer both students and sponsors
      exciting programming projects.

      By being a member of DIKU Business Club Praqma has the opportunity
      to have a very close dialog with the students at DIKU, to engage
      them in different projects, and offer them research projects
      and perhaps even job opportunities.

---

Partnerships are an important part of the way Praqma works. Working with handpicked partners from all over the world, we ensure that we can use their competences and combine our different skills and strengths. Our strong partnerhips, and the way we cooperate, ensure that we can give our customers the best possible service.

Below you find a list of our current partners.

<div class="partners">
  <div class="partners-wrapper">
    {% for p in page.partners %}
      <div class="partner">
        <a {% if p.link %}href="{{ p.link }}" {% endif %}target="_blank" title="{{ p.name }}"><img src="{{ p.logo }}" alt="{{ p.name }}"></a>
        {{ p.description | markdownify }}
      </div>
    {% endfor %}
  </div>
</div>
