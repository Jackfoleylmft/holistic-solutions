# Holistic Solutions Case Management — Claude Code Instructions

## What this is
The live website for Holistic Solutions Case Management (hscasemanagement.com).
Next.js App Router. Deployed to Vercel via `vercel --prod` (auto-deploy not connected).

## SEO OS
Planning, tracking, and audits live in the SEO OS workspace:
`/Users/jack/Desktop/bh-seo-os-workspace/projects/hs-case-management/`

At the start of every session, read:
- `DASHBOARD.md` — current project state, open tasks, what's next
- `ops/page-status.md` — status of every page

## Deployment
- Git remote: github.com/Jackfoleylmft/holistic-solutions (main branch)
- Deploy: `git push origin main && vercel --prod`
- Always build (`npx next build`) before committing to catch errors
- Vercel CLI is installed and authenticated

## Key files
- `lib/constants.js` — phone, email, site URL, business name, Google Review URL
- `lib/services.js` — 8 service objects for `/services/[slug]` dynamic route
- `lib/posts.js` — all blog posts for `/blog/[slug]` dynamic route
- `app/sitemap.js` — dynamic sitemap, add new pages here
- `app/services/[slug]/page.js` — has canonical override system for SEO pages
- `components/Nav.js` — Services dropdown + mobile accordion
- `components/Footer.js` — 3-column footer with all service/location/specialty links

## SEO pages (top-level routes, not dynamic)
All SEO landing pages are standalone files at `app/[slug]/page.js`.
Each has: metadata, FAQPage schema, BreadcrumbList schema, OG tags.
When adding new ones: create directory, write page.js, add to sitemap.js, add to nav/footer/services page as appropriate.

## Rules
- Read the site codebase before building anything — confirm structure first
- Never change a slug once published
- All meta descriptions under 160 chars
- All title tags under 60 chars
- 988 crisis reference on all psychosis/crisis-adjacent content
- Person-first language throughout
- No outcome promises or unsupported clinical claims
- "All inquiries are confidential" near every CTA
- Update `ops/page-status.md` in the SEO OS after every publish

## Analytics
- GA4: G-9N3BJGHJ6C
- GSC: Connected, 51 pages discovered
- Google Review URL: https://g.page/r/CTULUgPF1KKIEBM/review
