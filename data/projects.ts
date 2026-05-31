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
    live: "https://www.moj.gov.qa",
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
    live: "https://www.qfba.edu.qa",
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
    title: "QOC - Chatbot",
    subtitle: "Qatar Olympic Committee",
    description:
      "Built the frontend interface for the QOC Chatbot — developed a responsive, accessible conversational UI with real-time message rendering and seamless API integration.",
    tech: ["HTML", "React", "Socket.io", "Redux", "Bootstrap", "Git"],
    category: "react",
    featured: false,
    live: "https://avatar.olympic.qa/"
  },
  {
    id: "7",
    title: "MOJ Chatbot",
    subtitle: "Ministry of Justice — Conversational UI",
    description:
      "Developed the MOJ Chatbot frontend — delivered a clean, government-branded chat interface with real-time responses, input validation, and full mobile responsiveness.",
    tech: ["HTML", "React", "Socket.io", "Redux", "Bootstrap", "Git"],
    category: "react",
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
