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
      "Production website for hotvibes.vip — built, deployed, and actively maintained.",
    detailed:
      "Developed and currently maintaining the production website hotvibes.vip. Responsible for full-stack development, feature implementation, bug fixing, performance optimization, deployment, and continuous maintenance in a live production environment.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Vercel"],
    image: "/images/hotvibes-preview.png",
    demo: "https://hotvibes.vip",
    category: "featured",
    role: "Full-Stack Developer",
    year: 2025,
    private: false,
    featured: true,
    status: "Currently Maintaining",
    problem:
      "Needed a reliable, production-ready web presence with ongoing feature delivery and performance care.",
    solution:
      "Built and maintain a live full-stack site with continuous deployment, bug fixes, and optimization.",
    highlights: [
      "Full-stack development of a live production website",
      "Feature implementation and iterative product improvements",
      "Bug fixing and performance optimization",
      "Deployment and continuous maintenance",
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
      "Production property platform for clients, listings, transactions, and documents.",
    detailed:
      "End-to-end production web application for a local real estate company. Implemented client and property dashboards, transaction and payment tracking, document management, role-based access, and administrative workflows focused on secure data handling and maintainability.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/images/geppco-logo.png",
    repo: "Private (available on request)",
    demo: "",
    category: "client",
    client: "Grand Eleva Prime Properties",
    role: "Full-stack Developer",
    year: 2024,
    private: true,
    problem:
      "Operations relied on manual processes for clients, properties, transactions, and documents.",
    solution:
      "Delivered a production platform with RBAC, dashboards, and automated operational workflows.",
    highlights: [
      "Production features for clients, properties, and transactions",
      "Role-based access and secure backend services",
      "Reduced manual processing for the operations team",
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
