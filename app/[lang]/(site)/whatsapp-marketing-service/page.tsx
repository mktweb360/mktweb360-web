import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "WhatsApp Marketing for Businesses — 98% Open Rate | Mkt Web 360"
      : "WhatsApp Marketing pour Entreprises — 98% de Taux d'Ouverture | Mkt Web 360",
    description: isEn
      ? "WhatsApp Business API marketing service for businesses. 98% open rate, automated sequences and segmented campaigns to convert more customers."
      : "Service de marketing WhatsApp Business API pour entreprises. 98% de taux d'ouverture, séquences automatisées et campagnes segmentées pour convertir plus de clients.",
    alternates: alternatesFor(`/${lang}/whatsapp-marketing-service/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/whatsapp-marketing-service/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "WhatsApp Business API configuration",
        "Optimised business profile",
        "Product and service catalogue",
        "Automated responses and welcome messages",
        "Segmented broadcast campaigns",
        "Automated message sequences",
        "Lead tracking via WhatsApp",
        "Monthly metrics and conversion analysis",
      ]
    : [
        "Configuration de l'API WhatsApp Business",
        "Profil d'entreprise optimisé",
        "Catalogue de produits et services",
        "Réponses automatiques et messages de bienvenue",
        "Campagnes de diffusion segmentées",
        "Séquences de messages automatisées",
        "Suivi des leads via WhatsApp",
        "Analyse mensuelle des métriques et conversions",
      ];

  const metrics = isEn
    ? [
        { value: "98%", label: "open rate" },
        { value: "3x", label: "more conversions than email" },
        { value: "Instant", label: "response in minutes" },
        { value: "API", label: "official WhatsApp Business" },
      ]
    : [
        { value: "98%", label: "taux d'ouverture" },
        { value: "3x", label: "plus de conversions que l'email" },
        { value: "Immédiat", label: "réponse en minutes" },
        { value: "API", label: "WhatsApp Business officiel" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "WhatsApp Marketing" : "WhatsApp Marketing" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "The channel with" : "Le canal avec"}<br />
              <span className="text-accent-400">
                {isEn ? "98% open rate" : "98% de taux d'ouverture"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Email has a 20% open rate. WhatsApp has 98%. If you are not using WhatsApp to communicate with your customers, you are leaving conversations — and sales — on the table."
                : "L'email a un taux d'ouverture de 20%. WhatsApp a 98%. Si vous n'utilisez pas WhatsApp pour communiquer avec vos clients, vous laissez des conversations — et des ventes — de côté."}
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
          <ContactForm formType={`${lang}-whatsapp`} />
        </div>
      </section>
    </>
  );
}
