"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import { stats } from "@/data/stats";
import FloatingGraphic from "@/components/FloatingGraphic";

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background band */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(65,184,131,0.05) 0%, transparent 60%)",
        }}
      />
      <FloatingGraphic type="shapes" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color: "var(--brand)" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.2} />
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
