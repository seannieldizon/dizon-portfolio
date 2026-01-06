// data/projects.ts
export type ProjectCategory = "client" | "school" | "side";

export interface Project {
  id: string;
  title: string;
  short: string;
  detailed?: string;
  tech: string[];
  image?: string; // path under /public/images/
  repo?: string;
  demo?: string;
  // optional metadata
  category: ProjectCategory; // "client" | "school" | "side"
  client?: string;        // company/client name when this was built for a client
  role?: string;          // your role (e.g., "Full-stack developer", "Lead developer")
  year?: number;          // year completed or deployed
  private?: boolean;      // true when repo/demo are private or available on request
  highlights?: string[];  // concise bullets suitable for display
}

export const projects: Project[] = [
  {
    id: "faculty-management",
    title: "EduVision: Real-time Faculty Attendance Monitoring System using IOT Based Smart Camera",
    short:
      "Web application to manage faculty records, roles, and account statuses with an admin dashboard.",
    detailed:
      "Full-stack system that supports user management, role-based access, and status workflows. Includes search, pagination, and notifications on critical updates. Integrated with IoT camera input for real-time attendance logging as part of an academic capstone project.",
    tech: ["Vite", "React", "Node.js", "Express", "MongoDB", "Python"],
    image: "/images/eduvision-logo.png",
    repo: "https://github.com/YOUR-USERNAME/faculty-management",
    demo: "#",
    category: "school",
    role: "Project Lead (Academic)",
    year: 2024,
    private: false,
    highlights: [
      "Designed admin dashboard for faculty records and attendance review",
      "Integrated real-time camera input for automated attendance",
      "Implemented role-based access and notifications"
    ]
  },
  {
    id: "cctv-pan-tilt",
    title: "CCTV Pan–Tilt Controller",
    short: "ESP32-based pan/tilt controller with a lightweight web UI for remote movement control.",
    detailed:
      "Firmware on ESP32 for servo control and WebSocket communication; lightweight web UI provides joystick-style control. Demonstrates integration between embedded firmware and web frontend. Completed as a course project to demonstrate embedded-to-web integration.",
    tech: ["ESP32", "Arduino", "WebSocket", "HTML/CSS/JS"],
    image: "/images/eduvision-logo.png",
    repo: "https://github.com/YOUR-USERNAME/cctv-pan-tilt",
    demo: "#",
    category: "school",
    role: "Developer (Academic)",
    year: 2023,
    private: false,
    highlights: [
      "Implemented real-time WebSocket control for servos",
      "Built a small web UI with joystick controls",
      "Documented firmware and wiring for replication"
    ]
  },
  {
    id: "grand-eleva",
    title: "Grand Eleva — Property Management",
    short:
      "Production property-management platform for Grand Eleva Prime Properties Corporation — manages clients, property listings, transactions, payments, and documents.",
    detailed:
      "End-to-end, production-grade web application delivered to a local real estate company. Implemented client and property management dashboards, transaction and payment tracking, document management, role-based access control, and administrative workflow automation. Focused on secure data handling, maintainability, and reducing manual processing for the operations team.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Next.js"],
    image: "/images/geppco-logo.png",
    repo: "Private (available on request)",
    demo: "",
    category: "client",
    client: "Grand Eleva Prime Properties Corporation",
    role: "Full-stack Developer",
    year: 2024,
    private: true,
    highlights: [
      "Developed production features for client operations (clients, properties, transactions)",
      "Implemented role-based access and secure backend services",
      "Delivered a maintainable codebase and reduced manual tasks for operations"
    ]
  },

  // --- New client project added per your request ---
  {
    id: "move-e-app",
    title: "MOVE-E — Booking & Delivery Service App",
    short:
      "Mobile booking & delivery platform that connects users to local service providers and supports bookings, scheduling, and deliveries.",
    detailed:
      "Developed as part of a feasibility study and prototype for the MOVE-E app (booking & delivery services). Built the cross-platform mobile client with Flutter (Dart) and implemented REST APIs and business logic using Node.js + Express. Data persistence and operational data are stored in MongoDB. Key features implemented: service discovery, provider onboarding, booking workflow, scheduling, secure payments integration (prototype), push notifications, and basic delivery tracking. Delivered the prototype and technical inputs used in the feasibility study prepared for Amors Group.",
    tech: ["Flutter (Dart)", "Node.js", "Express", "MongoDB"],
    image: "/images/Move-e_logo.png",
    repo: "Private (available on request)",
    demo: "",
    category: "client",
    client: "Amors Group (MOVE-E feasibility)",
    role: "Developer",
    year: 2025,
    private: true,
    highlights: [
      "Built Flutter mobile client for booking and provider discovery",
      "Implemented backend APIs with Node.js + Express and MongoDB",
      "Implemented booking, scheduling, provider onboarding, and notification flows",
      "Prepared the technical prototype used in the feasibility study and documentation"
    ]
  }
];
