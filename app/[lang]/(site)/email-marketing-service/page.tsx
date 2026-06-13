import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Email Marketing for Businesses — Campaigns that Convert | Mkt Web 360"
      : "Email Marketing pour Entreprises — Campagnes qui Convertissent | Mkt Web 360",
    description: isEn
      ? "Professional email marketing service for businesses. Newsletter design, automated sequences and acquisition campaigns. Proven ROI."
      : "Service d'email marketing professionnel pour les entreprises. Design de newsletters, séquences automatisées et campagnes d'acquisition. ROI prouvé.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/email-marketing-service/` },
  };
}

export default async function EmailMarketingServicePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Subscriber list design and segmentation",
    "Newsletter design aligned with your brand",
    "Automated welcome and nurturing sequences",
    "Acquisition and reactivation campaigns",
    "A/B testing of subject lines and content",
    "Monthly analysis: open rate, clicks and conversions",
  ];

  const frIncludes = [
    "Conception et segmentation de la liste d'abonnés",
    "Design de newsletter aligné avec votre marque",
    "Séquences automatisées de bienvenue et de nurturing",
    "Campagnes d'acquisition et de réactivation",
    "Tests A/B des lignes d'objet et du contenu",
    "Analyse mensuelle : taux d'ouverture, clics et conversions",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Email Marketing" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Email marketing" : "Email marketing"}
              <br />
              <span className="text-accent-400">
                {isEn ? "with proven ROI" : "avec ROI prouvé"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Email remains the digital marketing channel with the highest return on investment. We design and manage your email marketing campaigns so that every send generates real results."
                : "L'email reste le canal de marketing digital avec le meilleur retour sur investissement. Nous concevons et gérons vos campagnes d'email marketing pour que chaque envoi génère des résultats réels."}
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
          <ContactForm formType={`${lang}-email-marketing`} />
        </div>
      </section>
    </>
  );
}
