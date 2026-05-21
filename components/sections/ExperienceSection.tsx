"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/animations/AnimatedText";
import { timeline } from "@/data/skills";

export default function ExperienceSection() {
  const items = timeline.slice(0, 4);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle left gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(65,184,131,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: heading + description */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <FadeUp>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--brand)" }}
              >
                Journey
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mb-4">
                My <span className="gradient-text">Experience</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p
                className="text-sm leading-7 mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Over 4 years of professional experience building production
                applications — from startups to enterprise clients.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/about"
                className="btn-outline inline-flex text-sm"
              >
                Full Story <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          {/* Right: timeline cards */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* Vertical line */}
                {i < items.length - 1 && (
                  <div
                    className="absolute left-5 top-10 bottom-0 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(65,184,131,0.4), transparent)",
                    }}
                  />
                )}

                {/* Icon node */}
                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(65,184,131,0.12)",
                    border: "1.5px solid rgba(65,184,131,0.3)",
                    color: "var(--brand)",
                    boxShadow: "0 0 12px rgba(65,184,131,0.15)",
                  }}
                >
                  {item.type === "work" ? (
                    <Briefcase size={15} />
                  ) : (
                    <GraduationCap size={15} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-xl p-5 transition-all duration-300 group cursor-default"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(65,184,131,0.4)";
                    el.style.boxShadow = "0 0 20px rgba(65,184,131,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3
                        className="font-bold text-base leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--brand)" }}
                      >
                        {item.org}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0"
                      style={{
                        background: "rgba(65,184,131,0.1)",
                        color: "var(--brand)",
                        border: "1px solid rgba(65,184,131,0.2)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
