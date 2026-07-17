import type { Metadata } from "next";
import { SITE_URL } from "./site";

export const SITE_NAME = "Bogotá Real Estate Open Data";

export const SEO_KEYWORDS = [
  "datos del mercado inmobiliario en bogotá",
  "mercado inmobiliario bogotá",
  "datos abiertos",
  "datos abiertos bogotá",
  "bogotá real estate open data",
  "precio m2 bogotá",
  "finca raíz bogotá",
  "datos catastrales bogotá",
  "API inmobiliaria bogotá",
  "open data bogotá",
  "estadísticas inmobiliarias bogotá",
] as const;

export const DEFAULT_DESCRIPTION =
  "Proyecto de Builker para descargar, consultar y explorar datos abiertos del mercado inmobiliario de Bogotá con tecnología de Inmodata.";

export const OG_IMAGE = "/img/OG-image.png";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  ogImage,
  ogImageAlt,
}: CreatePageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const pageKeywords = keywords ?? [...SEO_KEYWORDS];
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const imageUrl = ogImage ?? OG_IMAGE;
  const imageAlt = ogImageAlt ?? SITE_NAME;

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
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
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
  { path: "/consultas", priority: 0.8 },
  { path: "/descargas", priority: 0.8 },
  { path: "/api", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
] as const;
