test

Navigation
---
All pages and tag-pages with *nav-weight* in frontmatter go to menu. They are sorted by *nav-weight* from frontmatter (small values go first).

Helpers
---
*_config.dev.yml* is extremely useful during development. It can alter some variables. Start Jekyll with
```
jekyll build --config "_config.yml,_config.dev.yml" --watch
```

Blog
===

Posts
---
All posts are treated as they have tag `Newest`. We add it in `_includes/posts.html`

* tag — tag to filter. Register sensetive.
* limit — number of posts. Skip to output all.
* avatar-alignment — avatar alignment
* sort — name of filed to sort. Skip to filter by date.

You can skip any of `posts.html` parameters.

Weight
---

Heavy things sink to the bottom (c) @JKrag

Or to the right (c) @illus0r

Default weight of the post is `0`
