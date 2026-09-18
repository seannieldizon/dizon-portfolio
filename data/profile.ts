// data/profile.ts — centralized profile content for the portfolio

export const profile = {
  name: "Sean Niel S. Dizon",
  shortName: "Sean Niel Dizon",
  title: "Full-Stack Software Developer",
  subtitle:
    "Building production web apps, mobile experiences, AI-powered tools, automation workflows, and REST APIs with modern JavaScript frameworks.",
  email: "saynoseanniel@gmail.com",
  location: "Vinzons, Camarines Norte, Philippines",
  siteUrl: "https://seannieldizon.dev",
  resumePath: "/Dizon-cv.pdf",
  photo: "/images/dizon-formal.jpg",
  social: {
    github: "https://github.com/seannieldizon",
    linkedin: "https://linkedin.com/in/sean-niel-dizon-296b49382",
  },
  about: [
    "I am a Bachelor of Science in Information Technology graduate and a Full-Stack Software Developer passionate about solving real-world problems with clean, production-ready software.",
    "My interests span AI applications, web development, mobile development, and automation. I focus on building scalable, maintainable systems — from REST APIs and databases to polished user interfaces and reliable deployments.",
    "I continuously learn new technologies and apply them in client work and personal projects, always aiming for code that is clear, testable, and ready for real users.",
  ],
  heroFocus: [
    "Web Development",
    "Mobile Development",
    "AI Applications",
    "Automation",
    "REST APIs",
    "Modern JavaScript Frameworks",
  ],
} as const;

export type EducationEntry = {
  degree: string;
  institution: string;
  graduated: string;
  location?: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Camarines Norte State College",
    graduated: "June 2026",
    location: "Daet, Camarines Norte",
  },
];

export type Certification = {
  title: string;
  level?: string;
  passed: string;
  issuer?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: "Civil Service Examination",
    level: "Professional Level",
    passed: "March 2026",
    issuer: "Civil Service Commission",
    description: "Professional eligibility for government and public-sector roles in the Philippines.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent / Client Work",
    period: "2024 — Present",
    type: "Freelance",
    responsibilities: [
      "Full-stack web development for production client applications",
      "Mobile app development with Flutter and REST backends",
      "AI-powered application features and integrations",
      "API design, development, and documentation",
      "Database design and data modeling",
      "Deployment, hosting, and ongoing maintenance",
    ],
  },
];

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  icon: "badge" | "grad" | "globe" | "code";
};

export const achievements: Achievement[] = [
  {
    id: "csc",
    title: "Civil Service Professional Eligibility",
    detail: "Passed March 2026",
    icon: "badge",
  },
  {
    id: "bsit",
    title: "BS Information Technology Graduate",
    detail: "Graduated June 2026",
    icon: "grad",
  },
  {
    id: "hotvibes",
    title: "Production Website",
    detail: "Created and currently maintaining hotvibes.vip",
    icon: "globe",
  },
  {
    id: "beloved",
    title: "Beloved — Digital Invitation Showcase",
    detail: "40 interactive invitation designs across 8 occasions",
    icon: "globe",
  },
  {
    id: "ignis",
    title: "IGNIS — Offline AI Coding Assistant",
    detail: "Building a private, offline-first AI tool for developers",
    icon: "code",
  },
  {
    id: "freelance",
    title: "Freelance Software Developer",
    detail: "Delivering full-stack web, mobile, and AI solutions for clients",
    icon: "code",
  },
];
