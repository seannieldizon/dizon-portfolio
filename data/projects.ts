// data/projects.ts
//
// Every project is written business-value first, technical detail second.
// Honesty rules (see docs/redesign-strategy.md):
//   - `value` lists what a system is built to make possible, NOT measured results.
//   - `evidence.verified` holds only facts that can be backed up (résumé, live URL, client role).
//   - `evidence.measured` stays as the default "No measured results published" until real data exists.
//   - Images with kind "concept" are AI-generated or illustrative renders and are labeled on the site.

import { HOTVIBES_USERS } from "./profile";

export type ProjectTier = "featured" | "business" | "technical";

export type StatusKind =
  | "live"
  | "historical"
  | "client"
  | "built"
  | "prototype"
  | "in-development"
  | "offline";

export type Pillar = "customers" | "sales" | "operations" | "ai";

export interface ProjectImage {
  src: string;
  alt: string;
  /** "screenshot" = real interface capture. "concept" = illustrative render, labeled on the site. */
  kind: "screenshot" | "concept";
  /** Logos and portrait phone captures should not be cropped. */
  fit?: "cover" | "contain";
  /** Real pixel size, used for layout and next/image. */
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  /** Case-study headline: the business change, in plain language. */
  headline: string;
  /** Short context label, e.g. "Property · Client records". */
  sector: string;
  /** One or two sentences a non-technical owner understands. */
  summary: string;
  tier: ProjectTier;
  pillars: Pillar[];
  status: { kind: StatusKind; label: string; note?: string };
  client?: string;
  role: string;
  year: number;
  challenge: string;
  solution: string;
  /** What the system makes possible for a business. Not measured outcomes. */
  value: string[];
  evidence: { verified: string[]; measured?: string };
  features: string[];
  implementation: string;
  tech: string[];
  images: ProjectImage[];
  demo?: string;
  codeNote?: string;
}

export const NOT_MEASURED =
  "No revenue, conversion or efficiency figures have been measured or published for this project.";

const landscape = { width: 1280, height: 720 };
const live = { width: 1280, height: 800 };

