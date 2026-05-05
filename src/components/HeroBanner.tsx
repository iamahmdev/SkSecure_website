import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/company";

export function HeroBanner() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = heroSlides[i];
  return (
    <section className="relative h-[85vh] min-h-[560px] overflow-hidden bg-brand-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img src={s.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{s.title}</motion.h1>
              <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}
                className="text-lg md:text-xl text-gray-200 mb-8">{s.sub}</motion.p>
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4">
                <Link to={s.primary.to} className="btn-primary">{s.primary.label}</Link>
                <Link to={s.secondary.to} className="btn-outline-white">{s.secondary.label}</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[#80CD29]" : "w-4 bg-white/50"}`} />
        ))}
      </div>
    </section>
  );
}
