import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Web Design Services for Businesses | Mkt Web 360"
      : "Services de Création de Sites Web Professionnels | Mkt Web 360",
    description: isEn
      ? "Professional web design and development for businesses. Fast, SEO-optimised websites built to convert visitors into customers."
      : "Création de sites web professionnels pour entreprises. Sites rapides, optimisés SEO et conçus pour convertir les visiteurs en clients.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/web-design-services/` },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "100% custom design — not a template",
        "React frontend + WordPress backend",
        "Mobile-first responsive design",
        "Technical SEO from day one",
        "Stripe, PayPal and Apple Pay integration",
        "Core Web Vitals optimised",
        "Full training for autonomous management",
        "Post-delivery support included",
      ]
    : [
        "Design 100% personnalisé — pas un modèle",
        "Frontend React + backend WordPress",
        "Design responsive mobile-first",
        "SEO technique dès le premier jour",
        "Intégration Stripe, PayPal et Apple Pay",
        "Core Web Vitals optimisés",
        "Formation complète pour la gestion autonome",
        "Support post-livraison inclus",
      ];

  const metrics = isEn
    ? [
        { value: "React", label: "Next.js technology" },
        { value: "SEO", label: "optimised from day one" },
        { value: "Fast", label: "Core Web Vitals" },
        { value: "National", label: "service across Spain" },
      ]
    : [
        { value: "React", label: "technologie Next.js" },
        { value: "SEO", label: "optimisé dès le premier jour" },
        { value: "Rapide", label: "Core Web Vitals" },
        { value: "National", label: "service en Espagne" },
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
              {isEn ? "Professional websites" : "Sites web professionnels"}<br />
              <span className="text-accent-400">
                {isEn ? "built to convert visitors" : "conçus pour convertir"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "A beautiful website that doesn't sell is useless. We build professional websites focused on conversion, speed and SEO — so your website works for your business 24 hours a day."
                : "Un beau site web qui ne vend pas ne sert à rien. Nous créons des sites web professionnels axés sur la conversion, la vitesse et le SEO — pour que votre site travaille pour votre entreprise 24h/24."}
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
            {isEn ? "What's included in your website" : "Ce qui est inclus dans votre site web"}
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
          <ContactForm formType={`${lang}-web-design-services`} />
        </div>
      </section>
    </>
  );
}
