---
title:      Rouges gallery
caption:    #TODO write
avatar:     /images/about/customers.png
css-class:  employees
nav-weight: 50
---

<div class="freewall-container">
  {% for e in site.employees %}
    <div class="employee">
      <div class="content">
        <h2>
          {{ e.name }}
        </h2>
        {{ e.content }}
      </div>
      <div class="image">
        <img src="/images/employees/{{ e.path | split:"/" | last | split:"." | first }}.png">
      </div>
    </div>
  {% endfor %}
</div>

<script src="/javascripts/freewall.js"></script>
<script>
  $(function() {
    var squareUsualSize = 160;
    var wall = new Freewall(".freewall-container");
    wall.reset({
      selector: '.employee',
      animate: true,
      cellW: squareUsualSize,
      cellH: squareUsualSize,
      gutterX: 10,
      gutterY: 10,
      delay: 0,
      onResize: function() {
        wall.refresh();
      }
    });
    var employees = $(".freewall-container .employee");
    $(".freewall-container .employee").click(function() {
      employees.removeAttr("data-position");
      wall.fixSize({
        block: employees,
        width:  squareUsualSize,
        height: squareUsualSize
      });
      $(this).attr("data-position", "0-0");
      wall.fixSize({
        block: $(this),
        width:  600,
        height: 600
      });
      wall.refresh();
    });
    wall.fitWidth();
  });
</script>
