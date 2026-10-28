import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ogImagesIntl } from "@/lib/og";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing for Freelancers in 2026"
      : "Marketing digital pour indépendants en 2026",
    description: isEn
      ? "Freelancers have more tools than ever to get online clients on their own. Practical guide: local SEO, Google Business Profile, LinkedIn and content for freelancers in 2026."
      : "Les indépendants ont plus d'outils que jamais pour obtenir des clients en ligne par eux-mêmes. Guide pratique : SEO local, Google Business Profile, LinkedIn et contenu pour indépendants en 2026.",
    alternates: alternatesFor(`/${lang}/digital-marketing-for-freelancers-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-marketing-for-freelancers-2026/`,
    },
    openGraph: {
      images: ogImagesIntl("digital-marketing-for-freelancers-2026"),
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
    a: "With no budget you can do a lot: optimise your Google Business Profile, post on LinkedIn, improve the basic SEO of your website. With a modest budget you can test local search campaigns on Google Ads and measure what comes in; how much you need depends on the cost per click in your sector and area.",
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
    a: "With a well-optimised Google Business Profile, the first contacts can arrive within 1–2 months. With organic SEO, as a guide, 3–6 months for the first results and 6–12 to consolidate. With Google Ads: the first day if the campaign is well configured.",
  },
];

