# Portfolio Redesign — Audit, Research & Strategy

_Prepared November 2026 before implementation. This document records why the site is built the way it is._

---

## 1. Audit of the previous site

Live site reviewed: https://dizon-portfolio.vercel.app/ (plus the full source in this repository).

### Messaging
| Problem | Evidence |
| --- | --- |
| Hero leads with a name and job title, not a client benefit | H1 was "Sean Niel S. Dizon", subhead "Full-Stack Software Developer" |
| Value proposition is written for recruiters | "Available for full-time & freelance", "Download Resume" as a primary CTA, contact copy "Open to full-time roles…" |
| Technology is the selling point | Subtitle lists "web apps, REST APIs… modern JavaScript frameworks"; focus chips "IoT & Embedded", "REST APIs" |
| No business problems are named anywhere | No section speaks to an owner's pain (lost inquiries, spreadsheets, manual work) |
| Inaccurate project status | HotVibes described as "live", "currently maintaining", with a live-demo link, although the platform is offline |

### Structure & journey
- Order was About → Skills → Experience → Certifications → Projects → Achievements → Contact: a résumé, not a sales journey. Skills (an icon wall) appeared before any proof of work.
- All 22 projects were shown with near-equal weight; research prototypes (EEG screening, infant pose analysis) sat beside client work.
- Project details lived only in modals: no shareable URL, nothing indexable by search engines.
- Contact form asked only for email + message; no project type, problem, or budget, so leads arrive unqualified.

### Visual presentation
- Dark navy + sky-blue gradient, glass cards, glowing blobs, cursor-following light, grid overlay: the exact "template developer portfolio" pattern the brief asks to avoid.
- 8 projects used text-only SVG placeholders as "previews".
- Several preview images (loan system "LendFlow", lead capture "LeadFlow", TikTok "LocalAI Studio", Instructor Locator "Northwood University", PALSEE results, Beloved with a non-existent domain) are AI-generated concept renders, not real screenshots. Presenting these as screenshots is a credibility risk.
- The HotVibes preview is an 18+ age-gate page, which is unsuitable for a business audience.

### Technical
- `siteUrl` / canonical / OG URLs point to `seannieldizon.dev`, which does not resolve (checked Nov 2026).
- Busbar demo (`busbar-nine.vercel.app`) returns `404 DEPLOYMENT_NOT_FOUND`.
- Contact API interpolated user input into HTML email without escaping.
- `framer-motion` and `lottie-react` shipped for decorative effects; Lottie files unused.
- Skill icons loaded from a third-party CDN (`cdn.simpleicons.org`).

---

## 2. Research

