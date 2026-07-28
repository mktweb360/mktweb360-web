import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing for Freelancers in 2026: How to Get Clients Without Hiring an Agency"
      : "Marketing Digital pour Indépendants en 2026 : Comment Obtenir des Clients Sans Agence",
    description: isEn
      ? "Freelancers have more tools than ever to get online clients on their own. Practical guide: local SEO, Google Business Profile, LinkedIn and content for freelancers in 2026."
      : "Les indépendants ont plus d'outils que jamais pour obtenir des clients en ligne par eux-mêmes. Guide pratique : SEO local, Google Business Profile, LinkedIn et contenu pour indépendants en 2026.",
    alternates: alternatesFor(`/${lang}/digital-marketing-for-freelancers-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-marketing-for-freelancers-2026/`,
    },
    openGraph: {
      title: isEn
        ? "Digital Marketing for Freelancers in 2026: How to Get Clients Without Hiring an Agency | Mkt Web 360"
        : "Marketing Digital pour Indépendants en 2026 : Comment Obtenir des Clients Sans Agence | Mkt Web 360",
      description: isEn
        ? "Freelancers have more tools than ever to get online clients on their own. Practical guide: local SEO, Google Business Profile, LinkedIn and content."
        : "Les indépendants ont plus d'outils que jamais pour obtenir des clients en ligne par eux-mêmes. Guide pratique : SEO local, Google Business Profile, LinkedIn et contenu.",
    },
  };
}

const FAQS_EN = [
  {
    q: "How much money does a freelancer need for digital marketing?",
    a: "With £0 you can do a lot: optimise your Google Business Profile, post on LinkedIn, improve the basic SEO of your website. With £100–200/month you can already run Google Ads for local searches with measurable results.",
  },
  {
    q: "Does a freelancer need a website to get clients online?",
    a: "In 2026, a website remains the most important digital asset. Google Business Profile can bring local clients without a website, and LinkedIn can generate B2B enquiries, but without a website you have nowhere to go deeper, show your work or control your presence.",
  },
  {
    q: "What is the most effective marketing channel for a freelancer?",
    a: "It depends on the service. Local services: Google Business Profile + local SEO is the channel with the highest ROI. B2B professional services: LinkedIn + authority content. Creative services: Instagram. There is no universal answer.",
  },
  {
    q: "How long does it take for the first client to arrive via Google?",
    a: "With a well-optimised Google Business Profile in mid-sized cities, the first contacts can arrive in 2–4 weeks. With organic SEO: 3–4 months. With Google Ads: the first day if the campaign is well configured.",
  },
];

