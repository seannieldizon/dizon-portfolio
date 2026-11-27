// data/services.ts — business-facing copy for the homepage.
// Everything here describes what Sean builds and how; no outcome is guaranteed.

import type { Pillar } from "./projects";

export type Problem = { problem: string; fix: string };

export const problems: Problem[] = [
  {
    problem: "People visit your website, but few of them get in touch.",
    fix: "A clearer site built around one action (call, book or inquire), with short forms that work well on a phone.",
  },
  {
    problem: "You don't have a website you're proud to send customers to.",
    fix: "A fast, professional site that explains what you offer, shows proof, and makes contacting you easy.",
  },
  {
    problem: "Inquiries come in through calls, chats and forms, and some slip through.",
    fix: "One inquiry flow that records every lead, notifies you right away, and can send an automatic first reply.",
  },
  {
    problem: "Customer and transaction records live in spreadsheets and notebooks.",
    fix: "A simple system built around how your team already works, so records are in one place, searchable and current.",
  },
  {
    problem: "Bookings are arranged back and forth by message.",
    fix: "Online booking where customers request a slot, and you approve, reschedule or decline from one screen.",
  },
  {
    problem: "Your team repeats the same manual tasks every week.",
    fix: "Automation for repetitive steps like reminders, reports, data entry and follow-ups, so people can focus on work that needs them.",
  },
];

export type Service = {
  id: Pillar;
  number: string;
  outcome: string;
  name: string;
  problem: string;
  builds: string[];
  benefit: string;
  proof: string[]; // project slugs
};

export const services: Service[] = [
  {
    id: "customers",
    number: "01",
    outcome: "Get more customers",
    name: "Conversion-focused websites & landing pages",
    problem:
      "People judge a business by its website in seconds. If it's slow, unclear or awkward on a phone, they leave and contact someone else.",
    builds: [
      "Business websites that explain your offer in plain language",
      "Landing pages for a product, service or campaign",
      "Online catalogues and digital storefronts",
      "Mobile-first, fast-loading pages with a clear next step",
      "On-page SEO basics so customers can find you",
    ],
    benefit: "A site that earns trust quickly and gives every visitor an obvious way to reach you.",
    proof: ["beloved-invitations", "cop-a-cap", "waste-reporting"],
  },
  {
    id: "sales",
    number: "02",
    outcome: "Turn interest into sales",
    name: "Bookings, lead capture & online transactions",
    problem:
      "Interest is wasted when booking takes five messages, or when an inquiry sits unanswered overnight.",
    builds: [
      "Online booking and reservation systems",
      "Lead capture forms with instant notifications and auto-replies",
      "Storefronts with customer accounts and secure sign-in",
      "Subscriptions, credits and pay-per-view purchase flows",
      "Request and order tracking for customers and staff",
    ],
    benefit: "Fewer drop-offs between “I'm interested” and “I'm a customer.”",
    proof: ["cott-lab-reservation", "lead-capture", "hotvibes", "move-e"],
  },
  {
    id: "operations",
    number: "03",
    outcome: "Save time & run smoother",
    name: "Custom business systems, dashboards & automation",
    problem:
      "Spreadsheets, notebooks and copy-paste work don't scale, and every manual step is a chance for mistakes.",
    builds: [
      "Web systems for clients, records, transactions and inventory",
      "Dashboards and downloadable reports",
      "Admin panels with the right access for each role",
      "Integrations with email, maps and third-party services",
      "Offline-capable apps where the internet is unreliable",
    ],
    benefit: "Less manual work, fewer errors, and information your team can actually find.",
    proof: ["grand-eleva", "loan-management", "waste-reporting"],
  },
];

export const aiService = {
  title: "Practical AI, only where it helps",
  intro:
    "AI is useful for well-defined, repetitive tasks. I add it where it saves real time, and keep a person in the loop wherever a mistake would be costly.",
  uses: [
    "Drafting personalised first replies to new inquiries",
    "Researching, scoring and organising prospects",
    "Content pipelines that wait for human approval before publishing",
    "Private, on-device AI when data must not leave your premises",
  ],
  proof: ["lead-capture", "lead-finder", "ai-tiktok-automation", "storyforge"],
};

export type Step = { title: string; body: string; deliverable: string };

export const processSteps: Step[] = [
  {
    title: "Discovery",
    body: "We talk about your business, your customers and what isn't working today. You don't need to know anything technical.",
    deliverable: "A clear summary of the problem and the goal",
  },
  {
    title: "Strategy & scope",
    body: "I recommend the simplest solution that solves the problem and define exactly what will be built, and what won't.",
    deliverable: "A written scope, timeline and quote",
  },
  {
    title: "Design & build",
    body: "I design and develop in stages and share working previews, so you can react early instead of waiting until the end.",
    deliverable: "Clickable previews as the work progresses",
  },
  {
    title: "Testing & launch",
    body: "Everything is checked on phones, tablets and desktops for speed, reliability and correct data before it goes live.",
    deliverable: "A live, working product",
  },
  {
    title: "Support & improvement",
    body: "After launch I provide the maintenance and improvements we agree on, based on how the system is actually used.",
    deliverable: "Handover notes and an agreed support plan",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I need to understand the technical side?",
    a: "No. I'll explain options in plain language and recommend what fits your goals and budget. Technical details are always available if you want them.",
  },
  {
    q: "Can you improve what I already have instead of starting over?",
    a: "Often, yes. I can review your current website or system and tell you honestly whether improving it or rebuilding makes more sense.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a short conversation about what you need, you'll get a written quote before any work begins.",
  },
  {
    q: "Where are you based?",
    a: "Camarines Norte, Philippines. I work with clients remotely by email, chat and video calls.",
  },
];

export const projectTypes = [
  "New business website",
  "Landing page",
  "Booking or reservation system",
  "Lead capture / inquiry automation",
  "Online store or catalogue",
  "Custom business system or dashboard",
  "Mobile app",
  "AI-assisted feature",
  "Improve an existing website or system",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Prefer not to say",
  "Not sure yet: I'd like guidance",
  "Small: a landing page or simple site",
  "Medium: a multi-page site or simple system",
  "Large: a custom system or app",
] as const;
