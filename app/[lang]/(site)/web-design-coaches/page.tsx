import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

const FAQS_EN = [
  {
    q: "How much does a website for a coach or consultant cost?",
    a: "A professional website for a coach or consultant starts from £690/€690 depending on the number of services, whether it includes a blog, resource area or payment platform integration. The price includes design, development, technical SEO and training for autonomous management.",
  },
  {
    q: "Can I sell my programmes or courses directly from the website?",
    a: "Yes. We can integrate payment gateways (Stripe, PayPal) for direct sale of sessions, programmes or courses. We can also connect with platforms such as Hotmart or Teachable if you already use them.",
  },
  {
    q: "What is a lead magnet and how do you integrate it into the website?",
    a: "A lead magnet is a free resource (ebook, masterclass, checklist) that you offer in exchange for a visitor's email address. We integrate it with your email marketing tool (Mailchimp, ActiveCampaign, etc.) so the process is completely automatic.",
  },
  {
    q: "Can you help me define what to put on the website if I don't know where to start?",
    a: "Yes. Part of our process is helping you structure your value proposition, your services and your story in a way that connects with your ideal client. We don't just design — we also help you think about what to communicate and how.",
  },
];

const FAQS_FR = [
  {
    q: "Combien coûte un site web pour un coach ou un consultant ?",
    a: "Un site web professionnel pour coach ou consultant commence à partir de 690 € selon le nombre de services, s'il inclut un blog, un espace de ressources ou une intégration avec des plateformes de paiement. Le prix inclut la conception, le développement, le référencement technique et la formation à la gestion autonome.",
  },
  {
    q: "Puis-je vendre mes programmes ou formations directement depuis le site ?",
    a: "Oui. Nous pouvons intégrer des passerelles de paiement (Stripe, PayPal) pour la vente directe de séances, programmes ou formations. Nous pouvons également connecter des plateformes comme Hotmart ou Teachable si vous les utilisez déjà.",
  },
  {
    q: "Qu'est-ce qu'un lead magnet et comment l'intégrez-vous dans le site ?",
    a: "Un lead magnet est une ressource gratuite (ebook, masterclass, checklist) que vous offrez en échange de l'email du visiteur. Nous l'intégrons avec votre outil d'email marketing (Mailchimp, ActiveCampaign, etc.) pour que le processus soit entièrement automatique.",
  },
  {
    q: "Pouvez-vous m'aider à définir le contenu du site si je ne sais pas par où commencer ?",
    a: "Oui. Une partie de notre processus consiste à vous aider à structurer votre proposition de valeur, vos services et votre histoire de façon à ce qu'ils résonnent avec votre client idéal. Nous ne faisons pas que concevoir — nous vous aidons aussi à réfléchir à ce que vous devez communiquer et comment.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for Coaches and Consultants"
      : "Création de Site Web pour Coachs et Consultants",
    description: isEn
      ? "Professional web design for coaches, consultants and trainers. A website that builds authority, captures leads and converts visitors into clients. No commission fees."
      : "Création de site web pour coachs, consultants et formateurs. Un site qui renforce votre autorité, capte des leads et convertit les visiteurs en clients. Sans commission.",
    alternates: alternatesFor(`/${lang}/web-design-coaches/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-coaches/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design for Coaches and Consultants | Mkt Web 360"
        : "Création de Site Web pour Coachs et Consultants | Mkt Web 360",
      description: isEn
        ? "Professional web design for coaches, consultants and trainers. Builds authority, captures leads and converts visitors into clients."
        : "Création de site web pour coachs, consultants et formateurs. Renforce l'autorité, capte des leads et convertit les visiteurs en clients.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  const steps = isEn
    ? [
        { n: "1", t: "Brand strategy and positioning", d: "We define together your value proposition, your ideal client, your differentiators and the key messages that will appear on the website. Without this foundation, design has no direction." },
        { n: "2", t: "Design aligned with your personal brand", d: "We create a unique design that reflects your personality and connects with your audience. Colour palette, typography and visual aesthetic consistent with your identity." },
        { n: "3", t: "Content, lead magnet and integrations", d: "We write the main page copy, integrate your lead magnet with your email marketing and connect the tools you already use (calendars, forms, payments)." },
        { n: "4", t: "Training and launch", d: "We train you to manage the website, publish content and update your services autonomously. The website is yours, with no dependencies." },
      ]
    : [
        { n: "1", t: "Stratégie de marque et positionnement", d: "Nous définissons ensemble votre proposition de valeur, votre client idéal, vos différenciateurs et les messages clés qui apparaîtront sur le site. Sans cette base, le design n'a pas de direction." },
        { n: "2", t: "Conception alignée avec votre marque personnelle", d: "Nous créons un design unique qui reflète votre personnalité et connecte avec votre audience. Palette de couleurs, typographies et esthétique cohérentes avec votre identité." },
        { n: "3", t: "Contenu, lead magnet et intégrations", d: "Nous rédigeons les textes principaux, intégrons votre lead magnet avec l'email marketing et connectons les outils que vous utilisez déjà (agendas, formulaires, paiements)." },
        { n: "4", t: "Formation et lancement", d: "Nous vous apprenons à gérer le site, publier du contenu et mettre à jour vos services de façon autonome. Le site vous appartient, sans dépendances." },
      ];

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Web design for coaches" : "Site web pour coachs" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Web Design · Professional Services" : "Création Web · Services Professionnels"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">
              {isEn ? "25 June 2026" : "25 juin 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Web Design for Coaches: Digital Authority That Generates Clients"
              : "Site Web pour Coachs : L'Autorité Digitale qui Génère des Clients"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "For a coach or consultant, a website is not just a showcase — it is the primary tool for building authority and attracting clients. A well-designed website works while you sleep, drawing in the right people and filtering out those who aren't your ideal client."
              : "Pour un coach ou un consultant, le site web n'est pas seulement une vitrine — c'est l'outil principal de construction d'autorité et d'acquisition de clients. Un site bien conçu travaille pendant que vous dormez, attirant les bonnes personnes et filtrant celles qui ne sont pas votre client idéal."}
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Coaching and consulting are services where trust is everything. Before hiring a coach, a potential client will research who you are, what results you have achieved for other clients, what methodology you use and whether your communication style connects with them. All of this happens on your website, long before the first conversation."
              : "Le coaching et la consultance sont des services où la confiance est primordiale. Avant d'engager un coach, un client potentiel va rechercher qui vous êtes, quels résultats vous avez obtenus pour d'autres clients, quelle méthodologie vous utilisez et si votre façon de communiquer lui correspond. Tout cela se passe sur votre site web, bien avant la première conversation."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Why personal brand is the centre of everything"
              : "Pourquoi la marque personnelle est au cœur de tout"}
          </h2>
          <p>
            {isEn
              ? "Unlike other businesses where the product or price takes centre stage, in coaching the protagonist is you. Your story, your experience, your methodology and the results you have achieved with your clients are the most powerful sales arguments you have. The website must reflect all of this authentically and coherently."
              : "Contrairement à d'autres entreprises où le produit ou le prix est au premier plan, dans le coaching c'est vous qui êtes le protagoniste. Votre histoire, votre expérience, votre méthodologie et les résultats que vous avez obtenus avec vos clients sont les arguments de vente les plus puissants que vous avez. Le site doit refléter tout cela de façon authentique et cohérente."}
          </p>
          <p>
            {isEn
              ? "A generic website with stock photos and corporate copy doesn't work for a coach. What works is a website that shows who you really are, what transformation you offer, why you are the right person to guide that change, and what those who have already worked with you say."
              : "Un site générique avec des photos de stock et des textes corporatifs ne fonctionne pas pour un coach. Ce qui fonctionne, c'est un site qui montre qui vous êtes vraiment, quelle transformation vous offrez, pourquoi vous êtes la bonne personne pour accompagner ce changement et ce que disent ceux qui ont déjà travaillé avec vous."}
          </p>
          <p>
            {isEn
              ? "The design must complement that authenticity: colours, typography, photography and communication tone aligned with your personality and with the type of client you are targeting. A business leadership coach needs a very different website from a wellness coach or a financial consultant."
              : "Le design doit accompagner cette authenticité : couleurs, typographies, photographies et ton de communication alignés avec votre personnalité et avec le type de client auquel vous vous adressez. Un coach en leadership d'entreprise a besoin d'un site très différent de celui d'un coach de bien-être ou d'un consultant financier."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "What a coach or consultant's website must have"
              : "Ce que doit avoir le site web d'un coach ou consultant"}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{isEn ? "Powerful About page:" : "Page « À propos » puissante :"}</strong>{" "}
              {isEn
                ? "not a chronological bio — it's your transformation story and the reasons you do what you do. It is the most visited page after the homepage on coaches' websites."
                : "ce n'est pas une biographie chronologique — c'est votre histoire de transformation et les raisons pour lesquelles vous faites ce que vous faites. C'est la page la plus visitée après la page d'accueil sur les sites de coachs."}
            </li>
            <li>
              <strong>{isEn ? "Services with complete clarity:" : "Services avec une clarté totale :"}</strong>{" "}
              {isEn
                ? "what each programme includes, who it is for, what results the client can expect and how the process works. No vagueness or jargon your ideal client won't understand."
                : "ce que comprend chaque programme, à qui il s'adresse, quels résultats le client peut attendre et comment se déroule le processus. Sans vagueries ni jargon que votre client idéal ne comprendra pas."}
            </li>
            <li>
              <strong>{isEn ? "Real, specific testimonials:" : "Témoignages réels et spécifiques :"}</strong>{" "}
              {isEn
                ? "\"It was great\" is not enough. Testimonials that convert speak about the before, the process and the after. They include name, photo and context."
                : "« C'était super » ne suffit pas. Les témoignages qui convertissent parlent du avant, du processus et du après. Ils incluent le nom, la photo et le contexte."}
            </li>
            <li>
              <strong>{isEn ? "Lead magnet with email capture:" : "Lead magnet avec capture d'email :"}</strong>{" "}
              {isEn
                ? "an ebook, a free masterclass, a quiz or a guide that delivers immediate value in exchange for an email address. The most efficient way to build your list of potential clients."
                : "un ebook, une masterclass gratuite, un test ou un guide qui apporte une valeur immédiate en échange de l'email. C'est le moyen le plus efficace de constituer votre liste de clients potentiels."}
            </li>
            <li>
              <strong>{isEn ? "Integrated blog or podcast:" : "Blog ou podcast intégré :"}</strong>{" "}
              {isEn
                ? "valuable content positions your authority, improves your SEO and keeps your audience engaged between launches."
                : "le contenu à valeur ajoutée positionne votre autorité, améliore votre SEO et maintient votre audience connectée entre les lancements."}
            </li>
            <li>
              <strong>{isEn ? "Clear call to action:" : "Appel à l'action clair :"}</strong>{" "}
              {isEn
                ? "discovery session booking, contact form or programme access. Every page should have one clear objective."
                : "réservation d'une séance découverte, formulaire de contact ou accès au programme. Chaque page doit avoir un seul objectif clair."}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "SEO for coaches: how your ideal clients find you"
              : "SEO pour coachs : comment vos clients idéaux vous trouvent"}
          </h2>
          <p>
            {isEn
              ? "Most coaches underestimate SEO because they believe their clients come via social media or referrals. And it's true that those channels work — but they don't scale. Once your website ranks on Google for searches in your niche, it attracts qualified traffic continuously and completely free of charge."
              : "La plupart des coachs sous-estiment le SEO parce qu'ils pensent que leurs clients viennent des réseaux sociaux ou des recommandations. Et c'est vrai que ces canaux fonctionnent — mais ils ne passent pas à l'échelle. Une fois que votre site se positionne sur Google pour les recherches de votre niche, il attire du trafic qualifié en continu et de façon entièrement gratuite."}
          </p>
          <p>
            {isEn
              ? "Keywords for coaches tend to be high-intent searches: \"business leadership coach\", \"digital marketing consultant for freelancers\", \"life coach London\". These are searches with relatively low volume but very high hiring intent. The blog is the most powerful vehicle for capturing those informational searches and converting those readers into leads."
              : "Les mots-clés pour coachs sont généralement des recherches à haute intention : « coach en leadership d'entreprise », « consultant marketing digital pour indépendants », « coach de vie Paris ». Ce sont des recherches avec un volume relativement faible mais une très haute intention de contracter. Le blog est le vecteur le plus puissant pour capter ces recherches informationnelles et convertir ces lecteurs en leads."}
          </p>
          <p>
            {isEn
              ? "Local SEO also works very well if your service has an in-person component: \"business coach in Manchester\" or \"strategic consultant Edinburgh\" have specific searches with little competition and high intent."
              : "Le SEO local fonctionne aussi très bien si votre service a une composante présentielle : « coach d'entreprise à Bordeaux » ou « consultant stratégique Nantes » ont des recherches spécifiques avec peu de concurrence et une haute intention."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn
                ? "Want a website that reflects who you are and attracts your ideal clients?"
                : "Vous voulez un site qui reflète qui vous êtes et attire vos clients idéaux ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "We design websites for coaches and consultants that convey authority, capture leads and convert. SEO included and autonomous management."
                : "Nous concevons des sites web pour coachs et consultants qui transmettent l'autorité, captent des leads et convertissent. SEO inclus et gestion autonome."}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request a quote" : "Demander un devis"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Our process: from zero to website in 4 steps"
              : "Notre processus : de zéro à un site web en 4 étapes"}
          </h2>
          <ul className="list-none space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Your digital authority, ready to attract clients"
                : "Votre autorité digitale, prête à attirer des clients"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "A website that reflects who you are, ranks on Google and converts visits into ideal clients. No commissions, no licences."
                : "Un site qui reflète qui vous êtes, se positionne sur Google et convertit les visites en clients idéaux. Sans commissions, sans licences."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request a quote" : "Demander un devis"}
              </Link>
              <Link
                href={`/${lang}/web-design/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See web design service" : "Voir le service création web"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
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
            {isEn ? "See also:" : "Voir aussi :"}{" "}
            <Link href={`/${lang}/how-to-create-value-proposition/`} className="text-accent-500 hover:underline">
              {isEn ? "How to create your value proposition" : "Comment créer votre proposition de valeur"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/how-to-generate-quality-leads/`} className="text-accent-500 hover:underline">
              {isEn ? "How to generate quality leads" : "Comment générer des leads de qualité"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/web-design/`} className="text-accent-500 hover:underline">
              {isEn ? "Professional web design" : "Création de sites web professionnels"}
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="web-design-coaches" category="Web Design" />
    </>
  );
}
