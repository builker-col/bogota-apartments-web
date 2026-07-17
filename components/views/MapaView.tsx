"use client";

import { useState } from "react";
import { Layers, MapPin } from "lucide-react";
import { DEMO_ZONES } from "@/lib/bogota-apartments/data";

const layers = ["Intensidad de oferta", "Tipología", "Rangos de área"] as const;

export function MapaView() {
  const [layer, setLayer] = useState<(typeof layers)[number]>(layers[0]);
  const [selected, setSelected] = useState(DEMO_ZONES[0]);
  return (
    <div className="bg-[#07111d] text-white">
      <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-300">Mapa / Prototipo conectado a Inmodata</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end"><h1 className="text-5xl font-medium leading-[.9] tracking-[-.055em] sm:text-8xl">Bogotá se entiende<br /><span className="text-cyan-300">por capas.</span></h1><p className="max-w-xl text-base leading-relaxed text-slate-400">Esta visualización usa puntos simulados para validar la experiencia. Después recibirá geometrías y agregados desde la API de Inmodata.</p></div>
      </section>
      <section className="mx-auto grid max-w-[1480px] border-y border-white/15 lg:grid-cols-[280px_1fr_300px]">
        <aside className="border-b border-white/15 p-5 lg:border-b-0 lg:border-r lg:p-7"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-slate-500">Capas disponibles</p><div className="mt-5 divide-y divide-white/10 border-y border-white/10">{layers.map(item => <button key={item} onClick={() => setLayer(item)} className={`flex w-full items-center justify-between py-4 text-left text-sm ${layer === item ? "text-cyan-300" : "text-slate-400 hover:text-white"}`}><span>{item}</span><Layers size={15} /></button>)}</div><div className="mt-8 border border-fuchsia-400/30 bg-fuchsia-400/5 p-4"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-fuchsia-300">Demo visible</p><p className="mt-2 text-xs leading-relaxed text-slate-400">No representa valores actuales ni debe usarse para tomar decisiones.</p></div></aside>
        <div className="relative min-h-[540px] overflow-hidden bg-[#0a1b29]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute inset-[8%] border border-white/10 [clip-path:polygon(33%_0,64%_5%,81%_25%,75%_45%,91%_68%,67%_96%,32%_90%,14%_66%,22%_42%,8%_23%)] bg-[#0f2c3e]" />
          {DEMO_ZONES.map(zone => <button key={zone.name} onClick={() => setSelected(zone)} aria-label={`Seleccionar ${zone.name}`} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white" style={{ left: `${zone.x}%`, top: `${zone.y}%`, width: zone.size * 2.8, height: zone.size * 2.8, background: `${zone.tone}99`, boxShadow: `0 0 45px ${zone.tone}66` }}><span className="sr-only">{zone.name}</span></button>)}
          <div className="absolute bottom-5 left-5 bg-[#07111d]/90 px-4 py-3 text-xs"><span className="text-slate-500">Capa:</span> {layer}</div>
        </div>
        <aside className="border-t border-white/15 p-5 lg:border-l lg:border-t-0 lg:p-7"><MapPin className="text-fuchsia-300" size={20} /><p className="mt-8 font-mono text-[9px] uppercase tracking-[.2em] text-slate-500">Zona seleccionada</p><h2 className="mt-3 text-3xl font-medium">{selected.name}</h2><div className="mt-8 space-y-5 border-t border-white/10 pt-6 text-sm"><div><p className="text-slate-500">Lectura</p><p className="mt-1">Muestra de interfaz</p></div><div><p className="text-slate-500">Fuente futura</p><p className="mt-1">Inmodata Maps API</p></div><div><p className="text-slate-500">Estado</p><p className="mt-1 text-fuchsia-300">Datos simulados</p></div></div></aside>
      </section>
    </div>
  );
}
