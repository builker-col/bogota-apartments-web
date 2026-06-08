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
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 flex items-center justify-center gap-1">
          <Database size={14} /> Repositorio Catastral
        </span>
        <h2 className="text-3xl font-black text-slate-900">
          Descarga de Reportes Mensuales Generales
        </h2>
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
              className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Calendar size={24} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-slate-800">
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

              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs text-slate-400 font-bold pr-2">
                  Tamaño: {report.tamano}
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(report.mes, "csv")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-emerald-600/10"
                >
                  <Download size={14} />
                  <span>Descargar CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownload(report.mes, "json")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all"
                >
                  <FileSpreadsheet size={14} />
                  <span>Descargar JSON</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100/50 p-6 rounded-3xl flex items-start gap-4">
        <Info className="text-blue-600 mt-1 shrink-0" size={20} />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-blue-950">
            Licencia de Uso Público de Datos Abiertos
          </h4>
          <p className="text-xs text-blue-800 leading-relaxed">
            Las bases de datos distribuidas por Bogotá Apartments son libres
            para su uso comercial, educativo o gubernamental. Por favor, atribuye
            los créditos correspondientes a Bogotá Apartments al integrar esta
            información en estudios o publicaciones oficiales.
          </p>
        </div>
      </div>
    </div>
  );
}
