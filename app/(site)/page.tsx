import { HomePageJsonLd } from "@/components/seo/JsonLd";
import { LandingView } from "@/components/views/LandingView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Bogotá Real Estate Open Data | Un proyecto de Builker",
  description:
    "Descarga, consulta y explora datos abiertos del mercado inmobiliario de Bogotá. Un proyecto de Builker con tecnología de Inmodata.",
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
