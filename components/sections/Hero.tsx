"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  ArrowDown,
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

const roles = [
  "Senior Frontend Developer",
  "React.js Specialist",
  "Next.js Developer",
  "UI Systems Builder",
];

const socials = [
  { icon: Github,   href: "https://github.com/khan-mehran",                  label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kmehran/",                 label: "LinkedIn" },
  { icon: Twitter,  href: "https://twitter.com",                  label: "Twitter"  },
  { icon: Mail,     href: "mailto:mehrankhanciit@gmail.com",       label: "Email"    },
];

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const roleRef   = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting  = useRef(false);
  const [imgError, setImgError] = useState(false);

  /* Typewriter */
  useEffect(() => {
    const el     = roleRef.current;
    const cursor = cursorRef.current;
    if (!el || !cursor) return;
    gsap.to(cursor, { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "none" });
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = roles[roleIndex.current];
      if (!deleting.current) {
        el.textContent = word.slice(0, ++charIndex.current);
        if (charIndex.current === word.length) { deleting.current = true; t = setTimeout(tick, 1800); return; }
      } else {
        el.textContent = word.slice(0, --charIndex.current);
        if (charIndex.current === 0) { deleting.current = false; roleIndex.current = (roleIndex.current + 1) % roles.length; }
      }
      t = setTimeout(tick, deleting.current ? 38 : 72);
    };
    t = setTimeout(tick, 900);
    return () => { clearTimeout(t); gsap.killTweensOf(cursor); };
  }, []);

  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* ══════════════════════════════════════════
          LEFT — Content panel
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex items-center w-full lg:w-[56%]">

        {/* Subtle left-side ambient glow */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(65,184,131,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-32 pb-16"
        >

          {/* ── Mobile-only compact photo ── */}
          <motion.div variants={item} className="lg:hidden mb-8">
            <div
              className="relative w-24 h-24 rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid rgba(65,184,131,0.3)" }}
            >
              {!imgError ? (
                <Image
                  src="/profile.jpg"
                  alt="Mehran Khan"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(65,184,131,0.18), var(--card))",
                  }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg,#41b883,#3dd68c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    MK
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Status pill ── */}
          <motion.div variants={item} className="mb-7">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{
                background: "rgba(65,184,131,0.1)",
                border: "1px solid rgba(65,184,131,0.3)",
                color: "#41b883",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#41b883] animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* ── Name ── */}
          <motion.div variants={item} className="mb-5">
            <p
              className="text-sm font-medium tracking-wide mb-2 uppercase"
              style={{ color: "var(--text-secondary)", letterSpacing: "0.12em" }}
            >
              Hi, I&apos;m
            </p>
            <h1 className="font-black leading-[0.95] tracking-tighter">
              <span
                className="block text-[clamp(3.2rem,8vw,5.5rem)]"
                style={{ color: "var(--text-primary)" }}
              >
                Mehran
              </span>
              <span className="block text-[clamp(3.2rem,8vw,5.5rem)] gradient-text">
                Khan.
              </span>
            </h1>
          </motion.div>

          {/* ── Typewriter role ── */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="block w-8 h-[2px] rounded-full flex-shrink-0"
              style={{ background: "var(--brand)" }}
            />
            <p
              className="text-base sm:text-lg font-semibold"
              style={{ color: "var(--text-secondary)" }}
            >
              <span ref={roleRef} />
              <span ref={cursorRef} style={{ color: "var(--brand)" }}>|</span>
            </p>
          </motion.div>

          {/* ── Bio ── */}
          <motion.p
            variants={item}
            className="text-[15px] leading-[1.8] mb-8 max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            Senior Frontend Developer with 5+ years building enterprise web
            applications for Qatar government and leading organizations.
            Specialized in React.js, Next.js, and scalable UI systems.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
            <Link href="/projects" className="btn-primary">
              View My Work <ArrowRight size={15} />
            </Link>
            <a href="/resume.pdf" download className="btn-outline">
              <Download size={14} /> Download CV
            </a>
          </motion.div>

          {/* ── Socials ── */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 mb-10"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--surface)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#41b883";
                  el.style.borderColor = "rgba(65,184,131,0.5)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 4px 14px rgba(65,184,131,0.2)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-secondary)";
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            variants={item}
            className="flex items-start gap-8 pt-6"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              { v: "20+", l: "Projects Delivered" },
              { v: "5+",  l: "Years Experience" },
              { v: "8+",  l: "Gov. Clients" },
            ].map(({ v, l }) => (
              <div key={l}>
                <div
                  className="text-2xl sm:text-3xl font-black leading-none"
                  style={{ color: "var(--brand)" }}
                >
                  {v}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT — Full-height photo panel
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="hidden lg:block lg:w-[44%] relative"
      >
        {/* Photo or fallback */}
        {!imgError ? (
          <Image
            src="/profile.jpg"
            alt="Mehran Khan"
            fill
            className="object-cover object-top"
            priority
            sizes="44vw"
            onError={() => setImgError(true)}
          />
        ) : (
          /* ── Fallback: gradient canvas with monogram ── */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{
              background:
                "linear-gradient(160deg, rgba(65,184,131,0.12) 0%, rgba(10,15,13,0.6) 100%)",
            }}
          >
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(65,184,131,1) 1px, transparent 1px), linear-gradient(90deg, rgba(65,184,131,1) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
            <span
              className="relative font-black leading-none select-none"
              style={{
                fontSize: "clamp(80px, 14vw, 160px)",
                background:
                  "linear-gradient(135deg, #41b883 0%, #3dd68c 50%, #00c9ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MK
            </span>
            <span
              className="relative text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: "rgba(65,184,131,0.55)" }}
            >
              Full Stack Developer
            </span>
          </div>
        )}

        {/* Left-edge fade — blends photo into the bg color */}
        <div
          className="absolute inset-y-0 left-0 w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
          }}
        />

        {/* Bottom overlay — name tag */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 px-10 pb-10 pt-28 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
          }}
        >
          <p className="text-white font-bold text-base leading-none">
            Mehran Khan
          </p>
          <p
            className="text-xs mt-1.5 font-medium"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Doha, Qatar  ·  Open to work
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ color: "var(--brand)" }}
        >
          <ArrowDown size={15} />
        </motion.div>
        <span
          className="text-[9px] tracking-[0.22em] uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  );
}
