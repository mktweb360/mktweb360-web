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
      ? "Google Algorithm Updates 2026: What Has Changed and How It Affects Your Website"
      : "Mises à jour de l'algorithme Google en 2026 : ce qui a changé et comment ça affecte votre site",
    description: isEn
      ? "Google has rolled out several algorithm updates in 2026 focused on user experience, AI content and E-E-A-T signals. We analyse what has changed and what you need to do."
      : "Google a lancé plusieurs mises à jour d'algorithme en 2026 axées sur l'expérience utilisateur, le contenu IA et les signaux E-E-A-T. Nous analysons ce qui a changé et ce que vous devez faire.",
    alternates: alternatesFor(`/${lang}/google-algorithm-updates-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-algorithm-updates-2026/`,
    },
    openGraph: {
      title: isEn
        ? "Google Algorithm Updates 2026: What Has Changed and How It Affects Your Website | Mkt Web 360"
        : "Mises à jour de l'algorithme Google en 2026 : ce qui a changé et comment ça affecte votre site | Mkt Web 360",
      description: isEn
        ? "Google's 2026 algorithm updates focus on user experience, AI content and E-E-A-T signals. Analysis and action plan."
        : "Les mises à jour de l'algorithme Google en 2026 se concentrent sur l'expérience utilisateur, le contenu IA et les signaux E-E-A-T. Analyse et plan d'action.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Does Google penalise content created with AI?",
    a: "Not directly. Google penalises content that adds no value, whether created by humans or AI. AI-generated content that is genuinely useful, well reviewed and demonstrates real experience is not penalised. What is penalised is mass low-quality content.",
  },
  {
    q: "What are AI Overviews and how do they affect organic traffic?",
    a: "AI Overviews are AI-generated responses that Google displays above organic results in more than 58% of searches. For informational searches they may reduce clicks. For commercial searches with buying intent the impact is smaller.",
  },
  {
    q: "Does link building still work in 2026?",
    a: "Yes, but with nuance. Google still values links as an authority signal but has improved its ability to detect artificial patterns. Link building through citable content remains effective. Buying links carries growing risk.",
  },
  {
    q: "How long does it take for a website to recover after a Google penalty?",
    a: "It depends on the type. A manual penalty can be recovered in weeks if corrected and a reconsideration request is submitted. An algorithmic drop can take several months because it requires demonstrating consistent improvement.",
  },
];

