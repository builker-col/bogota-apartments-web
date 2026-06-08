"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Database,
  Download,
  GitBranch,
  Info,
  Map,
  TrendingUp,
  Unlock,
} from "lucide-react";
import { HISTORICO_PRECIOS, RENTABILIDAD_ESTRATO } from "@/lib/bogota-apartments/data";
import { useToast } from "@/components/site/ToastProvider";

export function LandingView() {
  const { showToast } = useToast();
  const [activePriceIndex, setActivePriceIndex] = useState(
    HISTORICO_PRECIOS.length - 1,
  );
  const [activeEstratoIndex, setActiveEstratoIndex] = useState(1);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="animate-fade-in space-y-12 sm:space-y-20 pb-12 sm:pb-20">
      <section className="relative py-12 sm:py-24 lg:py-32 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-indigo-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 text-emerald-800 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
                <GitBranch size={13} />
                Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/80 text-blue-800 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
                <Unlock size={13} />
                Open Data
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.1] tracking-tight">
                Datos abiertos del mercado inmobiliario en{" "}
                <span className="text-blue-600">Bogotá</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                <strong className="text-slate-800 font-semibold">
                  Bogotá Apartments
                </strong>{" "}
                es un proyecto open source con datasets públicos del mercado
                inmobiliario. Descarga reportes, explora mapas catastrales e
                integra la API REST sin costo ni restricciones comerciales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/mapa"
                className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 sm:hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
              >
                <span>Visualizar Mapa GIS</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/descargas"
                className="w-full sm:w-auto justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-slate-800 sm:hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Download size={16} />
                <span>Descargar Datos Abiertos</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-2 text-emerald-600/80">
                <GitBranch size={13} />
                Código abierto
              </span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <span className="flex items-center gap-2 text-blue-600/80">
                <Unlock size={13} />
                Licencia de datos abiertos
              </span>
              <span className="hidden sm:inline text-slate-200">·</span>
              <span>15.480 registros 2025</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-[2rem] blur-2xl pointer-events-none" />
            <div className="relative bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-slate-900/20 border border-slate-800/80 ring-1 ring-white/10">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <span className="text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.2em] text-slate-400">
                  CIUDAD DE BOGOTÁ
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-400/10 px-2 py-1 sm:px-2.5 rounded-full border border-emerald-400/20">
                  <Unlock size={12} /> Open Data
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                    Precio Promedio m²
                  </span>
                  <span className="text-2xl sm:text-4xl font-black text-white tracking-tight break-words">
                    $6.616.667{" "}
                    <span className="text-sm font-medium text-slate-400">
                      COP/m²
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800/80">
                    <span className="text-[9px] text-slate-400 block mb-1 font-bold uppercase tracking-wide">
                      Rentabilidad
                    </span>
                    <span className="text-lg font-extrabold text-emerald-400">
                      6.61%
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      anual arriendo
                    </span>
                  </div>
                  <div className="bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800/80">
                    <span className="text-[9px] text-slate-400 block mb-1 font-bold uppercase tracking-wide">
                      Rotación
                    </span>
                    <span className="text-lg font-extrabold text-blue-400">
                      41 días
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      promedio mercado
                    </span>
                  </div>
                </div>

                <div className="h-12 flex items-end gap-1 pt-1">
                  {[38, 52, 45, 68, 74, 82].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600/40 to-blue-400/90"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 flex items-center justify-center gap-1">
            <TrendingUp size={14} /> Inteligencia Inmobiliaria
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Estadísticas y Variación del Suelo
          </h2>
          <p className="text-slate-500 text-sm">
            Explora las series históricas de la ciudad representadas mediante
            métricas interactivas consolidadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Evolución Histórica
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  Precio Promedio por Metro Cuadrado
                </h3>
              </div>
              <div className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-800 text-xs font-bold font-mono">
                COP / m²
              </div>
            </div>

            <div className="relative pt-4">
              <svg viewBox="0 0 500 200" className="w-full h-auto overflow-visible">
                <line x1="0" y1="180" x2="500" y2="180" stroke="#f1f5f9" strokeWidth="2" />
                <line x1="0" y1="130" x2="500" y2="130" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                <path
                  d="M 10,180 L 10,140 L 100,120 L 190,95 L 280,75 L 370,55 L 480,45 L 480,180 Z"
                  fill="url(#chartGrad)"
                  className="transition-all duration-500"
                />

                <path
                  d="M 10,140 L 100,120 L 190,95 L 280,75 L 370,55 L 480,45"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />

                {[
                  { x: 10, y: 140, year: "2021" },
                  { x: 100, y: 120, year: "2022" },
                  { x: 190, y: 95, year: "2023" },
                  { x: 280, y: 75, year: "2024" },
                  { x: 370, y: 55, year: "2025" },
                  { x: 480, y: 45, year: "2026" },
                ].map((pt, idx) => (
                  <g
                    key={pt.year}
                    className="cursor-pointer"
                    onMouseEnter={() => setActivePriceIndex(idx)}
                  >
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={activePriceIndex === idx ? 7 : 5}
                      fill={activePriceIndex === idx ? "#f59e0b" : "#2563eb"}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      className="transition-all duration-200"
                    />
                    <text
                      x={pt.x}
                      y="198"
                      textAnchor="middle"
                      className="text-[10px] font-bold fill-slate-400 font-mono"
                    >
                      {pt.year}
                    </text>
                  </g>
                ))}

                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Año de Consulta
                  </span>
                  <p className="text-base font-black text-slate-800">
                    {HISTORICO_PRECIOS[activePriceIndex].year}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Precio Promedio
                  </span>
                  <p className="text-base font-extrabold text-blue-600">
                    {new Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0,
                    }).format(HISTORICO_PRECIOS[activePriceIndex].precio)}{" "}
                    COP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Retorno de Arriendo
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  Cap Rate Neto Promedio por Estrato
                </h3>
              </div>
              <div className="bg-emerald-50 px-3 py-1.5 rounded-lg text-emerald-800 text-xs font-bold">
                % Tasa Anual
              </div>
            </div>

            <div className="relative pt-6">
              <svg viewBox="0 0 500 180" className="w-full h-auto overflow-visible">
                <line x1="40" y1="150" x2="480" y2="150" stroke="#f1f5f9" strokeWidth="2" />

                {RENTABILIDAD_ESTRATO.map((bar, idx) => {
                  const barWidth = 45;
                  const barHeight = (bar.capRate / 10) * 120;
                  const xPos = 60 + idx * 110;
                  const yPos = 150 - barHeight;
                  const isSelected = activeEstratoIndex === idx;

                  return (
                    <g
                      key={bar.estrato}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveEstratoIndex(idx)}
                    >
                      <rect
                        x={xPos - 15}
                        y="10"
                        width={barWidth + 30}
                        height="145"
                        className={`transition-all rounded-xl ${isSelected ? "fill-slate-50" : "fill-transparent"}`}
                        rx="8"
                      />
                      <rect
                        x={xPos}
                        y={yPos}
                        width={barWidth}
                        height={barHeight}
                        fill={isSelected ? "#2563eb" : bar.color}
                        rx="6"
                        className="transition-all duration-300"
                      />
                      <text
                        x={xPos + barWidth / 2}
                        y={yPos - 8}
                        textAnchor="middle"
                        className="text-[11px] font-black fill-slate-800 font-mono"
                      >
                        {bar.capRate}%
                      </text>
                      <text
                        x={xPos + barWidth / 2}
                        y="168"
                        textAnchor="middle"
                        className="text-[10px] font-bold fill-slate-400"
                      >
                        {bar.estrato}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="mt-4 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/30 text-center text-xs text-blue-800 flex items-center justify-center gap-2">
                <Info size={14} />
                <span>
                  El estrato 3 y 4 representan los mayores retornos debido a
                  los costos controlados del suelo de compra.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl sm:rounded-3xl flex flex-col justify-between md:hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
            <div>
              <Map size={36} className="text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-2">Visor de Mapa Mapbox</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                Accede a nuestro simulador interactivo de capas georreferenciadas
                catastrales. Listo para la integración directa con tokens de
                producción.
              </p>
            </div>
            <Link
              href="/mapa"
              className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <span>Ir al Mapa de Calor</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl flex flex-col justify-between md:hover:scale-[1.02] transition-all duration-300">
            <div>
              <Database size={36} className="text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                Base de Datos de Descargas
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-8">
                Descarga datasets unificados e históricos mensuales para realizar
                tus propios análisis agregados de Bogotá.
              </p>
            </div>
            <Link
              href="/descargas"
              className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <span>Ver Descargas Mensuales</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl flex flex-col justify-between md:hover:scale-[1.02] transition-all duration-300">
            <div>
              <Code size={36} className="text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                API Pública REST
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-8">
                Integra en tiempo real estadísticas de valor de arriendos y m²
                en tu propio software con endpoints seguros.
              </p>
            </div>
            <Link
              href="/api"
              className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 hover:text-indigo-600 transition-colors"
            >
              <span>Documentación de API</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-blue-950 opacity-90 -z-10"></div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
            Suscripción Premium
          </span>
          <h3 className="text-2xl sm:text-4xl font-black">
            Informes analíticos mensuales directos
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Recibe el consolidado general de valorizaciones y variaciones del m²
            cada mes en tu correo.
          </p>

          <div className="max-w-md mx-auto pt-4">
            {!subscribed ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (emailInput.trim()) {
                    setSubscribed(true);
                    showToast("Te has suscrito con éxito al boletín.");
                  }
                }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Ingresa tu correo institucional"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white focus:text-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs flex-1 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                >
                  Suscribirse
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-xs font-bold">
                ✓ Tu suscripción ha sido confirmada para los reportes mensuales
                de Bogotá.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
