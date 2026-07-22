import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Audit for Businesses — Complete Digital Diagnosis | Mkt Web 360"
      : "Audit Digital pour Entreprises — Diagnostic Numérique Complet | Mkt Web 360",
    description: isEn
      ? "Complete digital audit for businesses. SEO, speed, competition and tracking analysis with a detailed report and prioritised action plan."
      : "Audit digital complet pour entreprises. Analyse SEO, vitesse, concurrence et tracking avec rapport détaillé et plan d'action priorisé.",
    alternates: alternatesFor(`/${lang}/digital-audit/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-audit/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "Complete technical SEO audit",
        "Page speed and Core Web Vitals analysis",
        "Content and keyword gap analysis",
        "Competitor analysis",
        "Social media and Google Business Profile audit",
        "GA4 and tracking configuration review",
        "Detailed report with findings and recommendations",
        "Prioritised action plan: quick wins and strategic improvements",
      ]
    : [
        "Audit technique SEO complet",
        "Analyse de vitesse et Core Web Vitals",
        "Analyse de contenu et lacunes de mots-clés",
        "Analyse de la concurrence",
        "Audit des réseaux sociaux et Google Business Profile",
        "Révision de la configuration GA4 et du tracking",
        "Rapport détaillé avec constats et recommandations",
        "Plan d'action priorisé : gains rapides et améliorations stratégiques",
      ];

  const metrics = isEn
    ? [
        { value: "SEO", label: "technical audit" },
        { value: "Speed", label: "Core Web Vitals" },
        { value: "Competition", label: "analysis" },
        { value: "Report", label: "with action plan" },
      ]
    : [
        { value: "SEO", label: "audit technique" },
        { value: "Vitesse", label: "Core Web Vitals" },
        { value: "Concurrence", label: "analyse" },
        { value: "Rapport", label: "avec plan d'action" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Digital Audit" : "Audit Digital" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Complete digital audit" : "Audit digital complet"}<br />
              <span className="text-accent-400">
                {isEn ? "know exactly where you stand" : "sachez exactement où vous en êtes"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Before investing more in digital marketing, you need to know exactly what is working and what is not. Our digital audit gives you a complete diagnosis and a clear action plan."
                : "Avant d'investir davantage dans le marketing digital, vous devez savoir exactement ce qui fonctionne et ce qui ne fonctionne pas. Notre audit digital vous donne un diagnostic complet et un plan d'action clair."}
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
            {isEn ? "What's included in the audit" : "Ce qui est inclus dans l'audit"}
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
          <ContactForm formType={`${lang}-digital-audit`} />
        </div>
      </section>
    </>
  );
}
