"use client";

import { useState } from "react";
import { Check, Code, Copy } from "lucide-react";
import {
  API_BASE_URL,
  API_MONTHLY_PATH,
  API_MONTHLY_URL,
} from "@/lib/bogota-apartments/site";
import {
  API_SNIPPETS,
  type ApiLanguage,
} from "@/lib/bogota-apartments/api-snippets";
import { copyToClipboard } from "@/lib/bogota-apartments/copy-to-clipboard";
import { useToast } from "@/components/site/ToastProvider";

const API_LANGUAGES: ApiLanguage[] = ["curl", "javascript", "python"];

export function ApiView() {
  const { showToast } = useToast();
  const [apiLanguage, setApiLanguage] = useState<ApiLanguage>("curl");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = async () => {
    const success = await copyToClipboard(API_SNIPPETS[apiLanguage]);
    if (success) {
      setCopiedCode(true);
      showToast("Código copiado al portapapeles.");
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
          <Code className="text-blue-600" size={18} />
          Documentación del API de Bogotá Apartments
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Base URL:{" "}
          <code className="text-slate-700 font-mono">{API_BASE_URL}</code>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">
              Servicio REST
            </span>
            <h4 className="text-base font-black text-slate-900">
              Estructura del Request
            </h4>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded text-[10px] uppercase">
                GET
              </span>
              <code className="block bg-slate-900 text-blue-400 p-3 rounded-xl font-mono mt-1 break-all text-[11px]">
                {API_MONTHLY_URL}
              </code>
              <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                Path: {API_MONTHLY_PATH}
              </span>
            </div>

            <div className="h-px bg-slate-100"></div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Query Params
              </span>
              <div className="flex justify-between">
                <code className="font-bold text-slate-800">month</code>
                <span className="text-slate-500 italic">Ej: &quot;2026-05&quot;</span>
              </div>
              <div className="flex justify-between">
                <code className="font-bold text-slate-800">format</code>
                <span className="text-slate-500 italic">
                  &quot;json&quot; o &quot;csv&quot;
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-950 text-slate-300 rounded-3xl overflow-hidden flex flex-col h-[380px] shadow-xl border border-slate-800">
          <div className="bg-slate-950 px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex gap-2">
              {API_LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setApiLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors ${
                    apiLanguage === lang
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {lang === "curl" ? "cURL" : lang}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs font-bold transition-colors"
            >
              {copiedCode ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={14} />
              )}
              <span>{copiedCode ? "¡Copiado!" : "Copiar"}</span>
            </button>
          </div>

          <div className="flex-1 p-6 font-mono text-xs text-slate-300 overflow-auto bg-slate-950/40">
            <pre className="whitespace-pre-wrap">
              {API_SNIPPETS[apiLanguage]}
            </pre>
          </div>

          <div className="p-4 bg-slate-950 border-t border-slate-900 font-mono text-[10px] text-emerald-400">
            <span className="text-[9px] text-slate-500 font-bold block mb-1 uppercase tracking-wider">
              Response Body (200 OK)
            </span>
            <span>
              {"{"} &quot;status&quot;: &quot;success&quot;, &quot;month&quot;:
              &quot;2026-05&quot;, &quot;precioM2&quot;: 6616667,
              &quot;capRate&quot;: 6.61 {"}"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
