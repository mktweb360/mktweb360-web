import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Web Design for Businesses | Mkt Web 360"
      : "Création de Site Web Professionnel pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional web design and development for businesses. Fast, optimised websites built to convert visitors into customers. React + Next.js. Nationwide service."
      : "Création et développement de sites web professionnels pour les entreprises. Sites rapides et optimisés, conçus pour convertir les visiteurs en clients.",
    alternates: alternatesFor(`/${lang}/web-design/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design/`,
    },
  };
}

export default async function WebDesignPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "100% custom design — not a template",
    "React frontend + WordPress backend",
    "Mobile-first responsive design",
    "Technical SEO from day one",
    "Stripe, PayPal and Apple Pay integration",
    "Full training for autonomous management",
    "Post-delivery support included",
    "Core Web Vitals optimised",
  ];

  const frIncludes = [
    "Design 100% personnalisé — pas un modèle",
    "Frontend React + backend WordPress",
    "Design responsive mobile-first",
    "SEO technique dès le premier jour",
    "Intégration Stripe, PayPal et Apple Pay",
    "Formation complète pour la gestion autonome",
    "Support post-livraison inclus",
    "Core Web Vitals optimisés",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Web Design" : "Création Web" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Professional websites" : "Sites web professionnels"}
              <br />
              <span className="text-accent-400">
                {isEn ? "built to convert" : "conçus pour convertir"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "A beautiful website that doesn't sell is useless. We build websites focused on conversion, speed and SEO — so your website works for your business 24 hours a day."
                : "Un beau site web qui ne vend pas ne sert à rien. Nous créons des sites web axés sur la conversion, la vitesse et le SEO — pour que votre site travaille pour votre entreprise 24 heures sur 24."}
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
          <ContactForm formType={`${lang}-web-design`} />
        </div>
      </section>
    </>
  );
}
