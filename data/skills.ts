export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools" | "Design";
}

export interface TechIcon {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 93, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "Vue.js / Nuxt", level: 78, category: "Frontend" },
  // Backend
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "GraphQL", level: 75, category: "Backend" },
  { name: "Redis", level: 72, category: "Backend" },
  // Tools
  { name: "Git / GitHub", level: 95, category: "Tools" },
  { name: "Docker / CI/CD", level: 80, category: "Tools" },
  { name: "AWS / Vercel", level: 78, category: "Tools" },
  { name: "Prisma / Drizzle", level: 85, category: "Tools" },
  // Design
  { name: "Figma", level: 82, category: "Design" },
  { name: "UI/UX Principles", level: 80, category: "Design" },
  { name: "Motion Design", level: 75, category: "Design" },
];

export const techIcons: TechIcon[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬡" },
  { name: "Tailwind", icon: "🌊" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◈" },
  { name: "Redis", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
  { name: "Git", icon: "⑂" },
  { name: "Prisma", icon: "◆" },
  { name: "Vue.js", icon: "V" },
  { name: "Framer", icon: "◉" },
];

export const stats = [
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
  { label: "GitHub Stars", value: 300, suffix: "+" },
];

export const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Engineer",
    org: "TechVentures Inc.",
    description:
      "Leading frontend architecture for a SaaS platform serving 50k+ users. Migrated legacy codebase to Next.js 14, reducing TTI by 60%.",
    type: "work" as const,
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    org: "Freelance & Open Source",
    description:
      "Built 10+ client projects ranging from e-commerce platforms to internal tools. Contributed to several open-source Next.js and Tailwind libraries.",
    type: "work" as const,
  },
  {
    year: "2022",
    title: "Frontend Developer",
    org: "Digital Agency Nexus",
    description:
      "Developed interactive web applications for Fortune 500 clients. Specialized in React, animation, and design-to-code fidelity.",
    type: "work" as const,
  },
  {
    year: "2021",
    title: "B.Sc. Computer Science",
    org: "University of Technology",
    description:
      "Graduated with First Class Honours. Thesis on real-time collaborative web applications using WebSockets and CRDT data structures.",
    type: "education" as const,
  },
  {
    year: "2020",
    title: "Software Engineering Intern",
    org: "StartupLab",
    description:
      "First professional role — built React components, fixed production bugs, and shipped features as part of an agile team.",
    type: "work" as const,
  },
];
