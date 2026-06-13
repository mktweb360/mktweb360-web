import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "GEO — Generative Engine Optimization | Mkt Web 360"
      : "GEO — Optimisation pour Moteurs Génératifs | Mkt Web 360",
    description: isEn
      ? "Optimise your brand to appear in ChatGPT, Perplexity, Gemini and Claude responses. GEO: Generative Engine Optimization. The SEO of the AI era."
      : "Optimisez votre marque pour apparaître dans les réponses de ChatGPT, Perplexity, Gemini et Claude. GEO : Generative Engine Optimization. Le SEO de l'ère IA.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/geo-generative-engine-optimization/` },
  };
}

export default async function GeoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "AI visibility audit (ChatGPT, Perplexity, Gemini, Claude)",
    "Content optimisation for LLMs",
    "Advanced JSON-LD structured data",
    "llms.txt and AI bot signals configuration",
    "Authority and citation strategy",
    "Monthly AI appearance tracking report",
  ];

  const frIncludes = [
    "Audit de visibilité IA (ChatGPT, Perplexity, Gemini, Claude)",
    "Optimisation du contenu pour les LLMs",
    "Données structurées JSON-LD avancées",
    "Configuration llms.txt et signaux pour bots IA",
    "Stratégie d'autorité et de citations",
    "Rapport mensuel de suivi des apparitions IA",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "GEO" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "SEO is no longer enough." : "Le SEO ne suffit plus."}
              <br />
              <span className="text-accent-400">
                {isEn ? "Welcome to GEO." : "Bienvenue dans le GEO."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "More and more people ask ChatGPT, Perplexity or Gemini directly instead of searching on Google. If your brand doesn't appear in those responses, you're losing customers who will never reach your website."
                : "De plus en plus de personnes interrogent directement ChatGPT, Perplexity ou Gemini au lieu de rechercher sur Google. Si votre marque n'apparaît pas dans ces réponses, vous perdez des clients qui n'atteindront jamais votre site web."}
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
            {isEn ? "What's included in the GEO service" : "Ce qui est inclus dans le service GEO"}
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
          <ContactForm formType={`${lang}-geo`} />
        </div>
      </section>
    </>
  );
}
