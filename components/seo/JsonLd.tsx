import { SITE_URL } from "@/lib/bogota-apartments/site";
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
} from "@/lib/bogota-apartments/seo";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/types";

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
    "https://inmodata.io",
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
        name: "Bogotá Real Estate Open Data",
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

export function BlogPostJsonLd({ post }: { post: Post }) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).auto("format").url()
    : `${SITE_URL}${OG_IMAGE}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: imageUrl,
        datePublished: post.publishedAt,
        author: {
          "@type": "Organization",
          name: post.author || SITE_NAME,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
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
          "Catálogo en preparación de conjuntos de datos abiertos del mercado inmobiliario de Bogotá D.C.",
        url: `${SITE_URL}/descargas`,
        inLanguage: "es-CO",
        temporalCoverage: "En preparación",
        creator: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  );
}
