export type ProjectCategory = "ui" | "react" | "fullstack";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "GAC — General Authority of Customs",
    subtitle: "General Authority of Customs — Doha, Qatar",
    description:
      "Built and maintained the full GAC Dashboard used by customs officials nationwide; focused on performance, accessibility, and team delivery.",
    tech: ["HTML", "SCSS", "Bootstrap", "Git"],
    category: "ui",
    featured: true,
  },
  {
    id: "2",
    title: "MOJ — Ministry of Justice",
    subtitle: "Ministry of Justice, Qatar",
    description:
      "Revamped the Ministry of Justice public portal — delivered full UI modernisation, component reusability, and 100% responsive layouts.",
    tech: ["HTML", "SCSS", "Bootstrap", "Git"],
    category: "ui",
    featured: true,
    live: "https://www.moj.gov.qa"
  },
  {
    id: "3",
    title: "QFBA — Qatar Finance & Business Academy",
    subtitle: "Qatar Finance & Business Academy",
    description:
      "Designed and styled responsive Academy web pages, ensuring visual consistency and optimised performance across all devices.",
    tech: ["HTML", "SCSS", "Bootstrap", "Git"],
    category: "ui",
    featured: true,
    live: "https://www.qfba.edu.qa"
  },
  {
    id: "4",
    title: "Q-Debate — Qatar Debate Dashboard",
    subtitle: "Qatar Debate Dashboard",
    description:
      "Sole frontend contributor who designed and built the complete Qatar Debate interactive dashboard from scratch — architected reusable components and delivered a fully responsive, accessible UI aligned with Qatar national branding standards.",
    tech: ["HTML", "SCSS", "Bootstrap", "Git"],
    category: "ui",
    featured: true,
  },
  {
    id: "5",
    title: "GCO — Government Communications Office Dashboard",
    subtitle: "Government Communications Office Dashboard, Qatar ",
    description:
      "Collaborated within a cross-functional team to engineer the GCO Dashboard — contributed 40% of frontend components and coordinated UI/UX implementation with the designer.",
    tech: ["HTML", "SCSS", "Bootstrap", "Git"],
    category: "ui",
    featured: false,
  },
  {
    id: "6",
    title: "Education Ministry LMS",
    subtitle: "Ministry of Education — Qatar",
    description:
      "Learning Management System serving 200,000+ students and 15,000 teachers with course management, live classes, assessments, and progress analytics.",
    tech: ["Next.js", "React", "Socket.io", "Redux", "Tailwind CSS"],
    category: "react",
    featured: false,
  },
  {
    id: "7",
    title: "Corporate Design System",
    subtitle: "Applab.qa — Internal Product",
    description:
      "Reusable component library and design tokens system used across 10+ client projects, featuring 60+ components with full accessibility and dark-mode support.",
    tech: ["React.js", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI"],
    category: "ui",
    featured: false,
  },
  {
    id: "8",
    title: "Asset Management Dashboard",
    subtitle: "Qatar Investment Authority",
    description:
      "High-fidelity financial dashboard for portfolio tracking, risk analysis charts, and fund allocation reporting with role-based access control.",
    tech: ["React.js", "Recharts", "TypeScript", "Tailwind CSS", "REST APIs"],
    category: "ui",
    featured: false,
  },
  {
    id: "9",
    title: "Municipal Services App",
    subtitle: "Baladiya — Qatar Municipality",
    description:
      "Citizen-facing web app for reporting city issues, tracking maintenance requests, and accessing municipal services with real-time status updates.",
    tech: ["Next.js", "TypeScript", "Mapbox GL", "Tailwind CSS", "Node.js"],
    category: "fullstack",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
