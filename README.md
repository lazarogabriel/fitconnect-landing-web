# repp. — Landing (static MVP)

Static landing page for the **repp.** fitness app. Zero build step — open `index.html` and it runs.

## Structure

```
web/
├── index.html        # Landing page
├── privacy.html      # Privacy scaffold (TODO placeholders)
├── terms.html        # Terms scaffold (TODO placeholders)
├── styles.css        # Design tokens mapped from the RN app (themes.ts)
├── script.js         # Theme toggle + i18n (ES/EN) + localStorage
└── assets/           # Logo + screenshot placeholders
```

## Design system

Tokens in `styles.css` (`:root` for light, `[data-theme="dark"]` for dark) come directly from:

- `src/theme/colors.ts`
- `src/theme/themes.ts`

Fonts: **Inter** (body) and **Urbanist** (headlines / brand), matching `src/theme/typography.ts`. Loaded from Google Fonts.

## Theme / language

- Theme toggle persists to `localStorage` under `repp.theme` (`light` | `dark`).
- Language toggle persists to `localStorage` under `repp.lang` (`es` | `en`). Default is Spanish; browser language is honored on first load.
- All translatable strings live in `script.js` under `translations.{es,en}` and are bound via `data-i18n` attributes.

## Deploy

Drop the entire `web/` folder into Vercel / Netlify / Cloudflare Pages as a static site. No build command, publish directory = `web`.

## TODOs

- Replace `assets/` placeholders with real screenshots and favicon.
- Fill legal copy in `privacy.html` / `terms.html` (all sections currently marked `TODO`).
- Optional: replace Google Fonts with self-hosted `.ttf` from `assets/fonts/` in the main app for full offline parity.
