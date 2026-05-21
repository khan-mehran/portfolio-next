"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className,
  hover = true,
  animate = false,
  delay = 0,
}: CardProps) {
  const content = (
    <div className={cn("card-glass rounded-xl p-6", hover && "card-glass-hover", className)}>
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("card-glass rounded-xl p-6", hover && "card-glass-hover", className)}
    >
      {children}
    </motion.div>
  );
}
