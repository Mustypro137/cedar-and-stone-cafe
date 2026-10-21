# Cedar & Stone Café

A responsive, accessible website for a **fictional** local café, built as a front-end portfolio project with HTML5, CSS3 and vanilla JavaScript. No frameworks, no dependencies.

> Cedar & Stone Café is not a real business. All menu items, prices, reviews and contact details are sample content.

**Status:** complete (Milestone 11 of 11: accessibility, responsive and performance pass).

**Live site:** https://mustypro137.github.io/cedar-and-stone-cafe/

## Features

- Responsive navigation
- Hero section with a clear call to action
- About section and opening hours, with a timeline drawn to scale from the listed times
- Menu cards with working category filters
- Customer reviews (clearly marked as fictional)
- Interactive FAQ accordion
- Contact form with client-side validation (demo only, it does not send messages)
- Footer with contact information and social links
- Accessibility, responsive design and basic performance optimisation

## Accessibility and performance

- Semantic landmarks, one `h1`, a logical heading order and a skip link.
- Keyboard-operable navigation, menu filters, FAQ accordion and form, with visible focus styles and `aria-expanded`, `aria-pressed` and `aria-invalid` states.
- Text and control colours checked against WCAG AA contrast (4.5:1 for body text).
- Respects `prefers-reduced-motion`.
- Works without JavaScript: all content stays visible and only the enhancements are skipped.
- One decorative SVG illustration, no raster images and no dependencies. One self-hosted variable web font (Fraunces, SIL OFL) with `font-display: swap`; the script is loaded with `defer`.

## Technologies

HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript (ES6+).

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Project structure

```
index.html
style.css
script.js
fonts/
README.md
LICENSE
```

## License

MIT. See [LICENSE](LICENSE).
