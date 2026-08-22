# Mentara — Light Edition

A recreation of the Mentara mental-health landing page on a **white background**, same sections and layout as the reference, rebuilt as plain HTML/CSS/JS with no build step or dependencies (besides Google Fonts).

## Structure

```
mentara-white/
├── index.html        all 13 sections, semantic HTML5
├── css/
│   └── style.css      design tokens + component + responsive styles
├── js/
│   └── script.js       mobile nav, FAQ accordion, testimonial switcher, scroll reveal
└── README.md
```

## Sections included

Header · Hero · About · Partner strip · Services (6) · Process (3 steps) · Portfolio (2) · Testimonials · Team (6) · Blog (3) · FAQ · Booking CTA · Footer.

## Run it

No build step needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Push to GitHub

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

(the repo is already initialized with one commit)

## Design system

- **Palette**: kept Mentara's own forest-green + lime accent identity, just flipped the canvas from dark green to white/off-white (`--white`, `--cream`) so it still reads as the same brand in light mode. One dark forest band is kept for the closing CTA + footer as a deliberate accent, not the default background.
- **Type**: Poppins (display) + Roboto (body) — the pairing from your `clean-design` skill, which fit the calmer, whitespace-first tone of a mental-health brand best.
- **Structure/spacing**: 8pt grid with `premium-design`'s spacing precision layered on top (generous section padding, restrained shadows, 150–300ms transitions).
- I intentionally didn't pull from `creative-design` (Bangers, bold/playful) — that voice reads as loud for therapy/wellness content, so I left it out rather than forcing a blend. Happy to redo in that direction if you actually want the bolder look.
- All tokens are CSS variables in `:root` at the top of `style.css` — swap colors/fonts there and the whole site follows.

## Images

Every photo is a placeholder from [Picsum Photos](https://picsum.photos) (seeded, so they're stable across reloads) — reliable and free to hotlink, but not therapy-themed. Swap the `src` attributes for licensed or branded photography before shipping. Logo mark and social icons are hand-drawn inline SVG, so there are zero binary assets to manage.

## Accessibility notes

Semantic landmarks, skip-to-content link, keyboard-operable accordion and nav toggle (`aria-expanded`), alt text on every image, visible focus states, and `prefers-reduced-motion` support.
