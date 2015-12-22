---
title:      Clients
caption:    We have some great partners
avatar:     /images/about/customers.png
nav-weight: 40

customers:
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Novelda
    logo: /images/customers/novelda.png
    link: http://www.novelda.com/
---

bla ha ha.

At this point we will be listing our customers, you will find them in a yml file under `/_data/customers.yml`

<div class="customers">
  <div class="customers-wrapper">
    {% for c in page.customers %}
      <div class="customer">
        <a href="{{ c.link }}" target="_blank"><img src="{{ c.logo }}" alt="{{ c.name }}"></a>
      </div>
    {% endfor %}
  </div>
</div>
