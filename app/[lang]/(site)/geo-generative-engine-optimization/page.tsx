import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

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
    alternates: alternatesFor(`/${lang}/geo-generative-engine-optimization/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/geo-generative-engine-optimization/`,
    },
    openGraph: {
      title: isEn
        ? "GEO — Generative Engine Optimization | Mkt Web 360"
        : "GEO — Optimisation pour Moteurs Génératifs | Mkt Web 360",
      description: isEn
        ? "Optimise your presence so AI engines recommend you when your customers ask. ChatGPT, Perplexity, Gemini, Claude."
        : "Optimisez votre présence pour que les moteurs IA vous recommandent quand vos clients posent des questions. ChatGPT, Perplexity, Gemini, Claude.",
      url: `https://www.mktweb360.com/${lang}/geo-generative-engine-optimization/`,
    },
  };
}

const GEO_SERVICES_EN = [
  {
    title: "AI visibility audit",
    desc: "We analyse how ChatGPT, Perplexity, Gemini and Claude mention (or fail to mention) you when someone searches for services like yours. The starting point that defines the strategy.",
  },
  {
    title: "Content optimisation for LLMs",
    desc: "We rewrite and structure your key content so that language models process, understand and cite it with greater probability. Format, semantic density and authority.",
  },
  {
    title: "llms.txt implementation",
    desc: "We create and maintain your llms.txt and llms-full.txt files: the emerging standard that tells LLMs what information to index and how to understand your business.",
  },
  {
    title: "Semantic authority strategy",
    desc: "We build a map of entities and semantic relationships that reinforce your positioning as a reference in your sector before generative AI models.",
  },
  {
    title: "Citable and structured content",
    desc: "We develop content pieces — statistics, guides, definitions — specifically designed to be cited by AI assistants as reference sources.",
  },
  {
    title: "Monthly AI mention tracking",
    desc: "We monitor your visibility in the main AI engines, track mentions, compare with competitors and adjust the strategy based on data.",
  },
];

const GEO_SERVICES_FR = [
  {
    title: "Audit de visibilité IA",
    desc: "Nous analysons comment ChatGPT, Perplexity, Gemini et Claude vous mentionnent (ou ne vous mentionnent pas) quand quelqu'un recherche des services comme les vôtres. Le point de départ qui définit la stratégie.",
  },
  {
    title: "Optimisation du contenu pour les LLMs",
    desc: "Nous réécrivons et structurons vos contenus clés pour que les modèles de langage les traitent, les comprennent et les citent avec une plus grande probabilité. Format, densité sémantique et autorité.",
  },
  {
    title: "Implémentation de llms.txt",
    desc: "Nous créons et maintenons vos fichiers llms.txt et llms-full.txt : le standard émergent qui indique aux LLMs quelles informations indexer et comment comprendre votre entreprise.",
  },
  {
    title: "Stratégie d'autorité sémantique",
    desc: "Nous construisons une carte d'entités et de relations sémantiques qui renforcent votre positionnement comme référence dans votre secteur auprès des modèles d'IA générative.",
  },
  {
    title: "Contenu citable et structuré",
    desc: "Nous développons des pièces de contenu — statistiques, guides, définitions — spécifiquement conçues pour être citées par les assistants IA comme sources de référence.",
  },
  {
    title: "Suivi mensuel des mentions IA",
    desc: "Nous surveillons votre visibilité dans les principaux moteurs IA, suivons les mentions, comparons avec les concurrents et ajustons la stratégie selon les données.",
  },
];

const PROCESS_EN = [
  {
    num: "01",
    title: "AI visibility audit",
    desc: "We check how your brand and services appear in ChatGPT, Perplexity, Gemini and Claude. We identify whether you appear, how often, in what context and what the models say about you or your sector.",
  },
  {
    num: "02",
    title: "LLM content optimisation",
    desc: "We rewrite or expand the content of key pages so that it clearly answers the questions users ask AI assistants. Natural prose, verifiable data, thematic authority.",
  },
  {
    num: "03",
    title: "Technical implementation",
    desc: "We configure llms.txt and llms-full.txt with structured information about your business and services. We implement advanced schema markup and ensure LLM crawlers have correct access to your content.",
  },
  {
    num: "04",
    title: "Monthly tracking",
    desc: "We monitor your brand visibility in the main generative engines. Each month you receive a report on how you appear, what has changed and what actions we are taking to improve.",
  },
];

