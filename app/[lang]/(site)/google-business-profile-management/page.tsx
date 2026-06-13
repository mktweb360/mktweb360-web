import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Business Profile Management for Businesses | Mkt Web 360"
      : "Gestion de Fiche Google Business Profile pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Google Business Profile optimisation and management for businesses. Appear on Google Maps and attract local customers. Nationwide service."
      : "Optimisation et gestion de fiche Google Business Profile pour les entreprises. Apparaissez sur Google Maps et attirez des clients locaux.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/google-business-profile-management/` },
  };
}

export default async function GoogleBusinessProfileManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Complete Google Business Profile audit",
    "Optimised categories and attributes",
    "Persuasive description with keywords",
    "Professional photos of the business",
    "Updated hours, services and prices",
    "Weekly Google posts",
    "Professional response to reviews",
    "Strategy to generate more reviews",
    "Monthly Maps position tracking report",
  ];

  const frIncludes = [
    "Audit complet de votre fiche Google Business Profile",
    "Catégories et attributs optimisés",
    "Description persuasive avec mots-clés",
    "Photos professionnelles de l'entreprise",
    "Horaires, services et prix mis à jour",
    "Publications hebdomadaires sur Google",
    "Réponse professionnelle aux avis",
    "Stratégie pour générer plus d'avis",
    "Rapport mensuel de suivi des positions sur Maps",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Google Business" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Appear when" : "Apparaissez quand"}
              <br />
              <span className="text-accent-400">
                {isEn ? "your customers are searching" : "vos clients recherchent"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "46% of Google searches have local intent. If your Google Business Profile is not optimised, you are giving customers to your competition every day."
                : "46% des recherches Google ont une intention locale. Si votre fiche Google Business Profile n'est pas optimisée, vous offrez des clients à votre concurrence chaque jour."}
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
          <ContactForm formType={`${lang}-gbp`} />
        </div>
      </section>
    </>
  );
}
