# Cedar & Stone Café

A responsive, accessible website for a **fictional** local café, built as a front-end portfolio project with HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step, no dependencies.

> Cedar & Stone Café is not a real business. All menu items, prices, reviews, opening hours and contact details are sample content.

**Status:** complete. Built in 11 milestones, then given an Art Deco redesign (1920s hotel café: black, champagne and gold).

**Live site:** https://mustypro137.github.io/cedar-and-stone-cafe/

## Features

- Header that is transparent over the hero and turns solid as you scroll (or when the mobile menu is open), with a responsive navigation
- Split hero with a framed Art Deco illustration, a sunburst and two clear actions
- About section with a short facts list
- Opening hours with a timeline drawn to scale from the listed times
- Menu as typographic rows with working category filters
- Customer reviews (clearly marked as fictional)
- Interactive FAQ accordion
- Contact form with client-side validation (demo only, it does not send messages)
- Footer with contact information and a band of gold diamonds
- Smooth anchor scrolling that accounts for the fixed header

## Design

- **Palette:** near-black `#0A0A0A`, champagne text `#F2F0E4`, card `#141414`, gold `#D4AF37` (hover `#F2E8C4`), midnight blue `#1E3D59` and muted `#888`, all defined once as CSS custom properties in `style.css`. Gold is kept for headings, borders, labels and actions.
- **Type:** Marcellus for headings (uppercase, tracked) and Josefin Sans for body text, both self-hosted (SIL OFL).
- **Art Deco details (all CSS, no image files):** diagonal crosshatch backgrounds, a fine film grain, a sunburst behind the hero, diamonds, stepped corner brackets, a double gold frame, Roman-numeral section labels (I to VI), gold dividers that draw in, and a diamond lattice band above the footer.
- **Imagery:** a framed café photograph below the hero (`images/cafe-banner.webp` at 19:6 from tablet up, `images/cafe-banner-mobile.webp` at 2:1 on phones, swapped with `<picture>`), plus the hero illustration `images/hero.svg`. To change the photo, replace those two files and the `alt` text.
- **Motion:** about 300 ms transitions (buttons, links, cards, FAQ) and a gentle scroll reveal, all switched off by `prefers-reduced-motion`.

## Accessibility and performance

- Semantic landmarks, one `h1`, a logical heading order and a skip link that sits above the fixed header.
- Keyboard-operable navigation, menu filters, FAQ accordion and form, with visible focus styles and `aria-expanded`, `aria-pressed` and `aria-invalid` states.
- Every text and control colour pair checked against WCAG AA (4.5:1 for text, 3:1 for UI components); the lowest ratio in use is 5.20:1.
- Works without JavaScript: all content stays visible, the header stays solid, and the opening hours show as a plain table. Only the enhancements are skipped.
- Opening-hours bars are decorative and hidden from assistive technology; the table and its `<time>` elements carry the information.
- No horizontal overflow from 320px to 1440px.
- Two font files (about 14 KB and 29 KB, `font-display: swap`, both preloaded), a 2 KB SVG, no raster images, and a script loaded with `defer`.

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
fonts/            Marcellus and Josefin Sans, with their OFL licences
README.md
LICENSE
```

## License

MIT. See [LICENSE](LICENSE). The Marcellus and Josefin Sans font files are licensed separately under the SIL Open Font License; see `fonts/OFL-*.txt`.
