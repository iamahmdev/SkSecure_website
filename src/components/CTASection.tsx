import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useState } from "react";
import { company } from "@/data/company";

export function CTASection({ title, text, showExpert = false, primaryTo = "/book-consultation", primaryLabel = "Book Consultation", secondaryTo, secondaryLabel }: {
  title: string; text: string; showExpert?: boolean;
  primaryTo?: string; primaryLabel?: string; secondaryTo?: string; secondaryLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 initial={{ y: -40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-5 uppercase tracking-tight">{title}</motion.h2>
          <motion.p initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">{text}</motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {showExpert ? (
              <button onClick={() => setOpen(true)} className="btn-white"><Phone size={16} /> Talk to an Expert</button>
            ) : null}
            <Link to={primaryTo} className="btn-white">{primaryLabel}</Link>
            {secondaryTo && <Link to={secondaryTo} className="btn-outline-white">{secondaryLabel}</Link>}
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Talk to an Expert</h3>
            <p className="text-brand-mid mb-6">Speak directly with a data specialist</p>
            <a href={`tel:${company.phoneTel}`} className="btn-primary w-full justify-center text-lg">
              <Phone size={20} /> {company.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
