import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 30/10/2026 — refuerzo del tema 4 (misma URL). Versión EN/FR del artículo ES
// /como-usar-planificador-de-palabras-clave-google-ads/. Fuentes comprobadas el 28/10/2026.

const SLUG = "how-to-use-google-keyword-planner";
const ogFor = (lang: string) => `/og-how-to-use-google-keyword-planner-${lang === "fr" ? "fr" : "en"}.jpg`;
const DATE_PUBLISHED = "2026-06-25";
const DATE_MODIFIED = "2026-10-30";

type Copy = {
  title: string;
  description: string;
  h1: string;
  crumb: string;
  updated: string;
  intro: string;
  alt: string;
  answer: string;
  hSummary: string;
  summary: ReactNode[];
  hWhat: string;
  what: ReactNode[];
  hAccess: string;
  access: ReactNode[];
  accessNote: ReactNode;
  hDiscover: string;
  discover: ReactNode[];
  discoverNote: string;
  hVolume: string;
  volume: ReactNode[];
  forecastsIntro: string;
  forecasts: ReactNode[];
  forecastsNote: ReactNode;
  hRead: string;
  readHead: string[];
  read: string[][];
  ranges: ReactNode;
  competition: ReactNode;
  hCompare: string;
  compareHead: string[];
  compare: string[][];
  compareNote: ReactNode;
  hMistakes: string;
  mistakes: ReactNode[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  hFaq: string;
  faqs: { q: string; a: string }[];
  hSources: string;
  checked: string;
  sources: { texto: string; url: string }[];
  related: string;
  back: string;
};

function link(href: string, text: string) {
  return (
    <Link href={href} className="text-accent-500 hover:underline">
      {text}
    </Link>
  );
}

function copyFor(lang: string): Copy {
  const ads = `/${lang}/${langSlug(lang, "google-ads-management")}/`;
  const audit = `/${lang}/${langSlug(lang, "basic-seo-audit")}/`;

  if (lang === "en") {
    return {
      title: "Google Keyword Planner: How to Use It (2026 Guide)",
      description:
        "How to use Google Keyword Planner without an active campaign, why volumes show as ranges and what “competition” really means, compared with Search Console.",
      h1: "How to use Google Keyword Planner (2026): a step-by-step guide",
      crumb: "Google Keyword Planner",
      updated: "Updated on October 30, 2026",
      intro:
        "How to get in without creating a campaign, how to pull keyword ideas and volumes, and how to read the data properly: why it comes in ranges, what “competition” actually measures and when Search Console is the better source.",
      alt: "Illustrated mock-up of Keyword Planner: a search box with two keywords and a table showing search volume ranges, competition and bids, with three notes explaining each column",
      answer:
        "Keyword Planner is a free Google Ads tool that suggests searches related to your business and estimates how often they are searched each month and what advertisers pay for them. You don’t need an active campaign, but you do need to finish account setup with your billing details. If you spend little on ads, volumes appear as ranges.",
      hSummary: "Quick summary",
      summary: [
        <>It is <strong>free</strong> and does not require an active campaign, but you must complete your account with <strong>billing details</strong>.</>,
        <>It has two functions: <strong>discover new keywords</strong> and <strong>get search volume and forecasts</strong> for a list.</>,
        <>With low ad spend, volume shows as <strong>ranges</strong> (for example, 1K – 10K). That is usually enough to choose topics.</>,
        <><strong>“Competition”</strong> means competition between advertisers bidding on ads. <strong>It is not SEO difficulty.</strong></>,
        <>For SEO, cross-check it with <strong>Search Console</strong>, which shows the searches your site already appears for and its position.</>,
      ],
      hWhat: "What is Google Keyword Planner and what is it for?",
      what: [
        <>It is the tool Google includes in Google Ads to plan Search campaigns. It does two things: <strong>find new keywords</strong> from a few terms or a website, and <strong>show volume and forecasts</strong> for a list you already have. Although it is built for ads, it is also used in SEO to learn how people search for a service, group searches by topic and see in which months demand rises.</>,
        <>Its data comes from Google, but it has limits: volumes are rounded, keywords with very low volume or considered sensitive are not shown, and the competition column is about ads, not organic results.</>,
      ],
      hAccess: "How do you get in without creating a paid campaign?",
      access: [
        <>Go to <strong>ads.google.com</strong> with your Google account and create the Google Ads account.</>,
        <>During sign-up, Google gives you the option to <strong>create the account without a campaign</strong>. Choose it: you don’t need to prepare any ad. If the setup wizard takes you straight into building a campaign, look for that option at the bottom of the screen.</>,
        <>Complete setup with your billing country, time zone and payment method. Google requires this step for basic features such as keyword ideas. With no active campaigns, no ads are served.</>,
        <>Open the <strong>Tools</strong> menu and select <strong>Keyword Planner</strong>.</>,
      ],
      accessNote: (
        <>Once your account is ready, you can also go straight to <strong>ads.google.com/aw/keywordplanner/home</strong>. If you can’t see keyword ideas, the usual reason is that billing setup is not finished.</>
      ),
      hDiscover: "Step by step: how do you discover new keywords?",
      discover: [
        <>Choose <strong>Discover new keywords</strong>.</>,
        <>Start in one of two ways: <strong>with keywords</strong> (type a few words that describe your service, the way a customer would say them) or <strong>with a website</strong> (paste a domain or URL, including a competitor’s, and Google will draw ideas from its content).</>,
        <>Set the <strong>language</strong> and <strong>location</strong>. If you serve a whole country, keep the country; if you serve one area, narrow it down. Volume changes a lot from one market to another.</>,
        <>Review the results and add filters to cut the noise: by text (exclude brands or terms you don’t offer), by competition or by impression share. The side panel lets you refine by category.</>,
        <>Save the ones you want to <strong>Saved keywords</strong> or download the list to work on it in a spreadsheet.</>,
      ],
      discoverNote:
        "A practical tip: start with short, broad terms and let the tool show you the variations. Longer searches usually have less volume but clearer intent, and they are the easiest to target with a specific page.",
      hVolume: "Step by step: how do you get search volume and forecasts?",
      volume: [
        <>Choose <strong>Get search volume and forecasts</strong>.</>,
        <>Paste your list or upload a CSV with a column called “Keyword”. Each keyword can have at most <strong>80 characters and 10 words</strong>.</>,
        <>In the <strong>historical metrics</strong> you will see average monthly searches, competition and bids for each term.</>,
        <>In the <strong>forecast</strong> you will see what a campaign with those keywords could deliver: clicks, impressions, cost, CTR and average CPC, based on the bid and budget you set.</>,
      ],
      forecastsIntro: "What to know about forecasts, according to Google Ads Help:",
      forecasts: [
        <>They are refreshed <strong>daily</strong> using data from the last 7–10 days, adjusted for seasonality.</>,
        <>They take bid, budget, seasonality and ad quality history into account. Historical search volume takes none of that into account.</>,
        <>In a new account they start from other advertisers’ averages until there is enough data of your own.</>,
        <>They are <strong>less accurate</strong> if you target a small geographic area, because there is less data.</>,
      ],
      forecastsNote: (
        <>Use them to work out how much budget a Search campaign would need. If you are thinking about advertising, see our {link(ads, "Google Ads management service")}.</>
      ),
      hRead: "How do you read the data: ranges, “competition” and bids?",
      readHead: ["Column", "What Google says", "How to use it"],
      read: [
        ["Avg. monthly searches", "Average searches for the keyword and its close variants, over 12 months by default. Figures are rounded", "To compare topics and spot seasonal peaks, not as an exact figure"],
        ["Volume range (1K – 10K)", "Limited data view for advertisers with lower monthly spend", "Enough to choose between topics. To refine, check real impressions in Search Console"],
        ["Competition (low, medium, high)", "How many advertisers showed on that keyword relative to all keywords across Google", "Shows commercial interest in ads. Says nothing about how hard it is to rank organically"],
        ["Top of page bid (low and high range)", "Approximately the 20th and 80th percentile of what advertisers have paid, based on the last 30 days", "Guides cost per click if you run Google Ads and flags which searches have commercial value"],
      ],
      ranges: (
        <><strong>About ranges.</strong> Google’s help pages do not say what level of spend unlocks exact figures. The Google notice reported by Search Engine Journal in 2016 says advertisers with lower monthly spend may see a limited data view. In practice you will see bands such as 100 – 1K or 1K – 10K. To decide which topic to work on first, that is enough.</>
      ),
      competition: (
        <><strong>About “competition”.</strong> This is the most common mistake. “High competition” means many advertisers bid on that search, which usually signals commercial value. It does not tell you whether it is hard to rank in organic results. For that, look at who holds the first page or use an SEO difficulty metric such as Semrush’s KD %.</>
      ),
      hCompare: "Keyword Planner, Search Console or Semrush: which data for what?",
      compareHead: ["What you need to know", "Keyword Planner", "Search Console", "Semrush"],
      compare: [
        ["Discover searches you don’t target yet", "Yes: its main function", "Only searches you already appear for", "Yes, from its own database"],
        ["Search volume for a query", "Google data, in ranges if you spend little", "No total volume; shows your impressions", "Its own estimate from third-party data"],
        ["Which searches your site already appears for", "No", "Yes: real queries, impressions, clicks, CTR and average position", "Estimate based on its database"],
        ["How hard it is to rank organically", "No (its “competition” is about ads)", "No", "Yes: KD %, from 0 to 100"],
        ["Cost per click and ad budget", "Yes: bids and forecasts", "No", "Indicative"],
        ["Price", "Free with a Google Ads account", "Free", "Paid, with limited free access"],
      ],
      compareNote: (
        <>Our order: first <strong>Search Console</strong>, to see which searches your site already appears for (those with many impressions and few clicks are the quickest wins); then <strong>Keyword Planner</strong>, to find searches you don’t target yet and gauge demand; and finally an SEO tool, to estimate difficulty before creating the page. Our {link(audit, "step-by-step website audit")} explains how to review Search Console.</>
      ),
      hMistakes: "5 common mistakes when using Keyword Planner",
      mistakes: [
        <><strong>Reading “competition” as SEO difficulty.</strong> An informational search can have low ad competition and still be dominated organically by media and big brands. And the other way round.</>,
        <><strong>Treating ranges as figures.</strong> “1K – 10K” could be 1,200 or 9,500. Use it to rank topics by demand, not to promise traffic.</>,
        <><strong>Using forecasts to estimate SEO traffic.</strong> They estimate what a paid campaign would deliver with a given bid and budget. Organic traffic depends on your position and the rest of the results page.</>,
        <><strong>Not checking location and language.</strong> If you sell in one country and look at data from other countries or another language, the list is not useful.</>,
        <><strong>Creating one page per variation.</strong> “Keyword planner” and “how to use keyword planner” are the same search need. Group variations with the same intent on a single page; otherwise your own pages compete with each other.</>,
      ],
      ctaTitle: "Want to know which searches your website can win?",
      ctaText:
        "Our free diagnosis reviews your technical health, your visibility in Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 working hours at most, with no commitment.",
      ctaButton: "Request the free diagnosis",
      hFaq: "Frequently asked questions",
      faqs: [
        {
          q: "Is Google Keyword Planner free?",
          a: "Yes. You only need a Google Ads account with setup completed, which includes billing details. You don’t need an active campaign. What changes with spend is the level of detail: with low ad spend you will see volume as ranges.",
        },
        {
          q: "Why does Keyword Planner show ranges like 1K – 10K instead of exact figures?",
          a: "Because Google shows a limited data view to advertisers with lower monthly spend. It does not publish the spend needed to see full figures. To decide which page to create, the range is usually enough; to refine, cross-check with Search Console.",
        },
        {
          q: "Does Keyword Planner’s “competition” tell me how hard it is to rank in SEO?",
          a: "No. According to Google Ads Help, it measures how many advertisers showed on that keyword relative to all keywords across Google. It is competition for ad bids. SEO difficulty depends on who holds the organic results and is estimated with other tools.",
        },
        {
          q: "What is the difference between search volume and forecasts?",
          a: "Volume is historical: the average monthly searches, over the last 12 months by default. Forecasts estimate clicks, impressions, cost, CTR and average CPC for a campaign with a given bid and budget. They are for planning Google Ads, not for estimating SEO traffic.",
        },
        {
          q: "Can I use Keyword Planner for SEO even though it is a Google Ads tool?",
          a: "Yes, to discover searches, group them by topic and see seasonality. But it is best combined with Search Console, which gives your site’s real data, and with an SEO tool if you need to estimate organic difficulty.",
        },
      ],
      hSources: "Sources",
      checked: "Checked on October 28, 2026.",
      sources: [
        { texto: "Google Ads Help: Use Keyword Planner (access, functions, limits, billing and forecast refresh).", url: "https://support.google.com/google-ads/answer/7337243?hl=en" },
        { texto: "Google Ads Help: About Keyword Planner forecasts (monthly searches, competition, bids and forecasts).", url: "https://support.google.com/google-ads/answer/3022575?hl=en" },
        { texto: "Google Ads Help: Create a Google Ads account (option to create an account without a campaign).", url: "https://support.google.com/google-ads/answer/6366720?hl=en" },
        { texto: "Search Engine Journal (15/08/2016), reporting Google’s notice that advertisers with lower monthly spend may see a limited data view.", url: "https://www.searchenginejournal.com/googles-keyword-planner-tool-providing-limited-data-low-spending-advertisers/170837/" },
        { texto: "Search Console Help: Performance report (clicks, impressions, CTR and average position for your site).", url: "https://support.google.com/webmasters/answer/7576553?hl=en" },
        { texto: "Semrush Knowledge Base: What is KD%?", url: "https://www.semrush.com/kb/1158-what-is-kd" },
        { texto: "Semrush Knowledge Base: How Semrush calculates search volume.", url: "https://www.semrush.com/kb/683-search-volume" },
      ],
      related: "Related services:",
      back: "← Back to blog",
    };
  }

  return {
    title: "Outil de planification des mots clés Google Ads : guide 2026",
    description:
      "Utiliser l’outil de planification des mots clés sans campagne active, comprendre pourquoi le volume s’affiche en tranches et ce que signifie « concurrence ».",
    h1: "Comment utiliser l’outil de planification des mots clés Google Ads (2026), étape par étape",
    crumb: "Outil de planification des mots clés",
    updated: "Mis à jour le 30 octobre 2026",
    intro:
      "Comment y accéder sans créer de campagne, comment obtenir des idées et des volumes, et comment bien lire ses données : pourquoi elles s’affichent en tranches, ce que mesure vraiment la « concurrence » et quand Search Console est une meilleure source.",
    alt: "Maquette illustrée de l’outil de planification des mots clés : un champ de recherche avec deux mots clés et un tableau de volumes en tranches, de concurrence et d’enchères, avec trois annotations qui expliquent chaque colonne",
    answer:
      "L’outil de planification des mots clés (Keyword Planner) est un outil gratuit de Google Ads qui propose des recherches liées à votre activité et estime leur nombre mensuel ainsi que ce que paient les annonceurs. Aucune campagne active n’est nécessaire, mais il faut finaliser le compte avec les informations de facturation. Si vous dépensez peu en annonces, les volumes s’affichent en tranches.",
    hSummary: "En bref",
    summary: [
      <>Il est <strong>gratuit</strong> et n’exige pas de campagne active, mais il faut compléter le compte avec les <strong>informations de facturation</strong>.</>,
      <>Il a deux fonctions : <strong>trouver de nouveaux mots clés</strong> et <strong>obtenir le volume de recherche et les prévisions</strong> d’une liste.</>,
      <>Avec peu de dépenses publicitaires, le volume s’affiche en <strong>tranches</strong> (par exemple, 1K – 10K). Pour choisir des sujets, cela suffit en général.</>,
      <>La <strong>« concurrence »</strong> est la concurrence entre annonceurs sur les enchères. <strong>Ce n’est pas la difficulté SEO.</strong></>,
      <>Pour le SEO, croisez-le avec <strong>Search Console</strong>, qui montre les recherches sur lesquelles votre site apparaît déjà et sa position.</>,
    ],
    hWhat: "Qu’est-ce que l’outil de planification des mots clés et à quoi sert-il ?",
    what: [
      <>C’est l’outil que Google intègre à Google Ads pour préparer les campagnes sur le Réseau de Recherche. Il sert à deux choses : <strong>trouver de nouveaux mots clés</strong> à partir de quelques termes ou d’un site, et <strong>afficher le volume et les prévisions</strong> d’une liste que vous avez déjà. Même s’il est conçu pour les annonces, on l’utilise aussi en SEO pour comprendre comment les gens recherchent un service, regrouper les recherches par thème et repérer les mois où la demande augmente.</>,
      <>Ses données viennent de Google, mais elles ont des limites : les volumes sont arrondis, les mots clés à très faible volume ou jugés sensibles n’apparaissent pas, et la colonne concurrence concerne les annonces, pas les résultats naturels.</>,
    ],
    hAccess: "Comment y accéder sans créer de campagne payante ?",
    access: [
      <>Rendez-vous sur <strong>ads.google.com</strong> avec votre compte Google et créez le compte Google Ads.</>,
      <>Pendant l’inscription, Google propose de <strong>créer le compte sans campagne</strong>. Choisissez cette option : vous n’avez aucune annonce à préparer. Si l’assistant vous emmène directement vers la création d’une campagne, cherchez cette option en bas de l’écran.</>,
      <>Terminez la configuration avec le pays de facturation, le fuseau horaire et le mode de paiement. Google exige cette étape pour les fonctions de base, comme les idées de mots clés. Sans campagne active, aucune annonce n’est diffusée.</>,
      <>Ouvrez le menu <strong>Outils</strong> et choisissez <strong>Outil de planification des mots clés</strong>.</>,
    ],
    accessNote: (
      <>Une fois le compte prêt, vous pouvez aussi aller directement sur <strong>ads.google.com/aw/keywordplanner/home</strong>. Si les idées de mots clés n’apparaissent pas, c’est en général que la configuration de la facturation n’est pas terminée.</>
    ),
    hDiscover: "Étape par étape : comment trouver de nouveaux mots clés ?",
    discover: [
      <>Choisissez <strong>Trouver de nouveaux mots clés</strong>.</>,
      <>Commencez de l’une des deux façons : <strong>avec des mots clés</strong> (quelques mots qui décrivent votre service, comme le dirait un client) ou <strong>avec un site web</strong> (collez un domaine ou une URL, y compris celle d’un concurrent, et Google en tirera des idées).</>,
      <>Réglez la <strong>langue</strong> et la <strong>zone géographique</strong>. Si vous travaillez sur tout un pays, gardez le pays ; si vous servez une zone, restreignez-la. Le volume change beaucoup d’un marché à l’autre.</>,
      <>Parcourez les résultats et ajoutez des filtres pour éliminer le bruit : par texte (exclure des marques ou des termes que vous ne proposez pas), par concurrence ou par taux d’impressions. Le panneau latéral permet d’affiner par catégorie.</>,
      <>Enregistrez ceux qui vous intéressent dans vos mots clés enregistrés ou téléchargez la liste pour la travailler dans un tableur.</>,
    ],
    discoverNote:
      "Un conseil pratique : commencez par des termes courts et larges, et laissez l’outil vous montrer les variantes. Les recherches longues ont en général moins de volume mais une intention plus claire, et ce sont les plus faciles à cibler avec une page précise.",
    hVolume: "Étape par étape : comment obtenir le volume et les prévisions ?",
    volume: [
      <>Choisissez <strong>Obtenir le volume de recherche et les prévisions</strong>.</>,
      <>Collez votre liste ou importez un CSV avec une colonne nommée « Keyword ». Chaque mot clé peut compter au maximum <strong>80 caractères et 10 mots</strong>.</>,
      <>Dans l’<strong>historique des statistiques</strong>, vous verrez le nombre moyen de recherches mensuelles, la concurrence et les enchères de chaque terme.</>,
      <>Dans les <strong>prévisions</strong>, vous verrez ce que pourrait donner une campagne avec ces mots clés : clics, impressions, coût, CTR et CPC moyen, selon l’enchère et le budget indiqués.</>,
    ],
    forecastsIntro: "Ce qu’il faut savoir des prévisions, selon l’aide Google Ads :",
    forecasts: [
      <>Elles sont actualisées <strong>chaque jour</strong> sur la base des 7 à 10 derniers jours, en tenant compte de la saisonnalité.</>,
      <>Elles prennent en compte l’enchère, le budget, la saisonnalité et l’historique de qualité des annonces. Le volume historique ne tient compte de rien de tout cela.</>,
      <>Dans un nouveau compte, elles partent des moyennes d’autres annonceurs jusqu’à ce qu’il y ait assez de données propres.</>,
      <>Elles sont <strong>moins précises</strong> si vous ciblez une petite zone géographique, car il y a moins de données.</>,
    ],
    forecastsNote: (
      <>Servez-vous-en pour estimer le budget nécessaire à une campagne sur le Réseau de Recherche. Si vous envisagez d’annoncer, voyez notre {link(ads, "service de gestion Google Ads")}.</>
    ),
    hRead: "Comment lire les données : tranches, « concurrence » et enchères ?",
    readHead: ["Colonne", "Ce que dit Google", "Comment l’utiliser"],
    read: [
      ["Nombre moyen de recherches mensuelles", "Moyenne des recherches du mot clé et de ses variantes proches, sur 12 mois par défaut. Les chiffres sont arrondis", "Pour comparer des sujets et repérer les pics saisonniers, pas comme chiffre exact"],
      ["Tranche de volume (1K – 10K)", "Vue limitée des données pour les annonceurs dont les dépenses mensuelles sont plus faibles", "Suffit pour choisir entre des sujets. Pour affiner, regardez les impressions réelles dans Search Console"],
      ["Concurrence (faible, moyenne, élevée)", "Nombre d’annonceurs diffusés sur ce mot clé par rapport à l’ensemble des mots clés de Google", "Indique l’intérêt commercial en annonces. Ne dit rien de la difficulté à se positionner en naturel"],
      ["Enchère en haut de page (fourchette basse et haute)", "Approximation des 20e et 80e centiles de ce qu’ont payé les annonceurs, sur les 30 derniers jours", "Oriente le coût par clic si vous faites du Google Ads et signale les recherches à valeur commerciale"],
    ],
    ranges: (
      <><strong>Les tranches.</strong> L’aide de Google n’indique pas à partir de quel niveau de dépenses on voit des chiffres exacts. L’avis de Google relayé par Search Engine Journal en 2016 précise que les annonceurs dont les dépenses mensuelles sont plus faibles peuvent voir une vue limitée des données. En pratique, vous verrez des tranches comme 100 – 1K ou 1K – 10K. Pour décider quel sujet traiter en premier, cela suffit.</>
    ),
    competition: (
      <><strong>La « concurrence ».</strong> C’est l’erreur la plus fréquente. Une « concurrence élevée » signifie que beaucoup d’annonceurs enchérissent sur cette recherche, ce qui indique en général une valeur commerciale. Elle ne dit pas s’il est difficile d’apparaître dans les résultats naturels. Pour cela, il faut regarder qui occupe la première page ou utiliser un indicateur de difficulté SEO, comme le KD % de Semrush.</>
    ),
    hCompare: "Outil de planification, Search Console ou Semrush : quelle donnée pour quoi ?",
    compareHead: ["Ce que vous voulez savoir", "Outil de planification des mots clés", "Search Console", "Semrush"],
    compare: [
      ["Trouver des recherches que vous ne ciblez pas encore", "Oui : c’est sa fonction principale", "Seulement les recherches sur lesquelles vous apparaissez déjà", "Oui, à partir de sa propre base"],
      ["Volume d’une recherche", "Donnée Google, en tranches si vous dépensez peu", "Pas de volume total ; vos impressions", "Estimation propre à partir de données tierces"],
      ["Recherches sur lesquelles votre site apparaît déjà", "Non", "Oui : requêtes, impressions, clics, CTR et position moyenne réels", "Estimation selon sa base"],
      ["Difficulté à se positionner en naturel", "Non (sa « concurrence » concerne les annonces)", "Non", "Oui : KD %, de 0 à 100"],
      ["Coût par clic et budget publicitaire", "Oui : enchères et prévisions", "Non", "Indicatif"],
      ["Prix", "Gratuit avec un compte Google Ads", "Gratuit", "Payant, avec un accès gratuit limité"],
    ],
    compareNote: (
      <>Notre ordre : d’abord <strong>Search Console</strong>, pour voir les recherches sur lesquelles votre site apparaît déjà (celles avec beaucoup d’impressions et peu de clics sont les gains les plus rapides) ; ensuite l’<strong>outil de planification</strong>, pour trouver des recherches que vous ne ciblez pas encore et mesurer la demande ; enfin un outil SEO, pour estimer la difficulté avant de créer la page. Notre {link(audit, "audit de site étape par étape")} explique comment analyser Search Console.</>
    ),
    hMistakes: "5 erreurs fréquentes avec l’outil de planification",
    mistakes: [
      <><strong>Lire la « concurrence » comme une difficulté SEO.</strong> Une recherche informationnelle peut avoir peu de concurrence en annonces et être dominée en naturel par des médias et de grandes marques. Et inversement.</>,
      <><strong>Prendre les tranches pour des chiffres.</strong> « 1K – 10K » peut vouloir dire 1 200 ou 9 500. Servez-vous-en pour classer les sujets par demande, pas pour promettre du trafic.</>,
      <><strong>Utiliser les prévisions pour estimer le trafic SEO.</strong> Elles estiment ce que donnerait une campagne payante avec une enchère et un budget donnés. Le trafic naturel dépend de votre position et du reste de la page de résultats.</>,
      <><strong>Ne pas vérifier la zone et la langue.</strong> Si vous vendez dans un pays et regardez les données d’autres pays ou d’une autre langue, la liste ne vous sert à rien.</>,
      <><strong>Créer une page par variante.</strong> « Outil de planification des mots clés » et « comment utiliser l’outil de planification des mots clés » répondent au même besoin. Regroupez les variantes de même intention sur une seule page ; sinon, vos propres pages se font concurrence.</>,
    ],
    ctaTitle: "Vous voulez savoir sur quelles recherches votre site peut gagner ?",
    ctaText:
      "Notre diagnostic gratuit analyse l’état technique, votre visibilité sur Google et dans les assistants d’IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail en 24 heures ouvrées maximum, sans engagement.",
    ctaButton: "Demander le diagnostic gratuit",
    hFaq: "Questions fréquentes",
    faqs: [
      {
        q: "L’outil de planification des mots clés est-il gratuit ?",
        a: "Oui. Il suffit d’un compte Google Ads dont la configuration est terminée, informations de facturation comprises. Aucune campagne active n’est nécessaire. Ce qui change avec les dépenses, c’est le niveau de détail : avec peu de dépenses publicitaires, le volume s’affiche en tranches.",
      },
      {
        q: "Pourquoi l’outil affiche-t-il des tranches comme 1K – 10K au lieu de chiffres exacts ?",
        a: "Parce que Google affiche une vue limitée des données aux annonceurs dont les dépenses mensuelles sont plus faibles. Il ne publie pas le niveau de dépenses nécessaire pour voir les chiffres complets. Pour décider quelle page créer, la tranche suffit en général ; pour affiner, croisez avec Search Console.",
      },
      {
        q: "La « concurrence » de l’outil indique-t-elle la difficulté à se positionner en SEO ?",
        a: "Non. Selon l’aide Google Ads, elle mesure le nombre d’annonceurs diffusés sur ce mot clé par rapport à l’ensemble des mots clés de Google. C’est la concurrence sur les enchères publicitaires. La difficulté SEO dépend de qui occupe les résultats naturels et s’estime avec d’autres outils.",
      },
      {
        q: "Quelle différence entre le volume de recherche et les prévisions ?",
        a: "Le volume est un historique : le nombre moyen de recherches mensuelles, sur les 12 derniers mois par défaut. Les prévisions estiment les clics, impressions, coût, CTR et CPC moyen d’une campagne avec une enchère et un budget donnés. Elles servent à planifier Google Ads, pas à estimer le trafic SEO.",
      },
      {
        q: "Peut-on utiliser l’outil pour le SEO alors que c’est un outil Google Ads ?",
        a: "Oui, pour trouver des recherches, les regrouper par thème et voir leur saisonnalité. Mais il vaut mieux le compléter avec Search Console, qui donne les données réelles de votre site, et avec un outil SEO si vous devez estimer la difficulté en naturel.",
      },
    ],
    hSources: "Sources",
    checked: "Consultées le 28 octobre 2026.",
    sources: [
      { texto: "Aide Google Ads : Utiliser l’outil de planification des mots clés (accès, fonctions, limites, facturation et actualisation des prévisions).", url: "https://support.google.com/google-ads/answer/7337243?hl=fr" },
      { texto: "Aide Google Ads : À propos des prévisions de l’outil de planification des mots clés (recherches mensuelles, concurrence, enchères et prévisions).", url: "https://support.google.com/google-ads/answer/3022575?hl=fr" },
      { texto: "Aide Google Ads : Créer un compte Google Ads (option de création d’un compte sans campagne).", url: "https://support.google.com/google-ads/answer/6366720?hl=fr" },
      { texto: "Search Engine Journal (15/08/2016), qui relaie l’avis de Google : les annonceurs dont les dépenses mensuelles sont plus faibles peuvent voir une vue limitée des données.", url: "https://www.searchenginejournal.com/googles-keyword-planner-tool-providing-limited-data-low-spending-advertisers/170837/" },
      { texto: "Aide Search Console : Rapport sur les performances (clics, impressions, CTR et position moyenne de votre site).", url: "https://support.google.com/webmasters/answer/7576553?hl=fr" },
      { texto: "Semrush Knowledge Base : What is KD%?", url: "https://www.semrush.com/kb/1158-what-is-kd" },
      { texto: "Semrush Knowledge Base : calcul du volume de recherche.", url: "https://www.semrush.com/kb/683-search-volume" },
    ],
    related: "Services associés :",
    back: "← Retour au blog",
  };
}

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c) => (
              <th key={c} className="px-4 py-3 text-left font-semibold">{c}</th>
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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = copyFor(lang);
  const OG = ogFor(lang);
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: alternatesFor(`/${lang}/${SLUG}/`) ?? { canonical: url },
    openGraph: {
      title: `${c.title} | Mkt Web 360`,
      description: c.description,
      url,
      type: "article",
      images: [{ url: OG, width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = copyFor(lang);
  const OG = ogFor(lang);
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  const h2 = "text-2xl font-bold text-primary-600";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.h1,
    description: c.description,
    inLanguage: lang,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image: `https://www.mktweb360.com${OG}`,
    url,
    mainEntityOfPage: url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: lang === "en" ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: c.crumb },
          ]}
        />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Google Ads</span>
            <time className="text-sm text-gray-400" dateTime={DATE_MODIFIED}>{c.updated}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{c.h1}</h1>
          <AuthorByline lang={lang} block />
          <p className="text-xl text-gray-600 leading-relaxed">{c.intro}</p>
          <Image src={OG} alt={c.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{c.answer}</p>

          <h2 className={h2}>{c.hSummary}</h2>
          <Lista items={c.summary} />

          <h2 className={h2}>{c.hWhat}</h2>
          {c.what.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className={h2}>{c.hAccess}</h2>
          <Lista items={c.access} numerada />
          <p>{c.accessNote}</p>

          <h2 className={h2}>{c.hDiscover}</h2>
          <Lista items={c.discover} numerada />
          <p>{c.discoverNote}</p>

          <h2 className={h2}>{c.hVolume}</h2>
          <Lista items={c.volume} numerada />
          <p>{c.forecastsIntro}</p>
          <Lista items={c.forecasts} />
          <p>{c.forecastsNote}</p>

          <h2 className={h2}>{c.hRead}</h2>
          <Tabla cabecera={c.readHead} filas={c.read} />
          <p>{c.ranges}</p>
          <p>{c.competition}</p>

          <h2 className={h2}>{c.hCompare}</h2>
          <Tabla cabecera={c.compareHead} filas={c.compare} />
          <p>{c.compareNote}</p>

          <BlogBanner variant="seo" lang={lang} />

          <h2 className={h2}>{c.hMistakes}</h2>
          <Lista items={c.mistakes} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{c.ctaTitle}</p>
            <p className="text-gray-600 text-sm mb-4">{c.ctaText}</p>
            <Link
              href={`/${lang}/${langSlug(lang, "digital-audit")}/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {c.ctaButton}
            </Link>
          </div>

          <h2 className={h2}>{c.hFaq}</h2>
          <div className="space-y-3">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className={h2}>{c.hSources}</h2>
          <p className="text-sm text-gray-500">{c.checked}</p>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {c.sources.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            {c.related}{" "}
            {link(`/${lang}/${langSlug(lang, "google-ads-management")}/`, "Google Ads")} ·{" "}
            {link(`/${lang}/${langSlug(lang, "seo-web-positioning")}/`, "SEO")} ·{" "}
            {link(`/${lang}/${langSlug(lang, "digital-audit")}/`, lang === "en" ? "Free digital diagnosis" : "Diagnostic digital gratuit")}
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {c.back}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-usar-planificador-de-palabras-clave-google-ads" />
    </>
  );
}
