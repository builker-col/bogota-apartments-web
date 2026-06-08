import type { Metadata } from "next";
import { LandingView } from "@/components/views/LandingView";

export const metadata: Metadata = {
  title: {
    absolute: "Bogotá Apartments — Analítica Catastral",
  },
  description:
    "Plataforma líder de analítica catastral en Bogotá. Estadísticas del valor del suelo, reportes mensuales y API pública.",
};

export default function HomePage() {
  return <LandingView />;
}
