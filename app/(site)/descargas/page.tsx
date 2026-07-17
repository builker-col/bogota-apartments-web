import { DescargasPageJsonLd } from "@/components/seo/JsonLd";
import { DescargasView } from "@/components/views/DescargasView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Datos Abiertos del Mercado Inmobiliario en Bogotá",
  description:
    "Catálogo previsto de datasets abiertos, versionados y documentados sobre el mercado inmobiliario de Bogotá.",
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
