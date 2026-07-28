import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO Web Positioning — Rank on Google"
      : "SEO Positionnement Web — Première page Google",
    description: isEn
      ? "Professional SEO service for businesses in Spain and abroad. Audits, keyword strategy and content that takes your website to the first page of Google."
      : "Service SEO professionnel pour les entreprises en Espagne et à l'étranger. Audits, stratégie de mots-clés et contenu pour hisser votre site en première page de Google.",
    alternates: alternatesFor(`/${lang}/seo-web-positioning/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-web-positioning/`,
    },
    openGraph: {
      title: isEn
        ? "SEO Web Positioning — Rank on Google | Mkt Web 360"
        : "SEO Positionnement Web — Première page Google | Mkt Web 360",
      description: isEn
        ? "Rank your website on Google with proven SEO strategies. Lasting results. National service."
        : "Positionnez votre site sur Google avec des stratégies SEO éprouvées. Résultats durables. Service national.",
      url: `https://www.mktweb360.com/${lang}/seo-web-positioning/`,
    },
  };
}

const FAQS_EN = [
  { q: "What does your SEO service include?", a: "Full initial technical audit, keyword research, on-page optimisation, creation of optimised content, ethical link building, monthly position tracking and results reports." },
  { q: "How long does it take to see SEO results?", a: "First position movements usually appear within 2 to 4 months. For consolidated results, expect 6 to 12 months, although this depends on competition and the initial state of the website." },
  { q: "Do you work with Google algorithm updates?", a: "Yes, we closely follow all Google algorithm updates and adapt strategies to always stay within best practices (white hat SEO)." },
  { q: "Do you do local and national SEO?", a: "We do both. Local SEO is ideal for businesses with a physical presence that want to attract customers from their area. National SEO targets keywords with broader geographical reach." },
  { q: "How do you measure results?", a: "We monitor Google positions, organic traffic, conversions attributed to SEO and brand visibility. You receive a detailed monthly report with progress and next steps." },
  { q: "What is the difference between SEO and GEO?", a: "SEO (Search Engine Optimisation) optimises your website to appear in Google results. GEO (Generative Engine Optimisation) optimises your presence to appear in ChatGPT, Perplexity, Gemini and Claude responses. They are complementary — together they give you complete visibility across all current and future search channels." },
];

const FAQS_FR = [
  { q: "Qu'est-ce que votre service SEO comprend ?", a: "Audit technique initial complet, recherche de mots-clés, optimisation on-page, création de contenu optimisé, link building éthique, suivi mensuel des positions et rapports de résultats." },
  { q: "Combien de temps faut-il pour voir des résultats SEO ?", a: "Les premiers mouvements de positions apparaissent généralement entre 2 et 4 mois. Pour des résultats consolidés, comptez entre 6 et 12 mois, selon la concurrence et l'état initial du site." },
  { q: "Travaillez-vous avec les mises à jour de l'algorithme Google ?", a: "Oui, nous suivons de près toutes les mises à jour de l'algorithme Google et adaptons les stratégies pour toujours rester dans les bonnes pratiques (SEO white hat)." },
  { q: "Faites-vous du SEO local et national ?", a: "Nous faisons les deux. Le SEO local est idéal pour les entreprises avec une présence physique qui souhaitent attirer des clients de leur zone. Le SEO national cible des mots-clés à portée géographique plus large." },
  { q: "Comment mesurez-vous les résultats ?", a: "Nous surveillons les positions Google, le trafic organique, les conversions attribuées au SEO et la visibilité de la marque. Vous recevez un rapport mensuel détaillé avec l'évolution et les prochaines étapes." },
  { q: "Quelle est la différence entre SEO et GEO ?", a: "Le SEO (Search Engine Optimisation) optimise votre site pour apparaître dans les résultats Google. Le GEO (Generative Engine Optimisation) optimise votre présence pour apparaître dans les réponses de ChatGPT, Perplexity, Gemini et Claude. Ils sont complémentaires — ensemble ils vous donnent une visibilité complète sur tous les canaux de recherche actuels et futurs." },
];

