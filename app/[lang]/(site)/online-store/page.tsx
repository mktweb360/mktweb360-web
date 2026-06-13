import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Online Store — No Commissions | Mkt Web 360"
      : "Boutique en Ligne Professionnelle — Sans Commissions | Mkt Web 360",
    description: isEn
      ? "Professional online store without commissions or monthly fees. React + WooCommerce. Stripe, Apple Pay and Google Pay included. SEO included."
      : "Boutique en ligne professionnelle sans commissions ni abonnement mensuel. React + WooCommerce. Stripe, Apple Pay et Google Pay inclus. SEO inclus.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/online-store/` },
  };
}

export default async function OnlineStorePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "100% custom design — not a template",
    "React frontend + WooCommerce backend",
    "Stripe, Apple Pay and Google Pay configured",
    "WordPress management panel",
    "Catalogue, variants, stock and orders",
    "Carrier integration and shipment tracking",
    "Technical SEO included from day one",
    "Full training for autonomous management",
    "No commission per sale — €0 per transaction",
    "No monthly platform fee",
    "Full migration from your current store",
    "Bulk catalogue import from Excel or CSV",
  ];

  const frIncludes = [
    "Design 100% personnalisé — pas un modèle",
    "Frontend React + backend WooCommerce",
    "Stripe, Apple Pay et Google Pay configurés",
    "Panneau de gestion WordPress",
    "Catalogue, variantes, stock et commandes",
    "Intégration transporteurs et suivi des expéditions",
    "SEO technique inclus dès le premier jour",
    "Formation complète pour la gestion autonome",
    "Aucune commission par vente — 0€ par transaction",
    "Aucun abonnement mensuel de plateforme",
    "Migration complète depuis votre boutique actuelle",
    "Import massif de catalogue depuis Excel ou CSV",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Online Store" : "Boutique en ligne" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Your online store," : "Votre boutique en ligne,"}
              <br />
              <span className="text-accent-400">
                {isEn ? "no commissions or fees" : "sans commissions ni frais"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Shopify charges a monthly fee and up to 2% per sale. We build your store with our own technology — you pay once and sell forever with no additional costs."
                : "Shopify facture des frais mensuels et jusqu'à 2% par vente. Nous construisons votre boutique avec notre propre technologie — vous payez une fois et vendez pour toujours sans coûts supplémentaires."}
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
            {isEn ? "Everything included in your store" : "Tout inclus dans votre boutique"}
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
          <ContactForm formType={`${lang}-online-store`} />
        </div>
      </section>
    </>
  );
}
