import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Analytics for Businesses — Data-Driven Decisions | Mkt Web 360"
      : "Analytique Web pour Entreprises — Décisions Basées sur les Données | Mkt Web 360",
    description: isEn
      ? "Professional web analytics service. GA4, GTM, business dashboards and conversion tracking. Make decisions based on real data."
      : "Service d'analytique web professionnel. GA4, GTM, tableaux de bord métier et suivi des conversions. Prenez des décisions basées sur des données réelles.",
    alternates: alternatesFor(`/${lang}/web-analytics/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-analytics/`,
    },
  };
}

export default async function WebAnalyticsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Google Analytics 4 configuration and management",
    "Google Tag Manager implementation",
    "Google Consent Mode v2",
    "Conversion tracking: forms, calls, purchases",
    "Custom business dashboards",
    "Monthly report with metrics and recommendations",
    "Google Search Console integration",
  ];

  const frIncludes = [
    "Configuration et gestion de Google Analytics 4",
    "Implémentation de Google Tag Manager",
    "Google Consent Mode v2",
    "Suivi des conversions : formulaires, appels, achats",
    "Tableaux de bord métier personnalisés",
    "Rapport mensuel avec métriques et recommandations",
    "Intégration Google Search Console",
  ];

  const metrics = isEn
    ? [
        { value: "GA4", label: "Google Analytics 4" },
        { value: "GTM", label: "Tag Manager" },
        { value: "Consent", label: "Mode v2" },
        { value: "Monthly", label: "business report" },
      ]
    : [
        { value: "GA4", label: "Google Analytics 4" },
        { value: "GTM", label: "Tag Manager" },
        { value: "Consent", label: "Mode v2" },
        { value: "Mensuel", label: "rapport métier" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Analytics" : "Analytique" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Web analytics," : "Analytique web,"}
              <br />
              <span className="text-accent-400">
                {isEn ? "data that drives decisions" : "des données qui orientent les décisions"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Without data there is no strategy. We set up and manage your web analytics so you know exactly what works, what doesn't and where to invest to grow."
                : "Sans données, il n'y a pas de stratégie. Nous configurons et gérons votre analytique web pour que vous sachiez exactement ce qui fonctionne, ce qui ne fonctionne pas et où investir pour croître."}
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
          <ContactForm formType={`${lang}-analytics`} />
        </div>
      </section>
    </>
  );
}