const METHODOLOGY_EN = [
  { step: "01", title: "Technical SEO audit", desc: "Complete analysis of your website: speed, indexing, technical errors, architecture, backlinks and competition." },
  { step: "02", title: "Keyword research", desc: "We identify the keywords with the highest traffic and conversion potential for your sector and area." },
  { step: "03", title: "On-page optimisation", desc: "We improve titles, metas, content, URL structure, internal links and structured data." },
  { step: "04", title: "SEO content", desc: "Articles, service pages and landing pages optimised to rank strategic keywords." },
  { step: "05", title: "Ethical link building", desc: "Building authority with natural links from relevant, quality sites in your sector." },
  { step: "06", title: "Tracking and reports", desc: "We monitor positions, traffic and conversions. Monthly report with progress and next steps." },
];

const METHODOLOGY_FR = [
  { step: "01", title: "Audit technique SEO", desc: "Analyse complète de votre site : vitesse, indexation, erreurs techniques, architecture, backlinks et concurrence." },
  { step: "02", title: "Recherche de mots-clés", desc: "Nous identifions les mots-clés avec le plus grand potentiel de trafic et de conversion pour votre secteur et votre zone." },
  { step: "03", title: "Optimisation on-page", desc: "Nous améliorons les titres, métas, contenus, structure des URL, liens internes et données structurées." },
  { step: "04", title: "Contenu SEO", desc: "Articles, pages de service et landing pages optimisés pour positionner des mots-clés stratégiques." },
  { step: "05", title: "Link building éthique", desc: "Construction d'autorité avec des liens naturels provenant de sites pertinents et de qualité dans votre secteur." },
  { step: "06", title: "Suivi et rapports", desc: "Nous surveillons les positions, le trafic et les conversions. Rapport mensuel avec évolution et prochaines étapes." },
];

