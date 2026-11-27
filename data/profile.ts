// data/profile.ts — centralized profile content for the portfolio

/**
 * HotVibes user figure. Sean's résumé and the previous site say "8,000+";
 * a later brief mentions "more than 10,000". The conservative, documented
 * figure is used until the higher number is confirmed. Change it here only.
 */
export const HOTVIBES_USERS = "8,000+";

export const profile = {
  name: "Sean Niel S. Dizon",
  shortName: "Sean Niel Dizon",
  firstName: "Sean",
  title: "Full-Stack Developer",
  positioning:
    "Independent full-stack developer building websites and business systems for owners who want more customers and less manual work.",
  email: "saynoseanniel@gmail.com",
  phone: "0961-042-4462",
  phoneHref: "tel:+639610424462",
  /** Full address kept for the résumé; the site shows only `publicLocation`. */
  location: "Purok 3, Sto. Domingo, Vinzons, Camarines Norte, Philippines",
  publicLocation: "Camarines Norte, Philippines",
  /**
   * `seannieldizon.dev` did not resolve in November 2026, so the Vercel URL is the
   * default. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is live.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dizon-portfolio.vercel.app",
  resumePath: "/Resume-Dizon_2.0.pdf",
  photo: "/images/dizon-formal.jpg",
  freelanceSince: "June 2024",
  social: {
    github: "https://github.com/seannieldizon",
    linkedin: "https://linkedin.com/in/sean-niel-dizon-296b49382",
  },
  about: [
    "I'm Sean Niel Dizon, a full-stack developer from Camarines Norte, Philippines. Since June 2024 I've worked independently, building websites, web and mobile apps, and business systems for clients and for my own products.",
    "I handle a project end to end: understanding the business problem, designing the experience, building the database and back-office, and putting it online. That means fewer hand-offs and one person who understands the whole system.",
    "I care about software that people actually use: fast pages, clear screens, records that add up, and an honest explanation of what a solution will and won't do for your business.",
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
  date: string;
  issuer?: string;
};

export const certifications: Certification[] = [
  {
    title: "Civil Service Eligibility",
    level: "Professional Level",
    date: "Passed March 2026",
    issuer: "Civil Service Commission",
  },
  {
    title: "TOPCIT",
    level: "Level 3",
    date: "Achieved June 2025",
    issuer: "Test of Practical Competency in IT",
  },
  {
    title: "Computer Systems Servicing NC II",
    level: "Trainee",
    date: "Training completed",
    issuer: "TESDA",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Independent Developer",
    company: "Self-employed",
    period: "June 2024 — Present",
    summary:
      "Websites, web and mobile apps, business systems, automation and AI-assisted tools for clients and personal products. Built and maintained the HotVibes platform while it was online.",
  },
  {
    role: "Web Developer (contract)",
    company: "Grand Eleva Prime Properties Co.",
    period: "June 2025 — August 2025",
    summary:
      "Built a web system for managing client, property and transaction records, working from requirements gathered with the company's stakeholders.",
  },
  {
    role: "Student Intern",
    company: "LGU Talisay — Office of the Municipal Engineer",
    period: "February 2026 — May 2026",
    summary:
      "Records processing and encoding, technical support, field inspection documentation and report preparation inside a government office.",
  },
];
