"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type GraphicType = "orbs" | "code" | "shapes" | "envelope" | "dots";

interface FloatingGraphicProps {
  type?: GraphicType;
  className?: string;
}

export default function FloatingGraphic({
  type = "orbs",
  className = "",
}: FloatingGraphicProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>("[data-float]");
    els.forEach((el) => {
      const yAmt = parseFloat(el.dataset.y || "20");
      const xAmt = parseFloat(el.dataset.x || "10");
      const dur = parseFloat(el.dataset.dur || "4");
      const delay = parseFloat(el.dataset.delay || "0");

      gsap.to(el, {
        y: `+=${yAmt}`,
        x: `+=${xAmt}`,
        rotation: el.dataset.rot ? `+=${el.dataset.rot}` : undefined,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: dur,
        delay,
      });
    });

    return () => gsap.killTweensOf(els);
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none hidden md:block ${className}`}
      aria-hidden="true"
    >
      {type === "orbs" && (
        <>
          <div
            data-float
            data-y="25"
            data-x="12"
            data-dur="7"
            className="absolute right-8 top-16 w-48 h-48 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(65,184,131,0.18) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            data-float
            data-y="18"
            data-x="-10"
            data-dur="9"
            data-delay="2"
            className="absolute left-4 bottom-20 w-36 h-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(61,214,140,0.14) 0%, transparent 70%)",
              filter: "blur(25px)",
            }}
          />
        </>
      )}

      {type === "code" && (
        <>
          <svg
            data-float
            data-y="20"
            data-x="8"
            data-dur="6"
            className="absolute right-12 top-20 w-24 h-24 opacity-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M30 30L10 50L30 70M70 30L90 50L70 70M55 20L45 80"
              stroke="#41b883"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            data-float
            data-y="15"
            data-x="-12"
            data-dur="8"
            data-delay="1.5"
            className="absolute left-8 bottom-24 w-16 h-16 opacity-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="8"
              stroke="#41b883"
              strokeWidth="4"
            />
            <path d="M25 40h50M25 55h35" stroke="#41b883" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div
            data-float
            data-y="30"
            data-x="5"
            data-dur="11"
            data-delay="3"
            className="absolute right-1/4 top-1/3 w-32 h-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(65,184,131,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </>
      )}

      {type === "shapes" && (
        <>
          <svg
            data-float
            data-y="22"
            data-rot="15"
            data-dur="7"
            className="absolute right-16 top-24 w-20 h-20 opacity-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polygon
              points="50,5 95,75 5,75"
              stroke="#41b883"
              strokeWidth="3"
              fill="rgba(65,184,131,0.05)"
            />
          </svg>
          <svg
            data-float
            data-y="18"
            data-rot="-20"
            data-dur="9"
            data-delay="2"
            className="absolute left-20 top-1/3 w-14 h-14 opacity-10"
            viewBox="0 0 100 100"
            fill="none"
          >
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="4"
              stroke="#41b883"
              strokeWidth="3"
              fill="rgba(65,184,131,0.05)"
              transform="rotate(30 50 50)"
            />
          </svg>
          <svg
            data-float
            data-y="25"
            data-x="10"
            data-dur="6"
            data-delay="1"
            className="absolute right-1/3 bottom-16 w-16 h-16 opacity-8"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#41b883"
              strokeWidth="3"
              fill="rgba(65,184,131,0.04)"
              strokeDasharray="8 6"
            />
          </svg>
        </>
      )}

      {type === "envelope" && (
        <>
          <svg
            data-float
            data-y="25"
            data-x="10"
            data-dur="8"
            className="absolute right-16 top-20 w-28 h-28 opacity-10"
            viewBox="0 0 100 80"
            fill="none"
          >
            <rect
              x="5"
              y="5"
              width="90"
              height="70"
              rx="6"
              stroke="#41b883"
              strokeWidth="3"
            />
            <path d="M5 15L50 48L95 15" stroke="#41b883" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div
            data-float
            data-y="20"
            data-dur="10"
            data-delay="2"
            className="absolute left-12 bottom-24 w-40 h-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(65,184,131,0.14) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
        </>
      )}

      {type === "dots" && (
        <>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              data-float
              data-y={String(12 + (i % 3) * 8)}
              data-x={String(-8 + (i % 3) * 5)}
              data-dur={String(5 + i * 0.7)}
              data-delay={String(i * 0.4)}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${10 + (i % 3) * 30}%`,
                top: `${15 + Math.floor(i / 3) * 30}%`,
                background: "#41b883",
                opacity: 0.15 + (i % 3) * 0.05,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
