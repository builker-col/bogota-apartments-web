import { DescargasPageJsonLd } from "@/components/seo/JsonLd";
import { DescargasView } from "@/components/views/DescargasView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Datos Abiertos del Mercado Inmobiliario en Bogotá",
  description:
    "Descarga datos abiertos del mercado inmobiliario en Bogotá: reportes mensuales consolidados en CSV y JSON. Datasets gratuitos para análisis y cruce de información.",
  path: "/descargas",
});

export default function DescargasPage() {
  return (
    <>
      <DescargasPageJsonLd />
      <DescargasView />
    </>
  );
}
