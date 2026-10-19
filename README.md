# Szoop website

Public marketing site for Szoop. Angular 21, standalone components, lazy routes.

The homepage introduces Szoop's quick home cleaning and house-help services, booking flow, launch cities, expert standards, FAQs, and mobile apps. Brand copy and service information live in `src/app/core/config/site.content.ts`.

## Structure

```
src/app/core        brand copy and models
src/app/layout      header and footer
src/app/pages       home, about, cities, faq, legal
src/app/shared      FAQ accordion
src/environments    dev and production settings
src/styles          tokens, base, layout
```

## Scripts

```bash
npm start          # http://localhost:4200
npm run build      # production build
```

Store links, the canonical site URL, and the support email live in `src/environments`. Production replaces that file via `angular.json`. Public crawl settings and the sitemap are in `public/robots.txt` and `public/sitemap.xml`.
