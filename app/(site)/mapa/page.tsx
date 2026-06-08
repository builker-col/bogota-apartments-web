import type { Metadata } from "next";
import { MapaView } from "@/components/views/MapaView";

export const metadata: Metadata = {
  title: "Mapa Catastral",
  description:
    "Visualizador georreferenciado de capas catastrales en Bogotá. Simulación interactiva preparada para Mapbox GL JS.",
};

export default function MapaPage() {
  return <MapaView />;
}
