import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "LinkedIn for SMEs: Practical Guide to Generating Leads in 2026"
      : "LinkedIn pour les PME : Guide Pratique pour Générer des Leads en 2026",
    description: isEn
      ? "LinkedIn has changed more in 2026 than in the previous five years. New algorithm, video as the dominant format, Employee Generated Content and social selling. How to use it if you run an SME."
      : "LinkedIn a plus changé en 2026 que lors des cinq années précédentes. Nouvel algorithme, vidéo comme format dominant, Employee Generated Content et social selling. Comment en tirer parti si vous êtes une PME.",
    alternates: alternatesFor(`/${lang}/linkedin-for-smes-lead-generation-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/linkedin-for-smes-lead-generation-2026/`,
    },
    openGraph: {
      title: isEn
        ? "LinkedIn for SMEs: Practical Guide to Generating Leads in 2026 | Mkt Web 360"
        : "LinkedIn pour les PME : Guide Pratique pour Générer des Leads en 2026 | Mkt Web 360",
      description: isEn
        ? "LinkedIn has changed more in 2026 than in the previous five years. New algorithm, video as the dominant format, Employee Generated Content and social selling."
        : "LinkedIn a plus changé en 2026 que lors des cinq années précédentes. Nouvel algorithme, vidéo dominant, EGC et social selling. Comment l'exploiter pour votre PME.",
    },
  };
}

const FAQS_EN = [
  {
    q: "How much does it cost to advertise on LinkedIn for an SME?",
    a: "The recommended minimum budget for LinkedIn Ads is £300–500/month. It is more expensive than Meta Ads, but the quality of the lead in B2B usually compensates for this. For SMEs with a limited budget, an organic strategy based on EGC can generate results without ad spend.",
  },
  {
    q: "Is it better to post from a personal profile or a company page?",
    a: "The LinkedIn algorithm in 2026 clearly favours personal profiles. Content published by individuals generates 8 times more engagement than that from corporate pages, because people connect with people, not logos. The correct strategy: activate the founder or sales team as content creators.",
  },
  {
    q: "How often should I post on LinkedIn?",
    a: "3–5 posts per week is the optimal frequency for building an audience. Below 3, the algorithm reduces distribution. Consistency matters more than the exact frequency.",
  },
  {
    q: "Does video work on LinkedIn for SMEs?",
    a: "Native video on LinkedIn grew 30% year-on-year in 2026 and the algorithm actively prioritises it. Videos of 60–90 seconds recorded on a smartphone, with good lighting and clear audio, perform better than highly produced corporate videos.",
  },
];

