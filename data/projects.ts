// data/projects.ts
export type ProjectCategory = "client" | "school" | "side" | "featured";

export interface Project {
  id: string;
  title: string;
  short: string;
  detailed?: string;
  tech: string[];
  image?: string;
  gallery?: string[];
  repo?: string;
  demo?: string;
  category: ProjectCategory;
  client?: string;
  role?: string;
  year?: number;
  private?: boolean;
  highlights?: string[];
  problem?: string;
  solution?: string;
  status?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "hotvibes",
    title: "HotVibes",
    short:
      "Live creator platform with 8,000+ users — subscriptions, credits, media unlocks, and ongoing production maintenance.",
    detailed:
      "HotVibes is a live creator platform I develop and maintain, serving 8,000+ users. The product lets users subscribe or spend credits to unlock photos and videos. I built a full-stack creator marketplace with React, Express, and PostgreSQL/Prisma, including role-based access for users, models, subadmins, and admins. Paid access flows cover model-specific credits, pay-per-view unlocks, VIP subscriptions, and admin payment/withdrawal review. The platform also includes video upload and storage, HLS/MP4 playback, real-time features with Socket.io, and production deploys across a split frontend/API setup on Hostinger and Render.",
    tech: [
      "React",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "HLS/MP4",
      "Hostinger",
      "Render",
    ],
    image: "/images/hotvibes-preview.png",
    demo: "https://hotvibes.vip",
    category: "featured",
    role: "Full-Stack Developer",
    year: 2025,
    private: false,
    featured: true,
    status: "Currently Maintaining",
    problem:
      "Creators needed a production marketplace where fans can unlock media through credits, pay-per-view, and VIP access.",
    solution:
      "Built and maintain a full-stack platform with RBAC, paid unlock flows, media playback, real-time features, and live hosting.",
    highlights: [
      "Serving 8,000+ users in production",
      "Creator marketplace with role-based access (users, models, subadmins, admins)",
      "Credits, pay-per-view unlocks, VIP subscriptions, and payment review",
      "Video upload/storage with HLS/MP4 playback",
      "Real-time features with Socket.io",
      "Split frontend/API deployment on Hostinger and Render",
    ],
  },
  {
    id: "beloved-invitations",
    title: "Beloved — Digital Invitation Showcase",
    short:
      "Interactive invitation gallery with 40 designs across 8 occasions — guests open a full web experience, not a static card.",
    detailed:
      "Beloved is a modern digital invitation showcase built as an elegant alternative to printed invites. Visitors browse designs by occasion, preview styles, and open a selected invitation to experience it the way a guest would — on phone, tablet, or desktop. The site ships 40 complete sample designs across eight celebrations (weddings, birthdays, debuts, christenings, graduations, anniversaries, engagements, and corporate events), each with its own typography, imagery, layout, and tone. Invitation pages are interactive: opening flow, event details, personalized messaging, live countdown, venue information, schedule/program, storytelling sections, and RSVP prompts. Designs are generated from reusable components and structured invitation data, so new occasions and templates can be added without rebuilding every page from scratch. Photography is sourced from Unsplash and organized so assets can be swapped cleanly. Live at digital-invitation-gold.vercel.app.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Dynamic Routing",
    ],
    image: "/images/beloved-preview.png",
    demo: "https://digital-invitation-gold.vercel.app/",
    category: "featured",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    featured: true,
    status: "Live Showcase",
    problem:
      "Printed invitations are static and easy to lose; guests need a shareable, mobile-friendly way to see event details in one place.",
    solution:
      "Built a data-driven invitation showcase where each template opens as a full interactive guest experience, organized by occasion.",
    highlights: [
      "Invitation gallery with 40 designs across 8 occasions",
      "Interactive guest experience: countdown, venues, program, story, and RSVP",
      "Mobile-first responsive layouts for phone, tablet, and desktop",
      "Occasion-specific templates with distinct visual identities",
      "Dynamic routes such as /occasions/wedding and /invitation/wedding/ivory-romance",
      "Reusable, data-driven architecture for adding templates without one-off pages",
      "Framer Motion transitions and invitation opening animations",
    ],
  },
  {
    id: "palsee",
    title: "PALSEE — Infant Movement Screening",
    short:
      "On-device Android screening app that analyzes infant limb motion with MediaPipe Pose — privacy-first, not a diagnosis tool.",
    detailed:
      "PALSEE (Pediatric Algorithmic Limb-Motion Signals for Early Evaluation) is a Kotlin + Jetpack Compose Android app for early cerebral palsy risk screening in infants — screening only, not diagnosis. Caregivers or clinicians can live-record or import a short clip of an infant lying on their back. The app runs MediaPipe Pose on-device, extracts spatiotemporal kinematics, builds CORE108 evidence features, and computes a frozen PALSEE V3 / CPRAS screening score — fully offline with no cloud video upload. Features include CameraX capture with pose overlay, assessment history, optional CSV/report export, and English + Filipino localization, with screening-safe disclaimers throughout the UI.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "CameraX",
      "MediaPipe Pose",
      "Android",
      "Material 3",
    ],
    image: "/images/palsee-preview.jpg",
    gallery: [
      "/images/palsee-home.jpg",
      "/images/palsee-capture.jpg",
      "/images/palsee-results.jpg",
    ],
    category: "featured",
    role: "Android / Computer Vision Developer",
    year: 2026,
    private: false,
    featured: true,
    status: "Research Prototype",
    problem:
      "Early motor risk screening often needs clinic visits and specialized tools, while video ML usually relies on cloud processing.",
    solution:
      "Built a fully on-device Android pipeline: camera → pose → kinematics → auditable PALSEE V3 score → results UI.",
    highlights: [
      "Live CameraX capture with real-time pose skeleton overlay",
      "Import existing infant videos from the phone",
      "33-point landmarks → joint angles → kinematic streams → CORE108 / PALSEE V3 score",
      "Offline-first: no network required for core capture and scoring",
      "Assessment history with optional CSV/report export",
      "English + Filipino localization and screening-only safety copy",
      "Golden-path unit tests for the frozen mathematical scoring framework",
    ],
  },
  {
    id: "thrustlab",
    title: "ThrustLab",
    short:
      "Web-based 3D turbofan engine simulator with AI assistance for aeronautical engineering students.",
    detailed:
      "ThrustLab is an interactive 3D learning platform for third-year Aeronautical Engineering students. It teaches gas turbine (turbofan) concepts through immersive exploration, assembly/disassembly, and optional real-time AI-guided explanations. Learning zones include Hangar Zone (history and engine types), Turbofan Engine (rotatable 3D model), Overhaul Station (assembly/disassembly), Test Bay (quizzes), and JAJA AI Assistant for guided Q&A. Deployed at thrustlab-main.vercel.app.",
    tech: ["Next.js", "React", "TypeScript", "3D Web", "AI Assistant", "Vercel"],
    image: "/images/thrustlab-preview.svg",
    demo: "https://thrustlab-main.vercel.app/",
    category: "featured",
    role: "Full-Stack / Web Developer",
    year: 2026,
    private: false,
    featured: true,
    status: "Live",
    problem:
      "Turbofan engine concepts are hard to teach with static materials alone — students need hands-on exploration without physical lab constraints.",
    solution:
      "Built a web-based interactive 3D simulator with learning zones, quizzes, and an AI assistant specialized in turbofan engines.",
    highlights: [
      "Interactive 3D turbofan exploration and component study",
      "Overhaul station for virtual assembly and disassembly",
      "Quiz-based Test Bay to reinforce learning retention",
      "JAJA AI assistant for real-time guided explanations",
      "Designed for aeronautical engineering coursework (A.Y. 2025–2026)",
    ],
  },
  {
    id: "ignis",
    title: "IGNIS",
    short:
      "Offline AI-assisted coding tool I'm building for private, local developer workflows.",
    detailed:
      "IGNIS is an offline AI-assisted coding application currently in development. It is designed to help developers write, understand, and improve code without relying on cloud AI services — keeping source code private and usable without an internet connection. Focus areas include local inference, coding assistance, and a developer-first experience.",
    tech: ["TypeScript", "Electron", "Node.js", "Local LLMs", "AI"],
    image: "/images/ignis-preview.png",
    category: "featured",
    role: "Founder / Full-Stack Developer",
    year: 2026,
    private: true,
    featured: true,
    status: "In Development",
    problem:
      "Most AI coding tools require the cloud, which raises privacy, cost, and offline-availability concerns.",
    solution:
      "Building IGNIS as an offline-first AI coding assistant that runs locally and keeps code private.",
    highlights: [
      "Offline-first AI assistance for coding",
      "Local workflows that do not send source code to the cloud",
      "Designed for day-to-day developer productivity",
      "Actively under development as a personal product",
    ],
  },
  {
    id: "serve",
    title: "SERVE — Sign Language Ordering",
    short:
      "Computer-vision communication and ordering system where deaf staff use sign language and customers type replies.",
    detailed:
      "SERVE is a local computer-vision communication and ordering system. Deaf employees communicate through sign language recognition while hearing customers type replies; facial expression is treated as an independent auxiliary signal. Phases 0–2 cover foundation, sign recognition pipeline, and conversation/ordering UI. Phase 3 adds facial-expression recognition, Raspberry Pi camera abstraction, export tooling, and deployment configuration.",
    tech: ["Python", "Computer Vision", "Sign Language ML", "Raspberry Pi", "Ordering UI"],
    image: "/images/serve-preview.jpg",
    category: "side",
    role: "Full-Stack / CV Developer",
    year: 2026,
    private: false,
    status: "In Development",
    problem:
      "Deaf service staff and hearing customers needed a shared ordering channel without relying on spoken conversation alone.",
    solution:
      "Built a local CV pipeline for sign recognition with a conversation/ordering UI and facial-expression support for Raspberry Pi deployment.",
    highlights: [
      "Sign recognition pipeline for on-site communication",
      "Conversation and ordering UI between staff and customers",
      "Facial expression as an auxiliary recognition signal",
      "Raspberry Pi camera abstraction and deployment config",
    ],
  },
  {
    id: "storyforge",
    title: "Storyforge Local",
    short:
      "Private local-first AI story workspace powered by Ollama — manuscripts and drafts never leave your machine.",
    detailed:
      "Storyforge Local is a private AI story development and writing workspace that talks only to a local Ollama installation. Uploaded manuscripts, embeddings, analysis, suggestions, and generated drafts stay on the machine. Features include story libraries, local analysis with optional embeddings, evidence-backed suggestions with source citations, grounding modes, a custom story creator, and a manuscript editor with revise/continue and export.",
    tech: ["Next.js", "TypeScript", "Ollama", "SQLite", "Local AI"],
    image: "/images/storyforge-preview.png",
    gallery: [
      "/images/storyforge-stories.png",
      "/images/storyforge-mobile.png",
    ],
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Local App",
    problem:
      "Most AI writing tools send manuscripts to the cloud, which is a poor fit for private drafting and research.",
    solution:
      "Built a localhost writing workspace that uses Ollama only, with libraries, grounded suggestions, and an offline-friendly editor.",
    highlights: [
      "Local-only Ollama integration — no cloud AI providers",
      "Story libraries for txt, md, docx, and text PDFs",
      "Evidence-backed suggestions with View Source citations",
      "Manuscript editor with revise/continue and export",
    ],
  },
  {
    id: "instructor-locator",
    title: "Instructor Locator",
    short:
      "Offline Windows desktop app for finding instructors and indoor campus directions from a local floor map.",
    detailed:
      "Instructor Locator is an offline Windows desktop application that helps campus visitors find instructors, view assigned or scheduled locations, and get indoor directions from a local floor map. It is not a GPS tracker — locations and availability are stored locally. Features include visitor search, multi-floor A* pathfinding, kiosk mode, admin CRUD, a visual map editor, Excel/CSV import-export, and local backup/restore.",
    tech: ["C#", ".NET 8", "WPF", "SQLite", "EF Core", "MVVM"],
    image: "/images/instructor-locator-preview.jpg",
    category: "side",
    role: "Desktop Developer",
    year: 2026,
    private: false,
    status: "Desktop App",
    problem:
      "Campus visitors needed a reliable way to find instructors and indoor routes without internet or GPS.",
    solution:
      "Built an offline WPF + SQLite kiosk/desktop app with floor maps, A* pathfinding, and admin tools for schedules and rooms.",
    highlights: [
      "Visitor search, profiles, schedules, and availability",
      "Indoor A* pathfinding with multi-floor routing",
      "Kiosk mode with inactivity reset",
      "Admin CRUD, map editor, and Excel/CSV import-export",
    ],
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    short:
      "Production-style loan, collection, and remittance system with React web and Electron offline desktop.",
    detailed:
      "A production-ready loan management stack with React + Vite for web, Electron for offline desktop, and a Node.js + Express API. Covers loan management with auto-calculated totals, daily collections and remittances, expense tracking, income statements, dashboard analytics, CSV/PDF reports, JWT auth, and offline-first desktop sync.",
    tech: ["React", "Vite", "Electron", "Node.js", "Express", "JWT", "SQLite"],
    image: "/images/loan-management-preview.jpg",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Production-Ready",
    problem:
      "Small lending operations needed structured loan tracking, collections, expenses, and reporting across web and offline desktop.",
    solution:
      "Built a shared monorepo with Express API, React UI, and an Electron offline client with background sync.",
    highlights: [
      "Loan terms with auto-calculated totals",
      "Daily collections, remittances, and expense tracking",
      "Dashboard analytics and report exports",
      "Electron offline-first desktop with sync",
    ],
  },
  {
    id: "lead-finder",
    title: "Camarines Norte Lead Finder",
    short:
      "Local business discovery, lead scoring, mapping, and approved Gmail outreach for Camarines Norte.",
    detailed:
      "A production-ready web app for discovering legitimate local businesses in Camarines Norte, researching public contacts, analyzing websites, scoring web-development lead potential, mapping businesses, generating personalized outreach emails, and sending only after explicit user approval via controlled Gmail outreach. The system never auto-sends after discovery.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Leaflet", "Gmail API", "Redis"],
    image: "/images/lead-finder-preview.jpg",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Local / Production-Ready",
    problem:
      "Finding and researching local businesses for web-development outreach was manual and easy to spam without controls.",
    solution:
      "Built an approval-first pipeline: find → verify → analyze → score → map → draft email → user approval → controlled send.",
    highlights: [
      "Business discovery and public contact research",
      "Website analysis and lead scoring",
      "Map view with OpenStreetMap / Leaflet",
      "Gmail OAuth outreach only after explicit approval",
    ],
  },
  {
    id: "neurofy",
    title: "Neurofy",
    short:
      "EEG-based mental health screening Android app with OpenBCI BLE and a CNN → CNN-LSTM → CSNN cascade.",
    detailed:
      "Neurofy is an EEG-based mental health screening Android application. It connects to an OpenBCI Ganglion board via BLE, records brain activity from frontal electrodes (Fp1, Fp2, F3, F4), and classifies mental state using a three-model cascade (CNN → CNN-LSTM → CSNN). Built with Kotlin, Jetpack Compose, TFLite inference, and flows for device connect, assessment, results, and history.",
    tech: ["Kotlin", "Jetpack Compose", "BLE", "OpenBCI", "TFLite", "Android"],
    image: "/images/neurofy-preview.jpg",
    category: "side",
    role: "Android / ML Developer",
    year: 2026,
    private: false,
    status: "Research Prototype",
    problem:
      "Mental-state screening research needed a mobile path from live EEG capture to on-device classification.",
    solution:
      "Built an Android app that streams OpenBCI EEG over BLE and runs a multi-model TFLite classification cascade.",
    highlights: [
      "BLE connection to OpenBCI Ganglion",
      "Frontal electrode recording (Fp1, Fp2, F3, F4)",
      "Three-model cascade: CNN → CNN-LSTM → CSNN",
      "Assessment, results, and history screens",
    ],
  },
  {
    id: "ai-tiktok-automation",
    title: "AI TikTok Content Automation",
    short:
      "Local-first TikTok pipeline from trends and scripts to media render, with human-approved publishing only.",
    detailed:
      "A local-first monorepo for TikTok content automation. Phases 1–6 cover projects, trends, ideas, scripts, media, and render. Phase 7 publishes human-approved renders via TikTok Content Posting API / OAuth or a local mock provider — never auto-publishes. Stack includes React/Vite/MUI frontend, Express/TypeScript backend, PostgreSQL/Prisma, and Redis for jobs.",
    tech: ["React", "Vite", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis"],
    image: "/images/tiktok-automation-preview.jpg",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Local Platform",
    problem:
      "Creators needed a controlled local pipeline for TikTok ideation-to-render without unsupervised auto-posting.",
    solution:
      "Built a phased local platform ending in human-approved publishing via TikTok API or a mock provider.",
    highlights: [
      "End-to-end flow: trends → ideas → scripts → media → render",
      "Human-approved publishing only",
      "React + Express + PostgreSQL monorepo",
      "Vitest and Playwright test coverage",
    ],
  },
  {
    id: "lead-capture",
    title: "Lead Capture Automation",
    short:
      "AI-powered MVP that captures leads, generates personalized replies with OpenAI, and emails automatically.",
    detailed:
      "A production-ready MVP that captures leads from a landing form, stores them, generates a personalized reply with OpenAI, and emails the lead automatically via Nodemailer. Includes a separated receiveLead/processLead automation structure (webhook-friendly), file-backed storage adapter, Zod validation, and a simple /admin dashboard of captured leads.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Nodemailer", "Tailwind CSS", "Zod"],
    image: "/images/lead-capture-preview.jpg",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "MVP",
    problem:
      "Inbound leads needed fast personalized acknowledgment without a heavy CRM setup.",
    solution:
      "Built a Next.js MVP: form capture → store → OpenAI reply → automated email, plus an admin lead list.",
    highlights: [
      "Landing page lead form",
      "OpenAI personalized reply generation",
      "Automated email via Gmail SMTP",
      "Admin dashboard of captured leads",
    ],
  },
  {
    id: "waste-reporting",
    title: "Paliparan III Waste Reporting",
    short:
      "Community waste reporting and monitoring system for Barangay Paliparan III, Dasmariñas City.",
    detailed:
      "A barangay-level digital platform for residents to report waste issues with photos and location, track collection schedules by zone, and for officials to monitor and respond. Built to improve compliance, reduce illegal dumping, and support cleaner community operations in Paliparan III, Dasmariñas City.",
    tech: ["Next.js", "React", "TypeScript", "Maps", "Vercel"],
    image: "/images/waste-reporting-preview.svg",
    demo: "https://paliparan-iii-waste-reporting.vercel.app/",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Live",
    problem:
      "Barangay waste issues were hard to report and track consistently across residents and officials.",
    solution:
      "Built a citizen reporting platform with photo/location reports, schedules, analytics, and official monitoring workflows.",
    highlights: [
      "Resident reports with map location, photos, and categories",
      "Collection schedules by zone",
      "Analytics for response times and compliance",
      "Truck tracking and route overlays for staff",
      "Offline-capable reporting with sync when online",
    ],
  },
  {
    id: "e-paluwagan",
    title: "e-Paluwagan",
    short:
      "Digital paluwagan platform for organizing and managing community savings groups online.",
    detailed:
      "e-Paluwagan is a web-based digital paluwagan platform that brings traditional community savings circles online. Deployed as a live application for managing digital paluwagan workflows in a modern web interface.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    image: "/images/epaluwagan-preview.svg",
    demo: "https://e-paluwagan.vercel.app/",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Live",
    problem:
      "Traditional paluwagan groups often rely on manual tracking that is hard to share and audit.",
    solution:
      "Delivered a digital web platform dedicated to organizing paluwagan participation and records online.",
    highlights: [
      "Digital paluwagan web application",
      "Deployed and accessible online",
      "Built for community savings workflows",
    ],
  },
  {
    id: "cop-a-cap",
    title: "Cop A Cap",
    short:
      "Cap storefront for fresh drops with secure sign-in and Philippines-ready checkout vibes.",
    detailed:
      "Cop A Cap is a product-focused web storefront for caps and streetwear accessories. The site highlights fresh drops, secure sign-in, OTP-protected flows, and a local checkout experience aimed at Philippine shoppers.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    image: "/images/copacap-preview.svg",
    demo: "https://cop-a-cap.vercel.app/",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Live",
    problem:
      "Needed a modern storefront to showcase and sell cap drops with secure account and checkout flows.",
    solution:
      "Built a branded e-commerce style web experience with product storytelling, auth, and local checkout orientation.",
    highlights: [
      "Product landing experience for cap drops",
      "Secure sign-in and OTP-protected flows",
      "Philippines-ready checkout presentation",
    ],
  },
  {
    id: "busbar-forecast",
    title: "Busbar Overload Forecasting",
    short:
      "Dashboard for forecasting busbar overloading with linear regression and MATLAB model metrics.",
    detailed:
      "A field-ready dashboard for monitoring peak and average electrical load, forecasting busbar overload risk using MATLAB linear regression, and reviewing model quality metrics (R², RMSE, MAPE). Built for tablet use with MCB readings and daily/weekly constraint status against rated capacity.",
    tech: ["Next.js", "React", "TypeScript", "MATLAB", "Linear Regression", "Vercel"],
    image: "/images/busbar-preview.svg",
    demo: "https://busbar-nine.vercel.app/",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Live",
    problem:
      "Operators needed an early view of busbar overload risk instead of reacting after capacity is exceeded.",
    solution:
      "Built a dashboard that combines load monitoring, MATLAB linear-regression forecasts, and model-check metrics for field use.",
    highlights: [
      "Load forecast using MATLAB linear regression",
      "Model reliability metrics: R², RMSE, and MAPE",
      "Daily/weekly normal vs abnormal loading status",
      "Tablet-oriented UI for field monitoring",
    ],
  },
  {
    id: "cott-lab",
    title: "CoTT Laboratory Reservation",
    short:
      "Laboratory reservation system for booking facilities, tools, and equipment.",
    detailed:
      "CoTT Laboratory Reservation System helps students, faculty, and laboratory staff manage facility and equipment bookings. Students and faculty can reserve resources and track schedules, while staff can approve or reject requests and manage availability.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    image: "/images/cottlab-preview.svg",
    demo: "https://cott-lab-web.vercel.app/",
    category: "side",
    role: "Full-Stack Developer",
    year: 2026,
    private: false,
    status: "Live",
    problem:
      "Laboratory bookings were hard to coordinate across students, faculty, and staff without a shared system.",
    solution:
      "Built a reservation web app for requesting, approving, and managing laboratory facilities and equipment.",
    highlights: [
      "Reservation flows for students and faculty",
      "Staff tools to approve/reject bookings",
      "Facility and equipment availability management",
    ],
  },
  {
    id: "grand-eleva",
    title: "Grand Eleva — Property Management",
    short:
      "Web system for client and transaction records at Grand Eleva Prime Properties.",
    detailed:
      "Developed a web-based system for managing client and transaction records for Grand Eleva Prime Properties Co. Implemented features for adding, updating, and tracking client and property data using React.js on the frontend and Node.js with MongoDB on the backend. Focused on secure data handling, database performance, and delivering a usable solution from stakeholder requirements.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/geppco-logo.png",
    repo: "Private (available on request)",
    demo: "",
    category: "client",
    client: "Grand Eleva Prime Properties Co.",
    role: "Web Developer",
    year: 2025,
    private: true,
    problem:
      "Operations needed a reliable way to manage client and transaction records digitally.",
    solution:
      "Delivered a React + Node.js + MongoDB system for adding, updating, and tracking client and property data.",
    highlights: [
      "Client and transaction record management",
      "Add, update, and track client and property data",
      "Secure data handling and database performance work",
      "Built with React.js, Node.js, and MongoDB",
    ],
  },
  {
    id: "move-e-app",
    title: "MOVE-E — Booking & Delivery",
    short:
      "Flutter booking and delivery app with REST APIs for a client feasibility study.",
    detailed:
      "Cross-platform Flutter client with Node.js + Express REST APIs and MongoDB. Features include service discovery, provider onboarding, booking, scheduling, payments prototype, notifications, and delivery tracking — used in a feasibility study for Amors Group.",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    image: "/images/Move-e_logo.png",
    repo: "Private (available on request)",
    demo: "",
    category: "client",
    client: "Amors Group",
    role: "Full-stack / Mobile Developer",
    year: 2025,
    private: true,
    problem:
      "Needed a technical prototype to validate booking and delivery workflows for a feasibility study.",
    solution:
      "Built a Flutter app and REST backend covering discovery, bookings, scheduling, and tracking.",
    highlights: [
      "Flutter mobile client for booking and provider discovery",
      "Backend APIs with Node.js, Express, and MongoDB",
      "Booking, scheduling, onboarding, and notification flows",
    ],
  },
  {
    id: "faculty-management",
    title: "EduVision — Faculty Attendance",
    short:
      "IoT faculty attendance system with admin dashboards and real-time camera input.",
    detailed:
      "Full-stack academic capstone supporting user management, role-based access, attendance workflows, search, pagination, and notifications. Integrated IoT camera input for real-time attendance logging.",
    tech: ["Vite", "React", "Node.js", "Express", "MongoDB", "Python"],
    image: "/images/eduvision-login.png",
    gallery: ["/images/eduvision-logo.png"],
    repo: "",
    demo: "",
    category: "school",
    role: "Project Lead",
    year: 2024,
    private: false,
    problem:
      "Manual faculty attendance tracking was slow and error-prone for school administrators.",
    solution:
      "Built a web system with IoT camera integration and admin dashboards for real-time attendance.",
    highlights: [
      "Admin dashboard for faculty records and attendance",
      "Real-time camera input for automated attendance",
      "Role-based access and critical-update notifications",
    ],
  },
  {
    id: "cctv-pan-tilt",
    title: "CCTV Pan–Tilt Controller",
    short:
      "ESP32 pan/tilt controller with a lightweight web UI for remote camera movement.",
    detailed:
      "ESP32 firmware for servo control with WebSocket communication and a joystick-style web UI. Demonstrates embedded firmware integrated with a browser frontend.",
    tech: ["ESP32", "Arduino", "WebSocket", "HTML/CSS/JS"],
    image: "/images/eduvision-logo.png",
    repo: "",
    demo: "",
    category: "school",
    role: "Developer",
    year: 2023,
    private: false,
    problem:
      "Needed remote control of a camera mount without proprietary hardware software.",
    solution:
      "Built ESP32 firmware and a WebSocket web UI for real-time pan/tilt control.",
    highlights: [
      "Real-time WebSocket servo control",
      "Joystick-style web UI",
      "Documented firmware and wiring for replication",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
