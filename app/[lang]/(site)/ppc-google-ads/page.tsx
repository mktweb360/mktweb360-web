import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "PPC Google Ads Management for Businesses | Mkt Web 360"
      : "Gestion PPC Google Ads pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional Google Ads PPC campaign management. Generate leads from day one with optimised, profitable campaigns. No percentage on ad spend."
      : "Gestion professionnelle de campagnes PPC Google Ads. Générez des leads dès le premier jour avec des campagnes optimisées et rentables. Sans pourcentage sur les dépenses.",
    alternates: alternatesFor(`/${lang}/ppc-google-ads/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ppc-google-ads/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "Google Search, Display, Shopping and YouTube campaigns",
        "No monthly percentage on ad spend",
        "Certified Google Ads specialists",
        "A/B testing of ads and landing pages",
        "Conversion tracking from day one",
        "Negative keyword management",
        "Monthly report: impressions, clicks, conversions, CPA",
        "Free account analysis before starting",
      ]
    : [
        "Campagnes Google Search, Display, Shopping et YouTube",
        "Aucun pourcentage mensuel sur les dépenses publicitaires",
        "Spécialistes Google Ads certifiés",
        "Tests A/B des annonces et pages d'atterrissage",
        "Suivi des conversions dès le premier jour",
        "Gestion des mots-clés négatifs",
        "Rapport mensuel : impressions, clics, conversions, CPA",
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
                { label: isEn ? "Google Ads PPC" : "Google Ads PPC" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Google Ads campaigns" : "Campagnes Google Ads"}<br />
              <span className="text-accent-400">
                {isEn ? "results from day one" : "résultats dès le premier jour"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We generate potential customers for your business from day one with optimised and profitable Google Ads campaigns. You only pay when someone clicks — and we make sure every click counts."
                : "Nous générons des clients potentiels pour votre entreprise dès le premier jour avec des campagnes Google Ads optimisées et rentables. Vous ne payez que lorsque quelqu'un clique — et nous faisons en sorte que chaque clic compte."}
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
            {isEn ? "What's included" : "Ce qui est inclus"}
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
          <ContactForm formType={`${lang}-google-ads`} />
        </div>
      </section>
    </>
  );
}
