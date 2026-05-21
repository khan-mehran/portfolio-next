"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <span
          className="text-8xl sm:text-9xl font-extrabold gradient-text leading-none"
        >
          404
        </span>
        <h1
          className="text-2xl sm:text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Page Not Found
        </h1>
        <p
          className="max-w-md text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Looks like this page got lost in the void. Head back home and
          explore from there.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={15} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft size={15} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
