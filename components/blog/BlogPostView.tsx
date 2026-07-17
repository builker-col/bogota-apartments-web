import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/types";
import { portableTextComponents } from "./PortableTextComponents";

type BlogPostViewProps = {
  post: Post;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostView({ post }: BlogPostViewProps) {
  const author = post.author || "Bogotá Real Estate Open Data";
  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).auto("format").url()
    : null;

  return (
    <article className="animate-fade-in pb-12 sm:pb-20">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User size={14} />
                {author}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
          </div>
        </div>

        {heroImageUrl && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src={heroImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="prose prose-slate max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </div>
    </article>
  );
}
