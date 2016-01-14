---
title:      Jobs
caption:    We're hiring - are you a CoDe:er at heart?
avatar:     /images/about/jobs.png
nav-weight: 40
---

### CoDe:er at heart


We abbreviate Continuous delivery as CoDe. _Co_ for Continuous and _De_ for delivery.

The position title we use is "Continuous Deliverer" or just plain "CoDe:er".

If you know what we mean then you have probably got it - the DevOps. You are already doing it, aren't you? That is why you are reading this page.

If you're a code at heart we encourage you to contact us. We have offices in Allerød, Aarhus, Copenhagen, Oslo and Stockholm and we're hiring in all locations.

{% for p in site.tags.Jobs %}
  [{{ p.title }}]({{ p.url }})<br>
{% endfor %}
