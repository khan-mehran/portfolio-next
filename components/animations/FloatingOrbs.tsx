"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Orb {
  size: number;
  x: string;
  y: string;
  opacity: number;
  delay: number;
  duration: number;
}

const defaultOrbs: Orb[] = [
  { size: 300, x: "10%", y: "20%", opacity: 0.18, delay: 0, duration: 8 },
  { size: 200, x: "75%", y: "10%", opacity: 0.14, delay: 1.5, duration: 10 },
  { size: 250, x: "55%", y: "60%", opacity: 0.12, delay: 3, duration: 12 },
  { size: 180, x: "20%", y: "70%", opacity: 0.1, delay: 2, duration: 9 },
  { size: 220, x: "85%", y: "50%", opacity: 0.13, delay: 0.5, duration: 11 },
];

interface FloatingOrbsProps {
  orbs?: Orb[];
  className?: string;
}

export default function FloatingOrbs({
  orbs = defaultOrbs,
  className = "",
}: FloatingOrbsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbEls = container.querySelectorAll<HTMLElement>(".gsap-orb");

    orbEls.forEach((orb, i) => {
      const cfg = orbs[i];
      gsap.to(orb, {
        y: "+=30",
        x: "+=15",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: cfg.duration,
        delay: cfg.delay,
      });
      gsap.to(orb, {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: cfg.duration * 1.3,
        delay: cfg.delay + 0.5,
      });
    });

    return () => {
      gsap.killTweensOf(orbEls);
    };
  }, [orbs]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="gsap-orb absolute rounded-full hidden md:block"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            opacity: orb.opacity,
            background: `radial-gradient(circle, rgba(65,184,131,0.5) 0%, rgba(65,184,131,0.1) 50%, transparent 70%)`,
            filter: "blur(40px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
