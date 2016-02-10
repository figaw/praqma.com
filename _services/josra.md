---
title:      Josra
caption:    Joint Open Source Roadmap Alliance
avatar:     /images/services/josra.png
css-class:  josra
nav-weight: 50

members:
  -
    name: Praqma
    logo: /images/logo.png
    link: /
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://cryptera.com/
  -
    name: GrammaTech
    logo: /images/customers/grammatech.png
    link: http://grammatech.com/
  -
    name: Grundfos
    logo: /images/customers/grundfos.png
    link: http://dk.grundfos.com/
  -
    name: MAN
    logo: /images/customers/man.png
    link: http://entry.man.eu/
  -
    name: Novelda
    logo: /images/customers/xethru.png
    link: https://xethru.com/
  -
    name: Volvo
    logo: /images/customers/volvo.png
    link: http://volvo.com/
  -
    name: YXLON
    logo: /images/customers/yxlon.png
    link: http://yxlon.com/

---

## Joint Open Source Roadmap Alliance - Development and support of open source tools
{: .subtitle}

Our most ambitious customers ask a lot from their development environment.
They want new tools, new integrations and new features, not to mention bugs that need tackling.  
{: .caption}

Josra is an alliance of leading companies who co-organize development and support of open source tools in collaboration with Praqma.
By pooling interests, resources and genuine needs with our open source experts, Josra facilitates best practices and joint development on the open source tools that are shared among the members.

## A community of members

<div class="image-grid">
  <div class="image-grid-wrapper">
    {% for m in page.members %}
      <div class="image-grid-cell">
        <a {% if m.link %}href="{{ m.link }}" {% endif %}target="_blank" title="{{ m.name }}"><img src="{{ m.logo }}" alt="{{ m.name }}"></a>
      </div>
    {% endfor %}
  </div>
</div>
<br/>

## You are in safe hands

Josra is an alliance that supports its members in feeling safe when being dependent on open source tools for their software development process.
{: .caption}

Josra enables its members to contribute by proxy, they can take on the role as innovator by influencing the roadmaps of maintained tools and by exploiting the support and development cases included with membership.
This influence can be exerted without having to redirect employees away from the core business domain and into becoming open source experts.
Praqma has substantial open source community karma as this is our business and we do it right.

 * All software tools have a full CI infrastructure, ensuring the quality bar is kept high
 * All code is hosted on GitHub, allowing anyone in the community to contribute improvements
 * All work is planned, prioritized and implemented together with the membership

## How does it work?

 * Members sign up on an annual basis
 * The membership fees go into a "pot" of hours ring-fenced for Josra development
 * The roadmap is decided at regular Josra gatherings
 * Our open source experts implement the vision with quality
 * Progress is reported and working code is released

## Josra Gatherings

Once a year the Josra alliance members are invited to a whole-day meetup.
Each alliance member is entitled and encouraged to send two participants; A geek and a chief.
We share our experiences and visions and after lunch we split up, the chiefs plan roadmaps while the geeks do hackathons.
We finish the day by having an evening eat-and-drink-up together.

Our customers consider this meeting of minds one of the most valuable things that comes with being a member.  
The chance to discuss with like-minded peers in different companies provides insights and cross-fertilization that is hard to find in any other environment.
{: .highlight}

Between meetings, all tools in the Josra toolstack are being discussed and innovated through different Trello boards made available to all alliance members.
More lengthy discussions and general feedback can be communicated at the “Joint Open Source Roadmap Alliance” LinkedIn group.

## _Get the development tools you wish existed_{: .highlight}

{% include call_to_action.html %}
