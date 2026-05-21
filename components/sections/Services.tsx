"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Palette,
  Zap,
  GitBranch,
  BrainCircuit,
} from "lucide-react";
import { FadeUp } from "@/components/animations/AnimatedText";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Pixel-perfect React & Next.js applications with smooth animations, responsive layouts, and top-tier Core Web Vitals.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-[#41b883]/20 to-[#2d9768]/10",
    glow: "rgba(65,184,131,0.15)",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable REST & GraphQL APIs with Node.js, database design, auth systems, and cloud deployment.",
    tags: ["Node.js", "Express", "GraphQL", "PostgreSQL"],
    gradient: "from-[#3dd68c]/20 to-[#00c9ff]/10",
    glow: "rgba(61,214,140,0.15)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, modern interface design in Figma — from wireframes to high-fidelity prototypes ready for handoff.",
    tags: ["Figma", "Prototyping", "Design Systems", "Accessibility"],
    gradient: "from-[#00c9ff]/15 to-[#41b883]/10",
    glow: "rgba(0,201,255,0.12)",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Audit and optimize existing apps for speed — bundle splitting, image optimization, caching strategies, and more.",
    tags: ["Core Web Vitals", "Webpack", "CDN", "Caching"],
    gradient: "from-[#41b883]/15 to-[#1a6e4a]/10",
    glow: "rgba(65,184,131,0.12)",
  },
  {
    icon: GitBranch,
    title: "API Integration",
    description:
      "Third-party API integrations, webhooks, payment gateways (Stripe), and real-time features with WebSockets.",
    tags: ["REST", "WebSockets", "Stripe", "OAuth"],
    gradient: "from-[#2d9768]/15 to-[#3dd68c]/10",
    glow: "rgba(45,151,104,0.15)",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Integrate LLM APIs (OpenAI, Anthropic), build AI-powered features, and automate workflows end-to-end.",
    tags: ["OpenAI", "LangChain", "Automation", "Claude"],
    gradient: "from-[#41b883]/10 to-[#00c9ff]/15",
    glow: "rgba(65,184,131,0.1)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 40%, rgba(65,184,131,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        <FadeUp className="text-center mb-2">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            What I Do
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-3">
          <h2 className="section-heading">
            Services I <span className="gradient-text">Offer</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2} className="text-center mb-14">
          <p className="section-subheading max-w-xl mx-auto">
            End-to-end web development — from design system to deployment,
            I&apos;ve got you covered.
          </p>
        </FadeUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(65,184,131,0.45)";
                  el.style.boxShadow = `0 0 24px ${svc.glow}, 0 8px 32px rgba(0,0,0,0.15)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(65,184,131,0.12)",
                    border: "1px solid rgba(65,184,131,0.2)",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--brand)" }} />
                </div>

                {/* Text */}
                <div className="relative flex flex-col gap-2 flex-1">
                  <h3
                    className="font-bold text-base leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-1.5 pt-1">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-badge text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Number decoration */}
                <span
                  className="absolute top-4 right-5 text-5xl font-black opacity-[0.04] select-none"
                  style={{ color: "var(--brand)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
