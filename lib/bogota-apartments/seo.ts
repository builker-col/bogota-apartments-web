import type { Metadata } from "next";
import { SITE_URL } from "./site";

export const SITE_NAME = "Bogotá Apartments";

export const SEO_KEYWORDS = [
  "datos del mercado inmobiliario en bogotá",
  "mercado inmobiliario bogotá",
  "datos abiertos",
  "datos abiertos bogotá",
  "bogotá apartments",
  "precio m2 bogotá",
  "finca raíz bogotá",
  "datos catastrales bogotá",
  "API inmobiliaria bogotá",
  "open data bogotá",
  "estadísticas inmobiliarias bogotá",
] as const;

export const DEFAULT_DESCRIPTION =
  "Bogotá Apartments: datos abiertos del mercado inmobiliario en Bogotá. Precios por m², mapas catastrales, reportes CSV/JSON y API REST. Proyecto open source.";

export const OG_IMAGE = "/img/logo.png";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: CreatePageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const pageKeywords = keywords ?? [...SEO_KEYWORDS];
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: pageKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [
        {
          url: OG_IMAGE,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const SITE_ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/mapa", priority: 0.8 },
  { path: "/descargas", priority: 0.8 },
  { path: "/api", priority: 0.8 },
] as const;
