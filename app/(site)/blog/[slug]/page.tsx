import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/BlogPostView";
import { BlogPostJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/bogota-apartments/seo";
import { urlFor } from "@/lib/sanity/image";
import {
  getPostBySlug,
  getPostSlugs,
} from "@/lib/sanity/queries";

export const revalidate = 60;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Artículo no encontrado",
      description: "El artículo solicitado no está disponible.",
      path: `/blog/${slug}`,
    });
  }

  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).auto("format").url()
    : undefined;

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage,
    ogImageAlt: post.mainImage?.alt || post.title,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BlogPostView post={post} />
    </>
  );
}
