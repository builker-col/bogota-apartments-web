"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { API_PREVIEW } from "@/lib/bogota-apartments/data";
import { copyToClipboard } from "@/lib/bogota-apartments/copy-to-clipboard";

const snippet = `// Contrato de integración — demo, no ejecutar todavía
const response = await fetch(
  "https://api.inmodata.io/open-data/bogota/v1/query",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      zone: "chapinero",
      propertyType: "apartment",
      groupBy: "month"
    })
  }
);

const result = await response.json();`;

export function ApiView() {
  const [copied, setCopied] = useState(false);
  const copy = async () => { if (await copyToClipboard(snippet)) { setCopied(true); setTimeout(() => setCopied(false), 1800); } };
  return (
    <div className="bg-[#07111d] text-white">
      <section className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><p className="font-mono text-[10px] uppercase tracking-[.22em] text-fuchsia-300">API / Contrato en diseño</p><div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_.55fr] lg:items-end"><h1 className="text-5xl font-medium leading-[.9] tracking-[-.055em] sm:text-8xl">Una puerta estable<br />hacia los datos.</h1><p className="text-base leading-relaxed text-slate-400">La capa programática será servida por Inmodata. Aquí mostramos el contrato de producto previsto, no una API pública activa.</p></div></section>
      <section className="border-y border-white/15"><div className="mx-auto grid max-w-[1480px] lg:grid-cols-[.8fr_1.2fr]">
        <div className="border-b border-white/15 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyan-300">Endpoint base previsto</p><p className="mt-4 break-all font-mono text-sm">{API_PREVIEW.baseUrl}</p><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{API_PREVIEW.endpoints.map(endpoint => <div key={endpoint.path} className="grid grid-cols-[55px_1fr] gap-4 py-5"><span className="font-mono text-[10px] text-fuchsia-300">{endpoint.method}</span><div><code className="text-sm text-white">{endpoint.path}</code><p className="mt-2 text-xs text-slate-500">{endpoint.purpose}</p></div></div>)}</div></div>
        <div className="bg-[#02070c] p-5 sm:p-8 lg:p-12"><div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-slate-500">Ejemplo JavaScript</span><button onClick={copy} className="flex items-center gap-2 text-xs text-slate-400 hover:text-white">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copiado" : "Copiar"}</button></div><pre className="mt-7 overflow-x-auto whitespace-pre-wrap text-[12px] leading-7 text-cyan-200">{snippet}</pre></div>
      </div></section>
      <section className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="grid gap-8 lg:grid-cols-[.65fr_1fr]"><h2 className="text-4xl font-medium leading-none tracking-[-.04em] sm:text-6xl">Datos abiertos aquí.<br /><span className="text-fuchsia-300">Tecnología en Inmodata.</span></h2><div className="max-w-2xl"><p className="leading-relaxed text-slate-400">Las descargas abiertas permanecerán disponibles sin depender de la API. Las consultas avanzadas, mapas y asistencia con IA usarán la tecnología propietaria de Inmodata, una plataforma comercial con cobertura en toda Colombia, plan gratuito y planes de pago. Su expansión a Latinoamérica está prevista para una siguiente etapa.</p><a href="https://inmodata.io" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-cyan-300 pb-2 text-sm font-bold text-cyan-300">Conocer Inmodata <ExternalLink size={15} /></a></div></div></section>
    </div>
  );
}
