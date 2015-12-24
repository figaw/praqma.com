---
title:      Offices
caption:    We have five offices in three countries
avatar:     /images/about/globe.png
nav-weight: 30
---

<div class="page-offices">
  {% for o in site.data.offices %}
    <div class="office">
      {{ o.map }}
      <!--<div class="row">-->
        <!--<div class="col-md-30">-->
          <h3>{{ o.title }}</h3>
          {{ o.address| strip_html}}
          <div class="vat">VAT: {{ o.vat }}</div>
          <div class="phone"><a href="tel:{{ o.phone }}">{{ o.phone }}</a></div>
          <div class="email"><a href="mailto:{{ o.email }}">{{ o.email }}</a></div>
        <!--</div>-->
        <!--<div class="col-md-30">-->
        <!--</div>-->
      <!--</div>-->
    </div>
  {% endfor %}
</div>
