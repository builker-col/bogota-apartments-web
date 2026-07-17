import { ApiView } from "@/components/views/ApiView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "API de Datos Inmobiliarios de Bogotá",
  description:
    "Vista previa del contrato de API que conectará el proyecto de datos abiertos de Bogotá con la infraestructura de Inmodata.",
  path: "/api",
});

export default function ApiPage() {
  return <ApiView />;
}
