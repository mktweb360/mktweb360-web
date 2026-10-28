import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 04/11/2026 — EN/FR del artículo /anuncios-chatgpt-ads-espana/ (tema 9). La versión FR vive en
// ../publicite-chatgpt-ads-espagne/ y reexporta esta página. Datos de OpenAI comprobados el 28/10/2026.

const ES_SLUG = "anuncios-chatgpt-ads-espana";
const OGS = { en: "/og-chatgpt-ads-spain.jpg", fr: "/og-publicite-chatgpt-ads-espagne.jpg" } as const;
const DATE = "2026-11-04";
const SLUGS = { en: "chatgpt-ads-spain", fr: "publicite-chatgpt-ads-espagne" } as const;

type Lng = "en" | "fr";
const pick = (lang: string): Lng => (lang === "fr" ? "fr" : "en");
const pageUrl = (l: Lng) => `https://www.mktweb360.com/${l}/${SLUGS[l]}/`;

const META = {
  en: {
    title: "ChatGPT Ads in Spain: What They Are and Whether Your SME Should Try Them",
    description:
      "ChatGPT Ads is live in Spain with self-serve access. Who sees the ads, how they are chosen, how they differ from an organic mention and a 30-day test plan.",
    h1: "ChatGPT Ads in Spain: how ads in ChatGPT work and when to test them",
  },
  fr: {
    title: "Publicité ChatGPT en Espagne : ce que c’est et si votre PME doit tester",
    description:
      "ChatGPT Ads fonctionne en Espagne en libre-service. Qui voit les annonces, comment elles sont choisies, la différence avec une mention organique et un test de 30 jours.",
    h1: "ChatGPT Ads en Espagne : comment fonctionnent les annonces dans ChatGPT et quand les tester",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = pick(lang);
  const m = META[l];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: alternatesFor(`/${l}/${SLUGS[l]}/`) ?? { canonical: pageUrl(l) },
    openGraph: {
      title: `${m.title} | Mkt Web 360`,
      description: m.description,
      url: pageUrl(l),
      type: "article",
      images: [{ url: OGS[l], width: 1200, height: 630 }],
    },
  };
}

const FAQS = {
  en: [
    {
      q: "How much does it cost to advertise on ChatGPT?",
      a: "There is no fixed rate. Ads are bought at auction, by impressions (CPM) or by clicks (CPC), and you set the maximum bid and the budget. For click campaigns, OpenAI recommends starting with a maximum bid of 3 to 5 US dollars per click. That is a starting recommendation, not what you will actually pay.",
    },
    {
      q: "Will paying for ads make ChatGPT recommend me in its answers?",
      a: "No. OpenAI states that ads do not influence ChatGPT’s answers, that they run on separate systems and that advertisers cannot change the answers. To appear inside the answer you need to work on organic visibility (GEO).",
    },
    {
      q: "Does ChatGPT use my chat history to show me ads in Spain?",
      a: "According to OpenAI, personalised ads are not initially available in the European Economic Area or Switzerland. Without personalisation, ads are chosen from the current conversation and basic context such as general location or language. Advertisers never see conversations.",
    },
    {
      q: "Who sees ChatGPT ads?",
      a: "Adult users on the Free and Go plans. There are no ads on Plus, Pro, Business, Enterprise or Edu, on accounts of under-18s, in temporary chats or in conversations about sensitive topics such as health or politics.",
    },
    {
      q: "Can any business advertise on ChatGPT?",
      a: "No. At this stage OpenAI mainly accepts consumer, home, local services, travel, digital products and education. Health, legal and financial services are only approved case by case after manual review, and financial services outside the US are generally prohibited. Alcohol, tobacco, gambling, dating and political ads are not allowed.",
    },
  ],
  fr: [
    {
      q: "Combien coûte une publicité sur ChatGPT ?",
      a: "Il n’y a pas de tarif fixe. Les annonces s’achètent aux enchères, à l’impression (CPM) ou au clic (CPC), et vous fixez l’enchère maximale et le budget. Pour les campagnes au clic, OpenAI recommande de commencer avec une enchère maximale de 3 à 5 dollars US par clic. C’est une recommandation de départ, pas ce que vous paierez réellement.",
    },
    {
      q: "Payer des annonces fait-il que ChatGPT me recommande dans ses réponses ?",
      a: "Non. OpenAI affirme que les annonces n’influencent pas les réponses de ChatGPT, qu’elles fonctionnent sur des systèmes séparés et que les annonceurs ne peuvent pas modifier les réponses. Pour apparaître dans la réponse, il faut travailler la visibilité organique (GEO).",
    },
    {
      q: "ChatGPT utilise-t-il mon historique pour m’afficher des annonces en Espagne ?",
      a: "Selon OpenAI, les annonces personnalisées ne sont pas disponibles au départ dans l’Espace économique européen ni en Suisse. Sans personnalisation, les annonces sont choisies selon la conversation en cours et un contexte de base, comme la localisation générale ou la langue. Les annonceurs ne voient jamais les conversations.",
    },
    {
      q: "Qui voit les annonces de ChatGPT ?",
      a: "Les utilisateurs adultes des offres Free et Go. Il n’y a pas d’annonces sur Plus, Pro, Business, Enterprise ni Edu, ni sur les comptes de mineurs, ni dans les discussions temporaires, ni dans les conversations sur des sujets sensibles comme la santé ou la politique.",
    },
    {
      q: "Toute entreprise peut-elle faire de la publicité sur ChatGPT ?",
      a: "Non. À ce stade, OpenAI accepte surtout la consommation, la maison, les services locaux, le voyage, les produits numériques et l’éducation. La santé, les services juridiques et financiers ne sont approuvés qu’au cas par cas, après examen manuel, et les services financiers hors des États-Unis sont en général interdits. L’alcool, le tabac, les jeux d’argent, les rencontres et la politique ne sont pas autorisés.",
    },
  ],
};

