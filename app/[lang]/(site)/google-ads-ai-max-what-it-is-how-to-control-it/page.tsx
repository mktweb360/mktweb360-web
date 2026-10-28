import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 03/11/2026 — versión EN/FR del artículo ES /ai-max-google-ads-que-es-como-controlarlo/.
// La versión FR vive en ../ai-max-google-ads-definition-controle/ y reutiliza esta página.
// Fechas de migración comprobadas el 28/10/2026 en la ayuda de Google Ads y en el blog de Google.

const ES_SLUG = "ai-max-google-ads-que-es-como-controlarlo";
const EN_SLUG = "google-ads-ai-max-what-it-is-how-to-control-it";
const FR_SLUG = "ai-max-google-ads-definition-controle";
const OG: Record<"en" | "fr", string> = {
  en: "/og-google-ads-ai-max-what-it-is-how-to-control-it.jpg",
  fr: "/og-ai-max-google-ads-definition-controle.jpg",
};
const DATE = "2026-11-03";

type Lang = "en" | "fr";

const TEXT = {
  en: {
    title: "Google Ads AI Max: What It Is and How to Control It",
    description:
      "AI Max expands your Search campaigns with AI. How it differs from broad match and DSA, when Google migrates campaigns, and 7 checks before you turn it on.",
    h1: "Google Ads AI Max: what changes in your Search campaigns and how to stay in control",
    crumb: "Google Ads AI Max",
    category: "SEM",
    date: "November 3, 2026",
    intro:
      "Google is moving Search campaigns to AI Max, in some cases automatically. Here is what each feature does, which dates Google has given and what to check before letting AI expand your ads.",
    alt: "Illustrated AI Max control panel: a match-type dial from exact to AI, switches for search terms, generated text and final URL expansion, and brand and URL exclusions",
    answer:
      "AI Max is a set of Google Ads features you turn on inside a Search campaign, not a new campaign type. It widens the searches your ad can show for, writes text based on your website and can send users to a different page on your domain. All of it can be limited with settings and exclusions.",
    summaryTitle: "Quick summary",
    summary: [
      <><strong>Three features</strong> you can switch on separately: search term matching, text customization and final URL expansion.</>,
      <>According to Google, <strong>new Search campaigns</strong> have it turned on by default.</>,
      <><strong>Automatic migration:</strong> Google is upgrading campaigns with automatically created assets and campaign-level broad match from September 2026, and campaigns with Dynamic Search Ads from February 2027.</>,
      <>Search term matching <strong>does not work with manual CPC</strong>: Google recommends conversion-based bidding.</>,
      <>Our rule: <strong>never turn it on without verified conversion tracking</strong>, because the AI learns from those conversions.</>,
    ] as ReactNode[],
    whatTitle: "What is AI Max in Google Ads?",
    whatIntro:
      "Google describes it as an optimization layer for Search campaigns that bundles targeting and creative enhancements. It has three features:",
    features: [
      <><strong>Search term matching.</strong> Expands your keywords with broad match and keywordless technology, which uses your ads, keywords and website to find new searches. It can be switched off per ad group.</>,
      <><strong>Text customization</strong> (formerly “automatically created assets”). Generates headlines and descriptions from your ads, landing pages and assets.</>,
      <><strong>Final URL expansion.</strong> Sends users to the page on your domain that best matches their search, within the ad group theme. It requires text customization: if you switch that off, final URL expansion goes off too.</>,
    ] as ReactNode[],
    whatAfter:
      "AI Max also adds controls Search campaigns did not have before: brand exclusions and inclusions, URL exclusions and inclusions, locations of interest per ad group, and guidelines for generated text.",
    compareTitle: "How is it different from broad match and DSA?",
    compareHead: ["", "Campaign-level broad match", "DSA", "AI Max"],
    compare: [
      ["What it is", "A setting that treats every keyword in the campaign as broad", "An ad type that targets searches based on your website content", "A layer of features inside a Search campaign"],
      ["How searches are chosen", "From your keywords", "From your website pages", "Keywords, broad match and keywordless matching"],
      ["Ad text", "Written by you", "Headlines generated from your website", "Your responsive ads plus text customization"],
      ["Landing page", "Set by you", "Chosen by Google on your site", "Yours, or the one chosen by final URL expansion"],
      ["Main controls", "Negative keywords", "Page targets and exclusions", "Negatives, brand and URL exclusions, inclusions, locations of interest and text guidelines"],
      ["What happens next", "Upgraded to AI Max from September 2026", "Upgraded to AI Max from February 2027", "Where the other two end up"],
    ],
    compareAfter: (lang: Lang) => (
      <>
        An easily missed detail if you used the campaign-level broad match setting: with it, Google prioritizes each keyword as if it were both exact and broad. Once the campaign moves to AI Max, that stops. To keep that priority, Google suggests adding exact match copies of those keywords. If you are building your keyword list from scratch, see our guide to the{" "}
        <Link href={`/${lang}/${langSlug(lang, "how-to-use-google-keyword-planner")}/`} className="text-accent-500 hover:underline">Google Ads Keyword Planner</Link>.
      </>
    ),
    migTitle: "Automatic migration: what will Google do and when?",
    migIntro:
      "On 15 April 2026 Google announced that DSA, automatically created assets and campaign-level broad match would move to AI Max from September 2026. On 11 June it updated that announcement: DSA is pushed back to February 2027, while the rest keeps September 2026. That is why you will find articles with different dates. This is the schedule currently shown in Google's help centre and blog:",
    migHead: ["What you have", "Upgrade to AI Max, per Google", "What it becomes"],
    mig: [
      ["Automatically created assets (now text customization)", "September 2026", "AI Max with search term matching and text customization on"],
      ["Campaign-level broad match", "September 2026", "AI Max with search term matching on"],
      ["Dynamic Search Ads (DSA)", "February 2027 (previously announced for September 2026)", "Dynamic ad groups → standard ad groups; DSA → responsive search ads; all three features on and your existing URL controls kept"],
    ],
    migAfter:
      "You can move first: Google offers an upgrade tool for DSA and an in-account banner for the rest. When a DSA campaign is upgraded, the old dynamic ads keep running during a transition period and are paused once the new responsive ads are eligible. Dates may change again: check the notices in your account and the Google Ads help centre before planning.",
    checksTitle: "7 checks before turning on AI Max",
    checksIntro: "They apply whether you switch it on yourself or Google migrates your campaign:",
    checks: [
      <><strong>Verified conversion tracking.</strong> Every form, call or purchase is recorded once, with its value and no duplicates. Test it yourself before switching anything on. Without reliable data, the AI optimizes towards the wrong things.</>,
      <><strong>Conversion-based bidding, outside the learning period.</strong> Search term matching does not work with manual CPC. And our rule: while a Smart Bidding strategy is learning (because it is new or you just changed it), leave it alone and do not turn on AI Max until learning ends.</>,
      <><strong>A budget that is not limited.</strong> Google warns that AI Max will not be effective if the campaign is limited by budget. If you already run out of budget every day, wider matching just spreads the same money across more searches.</>,
      <><strong>Search terms reviewed before adding negatives.</strong> Google recommends waiting at least two weeks after turning on AI Max before making changes such as adding negatives. Then review the search terms report and exclude what is unrelated to your business, not just what you had not thought of.</>,
      <><strong>Brand exclusions.</strong> Set at campaign level (inclusions also per ad group). Decide whether you want to show for competitor searches and for brands you do not sell.</>,
      <><strong>Final URL expansion and URL exclusions.</strong> Exclude pages you do not want paid traffic on: careers, blog, legal notices or services you no longer offer. Also check that your tracking templates work with the URLs Google picks.</>,
      <><strong>Generated text under control.</strong> Review the assets Google AI has created in the asset report. With text guidelines (beta) you can block up to 25 terms and set up to 40 messaging restrictions per campaign: prices, timeframes or promises you cannot keep.</>,
    ] as ReactNode[],
    checksAfter:
      "To measure the effect before deciding, Google lets you run an AI Max experiment that splits the campaign's own traffic and budget between a share with AI Max and one without it, without duplicating the campaign. If you do not apply the result, the campaign goes back to its previous settings.",
    reportsTitle: "How do you read the AI Max reports?",
    reportsIntro: "There are four places to see what the AI has done:",
    reports: [
      <><strong>Search terms.</strong> Filter the match type “AI Max” to see the searches it added. The search terms and ad combinations view also shows the headline and landing page used.</>,
      <><strong>Keywords.</strong> At the bottom of the table there are two total rows: AI Max expanded matches and AI Max landing page matches.</>,
      <><strong>Assets.</strong> At campaign level, a tab lists the expanded final URLs. In the ad-level report, generated text is marked as added by Google AI.</>,
      <><strong>Landing pages.</strong> Shows performance per URL, including final URL expansion, and a column tells you whether AI Max selected it.</>,
    ] as ReactNode[],
    signalsIntro: "And what usually comes next, depending on what you see:",
    signalsHead: ["What you see", "What to do"],
    signals: [
      ["Searches unrelated to your business", "Add negatives, after reviewing the report"],
      ["Ads on competitor searches you do not want", "Brand exclusion in the campaign"],
      ["Traffic to pages that do not convert", "URL exclusion or switch off final URL expansion"],
      ["Text with promises you cannot keep", "Remove the asset and add a text guideline"],
      ["Cost per conversion rises after the test", "Compare with an experiment and switch off the feature causing it"],
    ],
    fitTitle: "Is AI Max worth it for a small business?",
    fitIntro:
      "Google states that non-retail advertisers who activate AI Max typically see 14% more conversions or conversion value at a similar CPA or ROAS (Google internal data, 2025). It is Google's own average across many advertisers, not a forecast for your account. What decides whether it suits you is your starting point:",
    fitHead: ["Criterion", "Worth testing", "Better to wait"],
    fit: [
      ["Conversions", "Tracked, reliable and with enough volume", "Not tracked, or forms that are not recorded"],
      ["Bidding", "Conversion-based and stable", "Manual CPC or a strategy you just changed"],
      ["Budget", "Not used up every day", "Limited by budget daily"],
      ["Website", "Clear service pages, one per service", "Thin content or pages mixing services"],
      ["Time", "Someone reviews search terms and text every week", "Nobody reviews the account"],
    ],
    fitAfter: (lang: Lang) => (
      <>
        If you are still deciding between ads and organic search, we compare them in{" "}
        <Link href={`/${lang}/${langSlug(lang, "when-to-choose-seo-vs-google-ads")}/`} className="text-accent-500 hover:underline">when to choose SEO or Google Ads</Link>. And if you are worried about what the agency takes, see what{" "}
        <Link href={`/${lang}/${langSlug(lang, "google-ads-no-commission-marketing-agency")}/`} className="text-accent-500 hover:underline">Google Ads with no commission on budget</Link> means.
      </>
    ),
    ctaTitle: "Would you rather have someone review AI Max for you?",
    ctaText:
      "In our Google Ads management we verify conversion tracking, set up exclusions and add negatives based on real search terms. Fixed monthly fee, no commission on your ad spend.",
    ctaButton: "See Google Ads management",
    faqTitle: "Frequently asked questions",
    sourcesTitle: "Sources",
    sourcesNote: "Checked on 28 October 2026.",
    related: "Related services",
    relatedAds: "Google Ads management",
    relatedAudit: "Free digital audit",
    back: "← Back to the blog",
    home: "Home",
  },
  fr: {
    title: "AI Max dans Google Ads : définition et contrôle",
    description:
      "AI Max étend vos campagnes Search grâce à l'IA. Ce qui change par rapport à la requête large et aux DSA, le calendrier de migration et 7 vérifications avant de l'activer.",
    h1: "AI Max dans Google Ads : ce qui change dans vos campagnes Search et comment garder le contrôle",
    crumb: "AI Max dans Google Ads",
    category: "SEA",
    date: "3 novembre 2026",
    intro:
      "Google fait passer les campagnes Search à AI Max, parfois automatiquement. Voici ce que fait chaque fonctionnalité, les dates données par Google et ce qu'il faut vérifier avant de laisser l'IA étendre vos annonces.",
    alt: "Panneau de contrôle illustré d'AI Max : un bouton de type de correspondance de exacte à IA, des interrupteurs pour les termes de recherche, les textes générés et l'extension de l'URL finale, et des exclusions de marques et d'URL",
    answer:
      "AI Max est un ensemble de fonctionnalités Google Ads qui s'active dans une campagne Search ; ce n'est pas un nouveau type de campagne. Il élargit les recherches sur lesquelles votre annonce peut s'afficher, rédige des textes à partir de votre site et peut envoyer l'internaute vers une autre page de votre domaine. Tout cela se limite avec des réglages et des exclusions.",
    summaryTitle: "En bref",
    summary: [
      <><strong>Trois fonctionnalités</strong> activables séparément : correspondance des termes de recherche, personnalisation du texte et extension de l’URL finale.</>,
      <>D’après Google, les <strong>nouvelles campagnes Search</strong> l’ont activé par défaut.</>,
      <><strong>Migration automatique :</strong> Google fait passer à AI Max les campagnes avec éléments créés automatiquement et avec requête large au niveau de la campagne à partir de septembre 2026, et les campagnes avec annonces dynamiques du Réseau de Recherche (DSA) à partir de février 2027.</>,
      <>La correspondance des termes de recherche <strong>ne fonctionne pas avec le CPC manuel</strong> : Google recommande des enchères axées sur les conversions.</>,
      <>Notre règle : <strong>ne jamais l’activer sans un suivi des conversions vérifié</strong>, car l’IA apprend de ces conversions.</>,
    ] as ReactNode[],
    whatTitle: "Qu'est-ce qu'AI Max dans Google Ads ?",
    whatIntro:
      "Google le présente comme une couche d'optimisation pour les campagnes Search qui regroupe des améliorations de ciblage et de création. Il comporte trois fonctionnalités :",
    features: [
      <><strong>Correspondance des termes de recherche.</strong> Étend vos mots clés avec la requête large et une technologie « sans mots clés », qui s’appuie sur vos annonces, vos mots clés et votre site pour trouver de nouvelles recherches. Elle se désactive par groupe d’annonces.</>,
      <><strong>Personnalisation du texte</strong> (anciennement « éléments créés automatiquement »). Génère des titres et des descriptions à partir de vos annonces, de vos pages de destination et de vos éléments.</>,
      <><strong>Extension de l’URL finale.</strong> Envoie l’internaute vers la page de votre domaine la plus adaptée à sa recherche, dans le thème du groupe d’annonces. Elle nécessite la personnalisation du texte : si vous la désactivez, l’extension de l’URL finale se désactive aussi.</>,
    ] as ReactNode[],
    whatAfter:
      "AI Max ajoute aussi des contrôles que les campagnes Search n'avaient pas : exclusions et inclusions de marques, exclusions et inclusions d'URL, zones géographiques d'intérêt par groupe d'annonces et consignes pour les textes générés.",
    compareTitle: "Qu'est-ce qui change par rapport à la requête large et aux DSA ?",
    compareHead: ["", "Requête large au niveau de la campagne", "DSA", "AI Max"],
    compare: [
      ["Ce que c'est", "Un paramètre qui traite tous les mots clés de la campagne en requête large", "Un type d'annonce qui cible des recherches à partir du contenu de votre site", "Une couche de fonctionnalités dans une campagne Search"],
      ["Choix des recherches", "À partir de vos mots clés", "À partir des pages de votre site", "Mots clés, requête large et correspondance sans mots clés"],
      ["Textes de l'annonce", "Rédigés par vous", "Titres générés à partir de votre site", "Vos annonces responsives plus la personnalisation du texte"],
      ["Page de destination", "Celle que vous fixez", "Celle que choisit Google sur votre site", "La vôtre, ou celle choisie par l'extension de l'URL finale"],
      ["Contrôles principaux", "Mots clés à exclure", "Cibles et exclusions de pages", "Mots clés à exclure, exclusions de marques et d'URL, inclusions, zones d'intérêt et consignes de texte"],
      ["La suite", "Passe à AI Max à partir de septembre 2026", "Passe à AI Max à partir de février 2027", "C'est la destination des deux autres"],
    ],
    compareAfter: (lang: Lang) => (
      <>
        Un détail qui passe souvent inaperçu si vous utilisiez la requête large au niveau de la campagne : avec ce paramètre, Google traite chaque mot clé comme s’il existait aussi en correspondance exacte pour choisir lequel utiliser. En passant à AI Max, ce n’est plus le cas. Pour conserver cette priorité, Google conseille d’ajouter des copies de ces mots clés en correspondance exacte. Si vous construisez votre liste de mots clés de zéro, consultez notre guide du{" "}
        <Link href={`/${lang}/${langSlug(lang, "how-to-use-google-keyword-planner")}/`} className="text-accent-500 hover:underline">Planificateur de mots clés de Google Ads</Link>.
      </>
    ),
    migTitle: "Migration automatique : que va faire Google, et quand ?",
    migIntro:
      "Le 15 avril 2026, Google a annoncé que les DSA, les éléments créés automatiquement et la requête large au niveau de la campagne passeraient à AI Max à partir de septembre 2026. Le 11 juin, il a mis à jour cette annonce : les DSA sont repoussées à février 2027, le reste garde septembre 2026. D'où les dates différentes selon les articles. Voici le calendrier qui figure aujourd'hui dans l'aide et sur le blog de Google :",
    migHead: ["Ce que vous avez", "Passage à AI Max, selon Google", "Ce que cela devient"],
    mig: [
      ["Éléments créés automatiquement (aujourd'hui, personnalisation du texte)", "Septembre 2026", "AI Max avec correspondance des termes de recherche et personnalisation du texte activées"],
      ["Requête large au niveau de la campagne", "Septembre 2026", "AI Max avec correspondance des termes de recherche activée"],
      ["Annonces dynamiques du Réseau de Recherche (DSA)", "Février 2027 (annoncé d'abord pour septembre 2026)", "Groupes dynamiques → groupes standard ; DSA → annonces responsives ; les trois fonctionnalités activées et vos contrôles d'URL conservés"],
    ],
    migAfter:
      "Vous pouvez prendre les devants : Google propose un outil de mise à niveau pour les DSA et une bannière dans le compte pour le reste. Lors de la mise à niveau d'une campagne DSA, les anciennes annonces dynamiques continuent de tourner pendant une période de transition, puis sont mises en veille quand les nouvelles annonces responsives sont éligibles. Les dates peuvent encore changer : vérifiez les avis de votre compte et l'aide Google Ads avant de planifier.",
    checksTitle: "7 vérifications avant d'activer AI Max",
    checksIntro: "Elles valent aussi bien si vous l'activez vous-même que si Google migre votre campagne :",
    checks: [
      <><strong>Un suivi des conversions vérifié.</strong> Chaque formulaire, appel ou achat est enregistré une seule fois, avec sa valeur et sans doublon. Testez-le vous-même avant d’activer quoi que ce soit. Sans données fiables, l’IA optimise vers ce qui ne vous intéresse pas.</>,
      <><strong>Des enchères axées sur les conversions, hors période d’apprentissage.</strong> Avec le CPC manuel, la correspondance des termes de recherche ne fonctionne pas. Et notre règle : tant qu’une stratégie d’enchères intelligentes est en apprentissage (nouvelle ou modifiée récemment), on n’y touche pas et on n’active pas AI Max avant la fin.</>,
      <><strong>Un budget qui n’est pas limité.</strong> Google prévient qu’AI Max ne sera pas efficace si la campagne est limitée par le budget. Si votre budget est déjà épuisé chaque jour, élargir les recherches ne fait que répartir le même argent sur plus de requêtes.</>,
      <><strong>Les termes de recherche examinés avant d’ajouter des mots clés à exclure.</strong> Google recommande d’attendre au moins deux semaines après l’activation d’AI Max avant des changements comme l’ajout de mots clés à exclure. Ensuite, examinez le rapport et excluez ce qui n’a aucun rapport avec votre activité, pas seulement ce que vous n’aviez pas prévu.</>,
      <><strong>Exclusions de marques.</strong> Elles se règlent au niveau de la campagne (les inclusions aussi par groupe d’annonces). Décidez si vous voulez apparaître sur les recherches de concurrents et de marques que vous ne vendez pas.</>,
      <><strong>Extension de l’URL finale et exclusions d’URL.</strong> Excluez les pages vers lesquelles vous ne voulez pas envoyer de trafic payant : emploi, blog, mentions légales ou services que vous ne proposez plus. Vérifiez aussi que vos modèles de suivi fonctionnent avec les URL choisies par Google.</>,
      <><strong>Des textes générés sous contrôle.</strong> Passez en revue les éléments créés par l’IA de Google dans le rapport sur les éléments. Avec les consignes de texte (bêta), vous pouvez bloquer jusqu’à 25 termes et fixer jusqu’à 40 restrictions de message par campagne : prix, délais ou promesses que vous ne pouvez pas tenir.</>,
    ] as ReactNode[],
    checksAfter:
      "Pour mesurer l'effet avant de décider, Google permet de lancer un test AI Max qui répartit le trafic et le budget de la campagne elle-même entre une partie avec AI Max et une partie sans, sans la dupliquer. Si vous n'appliquez pas le résultat, la campagne revient à ses paramètres précédents.",
    reportsTitle: "Comment lire les rapports d'AI Max ?",
    reportsIntro: "Quatre endroits permettent de voir ce qu'a fait l'IA :",
    reports: [
      <><strong>Termes de recherche.</strong> Filtrez le type de correspondance « AI Max » pour voir les recherches ajoutées. La vue des combinaisons de termes de recherche et d’annonces montre aussi le titre et la page de destination utilisés.</>,
      <><strong>Mots clés.</strong> En bas du tableau, deux lignes de total : les correspondances étendues par AI Max et celles issues des pages de destination.</>,
      <><strong>Éléments.</strong> Au niveau de la campagne, un onglet regroupe les URL finales étendues. Dans le rapport de chaque annonce, les textes générés sont signalés comme ajoutés par l’IA de Google.</>,
      <><strong>Pages de destination.</strong> Affiche les performances de chaque URL, y compris celles de l’extension de l’URL finale, et une colonne indique si AI Max l’a choisie.</>,
    ] as ReactNode[],
    signalsIntro: "Et ce qu'il faut généralement faire ensuite, selon ce que vous voyez :",
    signalsHead: ["Ce que vous voyez", "Que faire"],
    signals: [
      ["Des recherches sans rapport avec votre activité", "Ajouter des mots clés à exclure, après examen du rapport"],
      ["Des annonces sur des recherches de concurrents non souhaitées", "Exclusion de marque dans la campagne"],
      ["Du trafic vers des pages qui ne convertissent pas", "Exclusion d'URL ou désactivation de l'extension de l'URL finale"],
      ["Des textes avec des promesses intenables", "Retirer l'élément et ajouter une consigne de texte"],
      ["Le coût par conversion augmente après le test", "Comparer avec un test et désactiver la fonctionnalité en cause"],
    ],
    fitTitle: "AI Max vaut-il le coup pour une PME ?",
    fitIntro:
      "Google affirme que les annonceurs hors secteur retail qui activent AI Max obtiennent en moyenne 14 % de conversions ou de valeur de conversion en plus, à CPA ou ROAS similaire (données internes de Google, 2025). C'est une moyenne de Google sur de nombreux annonceurs, pas une prévision pour votre compte. Ce qui compte, c'est votre point de départ :",
    fitHead: ["Critère", "À tester", "Mieux vaut attendre"],
    fit: [
      ["Conversions", "Mesurées, fiables et en volume suffisant", "Non mesurées, ou formulaires non enregistrés"],
      ["Enchères", "Axées sur les conversions et stables", "CPC manuel ou stratégie tout juste modifiée"],
      ["Budget", "Pas épuisé chaque jour", "Limité par le budget tous les jours"],
      ["Site", "Des pages de service claires, une par service", "Peu de contenu ou des pages qui mélangent les services"],
      ["Temps", "Quelqu'un examine termes et textes chaque semaine", "Personne ne suit le compte"],
    ],
    fitAfter: (lang: Lang) => (
      <>
        Si vous hésitez encore entre publicité et référencement naturel, nous les comparons dans{" "}
        <Link href={`/${lang}/${langSlug(lang, "when-to-choose-seo-vs-google-ads")}/`} className="text-accent-500 hover:underline">quand choisir le SEO ou Google Ads</Link>. Et si la rémunération de l’agence vous inquiète, voyez ce que signifie{" "}
        <Link href={`/${lang}/${langSlug(lang, "google-ads-no-commission-marketing-agency")}/`} className="text-accent-500 hover:underline">Google Ads sans commission sur le budget</Link>.
      </>
    ),
    ctaTitle: "Vous préférez que quelqu'un vérifie AI Max pour vous ?",
    ctaText:
      "Dans notre gestion Google Ads, nous vérifions le suivi des conversions, configurons les exclusions et ajoutons des mots clés à exclure à partir des vrais termes de recherche. Forfait mensuel fixe, sans commission sur votre budget publicitaire.",
    ctaButton: "Voir la gestion Google Ads",
    faqTitle: "Questions fréquentes",
    sourcesTitle: "Sources",
    sourcesNote: "Consultées le 28 octobre 2026.",
    related: "Services associés",
    relatedAds: "Gestion Google Ads",
    relatedAudit: "Audit digital gratuit",
    back: "← Retour au blog",
    home: "Accueil",
  },
};

