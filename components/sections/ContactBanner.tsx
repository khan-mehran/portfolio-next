"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/animations/AnimatedText";

export default function ContactBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-container">
        <FadeUp>
          <div
            className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(65,184,131,0.12) 0%, rgba(45,151,104,0.08) 50%, rgba(26,110,74,0.12) 100%)",
              border: "1px solid rgba(65,184,131,0.25)",
            }}
          >
            {/* Radial glow center */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(65,184,131,0.15) 0%, transparent 65%)",
              }}
            />

            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #41b883, #3dd68c, transparent)",
              }}
            />
            {/* Bottom gradient line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(65,184,131,0.5), transparent)",
              }}
            />

            {/* Floating orbs */}
            <motion.div
              animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-[8%] w-32 h-32 rounded-full hidden md:block"
              style={{
                background:
                  "radial-gradient(circle, rgba(65,184,131,0.2) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <motion.div
              animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-8 right-[8%] w-40 h-40 rounded-full hidden md:block"
              style={{
                background:
                  "radial-gradient(circle, rgba(61,214,140,0.15) 0%, transparent 70%)",
                filter: "blur(25px)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(65,184,131,0.12)",
                  border: "1px solid rgba(65,184,131,0.3)",
                  color: "var(--brand)",
                }}
              >
                <Sparkles size={12} />
                Open for collaborations
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Have a project in mind?
                <br />
                <span className="gradient-text">Let&apos;s build it together.</span>
              </h2>

              <p
                className="text-base leading-7 max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m currently available for freelance work and exciting
                full-time roles. Drop me a message — I typically respond within
                24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:mehrankhanciit@gmail.com"
                  className="btn-outline text-base px-8 py-3.5"
                >
                  <Mail size={15} />
                  mehrankhanciit@gmail.com
                </a>
              </div>

              {/* Quick facts */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { icon: "⚡", label: "Quick response" },
                  { icon: "🌍", label: "Remote friendly" },
                  { icon: "✅", label: "NDA available" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
