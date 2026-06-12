"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeUp } from "@/components/animations/AnimatedText";

const testimonials = [
  {
    quote:
      "I am pleased to recommend Mehran for their outstanding skills in React.js development. As a developer, Mehran has demonstrated exceptional proficiency in building complex user interfaces with React.js. Their deep understanding of the React.js framework, along with their ability to write clean and efficient code, have resulted in impressive web applications that are fast, responsive, and user-friendly. Mehran has a keen eye for detail, and is adept at debugging and troubleshooting complex issues. They have a collaborative and communicative approach to work, always seeking feedback and ideas to ensure that the final product meets or exceeds expectations.",
    name: "Amir Khan",
    role: "React Developer at Technology Rivers",
    initials: "AK",
    rating: 5,
  },
  {
    quote:
      "I highly recommend Mehran Khan for their exceptional skills in ReactJS. Having worked closely with them during our university days, I have witnessed their dedication, problem-solving abilities, and passion for web development firsthand. Their proficiency in ReactJS coupled with their strong work ethic make them a valuable asset to any team. With their attention to detail and ability to deliver high-quality solutions, Mehran Khan would be a valuable addition to any organization looking to excel in front-end development projects.",
    name: "M. Usama Bugvi",
    role: "Android Developer at NextTier",
    initials: "UB",
    rating: 5,
  },
  {
    quote:
      "Mehran Khan is an exceptional frontend developer with whom I had the pleasure of working at Codistan and Vaultspay. His ability to create user-friendly and visually appealing interfaces is impressive. Mehran is not only technically skilled but also a great team player who consistently delivers high-quality work. I highly recommend him for any project that requires a dedicated and talented frontend developer.",
    name: "Muhammad Saqib Raheem",
    role: "Software Engineer at Systems Limited",
    initials: "SR",
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
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between"
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
                  className="text-base sm:text-lg leading-8 font-medium italic line-clamp-3"
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
