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
    title: isFr ? "Google Ads sans commission sur budget: pourquoi ça change tout" : "Google Ads with No Commission on Budget: Why It Changes Everything",
    description: isFr ? "Ce que signifie qu'une agence ne facture pas de commission sur votre investissement Google Ads, combien vous économisez et comment évaluer le modèle qui vous convient." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.",
    alternates: alternatesFor(`/${lang}/${isFr ? "google-ads-sans-commission-agence-marketing" : "google-ads-no-commission-marketing-agency"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${isFr ? "google-ads-sans-commission-agence-marketing" : "google-ads-no-commission-marketing-agency"}/`,
    },
    openGraph: {
      title: `${isFr ? "Google Ads sans commission sur budget: pourquoi ça change tout" : "Google Ads with No Commission on Budget: Why It Changes Everything"} | Mkt Web 360`,
      description: isFr ? "Ce que signifie qu'une agence ne facture pas de commission sur votre investissement Google Ads, combien vous économisez et comment évaluer le modèle qui vous convient." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.",
      images: [{ url: "https://www.mktweb360.com/og-google-ads-sin-comision-agencia-marketing.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: "2026-08-20T08:00:00Z",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Google Ads sans commission sur budget: pourquoi ça change tout" : "Google Ads with No Commission on Budget: Why It Changes Everything";
  const desc = isFr ? "Ce que signifie qu'une agence ne facture pas de commission sur votre investissement Google Ads, combien vous économisez et comment évaluer le modèle qui vous convient." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.";
  const cat = "SEM";
  const faqs = [
    [isFr ? "¿Qué es la comisión sobre presupuesto en Google Ads?" : "¿Qué es la comisión sobre presupuesto en Google Ads?", isFr ? "Es un porcentaje (normalmente 10-20%) que la agencia cobra sobre lo que inviertes en Google. Si inviertes 2.000€/mes, pagas 200-400€ adicionales a la agencia solo por gestionar ese dinero." : "Es un porcentaje (normalmente 10-20%) que la agencia cobra sobre lo que inviertes en Google. Si inviertes 2.000€/mes, pagas 200-400€ adicionales a la agencia solo por gestionar ese dinero."],
    [isFr ? "¿Por qué algunas agencias cobran comisión y otras no?" : "¿Por qué algunas agencias cobran comisión y otras no?", isFr ? "Es un modelo heredado del marketing offline. Las agencias que cobran comisión tienen incentivo económico para que gastes más, no para que conviertas mejor. Las de tarifa plana se alinean más con tu objetivo." : "Es un modelo heredado del marketing offline. Las agencias que cobran comisión tienen incentivo económico para que gastes más, no para que conviertas mejor. Las de tarifa plana se alinean más con tu objetivo."],
    [isFr ? "¿Una agencia sin comisión es más cara en total?" : "¿Una agencia sin comisión es más cara en total?", isFr ? "Generalmente no. Con comisión pagas más cuanto más inviertes. Con tarifa plana, el coste de gestión es fijo. A partir de cierto presupuesto, la tarifa plana siempre sale más barata." : "Generalmente no. Con comisión pagas más cuanto más inviertes. Con tarifa plana, el coste de gestión es fijo. A partir de cierto presupuesto, la tarifa plana siempre sale más barata."],
    [isFr ? "¿Cómo saber si mi agencia está inflando el presupuesto?" : "¿Cómo saber si mi agencia está inflando el presupuesto?", isFr ? "Pide acceso de lectura a tu cuenta de Google Ads. Revisa el historial de cambios y si el presupuesto ha subido sin justificación de resultados. Una agencia seria te da acceso siempre." : "Pide acceso de lectura a tu cuenta de Google Ads. Revisa el historial de cambios y si el presupuesto ha subido sin justificación de resultados. Una agencia seria te da acceso siempre."],
    [isFr ? "¿Cuánto debería invertir en Google Ads para empezar?" : "¿Cuánto debería invertir en Google Ads para empezar?", isFr ? "Para tener datos significativos en menos de 3 meses, recomendamos mínimo 500-800€/mes de inversión publicitaria. Por debajo de eso, el aprendizaje del algoritmo es muy lento." : "Para tener datos significativos en menos de 3 meses, recomendamos mínimo 500-800€/mes de inversión publicitaria. Por debajo de eso, el aprendizaje del algoritmo es muy lento."],
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
            <span>📅 2026-08-20</span><span>✍️ Mkt Web 360</span>
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

      <RelatedArticles lang={lang} currentSlug={isFr ? "google-ads-sans-commission-agence-marketing" : "google-ads-no-commission-marketing-agency"} />
    </>
  );
}
