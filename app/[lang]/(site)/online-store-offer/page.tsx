import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Online Store from €490 — No Commissions | Mkt Web 360"
      : "Boutique en Ligne Professionnelle à partir de 490€ — Sans Commissions | Mkt Web 360",
    description: isEn
      ? "Professional online store from €490. No commissions per sale, no monthly fees. Custom design, SEO included 12 months. Only 5 places available this month."
      : "Boutique en ligne professionnelle à partir de 490€. Sans commissions par vente, sans frais mensuels. Design personnalisé, SEO inclus 12 mois. Seulement 5 places ce mois-ci.",
    alternates: alternatesFor(`/${lang}/online-store-offer/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-store-offer/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "100% custom design",
        "React frontend + WooCommerce backend",
        "Stripe, Apple Pay and Google Pay configured",
        "Full catalogue management",
        "Carrier integration",
        "Technical SEO from day one",
        "12 months SEO included in the offer",
        "No commission per sale",
        "No monthly platform fee",
        "Full migration from your current store",
        "Training for autonomous management",
        "Post-delivery support",
      ]
    : [
        "Design 100% personnalisé",
        "Frontend React + backend WooCommerce",
        "Stripe, Apple Pay et Google Pay configurés",
        "Gestion complète du catalogue",
        "Intégration transporteurs",
        "SEO technique dès le premier jour",
        "12 mois de SEO inclus dans l'offre",
        "Aucune commission par vente",
        "Aucun abonnement mensuel",
        "Migration complète depuis votre boutique actuelle",
        "Formation pour la gestion autonome",
        "Support post-livraison",
      ];

  const metrics = isEn
    ? [
        { value: "€490", label: "special offer price" },
        { value: "0€", label: "commission per sale" },
        { value: "12m", label: "SEO included" },
        { value: "5", label: "places available" },
      ]
    : [
        { value: "490€", label: "prix offre spéciale" },
        { value: "0€", label: "commission par vente" },
        { value: "12m", label: "SEO inclus" },
        { value: "5", label: "places disponibles" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Online Store Offer" : "Offre Boutique en ligne" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Your professional online store" : "Votre boutique en ligne professionnelle"}<br />
              <span className="text-accent-400">
                {isEn ? "from €490" : "à partir de 490€"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "No commissions per sale. No monthly fees. Custom design. SEO included for 12 months. Only 5 places available this month."
                : "Sans commissions par vente. Sans frais mensuels. Design personnalisé. SEO inclus pendant 12 mois. Seulement 5 places disponibles ce mois-ci."}
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
            {isEn ? "Everything included in your store" : "Tout inclus dans votre boutique"}
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
          <ContactForm formType={`${lang}-online-store-offer`} />
        </div>
      </section>
    </>
  );
}