const FAQS_FR = [
  {
    q: "Google pénalise-t-il le contenu créé avec l'IA ?",
    a: "Pas directement. Google pénalise le contenu qui n'apporte pas de valeur, qu'il soit créé par des humains ou par l'IA. Le contenu généré par IA qui est genuinement utile, bien révisé et qui démontre une vraie expérience n'est pas pénalisé. Ce qui est pénalisé, c'est le contenu de masse de faible qualité.",
  },
  {
    q: "Que sont les AI Overviews et comment affectent-ils le trafic organique ?",
    a: "Les AI Overviews sont les réponses générées par IA que Google affiche au-dessus des résultats organiques dans plus de 58 % des recherches. Pour les recherches informationnelles, ils peuvent réduire les clics. Pour les recherches commerciales avec une intention d'achat, l'impact est moindre.",
  },
  {
    q: "Le link building fonctionne-t-il encore en 2026 ?",
    a: "Oui, mais avec des nuances. Google valorise toujours les liens comme signal d'autorité mais a amélioré sa capacité à détecter les patterns artificiels. Le link building via du contenu citable reste efficace. L'achat de liens présente un risque croissant.",
  },
  {
    q: "Combien de temps faut-il pour qu'un site web se rétablisse après une pénalité Google ?",
    a: "Cela dépend du type. Une pénalité manuelle peut être levée en quelques semaines si elle est corrigée et une demande de reconsidération est soumise. Une chute algorithmique peut prendre plusieurs mois car elle nécessite de démontrer une amélioration constante.",
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
            { label: isEn ? "Google Algorithm Updates 2026" : "Mises à jour de l'algorithme Google en 2026" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">SEO · {isEn ? "Google Algorithm" : "Algorithme Google"}</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Google Algorithm Updates 2026: What Has Changed and What You Need to Do"
            : "Mises à jour de l'algorithme Google en 2026 : ce qui a changé et ce que vous devez faire"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Google has rolled out several algorithm updates in 2026 focused on user experience, AI content and E-E-A-T signals. If your organic traffic has shifted and you do not know why, this article explains what has changed and how to adapt your SEO strategy without losing rankings."
            : "Google a lancé plusieurs mises à jour d'algorithme en 2026 axées sur l'expérience utilisateur, le contenu IA et les signaux E-E-A-T. Si votre trafic organique a évolué et que vous ne savez pas pourquoi, cet article vous explique ce qui a changé et comment adapter votre stratégie SEO sans perdre de positions."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Every algorithm update generates anxiety, and 2026's updates are no exception. The good news is that Google's direction is consistent with what it has been asking for years: useful content, genuine experience behind the pages and a technically healthy website. Those who have worked with rigour have little to fear; those who have looked for shortcuts do."
            : "Chaque mise à jour d'algorithme génère de l'inquiétude, et celles de 2026 ne font pas exception. La bonne nouvelle est que la direction de Google est cohérente avec ce qu'il demande depuis des années : du contenu utile, une vraie expérience derrière les pages et un site web techniquement sain. Ceux qui ont travaillé avec rigueur ont peu à craindre ; ceux qui ont cherché des raccourcis, oui."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The main Google updates in 2026" : "Les principales mises à jour Google en 2026"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "This year's updates have followed two clear lines: improving the quality of the responses Google delivers directly to the user and reinforcing detection of low-value content. AI Overviews, now present in more than 58% of searches, have changed how many users interact with results before clicking."
            : "Les mises à jour de cette année ont suivi deux lignes claires : améliorer la qualité des réponses que Google délivre directement à l'utilisateur et renforcer la détection du contenu de faible valeur. Les AI Overviews, désormais présents dans plus de 58 % des recherches, ont changé la façon dont de nombreux utilisateurs interagissent avec les résultats avant de cliquer."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "None of these updates has been an abrupt break. Google continues to reward the same things as before, but with more precision: pages that resolve a specific intent, load fast and come from a source with demonstrable authority. If you have noticed movements in your traffic, the first step is to diagnose the origin with an SEO audit before touching anything."
            : "Aucune de ces mises à jour n'a été une rupture brutale. Google continue de récompenser les mêmes choses qu'avant, mais avec plus de précision : des pages qui résolvent une intention concrète, se chargent vite et proviennent d'une source avec une autorité démontrable. Si vous avez remarqué des mouvements dans votre trafic, la première étape est de diagnostiquer l'origine avec un audit SEO avant de toucher quoi que ce soit."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "E-E-A-T in 2026: how it has evolved" : "L'E-E-A-T en 2026 : comment il a évolué"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "E-E-A-T (Experience, Expertise, Authoritativeness and Trust) remains Google's quality compass, but in 2026 the first E, for real Experience, carries more weight than ever. Google wants to see that behind the content there is someone who has actually done what they describe, not just someone who has compiled information from other sources."
            : "L'E-E-A-T (Expérience, Expertise, Autorité et Confiance) reste la boussole de qualité de Google, mais en 2026, le premier E, celui de l'Expérience réelle, pèse plus que jamais. Google veut voir que derrière le contenu il y a quelqu'un qui a vraiment fait ce qu'il décrit, pas seulement quelqu'un qui a compilé des informations d'autres sources."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "In practice this means signing articles with identifiable authors, showing real credentials, including examples and details that only someone with direct experience can provide, and maintaining brand consistency across the entire website. For sensitive sectors such as health or finance, these trust signals are decisive."
            : "En pratique, cela signifie signer les articles avec des auteurs identifiables, montrer de vraies accréditations, inclure des exemples et des détails que seul quelqu'un avec une expérience directe peut apporter, et maintenir la cohérence de marque sur tout le site web. Pour les secteurs sensibles comme la santé ou les finances, ces signaux de confiance sont déterminants."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "AI Overviews: how to adapt without losing traffic" : "AI Overviews : comment s'adapter sans perdre de trafic"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "AI Overviews summarise the answer above organic results and, for purely informational searches, may reduce clicks to websites. The sensible reaction is not to lament this but to adapt the approach: for searches with commercial intent the impact is much lower, because the user needs to go deeper before deciding."
            : "Les AI Overviews résument la réponse au-dessus des résultats organiques et, pour les recherches purement informationnelles, peuvent réduire les clics vers les sites. La réaction sensée n'est pas de s'en lamenter, mais d'adapter l'approche : pour les recherches à intention commerciale, l'impact est bien moindre, car l'utilisateur a besoin d'approfondir avant de décider."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Appearing as a cited source within an AI Overview provides brand visibility and still sends qualified visits. Structuring content in question-and-answer format with verifiable data and correct schema markup increases the probability of being the chosen source. Here SEO meets the terrain of AI positioning."
            : "Apparaître comme source citée dans un AI Overview apporte de la visibilité de marque et continue à envoyer des visites qualifiées. Structurer le contenu en format question-réponse, avec des données vérifiables et un schema markup correct, augmente les probabilités d'être la source choisie. Ici le SEO rejoint le terrain du positionnement IA."}
        </p>

        <BlogBanner lang={lang} />

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Content and AI: what Google rewards and penalises" : "Contenu et IA : ce que Google récompense et pénalise"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most repeated question is whether Google penalises content created with AI. The answer is no, at least not for the mere fact of using AI. What Google penalises is mass, generic content that adds no value, whatever tool was used to create it. An AI-generated article, reviewed by a person with judgement and enriched with real experience, can rank perfectly."
            : "La question la plus répétée est de savoir si Google pénalise le contenu créé avec l'IA. La réponse est non, du moins pas pour le simple fait d'utiliser l'IA. Ce que Google pénalise, c'est le contenu de masse et générique qui n'apporte pas de valeur, quelle que soit l'outil utilisé pour le créer. Un article généré par IA, révisé par une personne avec du jugement et enrichi d'une vraie expérience, peut parfaitement se positionner."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The risk is at the other extreme: publishing dozens of automatic articles without review to inflate the website. That strategy, which used to give short-term results, is today a fast track to losing rankings. The rule is simple: if the content would not serve a real reader, it will not serve Google either."
            : "Le risque est à l'autre extrême : publier des dizaines d'articles automatiques sans révision pour gonfler le site. Cette stratégie, qui donnait autrefois des résultats à court terme, est aujourd'hui une voie rapide vers la perte de positions. La règle est simple : si le contenu ne servirait pas un lecteur réel, il ne servira pas non plus à Google."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Technical signals that carry the most weight in 2026" : "Signaux techniques qui pèsent le plus en 2026"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The technical side remains a threshold filter. Core Web Vitals maintain their relevance, with particular weight on INP (Interaction to Next Paint), which measures the page's responsiveness to user interactions. A slow or unstable website starts at a disadvantage even if its content is excellent. Natural link building still works: Google continues to read links as votes of authority, but detects artificial patterns increasingly well. Earning links through content that others want to cite is the sustainable strategy."
            : "L'aspect technique reste un filtre d'entrée. Les Core Web Vitals maintiennent leur pertinence, avec un poids particulier sur l'INP (Interaction to Next Paint), qui mesure la capacité de réponse de la page aux interactions de l'utilisateur. Un site lent ou instable part avec un désavantage même si son contenu est excellent. Le link building naturel fonctionne toujours : Google continue de lire les liens comme des votes d'autorité, mais détecte de mieux en mieux les patterns artificiels. Obtenir des liens via du contenu que d'autres veulent citer est la stratégie durable."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Has your traffic dropped after the latest update?" : "Votre trafic a-t-il chuté après la dernière mise à jour ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we analyse what has changed in your rankings and design a plan to recover and consolidate your positions on Google."
              : "Chez Mkt Web 360, nous analysons ce qui a changé dans votre positionnement et concevons un plan pour retrouver et consolider vos positions sur Google."}
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
      <RelatedArticles currentSlug="google-algorithm-updates-2026" />
    </>
  );
}