export const projects: Project[] = [
  // ───────────────────────── FEATURED CASE STUDIES ─────────────────────────
  {
    slug: "hotvibes",
    title: "HotVibes",
    headline:
      `A paid-content platform that handled subscriptions, credits and creator payouts for ${HOTVIBES_USERS} users`,
    sector: "Creator subscription platform · Payments",
    summary:
      "A creator marketplace where customers paid through subscriptions, credit bundles and one-off unlocks, while admins reviewed payments and creator withdrawals.",
    tier: "featured",
    pillars: ["sales", "operations"],
    status: {
      kind: "historical",
      label: "Historical · offline",
      note:
        "HotVibes is no longer online: the owner discontinued funding for the platform. It was an age-restricted (18+) creator platform. No live link is provided and Sean no longer maintains it.",
    },
    role: "Full-stack developer (built and maintained while it was live)",
    year: 2025,
    challenge:
      "The owner needed a platform where creators could earn from their content, with customers able to pay in more than one way, and with staff able to check payments and approve creator withdrawals before money moved.",
    solution:
      "I built the full platform: customer accounts, creator profiles, three ways to pay (VIP subscriptions, creator-specific credits, and pay-per-view unlocks), video upload and streaming, real-time features, and an admin back-office for payment and withdrawal review. I also handled production deployment and ongoing maintenance while it ran.",
    value: [
      "Customers could pay the way they preferred: subscription, credits or single purchases.",
      "Payment and withdrawal review gave the owner a controlled view of money moving through the platform.",
      "Separate permissions for customers, creators, moderators and admins kept each group to the tools they needed.",
      "The system ran in production with real users at scale, not just as a demo.",
    ],
    evidence: {
      verified: [
        `Served ${HOTVIBES_USERS} users while it was online (as stated on Sean's résumé).`,
        "Sean was the full-stack developer and maintained it in production until it was discontinued.",
      ],
      measured: NOT_MEASURED,
    },
    features: [
      "Role-based access for users, creators (models), sub-admins and admins",
      "Creator-specific credits, pay-per-view unlocks and VIP subscriptions",
      "Admin review of payments and creator withdrawals",
      "Video upload and storage with HLS/MP4 playback",
      "Real-time features with Socket.IO",
      "Split frontend/API production deployment (Hostinger + Render)",
    ],
    implementation:
      "React single-page frontend with an Express API and PostgreSQL accessed through Prisma. Paid-access rules were enforced server-side per creator and per media item. Video was uploaded, stored and served as HLS/MP4 streams. Socket.IO powered real-time updates. The frontend was hosted on Hostinger and the API on Render.",
    tech: ["React", "Express", "PostgreSQL", "Prisma", "Socket.IO", "HLS/MP4", "Hostinger", "Render"],
    images: [],
  },
  {
    slug: "grand-eleva",
    title: "Grand Eleva — Client & Transaction Records",
    headline: "Giving a property company one reliable place for client and transaction records",
    sector: "Real estate · Client records",
    summary:
      "A web-based system for Grand Eleva Prime Properties Co. to add, update and track client, property and transaction records.",
    tier: "featured",
    pillars: ["operations"],
    status: { kind: "client", label: "Client delivery · 2025" },
    client: "Grand Eleva Prime Properties Co.",
    role: "Web developer (contract)",
    year: 2025,
    challenge:
      "The company needed a dependable, central way to record its clients, the properties they were interested in, and the transactions between them, and to keep those records up to date as deals progressed.",
    solution:
      "I gathered requirements directly with the company's stakeholders, then built a web system where staff can add, update and track client and property data alongside each transaction, with attention to secure handling of sensitive client information.",
    value: [
      "One place to look up a client together with their property and transaction history.",
      "Records are updated and tracked over time instead of being re-created or lost.",
      "Access-controlled handling of sensitive client data.",
      "Built around the company's own workflow, from requirements gathered with its team.",
    ],
    evidence: {
      verified: [
        "Contract web developer for Grand Eleva Prime Properties Co., June–August 2025.",
        "Source code is private to the client (details available on request).",
      ],
      measured: NOT_MEASURED,
    },
    features: [
      "Client and transaction record management",
      "Add, update and track client and property data",
      "Secure data handling and database performance tuning",
      "Requirements gathered and validated with stakeholders",
    ],
    implementation:
      "React.js frontend with a Node.js API and MongoDB. Work included data modelling for clients, properties and transactions, input validation, and query optimisation for record lookups.",
    tech: ["React", "Node.js", "MongoDB"],
    images: [
      {
        src: "/images/geppco-logo.png",
        alt: "Grand Eleva Prime Properties Co. logo",
        kind: "screenshot",
        fit: "contain",
        width: 242,
        height: 243,
      },
    ],
    codeNote: "Private client project. Details available on request.",
  },
  {
    slug: "loan-management",
    title: "Loan Management System",
    headline: "A lending back-office for loans, daily collections, remittances and reports, online or offline",
    sector: "Lending · Operations",
    summary:
      "Software for small lending operations to track loans, record daily collections and remittances, log expenses and produce reports, with a desktop version that keeps working without internet.",
    tier: "featured",
    pillars: ["operations"],
    status: {
      kind: "built",
      label: "Complete build · production-ready",
      note: "Built as a complete, production-ready system. It is not presented here as running at a named lender.",
    },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Small lending operations often track loans, collections and expenses by hand or in spreadsheets, which makes totals hard to trust and reports slow to prepare. Field collection also can't always count on an internet connection.",
    solution:
      "I built a web app and an offline-first desktop app on one shared backend. Loan totals calculate automatically; collectors record daily collections and remittances; expenses and income statements roll up into a dashboard and exportable reports. The desktop app syncs in the background when it's back online.",
    value: [
      "Loan totals are calculated by the system, not by hand.",
      "Collections, remittances and expenses live in one ledger instead of several sheets.",
      "Owners get a dashboard and downloadable CSV/PDF reports without assembling them manually.",
      "Work continues offline and syncs later, so a bad connection doesn't stop the day.",
    ],
    evidence: {
      verified: ["Working web, desktop and API applications built by Sean."],
      measured: NOT_MEASURED,
    },
    features: [
      "Loan terms with auto-calculated totals",
      "Daily collections, remittances and expense tracking",
      "Income statements and dashboard analytics",
      "CSV/PDF report exports",
      "JWT-secured accounts",
      "Electron offline desktop client with background sync",
    ],
    implementation:
      "Monorepo with a Node.js + Express API, a React + Vite web client, and an Electron desktop client using local SQLite storage for offline-first operation and background synchronisation. JWT authentication.",
    tech: ["React", "Vite", "Electron", "Node.js", "Express", "JWT", "SQLite"],
    images: [
      {
        src: "/images/loan-management-preview.jpg",
        alt: "Illustrative dashboard for the loan management system",
        kind: "concept",
        ...landscape,
      },
    ],
  },
  {
    slug: "lead-capture",
    title: "Lead Capture Automation",
    headline: "Every website inquiry captured, stored and answered automatically with a personalised reply",
    sector: "Lead generation · Automation · AI",
    summary:
      "A lightweight system that collects inquiries from a landing page, saves them, writes a personalised reply with AI and emails it to the lead, with an admin list of every inquiry.",
    tier: "featured",
    pillars: ["customers", "sales", "ai"],
    status: { kind: "built", label: "Working MVP" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Inquiries that wait hours for a reply often go cold, but small teams can't always answer instantly, and a full CRM can be more than they need.",
    solution:
      "I built a landing page form that validates and stores each inquiry, generates a personalised first reply with OpenAI, and sends it by email automatically. A simple admin page lists every lead captured. The automation is split into 'receive' and 'process' steps so it can also be triggered from other forms or webhooks.",
    value: [
      "No inquiry is lost: each one is stored as soon as it's submitted.",
      "Leads receive a relevant first reply automatically, even outside working hours.",
      "The owner sees every inquiry in one list without setting up a CRM.",
      "Designed to plug into other forms or tools later.",
    ],
    evidence: {
      verified: ["Working MVP built by Sean."],
      measured: NOT_MEASURED,
    },
    features: [
      "Landing page lead form with validation",
      "OpenAI-generated personalised replies",
      "Automated email delivery via SMTP",
      "Admin dashboard of captured leads",
      "Webhook-friendly receive/process automation structure",
    ],
    implementation:
      "Next.js and TypeScript with Zod validation, a file-backed storage adapter (swappable for a database), OpenAI for reply generation and Nodemailer (Gmail SMTP) for delivery. Tailwind CSS UI.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Nodemailer", "Zod", "Tailwind CSS"],
    images: [
      {
        src: "/images/lead-capture-preview.jpg",
        alt: "Illustrative lead form and admin lead list",
        kind: "concept",
        ...landscape,
      },
    ],
  },
  {
    slug: "cott-lab-reservation",
    title: "CoTT Laboratory Reservation",
    headline: "An online reservation desk for laboratory facilities and equipment",
    sector: "Education · Bookings & reservations",
    summary:
      "Students and faculty request laboratory facilities, tools and equipment online; staff approve or decline requests and manage what's available.",
    tier: "featured",
    pillars: ["sales", "operations"],
    status: { kind: "live", label: "Live" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Laboratory bookings were hard to coordinate across students, faculty and staff without a shared system, which leads to double bookings, unclear availability and back-and-forth messages.",
    solution:
      "I built a reservation web app where users request a facility or item for a time slot and track their requests, while laboratory staff approve or reject requests and keep availability current.",
    value: [
      "Requests arrive in one queue instead of scattered messages.",
      "Staff approve or decline with a click, and requesters can see the status.",
      "Availability is visible before someone asks, reducing conflicts.",
      "The same pattern fits clinics, rentals, studios, venues and service appointments.",
    ],
    evidence: {
      verified: ["Live at cott-lab-web.vercel.app (checked November 2026)."],
      measured: NOT_MEASURED,
    },
    features: [
      "Reservation flows for students and faculty",
      "Staff tools to approve or reject bookings",
      "Facility and equipment availability management",
    ],
    implementation: "Next.js, React and TypeScript web application deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    images: [
      {
        src: "/images/work/cottlab-live.jpg",
        alt: "CoTT Laboratory Reservation System homepage",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://cott-lab-web.vercel.app/",
  },
  {
    slug: "beloved-invitations",
    title: "Beloved — Digital Invitations",
    headline: "A digital invitation storefront with 40 designs guests open like a real experience",
    sector: "Events · Product showcase",
    summary:
      "A showcase of 40 interactive digital invitation designs across eight occasions. Visitors browse by occasion and open any design to see exactly what their guests would see.",
    tier: "featured",
    pillars: ["customers"],
    status: { kind: "live", label: "Live showcase" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Printed invitations are static and easy to lose. Hosts need something shareable and mobile-friendly that keeps every event detail in one place, and a buyer needs to see the product before choosing it.",
    solution:
      "I built a catalogue organised by occasion where every design opens as a full guest experience: opening animation, event details, countdown, venue, programme, story sections and RSVP prompts. Designs are generated from structured data and reusable components, so new ones can be added without building pages from scratch.",
    value: [
      "Products are organised by category, so visitors find the right one quickly.",
      "Every design can be previewed exactly as a guest would experience it, which builds buying confidence.",
      "Mobile-first, because invitations are opened on phones.",
      "New designs and occasions are added from data, keeping the catalogue easy to grow.",
    ],
    evidence: {
      verified: ["Live at digital-invitation-gold.vercel.app (checked November 2026)."],
      measured: NOT_MEASURED,
    },
    features: [
      "40 designs across 8 occasions (weddings, birthdays, debuts, christenings and more)",
      "Interactive guest experience: countdown, venue, programme, story and RSVP",
      "Responsive layouts for phone, tablet and desktop",
      "Occasion-specific templates with distinct visual identities",
      "Data-driven architecture for adding designs without one-off pages",
    ],
    implementation:
      "Next.js with TypeScript and dynamic routes (e.g. /occasions/wedding, /invitation/wedding/ivory-romance), Tailwind CSS, and Framer Motion for opening transitions. Invitation content is structured data rendered through shared components; photography from Unsplash.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    images: [
      {
        src: "/images/work/beloved-live.jpg",
        alt: "Beloved digital invitations homepage",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://digital-invitation-gold.vercel.app/",
  },

  // ───────────────────────── MORE BUSINESS WORK ─────────────────────────
  {
    slug: "waste-reporting",
    title: "Paliparan III Waste Reporting",
    headline: "A reporting and monitoring system connecting residents with barangay officials",
    sector: "Local government · Reporting & monitoring",
    summary:
      "Residents report waste issues with photos and location and check collection schedules; officials monitor, respond and review analytics.",
    tier: "business",
    pillars: ["operations"],
    status: { kind: "live", label: "Live" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Waste issues in Barangay Paliparan III, Dasmariñas City were hard to report and track consistently between residents and officials.",
    solution:
      "I built a citizen reporting platform with photo and map-location reports, zone-based collection schedules, staff monitoring tools and response analytics.",
    value: [
      "Reports arrive with photo and location, so staff know exactly what and where.",
      "Residents can check collection schedules for their zone themselves.",
      "Officials can see response times and recurring problem areas.",
    ],
    evidence: {
      verified: ["Live at paliparan-iii-waste-reporting.vercel.app (checked November 2026)."],
      measured: NOT_MEASURED,
    },
    features: [
      "Resident reports with map location, photos and categories",
      "Collection schedules by zone",
      "Analytics for response times and compliance",
      "Truck tracking and route overlays for staff",
      "Offline-capable reporting with sync when online",
    ],
    implementation: "Next.js, React and TypeScript with map integration, deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Maps", "Vercel"],
    images: [
      {
        src: "/images/work/waste-reporting-live.jpg",
        alt: "Paliparan III Waste Reporting and Monitoring System homepage",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://paliparan-iii-waste-reporting.vercel.app/",
  },
  {
    slug: "move-e",
    title: "MOVE-E — Booking & Delivery App",
    headline: "A booking and delivery app prototype to test a new service business",
    sector: "Logistics · Mobile booking",
    summary:
      "A cross-platform mobile app and backend covering service discovery, provider onboarding, bookings, scheduling and delivery tracking, built for Amors Group's feasibility study.",
    tier: "business",
    pillars: ["sales", "operations"],
    status: { kind: "prototype", label: "Client prototype · feasibility study" },
    client: "Amors Group",
    role: "Full-stack / mobile developer",
    year: 2025,
    challenge:
      "Before investing in a booking and delivery service, the client needed a working technical prototype to validate the workflows in its feasibility study.",
    solution:
      "I built a Flutter mobile app with a Node.js + Express REST backend covering discovery, provider onboarding, booking, scheduling, notifications, a payments prototype and delivery tracking.",
    value: [
      "Let the client test real booking and delivery flows before committing to a full build.",
      "Covered both sides of the service: customers and providers.",
      "One codebase for Android and iOS.",
    ],
    evidence: {
      verified: ["Prototype built for Amors Group's feasibility study (2025). Source code private."],
      measured: NOT_MEASURED,
    },
    features: [
      "Service discovery and provider onboarding",
      "Booking, scheduling and notifications",
      "Payments prototype and delivery tracking",
    ],
    implementation: "Flutter (Dart) client with Node.js + Express REST APIs and MongoDB.",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/Move-e_logo.png",
        alt: "MOVE-E logo",
        kind: "screenshot",
        fit: "contain",
        width: 360,
        height: 360,
      },
    ],
    codeNote: "Private client project. Details available on request.",
  },
  {
    slug: "cop-a-cap",
    title: "Cop A Cap",
    headline: "A branded storefront for cap drops with secure accounts and a local checkout flow",
    sector: "E-commerce · Storefront",
    summary:
      "A product storefront for caps and streetwear accessories with secure sign-in, OTP-protected accounts and a checkout experience aimed at Philippine shoppers.",
    tier: "business",
    pillars: ["customers", "sales"],
    status: { kind: "live", label: "Live" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "A product brand needed a modern storefront to present new drops and let shoppers create secure accounts before checkout.",
    solution:
      "I built a branded storefront with product storytelling, secure sign-in with email OTP verification, and a checkout flow oriented to local shoppers.",
    value: [
      "Brand-led product presentation instead of a generic marketplace listing.",
      "Customer accounts protected with password and email OTP verification.",
      "Checkout flow designed for local shoppers.",
    ],
    evidence: {
      verified: ["Live at cop-a-cap.vercel.app (checked November 2026)."],
      measured: NOT_MEASURED,
    },
    features: [
      "Product landing experience for cap drops",
      "Secure sign-in and OTP-protected account flows",
      "Philippines-oriented checkout presentation",
    ],
    implementation: "Next.js, React and TypeScript deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    images: [
      {
        src: "/images/work/copacap-live.jpg",
        alt: "Cop A Cap sign-in page",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://cop-a-cap.vercel.app/",
  },
  {
    slug: "lead-finder",
    title: "Camarines Norte Lead Finder",
    headline: "Finding, researching and contacting local business prospects without spamming anyone",
    sector: "Sales prospecting · Automation · AI",
    summary:
      "A tool that discovers local businesses, researches public contact details, analyses their websites, scores lead potential, maps them, and drafts outreach emails that are only sent after explicit approval.",
    tier: "business",
    pillars: ["sales", "ai"],
    status: { kind: "built", label: "Working tool · runs locally" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Researching local businesses for outreach is slow and manual, and automated tools easily cross into spam.",
    solution:
      "I built an approval-first pipeline: find → verify → analyse → score → map → draft email → human approval → controlled send through Gmail. Nothing is ever sent automatically after discovery.",
    value: [
      "Prospect research that used to take hours is organised in one place.",
      "Lead scores help decide who to contact first.",
      "Every message is reviewed by a person before it goes out.",
    ],
    evidence: { verified: ["Working application built by Sean, run locally."], measured: NOT_MEASURED },
    features: [
      "Business discovery and public contact research",
      "Website analysis and lead scoring",
      "Map view with OpenStreetMap / Leaflet",
      "Gmail OAuth outreach only after explicit approval",
    ],
    implementation: "Next.js and TypeScript with PostgreSQL/Prisma, Redis job queue, Leaflet maps and Gmail API.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Leaflet", "Gmail API"],
    images: [
      {
        src: "/images/lead-finder-preview.jpg",
        alt: "Illustrative map-and-leads view for the lead finder",
        kind: "concept",
        ...landscape,
      },
    ],
  },
  {
    slug: "e-paluwagan",
    title: "e-Paluwagan",
    headline: "Bringing community savings groups (paluwagan) online",
    sector: "Community finance · Records",
    summary:
      "A web platform for organising paluwagan savings circles online instead of tracking contributions by hand.",
    tier: "business",
    pillars: ["operations"],
    status: { kind: "live", label: "Live" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Traditional paluwagan groups often rely on manual tracking that's hard to share and hard to audit.",
    solution:
      "I built a web platform with member accounts (including Google sign-in) for organising paluwagan participation and records online.",
    value: [
      "Shared, online records instead of one person's notebook.",
      "Members sign in to see the group's information.",
    ],
    evidence: { verified: ["Live at e-paluwagan.vercel.app (checked November 2026)."], measured: NOT_MEASURED },
    features: ["Digital paluwagan web application", "Email and Google sign-in", "Built for community savings workflows"],
    implementation: "Next.js, React and TypeScript deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    images: [
      {
        src: "/images/work/epaluwagan-live.jpg",
        alt: "e-Paluwagan sign-in page",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://e-paluwagan.vercel.app/",
  },
  {
    slug: "ai-tiktok-automation",
    title: "AI TikTok Content Automation",
    headline: "A content pipeline from trend research to finished video, with human-approved publishing",
    sector: "Content operations · Automation · AI",
    summary:
      "A local platform that moves short-form content from trends and ideas to scripts, media and rendered video, and publishes only what a person approves.",
    tier: "business",
    pillars: ["operations", "ai"],
    status: { kind: "built", label: "Working platform · runs locally" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Producing short-form video consistently involves many repetitive steps, but fully automatic posting risks publishing something off-brand.",
    solution:
      "I built a phased pipeline (projects → trends → ideas → scripts → media → render) that ends in human-approved publishing via the TikTok Content Posting API, or a local mock provider for testing.",
    value: [
      "Repetitive production steps are organised into one pipeline.",
      "Nothing is published without a person approving it.",
    ],
    evidence: { verified: ["Working local platform built by Sean, with Vitest and Playwright tests."], measured: NOT_MEASURED },
    features: [
      "End-to-end flow: trends → ideas → scripts → media → render",
      "Human-approved publishing only",
      "Background job queue",
      "Vitest and Playwright test coverage",
    ],
    implementation:
      "Monorepo with a React/Vite/MUI frontend, Express + TypeScript backend, PostgreSQL via Prisma and Redis for background jobs. Publishing via TikTok Content Posting API (OAuth) or a mock provider.",
    tech: ["React", "Vite", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis"],
    images: [
      {
        src: "/images/tiktok-automation-preview.jpg",
        alt: "Illustrative content pipeline dashboard",
        kind: "concept",
        ...landscape,
      },
    ],
  },

  // ───────────────────────── RESEARCH & TECHNICAL WORK ─────────────────────────
  {
    slug: "thrustlab",
    title: "ThrustLab",
    headline: "An interactive 3D simulator that teaches turbofan engines without a physical lab",
    sector: "Education · 3D simulation · AI",
    summary:
      "A web-based 3D learning platform for aeronautical engineering students, with assembly/disassembly, quizzes and an AI assistant.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "live", label: "Live" },
    role: "Full-stack / web developer",
    year: 2026,
    challenge:
      "Turbofan engine concepts are hard to teach with static materials, and students rarely get hands-on access to real engines.",
    solution:
      "I built a browser-based 3D simulator with learning zones, a virtual overhaul station, quiz-based assessment and JAJA, an AI assistant specialised in turbofan engines.",
    value: [
      "Hands-on exploration without lab equipment.",
      "Built-in quizzes reinforce what students learn.",
    ],
    evidence: { verified: ["Live at thrustlab-main.vercel.app (checked November 2026)."], measured: NOT_MEASURED },
    features: [
      "Interactive 3D turbofan exploration",
      "Overhaul station for virtual assembly and disassembly",
      "Quiz-based Test Bay",
      "JAJA AI assistant for guided explanations",
      "Designed for aeronautical engineering coursework (A.Y. 2025–2026)",
    ],
    implementation: "Next.js, React and TypeScript with in-browser 3D rendering and an AI assistant, deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "3D Web", "AI Assistant", "Vercel"],
    images: [
      {
        src: "/images/work/thrustlab-live.jpg",
        alt: "ThrustLab homepage",
        kind: "screenshot",
        ...live,
      },
    ],
    demo: "https://thrustlab-main.vercel.app/",
  },
  {
    slug: "palsee",
    title: "PALSEE — Infant Movement Screening",
    headline: "On-device infant movement screening that never uploads a video",
    sector: "Health research · Computer vision",
    summary:
      "An Android research app that analyses infant limb movement from a short video, fully offline, to support early cerebral palsy risk screening. Screening only, not diagnosis.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "prototype", label: "Research prototype" },
    role: "Android / computer vision developer",
    year: 2026,
    challenge:
      "Early motor-risk screening usually needs clinic visits and specialised tools, while most video ML relies on cloud processing, which is a privacy concern for infant footage.",
    solution:
      "I built a fully on-device Android pipeline: camera → pose estimation → movement measurements → an auditable screening score → results, with no network required.",
    value: [
      "Sensitive video never leaves the phone.",
      "Works without an internet connection.",
    ],
    evidence: { verified: ["Research prototype with golden-path unit tests for the scoring framework."], measured: NOT_MEASURED },
    features: [
      "Live CameraX capture with real-time pose overlay",
      "Import existing videos",
      "33-point landmarks → joint angles → kinematic streams → CORE108 / PALSEE V3 score",
      "Offline-first assessment history with optional CSV/report export",
      "English + Filipino localisation and screening-only safety copy",
    ],
    implementation:
      "Kotlin + Jetpack Compose (Material 3), CameraX, MediaPipe Pose on-device, spatiotemporal kinematics feature extraction and a frozen PALSEE V3 / CPRAS scoring framework.",
    tech: ["Kotlin", "Jetpack Compose", "CameraX", "MediaPipe Pose", "Android"],
    images: [
      { src: "/images/palsee-home.jpg", alt: "Illustrative PALSEE home screen", kind: "concept", fit: "contain", width: 720, height: 1280 },
      { src: "/images/palsee-capture.jpg", alt: "Illustrative PALSEE capture screen", kind: "concept", fit: "contain", width: 720, height: 1280 },
      { src: "/images/palsee-results.jpg", alt: "Illustrative PALSEE results screen", kind: "concept", fit: "contain", width: 720, height: 1280 },
    ],
  },
  {
    slug: "storyforge",
    title: "Storyforge Local",
    headline: "A private AI writing workspace where manuscripts never leave your computer",
    sector: "Private AI · Desktop web app",
    summary:
      "A local-first writing and story development workspace powered only by a local Ollama installation, so drafts, analysis and suggestions stay on the machine.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "built", label: "Working app · runs locally" },
    role: "Full-stack developer",
    year: 2026,
    challenge:
      "Most AI writing tools send manuscripts to the cloud, which is a poor fit for private drafting and research.",
    solution:
      "I built a localhost workspace that talks only to Ollama, with story libraries, evidence-backed suggestions with source citations, and a manuscript editor.",
    value: ["Confidential documents get AI assistance without leaving the device.", "Suggestions cite their sources, so they can be checked."],
    evidence: { verified: ["Working local application built by Sean."], measured: NOT_MEASURED },
    features: [
      "Local-only Ollama integration, no cloud AI providers",
      "Story libraries for txt, md, docx and text PDFs",
      "Evidence-backed suggestions with source citations",
      "Manuscript editor with revise/continue and export",
    ],
    implementation: "Next.js and TypeScript with SQLite storage, optional embeddings and Ollama for local inference.",
    tech: ["Next.js", "TypeScript", "Ollama", "SQLite"],
    images: [
      { src: "/images/storyforge-preview.png", alt: "Storyforge Local writing studio dashboard", kind: "screenshot", width: 958, height: 863 },
      { src: "/images/storyforge-stories.png", alt: "Storyforge Local stories view", kind: "screenshot", width: 958, height: 863 },
      { src: "/images/storyforge-mobile.png", alt: "Storyforge Local responsive view", kind: "screenshot", width: 958, height: 863 },
    ],
  },
  {
    slug: "instructor-locator",
    title: "Instructor Locator",
    headline: "An offline kiosk that helps campus visitors find instructors and rooms",
    sector: "Education · Desktop kiosk",
    summary:
      "A Windows desktop app that lets visitors search for instructors, see their scheduled location and get indoor directions, all without internet.",
    tier: "technical",
    pillars: ["operations"],
    status: { kind: "built", label: "Desktop app" },
    role: "Desktop developer",
    year: 2026,
    challenge: "Campus visitors needed a reliable way to find instructors and indoor routes without internet or GPS.",
    solution:
      "I built an offline WPF + SQLite kiosk app with floor maps, multi-floor A* pathfinding and admin tools for schedules and rooms.",
    value: ["Visitors find people without asking around.", "Admins update schedules and maps themselves."],
    evidence: { verified: ["Working desktop application built by Sean."], measured: NOT_MEASURED },
    features: [
      "Visitor search, profiles, schedules and availability",
      "Indoor A* pathfinding with multi-floor routing",
      "Kiosk mode with inactivity reset",
      "Admin CRUD, visual map editor and Excel/CSV import-export",
      "Local backup and restore",
    ],
    implementation: "C# / .NET 8 WPF (MVVM) with SQLite via EF Core.",
    tech: ["C#", ".NET 8", "WPF", "SQLite", "EF Core", "MVVM"],
    images: [
      {
        src: "/images/instructor-locator-preview.jpg",
        alt: "Illustrative floor-map view for the instructor locator",
        kind: "concept",
        ...landscape,
      },
    ],
  },
  {
    slug: "ignis",
    title: "IGNIS",
    headline: "An offline AI coding assistant that keeps source code private",
    sector: "Developer tools · Private AI",
    summary: "An offline-first AI-assisted coding application, currently in development as a personal product.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "in-development", label: "In development" },
    role: "Founder / full-stack developer",
    year: 2026,
    challenge: "Most AI coding tools require the cloud, raising privacy, cost and offline-availability concerns.",
    solution: "Building IGNIS as an offline-first coding assistant that runs locally.",
    value: ["Source code stays on the developer's machine.", "Usable without an internet connection."],
    evidence: { verified: ["In active development; not yet released."], measured: NOT_MEASURED },
    features: ["Offline-first AI assistance for coding", "Local workflows with no cloud upload", "Developer-first experience"],
    implementation: "TypeScript, Electron and Node.js with local LLM inference.",
    tech: ["TypeScript", "Electron", "Node.js", "Local LLMs"],
    images: [
      {
        src: "/images/ignis-preview.png",
        alt: "Illustrative IGNIS visual",
        kind: "concept",
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    slug: "serve",
    title: "SERVE — Sign Language Ordering",
    headline: "A sign-language ordering system so deaf staff and hearing customers can communicate",
    sector: "Accessibility · Computer vision",
    summary:
      "A local computer-vision system where deaf employees communicate through sign recognition while customers type replies.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "in-development", label: "In development" },
    role: "Full-stack / computer vision developer",
    year: 2026,
    challenge: "Deaf service staff and hearing customers needed a shared ordering channel that doesn't rely on spoken conversation.",
    solution:
      "Building a local sign-recognition pipeline with a conversation and ordering UI, facial-expression support and Raspberry Pi deployment.",
    value: ["Makes service roles more accessible to deaf employees."],
    evidence: { verified: ["Phases 0–2 built; Phase 3 in progress."], measured: NOT_MEASURED },
    features: [
      "Sign recognition pipeline",
      "Conversation and ordering UI",
      "Facial expression as an auxiliary signal",
      "Raspberry Pi camera abstraction and deployment config",
    ],
    implementation: "Python computer-vision pipeline with sign-language ML models and a Raspberry Pi camera abstraction.",
    tech: ["Python", "Computer Vision", "Sign Language ML", "Raspberry Pi"],
    images: [
      { src: "/images/serve-preview.jpg", alt: "Illustrative SERVE ordering interface", kind: "concept", ...landscape },
    ],
  },
  {
    slug: "neurofy",
    title: "Neurofy",
    headline: "EEG-based mental health screening on an Android phone",
    sector: "Health research · Machine learning",
    summary:
      "A research app that streams EEG from an OpenBCI headset over Bluetooth and classifies mental state on-device.",
    tier: "technical",
    pillars: ["ai"],
    status: { kind: "prototype", label: "Research prototype" },
    role: "Android / ML developer",
    year: 2026,
    challenge: "Mental-state screening research needed a mobile path from live EEG capture to on-device classification.",
    solution:
      "I built an Android app that connects to an OpenBCI Ganglion board over BLE and runs a three-model TFLite classification cascade.",
    value: ["Research data captured and classified on a phone instead of a lab workstation."],
    evidence: { verified: ["Research prototype built by Sean."], measured: NOT_MEASURED },
    features: [
      "BLE connection to OpenBCI Ganglion",
      "Frontal electrode recording (Fp1, Fp2, F3, F4)",
      "Three-model cascade: CNN → CNN-LSTM → CSNN",
      "Assessment, results and history screens",
    ],
    implementation: "Kotlin + Jetpack Compose with BLE streaming and TFLite on-device inference.",
    tech: ["Kotlin", "Jetpack Compose", "BLE", "OpenBCI", "TFLite"],
    images: [
      { src: "/images/neurofy-preview.jpg", alt: "Illustrative Neurofy screens", kind: "concept", ...landscape },
    ],
  },
  {
    slug: "busbar-forecasting",
    title: "Busbar Overload Forecasting",
    headline: "Forecasting electrical overload risk before capacity is exceeded",
    sector: "Engineering · Forecasting dashboard",
    summary:
      "A tablet-friendly dashboard that monitors electrical load and forecasts busbar overload risk using linear regression.",
    tier: "technical",
    pillars: ["operations"],
    status: {
      kind: "offline",
      label: "Demo offline",
      note: "The previous demo deployment (busbar-nine.vercel.app) returned “deployment not found” in November 2026, so no live link is shown.",
    },
    role: "Full-stack developer",
    year: 2026,
    challenge: "Operators needed an early view of busbar overload risk instead of reacting after capacity is exceeded.",
    solution:
      "I built a dashboard combining load monitoring, MATLAB linear-regression forecasts and model-quality metrics for field use.",
    value: ["Early warning instead of after-the-fact reaction.", "Model quality is shown, so forecasts can be trusted or questioned."],
    evidence: { verified: ["Built by Sean; demo deployment currently offline."], measured: NOT_MEASURED },
    features: [
      "Load forecast using MATLAB linear regression",
      "Model reliability metrics: R², RMSE and MAPE",
      "Daily/weekly normal vs abnormal loading status",
      "Tablet-oriented UI for field monitoring",
    ],
    implementation: "Next.js, React and TypeScript dashboard with MATLAB-derived regression models.",
    tech: ["Next.js", "React", "TypeScript", "MATLAB", "Linear Regression"],
    images: [],
  },
  {
    slug: "eduvision",
    title: "EduVision — Faculty Attendance",
    headline: "Camera-assisted faculty attendance with admin dashboards",
    sector: "Education · Capstone",
    summary: "An academic capstone that logs faculty attendance from IoT camera input and gives administrators dashboards and notifications.",
    tier: "technical",
    pillars: ["operations"],
    status: { kind: "prototype", label: "Academic capstone" },
    role: "Project lead",
    year: 2024,
    challenge: "Manual faculty attendance tracking was slow and error-prone for school administrators.",
    solution: "Led a team building a web system with IoT camera integration and admin dashboards for real-time attendance.",
    value: ["Attendance captured automatically instead of on paper.", "Administrators see records in one dashboard."],
    evidence: { verified: ["Academic capstone project led by Sean."], measured: NOT_MEASURED },
    features: [
      "Admin dashboard for faculty records and attendance",
      "Real-time camera input for automated attendance",
      "Role-based access, search, pagination and notifications",
    ],
    implementation: "Vite + React frontend, Node.js/Express API with MongoDB, and Python for camera processing.",
    tech: ["Vite", "React", "Node.js", "Express", "MongoDB", "Python"],
    images: [
      { src: "/images/eduvision-login.png", alt: "EduVision sign-in screen", kind: "screenshot", width: 1845, height: 900 },
    ],
  },
  {
    slug: "cctv-pan-tilt",
    title: "CCTV Pan–Tilt Controller",
    headline: "Remote camera control from a browser using low-cost hardware",
    sector: "IoT · Embedded",
    summary: "ESP32 firmware and a lightweight web UI for moving a camera mount remotely in real time.",
    tier: "technical",
    pillars: ["operations"],
    status: { kind: "prototype", label: "School project" },
    role: "Developer",
    year: 2023,
    challenge: "Needed remote control of a camera mount without proprietary hardware or software.",
    solution: "Built ESP32 firmware and a WebSocket web UI with joystick-style controls.",
    value: ["Low-cost hardware controlled from any browser."],
    evidence: { verified: ["School project built by Sean."], measured: NOT_MEASURED },
    features: ["Real-time WebSocket servo control", "Joystick-style web UI", "Documented firmware and wiring"],
    implementation: "ESP32 (Arduino framework) firmware driving servos, with a WebSocket server and an HTML/CSS/JS control page.",
    tech: ["ESP32", "Arduino", "WebSocket", "HTML/CSS/JS"],
    images: [],
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const businessProjects = projects.filter((p) => p.tier === "business");
export const technicalProjects = projects.filter((p) => p.tier === "technical");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const liveProjectCount = projects.filter((p) => p.status.kind === "live").length;
