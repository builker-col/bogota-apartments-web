import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Bogotá Real Estate Open Data — Inicio">
      <span className="relative grid h-9 w-9 place-items-center border border-cyan-300/40 bg-[#0b1726]">
        <span className="absolute h-3 w-3 rotate-45 border-l-2 border-t-2 border-cyan-300 transition-transform group-hover:-translate-y-0.5" />
        <span className="absolute mt-3 h-3 w-3 rotate-45 border-l-2 border-t-2 border-fuchsia-400 transition-transform group-hover:translate-y-0.5" />
      </span>
      <span className="leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">Builker / Bogotá</span>
        <span className="mt-1 block text-sm font-semibold tracking-tight text-white">Real Estate Open Data</span>
      </span>
    </Link>
  );
}