const FAQS_FR = [
  {
    q: "Combien d'argent un indépendant a-t-il besoin pour le marketing digital ?",
    a: "Avec 0 € on peut faire beaucoup : optimiser Google Business Profile, publier sur LinkedIn, améliorer le SEO basique du site web. Avec 100 à 200 €/mois, on peut déjà faire Google Ads pour des recherches locales avec des résultats mesurables.",
  },
  {
    q: "Un indépendant a-t-il besoin d'un site web pour obtenir des clients en ligne ?",
    a: "En 2026, le site web reste l'actif digital le plus important. Google Business Profile peut amener des clients locaux sans site web, et LinkedIn peut générer des demandes B2B, mais sans site web vous n'avez pas d'endroit où approfondir, montrer votre travail ou contrôler votre présence.",
  },
  {
    q: "Quel est le canal marketing le plus efficace pour un indépendant ?",
    a: "Cela dépend du service. Services locaux : Google Business Profile + SEO local est le canal avec le meilleur ROI. Services professionnels B2B : LinkedIn + contenu d'autorité. Services créatifs : Instagram. Il n'y a pas de réponse universelle.",
  },
  {
    q: "Combien de temps faut-il pour que le premier client arrive via Google ?",
    a: "Avec un Google Business Profile bien optimisé dans des villes moyennes, les premiers contacts peuvent arriver en 2 à 4 semaines. Avec le SEO organique : 3 à 4 mois. Avec Google Ads : le premier jour si la campagne est bien configurée.",
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
            {
              label: isEn
                ? "Digital Marketing for Freelancers 2026"
                : "Marketing Digital pour Indépendants 2026",
            },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Freelancers & Autónomos" : "Freelances & Indépendants"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Digital marketing for freelancers in 2026: the practical guide to getting clients"
            : "Marketing digital pour les indépendants en 2026 : le guide pratique pour obtenir des clients"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "In 2026, freelancers have more tools than ever to get online clients on their own — without depending on an agency. This practical guide covers the essentials in order: local SEO, Google Business Profile, LinkedIn and content. If you sell services in your area, start with local SEO for service businesses, the channel with the highest return."
            : "En 2026, les indépendants ont plus d'outils que jamais pour obtenir des clients en ligne par eux-mêmes — sans dépendre d'une agence. Ce guide pratique couvre l'essentiel dans l'ordre : SEO local, Google Business Profile, LinkedIn et contenu. Si vous vendez des services dans votre zone, commencez par le SEO local pour les entreprises de services, le canal avec le meilleur retour."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Most freelancers believe that digital marketing requires budget and an agency. In 2026, that is no longer true: with the right tools and the correct order, a freelancer can build a digital presence that brings in clients consistently. The key is not doing more — it is doing the right thing at the right time."
              : "La plupart des indépendants pensent que le marketing digital nécessite un budget et une agence. En 2026, ce n'est plus vrai : avec les bons outils et le bon ordre, un indépendant peut construire une présence digitale qui attire des clients de façon constante. La clé n'est pas de faire plus — c'est de faire la bonne chose au bon moment."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The reality of digital marketing for freelancers in 2026"
                : "La réalité du marketing digital pour les indépendants en 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The freelancer competes with fewer resources than large companies, but also with less bureaucracy and more personal connection. That agility is a real advantage: you can respond quickly, personalise the treatment and specialise in a specific niche where big brands cannot reach."
                : "L'indépendant est en concurrence avec moins de ressources que les grandes entreprises, mais aussi avec moins de bureaucratie et plus de proximité. Cette agilité est un vrai avantage : vous pouvez répondre rapidement, personnaliser le traitement et vous spécialiser dans un créneau concret où les grandes marques n'arrivent pas."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The most common mistake is wanting to be everywhere at once. With limited time and budget, the winning strategy is to concentrate on one or two well-chosen channels and master them, rather than spreading effort without critical mass in any of them."
                : "L'erreur la plus courante est de vouloir être partout à la fois. Avec du temps et un budget limités, la stratégie gagnante est de se concentrer sur un ou deux canaux bien choisis et de les maîtriser, plutôt que de répartir les efforts sans masse critique dans aucun."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The correct order: Google Business Profile first, then the rest"
                : "L'ordre correct : d'abord Google Business Profile, puis le reste"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "If your business has a local component, the first step is always Google Business Profile. It is free, it appears at the exact moment someone searches for what you offer near them, and with good optimisation the first contacts can arrive in 2–4 weeks."
                : "Si votre entreprise a une composante locale, la première étape est toujours Google Business Profile. C'est gratuit, cela apparaît au moment exact où quelqu'un recherche ce que vous proposez près de lui, et avec une bonne optimisation les premiers contacts peuvent arriver en 2 à 4 semaines."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Optimising your Google Business Profile listing with correct categories, photos, updated hours and reviews is the action with the best effort-to-result ratio a local freelancer can take. Only after having this up and running does it make sense to think about other channels."
                : "Optimiser votre fiche Google Business Profile avec les bonnes catégories, des photos, des horaires à jour et des avis est l'action avec le meilleur rapport effort-résultat qu'un indépendant local puisse faire. Ce n'est qu'après avoir mis cela en marche qu'il est judicieux de penser aux autres canaux."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Local SEO: the highest-ROI investment for service freelancers"
                : "SEO local : l'investissement à meilleur ROI pour les indépendants de services"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For a freelancer providing services in their area, local SEO is the channel with the highest medium-term return. Appearing in searches in your city for your service means capturing clients with genuine intent to hire, right when they need you."
                : "Pour un indépendant qui preste des services dans sa zone, le SEO local est le canal avec le meilleur retour à moyen terme. Apparaître dans les recherches de votre ville pour votre service signifie capter des clients avec une intention réelle d'embauche, exactement quand ils vous ont besoin."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Organic SEO takes longer than Google Ads (3–4 months for solid results), but it builds a lasting asset: once positioned, it keeps bringing clients without cost per click. For many service freelancers, it is the foundation of the entire digital strategy. And that traffic needs to land on a well-designed website that converts visits into enquiries."
                : "Le SEO organique prend plus de temps que Google Ads (3 à 4 mois pour des résultats solides), mais il construit un actif durable : une fois positionné, il continue d'amener des clients sans coût par clic. Pour de nombreux indépendants de services, c'est la base de toute la stratégie digitale. Et ce trafic doit atterrir sur un site web bien conçu qui convertit les visites en demandes."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "LinkedIn for freelancers who sell to businesses"
                : "LinkedIn pour les indépendants qui vendent à des entreprises"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "If your client is a business, LinkedIn is your priority channel. In 2026, content published from the personal profile generates far more reach than corporate pages, and for a freelancer that is an advantage: your personal brand is your best asset."
                : "Si votre client est une entreprise, LinkedIn est votre canal prioritaire. En 2026, le contenu publié depuis le profil personnel génère beaucoup plus de portée que les pages d'entreprise, et pour un indépendant c'est un avantage : votre marque personnelle est votre meilleur atout."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Publishing consistently about your speciality, sharing cases and participating in conversations in your sector builds authority and generates B2B enquiries without investing in advertising. It is a long-term channel that rewards consistency above volume."
                : "Publier avec constance sur votre spécialité, partager des cas et participer aux conversations de votre secteur construit de l'autorité et génère des demandes B2B sans investir en publicité. C'est un canal de long terme qui récompense la constance plutôt que le volume."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Google Ads for freelancers: when it is worth it"
                : "Google Ads pour les indépendants : quand ça vaut la peine"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Google Ads is the fastest route to getting clients: well configured, a campaign can bring the first contact on the same day. With £100–200/month you can already run local search campaigns with measurable results."
                : "Google Ads est la voie la plus rapide pour obtenir des clients : bien configurée, une campagne peut amener le premier contact le même jour. Avec 100 à 200 €/mois, on peut déjà faire des campagnes de recherche locale avec des résultats mesurables."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "PPC advertising is worth it when you need immediate results or while SEO matures. The risk is depending on it alone: as soon as you stop paying, clients stop arriving. That is why it works best combined with organic channels that build long-term presence."
                : "La publicité PPC vaut la peine quand vous avez besoin de résultats immédiats ou pendant que le SEO mûrit. Le risque est d'en dépendre uniquement : dès que vous arrêtez de payer, les clients arrêtent d'arriver. C'est pourquoi cela fonctionne mieux combiné à des canaux organiques qui construisent une présence à long terme."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Content as a differentiator" : "Le contenu comme différenciateur"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "In a market where many freelancers offer the same thing, content is what differentiates you. Explaining how you work, resolving common doubts and demonstrating real experience generates trust before the first call."
                : "Dans un marché où de nombreux indépendants proposent la même chose, le contenu est ce qui vous différencie. Expliquer comment vous travaillez, résoudre les doutes fréquents et démontrer une expérience réelle génère de la confiance avant le premier appel."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "You do not need to produce a lot: a few well-made pieces of content that answer the real questions of your potential clients work for you 24 hours a day. And like any business that needs financial order to grow, it is worth being clear about practical matters such as self-employed social security contributions in Spain in 2026."
                : "Vous n'avez pas besoin de produire beaucoup : quelques contenus bien faits qui répondent aux vraies questions de vos clients potentiels travaillent pour vous 24 heures sur 24. Et comme toute entreprise qui a besoin d'ordre financier pour croître, il vaut la peine d'être clair sur des questions pratiques comme les cotisations des indépendants en Espagne en 2026."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Get more clients without overcomplicating things"
                : "Obtenez plus de clients sans vous compliquer la vie"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we help freelancers build a realistic and profitable digital strategy, in the correct order and without overspending."
                : "Chez Mkt Web 360, nous aidons les indépendants à mettre en place une stratégie digitale réaliste et rentable, dans le bon ordre et sans dépenser trop."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </a>
              <a
                href={`/${lang}/local-seo-for-service-businesses/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See Local SEO service" : "Voir le service SEO local"}
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
