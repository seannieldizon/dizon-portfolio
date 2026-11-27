// data/skills.ts — technical capabilities, grouped by what they're used for.
// "Used in" names portfolio projects where the technology appears, so every
// claim can be traced. Items marked `resumeOnly` are listed on Sean's résumé
// but not shown in a portfolio project here.

export type Capability = { name: string; resumeOnly?: boolean };

export type CapabilityGroup = {
  title: string;
  description: string;
  items: Capability[];
  usedIn: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Websites & web apps",
    description: "Fast, responsive interfaces and full web applications.",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
    usedIn: ["Beloved", "CoTT Reservation", "Lead Capture", "Loan Management"],
  },
  {
    title: "Back-end, APIs & data",
    description: "Business logic, secure accounts, payments flows and databases.",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "JWT auth" },
      { name: "Socket.IO" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Redis" },
      { name: "Django", resumeOnly: true },
      { name: "MySQL", resumeOnly: true },
      { name: "Firebase", resumeOnly: true },
      { name: "Supabase", resumeOnly: true },
    ],
    usedIn: ["HotVibes", "Grand Eleva", "Loan Management", "Lead Finder"],
  },
  {
    title: "Mobile & desktop",
    description: "Apps for phones, kiosks and offline office use.",
    items: [
      { name: "Flutter / Dart" },
      { name: "Kotlin / Jetpack Compose" },
      { name: "Electron" },
      { name: "C# / .NET (WPF)" },
    ],
    usedIn: ["MOVE-E", "PALSEE", "Loan Management (desktop)", "Instructor Locator"],
  },
  {
    title: "AI & automation",
    description: "Practical AI features and workflow automation.",
    items: [
      { name: "OpenAI API" },
      { name: "Ollama (local LLMs)" },
      { name: "MediaPipe" },
      { name: "TensorFlow Lite" },
      { name: "Python" },
      { name: "Gmail API / SMTP email" },
      { name: "Background job queues" },
    ],
    usedIn: ["Lead Capture", "Lead Finder", "AI TikTok Automation", "Storyforge", "PALSEE"],
  },
  {
    title: "Deployment & tools",
    description: "Getting software online and keeping it maintainable.",
    items: [
      { name: "Vercel" },
      { name: "Render" },
      { name: "Hostinger" },
      { name: "Git & GitHub" },
      { name: "Vitest / Playwright" },
      { name: "Docker", resumeOnly: true },
      { name: "Postman", resumeOnly: true },
      { name: "Figma", resumeOnly: true },
    ],
    usedIn: ["HotVibes", "Live demos on Vercel", "AI TikTok Automation"],
  },
  {
    title: "IoT & embedded",
    description: "Connecting software to sensors, cameras and hardware.",
    items: [{ name: "ESP32" }, { name: "Arduino" }, { name: "Raspberry Pi" }, { name: "Bluetooth LE" }],
    usedIn: ["CCTV Pan–Tilt", "SERVE", "Neurofy", "EduVision"],
  },
];
