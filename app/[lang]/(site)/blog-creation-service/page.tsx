import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Blog Creation for Businesses — Mkt Web 360"
      : "Création de Blog Professionnel pour Entreprises — Mkt Web 360",
    description: isEn
      ? "Professional blog creation service for businesses. SEO strategy, design, specialist-written articles and ongoing optimisation to generate leads without cost per click."
      : "Service de création de blog professionnel pour entreprises. Stratégie SEO, design, articles rédigés par des spécialistes et optimisation continue pour générer des leads sans coût par clic.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/blog-creation-service/` },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "Content strategy and keyword research",
        "SEO-optimised information architecture",
        "Design integrated in your website or standalone",
        "Articles written by specialists",
        "On-page optimisation of each publication",
        "Schema markup for rich snippets",
        "Monthly position and traffic report",
        "Training for autonomous management (optional)",
      ]
    : [
        "Stratégie de contenu et recherche de mots-clés",
        "Architecture de l'information optimisée pour le SEO",
        "Design intégré dans votre site ou autonome",
        "Articles rédigés par des spécialistes",
        "Optimisation on-page de chaque publication",
        "Balisage Schema pour les rich snippets",
        "Rapport mensuel de positions et de trafic",
        "Formation pour la gestion autonome (optionnel)",
      ];

  const metrics = isEn
    ? [
        { value: "Traffic", label: "constant organic" },
        { value: "SEO", label: "from the first article" },
        { value: "Authority", label: "in your sector" },
        { value: "Leads", label: "qualified without paying per click" },
      ]
    : [
        { value: "Trafic", label: "organique constant" },
        { value: "SEO", label: "dès le premier article" },
        { value: "Autorité", label: "dans votre secteur" },
        { value: "Leads", label: "qualifiés sans payer par clic" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Blog Creation" : "Création de Blog" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "A blog that works" : "Un blog qui travaille"}<br />
              <span className="text-accent-400">
                {isEn ? "for your business 24/7" : "pour votre entreprise 24h/24"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "A well-built blog is the most profitable digital asset a company can have. It generates constant organic traffic, positions your brand as a reference and converts readers into customers."
                : "Un blog bien construit est l'actif numérique le plus rentable qu'une entreprise puisse avoir. Il génère du trafic organique constant, positionne votre marque comme référence et convertit les lecteurs en clients."}
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
          <ContactForm formType={`${lang}-blog-creation`} />
        </div>
      </section>
    </>
  );
}
