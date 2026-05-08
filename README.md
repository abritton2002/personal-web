# alexbbritton.com

Personal homepage for Alex Britton — minimal old-web aesthetic, plain HTML/CSS/JS, no frameworks.

Live at [alexbbritton.com](https://alexbbritton.com)

## Stack

- `index.html` — single-page site with sections: `/now`, `/a-little-bit-more-about-who-i-am`, `/work`, `/writing`, `/contact`
- `styles.css` — Georgia serif, Courier New mono, `#0000cc` blue links, 960px max-width
- `script.js` — project modal system triggered by `[data-project]` attributes
- `content/` — images, PDFs, videos, and article HTML files

## Running locally

Open `index.html` directly in a browser or serve with any static server:

```sh
npx serve .
```

## Articles

Full articles live in `content/articles/` as standalone HTML files. They import `../../styles.css` and use CSS variable aliases (`--s0`, `--font-display`, `--font-mono`, etc.) defined in the root stylesheet.

## Project modals

Each project link uses `data-project="N"` to trigger a modal. Project data (title, description, images, links) is defined in `projectsData` in `script.js`.

## Branches

- `main` — current redesign (minimal old-web)
- `main-old` — backup of previous dark-theme redesign
