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
      ? "GEO for Shopware: Sell via ChatGPT with Agentic Commerce"
      : "GEO pour Shopware : vendre via ChatGPT avec l'Agentic Commerce",
    description: isEn
      ? "Shopware 6.7.9 brings native Agentic Commerce. Prepare your store with GEO so ChatGPT and Perplexity recommend and sell your products directly from the conversation."
      : "Shopware 6.7.9 intègre l'Agentic Commerce natif. Préparez votre boutique avec le GEO pour que ChatGPT et Perplexity recommandent et vendent vos produits directement depuis la conversation.",
    alternates: alternatesFor(`/${lang}/shopware-geo-agentic-commerce/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/shopware-geo-agentic-commerce/`,
    },
    openGraph: {
      title: isEn
        ? "GEO for Shopware: Sell via ChatGPT with Agentic Commerce | Mkt Web 360"
        : "GEO pour Shopware : vendre via ChatGPT avec l'Agentic Commerce | Mkt Web 360",
      description: isEn
        ? "GEO and Agentic Commerce in Shopware 6.7.9: prepare your store for ChatGPT and Perplexity to recommend and sell your products."
        : "GEO et Agentic Commerce dans Shopware 6.7.9 : préparez votre boutique pour que ChatGPT et Perplexity recommandent et vendent vos produits.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What is Shopware's Agentic Commerce?",
    a: "It is a feature native to Shopware 6.7.9: an API that lets AI assistants like ChatGPT and Perplexity discover, recommend and facilitate the purchase of your products directly from the conversation, without the user going through a traditional website.",
  },
  {
    q: "What is GEO applied to an online store?",
    a: "It means optimising your store so that AI engines cite and recommend it when someone asks for product advice. It is the equivalent of ranking, but in ChatGPT, Perplexity or Gemini instead of Google.",
  },
  {
    q: "Do I need to let AI bots access my website?",
    a: "Yes, if you want to appear in their responses. Your robots.txt must allow GPTBot, ClaudeBot and PerplexityBot. If you block them, the AI cannot discover or recommend your catalogue.",
  },
  {
    q: "What does my store need to sell via Agentic Commerce?",
    a: "A fast catalogue API, real-time stock data and complete, structured product information. The AI queries in real time, so the information must always be up to date and well marked up.",
  },
  {
    q: "Why is it worth getting ahead with GEO now?",
    a: "Because almost no one is working on it yet. Very few agencies combine Shopware and GEO, and preparing your store now gives you presence in AI before the channel becomes saturated — just as happened with SEO in its early days.",
  },
];

