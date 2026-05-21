"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-12 text-center relative"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Decorative gradient */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(65,184,131,0.08) 0%, transparent 60%)",
            }}
          />

          <Quote
            size={36}
            className="mx-auto mb-6 opacity-30"
            style={{ color: "var(--brand)" }}
          />

          <blockquote
            className="text-xl sm:text-2xl font-medium leading-relaxed mb-8 italic"
            style={{ color: "var(--text-primary)" }}
          >
            &ldquo;Mehran delivered outstanding work — clean code, great
            communication, and a real eye for design. Our dashboard went from
            concept to production in record time.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #41b883 0%, #2d9768 100%)",
              }}
            >
              S
            </div>
            <div className="text-left">
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Sarah Mitchell
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                CTO, TechVentures Inc.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
