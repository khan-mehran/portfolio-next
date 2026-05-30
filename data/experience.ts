export type EntryType = "work" | "education";

export interface ExperienceEntry {
  type: EntryType;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    type: "work",
    role: "Senior Frontend Developer",
    company: "Applab — Doha, Qatar",
    period: "2023 – Present",
    highlights: [
      "Frontend development for 10+ Qatar government and enterprise web portals.",
      "Architect scalable React/Next.js component systems used across multiple product lines.",
      "Integrate and consume RESTful APIs, ensuring efficient data handling and real-time UI updates.",
      "Reduced page load times by 45% through code splitting, lazy loading, and image optimization.",
    ],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "VaultsPay — Islamabad, Pakistan",
    period: "2022 – 2023",
    highlights: [
      "Delivered 8+ custom web applications for clients in the GCC region.",
      "Built responsive, accessible UIs with React, Tailwind CSS, and REST API integrations.",
      "Managed full project lifecycle from requirement gathering to deployment on Vercel/AWS.",
    ],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "Codistan — Islamabad, Pakistan",
    period: "2021 – 2022",
    highlights: [
      "Developed React-based dashboards and admin panels for SaaS clients.",
      "Integrated third-party APIs including payment gateways and mapping services.",
      "Improved CI/CD pipeline setup using GitHub Actions and Docker.",
    ],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "AizTek Technologies — Islamabad, Pakistan",
    period: "2021 – 2022",
    highlights: [
      "Developed reusable and scalable UI components using React.js and modern JavaScript.",
      "Ensured cross-browser compatibility and responsive design across multiple devices.",
      "IApplied clean code principles and frontend best practices to maintain high-quality deliverables.",
    ],
  },
  {
    type: "education",
    role: "B.Sc. Computer Science",
    company: "Comsats University — Islamabad, Pakistan",
    period: "2016 – 2020",
    highlights: [
      "Graduated with distinction. Focused on software engineering and web technologies.",
      "Final-year project: real-time collaborative document editor using React and WebSockets.",
    ],
  },
];
