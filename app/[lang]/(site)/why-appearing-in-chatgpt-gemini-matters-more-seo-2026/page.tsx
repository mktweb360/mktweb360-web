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
      ? "Why Appearing in ChatGPT, Perplexity and Gemini Matters More Than SEO in 2026"
      : "Pourquoi Apparaître dans ChatGPT, Perplexity et Gemini Compte Plus que le SEO en 2026",
    description: isEn
      ? "Millions of people no longer search on Google. They ask ChatGPT, Perplexity or Gemini. If your business doesn't appear in their responses, you're losing clients without knowing it. GEO guide 2026."
      : "Des millions de personnes ne cherchent plus sur Google. Ils demandent à ChatGPT, Perplexity ou Gemini. Si votre entreprise n'apparaît pas dans leurs réponses, vous perdez des clients sans le savoir. Guide GEO 2026.",
    alternates: alternatesFor(`/${lang}/why-appearing-in-chatgpt-gemini-matters-more-seo-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/why-appearing-in-chatgpt-gemini-matters-more-seo-2026/`,
    },
    openGraph: {
      title: isEn
        ? "Why Appearing in ChatGPT and Gemini Matters More Than SEO in 2026 | Mkt Web 360"
        : "Pourquoi Apparaître dans ChatGPT et Gemini Compte Plus que le SEO en 2026 | Mkt Web 360",
      description: isEn
        ? "Millions of people no longer search on Google. They ask ChatGPT, Perplexity or Gemini. If your business doesn't appear in their responses, you're losing clients without knowing it."
        : "Des millions de personnes ne cherchent plus sur Google. Ils demandent à ChatGPT, Perplexity ou Gemini. Si votre entreprise n'apparaît pas dans leurs réponses, vous perdez des clients sans le savoir.",
      type: "article",
      url: `https://www.mktweb360.com/${lang}/why-appearing-in-chatgpt-gemini-matters-more-seo-2026/`,
      images: [{ url: "https://www.mktweb360.com/og-que-es-geo-generative-engine-optimization.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isEn
      ? "Why Appearing in ChatGPT, Perplexity and Gemini Matters More Than SEO in 2026"
      : "Pourquoi Apparaître dans ChatGPT, Perplexity et Gemini Compte Plus que le SEO en 2026",
    author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
    publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: "2026-07-07",
    image: "https://www.mktweb360.com/og-que-es-geo-generative-engine-optimization.jpg",
    url: `https://www.mktweb360.com/${lang}/why-appearing-in-chatgpt-gemini-matters-more-seo-2026/`,
    mainEntityOfPage: `https://www.mktweb360.com/${lang}/why-appearing-in-chatgpt-gemini-matters-more-seo-2026/`,
  };

  const FAQS = isEn
    ? [
        {
          q: "What is GEO and how does it differ from SEO?",
          a: "SEO optimises your website to appear in Google's results. GEO (Generative Engine Optimization) optimises your content so that AI models like ChatGPT, Gemini, Perplexity or Claude cite you in their responses. They are complementary: good SEO facilitates GEO, but they are not the same thing.",
        },
        {
          q: "How many people use ChatGPT to search for things in 2026?",
          a: "ChatGPT surpasses 800 million weekly users in 2026. Millions of people use it to resolve queries, compare products, ask for supplier recommendations and make purchase decisions, especially in B2B sectors and professional services.",
        },
        {
          q: "Can an SME or freelancer appear in ChatGPT's responses?",
          a: "Yes. AI models cite sources based on semantic authority, content quality and technical structure, not just on company size. An SME with well-structured content, correct schema markup and authority in its niche can appear ahead of big brands.",
        },
        {
          q: "Where do I start with GEO for my business?",
          a: "The starting point is solid technical SEO: website on HTTPS, Core Web Vitals in the green, correct schema markup and content that answers real questions. From there, GEO adds: llms.txt, verifiable entities, question-and-answer format and demonstrated content authority.",
        },
        {
          q: "How long does GEO take to work?",
          a: "Similar timelines to SEO: 3–6 months for initial results, 6–12 months for consolidation. Consistent work on content and authority generates cumulative results.",
        },
      ]
    : [
        {
          q: "Qu'est-ce que le GEO et en quoi diffère-t-il du SEO ?",
          a: "Le SEO optimise votre site web pour apparaître dans les résultats de Google. Le GEO (Generative Engine Optimization) optimise votre contenu pour que les modèles d'IA comme ChatGPT, Gemini, Perplexity ou Claude vous citent dans leurs réponses. Ils sont complémentaires : un bon SEO facilite le GEO, mais ce n'est pas la même chose.",
        },
        {
          q: "Combien de personnes utilisent ChatGPT pour chercher des informations en 2026 ?",
          a: "ChatGPT dépasse les 800 millions d'utilisateurs hebdomadaires en 2026. Des millions de personnes l'utilisent pour résoudre des doutes, comparer des produits, demander des recommandations de fournisseurs et prendre des décisions d'achat, notamment dans les secteurs B2B et les services professionnels.",
        },
        {
          q: "Une PME ou un indépendant peut-il apparaître dans les réponses de ChatGPT ?",
          a: "Oui. Les modèles d'IA citent des sources en fonction de l'autorité sémantique, de la qualité du contenu et de la structure technique, pas seulement de la taille de l'entreprise. Une PME avec un contenu bien structuré, un schema markup correct et de l'autorité dans sa niche peut apparaître devant de grandes marques.",
        },
        {
          q: "Par où commencer avec le GEO pour mon entreprise ?",
          a: "Le point de départ est un SEO technique solide : site web en HTTPS, Core Web Vitals au vert, schema markup correct et contenu qui répond à de vraies questions. À partir de là, le GEO ajoute : llms.txt, entités vérifiables, format question-réponse et autorité de contenu démontrée.",
        },
        {
          q: "Combien de temps faut-il pour que le GEO fonctionne ?",
          a: "Des délais similaires au SEO : 3 à 6 mois pour des résultats initiaux, 6 à 12 mois pour la consolidation. Un travail constant sur le contenu et l'autorité génère des résultats cumulatifs.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Why ChatGPT visibility matters more than SEO in 2026" : "Pourquoi la visibilité ChatGPT compte plus que le SEO en 2026" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "GEO · AI Positioning" : "GEO · Positionnement IA"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">
              {isEn ? "7 July 2026" : "7 juillet 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Why appearing in ChatGPT, Perplexity and Gemini matters more than SEO in 2026"
              : "Pourquoi apparaître dans ChatGPT, Perplexity et Gemini compte plus que le SEO en 2026"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn ? (
              <>
                Millions of people no longer type queries into Google — they ask ChatGPT, Perplexity or Gemini directly.
                If your business doesn&apos;t appear in those responses, you&apos;re losing clients without even knowing
                it.{" "}
                <Link href={`/${lang}/geo-generative-engine-optimization/`} className="text-accent-500 hover:underline">
                  GEO or AI positioning
                </Link>{" "}
                is the discipline that determines whether the machine mentions you or your competition.
              </>
            ) : (
              <>
                Des millions de personnes ne tapent plus de requêtes dans Google — elles demandent directement à
                ChatGPT, Perplexity ou Gemini. Si votre entreprise n&apos;apparaît pas dans ces réponses, vous perdez
                des clients sans même le savoir.{" "}
                <Link href={`/${lang}/geo-optimisation-moteurs-generatifs/`} className="text-accent-500 hover:underline">
                  Le GEO ou positionnement IA
                </Link>{" "}
                est la discipline qui détermine si la machine vous mentionne ou mentionne votre concurrence.
              </>
            )}
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "For twenty years, the question was singular: how to appear first in Google. In 2026 that question has split in two. More and more users no longer see a list of ten blue links, but a response drafted by an artificial intelligence that decides, on their behalf, which sources deserve to be cited. Appearing in that response has become the new first position, and it does not always coincide with who dominates the classic search engine."
              : "Pendant vingt ans, la question était unique : comment apparaître en premier sur Google. En 2026, cette question s'est dédoublée. De plus en plus d'utilisateurs ne voient plus une liste de dix liens bleus, mais une réponse rédigée par une intelligence artificielle qui décide, à leur place, quelles sources méritent d'être citées. Apparaître dans cette réponse est devenu la nouvelle première position, et elle ne coïncide pas toujours avec celui qui domine le moteur de recherche classique."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "How people search in 2026: the change that has already happened"
              : "Comment les gens cherchent en 2026 : le changement qui a déjà eu lieu"}
          </h2>
          <p>
            {isEn
              ? "The behavioural shift is not a forecast: it has already happened. ChatGPT surpasses 800 million weekly users, and a growing portion of those people use it for exactly what they previously used Google for: resolving queries, comparing products and asking for supplier recommendations. Gartner estimates that searches on the traditional search engine will fall by around 25% before the end of 2026, precisely because part of those queries are migrating to conversational assistants."
              : "Le changement de comportement n'est pas une prévision : il a déjà eu lieu. ChatGPT dépasse les 800 millions d'utilisateurs hebdomadaires, et une partie croissante de ces personnes l'utilise exactement pour ce qu'ils utilisaient Google auparavant : résoudre des doutes, comparer des produits et demander des recommandations de fournisseurs. Gartner estime que les recherches sur le moteur de recherche traditionnel chuteront d'environ 25 % avant la fin 2026, précisément parce qu'une partie de ces requêtes migrent vers les assistants conversationnels."}
          </p>
          <p>
            {isEn
              ? "And it is not just about independent assistants. Google integrates its own generative responses — AI Overviews — in 58% of searches. That means even when the user stays in Google, they often get an AI-drafted response before scrolling down to the organic results. The search interface has changed, and with it the rules of visibility."
              : "Et il ne s'agit pas seulement d'assistants indépendants. Google intègre ses propres réponses génératives, les AI Overviews, dans 58 % des recherches. Cela signifie que même lorsque l'utilisateur reste sur Google, il obtient souvent une réponse rédigée par l'IA avant de faire défiler les résultats organiques. L'interface de la recherche a changé, et avec elle les règles de la visibilité."}
          </p>
          <p>
            {isEn
              ? "In professional decisions the phenomenon is even more pronounced: 94% of B2B buying groups use generative AI before speaking with a supplier. When that buyer asks the machine who can help them, your brand either appears in the response or, simply, does not exist in that conversation."
              : "Dans les décisions professionnelles, le phénomène est encore plus accentué : 94 % des groupes d'achat B2B utilisent l'IA générative avant de parler à un fournisseur. Quand cet acheteur demande à la machine qui peut l'aider, votre marque apparaît dans la réponse ou, simplement, n'existe pas dans cette conversation."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "What GEO is and why it is not the same as SEO"
              : "Ce qu'est le GEO et pourquoi ce n'est pas la même chose que le SEO"}
          </h2>
          <p>
            {isEn ? (
              <>
                GEO (Generative Engine Optimization) is the discipline that optimises your content so that AI models
                cite you in their responses. It shares foundations with{" "}
                <Link href={`/${lang}/seo-web-positioning/`} className="text-accent-500 hover:underline">
                  organic SEO
                </Link>
                , but pursues a different objective: not fighting for a position in a list, but being the source that
                the machine chooses to build its explanation.
              </>
            ) : (
              <>
                Le GEO (Generative Engine Optimization) est la discipline qui optimise votre contenu pour que les
                modèles d&apos;IA vous citent dans leurs réponses. Il partage des fondements avec le{" "}
                <Link href={`/${lang}/positionnement-seo/`} className="text-accent-500 hover:underline">
                  SEO organique
                </Link>
                , mais poursuit un objectif différent : ne pas se battre pour une position dans une liste, mais être la
                source que la machine choisit pour construire son explication.
              </>
            )}
          </p>
          <p>
            {isEn ? (
              <>
                The practical difference is important and it is worth understanding the{" "}
                <Link href={`/${lang}/geo-vs-seo-differences/`} className="text-accent-500 hover:underline">
                  differences between GEO and SEO
                </Link>{" "}
                clearly. SEO rewards domain authority, links and keywords. GEO rewards semantic clarity, question-and-answer
                structure and verifiable entities that AI can understand and relate without ambiguity. Good technical
                SEO is the foundation on which GEO is built, but it does not replace it.
              </>
            ) : (
              <>
                La différence pratique est importante et il vaut la peine de bien comprendre les{" "}
                <Link href={`/${lang}/geo-vs-seo-differences/`} className="text-accent-500 hover:underline">
                  différences entre GEO et SEO
                </Link>
                . Le SEO récompense l&apos;autorité du domaine, les liens et les mots-clés. Le GEO récompense la
                clarté sémantique, la structure question-réponse et les entités vérifiables que l&apos;IA peut
                comprendre et relier sans ambiguïté. Un bon SEO technique est le socle sur lequel se construit le
                GEO, mais il ne le remplace pas.
              </>
            )}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Why an SME can appear where a big brand does not"
              : "Pourquoi une PME peut apparaître là où une grande marque n'apparaît pas"}
          </h2>
          <p>
            {isEn
              ? "Here is the good news for small businesses. AI models do not distribute citations by company size or marketing budget, but by semantic authority on a specific topic. When the assistant seeks the best source to answer a specific question, it values content that is clear, structured and demonstrably competent in that niche."
              : "Voici la bonne nouvelle pour les petites entreprises. Les modèles d'IA ne distribuent pas les citations par taille d'entreprise ni par budget marketing, mais par autorité sémantique sur un sujet concret. Quand l'assistant cherche la meilleure source pour répondre à une question spécifique, il valorise un contenu clair, structuré et démontrablement compétent dans cette niche."}
          </p>
          <p>
            {isEn
              ? "That breaks the usual hierarchy. A big brand may dominate hundreds of generic terms and yet not be the reference for a very specific query in your sector. An SME with well-crafted content, correct schema markup and a focus on its specialism can become exactly that reference, and the AI has no incentive to prefer the large player if the small one answers the question better."
              : "Cela rompt la hiérarchie habituelle. Une grande marque peut dominer des centaines de termes génériques et pourtant ne pas être la référence sur une requête très spécifique de votre secteur. Une PME avec un contenu bien travaillé, un schema markup correct et un focus sur sa spécialité peut devenir exactement cette référence, et l'IA n'a aucune raison de préférer le grand acteur si le petit répond mieux à la question."}
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "The three signals that AI looks for in your content"
              : "Les trois signaux que l'IA recherche dans votre contenu"}
          </h2>
          <p>
            {isEn
              ? "Simplified greatly, generative engines evaluate three things. The first is structure: content organised in questions and answers, with clear headings and paragraphs that each resolve a single idea, is much easier to extract and cite. The second is semantic authority: your brand appearing consistently linked to the topics in which you want to be a reference, with verifiable entities and data."
              : "En simplifiant beaucoup, les moteurs génératifs évaluent trois choses. La première est la structure : un contenu organisé en questions et réponses, avec des titres clairs et des paragraphes qui résolvent chacun une idée, est beaucoup plus facile à extraire et à citer. La deuxième est l'autorité sémantique : votre marque apparaissant de manière cohérente liée aux sujets sur lesquels vous voulez être une référence, avec des entités et des données vérifiables."}
          </p>
          <p>
            {isEn
              ? "The third is technical solidity: website on HTTPS, good performance, correct schema markup and clean signals for AI crawlers. None of these three signals is exotic; all are built on the work that a good SEO professional already does, ordered now with the logic that the reader is not only a person, but also a machine that is going to summarise."
              : "La troisième est la solidité technique : site web en HTTPS, bon rendement, schema markup correct et signaux propres pour les crawlers IA. Aucun de ces trois signaux n'est exotique ; tous se construisent sur le travail qu'un bon professionnel SEO fait déjà, ordonné maintenant avec la logique que le lecteur n'est pas seulement une personne, mais aussi une machine qui va résumer."}
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Does your business appear when people ask AI?"
                : "Votre entreprise apparaît-elle quand les gens posent des questions à l'IA ?"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we help SMEs and freelancers position themselves in ChatGPT, Gemini and Perplexity with a GEO strategy built on solid SEO foundations."
                : "Chez Mkt Web 360, nous aidons les PME et les indépendants à se positionner dans ChatGPT, Gemini et Perplexity avec une stratégie GEO construite sur des bases SEO solides."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </Link>
              <Link
                href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "View GEO service" : "Voir le service GEO"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "The risk of doing nothing" : "Le risque de ne rien faire"}
          </h2>
          <p>
            {isEn
              ? "The cost of ignoring GEO does not appear in an invoice, but in the opportunities that never arrive. When a potential client asks the AI for solutions in your sector and your brand does not appear, that sale is decided without you even entering the conversation. It is a silent loss, difficult to measure precisely because it leaves no trace in your analytics."
              : "Le coût d'ignorer le GEO n'apparaît pas dans une facture, mais dans les opportunités qui n'arrivent jamais. Quand un client potentiel demande à l'IA des solutions dans votre secteur et que votre marque n'apparaît pas, cette vente se décide sans que vous entriez même dans la conversation. C'est une perte silencieuse, difficile à mesurer précisément parce qu'elle ne laisse aucune trace dans vos analyses."}
          </p>
          <p>
            {isEn
              ? "Some wonder whether this means the classic search engine is finished. The short answer is no: it is alive, but now coexists with a new channel where visibility is earned differently. The sensible approach is not to choose between SEO and GEO, but to work both as a single digital presence strategy."
              : "Certains se demandent si cela signifie que le moteur de recherche classique est terminé. La réponse courte est non : il est vivant, mais coexiste désormais avec un nouveau canal où la visibilité se gagne d'une autre façon. L'approche sensée n'est pas de choisir entre SEO et GEO, mais de travailler les deux comme une seule stratégie de présence numérique."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Frequently asked questions about GEO and AI positioning"
              : "Questions fréquentes sur le GEO et le positionnement IA"}
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

          <p className="text-sm text-gray-500 pt-4">
            {isEn ? "Related service:" : "Service lié :"}{" "}
            <Link href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}/`} className="text-accent-500 hover:underline">
              {isEn ? "GEO · AI Positioning" : "GEO · Positionnement IA"}
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            ← {isEn ? "Back to blog" : "Retour au blog"}
          </Link>
        </nav>
      </article>

      <RelatedArticles currentSlug="why-appearing-in-chatgpt-gemini-matters-more-seo-2026" />
    </>
  );
}
