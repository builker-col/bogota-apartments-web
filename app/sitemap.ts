import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/bogota-apartments/seo";
import { SITE_URL } from "@/lib/bogota-apartments/site";
import { getPostSlugs } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes = SITE_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const slugs = await getPostSlugs();
  const blogRoutes = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
