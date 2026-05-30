# rubenderaeve.github.io

Personal website and blog of Ruben De Raeve — software engineer at Bricsys (Ghent, Belgium).

Live at: https://rubenderaeve.github.io/

## Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Svelte](https://svelte.dev/) — interactive components (theme switcher)
- GitHub Pages — hosting via GitHub Actions

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to dist/
```

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

## Structure

```
src/
├── components/    # Astro/Svelte components
├── content/blog/  # Blog posts (MDX/Markdown)
├── layouts/       # Page layouts
├── pages/         # Routes (index, about, uses, blog)
└── styles/        # Global CSS
```
