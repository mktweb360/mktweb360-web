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
      ? "Marketing Attribution: How to Measure Real Impact in a Multi-Channel World | Mkt Web 360"
      : "Attribution marketing : comment mesurer l'impact réel dans un monde multicanal | Mkt Web 360",
    description: isEn
      ? "The last-click model distorts how your customers actually find you. A practical guide to attribution models for SMEs: what they are, which to use, and how to approximate attribution without enterprise tools."
      : "Le modèle dernier clic fausse la réalité de la façon dont vos clients vous trouvent. Guide pratique des modèles d'attribution pour PME : ce que c'est, lequel utiliser, et comment approximer l'attribution sans outils enterprise.",
    alternates:
      alternatesFor(
        `/${lang}/${lang === "en" ? "marketing-attribution-measure-real-impact" : "attribution-marketing-mesurer-impact-reel"}/`
      ) ?? {
        canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "marketing-attribution-measure-real-impact" : "attribution-marketing-mesurer-impact-reel"}/`,
      },
  };
}

const FAQS_EN = [
  {
    q: "What attribution model is best for an SME?",
    a: "There is no perfect model for everyone. If you are an SME with a short sales cycle and few channels, the data-driven model in GA4 is the most accurate when you have sufficient conversion volume. With low traffic, linear or time decay are more honest than last-click. The important thing is to choose one, understand its limitations and be consistent when comparing periods.",
  },
  {
    q: "How does the end of third-party cookies affect attribution?",
    a: "It complicates things. Cross-session, cross-device and cross-channel attribution becomes more opaque without third-party cookies. Solutions include: conversion modelling (GA4 and Google Ads do this automatically when data gaps exist), Google Enhanced Conversions, and Meta's Conversions API. For SMEs, ensure first-party tracking is correctly set up and rely on trends, not exact attributions.",
  },
  {
    q: "What is the difference between GA4 and Google Ads in attribution?",
    a: "GA4 and Google Ads can show different numbers because they measure different things. GA4 attributes the full session according to the model configured in the property. Google Ads attributes conversions within its attribution window (30 days by default for clicks). Discrepancies do not mean something is broken — they mean you are looking at the same fact from two different perspectives.",
  },
  {
    q: "How do I measure the impact of offline touchpoints (calls, events, visits) in my attribution?",
    a: "With offline conversion imports in Google Ads, post-purchase surveys ('how did you find us?'), UTM parameters on offline materials (QR codes at events, flyers) and analysis of branded traffic increases correlated with offline actions. No system is perfect, but a combination of these techniques gives a reasonably complete picture.",
  },
];

const FAQS_FR = [
  {
    q: "Quel modèle d'attribution est le meilleur pour une PME ?",
    a: "Il n'existe pas de modèle parfait pour tous. Si vous êtes une PME avec un cycle de vente court et peu de canaux, le modèle basé sur les données de GA4 est le plus précis quand vous avez un volume de conversions suffisant. Avec peu de trafic, le modèle linéaire ou de décroissance temporelle sont plus honnêtes que le dernier clic.",
  },
  {
    q: "Comment la fin des cookies tiers affecte-t-elle l'attribution ?",
    a: "Ça complique les choses. L'attribution inter-sessions, inter-appareils et inter-canaux devient plus opaque sans cookies tiers. Les solutions incluent : la modélisation des conversions (GA4 et Google Ads le font automatiquement), Enhanced Conversions de Google et Conversions API de Meta. Pour les PME, assurez-vous d'avoir un tracking first-party bien configuré.",
  },
  {
    q: "Quelle est la différence entre GA4 et Google Ads en matière d'attribution ?",
    a: "GA4 et Google Ads peuvent afficher des chiffres différents car ils mesurent des choses différentes. GA4 attribue la session complète selon le modèle configuré dans la propriété. Google Ads attribue les conversions dans sa fenêtre d'attribution (30 jours par défaut). Des divergences ne signifient pas qu'il y a un problème — elles signifient que vous regardez le même fait depuis deux perspectives différentes.",
  },
  {
    q: "Comment mesurer l'impact des touchpoints offline (appels, événements, visites) dans mon attribution ?",
    a: "Avec l'importation de conversions offline dans Google Ads, des sondages post-achat ('comment nous avez-vous trouvés ?'), des paramètres UTM sur les supports offline (QR codes, flyers) et l'analyse des augmentations de trafic de marque corrélées aux actions offline. Aucun système n'est parfait, mais une combinaison de ces techniques donne une image raisonnablement complète.",
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
            { label: isEn ? "Marketing attribution" : "Attribution marketing" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Digital Marketing" : "Marketing Digital"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              {isEn ? "August 4, 2026" : "4 août 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Marketing attribution: how to measure real impact in a multi-channel world"
              : "Attribution marketing : comment mesurer l'impact réel dans un monde multicanal"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "The last-click model assigns the entire sale to the last ad the customer saw. But the customer had been watching your content, reading your articles and following your social media for weeks. If you only measure the last click, you are making budget decisions on incomplete information."
              : "Le modèle 'dernier clic' attribue toute la vente à la dernière annonce que le client a vue. Mais le client regardait votre contenu, lisait vos articles et suivait vos réseaux sociaux depuis des semaines. Si vous ne mesurez que le dernier clic, vous prenez des décisions budgétaires sur des informations incomplètes."}
          </p>
          <Image
            src="/og-atribucion-de-marketing-como-medir-impacto-real.jpg"
            alt={isEn ? "Marketing attribution: measuring real impact" : "Attribution marketing : mesurer l'impact réel"}
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Marketing attribution is the process of determining which channels, campaigns or touchpoints contributed to a user making a purchase or contact decision. It seems straightforward until you consider that the average B2B customer has between 7 and 12 touchpoints before converting, and those touchpoints occur across different devices, channels and moments in time."
              : "L'attribution marketing est le processus de détermination des canaux, campagnes ou points de contact qui ont contribué à ce qu'un utilisateur prenne une décision d'achat ou de contact. Ça semble simple jusqu'à ce que vous considériez que le client B2B moyen a entre 7 et 12 points de contact avant de convertir, et que ces points de contact se produisent sur différents appareils, canaux et moments."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Why last-click distorts reality" : "Pourquoi le dernier clic fausse la réalité"}
          </h2>
          <p>
            {isEn
              ? "The last-click model — the most common because it is the default in many tools — assigns 100% of the conversion credit to the last channel through which the user arrived before purchasing. This systematically leads to overvaluing bottom-of-funnel channels (direct search Google Ads, remarketing) and undervaluing demand-building channels (content, social media, informational SEO)."
              : "Le modèle dernier clic — le plus courant car il est le défaut de nombreux outils — attribue 100% du mérite de la conversion au dernier canal par lequel l'utilisateur est arrivé avant d'acheter. Cela conduit systématiquement à surestimer les canaux de bas de tunnel (Google Ads de recherche directe, remarketing) et à sous-estimer les canaux de construction de demande (contenu, réseaux sociaux, SEO informationnel)."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Are you measuring your marketing's impact correctly?" : "Mesurez-vous correctement l'impact de votre marketing ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "At Mkt Web 360 we set up analytics and attribution tailored for SMEs — with GA4, Google Ads and the tools you really need, without over-engineering."
                : "Chez Mkt Web 360, nous configurons l'analytique et l'attribution adaptées aux PME — avec GA4, Google Ads et les outils dont vous avez vraiment besoin, sans sur-ingénierie."}
            </p>
            <Link
              href={`/${lang}/web-analytics/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "View analytics service" : "Voir le service analytique"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "The main attribution models" : "Les principaux modèles d'attribution"}
          </h2>
          <p>
            {isEn
              ? "The first-click model assigns all credit to the first touchpoint — useful for understanding how people discover you, but ignores the maturation process. The linear model distributes credit equally across all touchpoints — honest but not nuanced. The time decay model gives more weight to touchpoints closest to conversion — more realistic for short sales cycles."
              : "Le modèle premier clic attribue tout le mérite au premier point de contact — utile pour comprendre comment on vous découvre, mais ignore le processus de maturation. Le modèle linéaire distribue le mérite également entre tous les points de contact — honnête mais peu nuancé. Le modèle de décroissance temporelle donne plus de poids aux points de contact les plus proches de la conversion."}
          </p>
          <p>
            {isEn
              ? "The position-based model (40-20-40) gives more weight to the first and last touchpoints — good for valuing both discovery and closing. And the data-driven model in GA4 and Google Ads uses machine learning to distribute credit based on each touchpoint's real statistical impact — the most accurate, but requires sufficient conversion volume to be reliable."
              : "Le modèle basé sur la position (40-20-40) donne plus de poids aux premier et dernier points de contact — bon pour valoriser à la fois la découverte et la conclusion. Le modèle basé sur les données de GA4 et Google Ads utilise le machine learning pour distribuer le crédit selon l'impact statistique réel de chaque point de contact — le plus précis, mais nécessite un volume de conversions suffisant."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "How to approximate attribution without enterprise tools" : "Comment approximer l'attribution sans outils enterprise"}
          </h2>
          <p>
            {isEn
              ? "Enterprise multi-touch attribution tools (Northbeam, Triple Whale, Rockerbox) cost thousands per month and are designed for high-volume ecommerce. For an SME, the pragmatic approach combines: GA4 with a data-driven attribution model, Google Ads with Enhanced Conversions, the question 'how did you find us?' in the contact form, and periodic analysis of what channels generate branded traffic."
              : "Les outils enterprise d'attribution multi-touch (Northbeam, Triple Whale, Rockerbox) coûtent des milliers par mois et sont conçus pour l'e-commerce à volume élevé. Pour une PME, l'approche pragmatique combine : GA4 avec un modèle d'attribution basé sur les données, Google Ads avec Enhanced Conversions, la question 'comment nous avez-vous trouvés ?' dans le formulaire de contact, et une analyse périodique des canaux qui génèrent du trafic de marque."}
          </p>

          <BlogBanner variant="geo" />

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Analytics that informs, not confuses" : "Des analytiques qui informent, pas qui confondent"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "If you want to set up a measurement system that truly tells you what is working in your marketing, we can help."
                : "Si vous souhaitez mettre en place un système de mesure qui vous dit vraiment ce qui fonctionne dans votre marketing, nous pouvons vous aider."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/web-analytics/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "View analytics service" : "Voir le service analytique"}
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
            {isEn ? "Frequently asked questions about marketing attribution" : "Questions fréquentes sur l'attribution marketing"}
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
      <RelatedArticles currentSlug="atribucion-de-marketing-como-medir-impacto-real" />
    </>
  );
}
