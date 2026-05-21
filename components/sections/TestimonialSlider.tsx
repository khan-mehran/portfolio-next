"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeUp } from "@/components/animations/AnimatedText";

const testimonials = [
  {
    quote:
      "Mehran delivered outstanding work — clean code, great communication, and a real eye for design. Our dashboard went from concept to production in record time.",
    name: "Sarah Mitchell",
    role: "CTO, TechVentures Inc.",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "Working with Mehran was a game-changer for our startup. He not only built a blazing-fast Next.js frontend but also suggested architectural improvements that saved us weeks of tech debt.",
    name: "James Caldwell",
    role: "Founder, Nebula Labs",
    initials: "JC",
    rating: 5,
  },
  {
    quote:
      "Exceptional attention to detail and a genuine passion for quality. Mehran rebuilt our entire component library from scratch — it's now one of the most polished systems I've seen.",
    name: "Priya Sharma",
    role: "Lead Designer, PixelCraft",
    initials: "PS",
    rating: 5,
  },
  {
    quote:
      "We hired Mehran to optimize our Node.js API and he reduced our response times by 70%. Knowledgeable, professional, and delivered ahead of schedule.",
    name: "Lucas Fontaine",
    role: "VP Engineering, DataStream",
    initials: "LF",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  /* Auto-play */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(65,184,131,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="section-container relative z-10">
        <FadeUp className="text-center mb-2">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--brand)" }}
          >
            Testimonials
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-12">
          <h2 className="section-heading">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </FadeUp>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden min-h-[280px] flex flex-col justify-between"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 40px rgba(65,184,131,0.06)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(65,184,131,0.07) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <Quote
              size={32}
              className="mb-6 opacity-25"
              style={{ color: "var(--brand)" }}
            />

            {/* Sliding content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#41b883"
                      style={{ color: "#41b883" }}
                    />
                  ))}
                </div>

                <blockquote
                  className="text-lg sm:text-xl leading-8 font-medium italic"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #41b883 0%, #2d9768 100%)",
                      boxShadow: "0 0 12px rgba(65,184,131,0.4)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background:
                      i === current
                        ? "var(--brand)"
                        : "rgba(65,184,131,0.25)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,184,131,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#41b883";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,184,131,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#41b883";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