type Content = {
  crumb: string;
  home: string;
  category: string;
  dateLabel: string;
  lead: string;
  alt: string;
  answer: string;
  hSummary: string;
  summary: ReactNode[];
  hWhat: string;
  what1: string;
  what2: string;
  whoIntro: string;
  whoNot: ReactNode[];
  hTarget: string;
  target1: ReactNode;
  signalsHead: string[];
  signals: string[][];
  target2: string;
  hCost: string;
  cost: string;
  hVs: string;
  vs1: string;
  vsHead: string[];
  vs: string[][];
  hQuestions: string;
  questions: ReactNode[];
  hPlan: string;
  plan1: ReactNode;
  planHead: string[];
  plan: string[][];
  utmIntro: string;
  utm: ReactNode[];
  verified: string;
  hWeb: string;
  web: ReactNode[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  hFaq: string;
  hSources: string;
  consulted: string;
  related: string;
  back: string;
};

function content(l: Lng, link: (s: string, t: string) => ReactNode): Content {
  if (l === "en") {
    return {
      crumb: "ChatGPT Ads in Spain",
      home: "Home",
      category: "SEM",
      dateLabel: "November 4, 2026",
      lead: "What ChatGPT ads are, who sees them in Spain, how they are chosen and how they differ from ChatGPT mentioning you on its own. With a 30-day test plan for a small business.",
      alt: "Mock-up of a chat conversation: the answer mentions two brands organically and below it a block labelled “Sponsored” is marked as a paid ad",
      answer:
        "ChatGPT Ads are the paid ads OpenAI shows inside ChatGPT. In Spain they have been running since late August 2026, and businesses based in Spain can buy them self-serve through Ads Manager. They appear below the answer, labelled as sponsored, and only adult users on the Free and Go plans see them.",
      hSummary: "Quick summary",
      summary: [
        <><strong>Availability:</strong> on 18 August 2026 OpenAI announced ChatGPT Ads for 31 European markets, Spain included, and on 31 August it opened self-serve access in Ads Manager.</>,
        <><strong>Who sees them:</strong> adults on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu have no ads.</>,
        <><strong>How they are chosen in Spain:</strong> from the current conversation and basic context. Personalised ads are not initially available in the EEA.</>,
        <><strong>An ad is not a recommendation:</strong> it sits below the answer, labelled as sponsored, and according to OpenAI it does not change what ChatGPT says.</>,
        <><strong>For an SME:</strong> worth a small test with a spending cap, UTMs and verified conversions, if your category is allowed and your landing page is up to it.</>,
      ],
      hWhat: "What are ChatGPT ads and who sees them in Spain?",
      what1:
        "OpenAI started testing ads in the United States on 9 February 2026. On 18 August it announced they would arrive “next week” in 31 European countries, including Spain, and on 31 August it updated the post to confirm that self-serve access through Ads Manager was live in those markets. As of 28 October 2026, Spain is listed as “Available” in the Ads Manager country table. To use it, the legal entity that advertises and receives the invoices must be based in a listed country.",
      what2:
        "Each ad shows the advertiser’s name, favicon, a headline, body text, an image and the landing page. It is displayed below ChatGPT’s answer, separate from it. OpenAI is also testing a multi-image format during image generation.",
      whoIntro: "Free and Go users see them. They are not shown to:",
      whoNot: [
        <>Users on <strong>Plus, Pro, Business, Enterprise and Edu</strong>.</>,
        <>Accounts identified as belonging to <strong>under-18s</strong>.</>,
        <><strong>Temporary chats.</strong></>,
        <>Conversations about <strong>sensitive topics</strong>: personal and mental health, politics, self-harm, gambling and the other categories listed in the ad policy.</>,
      ],
      hTarget: "How is the ad chosen? (targeting)",
      target1: (
        <>
          It is not a keyword auction like Google Ads. The system picks ads by relevance and expected performance and ranks them with a relevance-weighted second-price auction. In each ad group you write <strong>context hints</strong>: the topics or conversations where your product fits. They guide delivery but do not guarantee appearing in a given conversation.
        </>
      ),
      signalsHead: ["Signal", "Used in Spain?", "Detail"],
      signals: [
        ["Current conversation", "Yes", "The main signal: the topic and intent of what is being asked"],
        ["Basic context (general location, language)", "Yes", "OpenAI lists it as a signal even with personalisation off"],
        ["Advertiser context hints", "Yes", "You describe topics or conversations where your ad fits; they are not exact-match keywords"],
        ["Past chats and memory", "No, initially", "Only with personalisation on, which is not initially available in the EEA or Switzerland"],
        ["User personal data", "Not shared", "Advertisers get aggregated data (impressions, clicks), never chats, name, email or exact location"],
      ],
      target2:
        "In the August update OpenAI also mentions geographic targeting and custom audiences among the platform’s new features. Check in your Ads Manager account which ones you have, because personalisation is limited in Europe.",
      hCost: "How much does it cost and how do you pay?",
      cost:
        "You can buy by impressions (CPM), by clicks (CPC) or optimise for conversions; with click billing you pay for valid clicks, not conversions. You set the maximum bid and the budget. For CPC campaigns OpenAI recommends starting with a maximum bid of 3 to 5 US dollars per click. That is its starting recommendation: the real cost depends on the auction and your sector, and we have not found official average cost data for Spain.",
      hVs: "How is an ad different from an organic mention?",
      vs1:
        "This is the most common confusion. ChatGPT recommending your business in its answer and your ad appearing below it are two different things, achieved in different ways. OpenAI insists that ads do not influence answers: paying does not put you in the text of the answer.",
      vsHead: ["", "Ad (ChatGPT Ads)", "Organic mention (GEO)"],
      vs: [
        ["What it is", "A paid block, labelled “Sponsored”", "Your brand cited or recommended inside the answer"],
        ["Where it appears", "Below the answer, separate from it", "In the text of the answer or its sources"],
        ["Who sees it", "Only adults on Free and Go", "Any user, on any plan"],
        ["What you control", "Text, image, landing page, budget, bid and context hints", "Only what you publish: your website, data, reviews and mentions elsewhere"],
        ["What you don’t control", "The exact conversation it shows in (hints guide, they don’t guarantee)", "Whether it cites you, how it describes you and in what order"],
        ["Cost", "You pay per impression or per click", "Nothing to OpenAI; you invest in content and your website"],
        ["When you see the effect", "As soon as the campaign is approved and running", "Weeks or months; it depends on being found and cited"],
        ["If you stop investing", "It disappears when paused", "It lasts as long as your content stays useful and current"],
        ["How it is measured", "Ads Manager (impressions, clicks, CPC, conversions) and UTMs in GA4", "A fixed set of questions every month and chatgpt.com visits in GA4"],
      ],
      hQuestions: "Is it worth it for an SME? 5 questions before investing",
      questions: [
        <><strong>Is your category allowed?</strong> Read OpenAI’s ad policy first. If you sell financial services, alcohol, gambling or anything health-related, you may not be able to advertise or your case may go to manual review.</>,
        <><strong>Do your customers ask ChatGPT before buying from you?</strong> Ask the questions your customer would ask and see whether the conversation fits what you sell. If nobody would ask an assistant about it, the channel has little room.</>,
        <><strong>Do you have a landing page that answers that conversation?</strong> Someone coming from ChatGPT has already compared options. They need a price or range, conditions and a clear way to get in touch, not a generic home page.</>,
        <><strong>Can you measure real conversions?</strong> At minimum, UTMs and a key event in GA4. Better still, OpenAI’s pixel or its conversions API, plus checking every lead in your CRM.</>,
        <><strong>Are the basics covered?</strong> If your Google Business Profile and a working search campaign are not in place yet, that money usually performs sooner there. ChatGPT Ads is a channel to test, not to start with.</>,
      ],
      hPlan: "30-day test plan: structure, fixed budget and measurement",
      plan1: (
        <>
          The goal is to learn with little money and reach a clear decision at the end. Before you start, set the <strong>maximum total spend</strong> for the test: an amount you could lose entirely without hurting the business. Spread it across the days of the campaign and do not increase it until day 22.
        </>
      ),
      planHead: ["Phase", "What you do", "What you check"],
      plan: [
        ["Before day 1 · Setup", "Ads Manager account (verification, billing and logo), landing page, UTMs, pixel or conversions API and a key event in GA4. Set the 30-day cap", "The account is verified and a test conversion shows in Ads Manager and GA4"],
        ["Days 1-7 · Launch", "One campaign, one or two ad groups by intent (e.g. “compare” and “hire”), two ads per group, specific context hints", "Ads are serving; impressions and CTR update roughly every 15 minutes, spend with a 7-8 hour delay"],
        ["Days 8-21 · Adjust", "Pause the group or ad with the weakest CTR, improve copy and image, check in GA4 what visitors do on the page", "CTR per ad, page conversion rate and quality of the first leads"],
        ["Days 22-30 · Decide", "Work out the cost per verified lead and compare it with your other channels", "Scale up, adjust and run another 30 days, or stop"],
      ],
      utmIntro: "UTMs are static and OpenAI confirms they are kept on click. A suggestion for the landing URL:",
      utm: [
        <><strong>utm_source=chatgpt-ads</strong>: different from organic visits coming from chatgpt.com, so paid and organic are not mixed.</>,
        <><strong>utm_medium=cpc</strong> (or <strong>cpm</strong> if you buy impressions).</>,
        <><strong>utm_campaign=test-30d-[service]</strong> and <strong>utm_content=[group]-[ad]</strong> to know which ad brought each lead.</>,
      ],
      verified:
        "Only count as a verified conversion a lead or sale you have checked yourself: a form with real details, a call you took, a paid order. Ads Manager and GA4 figures do not always match; the one that decides is your CRM or your invoicing.",
      hWeb: "What should you prepare on your website before advertising?",
      web: [
        <><strong>One page per intent.</strong> If the ad talks about “coffee for offices”, the page talks about that, with price or range, timings and conditions. OpenAI’s policy requires consistency between ad and destination.</>,
        <><strong>Measurement before spending.</strong> OpenAI’s pixel is an advertising tracking technology: like the Google Ads or Meta pixel, it must go through your consent banner and appear in your cookie policy.</>,
        <><strong>Filter review visits.</strong> OpenAI warns that its review crawlers visit landing pages with your UTMs; your analytics may count them as paid traffic even though they are not billed clicks.</>,
        <><strong>Content that answers questions.</strong> The pages that convert ad visitors are the same ones that help ChatGPT cite you organically. That is why ads and {link("geo-generative-engine-optimization", "GEO")} reinforce each other.</>,
        <><strong>Don’t imitate ChatGPT.</strong> The policy bans ads that copy the look or voice of the ChatGPT interface, as well as exaggerated or unsupported claims.</>,
      ],
      ctaTitle: "Do you know how ChatGPT sees you today?",
      ctaText:
        "Before paying to appear below the answer, check whether you already appear inside it. Our free diagnosis reviews your website, your visibility on Google and in AI assistants, and your Google Business Profile. You receive it by email within 24 working hours at most, with no commitment.",
      ctaButton: "Request the free diagnosis",
      hFaq: "Frequently asked questions",
      hSources: "Sources",
      consulted: "All consulted on 28/10/2026.",
      related: "Related services:",
      back: "← Back to blog",
    };
  }
  return {
    crumb: "Publicité ChatGPT en Espagne",
    home: "Accueil",
    category: "SEA",
    dateLabel: "4 novembre 2026",
    lead: "Ce que sont les annonces ChatGPT, qui les voit en Espagne, comment elles sont choisies et en quoi elles diffèrent d’une mention spontanée de ChatGPT. Avec un plan de test de 30 jours pour une PME.",
    alt: "Maquette d’une conversation de chat : la réponse cite deux marques de façon organique et, en dessous, un bloc « Sponsorisé » est signalé comme annonce payante",
    answer:
      "ChatGPT Ads, ce sont les annonces payantes qu’OpenAI affiche dans ChatGPT. En Espagne, elles fonctionnent depuis fin août 2026 et les entreprises établies en Espagne peuvent les acheter en libre-service dans Ads Manager. Elles apparaissent sous la réponse, signalées comme sponsorisées, et seuls les utilisateurs adultes des offres Free et Go les voient.",
    hSummary: "En bref",
    summary: [
      <><strong>Disponibilité :</strong> le 18 août 2026, OpenAI a annoncé ChatGPT Ads dans 31 marchés européens, dont l’Espagne, et le 31 août il a ouvert le libre-service dans Ads Manager.</>,
      <><strong>Qui les voit :</strong> les adultes des offres Free et Go. Plus, Pro, Business, Enterprise et Edu n’ont pas d’annonces.</>,
      <><strong>Comment elles sont choisies en Espagne :</strong> selon la conversation en cours et un contexte de base. Les annonces personnalisées ne sont pas disponibles au départ dans l’EEE.</>,
      <><strong>Une annonce n’est pas une recommandation :</strong> elle se place sous la réponse, signalée comme sponsorisée, et selon OpenAI elle ne change pas ce que répond ChatGPT.</>,
      <><strong>Pour une PME :</strong> un petit test vaut la peine, avec un plafond de dépense, des UTM et des conversions vérifiées, si votre catégorie est autorisée et votre page de destination à la hauteur.</>,
    ],
    hWhat: "Que sont les annonces ChatGPT et qui les voit en Espagne ?",
    what1:
      "OpenAI a commencé à tester des annonces aux États-Unis le 9 février 2026. Le 18 août, il a annoncé leur arrivée « la semaine prochaine » dans 31 pays européens, dont l’Espagne, et le 31 août il a mis à jour l’article pour confirmer que le libre-service via Ads Manager était disponible sur ces marchés. Au 28 octobre 2026, l’Espagne figure comme « Disponible » dans le tableau des pays d’Ads Manager. Pour l’utiliser, l’entité juridique qui fait la publicité et reçoit les factures doit être établie dans un pays de cette liste.",
    what2:
      "Chaque annonce affiche le nom de l’annonceur, son favicon, un titre, un texte, une image et la page de destination. Elle s’affiche sous la réponse de ChatGPT, séparée de celle-ci. OpenAI teste aussi un format à plusieurs images pendant la génération d’images.",
    whoIntro: "Les utilisateurs Free et Go les voient. Elles ne s’affichent pas :",
    whoNot: [
      <>Aux utilisateurs <strong>Plus, Pro, Business, Enterprise et Edu</strong>.</>,
      <>Aux comptes identifiés comme appartenant à des <strong>mineurs</strong>.</>,
      <>Dans les <strong>discussions temporaires</strong>.</>,
      <>Dans les conversations sur des <strong>sujets sensibles</strong> : santé personnelle et mentale, politique, automutilation, jeux d’argent et les autres catégories listées dans la politique publicitaire.</>,
    ],
    hTarget: "Comment l’annonce est-elle choisie ? (ciblage)",
    target1: (
      <>
        Ce n’est pas une enchère sur mots-clés comme Google Ads. Le système choisit selon la pertinence et le résultat attendu, et classe avec une enchère au second prix pondérée par la pertinence. Dans chaque groupe d’annonces, vous rédigez des <strong>indications de contexte</strong> : les sujets ou conversations où votre produit a sa place. Elles orientent la diffusion, sans garantir l’affichage dans une conversation précise.
      </>
    ),
    signalsHead: ["Signal", "Utilisé en Espagne ?", "Détail"],
    signals: [
      ["Conversation en cours", "Oui", "Le signal principal : le sujet et l’intention de la question"],
      ["Contexte de base (localisation générale, langue)", "Oui", "OpenAI le cite comme signal même sans personnalisation"],
      ["Indications de contexte de l’annonceur", "Oui", "Vous décrivez les sujets où votre annonce a sa place ; ce ne sont pas des mots-clés en correspondance exacte"],
      ["Discussions passées et mémoire", "Non, au départ", "Seulement avec la personnalisation activée, non disponible au départ dans l’EEE ni en Suisse"],
      ["Données personnelles de l’utilisateur", "Non partagées", "L’annonceur reçoit des données agrégées (impressions, clics), jamais les conversations, le nom, l’e-mail ni la localisation exacte"],
    ],
    target2:
      "Dans la mise à jour d’août, OpenAI cite aussi le ciblage géographique et les audiences personnalisées parmi les nouveautés de la plateforme. Vérifiez dans votre compte Ads Manager lesquels sont disponibles, car la personnalisation est limitée en Europe.",
    hCost: "Combien ça coûte et comment paie-t-on ?",
    cost:
      "Vous pouvez acheter à l’impression (CPM), au clic (CPC) ou optimiser pour les conversions ; avec la facturation au clic, vous payez les clics valides, pas les conversions. Vous fixez l’enchère maximale et le budget. Pour les campagnes CPC, OpenAI recommande de commencer avec une enchère maximale de 3 à 5 dollars US par clic. C’est sa recommandation de départ : le coût réel dépend de l’enchère et de votre secteur, et nous n’avons pas trouvé de données officielles de coût moyen pour l’Espagne.",
    hVs: "Quelle différence entre une annonce et une mention organique ?",
    vs1:
      "C’est la confusion la plus fréquente. Que ChatGPT recommande votre entreprise dans sa réponse et que votre annonce apparaisse en dessous sont deux choses distinctes, qui s’obtiennent différemment. OpenAI insiste : les annonces n’influencent pas les réponses. Payer ne vous fait pas entrer dans le texte de la réponse.",
    vsHead: ["", "Annonce (ChatGPT Ads)", "Mention organique (GEO)"],
    vs: [
      ["Ce que c’est", "Un bloc payant, signalé « Sponsorisé »", "Votre marque citée ou recommandée dans la réponse"],
      ["Où elle apparaît", "Sous la réponse, séparée d’elle", "Dans le texte de la réponse ou ses sources"],
      ["Qui la voit", "Seulement les adultes en Free et Go", "Tout utilisateur, quelle que soit l’offre"],
      ["Ce que vous contrôlez", "Texte, image, page de destination, budget, enchère et indications de contexte", "Seulement ce que vous publiez : site, données, avis et mentions ailleurs"],
      ["Ce que vous ne contrôlez pas", "La conversation exacte où elle sort (les indications orientent, sans garantie)", "Si elle vous cite, comment elle vous décrit et dans quel ordre"],
      ["Coût", "Vous payez à l’impression ou au clic", "Rien à OpenAI ; vous investissez dans le contenu et le site"],
      ["Quand voit-on l’effet", "Dès que la campagne est approuvée et diffusée", "Semaines ou mois ; il faut être trouvé et cité"],
      ["Si vous arrêtez d’investir", "Elle disparaît à la mise en pause", "Elle dure tant que votre contenu reste utile et à jour"],
      ["Comment la mesurer", "Ads Manager (impressions, clics, CPC, conversions) et UTM dans GA4", "Une série fixe de questions chaque mois et les visites de chatgpt.com dans GA4"],
    ],
    hQuestions: "Est-ce rentable pour une PME ? 5 questions avant d’investir",
    questions: [
      <><strong>Votre catégorie est-elle autorisée ?</strong> Lisez d’abord la politique publicitaire d’OpenAI. Si vous vendez des services financiers, de l’alcool, des jeux d’argent ou quelque chose lié à la santé, vous ne pourrez peut-être pas faire de publicité, ou votre dossier passera en examen manuel.</>,
      <><strong>Vos clients interrogent-ils ChatGPT avant d’acheter ?</strong> Posez les questions que poserait votre client et voyez si la conversation correspond à ce que vous vendez. Si personne ne consulterait un assistant pour cela, le canal a peu d’intérêt.</>,
      <><strong>Avez-vous une page de destination qui répond à cette conversation ?</strong> Celui qui arrive de ChatGPT a déjà comparé. Il lui faut un prix ou une fourchette, des conditions et un moyen clair de vous contacter, pas une page d’accueil générique.</>,
      <><strong>Pouvez-vous mesurer de vraies conversions ?</strong> Au minimum, des UTM et un événement clé dans GA4. Mieux encore, le pixel d’OpenAI ou son API de conversions, plus la vérification de chaque contact dans votre CRM.</>,
      <><strong>Les bases sont-elles en place ?</strong> Si votre fiche Google et une campagne de recherche efficace ne sont pas encore prêtes, cet argent rapporte souvent plus vite là. ChatGPT Ads est un canal à tester, pas un point de départ.</>,
    ],
    hPlan: "Plan de test de 30 jours : structure, budget fermé et mesure",
    plan1: (
      <>
        L’objectif est d’apprendre avec peu d’argent et de prendre une décision claire à la fin. Avant de commencer, fixez la <strong>dépense totale maximale</strong> du test : un montant que vous pourriez perdre entièrement sans nuire à l’entreprise. Répartissez-le sur les jours de la campagne et ne l’augmentez pas avant le jour 22.
      </>
    ),
    planHead: ["Phase", "Ce que vous faites", "Ce que vous regardez"],
    plan: [
      ["Avant le jour 1 · Préparation", "Compte Ads Manager (vérification, facturation et logo), page de destination, UTM, pixel ou API de conversions et événement clé dans GA4. Fixez le plafond des 30 jours", "Le compte est vérifié et une conversion de test apparaît dans Ads Manager et GA4"],
      ["Jours 1-7 · Lancement", "Une campagne, un ou deux groupes d’annonces par intention (par exemple « comparer » et « acheter »), deux annonces par groupe, des indications de contexte précises", "Les annonces sont diffusées ; impressions et CTR se mettent à jour environ toutes les 15 minutes, la dépense avec 7 à 8 heures de retard"],
      ["Jours 8-21 · Ajustement", "Mettez en pause le groupe ou l’annonce au CTR le plus faible, améliorez textes et image, regardez dans GA4 ce que font les visiteurs", "CTR par annonce, taux de conversion de la page et qualité des premiers contacts"],
      ["Jours 22-30 · Décision", "Calculez le coût par contact vérifié et comparez-le à vos autres canaux", "Augmenter le budget, ajuster et refaire 30 jours, ou arrêter"],
    ],
    utmIntro: "Les UTM sont statiques et OpenAI confirme qu’elles sont conservées au clic. Une proposition pour l’URL de destination :",
    utm: [
      <><strong>utm_source=chatgpt-ads</strong> : distinct des visites organiques venant de chatgpt.com, pour ne pas mélanger payant et organique.</>,
      <><strong>utm_medium=cpc</strong> (ou <strong>cpm</strong> si vous achetez des impressions).</>,
      <><strong>utm_campaign=test-30j-[service]</strong> et <strong>utm_content=[groupe]-[annonce]</strong> pour savoir quelle annonce a amené chaque contact.</>,
    ],
    verified:
      "Ne comptez comme conversion vérifiée que le contact ou la vente que vous avez contrôlé vous-même : un formulaire avec de vraies coordonnées, un appel pris, une commande payée. Les chiffres d’Ads Manager et de GA4 ne coïncident pas toujours ; celui qui décide, c’est votre CRM ou votre facturation.",
    hWeb: "Que préparer sur votre site avant d’annoncer ?",
    web: [
      <><strong>Une page par intention.</strong> Si l’annonce parle de « café pour bureaux », la page parle de cela, avec prix ou fourchette, délais et conditions. La politique d’OpenAI exige la cohérence entre l’annonce et la destination.</>,
      <><strong>La mesure avant la dépense.</strong> Le pixel d’OpenAI est une technologie de suivi publicitaire : comme celui de Google Ads ou de Meta, il doit passer par votre bandeau de consentement et figurer dans votre politique de cookies.</>,
      <><strong>Filtrez les visites de contrôle.</strong> OpenAI prévient que ses robots de vérification visitent les pages de destination avec vos UTM ; votre outil d’analyse peut les compter comme trafic payant, alors que ce ne sont pas des clics facturés.</>,
      <><strong>Du contenu qui répond aux questions.</strong> Les pages qui convertissent le visiteur de l’annonce sont celles qui aident ChatGPT à vous citer de façon organique. C’est pourquoi l’annonce et le {link("geo-generative-engine-optimization", "GEO")} se renforcent.</>,
      <><strong>Ne pas imiter ChatGPT.</strong> La politique interdit les annonces qui copient l’apparence ou la voix de l’interface de ChatGPT, ainsi que les promesses exagérées ou sans preuve.</>,
    ],
    ctaTitle: "Savez-vous comment ChatGPT vous voit aujourd’hui ?",
    ctaText:
      "Avant de payer pour apparaître sous la réponse, vérifiez si vous apparaissez déjà dedans. Notre diagnostic gratuit analyse votre site, votre visibilité sur Google et dans les assistants IA, et votre fiche Google. Vous le recevez par e-mail sous 24 heures ouvrées maximum, sans engagement.",
    ctaButton: "Demander le diagnostic gratuit",
    hFaq: "Questions fréquentes",
    hSources: "Sources",
    consulted: "Toutes consultées le 28/10/2026.",
    related: "Services liés :",
    back: "← Retour au blog",
  };
}

const FUENTES = [
  { texto: "OpenAI: ChatGPT Ads expands across Europe (18/08/2026, updated 31/08/2026).", url: "https://openai.com/index/chatgpt-ads-expands-across-europe/" },
  { texto: "OpenAI Help Center: Ads in ChatGPT.", url: "https://help.openai.com/en/articles/20001047" },
  { texto: "OpenAI Help Center: Ads in ChatGPT, the basics.", url: "https://help.openai.com/en/articles/20001207" },
  { texto: "OpenAI Help Center: Ads Manager availability.", url: "https://help.openai.com/en/articles/20001245" },
  { texto: "OpenAI Help Center: Quickstart, launch your first campaign.", url: "https://help.openai.com/en/articles/20001224" },
  { texto: "OpenAI: Ad policies (updated 10/09/2026).", url: "https://openai.com/policies/ad-policies/" },
  { texto: "OpenAI Ads.", url: "https://ads.openai.com/" },
];

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0]} className="border-b border-gray-200 even:bg-gray-50">
              {fila.map((celda, i) => (
                <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-gray-800" : "px-4 py-3 text-gray-600"}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Lista({ items, numerada = false }: { items: ReactNode[]; numerada?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
          <span className="text-primary-600 font-bold shrink-0 mt-0.5">{numerada ? `${i + 1}.` : "▸"}</span>
          <span className="text-gray-600 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = pick(lang);
  const href = (enSlug: string) => `/${l}/${langSlug(l, enSlug)}/`;
  const link = (enSlug: string, text: string) => (
    <Link href={href(enSlug)} className="text-accent-500 hover:underline">{text}</Link>
  );
  const c = content(l, link);
  const faqs = FAQS[l];
  const m = META[l];
  const url = pageUrl(l);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.h1,
    description: m.description,
    inLanguage: l,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE,
    dateModified: DATE,
    image: `https://www.mktweb360.com${OGS[l]}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const isEn = l === "en";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: c.home, href: `/${l}/` }, { label: "Blog", href: `/${l}/blog/` }, { label: c.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{c.category}</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{c.dateLabel}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{m.h1}</h1>
          <AuthorByline lang={lang} block />
          <p className="text-xl text-gray-600 leading-relaxed">{c.lead}</p>
          <Image src={OGS[l]} alt={c.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{c.answer}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.hSummary}</h2>
          <Lista items={c.summary} />

          <h2 className="text-2xl font-bold text-primary-600">{c.hWhat}</h2>
          <p>{c.what1}</p>
          <p>{c.what2}</p>
          <p>{c.whoIntro}</p>
          <Lista items={c.whoNot} />

          <h2 className="text-2xl font-bold text-primary-600">{c.hTarget}</h2>
          <p>{c.target1}</p>
          <Tabla cabecera={c.signalsHead} filas={c.signals} />
          <p>{c.target2}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.hCost}</h2>
          <p>{c.cost}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.hVs}</h2>
          <p>{c.vs1}</p>
          <Tabla cabecera={c.vsHead} filas={c.vs} />
          <p>
            {isEn ? (
              <>Organic mentions are earned with {link("geo-generative-engine-optimization", "GEO, positioning in AI answers")}: content that answers well, consistent data across the web and mentions on other sites. We explain why it matters in {link("why-appearing-in-chatgpt-gemini-matters-more-seo-2026", "why appearing in ChatGPT and Gemini matters")}.</>
            ) : (
              <>La mention organique se travaille avec le {link("geo-generative-engine-optimization", "GEO, le positionnement dans les réponses des IA")} : un contenu qui répond bien, des données cohérentes sur le web et des mentions sur d’autres sites. Nous expliquons pourquoi c’est important dans {link("why-appearing-in-chatgpt-gemini-matters-more-seo-2026", "pourquoi apparaître dans ChatGPT et Gemini compte")}.</>
            )}
          </p>

          <BlogBanner variant="geo" lang={l} />

          <h2 className="text-2xl font-bold text-primary-600">{c.hQuestions}</h2>
          <Lista items={c.questions} numerada />

          <h2 className="text-2xl font-bold text-primary-600">{c.hPlan}</h2>
          <p>{c.plan1}</p>
          <Tabla cabecera={c.planHead} filas={c.plan} />
          <p>{c.utmIntro}</p>
          <Lista items={c.utm} />
          <p>{c.verified}</p>
          <p>
            {isEn ? (
              <>If you already run search campaigns, the method is the same as in {link("google-ads-management", "Google Ads")}: clear goals, measurement before spending and data-driven decisions. And if an agency runs it for you, the ad budget should be yours and transparent, as we explain in {link("google-ads-no-commission-marketing-agency", "Google Ads with no commission on spend")}.</>
            ) : (
              <>Si vous gérez déjà des campagnes de recherche, la méthode est la même que pour {link("google-ads-management", "Google Ads")} : des objectifs clairs, la mesure avant la dépense et des décisions fondées sur les données. Et si une agence s’en occupe, le budget publicitaire doit rester le vôtre et transparent, comme nous l’expliquons dans {link("google-ads-no-commission-marketing-agency", "Google Ads sans commission sur le budget")}.</>
            )}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">{c.hWeb}</h2>
          <Lista items={c.web} />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{c.ctaTitle}</p>
            <p className="text-gray-600 text-sm mb-4">{c.ctaText}</p>
            <Link href={href("digital-audit")} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              {c.ctaButton}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{c.hFaq}</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{c.hSources}</h2>
          <p className="text-sm text-gray-500">{c.consulted}</p>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {FUENTES.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            {c.related} {link("google-ads-management", isEn ? "Google Ads management" : "Gestion Google Ads")} · {link("geo-generative-engine-optimization", isEn ? "GEO: AI positioning" : "GEO : positionnement dans les IA")} · {link("digital-audit", isEn ? "Free digital diagnosis" : "Diagnostic digital gratuit")}
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${l}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{c.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={ES_SLUG} />
    </>
  );
}
