import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { company } from "@/data/company";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between py-2">
            {/* Left: Menu Button + Logo */}
            <div className="flex items-center gap-0">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className="bg-brand-primary text-white p-3 hover:bg-brand-secondary transition-colors self-center"
              >
                {megaOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link to="/" className="block -my-3 self-center">
                <img
                  src="/sksecuredatalogo.png"
                  alt="SKSecureData"
                  className="h-28 w-auto"
                />
              </Link>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setHelpOpen(true)} 
                className="group border-2 border-brand-primary bg-white text-brand-primary px-6 py-2.5 rounded font-semibold text-sm flex items-center gap-2 hover:bg-brand-secondary transition-colors"
              >
                <PhoneCall size={16} className="group-hover:text-white" /> 
                <span className="group-hover:text-white">Talk to an Expert</span>
              </button>
              <Link 
                to="/book-consultation"
                className="group border-2 border-brand-primary bg-white text-brand-primary px-6 py-2.5 rounded font-semibold text-sm flex items-center gap-2 hover:bg-brand-secondary transition-colors"
              >
                <PhoneCall size={16} className="group-hover:text-white" /> 
                <span className="group-hover:text-white">Book Consultation</span>
              </Link>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between py-2">
            {/* Logo Left */}
            <Link to="/" className="block -my-2">
              <img
                src="/sksecuredatalogo.png"
                alt="SKSecureData"
                className="h-28 w-auto"
              />
            </Link>

            {/* Hamburger Right */}
            <button onClick={() => setMobileOpen(true)}>
              <Menu size={24} className="text-brand-dark" />
            </button>
          </div>
        </div>

        {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
      </header>

      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          onHelp={() => { setMobileOpen(false); setHelpOpen(true); }}
        />
      )}

      {helpOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setHelpOpen(false)}
        >
          <div className="bg-white rounded-xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-brand-dark">Talk to an Expert</h3>
              <button onClick={() => setHelpOpen(false)}><X /></button>
            </div>
            <p className="text-brand-mid mb-6">Speak directly with a data specialist</p>
            <a href={`tel:${company.phoneTel}`} className="btn-primary w-full justify-center text-lg">
              <PhoneCall size={20} /> {company.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
