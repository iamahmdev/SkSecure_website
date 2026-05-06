import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
}

export function PageHero({ title, sub, primary, secondary, bg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" }: {
  title: string; sub: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  bg?: string;
}) {
  return (
    <section className="relative py-28 bg-brand-dark overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl">{title}</motion.h1>
        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">{sub}</motion.p>
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4">
          {primary && <Link to={primary.to} className="btn-primary">{primary.label}</Link>}
          {secondary && <Link to={secondary.to} className="btn-outline-white">{secondary.label}</Link>}
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceBlock({ image, title, desc, bullets, index, ctaLabel = "Request Service", ctaTo = "/book-consultation", id }: {
  image: string; title: string; desc: string; bullets: string[]; index: number; ctaLabel?: string; ctaTo?: string; id?: string;
}) {
  const reverse = index % 2 === 1;
  return (
    <section id={id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"} scroll-mt-24`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: reverse ? 60 : -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reverse ? "md:order-2" : ""}
        >
          <img src={image} alt={title} className="rounded-2xl shadow-xl w-full h-[380px] object-cover" />
        </motion.div>
        <motion.div
          initial={{ x: reverse ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">{title}</h2>
          <p className="text-brand-mid mb-6">{desc}</p>
          <ul className="space-y-2 mb-6">
            {bullets.map((b, i) => (
              <motion.li key={b}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-2 text-sm text-brand-dark"
              >
                <span className="text-brand-primary mt-1">✓</span>{b}
              </motion.li>
            ))}
          </ul>
          <Link to={ctaTo} className="btn-primary">{ctaLabel}</Link>
        </motion.div>
      </div>
    </section>
  );
}
