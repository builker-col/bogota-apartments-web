export type IntegrationState = "demo" | "ready" | "planned";

export type PlatformIntegration = {
  id: "bucket" | "data" | "queries" | "maps" | "ai";
  name: string;
  description: string;
  provider: string;
  state: IntegrationState;
};

export type Dataset = {
  id: string;
  name: string;
  description: string;
  formats: string[];
  cadence: string;
  coverage: string;
  fields: string[];
};

export const INTEGRATIONS: PlatformIntegration[] = [
  {
    id: "bucket",
    name: "Archivos abiertos",
    description: "Versiones descargables y trazables de cada conjunto de datos.",
    provider: "Bucket de Builker",
    state: "planned",
  },
  {
    id: "data",
    name: "Datos normalizados",
    description: "Lectura de observaciones y series listas para explorar.",
    provider: "API de Inmodata",
    state: "demo",
  },
  {
    id: "queries",
    name: "Consultas",
    description: "Filtros reproducibles por zona, periodo y tipo de inmueble.",
    provider: "API de Inmodata",
    state: "demo",
  },
  {
    id: "maps",
    name: "Mapas",
    description: "Capas geográficas para leer patrones territoriales.",
    provider: "API de Inmodata",
    state: "demo",
  },
  {
    id: "ai",
    name: "Exploración con IA",
    description: "Preguntas en lenguaje natural con fuentes y contexto.",
    provider: "Inmodata Intelligence",
    state: "planned",
  },
];

export const DATASETS: Dataset[] = [
  {
    id: "oferta-residencial",
    name: "Oferta residencial",
    description: "Observaciones anonimizadas de oferta para estudiar disponibilidad y distribución territorial.",
    formats: ["CSV", "Parquet"],
    cadence: "Por definir",
    coverage: "Bogotá D.C.",
    fields: ["zona", "tipo", "área", "precio", "periodo"],
  },
  {
    id: "indicadores-zona",
    name: "Indicadores por zona",
    description: "Agregados territoriales para comparar sectores sin exponer registros privados.",
    formats: ["CSV", "JSON"],
    cadence: "Por definir",
    coverage: "Bogotá D.C.",
    fields: ["zona", "indicador", "valor", "unidad", "periodo"],
  },
  {
    id: "diccionario-metodologia",
    name: "Diccionario y metodología",
    description: "Definiciones, transformaciones y notas necesarias para interpretar los datos.",
    formats: ["PDF", "JSON"],
    cadence: "Con cada versión",
    coverage: "Proyecto",
    fields: ["campo", "definición", "fuente", "tratamiento"],
  },
];

export const DEMO_ZONES = [
  { name: "Chapinero", x: 58, y: 28, size: 23, tone: "#ff4fd8" },
  { name: "Suba", x: 33, y: 24, size: 27, tone: "#6b5cff" },
  { name: "Teusaquillo", x: 47, y: 45, size: 18, tone: "#00d6c9" },
  { name: "Kennedy", x: 35, y: 68, size: 24, tone: "#2b7fff" },
  { name: "Usaquén", x: 66, y: 15, size: 20, tone: "#ae5cff" },
];

export const DEMO_ROWS = [
  { zone: "Chapinero", property: "Apartamento", area: "72–95 m²", period: "Muestra demo" },
  { zone: "Suba", property: "Apartamento", area: "55–80 m²", period: "Muestra demo" },
  { zone: "Teusaquillo", property: "Casa", area: "110–160 m²", period: "Muestra demo" },
  { zone: "Kennedy", property: "Apartamento", area: "45–70 m²", period: "Muestra demo" },
];

export const API_PREVIEW = {
  baseUrl: "https://api.inmodata.io/open-data/bogota/v1",
  endpoints: [
    { method: "GET", path: "/datasets", purpose: "Catálogo y versiones disponibles" },
    { method: "GET", path: "/observations", purpose: "Consulta paginada y filtrada" },
    { method: "POST", path: "/query", purpose: "Agregaciones y comparaciones" },
    { method: "POST", path: "/assistant", purpose: "Preguntas con IA y referencias" },
  ],
};
