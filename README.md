# Anime Qatoto — frontend

Web frontend for **Anime Qatoto**: an AI anime generator and video editor, with a browsing
catalogue on the front and YouTube publishing on the back.

The whole app runs on **local fixtures and local images** — no backend, no API keys, no network.
`pnpm install && pnpm dev` gives you every screen immediately.

## Status

The **anime catalogue** is a full UI port: hero carousel, category tiles, five media rails, and
the genre / daily / favorite / ranking sub-pages, plus series detail and a watch surface.

The **Studio** is a static mock. The generator, editor and publish queue render complete layouts
from fixtures, but every control is inert — nothing calls a model, renders a video, or uploads.
Each page says so on itself.

## Tech stack

| Layer           | Choice                                                                                 |
| --------------- | -------------------------------------------------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org) 16.3.4 (App Router, Turbopack)                           |
| UI              | React 19.2.8 with the [React Compiler](https://react.dev/learn/react-compiler) enabled |
| Styling         | [Tailwind CSS](https://tailwindcss.com) v4 (CSS-first config in `src/app/globals.css`) |
| Language        | TypeScript 7 (the Go-native compiler)                                                  |
| Lint / format   | [oxlint](https://oxc.rs) + [oxfmt](https://oxc.rs)                                     |
| Fonts           | Geist Sans, Geist Mono, Roboto Serif via `next/font`                                   |
| Package manager | pnpm 11.25.0                                                                           |

## Getting started

```bash
pnpm install
pnpm dev
```

`.env.local` is optional — nothing in the app reads an API today. See [`.env.example`](.env.example).

## Scripts

| Command          | What it does                                        |
| ---------------- | --------------------------------------------------- |
| `pnpm dev`       | Start the dev server                                |
| `pnpm build`     | Production build                                    |
| `pnpm start`     | Serve the production build (run `pnpm build` first) |
| `pnpm lint`      | oxlint                                              |
| `pnpm lint:fix`  | oxlint with autofix                                 |
| `pnpm fmt`       | oxfmt (writes)                                      |
| `pnpm fmt:check` | oxfmt (check only)                                  |
| `pnpm typecheck` | `tsc --noEmit`                                      |

## Routes

| Route                        | What it is                                          |
| ---------------------------- | --------------------------------------------------- |
| `/`                          | Anime catalogue — hero, categories, five rails      |
| `/anime/genre`               | Genre chips + sort, video grid                      |
| `/anime/daily`               | Weekly schedule, day tabs                           |
| `/anime/favorite`            | Liked / bookmarked tabs                             |
| `/anime/ranking`             | Ranked rows with medal badges, period tabs          |
| `/anime/series/[seriesSlug]` | Series hero + season/episode grid                   |
| `/anime/watch`               | Watch surface (playback not wired)                  |
| `/library`                   | Placeholder — states plainly that it is not built   |
| `/studio`                    | AI generator — prompt, style, aspect ratio, results |
| `/studio/editor`             | Video editor — preview, timeline, clips, inspector  |
| `/studio/publish`            | YouTube publish queue                               |

## Project structure

```
src/
  app/
    (site)/        browsing shell: navbar + sidebar + mobile bottom nav
    studio/        studio shell: its own navbar + sidebar
  components/
    anime/         catalogue: rails, cards, sections, sub-page views
    studio/        generator, editor, publish
    layout/        navbar, sidebar, bottom nav, shared nav config
    shared/        video card, planned-page placeholder
    theme/         pre-paint theme script + toggle
  mocks/           all fixture data
  types/           anime, series, video, studio shapes
public/
  dummy/           anime artwork (.avif)
  icons/           Material Symbols (.svg)
```

## Notes for contributors

- This repo pins a Next.js version whose APIs and conventions differ from older releases. Check
  the bundled docs in `node_modules/next/dist/docs/` before reaching for remembered patterns —
  see [`AGENTS.md`](AGENTS.md).
- Tailwind v4 has no `tailwind.config.js`; theme tokens live in `:root`, `.dark` and the
  `@theme inline` block in `src/app/globals.css`.
- Dark mode is **class-driven**. Tailwind v4 does not honour a `.dark` class by default — the
  `@custom-variant dark` declaration at the top of `globals.css` is what makes it work, and
  `src/components/theme/theme-script.tsx` sets the class before first paint.
- `oxfmt` sorts Tailwind classes against `src/app/globals.css`. If that file ever moves, update
  `sortTailwindcss.stylesheet` in `.oxfmtrc.json` or sorting silently stops working.
- Two filenames in `public/` are misspelled (`new_arriavals*.avif`, `fovorite_40dp.svg`). The
  fixtures reference them exactly as they are on disk — correcting one without the other 404s
  the image.

## License

MIT © 2026 Vidyesh Churi — see [LICENSE](LICENSE).
