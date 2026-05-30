# Agent Notes

Personal website — Astro static site deployed to GitHub Pages.

## Key Files

- `astro.config.mjs` — Astro config (static output, site URL)
- `src/config.ts` — nav items, site metadata
- `src/styles/global.css` — base light/dark styles
- `tailwind.theme.config.cjs` — theme colors (light: emerald-700, dark: #4ade80)
- `.github/workflows/deploy.yml` — GitHub Pages deploy action

## Theme

- Dark mode: #0a0a0a bg, #4ade80 green accent, #e5e5e5 text
- Light mode: white bg, #047857 (emerald-700) accent, zinc-700 body text
- Toggle via Svelte ThemeToggle component; uses `html.dark` class

## Content

- Blog posts in `src/content/blog/` — require frontmatter: title, description, tags[], author, authorTwitter, date (string), category
- Pages: index, about.mdx, uses.mdx, blog/[...page]

## Deployment

- Repo: `rubenderaeve/rubenderaeve.github.io`
- Remote: `git@me.github.com:rubenderaeve/rubenderaeve.github.io.git`
- Push to main → GitHub Actions builds Astro → deploys to Pages
- Live: https://rubenderaeve.github.io/

## Commands

```bash
npm run dev          # local dev server (port 4321)
npm run build        # build to dist/
npx astro build      # same
```

## Conventions

- Use `dark:` Tailwind variants for all color classes
- No SSR/serverless — purely static
- Git email: rderaeve@gmail.com