export default async function SeoWebPositioningPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const FAQS = isEn ? FAQS_EN : FAQS_FR;
  const METHODOLOGY = isEn ? METHODOLOGY_EN : METHODOLOGY_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "SEO Web Positioning" : "Positionnement Web SEO",
    serviceType: "Search Engine Optimization",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Professional organic SEO web positioning service for businesses. Technical audits, keyword strategy, on-page optimisation and link building."
      : "Service professionnel de positionnement web SEO organique pour les entreprises. Audits techniques, stratégie de mots-clés, optimisation on-page et link building.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/seo-web-positioning/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Accueil", item: `https://www.mktweb360.com/${lang}/` },
      { "@type": "ListItem", position: 2, name: isEn ? "SEO Positioning" : "Positionnement SEO", item: `https://www.mktweb360.com/${lang}/seo-web-positioning/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "SEO Positioning" : "Positionnement SEO" },
            ]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "First page of Google," : "Première page de Google,"}
              <br />
              <span className="text-accent-400">
                {isEn ? "clients that find you" : "des clients qui vous trouvent"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "The vast majority of online experiences start on a search engine. If you don't appear on the first page, your competition takes those customers every day. SEO is the investment with the highest long-term return."
                : "La grande majorité des expériences en ligne commencent sur un moteur de recherche. Si vous n'apparaissez pas en première page, vos concurrents récupèrent ces clients chaque jour. Le SEO est l'investissement avec le meilleur retour à long terme."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#audit" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                {isEn ? "Free SEO audit" : "Audit SEO gratuit"}
              </a>
              <a href="#methodology" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                {isEn ? "See methodology" : "Voir la méthodologie"}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-seo.jpg" alt={isEn ? "SEO web positioning" : "Positionnement web SEO"} className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "#1 channel", label: "search engines start the digital journey" },
                { value: "SEO + GEO", label: "visibility on Google and in AI" },
                { value: "Lasting", label: "results that hold" },
                { value: "National", label: "and local SEO" },
              ]
            : [
                { value: "#1 canal", label: "moteurs de recherche, point de départ digital" },
                { value: "SEO + GEO", label: "visibilité sur Google et dans l'IA" },
                { value: "Durable", label: "résultats qui se maintiennent" },
                { value: "National", label: "et SEO local" },
              ]
          ).map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO vs Paid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "SEO vs Paid advertising" : "SEO vs Publicité payante"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Google Ads generates immediate traffic but when you stop paying, it disappears. SEO builds a solid foundation that generates constant traffic month after month, with no additional cost per visit."
                  : "Google Ads génère du trafic immédiat mais quand vous arrêtez de payer, il disparaît. Le SEO construit une base solide qui génère un trafic constant mois après mois, sans coût supplémentaire par visite."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "A well-positioned website is a business's most profitable digital asset. After 12 months of work, the cost per organic lead is significantly lower than any paid channel."
                  : "Un site web bien positionné est l'actif numérique le plus rentable d'une entreprise. À 12 mois de travail, le coût par lead organique est significativement inférieur à n'importe quel canal payant."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(isEn
                  ? [
                      { label: "Google Ads", sub: "You pay per click. No budget, no traffic.", bad: true },
                      { label: "SEO", sub: "Invest once. Traffic grows over time.", bad: false },
                    ]
                  : [
                      { label: "Google Ads", sub: "Vous payez par clic. Sans budget, sans trafic.", bad: true },
                      { label: "SEO", sub: "Investissez une fois. Le trafic grandit avec le temps.", bad: false },
                    ]
                ).map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "What's included in the service?" : "Qu'est-ce qui est inclus dans le service ?"}
              </h3>
              <ul className="space-y-3">
                {(isEn
                  ? [
                      "Full technical SEO audit",
                      "Keyword research by sector",
                      "On-page optimisation of all key pages",
                      "Monthly SEO content creation",
                      "Ethical and natural link building",
                      "Weekly position tracking",
                      "Monthly report with metrics and next steps",
                      "Google Search Console and GA4 integration",
                    ]
                  : [
                      "Audit technique SEO complet",
                      "Recherche de mots-clés par secteur",
                      "Optimisation on-page de toutes les pages clés",
                      "Création de contenu SEO mensuel",
                      "Link building éthique et naturel",
                      "Suivi hebdomadaire des positions",
                      "Rapport mensuel avec métriques et prochaines étapes",
                      "Intégration Google Search Console et GA4",
                    ]
                ).map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When does SEO make sense */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            {isEn ? "When does it make sense to invest in SEO?" : "Quand est-il judicieux d'investir dans le SEO ?"}
          </h2>
          <div className="space-y-4 text-gray-600">
            {isEn ? (
              <>
                <p>SEO is not the right answer for every business at every moment. It makes sense when the business has a time horizon of at least 6–12 months, when there is real search volume for the products or services offered, and when the goal is to build a sustainable acquisition channel that does not depend on continuous advertising spend.</p>
                <p>It does not make sense as a sole channel when results are needed in weeks, when the product is completely new with no existing search demand, or when the budget does not allow maintaining the work for the time needed to see results. In those cases, Google Ads is the right tool for the short term while SEO builds for the long term.</p>
                <p>For most SMEs and freelancers in Spain, the most profitable combination is to start with a Google Ads campaign to generate immediate traffic and sales, while SEO works in parallel to progressively reduce dependence on advertising spend. After 12–18 months, the organic channel typically surpasses paid in volume of qualified traffic and cost per acquired customer.</p>
              </>
            ) : (
              <>
                <p>Le SEO n'est pas la bonne réponse pour toutes les entreprises à tout moment. Il est pertinent quand l'entreprise dispose d'un horizon temporel d'au moins 6 à 12 mois, quand il existe un volume de recherche réel pour les produits ou services proposés, et quand l'objectif est de construire un canal d'acquisition durable qui ne dépend pas d'un budget publicitaire continu.</p>
                <p>Il n'a pas de sens comme canal unique quand des résultats sont nécessaires en quelques semaines, quand le produit est complètement nouveau sans demande de recherche existante, ou quand le budget ne permet pas de maintenir le travail pendant le temps nécessaire pour voir des résultats. Dans ces cas, Google Ads est le bon outil à court terme pendant que le SEO construit à long terme.</p>
                <p>Pour la plupart des PME et indépendants en Espagne, la combinaison la plus rentable est de démarrer avec une campagne Google Ads pour générer du trafic et des ventes immédiats, pendant que le SEO travaille en parallèle pour réduire progressivement la dépendance au budget publicitaire. Après 12 à 18 mois, le canal organique dépasse généralement le payant en volume de trafic qualifié et en coût par client acquis.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Our SEO methodology" : "Notre méthodologie SEO"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "A proven, transparent process focused on real results."
                : "Un processus éprouvé, transparent et orienté vers des résultats réels."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METHODOLOGY.map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{item.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs national SEO */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            {isEn ? "Local SEO and national SEO: two distinct strategies" : "SEO local et SEO national : deux stratégies distinctes"}
          </h2>
          <div className="space-y-4 text-gray-600">
            {isEn ? (
              <>
                <p>Local SEO and national SEO respond to different search intentions and require different strategies. Neither is better than the other — it is a matter of what type of customer searches for your service and from where.</p>
                <p>Local SEO is the right strategy for businesses that serve customers in a specific geographical area: clinics, offices, physical shops, workshops, restaurants, academies, installers, renovators. In this case, the searches that matter include a local modifier — "plumber Toledo", "accountant Madrid centre", "dental clinic Salamanca" — or are made from a mobile device with location activated. The most important channel for local SEO is Google Business Profile: the listing that appears on the map when someone searches for your service nearby.</p>
                <p>National SEO targets keywords without a geographical modifier: "digital marketing agency", "management software for SMEs", "sustainable fashion online store". It competes in a broader and more competitive universe, requiring greater domain authority, more content and more time to see significant results.</p>
                <p>At Mkt Web 360 we work in both modes. For businesses with a physical presence in Toledo and Castilla-La Mancha, local SEO is generally the investment with the highest short-term return: less competition, searches with high purchase intent, and visible results in 2–4 months instead of 6–12.</p>
              </>
            ) : (
              <>
                <p>Le SEO local et le SEO national répondent à des intentions de recherche différentes et nécessitent des stratégies distinctes. L'un n'est pas meilleur que l'autre — c'est une question de quel type de client recherche votre service et d'où.</p>
                <p>Le SEO local est la bonne stratégie pour les entreprises qui servent des clients dans une zone géographique spécifique : cliniques, cabinets, boutiques physiques, ateliers, restaurants, académies, installateurs, rénovateurs. Dans ce cas, les recherches qui comptent incluent un modificateur local — "plombier Toulouse", "comptable Lyon centre", "cabinet dentaire Bordeaux" — ou sont effectuées depuis un appareil mobile avec la localisation activée. Le canal le plus important pour le SEO local est Google Business Profile : la fiche qui apparaît sur la carte quand quelqu'un recherche votre service à proximité.</p>
                <p>Le SEO national cible des mots-clés sans modificateur géographique : "agence de marketing digital", "logiciel de gestion pour PME", "boutique en ligne de mode durable". Il est en concurrence dans un univers plus large et plus compétitif, ce qui nécessite une plus grande autorité de domaine, plus de contenu et plus de temps pour voir des résultats significatifs.</p>
                <p>Chez Mkt Web 360, nous travaillons dans les deux modes. Pour les entreprises ayant une présence physique en Espagne, le SEO local est généralement l'investissement avec le meilleur retour à court terme : moins de concurrence, des recherches avec une forte intention d'achat, et des résultats visibles en 2 à 4 mois au lieu de 6 à 12.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* GEO differentiator */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                {isEn ? "New" : "Nouveau"}
              </span>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">
                {isEn
                  ? "SEO + GEO: complete visibility in the AI era"
                  : "SEO + GEO : visibilité complète à l'ère de l'IA"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "SEO positions you on Google. GEO positions you on ChatGPT, Perplexity and Gemini. More and more people search directly in AI — if your brand doesn't appear in those responses, you're losing customers who will never reach Google."
                  : "Le SEO vous positionne sur Google. Le GEO vous positionne sur ChatGPT, Perplexity et Gemini. De plus en plus de personnes effectuent leurs recherches directement sur l'IA — si votre marque n'apparaît pas dans ces réponses, vous perdez des clients qui n'atteindront jamais Google."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "At Mkt Web 360 we are pioneers in GEO in Spain. Our SEO services already include the technical foundation needed for AI visibility: structured schemas, llms.txt, LLM-optimised content architecture and semantic authority strategy."
                  : "Chez Mkt Web 360, nous sommes pionniers en GEO en Espagne. Nos services SEO incluent déjà la base technique nécessaire pour la visibilité dans l'IA : schémas structurés, llms.txt, architecture de contenu optimisée pour les LLM et stratégie d'autorité sémantique."}
              </p>
              <Link href={`/${lang}/geo-generative-engine-optimization/`} className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                {isEn ? "Discover the GEO service →" : "Découvrir le service GEO →"}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { channel: "Google Search", tool: "SEO", color: "bg-primary-600" },
                { channel: "ChatGPT", tool: "GEO", color: "bg-accent-500" },
                { channel: "Google Maps", tool: isEn ? "Local SEO" : "SEO Local", color: "bg-primary-600" },
                { channel: "Perplexity", tool: "GEO", color: "bg-accent-500" },
                { channel: "Bing", tool: "SEO", color: "bg-primary-600" },
                { channel: "Gemini", tool: "GEO", color: "bg-accent-500" },
              ].map((c) => (
                <div key={c.channel} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-gray-700">{c.channel}</span>
                  <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${c.color}`}>{c.tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What SEO does not include */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            {isEn
              ? "What SEO does not include (and why it matters)"
              : "Ce que le SEO n'inclut pas (et pourquoi c'est important de le savoir)"}
          </h2>
          <div className="space-y-4 text-gray-600">
            {isEn ? (
              <>
                <p>Organic SEO positions your website in Google search results. It does not include creating social media content, managing paid advertising, graphic design for campaigns, or managing your online reputation beyond actions directly linked to positioning.</p>
                <p>It also does not guarantee specific positions or exact result dates. Any agency that guarantees "first position on Google in X weeks" is selling something it cannot deliver — nobody controls Google's algorithm.</p>
                <p>What we do guarantee: rigorous technical and strategic work, full transparency in monthly reports, and a methodology consistent with Google's guidelines that protects your domain from penalties. Results depend on factors we control — quality of work — and factors we do not: competition, algorithm updates, Google's indexing speed. If after 6 months of work there is no observable movement in the target keyword positions, we review the strategy together and adjust the approach.</p>
              </>
            ) : (
              <>
                <p>Le SEO organique positionne votre site web dans les résultats de recherche Google. Il n'inclut pas la création de contenu pour les réseaux sociaux, la gestion de la publicité payante, le design graphique pour les campagnes, ni la gestion de votre réputation en ligne au-delà des actions directement liées au positionnement.</p>
                <p>Il ne garantit pas non plus des positions spécifiques ni des dates exactes de résultats. Toute agence qui garantit "première position sur Google en X semaines" vend quelque chose qu'elle ne peut pas tenir — personne ne contrôle l'algorithme de Google.</p>
                <p>Ce que nous garantissons : un travail technique et stratégique rigoureux, une transparence totale dans les rapports mensuels, et une méthodologie cohérente avec les directives de Google qui protège votre domaine des pénalisations. Les résultats dépendent de facteurs que nous contrôlons — qualité du travail — et de facteurs que nous ne contrôlons pas : concurrence, mises à jour de l'algorithme, vitesse d'indexation de Google. Si après 6 mois de travail il n'y a pas de mouvement observable dans les positions des mots-clés cibles, nous révisons la stratégie ensemble et ajustons l'approche.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions about SEO" : "Questions fréquentes sur le SEO"}
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AI badge */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">
              {isEn
                ? "Senior team experience. AI precision."
                : "L'expérience d'une équipe senior. La précision de l'intelligence artificielle."}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {isEn
                ? "Own AI protocols applied to each project for faster, more precise results."
                : "Protocoles IA propriétaires appliqués à chaque projet pour des résultats plus rapides et plus précis."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="audit" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Free SEO audit" : "Audit SEO gratuit"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "We analyse your website with no commitment and tell you exactly what is holding back your ranking."
                : "Nous analysons votre site sans engagement et vous disons exactement ce qui freine votre positionnement."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-seo`} />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title={isEn ? "More about SEO and positioning" : "Plus sur le SEO et le positionnement"} />
    </>
  );
}
