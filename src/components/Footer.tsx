import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-extrabold mb-4">SK<span style={{ color: "#80CD29" }}>SecureData</span></h3>
          <p className="text-sm text-gray-300 mb-4">Data security, data management and reporting solutions for modern businesses.</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center"><Icon size={16} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { to: "/", label: "Home" },
              { to: "/solutions", label: "Solutions" },
              { to: "/industries", label: "Industries" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/book-consultation", label: "Book Consultation" },
            ].map(l => (
              <li key={l.to}><Link to={l.to} className="hover:text-[#80CD29]">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Data Management", "Security", "Reporting", "Governance"].map(s => (
              <li key={s}><Link to="/solutions" className="hover:text-[#80CD29]">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-3"><Phone size={16} className="shrink-0 mt-0.5 text-[#80CD29]" /><a href={`tel:${company.phoneTel}`}>{company.phone}</a></li>
            <li className="flex gap-3"><Mail size={16} className="shrink-0 mt-0.5 text-[#80CD29]" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li className="flex gap-3"><MapPin size={16} className="shrink-0 mt-0.5 text-[#80CD29]" /><span>{company.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-400 gap-2">
        <p>© 2025 SKSecureData. All rights reserved.</p>
        <p>Calgary, Alberta, Canada</p>
      </div>
    </footer>
  );
}