const FAQS_FR = [
  {
    q: "Combien coûte la publicité sur LinkedIn pour une PME ?",
    a: "Le budget minimum recommandé pour LinkedIn Ads est de 300 à 500 €/mois. C'est plus cher que Meta Ads, mais la qualité du lead en B2B compense généralement. Pour les PME avec un budget limité, la stratégie organique basée sur l'EGC peut générer des résultats sans investissement publicitaire.",
  },
  {
    q: "Vaut-il mieux publier depuis le profil personnel ou la page d'entreprise ?",
    a: "L'algorithme de LinkedIn en 2026 favorise clairement les profils personnels. Le contenu publié par des personnes génère 8 fois plus d'engagement que celui des pages d'entreprise, car les gens se connectent aux personnes, pas aux logos. La bonne stratégie : activer le fondateur ou l'équipe commerciale comme créateurs de contenu.",
  },
  {
    q: "À quelle fréquence dois-je publier sur LinkedIn ?",
    a: "3 à 5 publications par semaine est la fréquence optimale pour construire une audience. En dessous de 3, l'algorithme réduit la distribution. La régularité importe plus que la fréquence exacte.",
  },
  {
    q: "La vidéo fonctionne-t-elle sur LinkedIn pour les PME ?",
    a: "La vidéo native sur LinkedIn a crû de 30 % d'une année sur l'autre en 2026 et l'algorithme la priorise activement. Les vidéos de 60 à 90 secondes enregistrées avec un smartphone, avec un bon éclairage et un audio clair, fonctionnent mieux que les vidéos corporate très produites.",
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
            { label: isEn ? "LinkedIn for SMEs 2026" : "LinkedIn pour PME 2026" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Social Media" : "Réseaux Sociaux"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "LinkedIn for SMEs in 2026: how to generate leads without spending on advertising"
            : "LinkedIn pour les PME en 2026 : comment générer des leads sans dépenser en publicité"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "LinkedIn has changed more in 2026 than in the previous five years: new algorithm, dominant video, employee content and social selling. Used well, it is today one of the most cost-effective channels for generating quality leads without relying on advertising."
            : "LinkedIn a plus changé en 2026 que lors des cinq années précédentes : nouvel algorithme, vidéo dominante, contenu des employés et social selling. Bien exploité, c'est aujourd'hui l'un des canaux les plus rentables pour générer des leads de qualité sans dépendre de la publicité."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Many SMEs still see LinkedIn as a simple CV database. That is a costly mistake. In 2026, LinkedIn is the B2B platform with the highest organic growth, and for businesses selling to other businesses, it is a channel capable of generating qualified enquiries without investing a single pound in ads. The key is understanding how it works today."
              : "Beaucoup de PME voient encore LinkedIn comme une simple base de données de CV. C'est une erreur coûteuse. En 2026, LinkedIn est la plateforme B2B avec la plus forte croissance organique, et pour les entreprises qui vendent à d'autres entreprises, c'est un canal capable de générer des demandes qualifiées sans investir un seul euro en publicité. La clé est de comprendre comment cela fonctionne aujourd'hui."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "The new LinkedIn of 2026: what has changed" : "Le nouveau LinkedIn de 2026 : ce qui a changé"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The data says it all: according to Metricool, the number of active company accounts on LinkedIn grew 88% in the last analysed period. More and more brands understand that their B2B client is here, and the algorithm has evolved to reward content that generates real conversation — not content that merely seeks visibility."
                : "Les données parlent d'elles-mêmes : selon Metricool, le nombre de comptes d'entreprise actifs sur LinkedIn a crû de 88 % lors de la dernière période analysée. De plus en plus de marques comprennent que leur client B2B est ici, et l'algorithme a évolué pour récompenser le contenu qui génère une vraie conversation — pas celui qui cherche simplement la visibilité."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Three changes stand out above all others: the rise of native video (growing 30% year-on-year), the dominance of personal profiles over company pages in terms of reach, and the consolidation of Employee Generated Content (EGC) as the most powerful organic strategy."
                : "Trois changements se démarquent par-dessus tout : la montée de la vidéo native (en croissance de 30 % d'une année sur l'autre), la domination des profils personnels sur les pages d'entreprise en termes de portée, et la consolidation de l'Employee Generated Content (EGC) comme stratégie organique la plus puissante."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Why personal profiles outperform company pages"
                : "Pourquoi les profils personnels surpassent les pages d'entreprise"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The company page remains necessary as a showcase, but the real engine of reach in 2026 is personal profiles. Content published by individuals generates up to 8 times more engagement than that from corporate pages, because people connect with people — not logos."
                : "La page d'entreprise reste nécessaire comme vitrine, mais le vrai moteur de la portée en 2026 est le profil personnel. Le contenu publié par des personnes génère jusqu'à 8 fois plus d'engagement que celui des pages d'entreprise, car les gens se connectent avec des personnes — pas avec des logos."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For an SME this has a clear strategic implication: you need to activate the founder, the person who leads the business, or the sales team as content creators. The goal is not to become an influencer — it is to share industry knowledge with purpose. That personal presence is also the best complement to a content marketing strategy."
                : "Pour une PME, cela a une implication stratégique claire : il faut activer le fondateur, la personne qui dirige l'entreprise, ou l'équipe commerciale comme créateurs de contenu. L'objectif n'est pas de devenir un influenceur — c'est de partager avec discernement ce qu'on sait déjà du secteur. Cette présence personnelle est aussi le meilleur complément à une stratégie de marketing de contenu."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The formats that work in 2026 with real data"
                : "Les formats qui fonctionnent en 2026 avec des données réelles"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The numbers point the way. Carousels generate 278% more interaction than text-only posts, making them the star format for explaining processes, sharing learnings or breaking down a case study step by step. Native video, meanwhile, grew 30% year-on-year and the algorithm actively prioritises it."
                : "Les chiffres montrent la voie. Les carrousels génèrent 278 % plus d'interactions que les publications uniquement textuelles, ce qui en fait le format vedette pour expliquer des processus, partager des apprentissages ou décomposer un cas étape par étape. La vidéo native, quant à elle, a crû de 30 % d'une année sur l'autre et l'algorithme la priorise activement."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The good news for an SME is that big production values are not required: videos of 60–90 seconds recorded on a smartphone, with good lighting and clear audio, outperform highly produced corporate pieces. Authenticity outperforms perfection."
                : "La bonne nouvelle pour une PME est qu'une grande production n'est pas nécessaire : les vidéos de 60 à 90 secondes enregistrées avec un smartphone, avec un bon éclairage et un audio clair, fonctionnent mieux que les pièces corporate très produites. L'authenticité dépasse la perfection."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Employee Generated Content: the trend creating the most opportunity"
                : "Employee Generated Content : la tendance qui crée le plus d'opportunités"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Employee Generated Content (EGC) — content created by employees themselves — is one of the biggest opportunities of 2026. When several team members share company-related content from their personal profiles, the brand multiplies its reach at zero advertising cost and with far greater credibility."
                : "L'Employee Generated Content (EGC) — le contenu généré par les employés eux-mêmes — est l'une des plus grandes opportunités de 2026. Quand plusieurs membres de l'équipe partagent du contenu lié à l'entreprise depuis leurs profils personnels, la marque multiplie sa portée sans coût publicitaire et avec beaucoup plus de crédibilité."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For an SME, activating three or four team members as content creators can have more impact than any paid campaign. The coordination is simple: shared themes, freedom of style and consistency. The result is a distributed, authentic presence that no corporate page can match."
                : "Pour une PME, activer trois ou quatre membres de l'équipe comme créateurs de contenu peut avoir plus d'impact que n'importe quelle campagne payante. La coordination est simple : des thèmes communs, la liberté de style et la constance. Le résultat est une présence distribuée et authentique qu'aucune page d'entreprise ne peut égaler."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Social selling: how to turn LinkedIn into a source of clients"
                : "Social selling : comment transformer LinkedIn en source de clients"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Social selling means using LinkedIn to build relationships that end in commercial opportunities, without resorting to the classic cold message approach. It is based on consistently delivering value so that, when a potential client has a need, your business is the first that comes to mind."
                : "Le social selling consiste à utiliser LinkedIn pour construire des relations qui débouchent sur des opportunités commerciales, sans recourir aux messages froids classiques. Il repose sur l'apport constant de valeur pour que, quand un client potentiel a un besoin, votre entreprise soit la première à lui venir à l'esprit."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "In practice: publish useful content, comment genuinely on posts in your network, and reach out only when there is real context. This way of selling fits naturally within a broader social media marketing strategy oriented towards results."
                : "En pratique : publier du contenu utile, commenter de manière authentique les publications de votre réseau et contacter uniquement lorsqu'il y a un contexte réel. Cette façon de vendre s'intègre naturellement dans une stratégie de social media marketing plus large orientée vers les résultats."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The mistake that destroys the LinkedIn strategy of many SMEs"
                : "L'erreur qui détruit la stratégie LinkedIn de nombreuses PME"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The most common mistake is inconsistency. Many SMEs start with energy, publish for two weeks and abandon the effort when they do not see immediate results. LinkedIn is a medium-term building channel: below 3–5 posts per week, the algorithm reduces distribution and the effort is diluted."
                : "L'erreur la plus commune est l'inconstance. Beaucoup de PME commencent avec énergie, publient pendant deux semaines et abandonnent en ne voyant pas de résultats immédiats. LinkedIn est un canal de construction à moyen terme : en dessous de 3 à 5 publications par semaine, l'algorithme réduit la distribution et l'effort se dilue."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The second mistake is turning the profile into a self-promotion catalogue. LinkedIn rewards those who teach, contribute and engage in conversation — not those who only broadcast. The rule is simple: deliver value most of the time and sell explicitly only occasionally."
                : "La deuxième erreur est de transformer le profil en catalogue d'autopromotion. LinkedIn récompense ceux qui enseignent, apportent et conversent — pas ceux qui font uniquement de la publicité. La règle est simple : apporter de la valeur la plupart du temps et vendre explicitement seulement de temps en temps."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Turn LinkedIn into a client channel for your SME"
                : "Transformez LinkedIn en canal de clients pour votre PME"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we design and execute LinkedIn and social media strategies focused on generating real leads — not just followers."
                : "Chez Mkt Web 360, nous concevons et exécutons des stratégies LinkedIn et réseaux sociaux orientées vers la génération de vrais leads — pas seulement des abonnés."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </a>
              <a
                href={`/${lang}/social-media-marketing/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See Social Media service" : "Voir le service Social Media"}
              </a>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions" : "Questions fréquentes"}
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
    </>
  );
}
