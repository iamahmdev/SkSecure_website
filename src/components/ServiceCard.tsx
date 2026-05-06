import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ icon: Icon, title, desc, index = 0, to = "/solutions" }: {
  icon: LucideIcon; title: string; desc: string; index?: number; to?: string;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
        <Icon className="text-brand-primary" size={24} />
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-sm text-brand-mid mb-4">{desc}</p>
      <Link to={to} className="text-brand-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
