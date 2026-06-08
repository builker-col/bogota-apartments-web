"use client";

import {
  Calendar,
  Clock,
  Database,
  Download,
  FileSpreadsheet,
  Info,
  Layers3,
} from "lucide-react";
import { REPORTES_MENSUALES } from "@/lib/bogota-apartments/data";
import { downloadReport } from "@/lib/bogota-apartments/download-report";
import { SITE_NAME } from "@/lib/bogota-apartments/seo";
import { SITE_URL } from "@/lib/bogota-apartments/site";
import { useToast } from "@/components/site/ToastProvider";

export function DescargasView() {
  const { showToast } = useToast();

  const handleDownload = (mesNombre: string, ext: "csv" | "json") => {
    downloadReport(mesNombre, ext);
    showToast(
      `Reporte ${ext.toUpperCase()} para ${mesNombre} descargado con éxito.`,
    );
  };

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6 sm:space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 flex items-center justify-center gap-1">
          <Database size={14} /> Repositorio Catastral
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight px-2">
          Datos abiertos del mercado inmobiliario en Bogotá
        </h1>
        <p className="text-slate-500 text-sm">
          Descarga datasets mensuales consolidados de toda la ciudad de Bogotá
          de manera abierta para realizar cruces de información estructurada.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <div className="divide-y divide-slate-100">
          {REPORTES_MENSUALES.map((report) => (
            <div
              key={report.id}
              className="p-4 sm:p-6 hover:bg-slate-50/50 transition-colors flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Calendar size={24} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-black text-slate-800">
                      {report.mes}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        report.tipo === "Anual"
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {report.tipo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{report.descripcion}</p>

                  <div className="flex gap-4 pt-1 text-[10px] text-slate-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Layers3 size={12} /> {report.registros} Registros
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> Actualizado hoy
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">
                <div className="text-xs text-slate-400 font-bold sm:pr-2">
                  Tamaño: {report.tamano}
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(report.mes, "csv")}
                  className="w-full sm:w-auto justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-emerald-600/10"
                >
                  <Download size={14} />
                  <span>Descargar CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownload(report.mes, "json")}
                  className="w-full sm:w-auto justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all"
                >
                  <FileSpreadsheet size={14} />
                  <span>Descargar JSON</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100/50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4">
        <Info className="text-blue-600 mt-1 shrink-0" size={20} />
        <div className="space-y-4 min-w-0">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-blue-950">
              Licencia de Uso Público de Datos Abiertos
            </h4>
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
              Los datasets de {SITE_NAME} son de libre uso para fines
              comerciales, académicos, periodísticos y gubernamentales. Puedes
              descargarlos, combinarlos con otras fuentes y publicar análisis
              derivados sin pedir permiso previo. La única condición es{" "}
              <strong className="font-semibold text-blue-950">
                atribuir la fuente
              </strong>{" "}
              para que otros puedan verificar el origen de los datos.
            </p>
            <p className="text-xs text-blue-700 leading-relaxed">
              Incluye el nombre del proyecto, la URL del sitio y, si aplica, el
              mes o reporte que utilizaste (por ejemplo: &quot;Mayo 2026&quot;).
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
              Ejemplo de atribución
            </p>

            <div className="space-y-3">
              <div className="bg-white/70 border border-blue-100 rounded-xl p-3 sm:p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Texto (informe, artículo, pie de gráfico)
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-mono break-words">
                  Fuente: {SITE_NAME} ({SITE_URL}), reporte consolidado Mayo
                  2026. Datos abiertos del mercado inmobiliario en Bogotá D.C.
                </p>
              </div>

              <div className="bg-white/70 border border-blue-100 rounded-xl p-3 sm:p-4 overflow-x-auto">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  HTML (página web o dashboard)
                </span>
                <pre className="text-[11px] text-slate-700 leading-relaxed whitespace-pre-wrap break-all">{`<p>
  Datos: <a href="${SITE_URL}">
    ${SITE_NAME}
  </a> — reporte Mayo 2026.
</p>`}</pre>
              </div>

              <div className="bg-white/70 border border-blue-100 rounded-xl p-3 sm:p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Referencia bibliográfica
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Builker S.A.S. ({new Date().getFullYear()}).{" "}
                  <em>
                    {SITE_NAME}: datos abiertos del mercado inmobiliario en
                    Bogotá
                  </em>
                  . Recuperado de {SITE_URL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
