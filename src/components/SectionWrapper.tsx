import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionWrapper({ children, bg = "white", className = "" }: { children: ReactNode; bg?: "white" | "muted" | "tint"; className?: string }) {
  const bgClass = bg === "muted" ? "bg-[#f9f9f9]" : bg === "tint" ? "bg-[#f3faf4]" : "bg-white";
  return (
    <section className={`py-20 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function FadeInHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
