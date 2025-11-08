---
permalink: /internal/valiterm-layout-guide/
layout: layouts/legacy.njk
robots: noindex,nofollow
---
# Valiterm Layout Guide (Base vs Legacy)

## Overview

Valiterm uses two primary page layouts:

* `layouts/base.njk` — full site chrome (header, footer, navigation, main structure).
* `layouts/legacy.njk` — minimal layout used for experimentation and early prototypes.

To ensure new pages match the current styling and structure, always use `layouts/base.njk` unless there's a specific need to suppress global navigation.

## Standard Front Matter for New Pages

Add this block at the top of any new `.md` or `.njk` file:

```yaml
---
layout: layouts/base.njk
title: Page Title
metaDescription: "Optional meta description for SEO and link previews."
permalink: /your-page-slug/
---
```

## Structure Guidelines

Use semantic HTML sections to maintain readability and consistent spacing:

```html
<section class="about">
  <h2>Section Title</h2>
  <p>Paragraph explaining the section.</p>
</section>
```

## Recommended Section Classes

| Class Name | Purpose                                      | Visual Effect                        |
| ---------- | -------------------------------------------- | ------------------------------------ |
| `about`    | Key introduction block                       | Balanced spacing, centered flow      |
| `why`      | Justification/explanation sections           | Slight emphasis on body text spacing |
| `caption`  | clarifying text below examples / code blocks | Reduced font size & subtle spacing   |

## Code Blocks

Use `<pre>` for copy-paste examples. Avoid nesting `<code>` inside `<pre>` unless highlighting is needed.

```html
<pre>
&lt;script type="application/valiterm+json"&gt;
{ ... }
&lt;/script&gt;
</pre>
```

## Buttons / Links Styling

To match the current call-to-action style:

```html
<a class="button-link" href="/example/">Label</a>
```

`button-link` is already styled globally.

## Navigation Rules

Navigation is automatically generated using `pages.json`. To ensure a new page appears in the correct section, add it there.

## Footer + Header

Both come automatically from `layouts/base.njk`. There is no need to add any wrapper tags.

## Quick Checklist for New Pages

* [ ] File placed under `src/` (never `_site/`)
* [ ] Begins with `layout: layouts/base.njk`
* [ ] Has `title:` and `permalink:` defined
* [ ] Uses `<section>` blocks for structure
* [ ] Uses existing utility classes (`about`, `why`, `caption`, `button-link`)
* [ ] Does *not* duplicate header/footer code manually

---

This guide should be referenced whenever creating a new page to ensure consistent layout, navigation, and visual style across the site.
