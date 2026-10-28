import Link from "next/link";
import { openGraphIntl } from "@/lib/og";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor, ROUTES } from "@/lib/i18n/routes";
import { allPosts } from "@/lib/blog";
import { getPostI18n, getCategoryI18n } from "@/lib/blog-i18n";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, SITE } from "@/lib/schema";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing Blog"
      : "Blog Marketing Digital",
    description: isEn
      ? "Articles, guides and tips on digital marketing, SEO, Google Ads, social media and web design for businesses."
      : "Articles, guides et conseils en marketing digital, SEO, Google Ads, réseaux sociaux et création de sites web pour entreprises.",
    openGraph: openGraphIntl(lang, "blog"),
    alternates: alternatesFor(`/${lang}/blog/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/blog/`,
    },
  };
}

// Build a map: ES slug (without slashes) → translated slug for lang
function buildSlugMap(lang: "en" | "fr"): Map<string, string> {
  const map = new Map<string, string>();
  for (const r of ROUTES) {
    const esSlug = r.es.replace(/^\/|\/$/g, "");
    const translated = lang === "en" ? r.en : r.fr;
    if (translated !== undefined) {
      map.set(esSlug, translated);
    }
  }
  return map;
}

export default async function LangBlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const slugMap = buildSlugMap(lang as "en" | "fr");

  // Only show posts that have a translated page
  const translatedPosts = [...allPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((p) => slugMap.has(p.slug));

  const untranslatedPosts = [...allPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((p) => !slugMap.has(p.slug));

  return (
    <>
      <section className="mw-skin-hero text-white">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 md:pb-20">
          <JsonLd data={webPageSchema("CollectionPage", {
            lang,
            path: `/${lang}/blog/`,
            name: isEn ? "Digital Marketing Blog" : "Blog Marketing Digital",
            description: isEn
              ? "Articles, guides and tips on digital marketing, SEO, Google Ads, social media and web design for businesses."
              : "Articles, guides et conseils en marketing digital, SEO, Google Ads, réseaux sociaux et création de sites web pour entreprises.",
          }, {
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: translatedPosts.length,
              itemListElement: translatedPosts.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE}/${lang}/${slugMap.get(p.slug)}/`,
                name: getPostI18n(p.slug, lang as "en" | "fr", { title: p.title, excerpt: p.excerpt }).title,
              })),
            },
          })} />
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: "Blog" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
            {isEn ? <>Digital <span className="text-accent-400">marketing</span> blog</> : <>Blog <span className="text-accent-400">marketing digital</span></>}
          </h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-100">
            {isEn
              ? "Articles, guides and practical tips to grow your business online."
              : "Articles, guides et conseils pratiques pour développer votre entreprise en ligne."}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {translatedPosts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {translatedPosts.map((post) => {
                  const translatedSlug = slugMap.get(post.slug)!;
                  const href = `/${lang}/${translatedSlug}/`;
                  const tr = getPostI18n(post.slug, lang as "en" | "fr", { title: post.title, excerpt: post.excerpt });
                  return (
                    <article
                      key={post.slug}
                      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-22px_rgba(15,28,46,0.45)] hover:ring-transparent"
                    >
                      <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
                      <Link href={href} className="block relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
                        <Image
                          src={`/og-${post.slug}.jpg`}
                          alt={tr.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="rounded-full bg-gradient-to-r from-[#7c3aed]/10 to-accent-500/10 px-2.5 py-0.5 text-xs font-bold text-primary-700">
                            {getCategoryI18n(post.category, lang as "en" | "fr")}
                          </span>
                          <time className="text-xs text-gray-400" dateTime={post.date}>
                            {new Date(post.date + "T00:00:00").toLocaleDateString(
                              isEn ? "en-GB" : "fr-FR",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                          </time>
                        </div>
                        <h2 className="text-lg font-bold text-primary-700 mb-2 line-clamp-2">
                          <Link href={href} className="transition-colors group-hover:text-accent-600">
                            {tr.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {tr.excerpt}
                        </p>
                        <Link
                          href={href}
                          className="mt-4 inline-block text-accent-500 text-sm font-medium hover:text-accent-600"
                        >
                          {isEn ? "Read article →" : "Lire l'article →"}
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {untranslatedPosts.length > 0 && (
            <div className="border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-primary-700 mb-2">
                {isEn ? "More articles (in Spanish)" : "Plus d'articles (en espagnol)"}
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                {isEn
                  ? "These articles are currently available in Spanish only. Translations coming soon."
                  : "Ces articles sont actuellement disponibles en espagnol uniquement. Traductions à venir."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {untranslatedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
                  >
                    <Link href={`/${post.slug}/`} className="block relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
                      <Image
                        src={`/og-${post.slug}.jpg`}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </Link>
                    <div className="p-5">
                      <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block">
                        ES
                      </span>
                      <h3 className="text-base font-semibold text-gray-700 line-clamp-2 mb-1">
                        <Link href={`/${post.slug}/`} className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
