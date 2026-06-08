import type { Metadata } from "next";
import { ApiView } from "@/components/views/ApiView";

export const metadata: Metadata = {
  title: "API Desarrolladores",
  description:
    "Documentación del API REST de Bogotá Apartments. Integra estadísticas inmobiliarias en tu plataforma.",
};

export default function ApiPage() {
  return <ApiView />;
}
