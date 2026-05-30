"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/khan-mehran", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kmehran", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/mehrankhanciit", label: "Twitter" },
  { icon: Mail, href: "mailto:mehrankhanciit@gmail.com", label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #41b883, #3dd68c, transparent)",
        }}
      />

      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #41b883 0%, #2d9768 100%)",
                  boxShadow: "0 0 12px rgba(65,184,131,0.4)",
                }}
              >
                M
              </span>
              <span className="font-bold text-sm gradient-text-brand">
                Mehran.dev
              </span>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Frontend developer crafting performant, beautiful web
              experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Navigation
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-[var(--brand)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#41b883";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(65,184,131,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 10px rgba(65,184,131,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} Mehran Khan. All rights reserved.
          </span>
          <span>
            Built with{" "}
            <span className="text-[var(--brand)]">Next.js 14</span> &amp;{" "}
            <span className="text-[var(--brand)]">Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
