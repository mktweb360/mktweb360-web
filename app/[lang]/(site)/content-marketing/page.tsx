import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Content Marketing for Businesses | Mkt Web 360"
      : "Marketing de Contenu pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Content strategy and production for businesses. SEO articles, corporate blogs and social media content to attract organic customers. Nationwide service."
      : "Stratégie et production de contenu pour les entreprises. Articles SEO, blogs d'entreprise et contenu pour réseaux sociaux pour attirer des clients organiques.",
    alternates: alternatesFor(`/${lang}/content-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/content-marketing/`,
    },
  };
}

export default async function ContentMarketingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Monthly content strategy and keyword research",
    "SEO blog articles optimised for positioning",
    "Content for social media networks",
    "Email newsletters",
    "On-page optimisation of each publication",
    "Schema markup for rich snippets",
    "Monthly performance report: positions and traffic",
  ];

  const frIncludes = [
    "Stratégie de contenu mensuelle et recherche de mots-clés",
    "Articles de blog SEO optimisés pour le positionnement",
    "Contenu pour les réseaux sociaux",
    "Newsletters par email",
    "Optimisation on-page de chaque publication",
    "Balisage Schema pour les rich snippets",
    "Rapport mensuel de performance : positions et trafic",
  ];

  const metrics = isEn
    ? [
        { value: "SEO", label: "optimised from day one" },
        { value: "Authority", label: "in your sector" },
        { value: "Organic", label: "traffic without cost per click" },
        { value: "Monthly", label: "performance report" },
      ]
    : [
        { value: "SEO", label: "optimisé dès le premier jour" },
        { value: "Autorité", label: "dans votre secteur" },
        { value: "Organique", label: "trafic sans coût par clic" },
        { value: "Mensuel", label: "rapport de performance" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Content Marketing" : "Marketing de Contenu" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Content that positions" : "Contenu qui positionne"}
              <br />
              <span className="text-accent-400">
                {isEn ? "and attracts customers" : "et attire des clients"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Quality content positions your brand as a reference in your sector, improves your SEO and builds trust with potential customers. We create the strategy and content your business needs."
                : "Le contenu de qualité positionne votre marque comme référence dans votre secteur, améliore votre SEO et renforce la confiance des clients potentiels. Nous créons la stratégie et le contenu dont votre entreprise a besoin."}
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
          <ContactForm formType={`${lang}-content-marketing`} />
        </div>
      </section>
    </>
  );
}
