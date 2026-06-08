import { MapaView } from "@/components/views/MapaView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Mapa del Mercado Inmobiliario en Bogotá",
  description:
    "Mapa georreferenciado del mercado inmobiliario en Bogotá. Capas catastrales, precios por m² y cap rate por zona. Datos abiertos de Bogotá Apartments.",
  path: "/mapa",
});

export default function MapaPage() {
  return <MapaView />;
}
