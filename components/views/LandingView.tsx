import Link from "next/link";
import { ArrowRight, Bot, Database, Download, Map, Search } from "lucide-react";
import { DATASETS, INTEGRATIONS } from "@/lib/bogota-apartments/data";

const paths = [
  { href: "/consultas", icon: Search, number: "01", title: "Consulta el mercado", text: "Combina zona, periodo, inmueble y variables en una experiencia reproducible." },
  { href: "/mapa", icon: Map, number: "02", title: "Lee el territorio", text: "Explora capas y patrones espaciales sobre una representación de Bogotá." },
  { href: "/descargas", icon: Download, number: "03", title: "Trabaja con los archivos", text: "Descarga datasets versionados, su diccionario y las notas metodológicas." },
  { href: "/api", icon: Bot, number: "04", title: "Construye sobre los datos", text: "Conoce el contrato previsto para datos, consultas, mapas e inteligencia artificial." },
];

export function LandingView() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#07111d] text-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%] bg-[linear-gradient(135deg,transparent_5%,rgba(31,79,112,.32)_36%,rgba(124,40,180,.3)_68%,rgba(255,79,216,.14))] [clip-path:polygon(27%_0,100%_0,100%_100%,0_100%)]" />
        <div className="pointer-events-none absolute right-[8%] top-[14%] h-[420px] w-[420px] rounded-full border border-cyan-300/20" />
        <div className="pointer-events-none absolute right-[16%] top-[25%] h-[260px] w-[260px] rounded-full border border-fuchsia-400/20" />
        <div className="relative mx-auto grid min-h-[calc(100dvh-76px)] max-w-[1480px] content-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.35fr_.65fr] lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300"><span className="h-px w-10 bg-cyan-300" />Datos abiertos / mercado inmobiliario / Bogotá</div>
            <h1 className="text-[clamp(3.4rem,8.5vw,9rem)] font-medium leading-[.84] tracking-[-.065em]">La ciudad,<br /><span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">en datos.</span></h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-2xl">Un proyecto abierto de Builker para descargar, consultar y explorar información del mercado inmobiliario de Bogotá.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/consultas" className="inline-flex items-center justify-between gap-8 bg-cyan-300 px-6 py-4 text-sm font-bold text-[#07111d] transition-colors hover:bg-white">Explorar la demo <ArrowRight size={17} /></Link>
              <Link href="/descargas" className="inline-flex items-center justify-between gap-8 border border-white/25 px-6 py-4 text-sm font-bold text-white hover:border-white">Ver datasets <Download size={17} /></Link>
            </div>
          </div>
          <div className="self-end border-l border-white/15 pl-6 lg:mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-500">Estado de esta versión</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">La interfaz es funcional como prototipo. Las cifras, consultas, capas y respuestas visibles están marcadas como demostración hasta conectar el bucket y la API de Inmodata.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#07111d]/15 bg-[#d9ff48] text-[#07111d]">
        <div className="mx-auto grid max-w-[1480px] gap-5 px-5 py-8 sm:px-8 lg:grid-cols-[.4fr_1fr] lg:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[.2em]">Construido por Builker</p>
          <p className="text-xl font-medium leading-snug sm:text-3xl">Convertimos datos complejos en infraestructura abierta para entender Bogotá. Builker diseña y construye la experiencia; Inmodata aporta la tecnología inmobiliaria que la hará crecer.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
          <div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-violet-700">Cómo se usa</p><h2 className="mt-5 text-4xl font-medium leading-[.98] tracking-[-.04em] sm:text-6xl">Cuatro formas de entrar a los datos.</h2></div>
          <div className="border-t border-[#07111d]/20">
            {paths.map(({ href, icon: Icon, number, title, text }) => (
              <Link href={href} key={href} className="group grid gap-5 border-b border-[#07111d]/20 py-7 sm:grid-cols-[3rem_1fr_1fr_2rem] sm:items-center">
                <span className="font-mono text-[10px] text-violet-700">{number}</span><span className="flex items-center gap-3 text-xl font-semibold"><Icon size={19} />{title}</span><span className="text-sm leading-relaxed text-slate-600">{text}</span><ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111d] text-white">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-300">Arquitectura prevista</p><h2 className="mt-5 text-4xl font-medium leading-none tracking-[-.04em] sm:text-6xl">Abierto por diseño.<br />Conectado con criterio.</h2></div><p className="max-w-xl text-slate-400">Los archivos públicos vivirán en un bucket versionado. Inmodata aportará capacidades de consulta, geografía e IA desde su tecnología propietaria, manteniendo una separación clara entre este proyecto abierto y su plataforma comercial.</p></div>
          <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {INTEGRATIONS.map((item) => <div key={item.id} className="min-h-56 border-b border-r border-white/15 p-5"><div className="flex items-center justify-between"><Database size={17} className="text-cyan-300" /><span className="font-mono text-[9px] uppercase tracking-[.16em] text-fuchsia-300">{item.state === "demo" ? "Demo" : "Próximo"}</span></div><h3 className="mt-10 text-lg font-semibold">{item.name}</h3><p className="mt-3 text-xs leading-relaxed text-slate-400">{item.description}</p><p className="mt-6 font-mono text-[9px] uppercase tracking-[.16em] text-slate-600">{item.provider}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-5 border-b border-[#07111d]/20 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-violet-700">Catálogo inicial</p><h2 className="mt-4 text-4xl font-medium tracking-[-.04em] sm:text-6xl">Qué vamos a publicar.</h2></div><Link href="/descargas" className="flex items-center gap-2 text-sm font-bold">Abrir catálogo <ArrowRight size={16} /></Link></div>
        <div className="grid lg:grid-cols-3">{DATASETS.map((dataset, i) => <article key={dataset.id} className="border-b border-[#07111d]/20 py-8 lg:border-r lg:px-7 first:pl-0 last:border-r-0"><span className="font-mono text-[10px] text-violet-700">0{i + 1}</span><h3 className="mt-8 text-2xl font-semibold">{dataset.name}</h3><p className="mt-4 text-sm leading-relaxed text-slate-600">{dataset.description}</p><div className="mt-8 flex flex-wrap gap-2">{dataset.formats.map(format => <span key={format} className="border border-[#07111d]/25 px-2 py-1 font-mono text-[9px]">{format}</span>)}</div></article>)}</div>
      </section>
    </div>
  );
}
