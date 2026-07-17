import { ConsultasView } from "@/components/views/ConsultasView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";

export const metadata = createPageMetadata({
  title: "Consultas del mercado inmobiliario de Bogotá",
  description: "Prototipo de consultas estructuradas y exploración con IA para los datos abiertos inmobiliarios de Bogotá.",
  path: "/consultas",
});

export default function ConsultasPage() {
  return <ConsultasView />;
}
