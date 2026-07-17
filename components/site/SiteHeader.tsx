"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SiteLogo } from "./SiteLogo";

const NAV_ITEMS = [
  { href: "/", label: "Inicio", exact: true },
  { href: "/consultas", label: "Consultas" },
  { href: "/mapa", label: "Mapa" },
  { href: "/descargas", label: "Descargas" },
  { href: "/api", label: "API" },
  { href: "/blog", label: "Bitácora" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string, exact?: boolean) => exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <SiteLogo />
        <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 lg:flex" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={`relative py-3 transition-colors hover:text-white ${active(item.href, "exact" in item ? item.exact : false) ? "text-white after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-cyan-300" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="https://builker.com" target="_blank" rel="noreferrer" className="hidden border-b border-white/40 pb-1 text-xs font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300 lg:block">Un proyecto de Builker ↗</a>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-white/15 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && (
        <nav id="mobile-nav" className="fixed inset-x-0 top-[76px] z-50 min-h-[calc(100dvh-76px)] bg-[#07111d] px-5 py-8 lg:hidden" aria-label="Navegación móvil">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {NAV_ITEMS.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-5 text-2xl font-medium"><span>{item.label}</span><span className="font-mono text-[10px] text-cyan-300">0{index + 1}</span></Link>)}
          </div>
        </nav>
      )}
    </header>
  );
}
