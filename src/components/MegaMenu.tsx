import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { solutionsCategories, industriesList } from "@/data/company";

const sidebar = [
  { key: "solutions", label: "SOLUTIONS" },
  { key: "industries", label: "INDUSTRIES" },
  { key: "how", label: "HOW IT WORKS", to: "/how-it-works" },
  { key: "about", label: "ABOUT", to: "/about" },
  { key: "contact", label: "CONTACT", to: "/contact" },
];

export function MegaMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState("solutions");

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-200 max-h-[80vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[450px]">
        <div className="col-span-12 md:col-span-4 bg-brand-dark text-white py-6">
          {sidebar.map(s => (
            s.to ? (
              <Link key={s.key} to={s.to} onClick={onClose}
                className="flex items-center justify-between px-6 py-4 hover:bg-black/30 font-semibold tracking-wide text-sm border-l-4 border-transparent">
                {s.label} <ChevronRight size={16} />
              </Link>
            ) : (
              <button key={s.key} onMouseEnter={() => setActive(s.key)} onClick={() => setActive(s.key)}
                className={`w-full flex items-center justify-between px-6 py-4 hover:bg-black/30 font-semibold tracking-wide text-sm border-l-4 ${active === s.key ? "border-[#80CD29] bg-black/20" : "border-transparent"}`}>
                {s.label} <ChevronRight size={16} />
              </button>
            )
          ))}
        </div>

        <div className="col-span-12 md:col-span-8 p-8 bg-white">
          {active === "solutions" && (
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6">Our Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutionsCategories.map(cat => (
                  <div key={cat.title}>
                    <h4 className="font-bold text-brand-primary text-sm tracking-wider mb-2">{cat.title}</h4>
                    <ul className="space-y-1.5">
                      {cat.items.map(it => (
                        <li key={it}>
                          <Link to="/solutions" onClick={onClose} className="text-sm text-brand-mid hover:text-brand-primary">{it}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link to="/solutions" onClick={onClose} className="inline-flex items-center gap-2 mt-6 font-bold text-brand-primary hover:text-brand-secondary">
                VIEW ALL SOLUTIONS <ChevronRight size={16} />
              </Link>
            </div>
          )}
          {active === "industries" && (
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {industriesList.map(i => (
                  <Link key={i.id} to="/industries" hash={i.id} onClick={onClose}
                    className="px-4 py-3 rounded-lg border border-gray-200 hover:border-brand-primary hover:bg-green-50 text-sm font-medium text-brand-dark">
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
