# Gautami — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All site content — name, bio, skills, experience, projects, and blog posts —
lives in one file: [`src/data/portfolio.ts`](./src/data/portfolio.ts). Update
the values there; no component code needs to change.

Update `profile.siteUrl` to the real deployed domain before launch — it feeds
the sitemap, robots.txt, and Open Graph/Twitter metadata.

## Project structure

```
src/
  app/            Routes (home, /blog, /blog/[slug]), layout, metadata files
  components/     UI building blocks (Hero, About, Skills, Projects, ...)
  data/           portfolio.ts — single source of truth for site content
docs/
  design-system/  Typography, color, spacing, and other design tokens
```

## Design system

Design tokens and UI conventions (typography, color, spacing, iconography,
buttons, motion, accessibility, etc.) are documented in
[`docs/design-system/`](./docs/design-system/README.md). Reference these
instead of introducing new ad-hoc values when building UI.

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the dev server                     |
| `npm run build`        | Production build                         |
| `npm run start`        | Serve the production build               |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new), from the
creators of Next.js. See the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other options.