### Sources reviewed
| Type | Site | Strongest practice | Weakness / caution |
| --- | --- | --- | --- |
| Independent developer | [derrick.dk](https://derrick.dk) | H1 names the audience and outcome ("I build websites and apps for growing companies"); one repeated CTA ("Tell me about your project"); testimonials fully attributed; process shown in 3 words | Logo wall only works with real clients |
| Independent developer | [dtampe.com](https://www.dtampe.com) | Case studies titled by business change ("Reimagining and relaunching a luxury watch boutique"); services grouped by discipline, tech as sub-items; availability badge | Weak trust signals on homepage |
| Independent developer | [vimalroy.com/portfolio](https://vimalroy.com/portfolio) | Concrete, honest role statements; live links as proof | Metrics are technical (PageSpeed), stack dominates cards, weak CTA |
| Independent designer-developer | [adhamdannaway.com](https://www.adhamdannaway.com) | Clear dual-skill framing | No CTA, no business framing: a cautionary example |
| Independent creative developer | [bruno-simon.com](https://bruno-simon.com) | Memorable | Novelty hides the work; poor for scanning business owners |
| Freelancer roundups | [derrick.dk inspiration post](https://www.derrick.dk/post/web-design-sites-for-inspiration), [HubSpot freelancer examples](https://blog.hubspot.com/website/freelancer-website-examples) | Curate fewer projects; a clear next step on every page | Lists skew to visual designers |
| Dev / product agency | [thoughtbot.com](https://thoughtbot.com) (+ [Closeknit case study](https://thoughtbot.com/case-studies/closeknit-health)) | Case study = result first, problem as a question, "what we did", attributed client quote; services grouped by business stage | — |
| Dev agency | [tighten.com](https://tighten.com) (+ [Genentech result](https://tighten.com/results/genentech/)) | "Challenge / Plan / Outcome"; "we only do a few things"; calm, type-led design; CTA "Tell us about your idea" | Outcome sometimes unquantified, which is honest |
| Product agency | [metalab.com](https://metalab.com) | Short, confident headline; work-first | Little explanatory text |
| CRO studio | [conversion-rate-experts.com](https://conversion-rate-experts.com) | Routes visitors by goal; fit statement qualifies leads | Relies on big-brand logos a solo dev cannot honestly use |
| CRO / marketing studio | [klientboost.com](https://www.klientboost.com) | One repeated, specific CTA | Unsourced averages ("63% ROI"): exactly what we must not do |
| Conversion-focused web studio | [flowninja.com](https://www.flowninja.com) | Named offers with "what's included"; review-platform score with count | Unattributed homepage stats |
| Conversion-focused web studio | [wixpatriots.com/our-work](https://www.wixpatriots.com/our-work) | "Every project starts with a business challenge"; industry label + one-line problem/fix per case | Unattributed metrics, unlabeled logos, template leftovers |

### Evidence on why websites affect business performance
- Google/SOASTA mobile research: probability of bounce rises ~32% as load time goes from 1s to 3s, ~90% from 1s to 5s ([Think with Google](https://business.google.com/uk/think/marketing-strategies/mobile-page-speed-load-time/)).
- Deloitte "Milliseconds Make Millions" (2020): small mobile speed gains correlated with higher conversion across retail/travel/lead-gen brands ([report PDF](https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf)).
- Case-study guidance ([Webflow](https://webflow.com/blog/write-the-perfect-case-study), [Solidgigs](https://solidgigs.com/blog/?p=2259)): challenge → solution → result arc; the buyer's real question is "Can this person fix my problem without wasting my money?"; end with a low-pressure next step.

These are used only to inform design choices (speed, mobile-first, clarity). **None of these figures are presented on the site as outcomes of Sean's work.**

### Principles adopted
1. **H1 names who is helped and the outcome**, never the job title or stack.
2. **Name the visitor's problem** before naming services.
3. **Services grouped by business outcome**, with "what you get" lists; technology demoted to a supporting layer.
4. **Fewer, deeper case studies** in Challenge → Solution → Business value → Implementation order, each on its own URL.
5. **Honesty as a trust signal**: status labels (Live / Historical / Client delivery / Prototype), "no measured results published" stated plainly, concept visuals labeled. Avoid the unattributed-metric pattern seen at agencies.
6. **One primary CTA** ("Discuss your project") repeated at natural decision points, with a softer secondary ("Explore my work").
7. **Show the process and what happens after contact** to reduce perceived risk.
8. **Qualify leads in the form** (project type, problem, budget band) without making it long.
9. **Calm, type-led, light visual register** (thoughtbot/Tighten), not the dark glow template; real screenshots carry the visual interest.
10. **Speed is a feature**: drop decorative animation libraries, static-generate every page.

---

## 3. Positioning & content strategy

### Positioning statement
> Sean Niel Dizon is an independent full-stack developer in the Philippines who builds websites and business systems that help owners **win more customers, turn interest into sales, and spend less time on manual work** — explained in plain language and built to be maintained.

### Homepage headline (chosen)
**"Websites and business systems that bring in customers and take work off your plate."**

Alternatives considered: "Websites and software built to help businesses grow" (too generic: every agency says "grow"); "Turning business problems into digital solutions…" (abstract; no concrete benefit). The chosen line names two concrete, felt outcomes (customers / less work) and two concrete deliverables (websites / systems).

### Ideal client segments
1. **Small and growing local businesses** (retail, services, property, lending, food) that need a credible site and an inquiry/booking flow.
2. **Operations-heavy SMEs** running on spreadsheets, notebooks and chat threads (records, collections, reservations).
3. **Founders and startups** that need an MVP, booking or marketplace prototype.
4. **Organisations / LGUs / schools** needing reporting, reservation or monitoring systems.

### The three benefit pillars (site backbone)
1. **Get more customers**: conversion-focused websites and landing pages.
2. **Turn interest into sales**: booking/reservation, lead capture, storefronts, payment-aware flows.
3. **Save time & run smoother**: custom business systems, dashboards, automation, practical AI.

### Project prioritisation
Scored on: relevance to a business buyer (problem type), evidence (client / live / historical scale), and visual proof available.

| Tier | Projects | Why |
| --- | --- | --- |
| **Featured case studies** | HotVibes (historical), Grand Eleva (client), Loan Management System, Lead Capture Automation, CoTT Laboratory Reservation (live), Beloved (live) | Cover all three pillars: paid transactions at real scale, real client records system, operations/collections, lead automation, bookings, customer-facing experience |
| **More business work** | Paliparan III Waste Reporting (live), MOVE-E (client prototype), Cop A Cap (live), Camarines Norte Lead Finder, e-Paluwagan (live), AI TikTok Content Automation | Relevant capability, but thinner evidence or narrower audience |
| **Research & technical work** | PALSEE, ThrustLab, IGNIS, SERVE, Storyforge Local, Instructor Locator, Neurofy, Busbar Forecasting, EduVision, CCTV Pan-Tilt | Academic, R&D, engineering: proves technical depth, kept available but secondary |

### Conversion journey → page architecture
```
UNDERSTAND VALUE      Hero: outcome headline · who it's for · 2 CTAs · real work visuals
RECOGNISE PROBLEM     "Sound familiar?": 6 owner problems → what I'd build
SEE SOLUTION          Services by outcome (3 pillars + practical AI), each linked to proof
TRUST CAPABILITY      Selected work (6 case studies) → more work list → "Why work with me" facts
                      Process (5 steps) · About (photo, background, credentials) · Technical capabilities
CONTACT               Qualifying form + direct email, repeated CTA band
```

Routes:
- `/`: homepage journey above
- `/work`: full archive grouped by tier
- `/work/[slug]`: dedicated case study page for every project (static, indexable, shareable)
- `/api/contact`: inquiry endpoint (existing SMTP env vars preserved)

### Honesty rules applied to copy
- No revenue, ROI, conversion or efficiency figures (none have been measured).
- "Business value" is written as what the system **makes possible**, and each case study carries an explicit _Status & evidence_ panel separating verified facts from intended benefits.
- HotVibes: past tense, no live link, no age-gate screenshot.
- AI-generated preview images labeled "Concept visual — not a product screenshot".
- No testimonials, client logos, or awards that do not exist.

---

## 4. Design system

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F4F2EC` | Page background (warm off-white: calmer and more "studio" than pure white) |
| `paper-deep` | `#EAE6DC` | Alternating section background |
| `card` | `#FFFFFF` | Raised surfaces |
| `ink` | `#15171B` | Primary text, primary buttons, dark sections |
| `ink-soft` | `#3A3E45` | Body copy |
| `muted` | `#62666E` | Secondary text (≥ 5:1 on paper) |
| `line` | `#DCD7CB` | Hairline borders |
| `accent` | `#B8441A` | Signal colour (burnt orange) used sparingly: marks, links, key words (≥ 4.5:1 on paper) |
| `accent-bright` | `#F0884F` | Accent on dark sections |

- **Type:** Fraunces (display serif, optical sizing) for headlines: editorial and confident, unlike the geometric sans used by most dev portfolios. DM Sans for body and UI (retained from the existing site).
- **Spacing:** 4px base; sections `py-20 md:py-28`; content max-width 1200px; reading width ~68ch.
- **Buttons:** solid ink (primary), outlined ink (secondary), text-link with arrow (tertiary). 44px min touch height.
- **Cards:** white, 1px `line` border, 14px radius, no glow; hover lifts border colour only.
- **Motion:** one-time fade/translate reveal (IntersectionObserver + CSS), disabled under `prefers-reduced-motion`. No cursor effects, floating blobs or counters.
- **Imagery:** real screenshots in neutral browser frames; typographic cover panels where no honest screenshot exists.