const FAQS: Record<Lang, { q: string; a: string }[]> = {
  en: [
    {
      q: "Is AI Max a new campaign type?",
      a: "No. According to the Google Ads help centre, it is an optimization layer you turn on inside a Search campaign. Your keywords, ads, negatives and budget stay in place; AI Max adds search term matching, text customization and final URL expansion.",
    },
    {
      q: "Can I turn AI Max off?",
      a: "Yes. Google says turning it off disables all its features and that turning it back on restores your previous settings. You can also switch off only search term matching in a specific ad group.",
    },
    {
      q: "Does AI Max work with manual CPC?",
      a: "Only partly. Google explains that search term matching does not work with manual CPC bidding and recommends a conversion or conversion value-based bidding strategy.",
    },
    {
      q: "Are my negative keywords respected?",
      a: "Yes. The Google Ads help centre says negative keywords are respected with AI Max turned on. Even so, review the search terms report before adding new negatives, so you do not cut off searches that do convert.",
    },
    {
      q: "What happens if I do nothing with my Dynamic Search Ads?",
      a: "According to the Google Ads help centre, from February 2027 campaigns using Dynamic Search Ads will be upgraded to AI Max automatically: dynamic ad groups become standard ad groups and dynamic ads become responsive search ads. It is better to review URL exclusions and text beforehand, or upgrade yourself with an experiment.",
    },
  ],
  fr: [
    {
      q: "AI Max est-il un nouveau type de campagne ?",
      a: "Non. D'après l'aide Google Ads, c'est une couche d'optimisation qui s'active dans une campagne Search. Vos mots clés, annonces, mots clés à exclure et budget restent en place ; AI Max ajoute la correspondance des termes de recherche, la personnalisation du texte et l'extension de l'URL finale.",
    },
    {
      q: "Peut-on désactiver AI Max ?",
      a: "Oui. Google indique que la désactivation coupe toutes ses fonctionnalités et que sa réactivation restaure vos paramètres précédents. Vous pouvez aussi désactiver uniquement la correspondance des termes de recherche dans un groupe d'annonces.",
    },
    {
      q: "AI Max fonctionne-t-il avec le CPC manuel ?",
      a: "En partie seulement. Google explique que la correspondance des termes de recherche ne fonctionne pas avec le CPC manuel et recommande une stratégie d'enchères axée sur les conversions ou la valeur de conversion.",
    },
    {
      q: "Mes mots clés à exclure sont-ils respectés ?",
      a: "Oui. L'aide Google Ads précise que les mots clés à exclure sont respectés avec AI Max activé. Examinez tout de même le rapport sur les termes de recherche avant d'en ajouter de nouveaux, pour ne pas couper des recherches qui convertissent.",
    },
    {
      q: "Que se passe-t-il si je ne fais rien avec mes annonces dynamiques (DSA) ?",
      a: "D'après l'aide Google Ads, à partir de février 2027 les campagnes avec DSA passeront automatiquement à AI Max : les groupes dynamiques deviennent des groupes standard et les annonces dynamiques, des annonces responsives. Mieux vaut vérifier avant les exclusions d'URL et les textes, ou faire la mise à niveau vous-même avec un test.",
    },
  ],
};

