// data/profile.ts — centralized profile content for the portfolio

export const profile = {
  name: "Sean Niel S. Dizon",
  shortName: "Sean Niel Dizon",
  title: "Full-Stack Software Developer",
  subtitle:
    "Building production web apps, mobile experiences, AI-powered tools, automation workflows, and REST APIs with modern JavaScript frameworks.",
  email: "saynoseanniel@gmail.com",
  phone: "0961-042-4462",
  phoneHref: "tel:+639610424462",
  location: "Purok 3, Sto. Domingo, Vinzons, Camarines Norte, Philippines",
  siteUrl: "https://seannieldizon.dev",
  resumePath: "/Resume-Dizon_2.0.pdf",
  photo: "/images/dizon-formal.jpg",
  social: {
    github: "https://github.com/seannieldizon",
    linkedin: "https://linkedin.com/in/sean-niel-dizon-296b49382",
  },
  about: [
    "I am a Bachelor of Science in Information Technology graduate and a Full-Stack Software Developer focused on practical web, mobile, and AI-assisted solutions.",
    "I maintain HotVibes, a live creator platform with 8,000+ users, and build client systems across React, Node.js, Flutter, and related stacks. I care about clean interfaces, reliable backends, and software that holds up in production.",
    "I am Civil Service eligible (Professional Level) and continuously learn new tools while delivering maintainable work for clients, internships, and personal products.",
  ],
  heroFocus: [
    "Web Development",
    "Mobile Development",
    "AI Applications",
    "IoT & Embedded",
    "REST APIs",
    "Production Systems",
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
    graduated: "2022 — 2026",
    location: "Daet, Camarines Norte",
    note: "Graduated June 2026",
  },
  {
    degree: "Senior High School",
    institution: "Vinzons Pilot High School",
    graduated: "2020 — 2022",
    location: "Vinzons, Camarines Norte",
  },
];

export type Certification = {
  title: string;
  level?: string;
  passed: string;
  issuer?: string;
  description?: string;
  dateLabel?: string;
};

export const certifications: Certification[] = [
  {
    title: "Civil Service Examination",
    level: "Professional Level",
    passed: "March 2026",
    issuer: "Civil Service Commission",
    description:
      "Professional eligibility for government and public-sector roles in the Philippines.",
    dateLabel: "Passed",
  },
  {
    title: "TOPCIT",
    level: "Level 3",
    passed: "June 2025",
    issuer: "Test of Practical Competency in IT",
    description: "Practical IT competency assessment covering applied technical skills.",
    dateLabel: "Achieved",
  },
  {
    title: "TESDA Computer Systems Servicing (CSS) NC II",
    level: "Trainee",
    passed: "Training completed",
    issuer: "TESDA",
    description:
      "Computer systems servicing training covering assembly, troubleshooting, and related support skills.",
    dateLabel: "Status",
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
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "June 2024 — Present",
    type: "Freelance",
    responsibilities: [
      "Design and develop AI/ML-assisted, web, mobile, and IoT solutions for clients and personal products",
      "Build responsive full-stack web apps with React.js, Node.js, Express.js, and MongoDB",
      "Develop cross-platform Flutter apps and integrate REST APIs and backend services",
      "Create IoT and embedded prototypes with ESP32, Arduino, and Raspberry Pi",
      "Provide troubleshooting, optimization, and end-to-end technical support",
      "Maintain HotVibes — a live creator platform with 8,000+ users",
    ],
  },
  {
    role: "Student Intern",
    company: "LGU Talisay — Office of the Municipal Engineer",
    period: "February 2026 — May 2026",
    type: "Internship",
    responsibilities: [
      "Assisted in document processing, filing, encoding, and scanning of engineering records",
      "Provided technical support and basic troubleshooting for office equipment and systems",
      "Participated in field inspections and documentation of infrastructure projects",
      "Supported data management, report preparation, and office administrative tasks",
      "Gained experience in government office operations, teamwork, and professional communication",
    ],
  },
  {
    role: "Web Developer",
    company: "Grand Eleva Prime Properties Co.",
    period: "June 2025 — August 2025",
    type: "Contract",
    responsibilities: [
      "Developed a web-based system for managing client and transaction records",
      "Implemented features for adding, updating, and tracking client and property data",
      "Built the frontend with React.js and the backend with Node.js and MongoDB",
      "Ensured secure data handling and optimized database performance",
      "Collaborated with stakeholders to gather requirements and deliver a usable solution",
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
    detail: "Camarines Norte State College · Graduated June 2026",
    icon: "grad",
  },
  {
    id: "hotvibes",
    title: "HotVibes — Live Creator Platform",
    detail: "Maintaining a production platform with 8,000+ users",
    icon: "globe",
  },
  {
    id: "beloved",
    title: "Beloved — Digital Invitation Showcase",
    detail: "40 interactive invitation designs across 8 occasions",
    icon: "globe",
  },
  {
    id: "topcit",
    title: "TOPCIT Level 3",
    detail: "Achieved June 2025",
    icon: "badge",
  },
  {
    id: "freelance",
    title: "Freelance Software Developer",
    detail: "June 2024 — Present · Web, mobile, AI, and IoT solutions",
    icon: "code",
  },
];
