import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "AI Applied to Digital Marketing | Mkt Web 360"
      : "IA Appliquée au Marketing Digital | Mkt Web 360",
    description: isEn
      ? "We integrate artificial intelligence into every digital marketing service. Our own AI protocols for faster, more precise results. Nationwide service."
      : "Nous intégrons l'intelligence artificielle dans chaque service de marketing digital. Nos propres protocoles IA pour des résultats plus rapides et plus précis.",
    alternates: alternatesFor(`/${lang}/ai-applied-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-applied-marketing/`,
    },
  };
}

export default async function AiAppliedMarketingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "AI-powered SEO analysis and keyword opportunities",
    "AI-assisted content creation with editorial oversight",
    "Predictive analytics and behavioural patterns",
    "AI-optimised Google Ads campaigns",
    "Automated reporting and performance alerts",
    "Strategic recommendations based on real data",
  ];

  const frIncludes = [
    "Analyse SEO et opportunités de mots-clés assistées par IA",
    "Création de contenu assistée par IA avec supervision éditoriale",
    "Analyses prédictives et modèles comportementaux",
    "Campagnes Google Ads optimisées par IA",
    "Rapports automatisés et alertes de performance",
    "Recommandations stratégiques basées sur des données réelles",
  ];

  const metrics = isEn
    ? [
        { value: "Faster", label: "than a traditional agency" },
        { value: "More data", label: "analysed per project" },
        { value: "Own", label: "developed protocols" },
        { value: "Better", label: "strategic decisions" },
      ]
    : [
        { value: "Plus rapide", label: "qu'une agence traditionnelle" },
        { value: "Plus de données", label: "analysées par projet" },
        { value: "Propres", label: "protocoles développés" },
        { value: "Meilleures", label: "décisions stratégiques" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "AI Marketing" : "Marketing IA" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "The experience of a senior team." : "L'expérience d'une équipe senior."}
              <br />
              <span className="text-accent-400">
                {isEn ? "The precision of artificial intelligence." : "La précision de l'intelligence artificielle."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We don't use AI like everyone else. We have developed our own protocols integrated into every service — to work faster, analyse more data and make better decisions than a traditional agency."
                : "Nous n'utilisons pas l'IA comme tout le monde. Nous avons développé nos propres protocoles intégrés dans chaque service — pour travailler plus vite, analyser plus de données et prendre de meilleures décisions qu'une agence traditionnelle."}
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
            {isEn ? "AI integrated into every service" : "IA intégrée dans chaque service"}
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
          <ContactForm formType={`${lang}-ai-marketing`} />
        </div>
      </section>
    </>
  );
}
