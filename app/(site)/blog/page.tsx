import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { allPosts } from "@/lib/blog";
import { alternatesFor } from "@/lib/i18n/routes";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, fromMeta, SITE } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital",
  description: "Blog de marketing digital: guías prácticas de SEO, posicionamiento en IA, Google Ads, redes sociales, diseño web y ecommerce para empresas, pymes y autónomos.",
  alternates: alternatesFor("/blog/") ?? { canonical: "https://www.mktweb360.com/blog/" },
  openGraph: {
    title: "Blog de Marketing Digital | Mkt Web 360",
    description: "Artículos y guías de marketing digital para empresas.",
    url: "https://www.mktweb360.com/blog/",
    images: [{ url: "/og-blog.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));
  const cats = Array.from(new Set(posts.map((p) => p.category)));
  return (
    <>
      <section className="mw-skin-hero text-white">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 md:pb-20">
          <JsonLd data={webPageSchema("CollectionPage", { lang: "es", path: "/blog/", ...fromMeta(metadata) }, {
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: posts.length,
              itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/${p.slug}/`, name: p.title })),
            },
          })} />
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            {posts.length} artículos
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
            Blog de <span className="text-accent-400">marketing digital</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-100">
            Guías prácticas de SEO, posicionamiento en IA, Google Ads, redes sociales, diseño web y ecommerce. Sin humo: lo que funciona, explicado para aplicarlo.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/80">{c}</span>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-22px_rgba(15,28,46,0.45)] hover:ring-transparent">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
            <Link href={`/${post.slug}/`} className="block relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
              <Image
                src={`/og-${post.slug}.jpg`}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-gradient-to-r from-[#7c3aed]/10 to-accent-500/10 px-2.5 py-0.5 text-xs font-bold text-primary-700">{post.category}</span>
                <time className="text-xs text-gray-400" dateTime={post.date}>
                  {new Date(post.date + "T00:00:00").toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <h2 className="text-lg font-bold text-primary-700 mb-2 line-clamp-2 leading-snug">
                <Link href={`/${post.slug}/`} className="transition-colors group-hover:text-accent-600">{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
              <Link href={`/${post.slug}/`} className="mt-4 inline-flex items-center gap-1 text-accent-600 text-sm font-semibold">
                Leer artículo <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </>
  );
}
