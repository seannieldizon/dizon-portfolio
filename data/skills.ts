// data/skills.ts — tech stack aligned with resume

export type Skill = { name: string; icon: string };

export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/FFFFFF" },
      { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    ],
  },
  {
    title: "Cloud, Tools & IoT",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger/673DE6" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00878F" },
      { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/A22846" },
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/FFFFFF" },
    ],
  },
];
