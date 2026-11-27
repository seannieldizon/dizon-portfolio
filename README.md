# Sean Niel Dizon: Websites & Business Systems

Portfolio and client-acquisition site for Sean Niel Dizon, an independent full-stack developer. The site is written for business owners first (problems → services → proof → process → contact), with technical detail kept available but secondary.

Strategy, research and design decisions: [`docs/redesign-strategy.md`](docs/redesign-strategy.md).

## Stack

- Next.js 13 (Pages Router) + TypeScript
- Tailwind CSS 3 (design tokens in `tailwind.config.js`)
- `next/font`: Fraunces (headlines), DM Sans (body)
- Nodemailer for the inquiry form
- No animation libraries: reveals use CSS + `IntersectionObserver` and respect `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
data/
  profile.ts      # bio, experience, credentials, HOTVIBES_USERS, siteUrl
  projects.ts     # every project: business story, status, evidence, images, tech
  services.ts     # problems, services, AI, process, FAQ, form options
  skills.ts       # technical capabilities (with "used in" traceability)
components/
  Layout, Navbar, Footer, Seo, Reveal, CtaBand, StatusBadge, ProjectVisual
  home/           # Hero, Problems, Services, SelectedWork, Trust, Process,
                  # About, Capabilities, Faq, Contact
pages/
  index.tsx       # homepage
  work/index.tsx  # full archive (featured / business / technical)
  work/[slug].tsx # case study page for every project (static)
  api/contact.ts  # inquiry endpoint
  sitemap.xml.ts, robots.txt.ts, 404.tsx
public/
  images/work/    # real screenshots of live projects (captured Nov 2026)
  og-image.jpg    # social share image (1200×630)
```

## Adding or editing a project

Edit `data/projects.ts`. A case-study page is generated automatically at `/work/<slug>` and added to the sitemap.

Honesty rules the site follows:

- `value`: what the system makes possible. Not measured results.
- `evidence.verified`: only facts that can be backed up.
- `evidence.measured`: leave as `NOT_MEASURED` until real numbers exist.
- `images[].kind`: `"concept"` for illustrative/AI-generated renders (labeled on the site), `"screenshot"` for real captures.
- `status.kind`: `live | historical | client | built | prototype | in-development | offline`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Required for the contact form |
| `SMTP_FROM`, `CONTACT_TO` | Optional sender / recipient |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for SEO (defaults to `https://dizon-portfolio.vercel.app`) |

Set these in `.env.local` locally and in the Vercel dashboard for production.
