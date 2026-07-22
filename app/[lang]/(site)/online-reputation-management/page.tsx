import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Online Reputation Management for Businesses | Mkt Web 360"
      : "Gestion de la Réputation en Ligne pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional online reputation management service. Review monitoring and management on Google, Trustpilot and other platforms. Nationwide service."
      : "Service professionnel de gestion de la réputation en ligne. Surveillance et gestion des avis sur Google, Trustpilot et autres plateformes.",
    alternates: alternatesFor(`/${lang}/online-reputation-management/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-reputation-management/`,
    },
  };
}

export default async function OnlineReputationManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Review monitoring on Google, Trustpilot and other platforms",
    "Professional response to negative reviews",
    "Strategy to generate more positive reviews",
    "Management of false or unfair review removal requests",
    "Monthly reputation report",
    "Brand mention alerts",
  ];

  const frIncludes = [
    "Surveillance des avis sur Google, Trustpilot et autres plateformes",
    "Réponse professionnelle aux avis négatifs",
    "Stratégie pour générer plus d'avis positifs",
    "Gestion des demandes de suppression d'avis faux ou injustes",
    "Rapport mensuel de réputation",
    "Alertes de mentions de marque",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Reputation" : "Réputation" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Your online reputation" : "Votre réputation en ligne"}
              <br />
              <span className="text-accent-400">
                {isEn ? "is your first impression" : "est votre première impression"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Your online reputation is the first thing potential customers see before contacting you. We manage and improve your company's digital image so that first impressions work in your favour."
                : "Votre réputation en ligne est la première chose que voient les clients potentiels avant de vous contacter. Nous gérons et améliorons l'image numérique de votre entreprise pour que les premières impressions jouent en votre faveur."}
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
          <ContactForm formType={`${lang}-reputation`} />
        </div>
      </section>
    </>
  );
}
