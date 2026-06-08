"use client";

import { useState } from "react";
import {
  Building2,
  Code,
  Copy,
  Eye,
  Info,
  Layers,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { MAPBOX_INIT_SNIPPET } from "@/lib/bogota-apartments/data";
import { copyToClipboard } from "@/lib/bogota-apartments/copy-to-clipboard";
import { useToast } from "@/components/site/ToastProvider";

type MapLayer = "heatmap" | "price" | "cap";

export function MapaView() {
  const { showToast } = useToast();
  const [mapLayer, setMapLayer] = useState<MapLayer>("heatmap");
  const [searchCoords, setSearchCoords] = useState(
    "Calle 72 # 7-24, Chapinero",
  );
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);

  const handleCopyMapboxCode = async () => {
    const success = await copyToClipboard(MAPBOX_INIT_SNIPPET);
    if (success) {
      showToast("Código copiado al portapapeles.");
    }
  };

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
            Visualizador Urbano
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Mapa del mercado inmobiliario en Bogotá
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Simulación activa de capas catastrales. Diseñado para integrarse de
            forma nativa con Mapbox GL JS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowIntegrationGuide(!showIntegrationGuide)}
            className="bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Code size={14} />
            <span>
              {showIntegrationGuide
                ? "Ocultar Guía Mapbox"
                : "Ver Código Mapbox"}
            </span>
          </button>
        </div>
      </div>

      {showIntegrationGuide && (
        <div className="bg-slate-900 text-slate-300 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4 animate-fade-in">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-white font-bold text-sm flex items-center gap-2">
              <Sparkles size={16} className="text-amber-400" />
              Cómo conectar tu API de Mapbox en producción
            </span>
            <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded font-mono font-bold">
              MAPBOX GL JS v3.x
            </span>
          </div>
          <p className="text-xs leading-relaxed">
            Para utilizar tu mapa activo, simplemente carga el SDK de Mapbox GL
            JS en tu archivo principal y reemplaza el contenedor mock con la
            inicialización del mapa. Copia el siguiente código de referencia:
          </p>
          <div className="relative">
            <pre className="bg-slate-950 p-4 rounded-xl text-[10px] font-mono overflow-x-auto text-emerald-400">
              {MAPBOX_INIT_SNIPPET}
            </pre>
            <button
              type="button"
              onClick={handleCopyMapboxCode}
              className="absolute top-3.5 right-3.5 bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-lg text-xs"
            >
              <Copy size={12} />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6 lg:col-span-1">
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              Capas Catastrales
            </span>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setMapLayer("heatmap")}
                className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                  mapLayer === "heatmap"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>Mapa de Calor Densidad</span>
                <Layers size={14} />
              </button>

              <button
                type="button"
                onClick={() => setMapLayer("price")}
                className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                  mapLayer === "price"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>Variación de Precio m²</span>
                <Building2 size={14} />
              </button>

              <button
                type="button"
                onClick={() => setMapLayer("cap")}
                className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                  mapLayer === "cap"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>Cap Rate por Manzana</span>
                <TrendingUp size={14} />
              </button>
            </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          <div className="space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              Geocodificación
            </span>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-slate-400"
                size={14}
              />
              <input
                type="text"
                value={searchCoords}
                onChange={(e) => setSearchCoords(e.target.value)}
                placeholder="Ej: Carrera 7 # 72"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() =>
                showToast(`Geocodificador enfocado en: ${searchCoords}`)
              }
              className="w-full bg-slate-900 text-white font-bold py-2 px-4 rounded-xl text-xs hover:bg-blue-600 transition-all"
            >
              Ubicar en Mapa
            </button>
          </div>

          <div className="h-px bg-slate-100"></div>

          <div className="space-y-2 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              Leyenda de Rangos
            </span>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Bajo</span>
              <span className="text-slate-500">Alto</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500"></div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/4 left-1/3 text-center animate-bounce duration-1000">
              <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
                <MapPin size={10} />
                <span>Cedritos (Estrato 4)</span>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 text-center animate-bounce">
              <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
                <MapPin size={10} />
                <span>Chicó (Estrato 6)</span>
              </div>
            </div>

            <svg viewBox="0 0 500 400" className="w-full h-full opacity-60">
              {mapLayer === "heatmap" && (
                <>
                  <circle cx="150" cy="120" r="110" fill="url(#hot-grad-1)" />
                  <circle cx="320" cy="220" r="140" fill="url(#hot-grad-2)" />
                </>
              )}

              {mapLayer === "price" && (
                <>
                  <path
                    d="M 100,80 Q 180,180 320,100"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    fill="none"
                    opacity="0.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 200,280 Q 250,150 400,220"
                    stroke="#ef4444"
                    strokeWidth="16"
                    fill="none"
                    opacity="0.6"
                    strokeLinecap="round"
                  />
                </>
              )}

              {mapLayer === "cap" && (
                <>
                  <polygon
                    points="120,90 230,110 180,190"
                    fill="#10b981"
                    opacity="0.4"
                  />
                  <polygon
                    points="290,190 410,210 350,320"
                    fill="#10b981"
                    opacity="0.5"
                  />
                </>
              )}

              <defs>
                <radialGradient id="hot-grad-1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                </radialGradient>
                <radialGradient id="hot-grad-2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-900/85 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-[9px] sm:text-[10px] space-y-1.5 sm:space-y-2 z-10 text-slate-400 max-w-[calc(100%-1.5rem)]">
            <div className="flex items-center gap-2">
              <Eye size={12} className="text-blue-400 shrink-0" />
              <span className="truncate">Capas Mapbox activas</span>
            </div>
            <div className="h-px bg-slate-800 hidden sm:block"></div>
            <div className="hidden sm:block">Zoom: 12.4 | Lat: 4.6097, Lng: -74.0721</div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-xs flex flex-col sm:flex-row justify-between items-center gap-3 z-10">
            <div className="flex items-center gap-2">
              <Info size={14} className="text-blue-400" />
              <span>
                Sección configurada con token y estilo Dark-v11 para tu
                producción.
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowIntegrationGuide(true);
                showToast(
                  "Desplázate hacia arriba para ver la guía de conexión.",
                );
              }}
              className="text-blue-400 hover:underline font-bold"
            >
              Ver guía de integración
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
