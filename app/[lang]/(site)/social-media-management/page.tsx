import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Social Media Management for Businesses | Mkt Web 360"
      : "Gestion des Réseaux Sociaux pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional social media management for businesses. Community management, content creation and growth strategy for Instagram, LinkedIn, Facebook and TikTok."
      : "Gestion professionnelle des réseaux sociaux pour les entreprises. Community management, création de contenu et stratégie de croissance.",
    alternates: alternatesFor(`/${lang}/social-media-management/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/social-media-management/`,
    },
  };
}

export default async function SocialMediaManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Professional management of Instagram, Facebook, LinkedIn and TikTok",
    "Monthly editorial calendar",
    "Original content creation (copy + design)",
    "Community management and response to comments",
    "Monthly performance analysis and results report",
    "Growth strategy tailored to your sector",
  ];

  const frIncludes = [
    "Gestion professionnelle d'Instagram, Facebook, LinkedIn et TikTok",
    "Calendrier éditorial mensuel",
    "Création de contenu original (rédaction + design)",
    "Community management et réponse aux commentaires",
    "Analyse mensuelle des performances et rapport de résultats",
    "Stratégie de croissance adaptée à votre secteur",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Social Media" : "Réseaux sociaux" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Social media management" : "Gestion des réseaux sociaux"}
              <br />
              <span className="text-accent-400">
                {isEn ? "that builds real communities" : "qui construit de vraies communautés"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Professional social media management to build a loyal community, increase your brand visibility and convert followers into customers."
                : "Gestion professionnelle des réseaux sociaux pour construire une communauté fidèle, augmenter votre visibilité de marque et convertir les abonnés en clients."}
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
          <ContactForm formType={`${lang}-social-media`} />
        </div>
      </section>
    </>
  );
}
