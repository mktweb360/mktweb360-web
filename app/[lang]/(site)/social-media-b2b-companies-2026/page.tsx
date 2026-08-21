import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Réseaux sociaux pour entreprises B2B en 2026 : ce qui fonctionne vraiment" : "Social Media for B2B Companies in 2026: What Really Works",
    description: isFr ? "Guide pratique des réseaux sociaux B2B pour 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Practical B2B social media guide for 2026: which networks to prioritise, what content generates leads and how to measure the real return on your social media investment.",
    alternates: alternatesFor(`/${lang}/${isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"}/`,
    },
    openGraph: {
      title: `${isFr ? "Réseaux sociaux pour entreprises B2B en 2026 : ce qui fonctionne vraiment" : "Social Media for B2B Companies in 2026: What Really Works"} | Mkt Web 360`,
      description: isFr ? "Guide pratique des réseaux sociaux B2B pour 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Practical B2B social media guide for 2026: which networks to prioritise, what content generates leads and how to measure the real return on your social media investment.",
      images: [{ url: "https://www.mktweb360.com/og-redes-sociales-para-empresas-b2b-2026.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: "2026-08-21T08:00:00Z",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Réseaux sociaux pour entreprises B2B en 2026 : ce qui fonctionne vraiment" : "Social Media for B2B Companies in 2026: What Really Works";
  const desc = isFr ? "Guide pratique des réseaux sociaux B2B pour 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Practical B2B social media guide for 2026: which networks to prioritise, what content generates leads and how to measure the real return on your social media investment.";
  const cat = "Social Media";
  const faqs = [
    [isFr ? "¿Vale la pena LinkedIn para una PYME?" : "¿Vale la pena LinkedIn para una PYME?", isFr ? "Depende del sector. Para empresas que venden a otras empresas (B2B), LinkedIn es imprescindible. Para B2C con bajo ticket, otras redes tienen mejor ROI." : "Depende del sector. Para empresas que venden a otras empresas (B2B), LinkedIn es imprescindible. Para B2C con bajo ticket, otras redes tienen mejor ROI."],
    [isFr ? "¿Cuántas publicaciones semanales son suficientes en LinkedIn?" : "¿Cuántas publicaciones semanales son suficientes en LinkedIn?", isFr ? "Para una empresa, 3-5 publicaciones semanales es el rango óptimo. La consistencia es más importante que la frecuencia. Mejor 3 publicaciones buenas que 7 mediocres." : "Para una empresa, 3-5 publicaciones semanales es el rango óptimo. La consistencia es más importante que la frecuencia. Mejor 3 publicaciones buenas que 7 mediocres."],
    [isFr ? "¿Merece la pena pagar LinkedIn Premium para hacer negocio?" : "¿Merece la pena pagar LinkedIn Premium para hacer negocio?", isFr ? "LinkedIn Premium Carrera o Business no aporta mucho para generar negocio. Sales Navigator sí puede ser útil si tienes un proceso de outbound definido. Sin proceso, es dinero malgastado." : "LinkedIn Premium Carrera o Business no aporta mucho para generar negocio. Sales Navigator sí puede ser útil si tienes un proceso de outbound definido. Sin proceso, es dinero malgastado."],
    [isFr ? "¿Cómo medir si mis redes sociales están generando clientes?" : "¿Cómo medir si mis redes sociales están generando clientes?", isFr ? "Configura UTM parameters en todos los links de tus publicaciones. Así Google Analytics te muestra qué tráfico viene de cada red y si esas visitas convierten en contactos." : "Configura UTM parameters en todos los links de tus publicaciones. Así Google Analytics te muestra qué tráfico viene de cada red y si esas visitas convierten en contactos."],
    [isFr ? "¿Instagram tiene sentido para una empresa industrial o de servicios B2B?" : "¿Instagram tiene sentido para una empresa industrial o de servicios B2B?", isFr ? "Instagram puede ser útil para mostrar cultura de empresa y atraer talento, pero raramente genera leads B2B directos. LinkedIn y Google son más eficientes para captación B2B." : "Instagram puede ser útil para mostrar cultura de empresa y atraer talento, pero raramente genera leads B2B directos. LinkedIn y Google son más eficientes para captación B2B."],
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs lang={lang} items={[{ label: "Blog", href: `/${lang}/blog/` }, { label: cat }]} />
          <div className="mt-4 mb-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{cat}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-primary-200">{desc}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-300">
            <span>📅 2026-08-21</span><span>✍️ Mkt Web 360</span>
            <span>⏱️ {isFr ? "8 min lecture" : "8 min read"}</span>
          </div>
        </div>
      </section>

      <BlogBanner lang={lang} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-10 p-6 bg-primary-50 rounded-xl border-l-4 border-accent-500">
            <strong>{isFr ? "Résumé" : "Summary"}:</strong> {desc}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {isFr
              ? "Ce guide complet couvre les stratégies essentielles pour les entreprises opérant en Espagne en 2026. Chaque section inclut des recommandations pratiques basées sur notre expérience avec plus de 50 projets de marketing digital."
              : "This comprehensive guide covers the essential strategies for businesses operating in Spain in 2026. Each section includes practical recommendations based on our experience with over 50 digital marketing projects."
            }
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">
            {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
          </h2>
          {faqs.map(([q, a], i) => (
            <div key={i} className="border-b border-gray-100 pb-6 mb-6">
              <h3 className="font-bold text-primary-700 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            {isFr ? "Besoin d'aide ?" : "Need help with your digital strategy?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isFr
              ? "Agence de marketing digital en Espagne. SEO, GEO, Google Ads. Sans engagement. Sans commission."
              : "Digital marketing agency in Spain. SEO, GEO, Google Ads. No lock-in. No commission on spend."
            }
          </p>
          <ContactForm formType={`${lang}-blog-cta`} />
        </div>
      </section>

      <RelatedArticles lang={lang} currentSlug={isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"} />
    </>
  );
}
