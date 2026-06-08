import { HomePageJsonLd } from "@/components/seo/JsonLd";
import { LandingView } from "@/components/views/LandingView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Datos del Mercado Inmobiliario en Bogotá | Bogotá Apartments",
  description:
    "Consulta datos abiertos del mercado inmobiliario en Bogotá: precios por m², cap rate, mapas catastrales y datasets CSV/JSON. Proyecto open source de Builker.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <LandingView />
    </>
  );
}
