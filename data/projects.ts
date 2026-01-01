// data/projects.ts
export interface Project {
  id: string;
  title: string;
  short: string;
  detailed?: string;
  tech: string[];
  image?: string; // path under /public/images/
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "faculty-management",
    title: "Faculty Management System",
    short: "Web application to manage faculty records, roles, and account statuses with an admin dashboard.",
    detailed:
      "Full-stack system that supports user management, role-based access, and status workflows. Includes search, pagination, and notifications on critical updates.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    image: "/images/eduvision-logo.png",
    repo: "https://github.com/YOUR-USERNAME/faculty-management",
    demo: "#"
  },
  {
    id: "cctv-pan-tilt",
    title: "CCTV Pan–Tilt Controller",
    short: "ESP32-based pan/tilt controller with a lightweight web UI for remote movement control.",
    detailed:
      "Firmware on ESP32 for servo control and WebSocket communication; lightweight web UI provides joystick-style control. Demonstrates integration between embedded firmware and web frontend.",
    tech: ["ESP32", "Arduino", "WebSocket", "HTML/CSS/JS"],
    image: "/images/eduvision-logo.png",
    repo: "https://github.com/YOUR-USERNAME/cctv-pan-tilt",
    demo: "#"
  },
  {
    id: "grand-eleva",
    title: "Grand Eleva — Property Management",
    short: "Property & transaction management web app built for a local real estate company.",
    detailed:
      "Implemented interfaces for client and transaction management, backend services for secure data storage, and workflow improvements to minimize manual tasks for the operations team.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/geppco-logo.png",
    repo: "",
    demo: ""
  }
];
