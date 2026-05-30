export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  icon: string;
}

export interface SkillCategory {
  label: string;
  color: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    color: "#41b883",
    items: [
      { name: "React.js", level: "Expert", icon: "⚛️" },
      { name: "Next.js", level: "Expert", icon: "▲" },
      { name: "TypeScript", level: "Expert", icon: "TS" },
      { name: "Tailwind CSS", level: "Expert", icon: "🌊" },
      { name: "Redux / Zustand", level: "Advanced", icon: "⚙️" },
      { name: "Framer Motion", level: "Advanced", icon: "◉" },
    ],
  },
  {
    label: "Backend & APIs",
    color: "#3dd68c",
    items: [
      { name: "Node.js", level: "Advanced", icon: "⬡" },
      { name: "Express.js", level: "Advanced", icon: "∞" },
      { name: "REST APIs", level: "Expert", icon: "🔗" },
      { name: "GraphQL", level: "Proficient", icon: "◈" },
      { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
      { name: "MongoDB", level: "Advanced", icon: "🍃" },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#00c9ff",
    items: [
      { name: "Git / GitHub", level: "Expert", icon: "⑂" },
      { name: "Docker", level: "Advanced", icon: "🐳" },
      { name: "Vercel", level: "Expert", icon: "▲" },
      { name: "AWS (S3/EC2)", level: "Proficient", icon: "☁️" },
      { name: "CI/CD", level: "Advanced", icon: "🔄" },
      { name: "Jira / Agile", level: "Advanced", icon: "📋" },
    ],
  },
  {
    label: "Design & UX",
    color: "#41b883",
    items: [
      { name: "Figma", level: "Advanced", icon: "🎨" },
      { name: "GSAP", level: "Advanced", icon: "🎬" },
      { name: "UI/UX Design", level: "Advanced", icon: "✦" },
      { name: "Responsive Design", level: "Expert", icon: "📱" },
    ],
  },
];

export const techStack: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Redux",
  "Docker",
  "AWS",
  "Figma",
  "Git",
  "Vercel",
  "Express.js",
  "REST APIs",
];
