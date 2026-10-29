import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Google Ads sans commission sur le budget" : "Google Ads with No Commission on Budget",
    description: isFr ? "Google Ads sans commission sur le budget : ce que cela change quand l'agence ne prélève rien sur vos dépenses, ce que vous économisez et comment comparer." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.",
    alternates: alternatesFor(`/${lang}/${isFr ? "google-ads-sans-commission-agence-marketing" : "google-ads-no-commission-marketing-agency"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${isFr ? "google-ads-sans-commission-agence-marketing" : "google-ads-no-commission-marketing-agency"}/`,
    },
    openGraph: {
      title: `${isFr ? "Google Ads sans commission sur le budget" : "Google Ads with No Commission on Budget"} | Mkt Web 360`,
      description: isFr ? "Google Ads sans commission sur le budget : ce que cela change quand l'agence ne prélève rien sur vos dépenses, ce que vous économisez et comment comparer." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.",
      images: [{ url: "https://www.mktweb360.com/og-google-ads-sin-comision-agencia-marketing.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: "2026-08-20T08:00:00Z",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Google Ads sans commission sur le budget" : "Google Ads with No Commission on Budget";
  const desc = isFr ? "Google Ads sans commission sur le budget : ce que cela change quand l'agence ne prélève rien sur vos dépenses, ce que vous économisez et comment comparer." : "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.";
  const cat = "SEM";
  const faqs = [
    [isFr ? "Qu'est-ce que la commission sur le budget Google Ads ?" : "What is a commission on Google Ads budget?", isFr ? "C'est un pourcentage (généralement 10 à 20 %) que l'agence prélève sur ce que vous dépensez sur Google. Si vous investissez 2 000 € par mois, vous payez 200 à 400 € de plus à l'agence uniquement pour gérer cet argent." : "It is a percentage (usually 10–20%) that the agency charges on what you spend on Google. If you spend €2,000 a month, you pay the agency an extra €200–400 just for managing that money."],
    [isFr ? "Pourquoi certaines agences prennent-elles une commission et d'autres non ?" : "Why do some agencies charge a commission and others do not?", isFr ? "C'est un modèle hérité du marketing traditionnel. Les agences rémunérées à la commission ont intérêt à ce que vous dépensiez plus, pas à ce que vous convertissiez mieux. Celles qui facturent un forfait sont plus alignées sur votre objectif." : "It is a model inherited from offline marketing. Agencies that charge a commission have a financial incentive for you to spend more, not to convert better. Flat-fee agencies are more closely aligned with your goal."],
    [isFr ? "Une agence sans commission revient-elle plus cher au total ?" : "Is an agency with no commission more expensive overall?", isFr ? "En général, non. Avec une commission, plus vous investissez, plus vous payez. Avec un forfait, le coût de gestion est fixe. Au-delà d'un certain budget, le forfait revient toujours moins cher." : "Generally not. With a commission, the more you spend, the more you pay. With a flat fee, the management cost is fixed. Above a certain budget, the flat fee always works out cheaper."],
    [isFr ? "Comment savoir si mon agence gonfle le budget ?" : "How can I tell whether my agency is inflating the budget?", isFr ? "Demandez un accès en lecture à votre compte Google Ads. Consultez l'historique des modifications et vérifiez si le budget a augmenté sans résultats qui le justifient. Une agence sérieuse vous donne toujours accès." : "Ask for read access to your Google Ads account. Check the change history and whether the budget has gone up without results to justify it. A reputable agency always gives you access."],
    [isFr ? "Combien investir dans Google Ads pour commencer ?" : "How much should I invest in Google Ads to start with?", isFr ? "Pour obtenir des données significatives en moins de 3 mois, nous recommandons un investissement publicitaire d'au moins 500 à 800 € par mois. En dessous, l'apprentissage de l'algorithme est très lent." : "To get meaningful data in under 3 months, we recommend at least €500–800 a month in ad spend. Below that, the algorithm learns very slowly."],
  ];

  return (
    <>
      <section className="mw-skin-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs lang={lang} items={[{ label: "Blog", href: `/${lang}/blog/` }, { label: cat }]} />
          <div className="mt-4 mb-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{cat}</span>
          </div>
          <IntlArticleJsonLd lang={lang} slug="google-ads-no-commission-marketing-agency" headline={title} image="/og-google-ads-sin-comision-agencia-marketing.jpg" />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-primary-200">{desc}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-300">
            <span>📅 2026-08-20</span><span>✍️ <AuthorByline lang={lang} className="" linkClassName="underline hover:no-underline" /></span>
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
              ? "Ce guide complet couvre les stratégies essentielles pour les entreprises opérant en Espagne en 2026. Chaque section inclut des recommandations pratiques issues de notre travail quotidien avec nos clients."
              : "This comprehensive guide covers the essential strategies for businesses operating in Spain in 2026. Each section includes practical recommendations drawn from our day-to-day work with clients."
            }
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-10 text-center">
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
