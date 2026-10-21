# Cedar & Stone Café

A responsive, accessible website for a **fictional** local café, built as a front-end portfolio project with HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step, no dependencies.

> Cedar & Stone Café is not a real business. All menu items, prices, reviews, opening hours and contact details are sample content.

**Status:** complete. Built in 11 milestones, then given an editorial visual redesign in 8 stages.

**Live site:** https://mustypro137.github.io/cedar-and-stone-cafe/

## Features

- Header that is transparent over the hero and turns solid as you scroll (or when the mobile menu is open), with a responsive navigation
- Split hero with a clear call to action
- About section with a short facts list
- Opening hours with a timeline drawn to scale from the listed times
- Menu as typographic rows with working category filters
- Customer reviews (clearly marked as fictional)
- Interactive FAQ accordion
- Contact form with client-side validation (demo only, it does not send messages)
- Footer with contact information and social links
- Smooth anchor scrolling that accounts for the fixed header

## Design

- **Palette:** ivory and paper surfaces, espresso brown, muted olive and a clay accent, defined as CSS custom properties.
- **Type:** Fraunces (a variable serif, self-hosted, SIL OFL) for headings, times and prices; the system sans-serif for body text.
- **Layout:** left-aligned editorial layouts with asymmetric columns, hairline rules instead of cards and shadows, and alternating light and dark bands.
- **Imagery:** one decorative SVG illustration (`images/hero.svg`). There are no photographs. To use a photo, replace `src` and `alt` on the hero `<img>`.
- **Motion:** small, CSS-driven touches only (link underlines, button arrows, row hover, FAQ icon, and the opening-hours bars drawing in once). All of it is switched off by `prefers-reduced-motion`.

## Accessibility and performance

- Semantic landmarks, one `h1`, a logical heading order and a skip link that sits above the fixed header.
- Keyboard-operable navigation, menu filters, FAQ accordion and form, with visible focus styles and `aria-expanded`, `aria-pressed` and `aria-invalid` states.
- Every text and control colour pair checked against WCAG AA (4.5:1 for text, 3:1 for UI components); the lowest ratio in use is 5.45:1.
- Works without JavaScript: all content stays visible, the header stays solid, and the opening hours show as a plain table. Only the enhancements are skipped.
- Opening-hours bars are decorative and hidden from assistive technology; the table and its `<time>` elements carry the information.
- No horizontal overflow from 320px to 1440px.
- Two font files (about 37 KB and 46 KB, `font-display: swap`, both preloaded), a 1 KB SVG, no raster images, and a script loaded with `defer`.

## Technologies

HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript (ES6+, `IntersectionObserver`).

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Project structure

```
index.html
style.css
script.js
images/hero.svg
fonts/            Fraunces (normal and italic) and its OFL licence
README.md
LICENSE
```

## License

MIT. See [LICENSE](LICENSE). The Fraunces font files are licensed separately under the SIL Open Font License; see `fonts/OFL.txt`.
