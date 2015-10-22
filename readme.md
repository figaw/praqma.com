Navigation
---
All pages with *title* in frontmatter go to menu. They are sorted by *nav-weight* from frontmatter (small values go first).

Helpers
---
*_config.dev.yml* is extremely useful during development. It can alter some variables. Start Jekyll with
```
jekyll build --config "_config.yml,_config.dev.yml" --watch
```

Fonts
---
Base font is set for body. For customizations you can use ```font``` mixin.
```
@include font();
@include font($weight: 'bold');
@include font($family: 'condensed');
@include font($family: 'condensed', $weight: 'bold');
@include font($family: 'decorative');
```
