import { defineQuery } from "next-sanity";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "./client";
import type { Post, PostListItem } from "./types";

export const POSTS_LIST_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage
  }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    author
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`);

export async function getPosts(): Promise<PostListItem[]> {
  if (!isSanityConfigured) return [];

  try {
    return await client.fetch<PostListItem[]>(POSTS_LIST_QUERY);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;

  try {
    return await client.fetch<Post | null>(POST_BY_SLUG_QUERY, { slug });
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];

  try {
    const rows = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    return rows.map(({ slug }) => slug).filter(Boolean);
  } catch {
    return [];
  }
}
