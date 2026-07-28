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
      ? "AI Applied to Marketing: Where It Delivers Real Value"
      : "IA appliquée au marketing : où elle apporte une vraie valeur",
    description: isEn
      ? "Discover where AI applied to marketing delivers real value, which uses to prioritise, and where there is still too much hype."
      : "Découvrez où l'IA appliquée au marketing apporte une vraie valeur, quels usages prioriser et où il y a encore trop de bruit.",
    alternates: alternatesFor(`/${lang}/ai-marketing-real-value/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-marketing-real-value/`,
    },
    openGraph: {
      title: isEn
        ? "AI Applied to Marketing: Where It Delivers Real Value | Mkt Web 360"
        : "IA appliquée au marketing : où elle apporte une vraie valeur | Mkt Web 360",
      description: isEn
        ? "Discover where AI applied to marketing delivers real value and where it is still mostly hype."
        : "Découvrez où l'IA appliquée au marketing apporte une vraie valeur et où c'est encore principalement du bruit.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Can AI replace a marketing team?",
    a: "Not seriously. It can assist, accelerate and organise, but judgement, context and oversight remain key to making good decisions.",
  },
  {
    q: "When does it make sense to use AI agents?",
    a: "When there is a repeated or costly task, a clear objective, useful context and an acceptable margin of error with human supervision.",
  },
  {
    q: "Does Google penalise AI-generated content?",
    a: "Google does not penalise AI-generated content per se — it penalises low-quality content, regardless of how it was produced. If AI content is useful, relevant and delivers real value, it can rank well. The problem is that much mass AI content is precisely the opposite.",
  },
  {
    q: "What AI tools are useful for digital marketing in an SME?",
    a: "The most useful for an SME are: ChatGPT or Claude for content drafts and quick responses, Canva with AI for design materials, AI-integrated tools in Google Ads for bid optimisation, and email marketing platforms with predictive segmentation like Brevo or HubSpot.",
  },
  {
    q: "Is it worth implementing AI in marketing for a small SME?",
    a: "Yes, in some specific cases. Scheduling posts with AI suggestions, using ChatGPT to answer frequent queries or generating ad variants are uses with low implementation cost and clear benefit. What is not worth it is implementing complex AI systems before the marketing foundations are solid.",
  },
];

