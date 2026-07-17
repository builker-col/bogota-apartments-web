import { MapaView } from "@/components/views/MapaView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Mapa del Mercado Inmobiliario en Bogotá",
  description:
    "Prototipo del mapa de datos abiertos inmobiliarios de Bogotá, preparado para conectarse a la API geográfica de Inmodata.",
  path: "/mapa",
});

export default function MapaPage() {
  return <MapaView />;
}
