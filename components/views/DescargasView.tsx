"use client";

import { Download, FileText } from "lucide-react";
import { DATASETS } from "@/lib/bogota-apartments/data";
import { useToast } from "@/components/site/ToastProvider";

export function DescargasView() {
  const { showToast } = useToast();
  const pending = (name: string) => showToast(`${name}: la descarga se habilitará cuando conectemos el bucket.`);
  return (
    <div className="bg-[#eef0ec]">
      <section className="bg-[#d9ff48] px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-[1380px]"><p className="font-mono text-[10px] uppercase tracking-[.22em]">Descargas / Catálogo abierto</p><h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[.9] tracking-[-.055em] sm:text-8xl">Los datos también deben poder salir de aquí.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed">Este catálogo se conectará a un bucket de archivos públicos y versionados. La estructura ya está lista; las descargas todavía son una demostración.</p></div></section>
      <section className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="border-t border-[#07111d]/25">{DATASETS.map((dataset, index) => <article key={dataset.id} className="grid gap-7 border-b border-[#07111d]/25 py-9 lg:grid-cols-[80px_1.1fr_.7fr_190px] lg:items-center"><span className="font-mono text-[10px] text-violet-700">0{index + 1}</span><div><h2 className="text-2xl font-semibold">{dataset.name}</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{dataset.description}</p></div><dl className="grid grid-cols-2 gap-5 text-xs"><div><dt className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-500">Cobertura</dt><dd className="mt-2 font-semibold">{dataset.coverage}</dd></div><div><dt className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-500">Actualización</dt><dd className="mt-2 font-semibold">{dataset.cadence}</dd></div><div className="col-span-2"><dt className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-500">Formatos previstos</dt><dd className="mt-2">{dataset.formats.join(" · ")}</dd></div></dl><button type="button" onClick={() => pending(dataset.name)} className="flex items-center justify-between bg-[#07111d] px-5 py-4 text-sm font-bold text-white hover:bg-violet-700">Próximamente <Download size={16} /></button></article>)}</div>
        <div className="mt-14 grid gap-8 border border-[#07111d]/25 p-6 sm:p-9 lg:grid-cols-[auto_1fr]"><FileText size={24} /><div><h2 className="text-xl font-semibold">Cada archivo vendrá acompañado de contexto.</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">Versión, fecha de corte, licencia, diccionario de campos, metodología, cobertura y limitaciones. No publicaremos archivos sin explicar cómo deben leerse.</p></div></div>
      </section>
    </div>
  );
}
