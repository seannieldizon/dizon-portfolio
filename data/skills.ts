// data/skills.ts — tech stack grouped for recruiter scanning

export type Skill = { name: string; icon: string };

export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688" },
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
    title: "Database",
    items: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    ],
  },
  {
    title: "AI & Tools",
    items: [
      { name: "OpenAI APIs", icon: "https://cdn.simpleicons.org/openai/FFFFFF" },
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/FFFFFF" },
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
];