const FAQS_FR = [
  {
    q: "Combien d'argent un indépendant a-t-il besoin pour le marketing digital ?",
    a: "Sans budget, on peut faire beaucoup : optimiser Google Business Profile, publier sur LinkedIn, améliorer le SEO basique du site web. Avec un budget modeste, on peut tester des campagnes Google Ads de recherche locale et mesurer ce qui arrive ; le montant nécessaire dépend du coût par clic de votre secteur et de votre zone.",
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
    a: "Avec un Google Business Profile bien optimisé, les premiers contacts peuvent arriver en 1 à 2 mois. Avec le SEO organique, à titre indicatif, 3 à 6 mois pour les premiers résultats et 6 à 12 pour les consolider. Avec Google Ads : le premier jour si la campagne est bien configurée.",
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
        <IntlArticleJsonLd lang={lang} slug="digital-marketing-for-freelancers-2026" headline={isEn ? "Digital marketing for freelancers in 2026: the practical guide to getting clients" : "Marketing digital pour les indépendants en 2026 : le guide pratique pour obtenir des clients"} image="/og-homepage.jpg" />
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Digital marketing for freelancers in 2026: the practical guide to getting clients"
            : "Marketing digital pour les indépendants en 2026 : le guide pratique pour obtenir des clients"}
        </h1>
        <AuthorByline lang={lang} block />
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A freelancer can get clients online without hiring an agency, as long as they choose well where to start. This practical guide covers the essentials in order: local SEO, Google Business Profile, LinkedIn and content. If you sell services in your area, start with local SEO, which is usually the channel that works best in that case."
            : "Un indépendant peut obtenir des clients en ligne sans engager d'agence, à condition de bien choisir par où commencer. Ce guide pratique couvre l'essentiel dans l'ordre : SEO local, Google Business Profile, LinkedIn et contenu. Si vous vendez des services dans votre zone, commencez par le SEO local, qui est en général le canal le plus efficace dans ce cas."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Many freelancers believe that digital marketing requires budget and an agency. Not always: with a few free tools and the right order, a freelancer can build a digital presence that brings in enquiries regularly. It comes down to doing a few things, in the right order."
              : "Beaucoup d'indépendants pensent que le marketing digital nécessite un budget et une agence. Pas toujours : avec quelques outils gratuits et le bon ordre, un indépendant peut construire une présence digitale qui lui apporte des demandes régulièrement. Il s'agit de faire peu de choses, dans le bon ordre."}
          </p>
          <p>
            {isEn ? "What wastes the most time is not knowing where to start. Before opening five fronts, get a picture of how Google sees you today: you can request our " : "Ce qui fait perdre le plus de temps, c'est de ne pas savoir par où commencer. Avant d'ouvrir cinq chantiers, faites un état des lieux de votre présence sur Google : vous pouvez demander notre "}
            <a href={isEn ? "/en/digital-audit/" : "/fr/audit-digital/"} className="text-accent-500 hover:underline">
              {isEn ? "free audit of your website and Google Business Profile" : "audit gratuit de votre site et de votre fiche Google"}
            </a>
            {isEn ? ", which tells you what to fix first, and then do it yourself with this guide." : ", qui vous indique quoi corriger en premier, puis le faire vous-même avec ce guide."}
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
                ? "If your business has a local component, the first step is always Google Business Profile. It is free, it appears at the exact moment someone searches for what you offer near them, and with good optimisation the first contacts can arrive within 1–2 months (as a guide: it depends on the sector, the area and the competition)."
                : "Si votre entreprise a une composante locale, la première étape est toujours Google Business Profile. C'est gratuit, cela apparaît au moment exact où quelqu'un recherche ce que vous proposez près de lui, et avec une bonne optimisation les premiers contacts peuvent arriver en 1 à 2 mois (à titre indicatif : cela dépend du secteur, de la zone et de la concurrence)."}
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
                ? "Local SEO: the investment that pays off best over time if you serve your area"
                : "SEO local : l'investissement le plus rentable dans la durée si vous travaillez dans votre zone"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For a freelancer providing services in their area, local SEO is usually the channel that performs best in the medium term. Appearing in searches in your city for your service means capturing clients with genuine intent to hire, right when they need you."
                : "Pour un indépendant qui preste des services dans sa zone, le SEO local est généralement le canal le plus rentable à moyen terme. Apparaître dans les recherches de votre ville pour votre service signifie capter des clients avec une intention réelle d'embauche, exactement quand ils vous ont besoin."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Organic SEO takes longer than Google Ads (as a guide, 3–6 months for the first results and 6–12 to consolidate), but it builds a lasting asset: once positioned, it keeps bringing clients without cost per click. For many service freelancers, it is the foundation of the entire digital strategy. And that traffic needs to land on a well-designed website that converts visits into enquiries."
                : "Le SEO organique prend plus de temps que Google Ads (à titre indicatif, 3 à 6 mois pour les premiers résultats et 6 à 12 pour se consolider), mais il construit un actif durable : une fois positionné, il continue d'amener des clients sans coût par clic. Pour de nombreux indépendants de services, c'est la base de toute la stratégie digitale. Et ce trafic doit atterrir sur un site web bien conçu qui convertit les visites en demandes."}
            </p>
          </section>

          <BlogBanner
            lang={lang}
            badge={isEn ? "Free, no commitment" : "Gratuit et sans engagement"}
            title={isEn ? "Before doing it yourself, see where to start" : "Avant de vous lancer seul, voyez par où commencer"}
            desc={isEn
              ? "We review your website, your Google Business Profile and your visibility in AI assistants, and send you the highest-impact actions in order. You can apply them yourself."
              : "Nous analysons votre site, votre fiche Google Business Profile et votre visibilité dans les assistants IA, et vous envoyons les actions prioritaires dans l'ordre. Vous pouvez les appliquer vous-même."}
            cta={isEn ? "Request my free audit" : "Demander mon audit gratuit"}
            href={isEn ? "/en/digital-audit/" : "/fr/audit-digital/"}
            secondary={{
              text: isEn ? "Can't do it all? Local SEO done for you" : "Pas le temps de tout faire ? Le SEO local, on s'en occupe",
              href: `/${lang}/local-seo-services/`,
            }}
          />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "LinkedIn for freelancers who sell to businesses"
                : "LinkedIn pour les indépendants qui vendent à des entreprises"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "If your client is a business, LinkedIn is your priority channel. On LinkedIn, what you publish from your personal profile usually reaches more people than posts from a company page, and for a freelancer that is an advantage: your personal brand is your best asset."
                : "Si votre client est une entreprise, LinkedIn est votre canal prioritaire. Sur LinkedIn, ce que vous publiez depuis votre profil personnel touche en général plus de monde que les publications d'une page d'entreprise, et pour un indépendant c'est un avantage : votre marque personnelle est votre meilleur atout."}
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
                ? "Google Ads is the fastest way to appear: a well-configured campaign is shown from day one to people searching for your service. With a modest budget you can test local search campaigns and measure what comes in; how much you need depends on the cost per click in your sector and area."
                : "Google Ads est la voie la plus rapide pour apparaître : une campagne bien configurée est diffusée dès le premier jour auprès de ceux qui cherchent votre service. Avec un budget modeste, on peut tester des campagnes de recherche locale et mesurer ce qui arrive ; le montant nécessaire dépend du coût par clic de votre secteur et de votre zone."}
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
                ? "You do not need to produce a lot: a few well-made pieces of content that answer the real questions of your potential clients keep attracting visits months after you publish them. And like any business that needs financial order to grow, it is worth being clear about practical matters such as self-employed social security contributions in Spain in 2026."
                : "Vous n'avez pas besoin de produire beaucoup : quelques contenus bien faits qui répondent aux vraies questions de vos clients potentiels continuent d'attirer des visites des mois après leur publication. Et comme toute entreprise qui a besoin d'ordre financier pour croître, il vaut la peine d'être clair sur des questions pratiques comme les cotisations des indépendants en Espagne en 2026."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "When it makes sense to stop doing it alone" : "Quand il vaut mieux ne plus tout faire seul"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn ? "Doing it yourself has a hidden cost: hours you do not invoice. If your Google profile has been half-finished for months, you are not publishing and you do not know which searches bring you clients, it may pay to delegate only the heaviest part. For a freelancer who works locally, that usually means our " : "Tout faire soi-même a un coût caché : les heures que vous ne facturez pas. Si votre fiche Google est à moitié remplie depuis des mois, que vous ne publiez pas et que vous ne savez pas quelles recherches vous amènent des clients, il peut être rentable de déléguer seulement la partie la plus lourde. Pour un indépendant qui travaille localement, c'est en général notre "}
              <a href={`/${lang}/local-seo-services/`} className="text-accent-500 hover:underline">
                {isEn ? "local SEO service" : "service de SEO local"}
              </a>
              {isEn ? " or the " : " ou la "}
              <a href={isEn ? "/en/google-business-profile-service/" : "/fr/gestion-google-business-profile/"} className="text-accent-500 hover:underline">
                {isEn ? "management of your Google Business Profile" : "gestion de votre fiche Google Business Profile"}
              </a>
              {isEn ? ", while you keep doing LinkedIn or content if you enjoy it." : ", et vous continuez LinkedIn ou le contenu si cela vous plaît."}
            </p>
          </section>

          <div className="mw-skin-cta text-white rounded-3xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Do it yourself, with a clear order"
                : "Faites-le vous-même, avec un ordre clair"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "Request the free audit and we will tell you what to fix first on your website and Google profile. If you later prefer to delegate, we will explain how we handle local SEO."
                : "Demandez l'audit gratuit et nous vous dirons quoi corriger en premier sur votre site et votre fiche Google. Si vous préférez ensuite déléguer, nous vous expliquerons comment nous travaillons le SEO local."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={isEn ? "/en/digital-audit/" : "/fr/audit-digital/"}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request the free audit" : "Demander l'audit gratuit"}
              </a>
              <a
                href={`/${lang}/local-seo-services/`}
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
                  className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                  </summary>
                  <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
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