const SOURCES = [
  { en: "Google Ads Help: About AI Max for Search campaigns.", fr: "Aide Google Ads : À propos d'AI Max pour les campagnes Search.", url: "https://support.google.com/google-ads/answer/15910366" },
  { en: "Google Ads Help: How AI Max for Search campaigns works (brand, URL and location controls).", fr: "Aide Google Ads : Fonctionnement d'AI Max (contrôles de marques, d'URL et de zones).", url: "https://support.google.com/google-ads/answer/15910187" },
  { en: "Google Ads Help: Set up AI Max for Search campaigns (DSA upgrade, text customization, final URL expansion).", fr: "Aide Google Ads : Configurer AI Max (mise à niveau des DSA, personnalisation du texte, extension de l'URL finale).", url: "https://support.google.com/google-ads/answer/15909989" },
  { en: "Google Ads Help: Frequently asked questions about AI Max.", fr: "Aide Google Ads : Questions fréquentes sur AI Max.", url: "https://support.google.com/google-ads/answer/15913066" },
  { en: "Google Ads Help: About reporting in AI Max for Search campaigns.", fr: "Aide Google Ads : Rapports d'AI Max.", url: "https://support.google.com/google-ads/answer/16470459" },
  { en: "Google Ads Help: Text guidelines (beta).", fr: "Aide Google Ads : Consignes de texte (bêta).", url: "https://support.google.com/google-ads/answer/16489313" },
  { en: "Google Ads Help: About AI Max experiments.", fr: "Aide Google Ads : Tests AI Max.", url: "https://support.google.com/google-ads/answer/16450159" },
  { en: "Google Ads Help: About the broad match keywords campaign setting (upgrade to AI Max from September 2026).", fr: "Aide Google Ads : Paramètre de requête large au niveau de la campagne (passage à AI Max à partir de septembre 2026).", url: "https://support.google.com/google-ads/answer/13389795" },
  { en: "Google Ads Help: About Dynamic Search Ads (upgrade to AI Max from February 2027).", fr: "Aide Google Ads : Annonces dynamiques du Réseau de Recherche (passage à AI Max à partir de février 2027).", url: "https://support.google.com/google-ads/answer/2471185" },
  { en: "Google blog: Dynamic Search Ads are upgrading to AI Max (15/04/2026, updated 11/06/2026).", fr: "Blog de Google : Dynamic Search Ads are upgrading to AI Max (15/04/2026, mis à jour le 11/06/2026).", url: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/" },
  { en: "Google Ads Developer Blog: DSA Automigration Delayed to February 2027 (11/06/2026).", fr: "Google Ads Developer Blog : DSA Automigration Delayed to February 2027 (11/06/2026).", url: "https://ads-developers.googleblog.com/2026/06/dynamic-search-ads-dsa-automigration.html" },
];

function toLang(lang: string): Lang {
  return lang === "fr" ? "fr" : "en";
}

function pageUrl(lang: Lang) {
  return `https://www.mktweb360.com/${lang}/${lang === "en" ? EN_SLUG : FR_SLUG}/`;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = toLang((await params).lang);
  const t = TEXT[lang];
  const url = pageUrl(lang);
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: alternatesFor(`/${lang}/${lang === "en" ? EN_SLUG : FR_SLUG}/`) ?? { canonical: url },
    openGraph: {
      title: `${t.title} | Mkt Web 360`,
      description: t.description,
      url,
      type: "article",
      images: [{ url: OG[lang], width: 1200, height: 630 }],
    },
  };
}

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
  const lang = toLang((await params).lang);
  const t = TEXT[lang];
  const faqs = FAQS[lang];
  const url = pageUrl(lang);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.h1,
    description: t.description,
    inLanguage: lang,
    author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
    publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE,
    dateModified: DATE,
    image: `https://www.mktweb360.com${OG[lang]}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
        <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: t.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{t.category}</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{t.date}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{t.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
          <Image src={OG[lang]} alt={t.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{t.answer}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.summaryTitle}</h2>
          <Lista items={t.summary} />

          <h2 className="text-2xl font-bold text-primary-600">{t.whatTitle}</h2>
          <p>{t.whatIntro}</p>
          <Lista items={t.features} numerada />
          <p>{t.whatAfter}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.compareTitle}</h2>
          <Tabla cabecera={t.compareHead} filas={t.compare} />
          <p>{t.compareAfter(lang)}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.migTitle}</h2>
          <p>{t.migIntro}</p>
          <Tabla cabecera={t.migHead} filas={t.mig} />
          <p>{t.migAfter}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.checksTitle}</h2>
          <p>{t.checksIntro}</p>
          <Lista items={t.checks} numerada />
          <p>{t.checksAfter}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.reportsTitle}</h2>
          <p>{t.reportsIntro}</p>
          <Lista items={t.reports} />
          <p>{t.signalsIntro}</p>
          <Tabla cabecera={t.signalsHead} filas={t.signals} />

          <h2 className="text-2xl font-bold text-primary-600">{t.fitTitle}</h2>
          <p>{t.fitIntro}</p>
          <Tabla cabecera={t.fitHead} filas={t.fit} />
          <p>{t.fitAfter(lang)}</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{t.ctaTitle}</p>
            <p className="text-gray-600 text-sm mb-4">{t.ctaText}</p>
            <Link href={`/${lang}/${langSlug(lang, "google-ads-management")}/`} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              {t.ctaButton}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{t.faqTitle}</h2>
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

          <h2 className="text-2xl font-bold text-primary-600">{t.sourcesTitle}</h2>
          <p className="text-sm text-gray-500">{t.sourcesNote}</p>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {SOURCES.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f[lang]}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            {t.related}: <Link href={`/${lang}/${langSlug(lang, "google-ads-management")}/`} className="text-accent-500 hover:underline">{t.relatedAds}</Link> · <Link href={`/${lang}/${langSlug(lang, "digital-audit")}/`} className="text-accent-500 hover:underline">{t.relatedAudit}</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{t.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={ES_SLUG} />
    </>
  );
}
