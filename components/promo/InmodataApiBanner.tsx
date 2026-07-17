import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { inmodataPromoUrl } from "@/lib/bogota-apartments/site";

export function InmodataApiBanner() {
  return (
    <aside
      className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:p-5"
      aria-label="Inmodata — API de datos inmobiliarios"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex items-center justify-between gap-3 sm:shrink-0 sm:justify-start">
          <a
            href={inmodataPromoUrl("logo")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-80 active:opacity-70"
          >
            <Image
              src="/img/logos/inmodata.png"
              alt="Inmodata"
              width={160}
              height={45}
              className="h-7 w-auto max-w-[9.5rem] sm:h-8 sm:max-w-none"
            />
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:hidden">
            Tecnología Inmodata
          </span>
        </div>

        <div
          className="hidden sm:block w-px self-stretch bg-slate-200 shrink-0"
          aria-hidden
        />

        <div className="flex-1 min-w-0 space-y-1.5 border-t border-slate-200/80 pt-3 sm:border-t-0 sm:pt-0">
          <p className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Tecnología Inmodata
          </p>
          <p className="text-sm font-bold text-slate-900 leading-snug">
            Datos inmobiliarios de toda Colombia en una sola API. Próximamente, Latinoamérica.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-800">Inmodata</span> es una
            plataforma comercial propietaria con plan gratuito y planes de pago
            para consultar e integrar información del mercado inmobiliario.
          </p>
        </div>

        <a
          href={inmodataPromoUrl("cta")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 active:bg-cyan-200/80 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200/80 px-4 py-3 sm:py-2 rounded-full transition-colors sm:self-center"
        >
          Conocer más
          <ArrowUpRight size={13} />
        </a>
      </div>
    </aside>
  );
}
