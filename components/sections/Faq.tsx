"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/animations/AnimatedText";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack is React / Next.js 14 on the frontend with TypeScript and Tailwind CSS, and Node.js / Express on the backend paired with PostgreSQL or MongoDB. I also work extensively with GraphQL, Redis, Docker, and deploy on Vercel and AWS.",
  },
  {
    question: "Are you available for freelance or contract work?",
    answer:
      "Yes — I'm currently open to freelance projects, long-term contracts, and full-time remote positions. Whether it's a greenfield build, an existing codebase that needs love, or a quick MVP, reach out and let's talk.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page or small site typically takes 1–2 weeks. A full-featured web app (auth, database, dashboard) usually runs 4–8 weeks depending on scope. I'll give you a realistic estimate after our first discovery call.",
  },
  {
    question: "Do you work with design files or start from scratch?",
    answer:
      "Both. I'm happy to translate Figma, Sketch, or Adobe XD designs into production code with pixel-perfect fidelity. I can also handle the design phase if you need — I use Figma for UI/UX and have a strong sense for modern interface aesthetics.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I send weekly progress updates, use GitHub for code reviews, and prefer async communication via Slack or email. For larger projects I set up a shared Notion workspace with roadmap, tasks, and docs so you always know where things stand.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer a 30-day bug-fix window after launch at no extra cost. For ongoing maintenance, performance monitoring, and feature development I offer flexible monthly retainer packages.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: open
          ? "1px solid rgba(65,184,131,0.4)"
          : "1px solid var(--border)",
        boxShadow: open ? "0 0 20px rgba(65,184,131,0.08)" : "none",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
        style={{ background: "var(--card)" }}
      >
        <span
          className="font-semibold text-sm sm:text-base leading-snug flex-1"
          style={{ color: open ? "var(--brand)" : "var(--text-primary)" }}
        >
          {question}
        </span>
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "rgba(65,184,131,0.15)" : "var(--surface)",
            border: "1px solid",
            borderColor: open ? "rgba(65,184,131,0.35)" : "var(--border)",
            color: open ? "var(--brand)" : "var(--text-secondary)",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 pb-5"
              style={{ background: "var(--card)" }}
            >
              <div
                className="w-full h-px mb-4"
                style={{ background: "rgba(65,184,131,0.15)" }}
              />
              <p
                className="text-sm leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(65,184,131,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        <FadeUp className="text-center mb-2">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            FAQ
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-3">
          <h2 className="section-heading">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2} className="text-center mb-12">
          <p className="section-subheading max-w-xl mx-auto">
            Everything you need to know before we start working together.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {left.map((faq, i) => (
              <FaqItem key={faq.question} {...faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {right.map((faq, i) => (
              <FaqItem key={faq.question} {...faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
