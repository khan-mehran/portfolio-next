"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Download, ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:mehrankhanciit@gmail.com", label: "Email" },
];

const floatingBadges = [
  { label: "Next.js 14", x: "80%", y: "12%", delay: 0 },
  { label: "TypeScript", x: "72%", y: "70%", delay: 0.4 },
  { label: "Node.js", x: "88%", y: "42%", delay: 0.8 },
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const photoRef = useRef<HTMLDivElement>(null);

  /* Typewriter */
  useEffect(() => {
    const el = roleRef.current;
    const cursor = cursorRef.current;
    if (!el || !cursor) return;

    gsap.to(cursor, { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "none" });

    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        el.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex.current--;
        el.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deleting.current ? 40 : 75);
    };
    timeout = setTimeout(type, 800);
    return () => { clearTimeout(timeout); gsap.killTweensOf(cursor); };
  }, []);

  /* Floating photo animation */
  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    gsap.to(el, { y: "+=12", repeat: -1, yoyo: true, ease: "sine.inOut", duration: 4 });
    return () => { gsap.killTweensOf(el); };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingOrbs />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] hidden md:block pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient glow blob top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(65,184,131,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container relative z-10 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(65,184,131,0.1)",
                  border: "1px solid rgba(65,184,131,0.3)",
                  color: "var(--brand)",
                }}
              >
                <Sparkles size={12} />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span style={{ color: "var(--text-primary)" }}>Hi, I&apos;m </span>
              <br />
              <span className="gradient-text">Mehran Khan</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span
                className="w-8 h-0.5 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              <span
                className="text-lg sm:text-xl font-semibold"
                style={{ color: "var(--text-secondary)" }}
              >
                <span ref={roleRef} />
                <span ref={cursorRef} style={{ color: "var(--brand)" }}>|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base leading-7 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              I build fast, beautiful, and accessible web applications — from
              pixel-perfect UIs to scalable backend systems. Passionate about
              clean code, great DX, and animations that feel alive.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </Link>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={14} /> Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#41b883";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,184,131,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(65,184,131,0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: "40+", label: "Projects" },
                { value: "4+", label: "Years Exp." },
                { value: "15+", label: "Clients" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span
                      className="w-px h-8"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                  <div>
                    <div
                      className="text-xl font-extrabold leading-none"
                      style={{ color: "var(--brand)" }}
                    >
                      {value}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div ref={photoRef} className="relative">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-30 hidden md:block"
                style={{
                  background:
                    "conic-gradient(from 0deg, #41b883, #3dd68c, #00c9ff, #41b883)",
                  filter: "blur(2px)",
                  borderRadius: "50%",
                }}
              />

              {/* Main photo container */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(65,184,131,0.4)",
                  boxShadow:
                    "0 0 40px rgba(65,184,131,0.2), 0 0 80px rgba(65,184,131,0.08)",
                }}
              >
                {/* Profile image — replace /profile.jpg with your actual photo */}
                <Image
                  src="/profile.jpg"
                  alt="Mehran Khan"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Hide broken img, fallback to initials
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Fallback initials (shown when no image) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(65,184,131,0.2) 0%, rgba(10,15,13,0.8) 100%)",
                  }}
                >
                  <span
                    className="text-6xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #41b883, #3dd68c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    MK
                  </span>
                  <span
                    className="text-xs mt-1 font-medium"
                    style={{ color: "rgba(65,184,131,0.7)" }}
                  >
                    Full Stack Dev
                  </span>
                </div>

                {/* Inner gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(10,15,13,0.4) 100%)",
                  }}
                />
              </div>

              {/* Floating tech badge top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold hidden md:flex items-center gap-1.5"
                style={{
                  background: "var(--card)",
                  border: "1px solid rgba(65,184,131,0.35)",
                  color: "var(--brand)",
                  boxShadow: "0 4px 20px rgba(65,184,131,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#41b883" }}
                />
                Open to Work
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-3 -left-6 px-3 py-2 rounded-xl text-xs font-semibold hidden md:flex items-center gap-2"
                style={{
                  background: "var(--card)",
                  border: "1px solid rgba(65,184,131,0.3)",
                  color: "var(--text-primary)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-base">⚡</span>
                <div>
                  <div style={{ color: "var(--brand)", fontWeight: 700 }}>4+ Years</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 10 }}>Experience</div>
                </div>
              </motion.div>

              {/* Floating badge bottom-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-1 -right-8 px-3 py-2 rounded-xl text-xs font-semibold hidden md:flex items-center gap-2"
                style={{
                  background: "var(--card)",
                  border: "1px solid rgba(65,184,131,0.3)",
                  color: "var(--text-primary)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-base">🚀</span>
                <div>
                  <div style={{ color: "var(--brand)", fontWeight: 700 }}>40+</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 10 }}>Projects</div>
                </div>
              </motion.div>

              {/* Decorative orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full hidden md:block pointer-events-none"
                style={{
                  border: "1px dashed rgba(65,184,131,0.2)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ color: "var(--brand)" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
