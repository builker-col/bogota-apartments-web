import { BlogListView } from "@/components/blog/BlogListView";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";
import { getPosts } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata = createPageMetadata({
  title: "Blog del Mercado Inmobiliario en Bogotá",
  description:
    "Artículos y análisis sobre el mercado inmobiliario de Bogotá D.C.: tendencias, datos abiertos, mapas catastrales y contexto para inversionistas y ciudadanos.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogListView posts={posts} />;
}
