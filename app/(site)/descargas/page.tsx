import type { Metadata } from "next";
import { DescargasView } from "@/components/views/DescargasView";

export const metadata: Metadata = {
  title: "Reportes Mensuales",
  description:
    "Descarga datasets mensuales consolidados de toda la ciudad de Bogotá en formato CSV y JSON.",
};

export default function DescargasPage() {
  return <DescargasView />;
}
