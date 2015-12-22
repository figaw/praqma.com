---
title:      Clients
caption:    We have some great partners
avatar:     /images/about/customers.png
nav-weight: 40

customers:
  -
    name: Agnitio
    logo: /images/customers/agnitio.png
    link: http://www.agnitio.com/
  -
    name: ATP
    logo: /images/customers/atp.jpg
    link: http://www.atp.dk/
  -
    name: Bankdata
    logo: /images/customers/bankdata.jpg
    link: http://www.bankdata.dk/
  -
    name: Brüel & Kjær
    logo: /images/customers/bruel-kjaer.png
    link: http://www.bksv.dk/
  -
    name: Cryptera
    logo: /images/customers/cryptera.png
    link: http://www.cryptera.com/
  -
    name: DFDS
    logo: /images/customers/dfds.jpg
    link: http://www.dfdsseaways.dk/
  -
    name: DR
    logo: /images/customers/dr.png
    link: http://www.dr.dk/
  -
    name: DSV
    logo: /images/customers/dsv.jpg
    link: http://www.dk.dsv.com/
  -
    name: Atmel
    logo: /images/customers/atmel.png
    link: http://www.atmel.dk/
  -
    name: Grundfos
    logo: /images/customers/grundfos.png
    link: http://dk.grundfos.com/
  -
    name: Asseco
    logo: /images/customers/asseco.png
    link: http://www.asseco.com/
  -
    name: YXLON
    logo: /images/customers/yxlon.png
    link: http://www.yxlon.com/
  -
    name: Anoto
    logo: /images/customers/anoto.png
    link: http://www.anoto.com/
  -
    name: Kræftens Bekæmpelse
    logo: /images/customers/kaeftens-bekaempelse.png
    link: https://www.cancer.dk/
  -
    name: Global Blue
    logo: /images/customers/global-blue.png
    link: http://www.globalblue.com/
  -
    name: Folkekirkens Nødhjælp
    logo: /images/customers/folkekirkens-nodhjaelp.png
    link: https://www.noedhjaelp.dk/
  -
    name: Volvo
    logo: /images/customers/volvo.png
    link: http://www.volvo.com/
  -
    name: Radiometer
    logo: /images/customers/radiometer.jpg
    link: http://www.radiometer.com/
  -
    name: FL Smidth
    logo: /images/customers/fl-smidth.jpg
    link: http://www.flsmidth.com/
  -
    name: Genesys
    logo: /images/customers/genesys.jpg
    link: http://www.genesys.com/
  -
    name: Jaguar
    logo: /images/customers/jaguar.png
    link: http://www.jaguar.co.uk/
  -
    name: LandRover
    logo: /images/customers/landrover.png
    link: http://www.landrover.co.uk/
  -
    name: Nets
    logo: /images/customers/nets.jpg
    link: http://www.nets.eu/
  -
    name: Schneider Electric
    logo: /images/customers/schneider-electric.png
    link: http://www.schneider-electric.com/
  -
    name: SimCorp
    logo: /images/customers/simcorp.jpg
    link: http://www.simcorp.com/
  -
    name: Sony Ericsson
    logo: /images/customers/sony-ericsson.png
    link: http://www.sonymobile.com/
---

bla ha ha.

At this point we will be listing our customers, you will find them in a yml file under `/_data/customers.yml`

<div class="customers">
  <div class="customers-wrapper">
    {% for c in page.customers %}
      <div class="customer">
        <div>
          <a href="{{ c.link }}" target="_blank"><img src="{{ c.logo }}" alt="{{ c.name }}"></a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
