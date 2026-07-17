import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/bogota-apartments/site";

const links = [
  ["Consultas", "/consultas"], ["Mapa", "/mapa"], ["Descargas", "/descargas"], ["API", "/api"], ["Bitácora", "/blog"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050b12] text-white">
      <div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">Bogotá Real Estate Open Data</p>
            <p className="mt-5 max-w-xl text-3xl font-medium leading-tight sm:text-5xl">Datos abiertos para entender mejor la ciudad que habitamos.</p>
          </div>
          <nav className="grid content-start gap-3 text-sm text-slate-400" aria-label="Enlaces del proyecto">{links.map(([label, href]) => <Link key={href} href={href} className="w-fit hover:text-white">{label}</Link>)}</nav>
          <div className="space-y-3 text-sm text-slate-400">
            <p>Construido por <a href="https://builker.com" className="text-white hover:text-cyan-300">Builker ↗</a></p>
            <p>Tecnología de <a href="https://inmodata.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300">Inmodata ↗</a></p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white hover:text-cyan-300">{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Builker S.A.S.</p><p>Proyecto independiente de datos abiertos · Bogotá, Colombia</p></div>
      </div>
    </footer>
  );
}
