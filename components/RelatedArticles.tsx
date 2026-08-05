"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLatestPosts, getRelatedPosts, getPostsByCategory } from "@/lib/blog";
import { esSlugFor, translatedSlugFor } from "@/lib/i18n/routes";
import { getPostI18n, getCategoryI18n } from "@/lib/blog-i18n";

type Props = {
  currentSlug?: string;
  category?: string;
  title?: string;
};

/**
 * Muestra artículos relacionados localizados.
 *
 * En páginas ES: comportamiento original — links a /{esSlug}/, textos en español.
 * En páginas EN/FR (/en/... o /fr/...):
 *  - Hace lookup inverso del slug EN/FR → slug ES para encontrar los relatedSlugs.
 *  - Para cada artículo relacionado, busca su traducción EN/FR en ROUTES.
 *  - Si existe traducción → link a /{lang}/{translatedSlug}/.
 *  - Si no existe → link a /{esSlug}/ (fallback en ES, sin badge por ahora).
 *  - Textos de UI localizados (título de sección, CTA).
 *
 * No requiere prop `lang`: lo detecta automáticamente del pathname.
 */
export function RelatedArticles({ currentSlug, category, title }: Props) {
  const pathname = usePathname();

  // Detectar idioma desde la URL: /en/... o /fr/...
  const lang: "es" | "en" | "fr" = pathname.startsWith("/en/")
    ? "en"
    : pathname.startsWith("/fr/")
    ? "fr"
    : "es";

  const isTranslated = lang !== "es";

  // Si estamos en una página EN/FR, el currentSlug que llega es el slug traducido.
  // Hacemos lookup inverso para obtener el slug ES y poder buscar en allPosts.
  const esSlug =
    currentSlug && isTranslated
      ? (esSlugFor(currentSlug) ?? currentSlug) // fallback: usar tal cual si no hay match
      : currentSlug;

  const posts = esSlug
    ? getRelatedPosts(esSlug, 3)
    : category
    ? getPostsByCategory(category, 3)
    : getLatestPosts(3);

  // Textos de UI localizados
  const defaultTitle =
    lang === "en"
      ? "Related articles"
      : lang === "fr"
      ? "Articles connexes"
      : "Artículos relacionados";

  const readMore =
    lang === "en"
      ? "Read article →"
      : lang === "fr"
      ? "Lire l'article →"
      : "Leer artículo →";

  if (posts.length === 0) return null;

  return (
    <section className="bg-white pt-12 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-900 mb-8">{title ?? defaultTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            // Intentar obtener URL traducida para el artículo relacionado
            const translatedSlug = isTranslated
              ? translatedSlugFor(post.slug, lang)
              : undefined;

            const href = translatedSlug
              ? `/${lang}/${translatedSlug}/`
              : `/${post.slug}/`;

            // Obtener título, excerpt y categoría traducidos
            const t = isTranslated
              ? getPostI18n(post.slug, lang, { title: post.title, excerpt: post.excerpt })
              : { title: post.title, excerpt: post.excerpt };
            const translatedCategory = isTranslated
              ? getCategoryI18n(post.category, lang)
              : post.category;

            return (
              <Link
                key={post.slug}
                href={href}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-accent-500 hover:shadow-md transition-all group"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
                  <Image
                    src={`/og-${post.slug}.jpg`}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide">
                    {translatedCategory}
                  </span>
                  <h3 className="mt-2 font-bold text-primary-900 group-hover:text-accent-500 transition-colors line-clamp-3 text-sm leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 line-clamp-2">{t.excerpt}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-accent-500">
                    {readMore}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
