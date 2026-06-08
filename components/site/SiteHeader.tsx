"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Database, Download, Map, Menu, X } from "lucide-react";
import { SiteLogo } from "./SiteLogo";

type NavItem = {
  href: string;
  label: string;
  icon?: typeof Map;
  exact?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio", exact: true },
  { href: "/mapa", label: "Mapa Catastral", icon: Map },
  { href: "/descargas", label: "Reportes Mensuales", icon: Database },
  { href: "/api", label: "API Desarrolladores", icon: Code },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname.startsWith(href);
}

function navLinkClass(active: boolean, mobile = false) {
  const base = mobile
    ? "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-colors"
    : "hover:text-blue-600 transition-colors flex items-center gap-1.5";

  if (mobile) {
    return active
      ? `${base} bg-blue-50 text-blue-700`
      : `${base} text-slate-600 hover:bg-slate-50`;
  }

  return active ? `${base} text-blue-600` : base;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <SiteLogo />

        <nav
          className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-500"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => (
            <Link
              key={href}
              href={href}
              className={navLinkClass(isActive(pathname, href, exact))}
            >
              {Icon && <Icon size={14} />}
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/descargas"
            className="hidden sm:flex bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold tracking-wider uppercase px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/10"
          >
            Descargas
          </Link>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-16 bg-slate-900/40 z-40"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="md:hidden fixed top-16 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-xl px-4 py-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto"
            aria-label="Navegación móvil"
          >
            {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClass(isActive(pathname, href, exact), true)}
              >
                {Icon && <Icon size={18} />}
                {label}
              </Link>
            ))}
            <Link
              href="/descargas"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-bold"
            >
              <Download size={16} />
              Descargar Datos Abiertos
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