const FAQS_FR = [
  {
    q: "L'IA peut-elle remplacer une équipe marketing ?",
    a: "Pas sérieusement. Elle peut assister, accélérer et organiser, mais le jugement, le contexte et la supervision restent essentiels pour prendre de bonnes décisions.",
  },
  {
    q: "Quand a-t-il du sens d'utiliser des agents IA ?",
    a: "Quand il existe une tâche répétée ou coûteuse, un objectif clair, un contexte utile et une marge d'erreur acceptable avec une supervision humaine.",
  },
  {
    q: "Google pénalise-t-il le contenu généré par IA ?",
    a: "Google ne pénalise pas le contenu généré par IA en tant que tel — il pénalise le contenu de faible qualité, quelle que soit la façon dont il a été produit. Si le contenu IA est utile, pertinent et apporte une vraie valeur, il peut bien se positionner. Le problème est que beaucoup de contenu IA de masse est précisément l'inverse.",
  },
  {
    q: "Quels outils IA sont utiles pour le marketing digital dans une PME ?",
    a: "Les plus utiles pour une PME sont : ChatGPT ou Claude pour les brouillons de contenu et les réponses rapides, Canva avec IA pour les supports de design, les outils IA intégrés dans Google Ads pour l'optimisation des enchères, et les plateformes d'email marketing avec segmentation prédictive comme Brevo ou HubSpot.",
  },
  {
    q: "Vaut-il la peine d'implémenter l'IA dans le marketing pour une petite PME ?",
    a: "Oui, dans certains cas concrets. Programmer des publications avec des suggestions IA, utiliser ChatGPT pour répondre aux questions fréquentes ou générer des variantes d'annonces sont des usages avec un faible coût d'implémentation et un bénéfice clair. Ce qui ne vaut pas la peine, c'est d'implémenter des systèmes IA complexes avant d'avoir les bases du marketing bien résolues.",
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
            { label: isEn ? "AI in marketing: real value or hype?" : "IA en marketing : vraie valeur ou bruit ?" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "AI & Marketing" : "IA & Marketing"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "AI Applied to Marketing: Where It Delivers Real Value and Where It Is Still Hype"
            : "IA appliquée au marketing : où elle apporte une vraie valeur et où c'est encore du bruit"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Artificial intelligence in marketing is both one of the most hyped topics of recent years and one of the most useful tools — if you know where to apply it. This article separates the signal from the noise."
            : "L'intelligence artificielle en marketing est à la fois l'un des sujets les plus médiatisés des dernières années et l'un des outils les plus utiles — si vous savez où l'appliquer. Cet article sépare le signal du bruit."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "It is hard to open LinkedIn or attend a webinar without hearing that 'AI is going to change everything'. Part of that is true — part is hype from tool vendors and trainers. The problem is that many companies are implementing AI in marketing because of trend pressure, without a real evaluation of where it adds value and where it merely adds complexity."
            : "Il est difficile d'ouvrir LinkedIn ou d'assister à un webinaire sans entendre que 'l'IA va tout changer'. Une partie de cela est vraie — une partie est du hype de vendeurs d'outils et de formateurs. Le problème est que beaucoup d'entreprises implémentent l'IA dans le marketing par pression de la mode, sans une évaluation réelle de là où elle apporte de la valeur et là où elle n'ajoute que de la complexité."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "AI is not a strategy — it is a tool. And like any tool, its value depends on whether you use it for the right job. Used well, it can multiply team productivity and improve personalisation at scale. Used poorly, it generates mediocre content in bulk and adds layers of automation that nobody understands."
            : "L'IA n'est pas une stratégie — c'est un outil. Et comme tout outil, sa valeur dépend de si vous l'utilisez pour le bon travail. Bien utilisée, elle peut multiplier la productivité de l'équipe et améliorer la personnalisation à l'échelle. Mal utilisée, elle génère du contenu médiocre en masse et ajoute des couches d'automatisation que personne ne comprend."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Where it genuinely adds value today" : "Où elle apporte vraiment de la valeur aujourd'hui"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Content draft generation, bid optimisation on advertising platforms, email marketing personalisation, automated segmentation with sufficient data and large-scale text analysis are areas where AI has a real and measurable impact. In these tasks it frees up time, improves consistency and allows work at a scale that was not previously possible."
            : "La génération de brouillons de contenu, l'optimisation des enchères sur les plateformes publicitaires, la personnalisation de l'email marketing, la segmentation automatisée avec suffisamment de données et l'analyse de grands volumes de texte sont des domaines où l'IA a un impact réel et mesurable. Dans ces tâches, elle libère du temps, améliore la cohérence et permet de travailler à une échelle qui n'était pas possible auparavant."}
        </p>
        <ul className="space-y-2 mb-6">
          {(isEn
            ? [
                "Content drafts and variants with human review",
                "Automatic bid optimisation in Ads",
                "Segmentation and personalisation with historical data",
                "Analysis of reviews, surveys and mentions at scale",
              ]
            : [
                "Brouillons et variantes de contenu avec révision humaine",
                "Optimisation automatique des enchères dans Ads",
                "Segmentation et personnalisation avec des données historiques",
                "Analyse des avis, enquêtes et mentions à l'échelle",
              ]
          ).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
              <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Considering applying AI to your marketing?"
              : "Vous envisagez d'appliquer l'IA à votre marketing ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We help you evaluate which AI uses make sense in your specific case, according to your sector, team and current situation. Without selling tools you do not need."
              : "Nous vous aidons à évaluer quels usages de l'IA ont du sens dans votre cas spécifique, selon votre secteur, votre équipe et votre situation actuelle. Sans vendre des outils dont vous n'avez pas besoin."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Request AI and marketing consultation" : "Demander une consultation IA et marketing"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Where caution is advised" : "Où la prudence est conseillée"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Brand strategy, differentiating creativity, decisions with a lot of qualitative context and high-ticket relational sales are areas where AI produces mediocre results or actively causes harm. Caution is also warranted with chatbots that handle complaints or first interactions in sectors where trust is paramount. The practical rule: the more judgement and context matter, the less you should delegate to AI without oversight."
            : "La stratégie de marque, la créativité différenciante, les décisions avec beaucoup de contexte qualitatif et la vente relationnelle à ticket élevé sont des domaines où l'IA produit des résultats médiocres ou nuit directement. Il faut aussi être prudent avec les chatbots qui gèrent des réclamations ou les premières interactions dans des secteurs où la confiance est primordiale. La règle pratique : plus le jugement et le contexte comptent, moins il convient de déléguer à l'IA sans supervision."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What a company needs before applying AI with judgement" : "Ce dont une entreprise a besoin avant d'appliquer l'IA avec discernement"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "AI works well when the problem is well defined, the data is reliable and oversight exists. If there is no clarity about what you want to solve, if data is scarce or poor quality, or if nobody in the company is going to review what the tool produces, the result will be mediocre or counterproductive. Before implementing AI, what is worth reviewing is whether the marketing foundations are solid."
            : "L'IA fonctionne bien quand le problème est bien défini, les données sont fiables et la supervision existe. S'il n'y a pas de clarté sur ce qu'on veut résoudre, si les données sont rares ou de mauvaise qualité, ou si personne dans l'entreprise ne va réviser ce que génère l'outil, le résultat sera médiocre ou contre-productif. Avant d'implémenter l'IA, ce qui vaut la peine d'examiner, c'est si les bases du marketing sont bien résolues."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "AI and agents: the right approach" : "IA et agents : la bonne approche"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "AI agents allow more complex flows to be automated with greater autonomy, but they also have more failure points and require more careful supervision. For an SME, the most useful approach is usually to start with specific, well-defined uses rather than implementing complex agent systems. Complexity without clear purpose is a cost without return."
            : "Les agents IA permettent d'automatiser des flux plus complexes avec plus d'autonomie, mais ils ont aussi plus de points de défaillance et exigent une supervision plus soigneuse. Pour une PME, l'approche la plus utile est généralement de commencer par des usages concrets et bien délimités plutôt que d'implémenter des systèmes d'agents complexes. La complexité sans but clair est un coût sans retour."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Identify real AI uses for your business" : "Identifiez les vrais usages de l'IA pour votre entreprise"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We help you identify where it makes sense to apply AI in your marketing based on your current situation, without selling tools you do not need and without ignoring the ones that can actually help."
              : "Nous vous aidons à identifier où il a du sens d'appliquer l'IA dans votre marketing selon votre situation actuelle, sans vendre des outils dont vous n'avez pas besoin et sans ignorer ceux qui peuvent vraiment vous aider."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request digital diagnosis" : "Demander un diagnostic digital"}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions about AI in marketing" : "Questions fréquentes sur l'IA en marketing"}
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
      <RelatedArticles currentSlug="ai-marketing-real-value" />
    </>
  );
}
