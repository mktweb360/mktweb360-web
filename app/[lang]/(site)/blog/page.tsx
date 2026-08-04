import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor, ROUTES } from "@/lib/i18n/routes";
import { allPosts } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing Blog | Mkt Web 360"
      : "Blog Marketing Digital | Mkt Web 360",
    description: isEn
      ? "Articles, guides and tips on digital marketing, SEO, Google Ads, social media and web design for businesses."
      : "Articles, guides et conseils en marketing digital, SEO, Google Ads, réseaux sociaux et création de sites web pour entreprises.",
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
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: "Blog" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-4">
            {isEn ? "Digital Marketing Blog" : "Blog Marketing Digital"}
          </h1>
          <p className="text-xl text-primary-200">
            {isEn
              ? "Articles, guides and practical tips to grow your business online."
              : "Articles, guides et conseils pratiques pour développer votre entreprise en ligne."}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {translatedPosts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {translatedPosts.map((post) => {
                  const translatedSlug = slugMap.get(post.slug)!;
                  const href = `/${lang}/${translatedSlug}/`;
                  return (
                    <article
                      key={post.slug}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <time className="text-xs text-gray-400" dateTime={post.date}>
                            {new Date(post.date + "T00:00:00").toLocaleDateString(
                              isEn ? "en-GB" : "fr-FR",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                          </time>
                        </div>
                        <h2 className="text-lg font-bold text-primary-700 mb-2 line-clamp-2">
                          <Link href={href} className="hover:text-accent-500 transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
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
                    className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors"
                  >
                    <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block">
                      ES
                    </span>
                    <h3 className="text-base font-semibold text-gray-700 line-clamp-2 mb-1">
                      <Link href={`/${post.slug}/`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
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