const FAQS_FR = [
  {
    q: "Qu'est-ce que l'Agentic Commerce de Shopware ?",
    a: "C'est une fonctionnalité native depuis Shopware 6.7.9 : une API qui permet aux assistants IA comme ChatGPT et Perplexity de découvrir, recommander et faciliter l'achat de vos produits directement depuis la conversation, sans que l'utilisateur passe par le site web traditionnel.",
  },
  {
    q: "Qu'est-ce que le GEO appliqué à une boutique en ligne ?",
    a: "C'est optimiser votre boutique pour que les moteurs IA la citent et la recommandent quand quelqu'un demande un conseil produit. C'est l'équivalent du positionnement, mais dans ChatGPT, Perplexity ou Gemini plutôt que dans Google.",
  },
  {
    q: "Dois-je laisser les bots IA accéder à mon site ?",
    a: "Oui, si vous voulez apparaître dans leurs réponses. Votre robots.txt doit autoriser GPTBot, ClaudeBot et PerplexityBot. Si vous les bloquez, l'IA ne peut pas connaître ni recommander votre catalogue.",
  },
  {
    q: "De quoi ma boutique a-t-elle besoin pour vendre via l'Agentic Commerce ?",
    a: "Une API de catalogue rapide, des données de stock en temps réel et des informations produit complètes et structurées. L'IA interroge en direct, donc les informations doivent toujours être à jour et bien balisées.",
  },
  {
    q: "Pourquoi vaut-il la peine de prendre de l'avance sur le GEO maintenant ?",
    a: "Parce que presque personne ne le travaille encore. Très peu d'agences combinent Shopware et GEO, et préparer votre boutique maintenant vous donne une présence dans l'IA avant que le canal se sature, tout comme ce qui s'est passé avec le SEO à ses débuts.",
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
            { label: isEn ? "GEO for Shopware & Agentic Commerce" : "GEO pour Shopware et Agentic Commerce" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">Shopware · GEO</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "GEO for Shopware: Sell via ChatGPT with Agentic Commerce"
            : "GEO pour Shopware : vendre via ChatGPT avec l'Agentic Commerce"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Shopware 6.7.9 brings native Agentic Commerce and very few stores are taking advantage of it. Here is how to prepare yours to sell through AI before your competition does."
            : "Shopware 6.7.9 intègre l'Agentic Commerce natif et très peu de boutiques en profitent. Voici comment préparer la vôtre pour vendre via l'IA avant votre concurrence."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Agentic Commerce: the new feature in Shopware 6.7.9" : "L'Agentic Commerce : la nouveauté de Shopware 6.7.9"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Shopware 6.7.9 incorporates Agentic Commerce natively: an API that lets AI assistants such as ChatGPT and Perplexity discover products from your store, recommend them and facilitate the purchase directly from the conversation, without the user going through a traditional website. It is a new sales channel, and for now with very little competition. Whoever activates it and sets it up properly appears where almost no one else is yet."
            : "Shopware 6.7.9 intègre l'Agentic Commerce de manière native : une API qui permet aux assistants IA comme ChatGPT et Perplexity de découvrir les produits de votre boutique, de les recommander et de faciliter l'achat directement depuis la conversation, sans que l'utilisateur passe par le site web traditionnel. C'est un nouveau canal de vente, et pour l'instant avec très peu de concurrence. Celui qui l'active et le prépare bien apparaît là où presque personne n'est encore."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What GEO is and why it matters for ecommerce" : "Qu'est-ce que le GEO et pourquoi il compte pour le e-commerce"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "GEO (Generative Engine Optimization) is the discipline of optimising your presence so that AI engines cite and recommend you. In ecommerce it is especially relevant: when someone asks an AI for a product recommendation, the engine chooses a handful of stores to mention. Being among them is equivalent to appearing in the first Google result, but in a channel that your competition has barely started working on."
            : "Le GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser votre présence pour que les moteurs IA vous citent et vous recommandent. En e-commerce, c'est particulièrement pertinent : quand quelqu'un demande à une IA une recommandation de produit, le moteur choisit quelques boutiques à mentionner. Figurer parmi elles équivaut à apparaître dans le premier résultat Google, mais dans un canal que votre concurrence a à peine commencé à travailler."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Technical GEO for your Shopware store" : "GEO technique pour votre boutique Shopware"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Preparing a store for AI involves concrete technical work. Your robots.txt must allow AI crawler access (OpenAI's GPTBot, Anthropic's ClaudeBot, Perplexity's PerplexityBot); block them and the AI cannot learn about your catalogue. A complete Product schema and product pages with citable content — clear data, specifications, answers to common questions — help the model understand and cite you. A consistent NAP (name, address, phone) and an llms.txt file reinforce your identity. And verified reviews act as trust signals for LLMs, just as they do for people."
            : "Préparer une boutique pour l'IA comporte une couche technique concrète. Votre robots.txt doit autoriser l'accès des robots IA (GPTBot d'OpenAI, ClaudeBot d'Anthropic, PerplexityBot de Perplexity) ; si vous les bloquez, l'IA ne peut pas connaître votre catalogue. Un schéma Product complet et des fiches avec du contenu citable — données claires, spécifications, réponses aux questions courantes — facilitent la compréhension et la citation par le modèle. Un NAP cohérent (nom, adresse, téléphone) et un fichier llms.txt renforcent votre identité. Et les avis vérifiés fonctionnent comme signaux de confiance pour les LLMs, tout comme pour les personnes."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Want ChatGPT to recommend your store's products?"
              : "Vous voulez que ChatGPT recommande les produits de votre boutique ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We prepare your Shopware store with GEO and Agentic Commerce so AI discovers, recommends and sells your catalogue before your competition does."
              : "Nous préparons votre boutique Shopware avec le GEO et l'Agentic Commerce pour que l'IA découvre, recommande et vende votre catalogue avant votre concurrence."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Getting your store ready for Agentic Commerce" : "Préparer votre boutique pour l'Agentic Commerce"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Beyond GEO, Agentic Commerce requires the store to be ready to respond to a machine. That means a fast catalogue API (the AI queries in real time), stock information updated to the second (it cannot recommend something that is out of stock) and complete, structured product data (price, variants, attributes, lead times). A Shopware store with these foundations in place can sell agentically from day one when the channel matures."
            : "Au-delà du GEO, l'Agentic Commerce exige que la boutique soit prête à répondre à une machine. Cela signifie une API de catalogue rapide (l'IA interroge en temps réel), des informations de stock mises à jour à la seconde (elle ne peut pas recommander ce qui n'est pas disponible) et des données produit complètes et structurées (prix, variantes, attributs, délais). Une boutique Shopware avec ces fondations bien posées peut vendre de façon agentique dès le premier jour où le canal mûrit."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Competitive advantage: Shopware + GEO" : "Avantage concurrentiel : Shopware + GEO"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Here is the real opportunity. Very few agencies combine Shopware and GEO, and almost no store has its catalogue prepared for agentic sales. Getting ahead now — when the channel is just being born — allows you to build authority and AI presence before saturation arrives. It is the same type of advantage that early SEO adopters had when Google was young."
            : "Voici la vraie opportunité. Très peu d'agences travaillent la combinaison Shopware et GEO, et presque aucune boutique n'a son catalogue préparé pour la vente agentique. Prendre de l'avance maintenant — quand le canal naît à peine — permet de construire une autorité et une présence dans l'IA avant que la saturation n'arrive. C'est le même type d'avantage qu'ont eu ceux qui ont misé sur le SEO quand Google était jeune."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Get ahead in AI commerce" : "Prenez de l'avance dans le commerce IA"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We are pioneers in GEO. We prepare your Shopware store for Agentic Commerce and for AI to recommend it when your customers ask."
              : "Nous sommes pionniers en GEO. Nous préparons votre boutique Shopware pour l'Agentic Commerce et pour que l'IA la recommande quand vos clients posent des questions."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get in touch" : "Nous contacter"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "GEO service" : "Service GEO"}
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

        <BlogBanner lang={lang} />

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="shopware-geo-agentic-commerce" />
    </>
  );
}
