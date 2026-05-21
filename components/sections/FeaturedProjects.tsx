"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { featuredProjects } from "@/data/projects";
import { FadeUp } from "@/components/animations/AnimatedText";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const projectColors = [
  "from-[#41b883]/20 to-[#2d9768]/10",
  "from-[#3dd68c]/20 to-[#00c9ff]/10",
  "from-[#2d9768]/20 to-[#41b883]/10",
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="section-container">
        <FadeUp className="text-center mb-4">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            Portfolio
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-3">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2} className="text-center mb-12">
          <p className="section-subheading max-w-xl mx-auto">
            A selection of things I&apos;ve built — from SaaS platforms to open
            source tools.
          </p>
        </FadeUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(65,184,131,0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(65,184,131,0.25), 0 0 40px rgba(65,184,131,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image / Gradient placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${projectColors[i % 3]} relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color: "rgba(65,184,131,0.4)" }}
                >
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect
                      x="8"
                      y="8"
                      width="48"
                      height="48"
                      rx="8"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 28l8 8 16-16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Year badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      color: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                {/* Category */}
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--brand)" }}
                >
                  {project.category}
                </span>

                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge>+{project.tags.length - 3}</Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--brand)]"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--brand)]"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeUp delay={0.2} className="text-center mt-12">
          <Link href="/projects" className="btn-outline inline-flex">
            View All Projects <ArrowRight size={15} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
