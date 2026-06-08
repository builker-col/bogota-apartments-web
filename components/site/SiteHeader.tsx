"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Database, Map } from "lucide-react";
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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <SiteLogo />

        <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-500">
          {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 transition-colors flex items-center gap-1.5 ${
                isActive(pathname, href, exact) ? "text-blue-600" : ""
              }`}
            >
              {Icon && <Icon size={14} />}
              {label}
            </Link>
          ))}
        </nav>

        <div>
          <Link
            href="/descargas"
            className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/10"
          >
            Descargas
          </Link>
        </div>
      </div>
    </header>
  );
}
