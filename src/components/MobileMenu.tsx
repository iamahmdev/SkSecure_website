import { Link, useNavigate } from "react-router-dom";
import { X, Phone } from "lucide-react";
import { solutionsCategories, industriesList } from "@/data/company";

export function MobileMenu({ onClose, onExpert }: { onClose: () => void; onExpert: () => void }) {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    onClose();
  };

  const handleSolutionClick = (id: string) => {
    onClose();
    // Force full page navigation with hash
    window.location.href = `/solutions#${id}`;
  };

  return (
    <div className="fixed inset-0 z-[90] bg-white overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-extrabold text-brand-primary">SKSecureData</span>
          <button onClick={onClose}><X size={28} /></button>
        </div>

        <details className="border-b py-3" open>
          <summary className="font-bold text-brand-dark cursor-pointer">SOLUTIONS</summary>
          <div className="pt-3 space-y-2">
            {solutionsCategories.map(c => (
              <div key={c.title}>
                <p className="text-xs font-bold text-brand-primary mt-2">{c.title}</p>
                {c.items.map(i => (
                  <button 
                    key={i.name} 
                    onClick={() => handleSolutionClick(i.id)} 
                    className="block py-1 text-sm text-brand-mid text-left w-full">
                    {i.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </details>

        <details className="border-b py-3">
          <summary className="font-bold text-brand-dark cursor-pointer">INDUSTRIES</summary>
          <div className="pt-3 space-y-1">
            {industriesList.map(i => (
              <Link key={i.id} to={`/industries#${i.id}`} onClick={handleLinkClick} className="block py-1 text-sm text-brand-mid">{i.name}</Link>
            ))}
          </div>
        </details>

        {[
          { to: "/how-it-works", label: "HOW IT WORKS" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map(l => (
          <Link key={l.to} to={l.to} onClick={handleLinkClick} className="block border-b py-4 font-bold text-brand-dark">{l.label}</Link>
        ))}

        <div className="pt-6 space-y-3">
          <button onClick={onExpert} className="btn-secondary w-full justify-center"><Phone size={16} /> Talk to an Expert</button>
          <Link to="/book-consultation" onClick={handleLinkClick} className="btn-primary w-full justify-center">Book Consultation</Link>
        </div>
      </div>
    </div>
  );
}
