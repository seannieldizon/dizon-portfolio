// data/projects.ts
export type ProjectCategory = "client" | "school" | "side" | "featured";

export interface Project {
  id: string;
  title: string;
  short: string;
  detailed?: string;
  tech: string[];
  image?: string;
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
