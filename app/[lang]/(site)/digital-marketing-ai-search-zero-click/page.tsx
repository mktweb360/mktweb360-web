import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing in the Age of AI Search and Zero-Click | Mkt Web 360"
      : "Marketing digital à l'ère de l'IA et du zéro clic | Mkt Web 360",
    description: isEn
      ? "AI answers directly without users clicking through. How to adapt your digital marketing strategy to keep winning customers in the zero-click era."
      : "L'IA répond directement sans que l'utilisateur ne clique. Comment adapter votre stratégie marketing pour continuer à capter des clients à l'ère du zéro clic.",
    alternates:
      alternatesFor(
        `/${lang}/${lang === "en" ? "digital-marketing-ai-search-zero-click" : "marketing-digital-ia-zero-clic"}/`
      ) ?? {
        canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "digital-marketing-ai-search-zero-click" : "marketing-digital-ia-zero-clic"}/`,
      },
  };
}

const FAQS_EN = [
  {
    q: "Does zero-click mean SEO is no longer worth investing in?",
    a: "No. It means SEO evolves. Appearing in AI Overviews or ChatGPT responses requires exactly what good SEO has always demanded: authoritative, well-structured content aimed at answering real questions. Traffic changes form, but investment in content remains profitable.",
  },
  {
    q: "How do I know if AI is using my content to answer questions?",
    a: "Ask directly in ChatGPT, Perplexity or Gemini about topics where you have authority. You can also use AI mention monitoring tools like Brandwatch AI, or simply run periodic manual searches. GEO (Generative Engine Optimization) is the discipline that optimises this presence.",
  },
  {
    q: "What type of content works best for AI responses?",
    a: "Factual content, well-structured with clear headings, direct answers to specific questions, data with cited sources and well-implemented schema markup. AI prefers content it can cite with confidence, which aligns with Google's E-E-A-T principles.",
  },
  {
    q: "Do Google Ads still work in a zero-click world?",
    a: "Yes. Google still shows ads even in searches with AI Overviews, and commercial intent queries (purchase searches) still generate clicks. Zero-click mainly affects informational searches. Bottom-of-funnel searches maintain similar click-through rates.",
  },
];

const FAQS_FR = [
  {
    q: "Le zéro clic signifie-t-il que le SEO ne vaut plus la peine ?",
    a: "Non. Cela signifie que le SEO évolue. Apparaître dans les AI Overviews ou les réponses de ChatGPT exige exactement ce que le bon SEO a toujours demandé : un contenu d'autorité, bien structuré, orienté vers des questions réelles. Le trafic change de forme, mais l'investissement en contenu reste rentable.",
  },
  {
    q: "Comment savoir si l'IA utilise mon contenu pour répondre ?",
    a: "Posez directement la question dans ChatGPT, Perplexity ou Gemini sur les sujets où vous avez de l'autorité. Vous pouvez aussi utiliser des outils de suivi des mentions IA comme Brandwatch AI, ou faire des recherches manuelles périodiques. Le GEO (Generative Engine Optimization) est la discipline qui optimise cette présence.",
  },
  {
    q: "Quel type de contenu fonctionne le mieux pour les réponses IA ?",
    a: "Contenu factuel, bien structuré avec des titres clairs, réponses directes à des questions spécifiques, données avec sources citées et balisage schema bien implémenté. L'IA préfère le contenu qu'elle peut citer avec confiance, ce qui correspond aux principes E-E-A-T de Google.",
  },
  {
    q: "Les annonces Google fonctionnent-elles encore dans un monde zéro clic ?",
    a: "Oui. Google affiche toujours des annonces même dans les recherches avec AI Overviews, et les requêtes à intention commerciale génèrent toujours des clics. Le zéro clic affecte principalement les recherches informationnelles. Les recherches de bas de tunnel maintiennent des taux de clic similaires.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "AI search and zero-click" : "IA et zéro clic" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO</span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              {isEn ? "August 4, 2026" : "4 août 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Digital marketing with AI and zero-click answers: what to do now"
              : "Marketing digital à l'ère de l'IA et du zéro clic : que faire maintenant"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "Google answers before the user clicks. ChatGPT and Perplexity answer without needing a website visit. Organic traffic is changing shape — and any digital marketing strategy that does not account for this is optimising for a world that no longer exists."
              : "Google répond avant que l'utilisateur ne clique. ChatGPT et Perplexity répondent sans visite de site web. Le trafic organique change de forme — et toute stratégie marketing qui n'en tient pas compte optimise pour un monde qui n'existe plus."}
          </p>
          <Image
            src="/og-marketing-digital-con-ia-y-respuestas-cero-clic.jpg"
            alt={isEn ? "Digital marketing AI and zero-click" : "Marketing digital IA et zéro clic"}
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Google's AI Overviews, ChatGPT's direct answers and Perplexity's summaries share one thing: they resolve the user's query without them clicking on any website. This is changing the composition of organic traffic for most businesses, and will continue to do so."
              : "Les AI Overviews de Google, les réponses directes de ChatGPT et les résumés de Perplexity ont une chose en commun : ils résolvent la requête de l'utilisateur sans qu'il visite aucun site web. Cela modifie la composition du trafic organique pour la plupart des entreprises, et continuera de le faire."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "What zero-click is and how we got here" : "Qu'est-ce que le zéro clic et comment en sommes-nous arrivés là"}
          </h2>
          <p>
            {isEn
              ? "The term 'zero-click' describes searches that a search engine resolves directly on the results page without the user visiting any website. It existed before AI — featured snippets already did this — but AI-generated answers amplify it dramatically. According to SparkToro data, more than 60% of Google searches already ended in zero clicks in 2023. With AI Overviews rolling out, that proportion has grown in informational searches."
              : "Le terme 'zéro clic' décrit les recherches qu'un moteur de recherche résout directement sur la page de résultats sans que l'utilisateur visite aucun site. Cela existait avant l'IA — les featured snippets le faisaient déjà — mais les réponses générées par l'IA l'amplifient de façon radicale. Selon les données de SparkToro, plus de 60% des recherches Google se terminaient déjà en zéro clic en 2023."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Does your business appear when AI answers about your sector?" : "Votre entreprise apparaît-elle quand l'IA répond sur votre secteur ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "GEO (Generative Engine Optimization) is the strategy for appearing in ChatGPT, Gemini and Perplexity responses. We audit your current AI presence and design the plan."
                : "Le GEO (Generative Engine Optimization) est la stratégie pour apparaître dans les réponses de ChatGPT, Gemini et Perplexity. Nous auditons votre présence IA actuelle et concevons le plan."}
            </p>
            <Link
              href={`/${lang}/geo-generative-engine-optimization/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "View GEO service" : "Voir le service GEO"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "What this really means for your web traffic" : "Ce que cela signifie vraiment pour votre trafic web"}
          </h2>
          <p>
            {isEn
              ? "The impact of zero-click is not uniform. Informational searches — 'what is X', 'how does Y work', 'difference between A and B' — are most affected. Bottom-of-funnel searches — 'buy X in London', 'price of service Y' — maintain relatively stable click rates because the user wants to go to a specific site, not just an answer."
              : "L'impact du zéro clic n'est pas uniforme. Les recherches informationnelles — 'qu'est-ce que X', 'comment fonctionne Y', 'différence entre A et B' — sont les plus touchées. Les recherches de bas de tunnel — 'acheter X à Paris', 'prix du service Y' — maintiennent des taux de clic relativement stables car l'utilisateur veut accéder à un site spécifique."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Strategies to keep winning customers" : "Stratégies pour continuer à capter des clients"}
          </h2>
          <p>
            {isEn
              ? "Adaptation requires working on several dimensions simultaneously. The first is GEO: optimising content so AI cites it frequently. This means structuring content with clear answers to specific questions, using well-implemented schema markup, citing verifiable data and sources, and building topical authority in your sector."
              : "L'adaptation exige de travailler sur plusieurs dimensions simultanément. La première est le GEO : optimiser le contenu pour que l'IA le cite fréquemment. Cela implique de structurer le contenu avec des réponses claires à des questions spécifiques, d'utiliser un balisage schema bien implémenté, de citer des données et sources vérifiables, et de construire une autorité thématique dans votre secteur."}
          </p>
          <p>
            {isEn
              ? "The second dimension is reinforcing channels that AI cannot replace: direct acquisition (email marketing, WhatsApp), branded search (users who already know you still click), and high-value content that requires context — case studies, detailed guides, interactive tools — that AI summarises but does not fully replace."
              : "La deuxième dimension consiste à renforcer les canaux que l'IA ne peut pas remplacer : acquisition directe (email marketing, WhatsApp), recherche de marque (les utilisateurs qui vous connaissent déjà continuent de cliquer), et contenu de haute valeur nécessitant du contexte — études de cas, guides détaillés, outils interactifs — que l'IA résume mais ne remplace pas complètement."}
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "GEO as a new visibility layer" : "Le GEO comme nouvelle couche de visibilité"}
          </h2>
          <p>
            {isEn
              ? "Appearing in ChatGPT's response when someone asks 'what is the best digital marketing agency in London?' is the modern equivalent of ranking on Google's first page. It does not always generate an immediate click — but it builds recognition, credibility and, over time, direct branded searches."
              : "Apparaître dans la réponse de ChatGPT quand quelqu'un demande 'quelle est la meilleure agence de marketing digital à Paris ?' est l'équivalent moderne d'un classement en première page de Google. Cela ne génère pas toujours un clic immédiat — mais cela construit la notoriété, la crédibilité et, avec le temps, des recherches directes de marque."}
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Visibility in the AI era" : "Visibilité à l'ère de l'IA"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "If you want your business to appear when AI answers questions about your sector, we can design the right GEO + SEO + content strategy for your business."
                : "Si vous souhaitez que votre entreprise apparaisse quand l'IA répond sur votre secteur, nous pouvons concevoir la stratégie GEO + SEO + contenu adaptée à votre activité."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/geo-generative-engine-optimization/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "View GEO service" : "Voir le service GEO"}
              </Link>
              <Link
                href={`/${lang}/digital-audit/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "Request free diagnosis" : "Demander un diagnostic gratuit"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions about AI and zero-click" : "Questions fréquentes sur l'IA et le zéro clic"}
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="marketing-digital-con-ia-y-respuestas-cero-clic" />
    </>
  );
}
