import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/bogota-apartments/seo";
import { SITE_URL } from "@/lib/bogota-apartments/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
