# portfolio

Source code of [bbbb.dev](https://bbbb.dev), the portfolio site of Koro Kumagai — a web version of a résumé covering skills, career, and works.

The site prioritizes content, information design, accessibility (WCAG 2.2 AA), and performance (Core Web Vitals) over visual effects.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export) / TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Fonts: Noto Sans JP / JetBrains Mono (self-hosted via `next/font`)
- Hosting: Cloudflare Pages, deployed by GitHub Actions

## Getting Started

Requirements: Node.js 24 (LTS) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. Pages live in `src/app/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `out/` |
| `npm run preview` | Serve `out/` locally with Cloudflare Pages (Wrangler), including `_headers`. Run `npm run build` first |
| `npm run lint` | Run ESLint |

## Project Structure

```
.github/workflows/  CI/CD (lint, build, deploy to Cloudflare Pages)
src/
  app/              App Router (pages, layout, metadata routes, _headers)
  components/       Shared components
  i18n/             Locale config and dictionaries (all display text)
  lib/              Site constants, metadata, structured data, security headers
```

## Conventions

- Links open in the same tab, including links to external sites (no `target="_blank"`). Opening new tabs unexpectedly breaks the back button and is easy to miss for screen reader and magnifier users; users can still choose to open a new tab themselves (WCAG technique G201).
  - Exception: links where leaving the page would lose user input (e.g. the privacy policy link near a form) open in a new tab, with `rel="noopener noreferrer"` and a visible and screen-reader-announced indication that they open in a new tab.

## Deploy

The site is built as a static export (`out/`) and deployed to Cloudflare Pages by GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

- Pull requests: lint, build, and deploy to a preview URL per branch (pull requests from forks are built but not deployed)
- Push to `main`: deploy to production
- Changes to `README.md` only do not trigger the workflow, since they do not affect the build output

Security headers are defined in [`src/lib/securityHeaders.ts`](src/lib/securityHeaders.ts) and generated into `out/_headers` at build time. To check the production build locally with the same headers:

```bash
npm run build
npm run preview
```

### Initial Setup

1. Create a Cloudflare Pages project (Direct Upload) with `main` as the production branch:

   ```bash
   npx wrangler pages project create <project-name> --production-branch=main
   ```

2. Add the following repository settings (Settings > Secrets and variables > Actions):

   | Name | Type | Description |
   |---|---|---|
   | `CLOUDFLARE_API_TOKEN` | Secret | API token with `Account > Cloudflare Pages > Edit` permission |
   | `CLOUDFLARE_ACCOUNT_ID` | Secret | Cloudflare account ID |
   | `CLOUDFLARE_PAGES_PROJECT` | Variable | Cloudflare Pages project name |
   | `NEXT_PUBLIC_CF_BEACON_TOKEN` | Variable | Cloudflare Web Analytics site token (optional; the beacon is not loaded when unset) |

3. Add the custom domain `bbbb.dev` in the Pages project's Custom domains (the domain must be a zone in the same Cloudflare account).

## License

The source code is licensed under the [MIT License](LICENSE).

The site content is not covered by the MIT License and may not be reused without permission. This includes the profile, career, and other text in `src/i18n/dictionaries/`, the generated Open Graph image, and the name of Koro Kumagai. © 2026 Koro Kumagai. All rights reserved.
