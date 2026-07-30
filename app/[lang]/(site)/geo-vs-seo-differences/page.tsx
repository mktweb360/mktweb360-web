import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "GEO vs SEO: Key Differences and How to Combine Both Strategies"
      : "GEO vs SEO : Différences Clés et Comment Combiner les Deux Stratégies",
    description: isEn
      ? "What sets GEO (Generative Engine Optimization) apart from traditional SEO, why both matter, and how to integrate both strategies for maximum visibility in search engines and AI."
      : "Ce qui différencie le GEO (Generative Engine Optimization) du SEO traditionnel, pourquoi les deux comptent et comment intégrer les deux stratégies pour une visibilité maximale.",
    alternates: alternatesFor(`/${lang}/geo-vs-seo-differences/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/geo-vs-seo-differences/`,
    },
    openGraph: {
      title: isEn
        ? "GEO vs SEO: Differences and How to Use Them Together | Mkt Web 360"
        : "GEO vs SEO : Différences et Comment les Utiliser Ensemble | Mkt Web 360",
      description: isEn
        ? "What sets GEO apart from traditional SEO, why both matter, and how to integrate both strategies for maximum visibility."
        : "Ce qui différencie le GEO du SEO traditionnel, pourquoi les deux comptent et comment intégrer les deux stratégies.",
      url: `https://www.mktweb360.com/${lang}/geo-vs-seo-differences/`,
      images: [{ url: "https://www.mktweb360.com/og-geo-vs-seo-diferencias.jpg", width: 1200, height: 630 }],
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
      ? "GEO vs SEO: Key Differences and How to Combine Both Strategies"
      : "GEO vs SEO : Différences Clés et Comment Combiner les Deux Stratégies",
    description: isEn
      ? "What sets GEO apart from traditional SEO, why both matter, and how to integrate both strategies for maximum visibility."
      : "Ce qui différencie le GEO du SEO traditionnel, pourquoi les deux comptent et comment intégrer les deux stratégies.",
    author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    publisher: {
      "@type": "Organization",
      name: "Mkt Web 360 SLU",
      logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" },
    },
    datePublished: "2026-06-13",
    dateModified: "2026-06-23",
    image: "https://www.mktweb360.com/og-geo-vs-seo-diferencias.jpg",
    url: `https://www.mktweb360.com/${lang}/geo-vs-seo-differences/`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.mktweb360.com/${lang}/geo-vs-seo-differences/` },
  };

  const DIFFS = isEn
    ? [
        { label: "Objective", text: "SEO seeks positions in Google's search results; GEO seeks to be cited or recommended in AI-generated responses." },
        { label: "Measurement", text: "SEO is highly measurable (position, impressions, clicks, organic traffic). GEO is much harder to measure precisely — mentions in ChatGPT responses do not generate directly trackable traffic." },
        { label: "Speed of results", text: "SEO has measurable timelines (3–12 months to rank for competitive terms). GEO is more diffuse — a brand can go from never being cited to being regularly cited in AI responses without a single identifiable change." },
        { label: "Optimal content type", text: "SEO favours detailed content with well-crafted keywords and impeccable technical structure. GEO favours content that demonstrates real authority, with data, concrete experiences and a clear brand positioning." },
        { label: "Backlinks", text: "In SEO, backlinks are a fundamental ranking factor. In GEO, backlinks from high-authority sources (media, associations, academic publications) are also important, but more as a credibility signal than an algorithmic ranking factor." },
      ]
    : [
        { label: "Objectif", text: "Le SEO vise des positions dans les résultats de recherche Google ; le GEO vise à être cité ou recommandé dans les réponses générées par l'IA." },
        { label: "Mesure", text: "Le SEO est très mesurable (position, impressions, clics, trafic organique). Le GEO est beaucoup plus difficile à mesurer précisément — les mentions dans les réponses de ChatGPT ne génèrent pas de trafic directement traçable." },
        { label: "Vitesse des résultats", text: "Le SEO a des délais mesurables (3 à 12 mois pour se positionner sur des termes compétitifs). Le GEO est plus diffus — une marque peut passer de n'être jamais citée à l'être régulièrement dans les réponses IA sans qu'un seul changement ponctuel soit identifiable." },
        { label: "Type de contenu optimal", text: "Le SEO favorise un contenu détaillé avec des mots-clés bien travaillés et une structure technique impeccable. Le GEO favorise un contenu qui démontre une réelle autorité, avec des données, des expériences concrètes et un positionnement de marque clair." },
        { label: "Backlinks", text: "En SEO, les backlinks sont un facteur de classement fondamental. En GEO, les backlinks depuis des sources à haute autorité (médias, associations, publications académiques) sont également importants, mais davantage comme signal de crédibilité que comme facteur de classement algorithmique." },
      ];

  const PRIORITIES = isEn
    ? [
        { bold: "For local businesses (plumbers, dentists, restaurants, physical shops):", text: "Local SEO remains the most important channel by far. Local searches ('plumber near me', 'restaurant in the city centre') still receive responses primarily in Google Maps and organic results, not in ChatGPT. GEO has less practical relevance for this profile." },
        { bold: "For e-commerce:", text: "Product and category SEO is fundamental for capturing buyers with clear purchase intent. GEO can be relevant for searches like 'best X for Y' where AI is already responding with product recommendations." },
        { bold: "For professional services and B2B:", text: "GEO is becoming very relevant because B2B decision-makers use ChatGPT or Perplexity to research questions like 'what are the best digital marketing agencies for startups?'. Appearing in these responses can generate high-quality leads." },
        { bold: "For brands with ambitions to become sector references:", text: "GEO should be at the centre of the content strategy. Being cited by ChatGPT as a reference on a topic is the digital equivalent of being the brand 'everyone knows' in the sector." },
      ]
    : [
        { bold: "Pour les entreprises locales (plombiers, dentistes, restaurants, commerces physiques) :", text: "Le SEO local reste de loin le canal le plus important. Les recherches locales (« plombier près de moi », « restaurant en centre-ville ») obtiennent encore des réponses principalement dans Google Maps et les résultats organiques, pas dans ChatGPT. Le GEO a moins de pertinence pratique pour ce profil." },
        { bold: "Pour l'e-commerce :", text: "Le SEO de produit et de catégorie est fondamental pour capter les acheteurs avec une intention d'achat claire. Le GEO peut être pertinent pour les recherches du type « meilleur X pour Y » où l'IA répond déjà avec des recommandations de produits." },
        { bold: "Pour les services professionnels et le B2B :", text: "Le GEO devient très pertinent car les décideurs B2B utilisent ChatGPT ou Perplexity pour des questions de recherche comme « quelles sont les meilleures agences de marketing digital pour les startups ? ». Apparaître dans ces réponses peut générer des leads de haute qualité." },
        { bold: "Pour les marques avec ambition de devenir des références de secteur :", text: "Le GEO doit être au cœur de la stratégie de contenu. Être cité par ChatGPT comme référence sur un sujet est l'équivalent numérique d'être la marque que « tout le monde connaît » dans le secteur." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "GEO vs SEO differences" : "Différences GEO vs SEO" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "AI · Strategy" : "IA · Stratégie"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "GEO vs SEO: key differences and how to combine both strategies"
            : "GEO vs SEO : différences clés et comment combiner les deux stratégies"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? (
            <>
              <Link href={`/${lang}/seo-web-positioning/`} className="text-accent-500 hover:underline">
                SEO optimises your presence in Google
              </Link>
              . GEO (Generative Engine Optimization) optimises your presence in ChatGPT, Perplexity and Gemini. They are
              not alternatives — they complement each other. But they require different approaches that are worth
              understanding.
            </>
          ) : (
            <>
              <Link href={`/${lang}/seo-web-positioning/`} className="text-accent-500 hover:underline">
                Le SEO optimise votre présence sur Google
              </Link>
              . Le GEO (Generative Engine Optimization) optimise votre présence sur ChatGPT, Perplexity et Gemini. Ils
              ne sont pas exclusifs — ils se complètent. Mais ils nécessitent des approches différentes qui méritent
              d&apos;être comprises.
            </>
          )}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "What traditional SEO is and what still works"
            : "Ce qu'est le SEO traditionnel et ce qui fonctionne encore"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "SEO (Search Engine Optimisation) is the discipline of optimising a website to appear in the top results of traditional search engines, primarily Google. It has been the primary organic digital traffic channel for 25 years and remains absolutely relevant in 2026."
            : "Le SEO (Search Engine Optimization) est la discipline qui consiste à optimiser un site web pour apparaître dans les premiers résultats des moteurs de recherche traditionnels, principalement Google. C'est le principal canal de trafic organique numérique depuis 25 ans et il reste absolument pertinent en 2026."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "SEO works through a well-known process: Google's bots crawl web pages, index them in a huge database and rank them according to hundreds of factors to display the most relevant for each query. The most important factors remain: domain authority (measured in part by backlinks), the quality and relevance of content, the technical performance of the page (speed, mobile-first, Core Web Vitals) and user behaviour signals (time on page, bounce rate, clicks)."
            : "Le SEO fonctionne à travers un processus bien connu : les robots de Google parcourent les pages web, les indexent dans une immense base de données et les classent selon des centaines de facteurs pour afficher les plus pertinentes pour chaque requête. Les facteurs les plus importants restent : l'autorité du domaine (mesurée en partie par les backlinks), la qualité et la pertinence du contenu, la performance technique de la page (vitesse, mobile-first, Core Web Vitals) et les signaux comportementaux des utilisateurs (temps sur la page, taux de rebond, clics)."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "In 2026, Google still processes more than 8.5 billion searches per day. The vast majority of these searches still end in clicks to websites in the organic results. Claiming that 'SEO has died with AI' is premature — what has changed is the type of response Google gives for some informational queries, not the total volume of searches."
            : "En 2026, Google traite encore plus de 8,5 milliards de recherches par jour. La grande majorité de ces recherches se terminent encore par des clics vers des sites web dans les résultats organiques. Affirmer que « le SEO est mort avec l'IA » est prématuré — ce qui a changé, c'est le type de réponse que Google donne pour certaines requêtes informatives, pas le volume total de recherches."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "What GEO is and how AI optimisation works"
            : "Ce qu'est le GEO et comment fonctionne l'optimisation pour les IA"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn ? (
            <>
              <Link href={`/${lang}/geo-generative-engine-optimization/`} className="text-accent-500 hover:underline">
                GEO (Generative Engine Optimisation)
              </Link>{" "}
              is the discipline of optimising the presence of a brand, company or expert in generative response engines:
              ChatGPT, Perplexity, Claude, Gemini and Google&apos;s AI Overviews. When someone asks ChatGPT &quot;what
              is the best digital marketing agency in the UK?&quot;, GEO determines whether your company appears in the
              generated response or not.
            </>
          ) : (
            <>
              Le{" "}
              <Link href={`/${lang}/geo-generative-engine-optimization/`} className="text-accent-500 hover:underline">
                GEO (Generative Engine Optimization)
              </Link>{" "}
              est la discipline d&apos;optimisation de la présence d&apos;une marque, d&apos;une entreprise ou
              d&apos;un expert dans les moteurs de réponse génératifs : ChatGPT, Perplexity, Claude, Gemini et les AI
              Overviews de Google. Quand quelqu&apos;un demande à ChatGPT « quelle est la meilleure agence de marketing
              digital en France ? », le GEO détermine si votre entreprise apparaît dans la réponse générée ou non.
            </>
          )}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Unlike SEO, which works with ranking algorithms based on quantifiable signals, GEO works with language models that have been trained on internet data and 'cite' sources according to the frequency and quality with which an entity or concept appears in that training corpus and in updated sources such as the real-time web (Perplexity, Gemini) or uploaded documents (ChatGPT with Bing access)."
            : "Contrairement au SEO, qui fonctionne avec des algorithmes de classement basés sur des signaux quantifiables, le GEO travaille avec des modèles de langage entraînés sur des données internet qui « citent » des sources selon la fréquence et la qualité avec lesquelles une entité ou un concept apparaît dans ce corpus d'entraînement et dans des sources actualisées comme le web en temps réel (Perplexity, Gemini) ou des documents téléchargés (ChatGPT avec accès à Bing)."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The signals that most influence GEO visibility are: mentions in authoritative media (digital press, sector publications), backlinks from highly credible sources, well-implemented structured data on the website (Schema.org), consistent presence on Wikipedia or Wikidata for well-known brands, and quality content that demonstrates real expertise (E-E-A-T)."
            : "Les signaux qui influencent le plus la visibilité GEO sont : les mentions dans les médias d'autorité (presse numérique, publications sectorielles), les backlinks depuis des sources à haute crédibilité, les données structurées bien implémentées sur le site web (Schema.org), la présence cohérente sur Wikipedia ou Wikidata pour les marques connues, et un contenu de qualité qui démontre une expertise réelle (E-E-A-T)."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The key differences between SEO and GEO" : "Les différences clés entre SEO et GEO"}
        </h2>
        {DIFFS.map(({ label, text }) => (
          <p key={label} className="text-gray-700 leading-relaxed mb-4">
            <strong>{label}:</strong> {text}
          </p>
        ))}

        <BlogBanner variant="geo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Why you need both: SEO and GEO as an integrated strategy"
            : "Pourquoi vous avez besoin des deux : SEO et GEO comme stratégie intégrée"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "SEO and GEO are not alternative strategies but complementary ones. SEO remains the channel with the highest volume of qualified traffic for most businesses. GEO is the emerging channel that captures an audience increasingly using AI as the entry point for their queries."
            : "Le SEO et le GEO ne sont pas des stratégies alternatives mais complémentaires. Le SEO reste le canal avec le plus grand volume de trafic qualifié pour la plupart des entreprises. Le GEO est le canal émergent qui capture une audience utilisant de plus en plus l'IA comme point d'entrée pour ses requêtes."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most practical point is that many tactics that improve SEO also improve GEO. Creating quality content that demonstrates real expertise, obtaining mentions in authoritative media, implementing structured data correctly: all of this benefits both disciplines. They are not separate tactics competing for budget — they are the same good practices applied with awareness that multiple 'judges' are evaluating the content."
            : "Le point le plus pratique est que de nombreuses tactiques qui améliorent le SEO améliorent aussi le GEO. Créer du contenu de qualité qui démontre une vraie expertise, obtenir des mentions dans des médias d'autorité, implémenter correctement des données structurées : tout cela bénéficie aux deux disciplines. Ce ne sont pas des tactiques séparées en compétition pour un budget — ce sont les mêmes bonnes pratiques appliquées avec la conscience que plusieurs « juges » évaluent le contenu."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The main additional effort GEO requires compared to SEO is a focus on building brand authority: having a clear and recognisable point of view in your sector, publishing in external media as well as on your own blog, and ensuring that information about your company is consistent and verifiable across multiple external sources."
            : "Le principal effort supplémentaire que le GEO demande par rapport au SEO est la mise en avant de la construction de l'autorité de marque : avoir un point de vue clair et reconnaissable dans votre secteur, publier dans des médias externes en plus de votre propre blog, et s'assurer que les informations sur votre entreprise sont cohérentes et vérifiables dans de multiples sources externes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to prioritise SEO vs GEO by business type"
            : "Comment prioriser SEO vs GEO selon le type d'entreprise"}
        </h2>
        {PRIORITIES.map(({ bold, text }) => (
          <p key={bold} className="text-gray-700 leading-relaxed mb-4">
            <strong>{bold}</strong> {text}
          </p>
        ))}

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm lang={lang} />
          </div>
        </section>
      </div>

      <RelatedArticles category={isEn ? "AI · Strategy" : "IA · Stratégie"} />
    </>
  );
}
