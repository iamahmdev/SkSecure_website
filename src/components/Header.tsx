import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { company } from "@/data/company";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertOpen, setExpertOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Left: Logo on top, MENU below — both aligned to same left edge */}
          <div className="flex flex-col" style={{ alignItems: "flex-start" }}>
            <Link to="/" style={{ display: "block", lineHeight: 0, marginLeft: "-16px" }}>
              <img
                src="/sksecuredatalogo.png"
                alt="SKSecureData"
                style={{ height: "125px", width: "auto", display: "block" }}
              />
            </Link>
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              className="hidden md:flex items-center gap-1 text-xs font-bold tracking-widest text-brand-dark hover:text-brand-primary"
              style={{ marginTop: "4px", paddingLeft: "0px" }}
            >
              {megaOpen ? <X size={14} /> : <Menu size={14} />} MENU
            </button>
          </div>

          {/* Right: Buttons — slightly raised to align with logo center */}
          <div className="hidden md:flex items-center gap-3" style={{ marginTop: "-24px" }}>
            <button onClick={() => setExpertOpen(true)} className="btn-secondary !py-2 !text-sm">
              <Phone size={16} /> Talk to an Expert
            </button>
            <Link to="/book-consultation" className="btn-primary !py-2 !text-sm">
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
      </header>

      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          onExpert={() => { setMobileOpen(false); setExpertOpen(true); }}
        />
      )}

      {expertOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setExpertOpen(false)}
        >
          <div className="bg-white rounded-xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-brand-dark">Talk to an Expert</h3>
              <button onClick={() => setExpertOpen(false)}><X /></button>
            </div>
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
