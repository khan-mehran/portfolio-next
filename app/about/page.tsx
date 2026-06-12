"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import FloatingGraphic from "@/components/FloatingGraphic";
import { FadeUp } from "@/components/animations/AnimatedText";
import { skillCategories, type SkillItem } from "@/data/skills";
import { experience, type ExperienceEntry } from "@/data/experience";

const levelConfig: Record<string, { dots: number; color: string; bg: string }> = {
  Expert:    { dots: 5, color: "#41b883", bg: "rgba(65,184,131,0.15)" },
  Advanced:  { dots: 4, color: "#3dd68c", bg: "rgba(61,214,140,0.12)" },
  Proficient:{ dots: 3, color: "#00c9ff", bg: "rgba(0,201,255,0.1)" },
};

function TechCard({ name, level, icon }: SkillItem) {
  const cfg = levelConfig[level] ?? levelConfig["Proficient"];
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-default"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${cfg.color}55`;
        el.style.boxShadow = `0 0 16px ${cfg.color}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
        style={{ background: cfg.bg, color: cfg.color }}
      >
        {icon}
      </div>
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {name}
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
            style={{
              background: i < cfg.dots ? cfg.color : "rgba(128,128,128,0.2)",
            }}
          />
        ))}
      </div>
      <span
        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
        style={{ background: cfg.bg, color: cfg.color }}
      >
        {level}
      </span>
    </motion.div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceEntry;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div
          className="rounded-xl p-5"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: "rgba(65,184,131,0.12)", color: "var(--brand)" }}
            >
              {item.period}
            </span>
            <span style={{ color: "var(--brand)" }}>
              {item.type === "work" ? <Briefcase size={12} /> : <GraduationCap size={12} />}
            </span>
          </div>
          <h3 className="font-bold text-base leading-snug" style={{ color: "var(--text-primary)" }}>
            {item.role}
          </h3>
          <p className="text-sm font-medium mb-2" style={{ color: "var(--brand)" }}>
            {item.company}
          </p>
          <ul className="space-y-1">
            {item.highlights.map((h, i) => (
              <li key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-2 relative z-10"
          style={{
            background: "var(--brand)",
            borderColor: "var(--brand)",
            boxShadow: "0 0 10px rgba(65,184,131,0.5)",
          }}
        />
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <FloatingGraphic type="code" />
        <div className="section-container relative z-10">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--brand)" }}>
              About Me
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="section-heading mb-6">
              Crafting <span className="gradient-text">interfaces that</span> matter
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I&apos;m Mehran — a Senior Frontend Developer with 5+ years of experience delivering
              enterprise-grade web applications for government and leading organizations worldwide.
              I care deeply about performance, accessibility, and building UI systems that scale.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Profile + quick facts */}
      <section className="relative py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative max-w-sm mx-auto">
                <div
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(65,184,131,0.25)" }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Mehran Khan"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <div
                  className="absolute -inset-1 rounded-2xl -z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(65,184,131,0.4), transparent 60%)",
                    filter: "blur(8px)",
                  }}
                />
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  A bit about me
                </h2>
              </FadeUp>
              {[
                { label: "Location", value: "Doha, Qatar" },
                { label: "Focus", value: "UI Developement, React.js & Next.js Frontend" },
                { label: "Experience", value: "5+ Years Professional" },
                { label: "Education", value: "B.Sc. Computer Science — CUI" },
                { label: "Email", value: "mehrankhanciit@gmail.com" },
                { label: "Availability", value: "Open to Opportunities" },
              ].map(({ label, value }, i) => (
                <FadeUp key={label} delay={0.12 + i * 0.06}>
                  <div className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <span className="text-xs font-semibold w-28 uppercase tracking-wider flex-shrink-0" style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, rgba(65,184,131,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="section-container relative z-10">
          <FadeUp className="text-center mb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              Expertise
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-4">
            <h2 className="section-heading">
              Tools &amp; <span className="gradient-text">Technologies</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="text-center mb-12">
            <p className="section-subheading max-w-lg mx-auto">
              Technologies I use daily to build fast, scalable, and beautiful products.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-10">
            {skillCategories.map((cat, ci) => (
              <FadeUp key={cat.label} delay={ci * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}80` }}
                    />
                    <h3
                      className="text-sm font-bold uppercase tracking-widest"
                      style={{ color: cat.color }}
                    >
                      {cat.label}
                    </h3>
                    <div
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(to right, ${cat.color}30, transparent)` }}
                    />
                  </div>

                  <motion.div
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
                  >
                    {cat.items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                        }}
                      >
                        <TechCard {...tech} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              {Object.entries(levelConfig).map(([label, cfg]) => (
                <div key={label} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: i < cfg.dots ? cfg.color : "rgba(128,128,128,0.2)" }}
                      />
                    ))}
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20">
        <div className="section-container">
          <FadeUp className="text-center mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--brand)" }}>
              Journey
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-14">
            <h2 className="section-heading">
              Experience &amp; <span className="gradient-text">Education</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-line" />
            <div className="flex flex-col gap-8">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
