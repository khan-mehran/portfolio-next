"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";

const iconMap: Record<string, string> = {
  "React.js": "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  "Tailwind CSS": "🌊",
  "Node.js": "⬡",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  GraphQL: "◈",
  Redux: "⚙️",
  Docker: "🐳",
  AWS: "☁️",
  Figma: "🎨",
  Git: "⑂",
  Vercel: "▲",
  "Express.js": "∞",
  "REST APIs": "🔗",
};

function IconCard({ name }: { name: string }) {
  const icon = iconMap[name] ?? "◆";
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.06 }}
      className="flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl cursor-default transition-all duration-300"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        minWidth: 80,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 12px rgba(65,184,131,0.4), 0 0 24px rgba(65,184,131,0.15)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(65,184,131,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <span
        className="text-2xl font-bold"
        style={{ color: "var(--brand)", fontFamily: "monospace" }}
      >
        {icon}
      </span>
      <span
        className="text-xs font-medium whitespace-nowrap"
        style={{ color: "var(--text-secondary)" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function SkillsMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-container mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--brand)" }}
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading mt-2"
        >
          Tools I Work With
        </motion.h2>
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
      />

      <div className="flex items-center gap-4 mb-4" style={{ overflow: "hidden" }}>
        <div
          className="flex items-center gap-4 animate-marquee"
          style={{ animationDuration: "35s" }}
        >
          {doubled.map((name, i) => (
            <IconCard key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4" style={{ overflow: "hidden" }}>
        <div
          className="flex items-center gap-4 animate-marquee-reverse"
          style={{ animationDuration: "40s" }}
        >
          {[...doubled].reverse().map((name, i) => (
            <IconCard key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
