import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO Positioning Service for Businesses — Mkt Web 360"
      : "Service de Positionnement SEO pour Entreprises — Mkt Web 360",
    description: isEn
      ? "Professional SEO positioning service for businesses. Technical audits, keyword strategy and content that takes your website to the first page of Google."
      : "Service de positionnement SEO professionnel pour entreprises. Audits techniques, stratégie de mots-clés et contenu qui amène votre site en première page de Google.",
    alternates: alternatesFor(`/${lang}/seo-positioning/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-positioning/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "Full technical SEO audit",
        "Keyword research by sector",
        "On-page optimisation of all key pages",
        "Monthly SEO content creation",
        "Ethical link building",
        "Weekly position tracking",
        "Monthly report with metrics and next steps",
        "Google Search Console and GA4 integration",
      ]
    : [
        "Audit technique SEO complet",
        "Recherche de mots-clés par secteur",
        "Optimisation on-page de toutes les pages clés",
        "Création de contenu SEO mensuel",
        "Link building éthique",
        "Suivi hebdomadaire des positions",
        "Rapport mensuel avec métriques et prochaines étapes",
        "Intégration Google Search Console et GA4",
      ];

  const metrics = isEn
    ? [
        { value: "93%", label: "searches start on Google" },
        { value: "Organic", label: "traffic without cost per click" },
        { value: "Lasting", label: "results that hold" },
        { value: "National", label: "and local SEO" },
      ]
    : [
        { value: "93%", label: "recherches commencent sur Google" },
        { value: "Organique", label: "trafic sans coût par clic" },
        { value: "Durable", label: "résultats qui se maintiennent" },
        { value: "National", label: "et SEO local" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "SEO" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "First page of Google" : "Première page de Google"}<br />
              <span className="text-accent-400">
                {isEn ? "customers that find you" : "clients qui vous trouvent"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "93% of online experiences start on Google. If you don't appear on the first page, your competition takes those customers every single day. SEO is the investment with the highest long-term return."
                : "93% des expériences en ligne commencent sur Google. Si vous n'apparaissez pas en première page, vos concurrents récupèrent ces clients chaque jour. Le SEO est l'investissement avec le meilleur retour à long terme."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get a free quote" : "Demander un devis"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "What's included in the SEO service" : "Ce qui est inclus dans le service SEO"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
          </h2>
          <p className="text-primary-200">
            {isEn ? "Tell us about your project. We respond within 24 hours." : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-seo-positioning`} />
        </div>
      </section>
    </>
  );
}
