import { SITE_URL } from "@/lib/bogota-apartments/site";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
} from "@/lib/bogota-apartments/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Builker S.A.S",
  url: "https://builker.com",
  sameAs: [
    "https://builker.com",
    "https://inmodata.builker.com",
    "https://tayra.com.co",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "es-CO",
  publisher: {
    "@type": "Organization",
    name: "Builker S.A.S",
    url: "https://builker.com",
  },
};

export function SiteJsonLd() {
  return <JsonLd data={[websiteSchema, organizationSchema]} />;
}

export function HomePageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Datos del Mercado Inmobiliario en Bogotá",
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-CO",
        isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
        about: {
          "@type": "Thing",
          name: "Mercado inmobiliario de Bogotá D.C.",
        },
      }}
    />
  );
}

export function DescargasPageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Datos abiertos del mercado inmobiliario en Bogotá",
        description:
          "Reportes mensuales consolidados del mercado inmobiliario de Bogotá D.C. en formato CSV y JSON.",
        url: `${SITE_URL}/descargas`,
        inLanguage: "es-CO",
        license: "https://creativecommons.org/publicdomain/zero/1.0/",
        distribution: [
          {
            "@type": "DataDownload",
            encodingFormat: "text/csv",
            contentUrl: `${SITE_URL}/descargas`,
          },
          {
            "@type": "DataDownload",
            encodingFormat: "application/json",
            contentUrl: `${SITE_URL}/descargas`,
          },
        ],
        creator: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  );
}
