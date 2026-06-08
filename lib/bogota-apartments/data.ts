export type ReporteMensual = {
  id: string;
  mes: string;
  descripcion: string;
  registros: number;
  tamano: string;
  tipo: "Completo" | "Compacto" | "Anual";
};

export type HistoricoPrecio = {
  year: string;
  precio: number;
};

export type RentabilidadEstrato = {
  estrato: string;
  capRate: number;
  color: string;
};

export const REPORTES_MENSUALES: ReporteMensual[] = [
  {
    id: "2026-05",
    mes: "Mayo 2026",
    descripcion:
      "Consolidado general de mercado, cierres notariales y variación mensual.",
    registros: 1482,
    tamano: "1.2 MB",
    tipo: "Completo",
  },
  {
    id: "2026-04",
    mes: "Abril 2026",
    descripcion:
      "Reporte catastral integrado con absorción de proyectos nuevos.",
    registros: 1395,
    tamano: "1.1 MB",
    tipo: "Completo",
  },
  {
    id: "2026-03",
    mes: "Marzo 2026",
    descripcion:
      "Comportamiento trimestral, tasas de interés de créditos y arriendos.",
    registros: 1512,
    tamano: "1.3 MB",
    tipo: "Completo",
  },
  {
    id: "2026-02",
    mes: "Febrero 2026",
    descripcion:
      "Dinámica de ofertas activas en portales de corretaje digital.",
    registros: 1104,
    tamano: "940 KB",
    tipo: "Compacto",
  },
  {
    id: "2026-01",
    mes: "Enero 2026",
    descripcion:
      "Lanzamiento de proyecciones anuales e histórico consolidado.",
    registros: 1250,
    tamano: "1.0 MB",
    tipo: "Completo",
  },
  {
    id: "2025-full",
    mes: "Histórico Completo 2025",
    descripcion:
      "Base de datos anual consolidada y depurada de Bogotá.",
    registros: 15480,
    tamano: "14.2 MB",
    tipo: "Anual",
  },
  {
    id: "2024-full",
    mes: "Histórico Completo 2024",
    descripcion:
      "Serie histórica de precios y velocidad de rotación inmobiliaria.",
    registros: 14120,
    tamano: "12.8 MB",
    tipo: "Anual",
  },
];

export const HISTORICO_PRECIOS: HistoricoPrecio[] = [
  { year: "2021", precio: 5100000 },
  { year: "2022", precio: 5450000 },
  { year: "2023", precio: 5900000 },
  { year: "2024", precio: 6250000 },
  { year: "2025", precio: 6500000 },
  { year: "2026", precio: 6616667 },
];

export const RENTABILIDAD_ESTRATO: RentabilidadEstrato[] = [
  { estrato: "Estrato 3", capRate: 7.4, color: "#10b981" },
  { estrato: "Estrato 4", capRate: 6.8, color: "#3b82f6" },
  { estrato: "Estrato 5", capRate: 6.1, color: "#6366f1" },
  { estrato: "Estrato 6", capRate: 5.2, color: "#f59e0b" },
];

export const MAPBOX_INIT_SNIPPET = `mapboxgl.accessToken = 'TU_TOKEN_MAPBOX_AQUÍ';
const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-74.0721, 4.6097],
    zoom: 12
});`;
