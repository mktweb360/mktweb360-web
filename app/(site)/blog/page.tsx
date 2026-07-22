import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { allPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital",
  description: "Artículos, guías y consejos de marketing digital, SEO, SEM, redes sociales y diseño web para empresas españolas.",
  alternates: { canonical: "https://www.mktweb360.com/blog/" },
  openGraph: {
    title: "Blog Marketing Digital | Mkt Web 360",
    description: "Artículos y guías de marketing digital para empresas.",
    url: "https://www.mktweb360.com/blog/",
    images: [{ url: "/og-blog.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Blog de Marketing Digital</h1>
      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
        Artículos, guías y recursos de marketing digital para ayudarte a hacer crecer tu negocio online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                <time className="text-xs text-gray-400" dateTime={post.date}>
                  {new Date(post.date + "T00:00:00").toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <h2 className="text-lg font-bold text-primary-700 mb-2 line-clamp-2">
                <Link href={`/${post.slug}/`} className="hover:text-accent-500 transition-colors">{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
              <Link href={`/${post.slug}/`} className="mt-4 inline-block text-accent-500 text-sm font-medium hover:text-accent-600">
                Leer artículo →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
