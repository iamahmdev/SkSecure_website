import { Link } from "react-router-dom";
import { X, PhoneCall, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { solutionsCategories, industriesList } from "@/data/company";

export function MobileMenu({ onClose, onHelp }: { onClose: () => void; onHelp: () => void }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const handleLinkClick = () => {
    onClose();
  };

  const handleSolutionClick = (id: string) => {
    onClose();
    window.location.href = `/solutions#${id}`;
  };

  return (
    <div className="fixed inset-0 z-[90] bg-white overflow-y-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200">
        <Link to="/" onClick={handleLinkClick} className="block">
          <img
            src="/sksecuredatalogo.png"
            alt="SKSecureData"
            className="h-24 w-auto"
          />
        </Link>
        <button onClick={onClose}>
          <X size={24} className="text-brand-dark" />
        </button>
      </div>

      {/* Navigation Section */}
      <div className="px-6">
        {/* Solutions Collapsible */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="w-full flex items-center justify-between py-4"
          >
            <span className="text-sm font-bold tracking-wider text-brand-dark">SOLUTIONS</span>
            <ChevronDown 
              size={20} 
              className={`text-brand-dark transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {solutionsOpen && (
            <div className="pb-4 space-y-3">
              {solutionsCategories.map(c => (
                <div key={c.title}>
                  <button 
                    onClick={() => handleSolutionClick(c.categoryId)} 
                    className="text-xs font-bold text-brand-primary hover:text-brand-secondary">
                    {c.title}
                  </button>
                  {c.items.map(i => (
                    <button 
                      key={i.name} 
                      onClick={() => handleSolutionClick(i.id)} 
                      className="block py-1.5 text-sm text-brand-mid text-left w-full hover:text-brand-primary">
                      {i.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Industries Collapsible */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => setIndustriesOpen(!industriesOpen)}
            className="w-full flex items-center justify-between py-4"
          >
            <span className="text-sm font-bold tracking-wider text-brand-dark">INDUSTRIES</span>
            <ChevronDown 
              size={20} 
              className={`text-brand-dark transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {industriesOpen && (
            <div className="pb-4 space-y-1">
              {industriesList.map(i => (
                <Link 
                  key={i.id} 
                  to={`/industries#${i.id}`} 
                  onClick={handleLinkClick} 
                  className="block py-1.5 text-sm text-brand-mid hover:text-brand-primary">
                  {i.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Simple Links */}
        {[
          { to: "/how-it-works", label: "HOW IT WORKS" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map(l => (
          <Link 
            key={l.to} 
            to={l.to} 
            onClick={handleLinkClick} 
            className="block border-b border-gray-200 py-4 text-sm font-bold tracking-wider text-brand-dark">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Bottom CTA Buttons */}
      <div className="px-6 py-6 space-y-3">
        <button 
          onClick={onHelp} 
          className="w-full border-2 border-red-600 bg-white text-red-600 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all">
          <PhoneCall size={18} /> Immediate Help
        </button>
        <Link 
          to="/book-consultation" 
          onClick={handleLinkClick} 
          className="group w-full border-2 border-brand-primary bg-white text-brand-primary px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-brand-primary transition-all">
          <Download size={18} className="group-hover:text-white" /> 
          <span className="group-hover:text-white">Download App</span>
        </Link>
      </div>
    </div>
  );
}
