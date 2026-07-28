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
      ? "What Is GEO and How to Appear in ChatGPT for Your Business"
      : "Qu'est-ce que le GEO et comment apparaître dans ChatGPT pour votre entreprise",
    description: isEn
      ? "GEO positions your business in ChatGPT and Perplexity. If AI does not mention you when someone asks about your sector, you are losing customers. Practical guide for businesses."
      : "Le GEO positionne votre entreprise dans ChatGPT et Perplexity. Si l'IA ne vous mentionne pas quand quelqu'un pose une question sur votre secteur, vous perdez des clients. Guide pratique pour les entreprises.",
    alternates: alternatesFor(`/${lang}/geo-ai-positioning-chatgpt-businesses/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/geo-ai-positioning-chatgpt-businesses/`,
    },
    openGraph: {
      title: isEn
        ? "What Is GEO and How to Appear in ChatGPT for Your Business | Mkt Web 360"
        : "Qu'est-ce que le GEO et comment apparaître dans ChatGPT pour votre entreprise | Mkt Web 360",
      description: isEn
        ? "GEO positions your business in ChatGPT and Perplexity. Practical guide for businesses who want AI visibility."
        : "Le GEO positionne votre entreprise dans ChatGPT et Perplexity. Guide pratique pour les entreprises qui veulent une visibilité IA.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What exactly is GEO?",
    a: "GEO stands for Generative Engine Optimization: the set of techniques to make your business mentioned and cited in the responses of generative engines like ChatGPT, Perplexity, Gemini and Google's AI Overviews. Where SEO seeks positions in a list of links, GEO seeks to be the source the AI uses to build its response.",
  },
  {
    q: "Does GEO replace SEO?",
    a: "No. GEO builds on SEO. Most generative engines feed on well-structured content with authority and verifiable data — which is exactly what a good SEO strategy produces. The recommendation is to work on both: SEO for Google and GEO for AI responses.",
  },
  {
    q: "How do I know if ChatGPT already mentions my business?",
    a: "The most direct way is to ask. Put real queries about your sector and location to ChatGPT, Perplexity or Gemini — as a customer would — and observe whether your brand appears, in what context and against which competitors. That initial audit marks your starting point.",
  },
  {
    q: "How long does GEO take to show results?",
    a: "It depends on your brand's existing authority and how frequently models update their sources. Some engines with real-time search (like Perplexity) can reflect changes in weeks; trained models update in cycles. It is a medium-term strategy, not a switch.",
  },
  {
    q: "Does GEO work for a local business?",
    a: "Yes, and increasingly so. When someone asks an AI for a service in their city, the engine combines authority signals with local data: your Google Business Profile listing, reviews and consistent mentions. A local business with a solid digital presence has a lot to gain by appearing in those responses.",
  },
];

