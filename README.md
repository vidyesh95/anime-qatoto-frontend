# anime-qatoto-frontend

Web frontend for **Anime Qatoto**, an anime streaming and discovery app.

> **Status:** early scaffold. The project is set up and running, but the anime-specific pages, data layer, and API integration are not built yet — `src/app/page.tsx` is still the starter page.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16.3.4 (App Router) |
| UI | React 19.2.8 with the [React Compiler](https://react.dev/learn/react-compiler) enabled |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 (CSS-first config in `src/app/globals.css`) |
| Language | TypeScript 5 |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Package manager | pnpm 11.25.0 |

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Environment variables are documented in [`.env.example`](.env.example). `.env.local` is gitignored — keep real values out of the repo.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build (run `pnpm build` first) |

## Project structure

```
src/app/
  layout.tsx    # root layout — fonts, global styles, html/body shell
  page.tsx      # home page
  globals.css   # Tailwind import + theme tokens (light/dark)
public/         # static assets served at /
next.config.ts  # Next config (React Compiler on)
```

## Notes for contributors

- This repo pins a Next.js version whose APIs and conventions differ from older releases. Check the bundled docs in `node_modules/next/dist/docs/` before reaching for remembered patterns — see `AGENTS.md`.
- Tailwind v4 has no `tailwind.config.js`; theme tokens live in the `@theme inline` block in `src/app/globals.css`.

## License

[MIT](LICENSE) © 2026 Vidyesh Churi
