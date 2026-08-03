# Signal / Pipeline portfolio (Astro)

Modern Astro + markdown preview of Ahmed Abdeljaoued’s portfolio using the **Signal / Pipeline** theme.

The classic static CeeVee site remains at the repo root. This folder is the next-gen stack demo.

## Run locally

```bash
cd signal-pipeline
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

## Content model

| Path | Purpose |
|------|---------|
| `src/data/profile.ts` | Name, about, skills, education, links |
| `src/content/experience/*.md` | Work history (frontmatter + body) |
| `src/content/certifications/*.md` | Certifications + verify URLs |
| `src/content/projects/*.md` | Portfolio cards |

Edit markdown/frontmatter, refresh the browser — no HTML hand-editing for content.

## Deploy (GitHub Pages)

On every push to `master`, GitHub Actions builds this app and deploys `dist/` to
https://ahmedabdeljaoued.github.io.

One-time repo setting: **Settings → Pages → Source → GitHub Actions**.

You can also run the workflow manually: **Actions → Deploy Astro site to GitHub Pages → Run workflow**.
