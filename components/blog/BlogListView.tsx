import Image from "next/image";
import Link from "next/link";
import { Calendar, PenLine } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";
import type { PostListItem } from "@/lib/sanity/types";

type BlogListViewProps = {
  posts: PostListItem[];
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListView({ posts }: BlogListViewProps) {
  return (
    <div className="animate-fade-in space-y-10 sm:space-y-12 pb-12 sm:pb-20">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              <PenLine size={14} />
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Blog del Mercado Inmobiliario en Bogotá
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Análisis, contexto y novedades sobre el mercado inmobiliario de
              Bogotá D.C., basados en datos abiertos y open source.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {posts.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-center space-y-3">
            <p className="text-slate-700 font-semibold">
              Aún no hay artículos publicados.
            </p>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Pronto compartiremos análisis y novedades sobre el mercado
              inmobiliario de Bogotá.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage).width(800).height(500).auto("format").url()
                : null;

              return (
                <article
                  key={post._id}
                  className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-200 transition-all"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />
                      )}
                    </div>
                    <div className="p-5 sm:p-6 space-y-3">
                      <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <Calendar size={13} />
                        {formatDate(post.publishedAt)}
                      </p>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
