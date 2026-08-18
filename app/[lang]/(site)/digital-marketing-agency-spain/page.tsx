import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing Agency Spain — SEO, Google Ads & Web Design for Foreign Companies"
      : "Agence Marketing Digital Espagne — SEO, Google Ads & Sites Web pour Entreprises Étrangères",
    description: isEn
      ? "English-speaking digital marketing agency based in Spain. We help French and British companies operating in Spain grow online: SEO, Google Ads, GEO, web design. National coverage."
      : "Agence de marketing digital en Espagne parlant français. Nous aidons les entreprises françaises et britanniques opérant en Espagne à croître en ligne : SEO, Google Ads, GEO, création de sites. Couverture nationale.",
    alternates: alternatesFor(`/${lang}/digital-marketing-agency-spain/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-marketing-agency-spain/`,
    },
    openGraph: {
      title: isEn
        ? "Digital Marketing Agency Spain | Mkt Web 360"
        : "Agence Marketing Digital Espagne | Mkt Web 360",
      description: isEn
        ? "SEO, Google Ads, GEO and web design for foreign companies in Spain. English-speaking team. No sector exclusivity conflicts."
        : "SEO, Google Ads, GEO et création de sites pour entreprises étrangères en Espagne. Équipe francophone. Pas de conflits d'exclusivité sectorielle.",
      images: [{ url: "https://www.mktweb360.com/og-seo.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function DigitalMarketingAgencySpainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  const services = isEn
    ? [
        { title: "SEO in Spain", desc: "Rank on Google.es and reach Spanish-speaking customers. Local and national SEO strategies tailored to the Spanish market.", icon: "🔍" },
        { title: "Google Ads", desc: "Campaigns in Spanish, English and French. We manage your budget with no commission on ad spend — you only pay for management.", icon: "📢" },
        { title: "GEO — AI Visibility", desc: "Appear when potential clients ask ChatGPT, Perplexity or Gemini about your sector in Spain. The new SEO for AI search.", icon: "🤖" },
        { title: "Web Design", desc: "Professional websites in your language, optimised for Spanish SEO and conversion. Fast, mobile-first and built to generate leads.", icon: "🌐" },
        { title: "Google Business Profile", desc: "Appear on Google Maps when Spanish customers search for your services nearby. Setup, optimisation and monthly management.", icon: "📍" },
        { title: "Social Media", desc: "Consistent presence on LinkedIn, Instagram and Facebook in the language of your audience — Spanish, English or French.", icon: "📱" },
      ]
    : [
        { title: "SEO en Espagne", desc: "Positionnez-vous sur Google.es et atteignez des clients hispaniques. Stratégies SEO locales et nationales adaptées au marché espagnol.", icon: "🔍" },
        { title: "Google Ads", desc: "Campagnes en espagnol, anglais et français. Nous gérons votre budget sans commission sur les dépenses publicitaires.", icon: "📢" },
        { title: "GEO — Visibilité IA", desc: "Apparaissez quand vos clients potentiels demandent à ChatGPT, Perplexity ou Gemini sur votre secteur en Espagne.", icon: "🤖" },
        { title: "Création de sites web", desc: "Sites professionnels dans votre langue, optimisés pour le SEO espagnol et la conversion. Rapides, mobile-first et générateurs de leads.", icon: "🌐" },
        { title: "Google Business Profile", desc: "Apparaissez sur Google Maps quand des clients espagnols recherchent vos services. Configuration, optimisation et gestion mensuelle.", icon: "📍" },
        { title: "Réseaux sociaux", desc: "Présence cohérente sur LinkedIn, Instagram et Facebook dans la langue de votre audience — espagnol, anglais ou français.", icon: "📱" },
      ];

  const reasons = isEn
    ? [
        { title: "We speak your language", desc: "English and French-speaking team. No translation barriers, no misunderstandings. Your campaigns are built with full context." },
        { title: "We know the Spanish market", desc: "Based in Spain, working nationally. We know how Spanish customers search, what they trust, and what converts." },
        { title: "No commission on ad spend", desc: "Unlike most agencies, we charge a fixed management fee. Your entire Google Ads budget goes to Google — not to us." },
        { title: "AI-powered methods", desc: "We use proprietary AI protocols to work faster, analyse more data, and make better decisions than a traditional agency." },
        { title: "Sector exclusivity", desc: "We work with one company per sector per area. Your competitor will never be our client while we work with you." },
        { title: "Transparent reporting", desc: "Monthly reports in your language with real data: rankings, traffic, leads, conversions. No vanity metrics." },
      ]
    : [
        { title: "Nous parlons votre langue", desc: "Équipe anglophone et francophone. Pas de barrières de communication, pas de malentendus. Vos campagnes sont créées avec tout le contexte nécessaire." },
        { title: "Nous connaissons le marché espagnol", desc: "Basés en Espagne, travaillant nationalement. Nous savons comment les clients espagnols cherchent, ce à quoi ils font confiance, et ce qui convertit." },
        { title: "Pas de commission sur le budget publicitaire", desc: "Contrairement à la plupart des agences, nous facturons des honoraires de gestion fixes. Tout votre budget Google Ads va à Google." },
        { title: "Méthodes propulsées par l'IA", desc: "Nous utilisons des protocoles IA propriétaires pour travailler plus vite, analyser plus de données et prendre de meilleures décisions." },
        { title: "Exclusivité sectorielle", desc: "Nous travaillons avec une seule entreprise par secteur par zone. Votre concurrent ne sera jamais notre client pendant que nous travaillons avec vous." },
        { title: "Rapports transparents", desc: "Rapports mensuels dans votre langue avec des données réelles : positions, trafic, leads, conversions. Pas de métriques de vanité." },
      ];

  const faqs = isEn
    ? [
        { q: "Do you work with companies based outside Spain?", a: "Yes. We work with French and British companies that operate in Spain or want to reach Spanish-speaking customers, as well as companies based in Spain with international clients." },
        { q: "Can you manage campaigns in English or French?", a: "Absolutely. We create and manage Google Ads campaigns, social media content and SEO strategies in Spanish, English and French depending on your target audience." },
        { q: "How do you charge for Google Ads management?", a: "We charge a fixed monthly management fee based on the scope of work. We never take a percentage of your ad spend — your entire budget goes to Google." },
        { q: "How long before we see results?", a: "Google Ads campaigns can generate results from day one. SEO typically shows measurable progress within 3-6 months depending on competition and starting point. GEO results vary by sector." },
        { q: "Do you sign NDAs or exclusivity agreements?", a: "Yes. We offer sector exclusivity by default — we work with one company per sector per area. We can also sign NDAs if required by your legal team." },
      ]
    : [
        { q: "Travaillez-vous avec des entreprises basées hors d'Espagne ?", a: "Oui. Nous travaillons avec des entreprises françaises et britanniques qui opèrent en Espagne ou souhaitent atteindre des clients hispanophones, ainsi qu'avec des entreprises basées en Espagne ayant des clients internationaux." },
        { q: "Pouvez-vous gérer des campagnes en français ou en anglais ?", a: "Absolument. Nous créons et gérons des campagnes Google Ads, du contenu pour les réseaux sociaux et des stratégies SEO en espagnol, anglais et français selon votre audience cible." },
        { q: "Comment facturez-vous la gestion Google Ads ?", a: "Nous facturons des honoraires de gestion mensuels fixes basés sur l'étendue du travail. Nous ne prenons jamais de pourcentage sur vos dépenses publicitaires — tout votre budget va à Google." },
        { q: "Combien de temps avant de voir des résultats ?", a: "Les campagnes Google Ads peuvent générer des résultats dès le premier jour. Le SEO montre généralement des progrès mesurables dans les 3 à 6 mois selon la concurrence et le point de départ." },
        { q: "Signez-vous des NDA ou des accords d'exclusivité ?", a: "Oui. Nous offrons l'exclusivité sectorielle par défaut. Nous pouvons également signer des NDA si votre équipe juridique l'exige." },
      ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "Digital Marketing Agency Spain" : "Agence Marketing Digital Espagne" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {isEn
              ? "Digital Marketing Agency in Spain for Foreign Companies"
              : "Agence de Marketing Digital en Espagne pour Entreprises Étrangères"}
          </h1>
          <p className="text-xl text-primary-200 mb-8">
            {isEn
              ? "English and French-speaking team. SEO, Google Ads, GEO and web design. No commission on ad spend. Sector exclusivity."
              : "Équipe anglophone et francophone. SEO, Google Ads, GEO et création de sites. Sans commission sur le budget publicitaire. Exclusivité sectorielle."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">🇬🇧 English</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🇫🇷 Français</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🇪🇸 Español</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4 text-center">
            {isEn ? "Our Services for Foreign Companies in Spain" : "Nos Services pour Entreprises Étrangères en Espagne"}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {isEn
              ? "All services are available in English and French. We adapt our strategies to the Spanish market while communicating in your language."
              : "Tous les services sont disponibles en anglais et en français. Nous adaptons nos stratégies au marché espagnol tout en communiquant dans votre langue."}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-primary-700 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-12 text-center">
            {isEn ? "Why Choose Mkt Web 360?" : "Pourquoi Choisir Mkt Web 360 ?"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <div className="text-accent-500 text-2xl mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-primary-700 mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-600 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {(isEn
            ? [
                { value: "+10", label: "Years experience" },
                { value: "3", label: "Languages" },
                { value: "0%", label: "Commission on ad spend" },
                { value: "1", label: "Client per sector" },
              ]
            : [
                { value: "+10", label: "Ans d'expérience" },
                { value: "3", label: "Langues" },
                { value: "0%", label: "Commission sur budget" },
                { value: "1", label: "Client par secteur" },
              ]
          ).map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-accent-400">{s.value}</div>
              <div className="text-sm text-primary-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">
            {isEn ? "Frequently Asked Questions" : "Questions Fréquentes"}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            {isEn ? "Ready to Grow in Spain?" : "Prêt à Croître en Espagne ?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEn
              ? "Tell us about your project. We will respond in English within 24 hours with a personalised proposal."
              : "Parlez-nous de votre projet. Nous vous répondrons en français sous 24 heures avec une proposition personnalisée."}
          </p>
          <ContactForm formType={`${lang}-digital-marketing-agency-spain`} />
        </div>
      </section>
    </>
  );
}
