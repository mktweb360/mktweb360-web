import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Ads Management — Campaigns that Convert | Mkt Web 360"
      : "Gestion Google Ads — Campagnes qui Convertissent | Mkt Web 360",
    description: isEn
      ? "Professional Google Ads campaign management for businesses. Generate leads from day one with optimised, profitable campaigns. Nationwide service."
      : "Gestion professionnelle de campagnes Google Ads pour les entreprises. Générez des leads dès le premier jour avec des campagnes optimisées et rentables.",
    alternates: alternatesFor(`/${lang}/google-ads-management/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-ads-management/`,
    },
  };
}

export default async function GoogleAdsManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Google Search, Display, Shopping and YouTube campaigns",
    "No monthly percentage on ad spend",
    "Certified Google Ads specialists",
    "Continuous A/B testing of ads and bids",
    "Conversion tracking set up from day one",
    "Monthly report with real metrics: impressions, clicks, conversions",
    "No lock-in — full flexibility",
    "Free account analysis before starting",
  ];

  const frIncludes = [
    "Campagnes Google Search, Display, Shopping et YouTube",
    "Aucun pourcentage mensuel sur les dépenses publicitaires",
    "Spécialistes Google Ads certifiés",
    "Tests A/B continus des annonces et des enchères",
    "Suivi des conversions configuré dès le premier jour",
    "Rapport mensuel avec métriques réelles : impressions, clics, conversions",
    "Sans engagement — flexibilité totale",
    "Analyse de compte gratuite avant de commencer",
  ];

  const metrics = isEn
    ? [
        { value: "Day 1", label: "results from the start" },
        { value: "Certified", label: "Google Ads specialists" },
        { value: "No %", label: "on ad spend" },
        { value: "National", label: "service across Spain" },
      ]
    : [
        { value: "Jour 1", label: "résultats dès le début" },
        { value: "Certifiés", label: "spécialistes Google Ads" },
        { value: "Sans %", label: "sur les dépenses" },
        { value: "National", label: "service en Espagne" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Google Ads" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Google Ads campaigns" : "Campagnes Google Ads"}
              <br />
              <span className="text-accent-400">
                {isEn ? "that generate real customers" : "qui génèrent de vrais clients"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We generate potential customers for your business from day one with optimised and profitable Google Ads campaigns. You only pay when someone clicks."
                : "Nous générons des clients potentiels pour votre entreprise dès le premier jour avec des campagnes Google Ads optimisées et rentables. Vous ne payez que lorsque quelqu'un clique."}
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
            {isEn ? "What's included in the service" : "Ce qui est inclus dans le service"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isEn ? enIncludes : frIncludes).map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
              >
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
            {isEn ? "Ready to grow online?" : "Prêt à vous développer en ligne ?"}
          </h2>
          <p className="text-primary-200">
            {isEn
              ? "Tell us about your project. We respond within 24 hours."
              : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-google-ads`} />
        </div>
      </section>
    </>
  );
}
