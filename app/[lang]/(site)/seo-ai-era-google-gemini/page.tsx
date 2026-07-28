import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO in the AI Era: How to Rank When Google Uses Gemini to Answer"
      : "SEO à l'ère de l'IA : comment se positionner quand Google utilise Gemini pour répondre",
    description: isEn
      ? "Google is no longer just a search engine. It is a generative response engine powered by Gemini. How to adapt your SEO strategy to keep capturing traffic when AI answers first."
      : "Google n'est plus seulement un moteur de recherche. C'est un moteur de réponses génératives propulsé par Gemini. Comment adapter votre stratégie SEO pour continuer à capter du trafic quand l'IA répond en premier.",
    alternates: alternatesFor(`/${lang}/seo-ai-era-google-gemini/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-ai-era-google-gemini/`,
    },
    openGraph: {
      title: isEn
        ? "SEO in the AI Era: How to Rank When Google Uses Gemini to Answer | Mkt Web 360"
        : "SEO à l'ère de l'IA : comment se positionner quand Google utilise Gemini pour répondre | Mkt Web 360",
      description: isEn
        ? "Google is now a generative response engine with Gemini. Adapt your SEO to keep capturing traffic when AI answers before you."
        : "Google est désormais un moteur de réponses génératives avec Gemini. Adaptez votre SEO pour continuer à capter du trafic quand l'IA répond avant vous.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Should I change my keyword strategy because of AI Overviews?",
    a: "Yes, partially. Pure informational keywords are increasingly captured by AI Overviews. Keywords with commercial intent still generate clicks because the user needs to go deeper. Adjust your mix towards keywords with higher commercial intent.",
  },
  {
    q: "Can I appear inside a Google AI Overview?",
    a: "Yes, although Google does not publish the exact selection mechanism. Pages with demonstrated authority, solid technical SEO and high-quality content have a better probability of being cited. Schema markup helps disambiguate entities and facilitates semantic understanding, but Google does not define it as a direct criterion for AI Overview inclusion.",
  },
  {
    q: "Is it worth doing SEO if Google answers directly with AI?",
    a: "Yes. Not all searches have an AI Overview, especially commercial ones. Appearing as a source within an AI Overview has brand value. Users who click after seeing an AI Overview have better conversion rates.",
  },
  {
    q: "Is local SEO affected by AI Overviews?",
    a: "Less than informational SEO. Local searches still show the map pack and local results with high prominence. Local SEO maintains its effectiveness for businesses with a physical presence.",
  },
];

