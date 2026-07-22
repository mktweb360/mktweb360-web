import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title:
      lang === "en" ? "Digital Marketing Blog | Mkt Web 360" : "Blog Marketing Digital | Mkt Web 360",
    description:
      lang === "en"
        ? "Articles, guides and tips on digital marketing, SEO, Google Ads, social media and web design for businesses."
        : "Articles, guides et conseils en marketing digital, SEO, Google Ads, réseaux sociaux et création de sites web pour entreprises.",
    alternates: alternatesFor(`/${lang}/blog/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/blog/`,
    },
  };
}

export default async function LangBlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg mb-8">
            {isEn
              ? "Our blog content is currently available in Spanish. We are working on translating our most popular articles."
              : "Notre contenu de blog est actuellement disponible en espagnol. Nous travaillons à la traduction de nos articles les plus populaires."}
          </p>
          <Link
            href="/blog/"
            className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-600 transition-colors"
          >
            {isEn ? "View blog in Spanish" : "Voir le blog en espagnol"}
          </Link>
        </div>
      </section>
    </>
  );
}
