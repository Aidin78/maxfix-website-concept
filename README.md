# MaxFix – website

Redesign of [maxfix.nu](https://www.maxfix.nu) for MaxFix (MaxExperten AB), a handyman and
home-services company in Stockholm. Swedish is the primary language; English lives under `/en/`.

Built with [Next.js](https://nextjs.org) (App Router) and TypeScript. Styling is plain CSS: design
tokens in `src/styles/globals.css` and CSS Modules per component – no UI framework. Every page is
prerendered as static HTML; only the interactive parts (menu, price estimator, request form,
gallery) run as client components.

## Getting started

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev        # dev server on http://localhost:3000
npm run build      # production build (includes type-checking)
npm run start      # serve the production build
npm run lint       # ESLint (Next.js core-web-vitals + TypeScript rules)
npm run typecheck  # tsc --noEmit
```

Deploy anywhere that runs Next.js (e.g. Vercel or `next start` on a Node server). Image
optimisation uses `sharp`, which Next.js installs automatically.

## Structure

```
src/
  app/
    (sv)/              Swedish routes + root layout (<html lang="sv">)
    (en)/en/           English routes; (en)/layout.tsx is the English root layout
    global-not-found.tsx, sitemap.ts, robots.ts
  assets/images/       Photos from maxfix.nu (resized, metadata stripped)
  components/          Header, Footer, page templates (service, gallery, terms) + CSS Modules
  components/home/     Home page sections (hero, services, pricing, reviews, about, work, contact…)
  data/                Content: company facts, services, pricing, tips, gallery, terms
  i18n/                Languages, routes/anchors, service slugs and all UI copy (sv + en)
  lib/                 Metadata helpers, service-route helpers, form validation
  styles/globals.css   Design tokens, base typography, buttons, utilities
```

Routes: `/`, `/tjanster/<slug>/`, `/galleri/`, `/villkor/` and the English equivalents
`/en/`, `/en/services/<slug>/`, `/en/gallery/`, `/en/terms/`. The two languages use separate root
layouts (route groups) so each page gets the right `lang` attribute; switching language is a full
page load. Unknown URLs render `global-not-found.tsx` (enabled via `experimental.globalNotFound`).

## Content

All business content (services, prices, ROT/RUT rules, conditions, terms, contact details) comes
from the current maxfix.nu and is kept in `src/data/` and `src/i18n/ui.ts`. Contact details are
defined once in `src/data/company.ts`.

Customer reviews are not hard-coded: the reviews section embeds MaxFix's live Reco widget (reviews,
total count and average rating stay current automatically) and links to the Reco profile
(https://www.reco.se/maxfix-stockholm). The "Sveriges bästa byggföretag" badge is the image MaxFix
already publishes.

## Request form

The form posts `multipart/form-data` to the URL in `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`).
Fields: `services[]`, `message`, `files[]` (max 5 files, 10 MB each), `rot_rut`, `first_name`,
`last_name`, `email`, `phone`, `address`, `personnummer`, `language` and a honeypot `website`.

Without an endpoint the form still validates, then offers to send the request by e-mail to
info@maxfix.nu instead – nothing is silently lost.

## To confirm with MaxFix

While moving the content over, a few inconsistencies were found on the current site. The Swedish
version was treated as the source of truth; the legal terms are reproduced as published.

- Electrical rate: Swedish pages say 630 kr/h after ROT, the English El page says 595 SEK/h.
- Travel cost: Swedish says 600 kr per visit, the English price list says 600 SEK per day.
- Material surcharge: 20 % everywhere except §14 of the English terms (10 %).
- Cancellation: the Swedish terms allow free cancellation up to 48 h before, the English terms 24 h.
- Swedish terms §19 and §21 state different ROT ceilings (75 000 vs 50 000 kr); §4.3 in both
  languages links to www.maxfix.se.
- The English terms list +46 73-818 16 16 as phone number; everywhere else it is 08 4002 08 08.
- The Swedish curtains page (/gardiner/) returns 404; its content was taken from the English page.
- Reco's profile lists the awards "Sveriges bästa byggföretag" 3rd place 2025 and Top 10 2026. The
  2nd place 2023 shown in MaxFix's badge image is not among the awards on the profile. The site keeps
  the wording from maxfix.nu (3:a 2025 · 2:a 2023) until MaxFix confirms.
- "Tips och råd" says no quotes are given, while the price section offers free quotes for larger
  jobs – the new copy says no quotes are given for smaller jobs.
