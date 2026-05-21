"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import FloatingGraphic from "@/components/FloatingGraphic";
import { FadeUp } from "@/components/animations/AnimatedText";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <FloatingGraphic type="dots" />
        <div className="section-container relative z-10 text-center">
          <FadeUp>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--brand)" }}
            >
              Writing
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="section-heading mb-4">
              The <span className="gradient-text">Blog</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="section-subheading max-w-xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Thoughts on web development, performance, design systems, and the
              craft of building for the web.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-12 pb-24">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(65,184,131,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 20px rgba(65,184,131,0.2), 0 8px 32px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Cover */}
                <div className="h-48 relative overflow-hidden flex-shrink-0 rounded-t-2xl">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.coverColor}`}
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: "rgba(0,0,0,0.45)",
                            color: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div
                    className="flex items-center gap-4 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-lg font-bold leading-snug group-hover:text-[var(--brand)] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="text-sm leading-relaxed line-clamp-3 flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold pt-2 transition-all duration-200 group/link w-fit"
                    style={{ color: "var(--brand)" }}
                  >
                    Read Article{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
