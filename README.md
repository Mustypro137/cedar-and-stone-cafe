# Cedar & Stone Café

A responsive, accessible website for a **fictional** local café, built as a front-end portfolio project with HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step, no dependencies.

> Cedar & Stone Café is not a real business. All menu items, prices, reviews, opening hours and contact details are sample content.

**Status:** complete. Built in 11 milestones, then redesigned in Art Deco stages (1920s hotel café: black, champagne and gold).

**Live site:** https://mustypro137.github.io/cedar-and-stone-cafe/

## Features

- Header that is transparent over the hero and turns solid as you scroll (or when the mobile menu is open), with a responsive navigation
- Split hero with a framed Art Deco illustration, a sunburst and two clear actions
- About section with a short facts list
- Opening hours with a timeline drawn to scale from the listed times
- Menu as typographic rows with working category filters
- Customer reviews (clearly marked as fictional)
- Interactive FAQ accordion
- Contact form in a two-panel card (midnight-blue panel with a fan ornament beside the form) with client-side validation (demo only, it does not send messages)
- Framed café photograph between the hero and the About section
- Footer with contact information, a link to this repository, photo credits and a band of gold diamonds
- Link-preview tags (Open Graph and Twitter card) so shared links show a title and photo
- Smooth anchor scrolling that accounts for the fixed header

## Design

- **Palette:** near-black `#0A0A0A`, champagne text `#F2F0E4`, card `#141414`, gold `#D4AF37` (hover `#F2E8C4`), midnight blue `#1E3D59` and muted `#888`, all defined once as CSS custom properties in `style.css`. Gold is kept for headings, borders, labels and actions.
- **Type:** Marcellus for headings (uppercase, tracked) and Josefin Sans for body text, both self-hosted (SIL OFL).
- **Art Deco details (all CSS, no image files):** diagonal crosshatch backgrounds, a fine film grain, a sunburst behind the hero, diamonds, stepped corner brackets, a double gold frame, Roman-numeral section labels (I to VI), gold dividers that draw in, and a diamond lattice band above the footer.
- **Imagery:** a framed café photograph below the hero (`images/cafe-banner.webp` at 19:6 from tablet up, `images/cafe-banner-mobile.webp` at 2:1 on phones, swapped with `<picture>`), plus the hero illustration `images/hero.svg`. To change the photo, replace those two files and the `alt` text. Each menu item has a small square photo in `images/menu/` (360x360 WebP, lazy-loaded). These are illustrative photographs from Wikimedia Commons; their authors and licences are listed under "Photo credits" in the footer. Replace a file (same name) to use your own photo.
- **Motion:** about 300 ms transitions (buttons, links, cards, FAQ) and a gentle scroll reveal, all switched off by `prefers-reduced-motion`.

## Accessibility and performance

- Semantic landmarks, one `h1`, a logical heading order and a skip link that sits above the fixed header.
- Keyboard-operable navigation, menu filters, FAQ accordion and form, with visible focus styles and `aria-expanded`, `aria-pressed` and `aria-invalid` states.
- Every text and control colour pair checked against WCAG AA (4.5:1 for text, 3:1 for UI components); the lowest ratio in use is 5.20:1.
- Works without JavaScript: all content stays visible, the header stays solid, and the opening hours show as a plain table. Only the enhancements are skipped.
- Opening-hours bars are decorative and hidden from assistive technology; the table and its `<time>` elements carry the information.
- No horizontal overflow at 375, 430, 768, 1024 and 1440px.
- Light assets: two font files (about 14 KB and 29 KB, `font-display: swap`, both preloaded), a 2 KB SVG, one 49 KB (desktop) or 54 KB (phone) WebP photo loaded lazily, and a script loaded with `defer`. The 114 KB `og-image.jpg` is only fetched by link previews.

## Testing

Checked with headless Chrome (device emulation) and the axe-core accessibility engine; there is no lint or build step.

- **Passed:** no overflow at the five widths above; nav toggle, menu filters, FAQ and form validation; real Tab-key walk with a visible focus ring on every stop (Chrome and Edge); no-JavaScript and reduced-motion behaviour; no broken images or dead links; axe-core reported 0 violations at 375px and 1280px (WCAG 2.0 to 2.2 A/AA plus best practice).
- **Not checked by a tool:** four footer text items, because axe cannot read the decorative band behind them; their colour pairs were calculated by hand and pass.
- **Still to test by hand:** a real phone, Safari, Firefox, a screen reader, 200% zoom, and how the link preview looks once shared.

## Technologies

HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript (ES6+, `IntersectionObserver`).

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Publish

The site is served by GitHub Pages from the `main` branch. Commit your changes and run `git push origin main`; the live site updates within a minute or two (hard-refresh with Ctrl+Shift+R if you still see the old version).

## Project structure

```
index.html
style.css
script.js
images/hero.svg              hero illustration
images/cafe-banner.webp      photo band, 19:6 (tablet and up)
images/cafe-banner-mobile.webp  photo band, 2:1 (phones)
images/og-image.jpg          link-preview image (1200x629)
images/menu/*.webp           one photo per menu item (9, credited in the footer)
fonts/                       Marcellus and Josefin Sans, with their OFL licences
README.md
LICENSE
```

## License

MIT. See [LICENSE](LICENSE). The café photograph was supplied by the project owner, who is responsible for its usage rights. The menu photographs keep their own Creative Commons licences (CC0, CC BY and CC BY-SA); see the credits in the footer. The Marcellus and Josefin Sans font files are licensed separately under the SIL Open Font License; see `fonts/OFL-*.txt`.
