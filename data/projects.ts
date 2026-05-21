export type ProjectCategory = "Frontend" | "Backend" | "Full Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  live: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "DevFlow — SaaS Dashboard",
    description:
      "A full-stack project management SaaS with real-time collaboration, Kanban boards, and analytics.",
    longDescription:
      "Built with Next.js 14, Prisma, PostgreSQL, and Socket.io. Features drag-and-drop Kanban boards, real-time notifications, role-based access control, and a rich analytics dashboard with Chart.js.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    id: "2",
    title: "Aurora UI — Component Library",
    description:
      "An accessible, themeable React component library with 40+ components and Storybook docs.",
    longDescription:
      "Designed and built a comprehensive React component library using Radix UI primitives, Tailwind CSS, and CVA for variant management. Ships with full TypeScript support and Storybook documentation.",
    image: "/images/project-2.jpg",
    tags: ["React", "TypeScript", "Tailwind", "Radix UI", "Storybook"],
    category: "Frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    id: "3",
    title: "Pulse API — REST & GraphQL Backend",
    description:
      "High-performance Node.js API with REST and GraphQL endpoints, JWT auth, and Redis caching.",
    longDescription:
      "A scalable backend service built with Express.js, Apollo GraphQL, JWT authentication, and Redis for session management and rate limiting. Includes comprehensive Swagger documentation.",
    image: "/images/project-3.jpg",
    tags: ["Node.js", "Express", "GraphQL", "Redis", "MongoDB"],
    category: "Backend",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    id: "4",
    title: "Nebula Store — E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with Stripe payments, inventory management, and admin panel.",
    longDescription:
      "E-commerce solution with product catalog, cart, wishlist, Stripe checkout integration, order tracking, and an admin dashboard for inventory and order management.",
    image: "/images/project-4.jpg",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind", "NextAuth"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: "2023",
  },
  {
    id: "5",
    title: "Lumina — AI Writing Assistant",
    description:
      "An AI-powered writing tool using OpenAI GPT-4 with tone control, grammar checking, and export.",
    longDescription:
      "Integrated OpenAI GPT-4 API for intelligent writing assistance. Features tone adjustment, grammar correction, content expansion, and PDF/DOCX export. Built with React and Zustand.",
    image: "/images/project-5.jpg",
    tags: ["React", "OpenAI", "Node.js", "Zustand", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: "2023",
  },
  {
    id: "6",
    title: "Cron Scheduler Service",
    description:
      "Distributed job scheduler microservice with retry logic, alerting, and a monitoring UI.",
    longDescription:
      "A microservice for scheduling and executing background jobs at scale. Built with BullMQ, Redis, and a Next.js admin dashboard for monitoring job queues, retries, and failure alerts.",
    image: "/images/project-6.jpg",
    tags: ["Node.js", "BullMQ", "Redis", "Next.js", "Docker"],
    category: "Backend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: "2023",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
