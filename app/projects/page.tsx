"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import FloatingGraphic from "@/components/FloatingGraphic";
import { FadeUp } from "@/components/animations/AnimatedText";
import { projects, type ProjectCategory } from "@/data/projects";

type FilterType = "All" | ProjectCategory;
const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "All" },
  { label: "UI Projects", value: "ui" },
  { label: "React.js", value: "react" },
];
const PAGE_SIZE = 6;

const projectGradients = [
  "from-[#41b883]/20 to-[#2d9768]/10",
  "from-[#3dd68c]/20 to-[#00c9ff]/10",
  "from-[#2d9768]/20 to-[#1a6e4a]/10",
  "from-[#00c9ff]/15 to-[#41b883]/10",
  "from-[#41b883]/15 to-[#3dd68c]/10",
  "from-[#1a6e4a]/20 to-[#41b883]/10",
];

const categoryLabel: Record<ProjectCategory, string> = {
  ui: "UI Project",
  react: "React.js",
  fullstack: "Full Stack",
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilter = (f: FilterType) => {
    setActiveFilter(f);
    setPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <FloatingGraphic type="shapes" />
        <div className="section-container relative z-10 text-center">
          <FadeUp>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--brand)" }}
            >
              My Work
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="section-heading mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="section-subheading max-w-xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Enterprise and government web applications I&apos;ve led and delivered —
              from national portals to smart city dashboards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 py-4">
        <div className="section-container">
          <div
            className="flex items-center gap-2 p-1 rounded-xl w-fit mx-auto"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => handleFilter(value)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{ color: activeFilter === value ? "#ffffff" : "var(--text-secondary)" }}
              >
                {activeFilter === value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, #41b883 0%, #2d9768 100%)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="section-container">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginated.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(65,184,131,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 20px rgba(65,184,131,0.2), 0 0 40px rgba(65,184,131,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Banner */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${
                      projectGradients[i % projectGradients.length]
                    } overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-5xl font-black opacity-15"
                        style={{ color: "var(--brand)" }}
                      >
                        {project.id}
                      </span>
                    </div>

                    {/* Tech overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap p-4"
                      style={{
                        background: "rgba(10,15,13,0.85)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {project.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </motion.div>

                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          color: "rgba(255,255,255,0.85)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {categoryLabel[project.category]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      <h3
                        className="font-bold text-base leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--brand)" }}>
                        {project.subtitle}
                      </p>
                    </div>
                    <p
                      className="text-sm leading-relaxed line-clamp-3 flex-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--brand)] px-3 py-1.5 rounded-lg"
                          style={{
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <ExternalLink size={13} /> View
                        </a>
                      ) : (
                        <span
                          className="text-xs font-medium px-3 py-1.5 rounded-lg"
                          style={{
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          Enterprise / Confidential
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p style={{ color: "var(--text-secondary)" }}>
                No projects in this category yet.
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mt-12"
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  if (page !== 1) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,184,131,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "#41b883";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  style={{
                    background: p === page ? "linear-gradient(135deg, #41b883 0%, #2d9768 100%)" : "var(--card)",
                    border: p === page ? "1px solid transparent" : "1px solid var(--border)",
                    color: p === page ? "#ffffff" : "var(--text-secondary)",
                    boxShadow: p === page ? "0 0 12px rgba(65,184,131,0.3)" : "none",
                  }}
                  aria-label={`Page ${p}`}
                  aria-current={p === page ? "page" : undefined}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  if (page !== totalPages) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,184,131,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "#41b883";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {totalPages > 1 && (
            <p className="text-center text-xs mt-3" style={{ color: "var(--text-secondary)" }}>
              Page {page} of {totalPages} &mdash; {filtered.length} projects
            </p>
          )}
        </div>
      </section>
    </>
  );
}
