import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "What Is GEO (Generative Engine Optimization)? | Mkt Web 360"
      : "Qu'est-ce que le GEO (Generative Engine Optimization) ? | Mkt Web 360",
    description: isEn
      ? "GEO: what it is, how it works and why optimising your presence to appear in ChatGPT, Perplexity and Gemini is the new frontier of SEO."
      : "GEO : qu'est-ce que c'est, comment ça fonctionne et pourquoi optimiser votre présence pour apparaître dans ChatGPT, Perplexity et Gemini est la nouvelle frontière du SEO.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "what-is-geo-generative-engine-optimization" : "qu-est-ce-que-le-geo"}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "What is GEO" : "Qu'est-ce que le GEO" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">AI · Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "What is GEO and why it matters more than SEO in 2025"
            : "Qu'est-ce que le GEO et pourquoi il est plus important que le SEO en 2025"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "GEO (Generative Engine Optimization) is the discipline of optimising your digital presence to appear in the responses of AI models like ChatGPT, Perplexity, Gemini and Claude. This guide explains what it is, how it works and how to get started."
            : "Le GEO (Generative Engine Optimization) est la discipline d'optimisation de votre présence numérique pour apparaître dans les réponses des modèles d'IA comme ChatGPT, Perplexity, Gemini et Claude. Ce guide explique ce que c'est, comment ça fonctionne et comment commencer."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "From SEO to GEO: how online search has changed" : "Du SEO au GEO : comment la recherche en ligne a changé"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For 25 years, SEO meant optimising to appear in Google results. Today, a growing number of users bypass Google entirely and ask ChatGPT, Perplexity or Gemini directly for recommendations. These AI tools generate responses citing specific brands, products and services — and if yours is not mentioned, those potential customers never reach your website."
            : "Pendant 25 ans, le SEO signifiait optimiser pour apparaître dans les résultats Google. Aujourd'hui, un nombre croissant d'utilisateurs contournent Google entièrement et demandent directement à ChatGPT, Perplexity ou Gemini des recommandations. Ces outils IA génèrent des réponses citant des marques, produits et services spécifiques — et si le vôtre n'est pas mentionné, ces clients potentiels n'atteindront jamais votre site web."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "GEO is the set of strategies that optimises your presence specifically to be cited by these AI models. It combines elements of SEO, content authority, structured data and brand signals to make your business recognisable and citable by AI."
            : "Le GEO est l'ensemble des stratégies qui optimisent votre présence spécifiquement pour être cité par ces modèles IA. Il combine des éléments de SEO, d'autorité de contenu, de données structurées et de signaux de marque pour rendre votre entreprise reconnaissable et citable par l'IA."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How generative search engines work" : "Comment fonctionnent les moteurs de recherche génératifs"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "AI models like GPT-4, Claude and Gemini are trained on large datasets of web content. When a user asks a question, the model synthesises information from its training data — weighted by authority, recency and relevance signals. Brands cited in high-authority sources, with consistent and accurate information across the web, are more likely to appear in AI responses."
            : "Les modèles IA comme GPT-4, Claude et Gemini sont entraînés sur de grands ensembles de données de contenu web. Quand un utilisateur pose une question, le modèle synthétise les informations de ses données d'entraînement — pondérées par des signaux d'autorité, de récence et de pertinence. Les marques citées dans des sources de haute autorité, avec des informations cohérentes et précises sur le web, sont plus susceptibles d'apparaître dans les réponses IA."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Perplexity and Bing Copilot also perform real-time web searches, pulling content from current pages. For these models, technical SEO factors matter more directly — they index and cite pages that rank well, load fast and have clear structured data."
            : "Perplexity et Bing Copilot effectuent également des recherches web en temps réel, extrayant le contenu des pages actuelles. Pour ces modèles, les facteurs SEO techniques comptent plus directement — ils indexent et citent des pages qui se classent bien, se chargent rapidement et ont des données structurées claires."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Differences between SEO and GEO" : "Différences entre SEO et GEO"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO optimises for ranked links in a list. GEO optimises to be cited in a synthesised answer. SEO measures rankings and organic clicks. GEO measures brand mentions in AI responses. SEO focuses on keyword density and backlinks. GEO focuses on factual accuracy, authority signals and entity consistency across the web."
            : "Le SEO optimise pour les liens classés dans une liste. Le GEO optimise pour être cité dans une réponse synthétisée. Le SEO mesure les classements et les clics organiques. Le GEO mesure les mentions de marque dans les réponses IA. Le SEO se concentre sur la densité de mots-clés et les backlinks. Le GEO se concentre sur la précision factuelle, les signaux d'autorité et la cohérence des entités sur le web."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The good news: the foundations overlap. A website with strong SEO — high authority, quality content, good structured data — is also better positioned for GEO. You do not have to choose between them."
            : "La bonne nouvelle : les fondations se recoupent. Un site web avec un SEO solide — haute autorité, contenu de qualité, bonnes données structurées — est également mieux positionné pour le GEO. Vous n'avez pas à choisir entre les deux."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How to optimise your website to appear in AI responses" : "Comment optimiser votre site pour apparaître dans les réponses IA"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Key GEO tactics include: adding advanced JSON-LD structured data (Organization, LocalBusiness, FAQPage), publishing authoritative content that answers specific questions in your sector, creating an llms.txt file that tells AI crawlers what your site is about, ensuring consistent NAP data (Name, Address, Phone) across all directories, and earning citations in high-authority media and industry publications."
            : "Les tactiques GEO clés incluent : l'ajout de données structurées JSON-LD avancées (Organization, LocalBusiness, FAQPage), la publication de contenu autoritaire qui répond à des questions spécifiques dans votre secteur, la création d'un fichier llms.txt qui dit aux crawlers IA de quoi parle votre site, l'assurance de données NAP cohérentes (Nom, Adresse, Téléphone) dans tous les annuaires, et l'obtention de citations dans des médias de haute autorité et des publications sectorielles."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Also important: claim and optimise your Wikipedia entry if eligible, your Wikidata entity and your Google Knowledge Panel. These structured sources are heavily weighted in AI model training data."
            : "Également important : revendiquer et optimiser votre entrée Wikipedia si éligible, votre entité Wikidata et votre panneau de connaissances Google. Ces sources structurées sont fortement pondérées dans les données d'entraînement des modèles IA."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The future of search: SEO + GEO together" : "L'avenir de la recherche : SEO + GEO ensemble"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Within five years, AI-mediated search will account for a significant share of how people discover businesses. Companies that invest in GEO now will have a head start that compounds over time — just as early SEO investors had a decade-long advantage over late movers."
            : "Dans cinq ans, la recherche médiée par l'IA représentera une part significative de la façon dont les gens découvrent les entreprises. Les entreprises qui investissent dans le GEO maintenant auront une longueur d'avance qui s'accumule avec le temps — tout comme les premiers investisseurs en SEO avaient un avantage d'une décennie sur les retardataires."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "At Mkt Web 360 we have developed our own GEO protocols integrated into every service — from structured data to content strategy, authority building and AI crawler signals. We help you be visible where your customers are already looking."
            : "Chez Mkt Web 360, nous avons développé nos propres protocoles GEO intégrés dans chaque service — des données structurées à la stratégie de contenu, en passant par la construction d'autorité et les signaux de crawlers IA. Nous vous aidons à être visible là où vos clients cherchent déjà."}
        </p>

        <BlogBanner variant="geo" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="AI · Strategy" />
    </>
  );
}