const FAQS_FR = [
  {
    q: "Qu'est-ce que le GEO exactement ?",
    a: "GEO signifie Generative Engine Optimization : l'ensemble des techniques pour que votre entreprise soit mentionnée et citée dans les réponses des moteurs génératifs comme ChatGPT, Perplexity, Gemini et les AI Overviews de Google. Là où le SEO cherche des positions dans une liste de liens, le GEO cherche à être la source que l'IA utilise pour construire sa réponse.",
  },
  {
    q: "Le GEO remplace-t-il le SEO ?",
    a: "Non. Le GEO s'appuie sur le SEO. La plupart des moteurs génératifs se nourrissent de contenu bien structuré, avec de l'autorité et des données vérifiables — ce qui est exactement ce que produit une bonne stratégie SEO. La recommandation est de travailler les deux : le SEO pour Google et le GEO pour les réponses IA.",
  },
  {
    q: "Comment savoir si ChatGPT mentionne déjà mon entreprise ?",
    a: "La façon la plus directe est de poser la question. Soumettez à ChatGPT, Perplexity ou Gemini des requêtes réelles de votre secteur et de votre zone — comme le ferait un client — et observez si votre marque apparaît, dans quel contexte et face à quels concurrents. Cet audit initial marque votre point de départ.",
  },
  {
    q: "Combien de temps faut-il pour voir les résultats du GEO ?",
    a: "Cela dépend de l'autorité préexistante de votre marque et de la fréquence à laquelle les modèles mettent à jour leurs sources. Certains moteurs avec recherche en temps réel (comme Perplexity) peuvent refléter des changements en quelques semaines ; les modèles entraînés se mettent à jour par cycles. C'est une stratégie de moyen terme, pas un interrupteur.",
  },
  {
    q: "Le GEO fonctionne-t-il pour une entreprise locale ?",
    a: "Oui, et de plus en plus. Quand quelqu'un demande à une IA un service dans sa ville, le moteur combine des signaux d'autorité avec des données locales : votre fiche Google Business Profile, vos avis et des mentions cohérentes. Une entreprise locale avec une présence numérique solide a beaucoup à gagner en apparaissant dans ces réponses.",
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
            { label: isEn ? "What is GEO and how to appear in ChatGPT" : "Qu'est-ce que le GEO et comment apparaître dans ChatGPT" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">GEO · {isEn ? "AI" : "IA"}</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "What Is GEO and How to Appear in ChatGPT for Your Business"
            : "Qu'est-ce que le GEO et comment apparaître dans ChatGPT pour votre entreprise"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "More and more people are not searching on Google — they are asking an AI directly. If ChatGPT or Perplexity does not mention your business when someone asks about your sector, you are losing customers who never even make a traditional search."
            : "De plus en plus de personnes ne cherchent pas sur Google : elles demandent directement à une IA. Si ChatGPT ou Perplexity ne mentionne pas votre entreprise quand quelqu'un pose une question sur votre secteur, vous perdez des clients qui ne font même pas la recherche traditionnelle."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "For twenty years, being visible online meant appearing on Google's first page. That game is changing. Today, a growing share of queries ends in an AI-generated response that summarises, recommends and, above all, decides which brands to mention and which to ignore. GEO — Generative Engine Optimization — is the discipline that works to make your business one of the brands mentioned."
            : "Pendant vingt ans, être visible sur internet signifiait apparaître en première page de Google. Ce jeu est en train de changer. Aujourd'hui, une part croissante des requêtes se termine par une réponse générée par intelligence artificielle qui résume, recommande et, surtout, décide quelles marques mentionner et lesquelles ignorer. Le GEO — Generative Engine Optimization — est la discipline qui travaille pour que votre entreprise soit l'une des marques mentionnées."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What GEO is (Generative Engine Optimization)" : "Qu'est-ce que le GEO (Generative Engine Optimization)"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "GEO is the set of techniques aimed at making generative engines — ChatGPT, Perplexity, Gemini, Claude and Google's AI Overviews — cite your business in their responses. The difference from classic SEO is fundamental: SEO competes for a position within a list of links; GEO competes to be the source the AI uses to build the response the user reads. In the first case the user chooses between options; in the second, the AI has already chosen for them."
            : "Le GEO est l'ensemble des techniques visant à faire en sorte que les moteurs génératifs — ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google — citent votre entreprise dans leurs réponses. La différence avec le SEO classique est fondamentale : le SEO rivalise pour une position dans une liste de liens ; le GEO rivalise pour être la source que l'IA utilise pour construire la réponse que l'utilisateur lit. Dans le premier cas, l'utilisateur choisit parmi des options ; dans le second, l'IA a déjà choisi pour lui."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Why GEO already matters for businesses" : "Pourquoi le GEO compte déjà pour les entreprises"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "This is not a laboratory trend. According to Google Search Central data from April 2026, between 14% and 16% of searches on Google already trigger a generative response. Add to this that, according to Gartner, 41.8% of users already use AI tools regularly. When nearly half your potential customers ask an AI and one in six Google searches is answered with generated text, visibility in those channels is no longer optional."
            : "Ce n'est pas une tendance de laboratoire. Selon les données de Google Search Central d'avril 2026, entre 14 % et 16 % des recherches sur Google déclenchent déjà une réponse générative. À cela s'ajoute que, selon Gartner, 41,8 % des utilisateurs utilisent déjà des outils IA régulièrement. Quand près de la moitié de vos clients potentiels demandent à une IA et qu'une recherche Google sur six reçoit une réponse en texte généré, la visibilité dans ces canaux n'est plus optionnelle."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "SEO and GEO are not the same, but they need each other" : "SEO et GEO ne sont pas la même chose, mais ils se complètent"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "GEO does not replace SEO: it amplifies it. Generative engines feed on well-structured content with topical authority and verifiable data — exactly what a well-executed SEO strategy produces. A technically solid website with correct schemas and content that answers real questions is good for both Google and AI. That is why GEO is built on top of an SEO foundation, not in its place."
            : "Le GEO ne remplace pas le SEO : il l'amplifie. Les moteurs génératifs se nourrissent de contenu bien structuré, avec une autorité thématique et des données vérifiables — exactement ce que produit une stratégie SEO bien exécutée. Un site web techniquement solide, avec des schémas corrects et un contenu qui répond à de vraies questions, est à la fois bon pour Google et pour l'IA. C'est pourquoi le GEO se construit sur une base SEO, pas à sa place."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Does your business appear when someone asks ChatGPT about your sector?"
              : "Votre entreprise apparaît-elle quand quelqu'un demande à ChatGPT des informations sur votre secteur ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We carry out an AI visibility audit and tell you exactly where you stand and what is missing for the AI to mention you."
              : "Nous réalisons un audit de visibilité IA et vous disons exactement où vous en êtes et ce qui manque pour que l'IA vous mentionne."}
          </p>
          <Link
            href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "GEO service" : "Service GEO"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "How to appear in ChatGPT and Perplexity: concrete steps" : "Comment apparaître dans ChatGPT et Perplexity : étapes concrètes"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Appearing in AI responses is not a matter of luck. Research on the behaviour of these engines points to clear patterns. A Princeton study from 2024 showed that including specific inline statistics in content increases the probability of being cited by a generative engine by 41%. And according to Seer Interactive (2025), brands cited in Google's AI Overviews receive 35% more clicks than those that only appear in organic results."
            : "Apparaître dans les réponses IA n'est pas une question de chance. Les études sur le comportement de ces moteurs pointent vers des modèles clairs. Une recherche de Princeton de 2024 a montré qu'inclure des statistiques concrètes et inline dans le contenu augmente de 41 % la probabilité d'être cité par un moteur génératif. Et selon Seer Interactive (2025), les marques citées dans les AI Overviews de Google reçoivent 35 % de clics en plus que celles qui n'apparaissent que dans les résultats organiques."}
        </p>
        <ul className="space-y-2 mb-6">
          {(isEn
            ? [
                "Answer specific questions with verifiable data and figures, not generalities",
                "Structure content with clear headings and self-contained answers",
                "Reinforce your topical authority: be cited by others, not just cite yourself",
                "Maintain brand consistency, contact details and speciality across your entire digital presence",
              ]
            : [
                "Répondez à des questions concrètes avec des données et des chiffres vérifiables, pas des généralités",
                "Structurez le contenu avec des titres clairs et des réponses autonomes",
                "Renforcez votre autorité thématique : soyez cité par d'autres, pas seulement par vous-même",
                "Maintenez la cohérence de marque, les coordonnées et la spécialité sur toute votre présence numérique",
              ]
          ).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
              <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The role of your listing and local data" : "Le rôle de votre fiche et des données locales"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "When the question has a local component — 'best accountant for freelancers in Bristol' — generative engines combine topical authority with proximity signals. There, your Google Business Profile listing, your reviews and the consistency of your data (name, address, phone and speciality) become raw material for the AI to recommend you. A local business with its digital house in order starts with an advantage in GEO."
            : "Quand la question a une composante locale — 'meilleur comptable pour indépendants à Lyon' — les moteurs génératifs combinent l'autorité thématique avec des signaux de proximité. Là, votre fiche Google Business Profile, vos avis et la cohérence de vos données (nom, adresse, téléphone et spécialité) deviennent la matière première pour que l'IA vous recommande. Une entreprise locale avec sa maison numérique en ordre part avec un avantage en GEO."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "How to start without wasting time" : "Comment commencer sans perdre de temps"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The first step is always the same: ask. Put the queries your ideal customer would ask to ChatGPT, Perplexity and Gemini and observe whether you appear, in what context and against which competitors. That audit reveals your real starting point. From there, prioritise: reinforce content that answers those questions, improve authority signals and maintain brand consistency. GEO is a medium-term endeavour, but those who start earlier build an advantage that is hard to recover."
            : "La première étape est toujours la même : poser la question. Soumettez à ChatGPT, Perplexity et Gemini les requêtes que ferait votre client idéal et observez si vous apparaissez, dans quel contexte et face à quels concurrents. Cet audit révèle votre point de départ réel. À partir de là, priorisez : renforcer le contenu qui répond à ces questions, améliorer les signaux d'autorité et maintenir la cohérence de marque. Le GEO est un travail de moyen terme, mais ceux qui commencent plus tôt consolident un avantage difficile à rattraper."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Make AI mention your business" : "Faites en sorte que l'IA mentionne votre entreprise"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We are pioneers in GEO. We help you appear in ChatGPT, Perplexity and Gemini when your customers ask about your sector."
              : "Nous sommes pionniers en GEO. Nous vous aidons à apparaître dans ChatGPT, Perplexity et Gemini quand vos clients posent des questions sur votre secteur."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "GEO service" : "Service GEO"}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "Request AI visibility audit" : "Demander un audit de visibilité IA"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions about GEO" : "Questions fréquentes sur le GEO"}
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
      <RelatedArticles currentSlug="geo-ai-positioning-chatgpt-businesses" />
    </>
  );
}