const FAQS_FR = [
  {
    q: "Dois-je changer ma stratégie de mots-clés avec les AI Overviews ?",
    a: "Oui, partiellement. Les mots-clés purement informationnels sont de plus en plus captés par les AI Overviews. Les mots-clés à intention commerciale continuent de générer des clics car l'utilisateur a besoin d'approfondir. Ajustez votre mix vers des mots-clés avec une intention commerciale plus élevée.",
  },
  {
    q: "Puis-je apparaître dans un AI Overview de Google ?",
    a: "Oui, bien que Google ne publie pas le mécanisme exact de sélection. Les pages avec une autorité démontrée, un SEO technique solide et un contenu de haute qualité ont plus de probabilité d'être citées. Le schema markup aide à désambiguïser les entités et facilite la compréhension sémantique, mais Google ne le définit pas comme critère direct d'accès aux AI Overviews.",
  },
  {
    q: "Vaut-il la peine de faire du SEO si Google répond directement avec l'IA ?",
    a: "Oui. Toutes les recherches n'ont pas d'AI Overview, notamment les commerciales. Apparaître comme source dans un AI Overview a de la valeur de marque. Les utilisateurs qui cliquent après avoir vu un AI Overview ont de meilleurs taux de conversion.",
  },
  {
    q: "Le SEO local est-il affecté par les AI Overviews ?",
    a: "Moins que le SEO informationnel. Les recherches locales continuent d'afficher le pack de cartes et les résultats locaux avec une forte prominence. Le SEO local maintient son efficacité pour les entreprises avec une présence physique.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "SEO in the AI era" : "SEO à l'ère de l'IA" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">SEO · {isEn ? "Strategy" : "Stratégie"}</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "SEO in the AI Era: How to Rank When Google Uses Gemini to Give the Answers"
            : "SEO à l'ère de l'IA : comment se positionner quand Google utilise Gemini pour donner les réponses"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Google is no longer just a search engine: it is a generative response engine powered by Gemini. Adapting your SEO strategy to keep capturing traffic when AI answers before you is not optional — it is the difference between growing or being left out of the conversation."
            : "Google n'est plus seulement un moteur de recherche : c'est un moteur de réponses génératives propulsé par Gemini. Adapter votre stratégie SEO pour continuer à capter du trafic quand l'IA répond avant vous n'est pas optionnel — c'est la différence entre croître ou rester hors de la conversation."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "For years, the SEO objective was clear: rise to the first position and capture the click. Today Google can respond directly with Gemini before the user reaches that first position. That does not mean SEO has died — it means the rules of the game have changed and you need to understand where traffic and value still exist."
            : "Pendant des années, l'objectif du SEO était clair : monter à la première position et capter le clic. Aujourd'hui, Google peut répondre directement avec Gemini avant que l'utilisateur atteigne cette première position. Cela ne signifie pas que le SEO est mort — cela signifie que les règles du jeu ont changé et qu'il faut comprendre où se trouve encore le trafic et la valeur."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What has changed in Google with Gemini integration" : "Ce qui a changé dans Google avec l'intégration de Gemini"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "With Gemini integrated, Google has gone from showing ten blue links to building synthesised responses from multiple sources. AI Overviews now appear in more than 58% of searches and occupy the most visible space on the page, pushing organic results down."
            : "Avec Gemini intégré, Google est passé de l'affichage de dix liens bleus à la construction de réponses synthétisées à partir de plusieurs sources. Les AI Overviews apparaissent maintenant dans plus de 58 % des recherches et occupent l'espace le plus visible de la page, poussant les résultats organiques vers le bas."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "For the user this is usually convenient: they get an immediate answer without browsing. For websites, the challenge is dual: it is no longer enough to rank — now you also need to be the source the AI chooses to build its response. It is a mindset change that connects classic SEO with AI positioning."
            : "Pour l'utilisateur, c'est généralement pratique : il obtient une réponse immédiate sans naviguer. Pour les sites web, le défi est double : il ne suffit plus de se positionner — maintenant, il faut aussi être la source que l'IA choisit pour construire sa réponse. C'est un changement de mentalité qui connecte le SEO classique avec le positionnement IA."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Which types of searches still generate organic traffic" : "Quels types de recherches génèrent encore du trafic organique"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Not all searches are equally affected. Pure informational queries (definitions, specific data, closed answers) are the most absorbed by AI Overviews, because the AI can resolve them without the user needing to go deeper."
            : "Toutes les recherches ne sont pas également affectées. Les requêtes purement informationnelles (définitions, données spécifiques, réponses fermées) sont les plus absorbées par les AI Overviews, car l'IA peut les résoudre sans que l'utilisateur ait besoin d'approfondir."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "On the other hand, searches with commercial intent (comparing services, choosing a supplier, deciding on a purchase) still generate strong clicks, because the user needs to contrast, see examples and gain confidence before deciding. Local SEO also holds up well: the map pack maintains its prominence for businesses with a physical presence. That is where effort should be concentrated."
            : "En revanche, les recherches à intention commerciale (comparer des services, choisir un fournisseur, décider d'un achat) continuent de générer des clics forts, car l'utilisateur a besoin de confronter, voir des exemples et gagner en confiance avant de décider. Le SEO local résiste également bien : le pack de cartes maintient sa prominance pour les entreprises avec une présence physique. C'est là qu'il convient de concentrer les efforts."}
        </p>

        <BlogBanner lang={lang} />

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "How to optimise to appear inside an AI Overview" : "Comment optimiser pour apparaître dans un AI Overview"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Appearing as a cited source within an AI Overview has become an SEO objective in itself. Google chooses those sources based on the page's authority and how easily a clear answer can be extracted from it. Well-structured content with headings that answer questions and direct paragraphs has an advantage."
            : "Apparaître comme source citée dans un AI Overview est devenu un objectif SEO en soi. Google choisit ces sources en fonction de l'autorité de la page et de la facilité avec laquelle une réponse claire peut en être extraite. Un contenu bien structuré, avec des titres qui répondent à des questions et des paragraphes directs, a un avantage."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Correct schema markup (FAQPage, Article, Organization) helps disambiguate entities and makes it easier for Gemini to process your content with greater semantic precision. Impeccable technical SEO combined with well-structured content positions you better in both organic results and cited sources. If you also understand the differences between GEO and SEO, you can prepare each page for both scenarios simultaneously."
            : "Le schema markup correct (FAQPage, Article, Organization) aide à désambiguïser les entités et facilite le traitement de votre contenu par Gemini avec une plus grande précision sémantique. Un SEO technique impeccable, combiné à un contenu bien structuré, vous positionne mieux à la fois dans les résultats organiques et comme sources citées. Si vous comprenez aussi les différences entre GEO et SEO, vous pourrez préparer chaque page pour les deux scénarios à la fois."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The content strategy that works in 2026" : "La stratégie de contenu qui fonctionne en 2026"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The content that wins in 2026 combines depth with clarity. Answering a specific question precisely, contributing real experience and structuring information so it is easy to cite is what separates websites that keep capturing traffic from those that run dry."
            : "Le contenu qui gagne en 2026 combine la profondeur avec la clarté. Répondre avec précision à une question concrète, apporter une vraie expérience et structurer l'information pour qu'elle soit facile à citer, c'est ce qui sépare les sites qui continuent à capter du trafic de ceux qui se retrouvent sans visites."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "This means adjusting the keyword mix towards queries with commercial intent, creating content that AI cannot summarise without losing value (comparisons, real cases, decision criteria) and updating existing content so it remains the best available answer."
            : "Cela implique d'ajuster le mix de mots-clés vers des requêtes à intention commerciale, de créer du contenu que l'IA ne peut pas résumer sans perdre de valeur (comparatifs, cas réels, critères de décision) et de mettre à jour le contenu existant pour qu'il reste la meilleure réponse disponible."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "SEO + GEO: the combination that delivers results" : "SEO + GEO : la combinaison qui donne des résultats"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The practical conclusion is that SEO and GEO are no longer separate strategies — they are two sides of the same work. Solid technical SEO and quality content are the foundation for both ranking on Google and being cited by AI. Investing in only one of the two means leaving opportunities on the table."
            : "La conclusion pratique est que le SEO et le GEO ne sont plus des stratégies séparées — ce sont deux faces du même travail. Un SEO technique solide et un contenu de qualité sont la base pour à la fois se positionner sur Google et être cité par l'IA. Investir dans un seul des deux, c'est laisser des opportunités sur la table."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "For an SME, the advantage is that it does not need to double the budget: the same well-done content works on both fronts. What matters is planning it with judgement from the start, rather than reacting when traffic has already dropped."
            : "Pour une PME, l'avantage est qu'elle n'a pas besoin de doubler le budget : le même contenu bien fait travaille sur les deux fronts. Ce qui compte, c'est de le planifier avec discernement dès le départ, plutôt que de réagir quand le trafic a déjà chuté."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Prepare your website for the search engine that answers with AI" : "Préparez votre site pour le moteur de recherche qui répond avec l'IA"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we combine SEO and GEO so your business keeps capturing traffic and customers even when Google answers with Gemini."
              : "Chez Mkt Web 360, nous combinons SEO et GEO pour que votre entreprise continue à capter du trafic et des clients même quand Google répond avec Gemini."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "seo-web-positioning" : "positionnement-seo"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "SEO service" : "Service SEO"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions" : "Questions fréquentes"}
        </h2>
        <div className="space-y-3 mb-8">
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

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="seo-ai-era-google-gemini" />
    </>
  );
}