const PROCESS_FR = [
  {
    num: "01",
    title: "Audit de visibilité IA",
    desc: "Nous vérifions comment votre marque et vos services apparaissent dans ChatGPT, Perplexity, Gemini et Claude. Nous identifions si vous apparaissez, à quelle fréquence, dans quel contexte et ce que les modèles disent de vous ou de votre secteur.",
  },
  {
    num: "02",
    title: "Optimisation du contenu pour les LLMs",
    desc: "Nous réécrivons ou développons le contenu des pages clés pour qu'il réponde clairement aux questions que les utilisateurs posent aux assistants IA. Prose naturelle, données vérifiables, autorité thématique.",
  },
  {
    num: "03",
    title: "Implémentation technique",
    desc: "Nous configurons llms.txt et llms-full.txt avec les informations structurées de votre entreprise et services. Nous implémentons un schema markup avancé et assurons que les crawlers LLMs ont un accès correct à votre contenu.",
  },
  {
    num: "04",
    title: "Suivi mensuel",
    desc: "Nous surveillons la visibilité de votre marque dans les principaux moteurs génératifs. Chaque mois vous recevez un rapport sur comment vous apparaissez, ce qui a changé et les actions que nous prenons pour améliorer.",
  },
];

const FAQS_EN = [
  {
    q: "Does GEO replace SEO?",
    a: "No — they are complementary. SEO remains essential for capturing traffic from Google, which represents the majority of current search volume. GEO adds visibility in the fastest-growing channel: AI assistants. The strongest strategy works both channels simultaneously.",
  },
  {
    q: "How long does it take to see the impact of GEO?",
    a: "Technical changes such as llms.txt are implemented within days. The improvement in how frequently AI models mention your brand depends on your content authority and may take between 2 and 4 months to become perceptible. It is a channel under construction — those who start earlier will have an advantage.",
  },
  {
    q: "How is AI visibility measured?",
    a: "We make periodic queries to the main LLMs with the questions a potential customer of yours would ask and record whether you appear, how you appear and what is said. It is an evolving methodology because the sector is very new, but it already allows us to detect clear trends and opportunities.",
  },
  {
    q: "Does GEO work for any sector?",
    a: "Yes, although the impact varies according to the volume of conversational searches in your sector. Professional services, health, technology, training and digital marketing are the sectors where GEO has the greatest immediate impact. For more local or niche sectors, the opportunity lies in positioning yourself before the competition discovers it.",
  },
];

const FAQS_FR = [
  {
    q: "Le GEO remplace-t-il le SEO ?",
    a: "Non — ils sont complémentaires. Le SEO reste essentiel pour capter du trafic de Google, qui représente la majorité du volume de recherche actuel. Le GEO ajoute de la visibilité dans le canal qui croît le plus rapidement : les assistants IA. La stratégie la plus solide travaille les deux canaux simultanément.",
  },
  {
    q: "Combien de temps faut-il pour voir l'impact du GEO ?",
    a: "Les changements techniques comme llms.txt sont implémentés en quelques jours. L'amélioration de la fréquence à laquelle les modèles IA mentionnent votre marque dépend de l'autorité de votre contenu et peut prendre entre 2 et 4 mois pour être perceptible. C'est un canal en construction — ceux qui commencent plus tôt auront un avantage.",
  },
  {
    q: "Comment mesure-t-on la visibilité dans l'IA ?",
    a: "Nous effectuons des requêtes périodiques aux principaux LLMs avec les questions que poserait un client potentiel et enregistrons si vous apparaissez, comment vous apparaissez et ce qui est dit. C'est une méthodologie en évolution car le secteur est très nouveau, mais elle permet déjà de détecter des tendances et des opportunités claires.",
  },
  {
    q: "Le GEO fonctionne-t-il pour tous les secteurs ?",
    a: "Oui, bien que l'impact varie selon le volume de recherches conversationnelles dans votre secteur. Les services professionnels, la santé, la technologie, la formation et le marketing digital sont les secteurs où le GEO a le plus grand impact immédiat. Pour les secteurs plus locaux ou de niche, l'opportunité réside dans le positionnement avant que la concurrence ne le découvre.",
  },
];

