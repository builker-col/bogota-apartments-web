import { ApiView } from "@/components/views/ApiView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "API de Datos Inmobiliarios de Bogotá",
  description:
    "API REST de datos abiertos del mercado inmobiliario en Bogotá. Integra precios por m², cap rate y reportes mensuales en tu plataforma con Bogotá Apartments.",
  path: "/api",
});

export default function ApiPage() {
  return <ApiView />;
}
