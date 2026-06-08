import Link from "next/link";
import { ExternalLink, GitBranch, Mail, Unlock } from "lucide-react";
import { CONTACT_EMAIL, SITE_VERSION } from "@/lib/bogota-apartments/site";

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Mapa GIS" },
  { href: "/descargas", label: "Descargas" },
  { href: "/api", label: "API REST" },
  { href: "/blog", label: "Blog" },
] as const;

const PARTNERS = [
  {
    role: "Proyecto de",
    name: "Builker S.A.S",
    href: "https://builker.com",
  },
  {
    role: "Con el apoyo de",
    name: "Inmodata",
    href: "https://inmodata.builker.com",
  },
  {
    role: "Con el apoyo de",
    name: "Tayra",
    href: "https://tayra.com.co",
  },
] as const;

function ExternalPartnerLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-white hover:text-blue-400 transition-colors font-bold"
    >
      {name}
      <ExternalLink size={11} className="opacity-60" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-8 sm:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <p className="text-white font-extrabold text-sm tracking-wider">
              BOGOTÁ APARTMENTS
            </p>
            <p className="text-sm leading-relaxed max-w-sm">
              Plataforma open source y open data para analizar el mercado
              inmobiliario de Bogotá D.C. con mapas, reportes y API pública.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                <GitBranch size={11} />
                Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                <Unlock size={11} />
                Open Data
              </span>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors w-fit"
            >
              <Mail size={14} className="text-slate-500" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Navegación
            </p>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-semibold text-slate-300 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Aliados
            </p>
            <ul className="space-y-3">
              {PARTNERS.map(({ role, name, href }) => (
                <li key={name} className="text-sm">
                  <span className="text-slate-500 block text-xs mb-0.5">
                    {role}
                  </span>
                  <ExternalPartnerLink href={href} name={name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Bogotá Apartments · Datos abiertos
            inmobiliarios
          </p>
          <p className="text-slate-600">v{SITE_VERSION}</p>
        </div>
      </div>
    </footer>
  );
}