export default async function GeoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const GEO_SERVICES = isEn ? GEO_SERVICES_EN : GEO_SERVICES_FR;
  const PROCESS = isEn ? PROCESS_EN : PROCESS_FR;
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GEO — Generative Engine Optimization",
    serviceType: "Generative Engine Optimization",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Positioning in generative search engines: ChatGPT, Perplexity, Gemini and Claude. Content optimisation for LLMs, llms.txt implementation and semantic authority strategy."
      : "Positionnement dans les moteurs de recherche génératifs : ChatGPT, Perplexity, Gemini et Claude. Optimisation du contenu pour les LLMs, implémentation de llms.txt et stratégie d'autorité sémantique.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/geo-generative-engine-optimization/`,
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
      { "@type": "ListItem", position: 2, name: "GEO", item: `https://www.mktweb360.com/${lang}/geo-generative-engine-optimization/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "GEO" },
          ]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {isEn ? "New service" : "Nouveau service"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEn
                ? "Your customers no longer only search on Google."
                : "Vos clients ne cherchent plus seulement sur Google."}
              <br />
              <span className="text-accent-400">
                {isEn ? "Now they ask AI." : "Maintenant, ils interrogent l'IA."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed italic">
              {isEn
                ? "Do you appear when someone searches for you on ChatGPT, Perplexity or Gemini?"
                : "Apparaissez-vous quand on vous cherche sur ChatGPT, Perplexity ou Gemini ?"}
            </p>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              {isEn
                ? "GEO (Generative Engine Optimization) is the discipline that optimises your digital presence so that AI search engines recommend you when a user asks about services like yours. It is the natural complement to traditional SEO in the new era of search."
                : "Le GEO (Generative Engine Optimization) est la discipline qui optimise votre présence digitale pour que les moteurs de recherche IA vous recommandent quand un utilisateur pose des questions sur des services comme les vôtres. C'est le complément naturel au SEO traditionnel dans la nouvelle ère de la recherche."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                {isEn ? "I want to appear in AI" : "Je veux apparaître dans l'IA"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "ChatGPT", label: "800M+ weekly users" },
                { value: "Perplexity", label: "fastest-growing AI search" },
                { value: "Gemini", label: "integrated in Google Search" },
                { value: "Claude", label: "Anthropic AI assistant" },
              ]
            : [
                { value: "ChatGPT", label: "+800M utilisateurs hebdomadaires" },
                { value: "Perplexity", label: "moteur IA à la plus forte croissance" },
                { value: "Gemini", label: "intégré dans Google Search" },
                { value: "Claude", label: "assistant IA d'Anthropic" },
              ]
          ).map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO vs GEO comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "What is GEO and why does it matter now?" : "Qu'est-ce que le GEO et pourquoi est-il important maintenant ?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "Search behaviour is changing. Millions of people already consult AI assistants before visiting a website."
                : "Le comportement de recherche est en train de changer. Des millions de personnes consultent déjà des assistants IA avant de visiter un site web."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-primary-600 text-lg mb-4">
                {isEn ? "Traditional SEO" : "SEO traditionnel"}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {(isEn
                  ? [
                      "Positioning in Google search results",
                      "User clicks and visits your website",
                      "Optimisation for crawling algorithms",
                      "Keywords, backlinks, page speed",
                      "Metrics: positions, organic traffic",
                    ]
                  : [
                      "Positionnement dans les résultats de recherche Google",
                      "L'utilisateur clique et visite votre site web",
                      "Optimisation pour les algorithmes de crawl",
                      "Mots-clés, backlinks, vitesse de chargement",
                      "Métriques : positions, trafic organique",
                    ]
                ).map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400 font-bold shrink-0 mt-0.5">→</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-accent-400 text-lg mb-4">GEO — AI Search</h3>
              <ul className="space-y-3 text-sm text-primary-100">
                {(isEn
                  ? [
                      "Visibility in ChatGPT, Perplexity, Gemini responses",
                      "The AI assistant recommends you directly",
                      "Optimisation for language models (LLMs)",
                      "Semantic authority, citable content, llms.txt",
                      "Metrics: AI mentions, generative share of voice",
                    ]
                  : [
                      "Visibilité dans les réponses de ChatGPT, Perplexity, Gemini",
                      "L'assistant IA vous recommande directement",
                      "Optimisation pour les modèles de langage (LLMs)",
                      "Autorité sémantique, contenu citable, llms.txt",
                      "Métriques : mentions IA, part de voix générative",
                    ]
                ).map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GEO services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "What the GEO service includes" : "Ce qu'inclut le service GEO"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "A complete approach so that AI engines know, understand and recommend you."
                : "Une approche complète pour que les moteurs IA vous connaissent, vous comprennent et vous recommandent."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEO_SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                </div>
                <h3 className="font-bold text-primary-600 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Why GEO is the next major shift in digital acquisition"
              : "Pourquoi le GEO est le prochain grand changement dans l'acquisition digitale"}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {isEn ? (
              <>
                <p>Traditional SEO optimises your presence to appear on Google. But user behaviour is changing: more and more people search directly on ChatGPT, Perplexity, Claude or Gemini and make decisions based on what these systems respond — without ever reaching Google. If your business does not appear in those responses, you do not exist for that segment of users.</p>
                <p>GEO — Generative Engine Optimization — is the discipline that optimises your digital presence so that language models recommend you when a user asks about services like yours. It is not about technical tricks or deceiving AI. It is about making your content sufficiently clear, structured and authoritative for LLMs to consider it a relevant source.</p>
                <p>At Mkt Web 360 we were among the first in Spain to develop a structured GEO service. We maintain active llms.txt and llms-full.txt files, optimise content for conversational search intent and monitor brand visibility in the main AI engines on a monthly basis.</p>
                <p>The data supports the shift. ChatGPT surpassed 800 million weekly users in 2026. Google AI Overviews already appear in more than 58% of searches. Perplexity processes hundreds of millions of queries per month. 94% of B2B buying groups use generative AI tools before speaking to any supplier. This is not a future trend — it is the current behaviour of your potential customers.</p>
                <p>The window of opportunity is narrow. Businesses that build AI authority now will have an accumulated advantage similar to domain authority in SEO: the earlier you start, the greater the advantage. Those who wait will start from scratch in an environment where competitors have already built a presence. In SEO, we know how much it costs to recover lost positions. In GEO, the mechanism is the same.</p>
              </>
            ) : (
              <>
                <p>Le SEO traditionnel optimise votre présence pour apparaître sur Google. Mais le comportement des utilisateurs change : de plus en plus de personnes recherchent directement sur ChatGPT, Perplexity, Claude ou Gemini et prennent des décisions en fonction de ce que ces systèmes répondent — sans jamais atteindre Google. Si votre entreprise n'apparaît pas dans ces réponses, vous n'existez pas pour ce segment d'utilisateurs.</p>
                <p>Le GEO — Generative Engine Optimization — est la discipline qui optimise votre présence digitale pour que les modèles de langage vous recommandent quand un utilisateur pose des questions sur des services comme les vôtres. Il ne s'agit pas de trucs techniques ni de tromper l'IA. Il s'agit de rendre votre contenu suffisamment clair, structuré et autoritaire pour que les LLMs le considèrent comme une source pertinente.</p>
                <p>Chez Mkt Web 360, nous avons été parmi les premiers en Espagne à développer un service GEO structuré. Nous maintenons des fichiers llms.txt et llms-full.txt actifs, optimisons le contenu pour l'intention de recherche conversationnelle et surveillons la visibilité de la marque dans les principaux moteurs IA chaque mois.</p>
                <p>Les données soutiennent ce changement. ChatGPT a dépassé 800 millions d'utilisateurs hebdomadaires en 2026. Google AI Overviews apparaît déjà dans plus de 58% des recherches. Perplexity traite des centaines de millions de requêtes par mois. 94% des groupes d'achat B2B utilisent des outils d'IA générative avant de parler à un fournisseur. Ce n'est pas une tendance future — c'est le comportement actuel de vos clients potentiels.</p>
                <p>La fenêtre d'opportunité est étroite. Les entreprises qui construisent une autorité IA maintenant auront un avantage cumulé similaire à l'autorité de domaine en SEO : plus tôt vous commencez, plus grand est l'avantage. Celles qui attendent partiront de zéro dans un environnement où la concurrence aura déjà construit une présence. En SEO, nous savons combien il coûte de récupérer des positions perdues. En GEO, le mécanisme est le même.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* When does GEO make sense */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            {isEn ? "When does it make sense to invest in GEO?" : "Quand est-il judicieux d'investir dans le GEO ?"}
          </h2>
          <div className="space-y-4 text-gray-600">
            {isEn ? (
              <>
                <p>GEO is not the right solution for every business at every moment. It makes sense when your sector has conversational search volume — when your potential customers ask AI things like "what marketing agency do you recommend" or "what is the best dental clinic in Toledo". If those questions exist, AI answers them with or without you.</p>
                <p>It has particular impact in professional services, technology, health, training and digital marketing — sectors where the decision process is long and the customer researches before buying. In these sectors, appearing in ChatGPT's response before the customer reaches Google may be the difference between being evaluated or not existing in the buying process.</p>
                <p>For local businesses — clinics, offices, workshops, physical shops — local GEO has an enormous and largely untapped opportunity. When someone asks ChatGPT "what reliable plumber do you recommend in Salamanca", the model tries to give a specific answer. A local business with well-structured content about its area, an optimised Google Business Profile, consistent NAP across all directories and reviews that reinforce local authority can appear in that response before larger competitors.</p>
                <p>GEO does not make sense as a sole channel without an SEO base. A technically deficient site without quality content or domain authority has little to offer language models. The correct sequence is: solid technical SEO first, then GEO on top as an additional visibility layer.</p>
              </>
            ) : (
              <>
                <p>Le GEO n'est pas la bonne solution pour toutes les entreprises à tout moment. Il a du sens quand votre secteur dispose d'un volume de recherches conversationnelles — quand vos clients potentiels posent à l'IA des questions comme "quelle agence marketing me recommandez-vous" ou "quelle est la meilleure clinique dentaire de Toulouse". Si ces questions existent, l'IA y répond avec ou sans vous.</p>
                <p>Il a un impact particulier dans les services professionnels, la technologie, la santé, la formation et le marketing digital — secteurs où le processus de décision est long et où le client se renseigne avant d'acheter. Dans ces secteurs, apparaître dans la réponse de ChatGPT avant que le client n'atteigne Google peut faire la différence entre être évalué ou ne pas exister dans le processus d'achat.</p>
                <p>Pour les entreprises locales — cliniques, cabinets, ateliers, boutiques physiques — le GEO local dispose d'une opportunité énorme et peu exploitée. Quand quelqu'un demande à ChatGPT "quel plombier de confiance me recommandez-vous à Lyon", le modèle essaie de donner une réponse précise. Une entreprise locale avec du contenu bien structuré sur sa zone, un Google Business Profile optimisé, un NAP cohérent dans tous les annuaires et des avis renforçant l'autorité locale peut apparaître dans cette réponse avant des concurrents plus importants.</p>
                <p>Le GEO n'a pas de sens comme canal unique sans base SEO. Un site techniquement déficient, sans contenu de qualité ou sans autorité de domaine, a peu à offrir aux modèles de langage. La séquence correcte est : SEO technique solide en premier, puis GEO par-dessus comme couche supplémentaire de visibilité.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "How we work on GEO" : "Comment nous travaillons le GEO"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "A structured four-phase process to build and maintain your visibility in AI engines."
                : "Un processus structuré en quatre phases pour construire et maintenir votre visibilité dans les moteurs IA."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-5">
                <span className="text-4xl font-bold text-primary-100 shrink-0 leading-none">{step.num}</span>
                <div>
                  <h3 className="font-bold text-primary-600 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local GEO */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Local GEO: the opportunity most businesses haven't spotted yet"
              : "GEO local : l'opportunité que la plupart n'a pas encore vue"}
          </h2>
          <div className="space-y-4 text-gray-600">
            {isEn ? (
              <>
                <p>Most conversations about GEO focus on national or international brands. But the most immediate opportunity lies with local businesses. AI models receive thousands of daily queries with local intent: "best physiotherapist in Bilbao", "tax adviser for freelancers in Zaragoza", "reliable mechanic in Toledo". And they have to respond with something.</p>
                <p>The local business that works on its GEO now — with well-structured content about its area, an optimised Google Business Profile, consistent NAP across all directories, and reviews that reinforce its local authority — will be the one that appears in those responses. Local GEO competition is almost non-existent yet. It is the same window that existed in local SEO ten years ago.</p>
                <p>At Mkt Web 360 we work on local GEO integrated with our clients' local SEO strategy. They are not two separate projects — they are two layers of the same digital visibility work: one so that Google finds you, the other so that AI recommends you.</p>
              </>
            ) : (
              <>
                <p>La plupart des conversations sur le GEO se concentrent sur les marques nationales ou internationales. Mais l'opportunité la plus immédiate concerne les entreprises locales. Les modèles IA reçoivent des milliers de requêtes quotidiennes avec une intention locale : "meilleur kinésithérapeute à Bordeaux", "conseiller fiscal pour indépendants à Lyon", "garage de confiance à Toulouse". Et ils doivent répondre avec quelque chose.</p>
                <p>L'entreprise locale qui travaille son GEO maintenant — avec du contenu bien structuré sur sa zone, un Google Business Profile optimisé, un NAP cohérent dans tous les annuaires et des avis renforçant son autorité locale — sera celle qui apparaît dans ces réponses. La concurrence locale en GEO est encore quasi inexistante. C'est la même fenêtre qui existait dans le SEO local il y a dix ans.</p>
                <p>Chez Mkt Web 360, nous travaillons le GEO local intégré avec la stratégie de SEO local de nos clients. Ce ne sont pas deux projets séparés — ce sont deux couches du même travail de visibilité digitale : une pour que Google vous trouve, l'autre pour que l'IA vous recommande.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions about GEO" : "Questions fréquentes sur le GEO"}
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* llms.txt note */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-primary-200 rounded-full px-4 py-2 text-sm text-primary-600 font-medium mb-6">
            <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {isEn ? "Technical note" : "Note technique"}
          </div>
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "This site already implements llms.txt" : "Ce site implémente déjà llms.txt"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEn
              ? "Mkt Web 360 is one of the first digital marketing agencies in Spain to implement the "
              : "Mkt Web 360 est l'une des premières agences de marketing digital en Espagne à implémenter le standard "}
            <strong>llms.txt</strong>
            {isEn
              ? " standard — the file that tells language models how to understand and index a website."
              : " — le fichier qui indique aux modèles de langage comment comprendre et indexer un site web."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEn ? "You can view it at " : "Vous pouvez le consulter sur "}
            <a href="/llms.txt" className="text-accent-500 hover:underline font-medium">mktweb360.com/llms.txt</a>
            {isEn ? " and " : " et "}
            <a href="/llms-full.txt" className="text-accent-500 hover:underline font-medium">mktweb360.com/llms-full.txt</a>
            {isEn
              ? ". We apply to our own website exactly what we offer our clients."
              : ". Nous appliquons sur notre propre site exactement ce que nous proposons à nos clients."}
          </p>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contact" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Do you appear when someone searches for you on ChatGPT?" : "Apparaissez-vous quand on vous cherche sur ChatGPT ?"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "Tell us about your business and we will carry out an AI visibility audit with no commitment. Find out whether you are mentioned, how and what can be improved."
                : "Parlez-nous de votre entreprise et nous réalisons un audit de visibilité IA sans engagement. Découvrez si vous êtes mentionné, comment et ce qui peut être amélioré."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-geo`} />
          </div>
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" title={isEn ? "More about AI search and GEO" : "Plus sur la recherche IA et le GEO"} />
    </>
  );
}
