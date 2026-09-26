# Oseedy web

Public marketing site for Oseedy. Angular 21, standalone components, lazy routes.

The homepage follows the same kind of flow as [Snabbit](https://www.snabbit.com/): hero, services, three steps, cities, expert trust, questions, and a download band. Copy, color, and services belong to Oseedy (`Obsessed with comfort & hygiene`).

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

Store links and the support email live in `src/environments`. Production replaces that file via `angular.json`.
