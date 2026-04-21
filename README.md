# Web Guy Nick LLC — webguynick.com

Static, fast, mobile-first site for Web Guy Nick LLC. Built with Astro + Tailwind v4, deployed via GitHub Actions to GitHub Pages. Content lives in Markdown/JSON so it's safe and simple to update.

## Stack

- **Astro 5** (static, zero-JS-by-default)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Content Collections** for articles, hosting reviews, and resource picks
- **GitHub Actions** for deploy, daily audit, weekly link check, and daily draft-article scaffolding

## Local development

This project needs Node 20+. If you don't have it:

```bash
# macOS (Homebrew)
brew install node
```

Then:

```bash
npm install
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying

The `deploy.yml` workflow builds and publishes to GitHub Pages on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub (e.g. `github.com/webguynick/webguynick`).
2. **Settings → Pages → Build and deployment → Source:** "GitHub Actions".
3. **Settings → Pages → Custom domain:** `webguynick.com`. Enforce HTTPS once the cert is issued.
4. In your DNS, point `webguynick.com` at GitHub Pages:
   - A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME `www` → `<user>.github.io`
5. Add these repository **Secrets** (Settings → Secrets and variables → Actions):
   - `MAILCHIMP_ACTION` — your Mailchimp embed form `action=` URL
   - `MAILCHIMP_BOT_NAME` — the `b_XXX_XXX` honeypot field name from that form
   - `CONTACT_ENDPOINT` — a Formspree/Basin/Getform endpoint for the contact form

## Content

Everything editable lives in `src/content/`:

```
src/content/
├── articles/       # blog posts (Markdown) — update daily for SEO
├── hosting/        # hosting reviews (Markdown + frontmatter)
└── resources/      # Amazon / product picks (JSON)
```

**To publish a new article:** add a new `.md` file under `src/content/articles/`, set `draft: false` and a `pubDate:`, commit, push. CI deploys in ~90 seconds.

**To add a hosting review:** copy `cloudflare-pages.md`, update fields. Ratings 0–5.

**To add a resource:** copy any `.json` in `src/content/resources/`. Amazon URLs should include `?tag=webguynick-20`.

## Daily automation

Three scheduled workflows:

| Workflow | Schedule | What it does |
|---|---|---|
| `daily-audit.yml` | 09:00 UTC | Lighthouse + SEO audit. Opens an issue with results. |
| `daily-content.yml` | 14:00 UTC | Opens a PR with a draft article stub so you have somewhere to write. |
| `link-check.yml` | Monday 12:00 UTC | Lychee scan for broken links. Opens an issue if any fail. |

Tune schedules in `.github/workflows/*.yml`. `workflow_dispatch` lets you trigger them manually from the Actions tab.

## Customization checklist

Once deployed, update these placeholders:

- [ ] `MAILCHIMP_ACTION` secret (Mailchimp → Audience → Signup forms → Embedded forms → copy `<form action="...">`)
- [ ] `MAILCHIMP_BOT_NAME` secret (the honeypot `name="b_XXX_XXX"` in the same embed)
- [ ] `CONTACT_ENDPOINT` secret (Formspree / Basin / Getform form URL)
- [ ] Add/replace Amazon products in `src/content/resources/*.json`
- [ ] Add/replace hosting reviews in `src/content/hosting/*.md`
- [ ] Review + tweak colors in `src/styles/global.css` if desired
- [ ] Replace `public/logo.jpg` if you want a cleaner version

## Security

- Static site → no server-side code to exploit.
- CSP via meta can be added in `BaseLayout.astro` once you finalize third parties.
- All outbound affiliate links are tagged `rel="nofollow sponsored"`.
- Secrets never touch the repo — they're injected at build time from GitHub Actions secrets.

## Contact

Web Guy Nick LLC · [info@webguynick.com](mailto:info@webguynick.com) · (951) 536-0028
