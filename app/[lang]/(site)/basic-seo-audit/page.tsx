import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, ROUTES, urlFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

// 28/10/2026 — EN/FR reescritas con el contenido de /auditoria-seo-basica/ (checklist de 30 puntos).
// Misma carpeta y slug para los dos idiomas (basic-seo-audit), como antes.

type L = "en" | "fr";
const SLUG = "basic-seo-audit";
const DATE_MODIFIED = "2026-10-28";
const OG: Record<L, string> = { en: "/og-basic-seo-audit-en.jpg", fr: "/og-basic-seo-audit-fr.jpg" };

function href(lang: L, esPath: string): string {
  const r = ROUTES.find((x) => x.es === esPath);
  return (r && urlFor(r, lang)) || esPath;
}

const TXT = {
  en: {
    title: "Website Audit Step by Step: a 30-Point Checklist",
    description:
      "How to audit a website with free tools: 30 checks covering indexing, speed, content, Google Business Profile and AI visibility, and how to read the results.",
    h1: "How to audit a website step by step: a 30-point checklist for SMEs",
    lead: "A checklist for reviewing your website with Google's free tools: whether it gets indexed, whether it loads well on mobile, whether the content answers what your clients search for, whether your Google Business Profile matches the site and whether AI assistants can see you.",
    alt: "Illustration: a magnifying glass inspects a web page and finds a 404 error, next to a card with the result for each block of the audit",
    date: "Updated 28 October 2026",
    crumb: "Website audit step by step",
    home: "Home",
  },
  fr: {
    title: "Audit de site web pas à pas : checklist en 30 points",
    description:
      "Comment auditer un site avec des outils gratuits : 30 points sur l'indexation, la vitesse, le contenu, la fiche Google et la visibilité dans l'IA, et comment lire les résultats.",
    h1: "Comment faire un audit de site web pas à pas : checklist en 30 points pour les PME",
    lead: "Une checklist pour examiner votre site avec les outils gratuits de Google : s'il est indexé, s'il se charge bien sur mobile, si le contenu répond à ce que cherchent vos clients, si votre fiche Google correspond au site et si les assistants d'IA vous voient.",
    alt: "Illustration : une loupe examine une page web et trouve une erreur 404, à côté d'une carte avec le résultat de chaque bloc de l'audit",
    date: "Mis à jour le 28 octobre 2026",
    crumb: "Audit de site pas à pas",
    home: "Accueil",
  },
} as const;

function faqs(lang: L) {
  return lang === "en"
    ? [
        { q: "What is the difference between a website audit and an SEO audit?", a: "An SEO audit focuses on what affects your position in search engines: indexing, content, links and speed. A website audit is usually broader and adds measurement, conversion or legal aspects. The checklist in this guide covers SEO, your Google Business Profile and AI visibility." },
        { q: "Can I audit my website for free?", a: "Yes. Search Console, PageSpeed Insights and the Rich Results Test are free, and Screaming Frog crawls up to 500 URLs for free, which is enough for most SME websites. What takes effort is interpreting the results and deciding what to fix first." },
        { q: "How often should a website be audited?", a: "A full audit once a year, and always before and after a redesign or a migration. Indexing and AI visibility are worth checking every month in Search Console." },
        { q: "Does a low PageSpeed Insights score mean Google is penalising me?", a: "No. The 0-100 score is a lab score. What Google uses are Core Web Vitals from real visits, with these thresholds: LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of 0.1 or less. Google also states that good page experience does not guarantee top rankings." },
        { q: "How do I know if my website appears in Google's AI answers?", a: "In Search Console, in the generative AI performance report, available to all websites since 31 August 2026. It shows your URLs' impressions in AI Overviews, AI Mode and Discover, but not clicks or queries." },
      ]
    : [
        { q: "Quelle différence entre un audit de site et un audit SEO ?", a: "Un audit SEO se concentre sur ce qui influence votre position dans les moteurs de recherche : indexation, contenu, liens et vitesse. Un audit de site est en général plus large et ajoute la mesure, la conversion ou les aspects juridiques. La checklist de ce guide couvre le SEO, la fiche Google et la visibilité dans l'IA." },
        { q: "Puis-je auditer mon site gratuitement ?", a: "Oui. Search Console, PageSpeed Insights et le test des résultats enrichis sont gratuits, et Screaming Frog explore gratuitement jusqu'à 500 URL, ce qui suffit pour la plupart des sites de PME. Ce qui demande du temps, c'est d'interpréter les résultats et de décider quoi corriger en premier." },
        { q: "À quelle fréquence faut-il auditer un site ?", a: "Un audit complet par an, et toujours avant et après une refonte ou une migration. L'indexation et la visibilité dans l'IA méritent d'être vérifiées chaque mois dans Search Console." },
        { q: "Un mauvais score PageSpeed Insights signifie-t-il que Google me pénalise ?", a: "Non. Le score de 0 à 100 est une note de laboratoire. Ce que Google utilise, ce sont les Core Web Vitals des visites réelles, avec ces seuils : LCP de 2,5 secondes ou moins, INP de 200 millisecondes ou moins et CLS de 0,1 ou moins. Google précise aussi qu'une bonne expérience de page ne garantit pas les premières positions." },
        { q: "Comment savoir si mon site apparaît dans les réponses d'IA de Google ?", a: "Dans Search Console, dans le rapport de performances de l'IA générative, disponible pour tous les sites depuis le 31 août 2026. Il montre les impressions de vos URL dans AI Overviews, le mode IA et Discover, mais pas les clics ni les requêtes." },
      ];
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

const a = "text-accent-500 hover:underline";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const t = TXT[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: alternatesFor(`/${lang}/${SLUG}/`) ?? { canonical: url },
    openGraph: { title: `${t.title} | Mkt Web 360`, description: t.description, url, type: "article", images: [{ url: OG[lang], width: 1200, height: 630 }] },
  };
}

type Bloque = { titulo: string; intro: string; puntos: ReactNode[]; nota?: string };

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const isEn = lang === "en";
  const t = TXT[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  const FAQS = faqs(lang);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.h1,
    description: t.description,
    inLanguage: lang,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: "2026-06-13",
    dateModified: DATE_MODIFIED,
    image: `https://www.mktweb360.com${OG[lang]}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const geo = href(lang, "/auditoria-geo-aparecer-chatgpt-gemini-google/");
  const resenas = href(lang, "/resenas-google-como-conseguirlas-legalmente/");
  const planificador = href(lang, "/como-usar-planificador-de-palabras-clave-google-ads/");
  const plazos = href(lang, "/cuanto-tarda-el-seo-en-dar-resultados/");
  const pymes = href(lang, "/seo-para-pymes-guia/");

  const resumen: ReactNode[] = isEn
    ? [
        <>You need four free tools: <strong>Google Search Console</strong>, <strong>PageSpeed Insights</strong>, the <strong>Rich Results Test</strong> and a crawler such as <strong>Screaming Frog</strong>, which is free up to 500 URLs.</>,
        <>Start with <strong>indexing</strong>: if Google does not have your page, nothing else matters.</>,
        <>Speed is measured with <strong>Core Web Vitals</strong> and the thresholds Google publishes, not with the 0-100 score.</>,
        <>If you have a local business, your <strong>Google Business Profile</strong> is part of the audit.</>,
        <>Since 31 August 2026, Search Console shows every website how often it appears in <strong>Google&apos;s AI features</strong>.</>,
        <>&quot;Unknown&quot; is not the same as &quot;fail&quot;: note which piece of data is missing and go and get it.</>,
      ]
    : [
        <>Il vous faut quatre outils gratuits : <strong>Google Search Console</strong>, <strong>PageSpeed Insights</strong>, le <strong>test des résultats enrichis</strong> et un robot d&apos;exploration comme <strong>Screaming Frog</strong>, gratuit jusqu&apos;à 500 URL.</>,
        <>Commencez par l&apos;<strong>indexation</strong> : si Google n&apos;a pas votre page, le reste ne compte pas.</>,
        <>La vitesse se mesure avec les <strong>Core Web Vitals</strong> et les seuils publiés par Google, pas avec la note de 0 à 100.</>,
        <>Si vous avez une activité locale, votre <strong>fiche Google</strong> fait partie de l&apos;audit.</>,
        <>Depuis le 31 août 2026, Search Console indique à tous les sites combien de fois ils apparaissent dans les <strong>fonctions d&apos;IA de Google</strong>.</>,
        <>« Inconnu » n&apos;est pas la même chose qu&apos;« échec » : notez quelle donnée manque et allez la chercher.</>,
      ];

  const herramientas = isEn
    ? [
        ["Google Search Console", "Indexing, the searches you appear for, errors and AI visibility", "Free"],
        ["PageSpeed Insights (pagespeed.web.dev)", "Core Web Vitals from real users (if your site has enough traffic) and lab data", "Free"],
        ["Rich Results Test (search.google.com/test/rich-results)", "Checking that structured data is valid", "Free"],
        ["Screaming Frog SEO Spider", "Crawling the site the way a search engine would: titles, broken links, redirects", "Free up to 500 URLs per crawl"],
      ]
    : [
        ["Google Search Console", "Indexation, recherches pour lesquelles vous apparaissez, erreurs et visibilité dans l'IA", "Gratuit"],
        ["PageSpeed Insights (pagespeed.web.dev)", "Core Web Vitals des utilisateurs réels (si votre site a assez de trafic) et données de laboratoire", "Gratuit"],
        ["Test des résultats enrichis (search.google.com/test/rich-results)", "Vérifier que les données structurées sont valides", "Gratuit"],
        ["Screaming Frog SEO Spider", "Explorer le site comme un moteur de recherche : titres, liens cassés, redirections", "Gratuit jusqu'à 500 URL par exploration"],
      ];

  const estados = isEn
    ? [
        ["Pass", "You have checked it and it is fine"],
        ["Fail", "You have checked it and it needs fixing"],
        ["Unknown", "You could not check it (an access or a piece of data is missing). Do not count it as good or bad"],
        ["Not applicable", "That check does not apply to your site (for example, Google Business Profile for an online store with no premises)"],
      ]
    : [
        ["Réussi", "Vous l'avez vérifié et c'est correct"],
        ["Échec", "Vous l'avez vérifié et il faut le corriger"],
        ["Inconnu", "Vous n'avez pas pu le vérifier (un accès ou une donnée manque). Ne le comptez ni comme bon ni comme mauvais"],
        ["Non applicable", "Ce point ne concerne pas votre site (par exemple, la fiche Google pour une boutique en ligne sans local)"],
      ];

  const bloques: Bloque[] = isEn
    ? [
        {
          titulo: "Block 1 · Indexing and crawling (8 checks)",
          intro: "If Google cannot crawl or index a page, that page does not exist for it.",
          puntos: [
            <><strong>The property is in Search Console</strong> and verified. Verifying it by HTML file or DNS is best.</>,
            <><strong>Page indexing report:</strong> review the reasons pages are not indexed. Look especially at &quot;Crawled - currently not indexed&quot; and &quot;Discovered - currently not indexed&quot; for pages that matter to you.</>,
            <><strong>Sitemap submitted with no errors</strong> (Indexing › Sitemaps). It should only include URLs you want indexed that return a 200.</>,
            <><strong>robots.txt does not block important pages.</strong> Google points out that robots.txt is not a way to keep a page out of Google: for that you use <code>noindex</code> or a password.</>,
            <><strong>No key page carries a <code>noindex</code> by mistake.</strong> It happens a lot after a redesign, when the staging configuration gets copied over.</>,
            <><strong>A single version of each URL:</strong> with or without a trailing slash, with or without www, http or https. All of them should 301-redirect to the right version. If the Performance report shows the same page with and without a slash getting impressions separately, it fails.</>,
            <><strong>The page looks the same to Google:</strong> use URL Inspection › Test live URL and check the screenshot and the HTML Google receives. Important content must be in the HTML, not loaded only with JavaScript.</>,
            <><strong>No broken internal links or redirect chains</strong> (Screaming Frog crawl: 4xx codes and chained redirects).</>,
          ],
        },
        {
          titulo: "Block 2 · Speed and mobile experience (6 checks)",
          intro: "Google indexes and ranks based on the mobile version of your site, so always measure on mobile.",
          puntos: [
            <><strong>LCP (loading of the main content) ≤ 2.5 s.</strong></>,
            <><strong>INP (response to a tap or click) ≤ 200 ms.</strong></>,
            <><strong>CLS (visual stability, nothing jumping while it loads) ≤ 0.1.</strong> Google publishes these three thresholds on web.dev and they are measured at the 75th percentile of real visits.</>,
            <><strong>Search Console Core Web Vitals report</strong> with no URLs under &quot;Poor&quot;. If your site has little traffic, the report may be empty: mark it &quot;unknown&quot; and use PageSpeed Insights lab data as a guide.</>,
            <><strong>Images of reasonable weight in a modern format</strong> (WebP or AVIF), especially the main image on each page.</>,
            <><strong>HTTPS across the whole site</strong>, with no mixed-content warnings.</>,
          ],
          nota: "A warning from Google itself: good Core Web Vitals help, but they do not guarantee you will be at the top. They carry more weight when several equally useful pages are competing.",
        },
        {
          titulo: "Block 3 · Content and on-page SEO (8 checks)",
          intro: "This block checks whether each page clearly states what it offers and which search it answers.",
          puntos: [
            <><strong>Each page has its own short, descriptive title.</strong> Google advises against repeating words or stuffing keywords.</>,
            <><strong>One H1 per page</strong> that says what is offered or answered.</>,
            <><strong>One main search per page.</strong> If two of your pages compete for the same search (you will see it in Performance › Queries › Pages), it fails: merge or differentiate them.</>,
            <><strong>The intent matches.</strong> If a guide shows up for searches about hiring a service, or the other way round, Google will rank it far from the top 10.</>,
            <><strong>Service pages answer the client&apos;s questions:</strong> what is included, who it is for, timelines, price or how it is calculated, and how to hire.</>,
            <><strong>Internal linking:</strong> every important page receives links from your other pages with text that describes the destination. No page is left orphaned.</>,
            <><strong>Valid structured data</strong> (Organization or LocalBusiness, BreadcrumbList, FAQPage if there are visible questions). What the markup says must match what can be read on the page.</>,
            <><strong>Searches with many impressions and few clicks</strong> (Performance, last 3 months) have a page that genuinely answers them. They are your opportunity list. To find new searches, you can use the <Link href={planificador} className={a}>Google Ads Keyword Planner</Link>.</>,
          ],
        },
        {
          titulo: "Block 4 · Local SEO and Google Business Profile (4 checks)",
          intro: "If you serve clients in an area, people searching on the map see your profile before your website. If you only sell online with no premises, mark this block as \"not applicable\".",
          puntos: [
            <><strong>The profile name is your business&apos;s real name,</strong> with no added towns or services. It is a Google guideline.</>,
            <><strong>A correct address or service area,</strong> and the same name, phone number and address on your website, your profile and the main directories.</>,
            <><strong>Category, services and opening hours complete and up to date.</strong></>,
            <><strong>Reviews answered,</strong> without asking only happy clients or offering anything in return. Google&apos;s policy prohibits offering incentives for reviews and selectively asking satisfied customers. We explain it in <Link href={resenas} className={a}>how to get Google reviews legally</Link>.</>,
          ],
        },
        {
          titulo: "Block 5 · AI visibility (4 checks)",
          intro: "AI assistants already answer many searches before the person reaches a website. This block checks whether they can read you and whether they cite you.",
          puntos: [
            <><strong>Search Console generative AI report.</strong> Available to all websites since 31/08/2026. It shows how often your URLs appeared in AI Overviews, AI Mode and Discover, by page, country, device and date. It only gives impressions: no clicks or queries.</>,
            <><strong>Your pages can appear in Google&apos;s AI features.</strong> According to Google, the page only has to be indexed and eligible to be shown in Search with a snippet; there are no additional technical requirements. Check you do not have restrictive <code>nosnippet</code> or <code>max-snippet</code> settings by mistake.</>,
            <><strong>robots.txt does not block the AI search crawlers you care about:</strong> OAI-SearchBot (ChatGPT), PerplexityBot, Claude-SearchBot and Claude-User (Claude). Blocking training crawlers is a separate business decision. Google-Extended does not affect Google Search.</>,
            <><strong>Manual test with 5 client questions</strong> in ChatGPT, Perplexity, Gemini and Google&apos;s AI Mode: brand, service, problem, area and comparison. Note whether they mention you, whether the details are correct and which sources they cite. The full method is in our <Link href={geo} className={a}>GEO audit guide</Link>.</>,
          ],
        },
      ]
    : [
        {
          titulo: "Bloc 1 · Indexation et exploration (8 points)",
          intro: "Si Google ne peut pas explorer ni indexer une page, cette page n'existe pas pour lui.",
          puntos: [
            <><strong>La propriété est dans Search Console</strong> et validée. Le mieux est de la valider par fichier HTML ou par DNS.</>,
            <><strong>Rapport Indexation des pages :</strong> examinez les raisons des pages non indexées. Regardez surtout « Explorée, actuellement non indexée » et « Détectée, actuellement non indexée » pour les pages qui comptent pour vous.</>,
            <><strong>Sitemap envoyé et sans erreurs</strong> (Indexation › Sitemaps). Il ne doit contenir que des URL que vous voulez indexer et qui répondent 200.</>,
            <><strong>Le robots.txt ne bloque pas de pages importantes.</strong> Google rappelle que le robots.txt ne sert pas à retirer une page de Google : pour cela, on utilise <code>noindex</code> ou un mot de passe.</>,
            <><strong>Aucune page clé ne porte un <code>noindex</code> par erreur.</strong> Cela arrive souvent après une refonte, quand on recopie la configuration de l&apos;environnement de test.</>,
            <><strong>Une seule version de chaque URL :</strong> avec ou sans barre finale, avec ou sans www, http ou https. Toutes doivent rediriger en 301 vers la bonne version. Si le rapport Performances montre la même page avec et sans barre recevant des impressions séparément, c&apos;est un échec.</>,
            <><strong>Google voit la page comme vous :</strong> utilisez Inspection de l&apos;URL › Tester l&apos;URL en ligne et regardez la capture et le HTML reçus par Google. Le contenu important doit être dans le HTML, pas chargé uniquement en JavaScript.</>,
            <><strong>Aucun lien interne cassé ni chaîne de redirections</strong> (exploration avec Screaming Frog : codes 4xx et redirections en chaîne).</>,
          ],
        },
        {
          titulo: "Bloc 2 · Vitesse et expérience mobile (6 points)",
          intro: "Google indexe et classe à partir de la version mobile de votre site : mesurez donc toujours sur mobile.",
          puntos: [
            <><strong>LCP (chargement du contenu principal) ≤ 2,5 s.</strong></>,
            <><strong>INP (réponse à un toucher ou à un clic) ≤ 200 ms.</strong></>,
            <><strong>CLS (stabilité visuelle, rien ne bouge pendant le chargement) ≤ 0,1.</strong> Google publie ces trois seuils sur web.dev et ils se mesurent au 75e centile des visites réelles.</>,
            <><strong>Rapport Core Web Vitals de Search Console</strong> sans URL « Médiocres ». Si votre site a peu de trafic, le rapport peut être vide : notez alors « inconnu » et servez-vous des données de laboratoire de PageSpeed Insights comme repère.</>,
            <><strong>Images de poids raisonnable et au format moderne</strong> (WebP ou AVIF), surtout l&apos;image principale de chaque page.</>,
            <><strong>HTTPS sur tout le site</strong>, sans avertissement de contenu mixte.</>,
          ],
          nota: "Une précision de Google : de bons Core Web Vitals aident, mais ne garantissent pas d'être en tête. Ils pèsent davantage quand plusieurs pages tout aussi utiles sont en concurrence.",
        },
        {
          titulo: "Bloc 3 · Contenu et SEO on-page (8 points)",
          intro: "Ce bloc vérifie si chaque page dit clairement ce qu'elle propose et à quelle recherche elle répond.",
          puntos: [
            <><strong>Chaque page a son propre titre, court et descriptif.</strong> Google recommande de ne pas répéter de mots ni de bourrer de mots-clés.</>,
            <><strong>Un seul H1 par page</strong>, qui dit ce qui est proposé ou ce à quoi la page répond.</>,
            <><strong>Une recherche principale par page.</strong> Si deux de vos pages se disputent la même recherche (visible dans Performances › Requêtes › Pages), c&apos;est un échec : fusionnez-les ou différenciez-les.</>,
            <><strong>L&apos;intention correspond.</strong> Si un guide apparaît pour des recherches visant à engager un service, ou l&apos;inverse, Google le placera loin du top 10.</>,
            <><strong>Les pages de services répondent aux questions du client :</strong> ce qui est inclus, pour qui, délais, prix ou mode de calcul, et comment commander.</>,
            <><strong>Maillage interne :</strong> chaque page importante reçoit des liens de vos autres pages avec un texte qui décrit la destination. Aucune page orpheline.</>,
            <><strong>Données structurées valides</strong> (Organization ou LocalBusiness, BreadcrumbList, FAQPage s&apos;il y a des questions visibles). Ce que dit le balisage doit correspondre à ce qu&apos;on lit sur la page.</>,
            <><strong>Les recherches avec beaucoup d&apos;impressions et peu de clics</strong> (Performances, 3 derniers mois) ont une page qui y répond vraiment. C&apos;est votre liste d&apos;opportunités. Pour trouver de nouvelles recherches, vous pouvez utiliser le <Link href={planificador} className={a}>Planificateur de mots-clés de Google Ads</Link>.</>,
          ],
        },
        {
          titulo: "Bloc 4 · SEO local et fiche Google (4 points)",
          intro: "Si vous servez des clients dans une zone, ceux qui vous cherchent sur la carte voient votre fiche avant votre site. Si vous vendez uniquement en ligne et sans local, notez ce bloc « non applicable ».",
          puntos: [
            <><strong>Le nom de la fiche est le vrai nom de votre entreprise,</strong> sans villes ni services ajoutés. C&apos;est une règle de Google.</>,
            <><strong>Adresse ou zone desservie correcte,</strong> et mêmes nom, téléphone et adresse sur le site, la fiche et les principaux annuaires.</>,
            <><strong>Catégorie, services et horaires complets et à jour.</strong></>,
            <><strong>Avis avec réponse,</strong> sans les demander uniquement aux clients satisfaits ni offrir quoi que ce soit en échange. La politique de Google interdit d&apos;offrir des contreparties contre des avis et de solliciter sélectivement les clients satisfaits. Nous l&apos;expliquons dans <Link href={resenas} className={a}>comment obtenir des avis Google légalement</Link>.</>,
          ],
        },
        {
          titulo: "Bloc 5 · Visibilité dans l'IA (4 points)",
          intro: "Les assistants d'IA répondent déjà à beaucoup de recherches avant que la personne n'arrive sur un site. Ce bloc vérifie s'ils peuvent vous lire et s'ils vous citent.",
          puntos: [
            <><strong>Rapport IA générative de Search Console.</strong> Disponible pour tous les sites depuis le 31/08/2026. Il montre combien de fois vos URL sont apparues dans AI Overviews, le mode IA et Discover, par page, pays, appareil et date. Il ne donne que des impressions : ni clics ni requêtes.</>,
            <><strong>Vos pages peuvent apparaître dans les fonctions d&apos;IA de Google.</strong> Selon Google, il suffit que la page soit indexée et puisse s&apos;afficher avec un extrait dans la recherche ; il n&apos;y a pas d&apos;exigence technique supplémentaire. Vérifiez que vous n&apos;avez pas de <code>nosnippet</code> ou de <code>max-snippet</code> restrictif par erreur.</>,
            <><strong>Le robots.txt ne bloque pas les robots de recherche d&apos;IA qui vous intéressent :</strong> OAI-SearchBot (ChatGPT), PerplexityBot, Claude-SearchBot et Claude-User (Claude). Bloquer les robots d&apos;entraînement est une décision commerciale à part. Google-Extended n&apos;a pas d&apos;effet sur la recherche Google.</>,
            <><strong>Test manuel avec 5 questions de clients</strong> dans ChatGPT, Perplexity, Gemini et le mode IA de Google : marque, service, problème, zone et comparaison. Notez s&apos;ils vous mentionnent, si les informations sont exactes et quelles sources ils citent. La méthode complète est dans notre <Link href={geo} className={a}>guide d&apos;audit GEO</Link>.</>,
          ],
        },
      ];

  const inicio = bloques.map((_, b) => bloques.slice(0, b).reduce((n, x) => n + x.puntos.length, 1));

  const prioridades = isEn
    ? [
        ["1 · Now", "Key pages not indexed, noindex or blocks by mistake, duplicate URLs without redirects, contact form that does not arrive"],
        ["2 · This month", "Confusing titles and H1s, pages competing with each other, high LCP due to heavy images, Google Business Profile with details different from the website"],
        ["3 · Plan", "Expand service pages, internal linking, structured data, content for searches with impressions and no clicks"],
      ]
    : [
        ["1 · Tout de suite", "Pages clés non indexées, noindex ou blocages par erreur, URL en double sans redirection, formulaire de contact qui n'arrive pas"],
        ["2 · Ce mois-ci", "Titres et H1 confus, pages qui se concurrencent, LCP élevé à cause d'images lourdes, fiche Google avec des informations différentes du site"],
        ["3 · À planifier", "Développer les pages de services, maillage interne, données structurées, contenu pour les recherches avec impressions et sans clics"],
      ];

  const h = isEn
    ? { intro1: "A", intro2: "website audit", intro3: "is an orderly review of everything that stops your site from appearing on Google and turning visits into clients. A basic audit covers five blocks: indexing, speed, content, local presence and AI visibility. Each check has one of four results:", pass: "pass", fail: "fail", unknown: "unknown", na: "not applicable", intro4: "Fix first what fails and matters most.", resumen: "Quick summary", antes: "What you need before you start", antesCab: ["Tool", "What it is for in the audit", "Cost"], antesNota: "If you do not have Search Console yet, set it up before anything else. It is the only source with Google's real data about your site. Other SEO tools estimate.", anotar: "How to record the results", anotarTxt: "Open a spreadsheet with five columns: check, result, evidence (screenshot or figure), priority and owner. Always use the same four results:", anotarCab: ["Result", "When to use it"], priorizar: "How to prioritise what you found", priorizarTxt: "Sort the \"fail\" items with two questions: how much does it affect people finding or contacting you? How much does it cost to fix?", priorizarCab: ["Priority", "What usually goes here"], priorizarNota: "\"Unknown\" items go on a separate list with the missing piece of data, for example \"no access to Search Console\" or \"too little traffic for Core Web Vitals\". Do not mix them with failures.", repetir: "How often to repeat the audit", repetirTxt: "Do a full audit once a year, and also before and after a redesign, a migration or a domain change. Blocks 1 and 5 are worth reviewing every month in Search Console: they change without you touching anything.", repetirLink1: "If you are starting to work on SEO, here is", repetirLink1b: "how long it takes to show results and what moves first", repetirLink2: "And for an overview of where to start, see our", repetirLink2b: "SEO guide for SMEs", pro: "When a professional audit makes sense", proTxt: "This checklist tells you what is wrong. What usually takes more effort is knowing why it happens and what to fix first in your case, especially with migrations, many pages or contradictory data.", ctaT: "Want a second opinion on your website?", ctaD1: "Our free audit reviews the technical state, your visibility in Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 working hours, with no commitment. If you then want us to take care of it, our", ctaD2: "SEO plans and prices", ctaD3: "are published.", ctaB: "Request the free audit", faq: "Frequently asked questions", fuentes: "Sources", rel: "Related services:", back: "← Back to the blog" }
    : { intro1: "Un", intro2: "audit de site web", intro3: "est un examen méthodique de tout ce qui empêche votre site d'apparaître sur Google et de transformer les visites en clients. Un audit de base couvre cinq blocs : indexation, vitesse, contenu, présence locale et visibilité dans l'IA. Chaque point a l'un de ces quatre résultats :", pass: "réussi", fail: "échec", unknown: "inconnu", na: "non applicable", intro4: "On corrige d'abord ce qui échoue et pèse le plus.", resumen: "Résumé rapide", antes: "Ce qu'il vous faut avant de commencer", antesCab: ["Outil", "À quoi il sert dans l'audit", "Coût"], antesNota: "Si vous n'avez pas encore Search Console, configurez-la avant tout. C'est la seule source avec les vraies données de Google sur votre site. Les autres outils SEO font des estimations.", anotar: "Comment noter les résultats", anotarTxt: "Ouvrez un tableur avec cinq colonnes : point, résultat, preuve (capture ou chiffre), priorité et responsable. Utilisez toujours les quatre mêmes résultats :", anotarCab: ["Résultat", "Quand l'utiliser"], priorizar: "Comment prioriser ce que vous avez trouvé", priorizarTxt: "Classez les « échecs » avec deux questions : à quel point cela empêche-t-il qu'on vous trouve ou qu'on vous contacte ? Combien coûte la correction ?", priorizarCab: ["Priorité", "Ce qu'on y trouve en général"], priorizarNota: "Les « inconnus » vont sur une liste à part avec la donnée manquante, par exemple « pas d'accès à Search Console » ou « trop peu de trafic pour les Core Web Vitals ». Ne les mélangez pas avec les échecs.", repetir: "À quelle fréquence refaire l'audit", repetirTxt: "Faites un audit complet une fois par an, ainsi qu'avant et après une refonte, une migration ou un changement de domaine. Les blocs 1 et 5 méritent une revue mensuelle dans Search Console : ils changent sans que vous touchiez à rien.", repetirLink1: "Si vous commencez à travailler le SEO, voici", repetirLink1b: "combien de temps il faut pour voir des résultats et ce qui bouge en premier", repetirLink2: "Et pour une vue d'ensemble de par où commencer, consultez notre", repetirLink2b: "guide SEO pour PME", pro: "Quand un audit professionnel est utile", proTxt: "Cette checklist vous dit ce qui ne va pas. Le plus difficile est souvent de comprendre pourquoi et quoi corriger en premier dans votre cas, surtout avec des migrations, beaucoup de pages ou des données contradictoires.", ctaT: "Vous voulez un deuxième avis sur votre site ?", ctaD1: "Notre audit gratuit examine l'état technique, votre visibilité dans Google et dans les assistants d'IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrées, sans engagement. Si vous voulez ensuite que nous nous en occupions, nos", ctaD2: "offres et tarifs SEO", ctaD3: "sont publiés.", ctaB: "Demander l'audit gratuit", faq: "Questions fréquentes", fuentes: "Sources", rel: "Services associés :", back: "← Retour au blog" };

  const fuentes = [
    { texto: "web.dev: Web Vitals.", url: "https://web.dev/articles/vitals" },
    { texto: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (03/06/2026).", url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
    { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { texto: "Google Search Central: Introduction to robots.txt.", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
    { texto: "Google Search Central: Mobile-first indexing.", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" },
    { texto: "Google Search Central: Page experience.", url: "https://developers.google.com/search/docs/appearance/page-experience" },
    { texto: "Google Search Central: Title links.", url: "https://developers.google.com/search/docs/appearance/title-link" },
    { texto: "Google Business Profile Help: Guidelines for representing your business on Google.", url: "https://support.google.com/business/answer/3038177" },
    { texto: "Google: Prohibited and restricted content (review manipulation).", url: "https://support.google.com/contributionpolicy/answer/7400114" },
    { texto: "Screaming Frog: SEO Spider.", url: "https://www.screamingfrog.co.uk/seo-spider/" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: t.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime={DATE_MODIFIED}>{t.date}</time>
            <AuthorByline lang={lang} />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{t.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.lead}</p>
          <Image src={OG[lang]} alt={t.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {h.intro1} <strong>{h.intro2}</strong> {h.intro3} <strong>{h.pass}</strong>, <strong>{h.fail}</strong>, <strong>{h.unknown}</strong> {isEn ? "or" : "ou"} <strong>{h.na}</strong>. {h.intro4}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">{h.resumen}</h2>
          <ul className="space-y-3">
            {resumen.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">{h.antes}</h2>
          <Tabla cabecera={h.antesCab} filas={herramientas} />
          <p>{h.antesNota}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.anotar}</h2>
          <p>{h.anotarTxt}</p>
          <Tabla cabecera={h.anotarCab} filas={estados} />

          {bloques.map((bloque, b) => (
            <section key={bloque.titulo} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-600">{bloque.titulo}</h2>
              <p>{bloque.intro}</p>
              <ol className="space-y-3">
                {bloque.puntos.map((punto, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                    <span className="text-primary-600 font-bold shrink-0 w-7 text-right">{inicio[b] + i}.</span>
                    <span className="text-gray-600 text-sm">{punto}</span>
                  </li>
                ))}
              </ol>
              {bloque.nota && <p>{bloque.nota}</p>}
              {b === 1 && <BlogBanner variant="seogeogbp" lang={lang} />}
            </section>
          ))}

          <h2 className="text-2xl font-bold text-primary-600">{h.priorizar}</h2>
          <p>{h.priorizarTxt}</p>
          <Tabla cabecera={h.priorizarCab} filas={prioridades} />
          <p>{h.priorizarNota}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.repetir}</h2>
          <p>
            {h.repetirTxt} {h.repetirLink1} <Link href={plazos} className={a}>{h.repetirLink1b}</Link>. {h.repetirLink2} <Link href={pymes} className={a}>{h.repetirLink2b}</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">{h.pro}</h2>
          <p>{h.proTxt}</p>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{h.ctaT}</p>
            <p className="text-gray-600 text-sm mb-4">
              {h.ctaD1} <Link href={href(lang, "/precios-seo/")} className={a}>{h.ctaD2}</Link> {h.ctaD3}
            </p>
            <Link href={href(lang, "/auditoria-digital/")} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">{h.ctaB}</Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{h.faq}</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{h.fuentes}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {fuentes.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">{f.url}</a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            {h.rel} <Link href={href(lang, "/auditoria-digital/")} className={a}>{isEn ? "Free SEO audit" : "Audit SEO gratuit"}</Link> · <Link href={href(lang, "/seo-posicionamiento-web-organico/")} className={a}>SEO</Link> · <Link href={href(lang, "/geo-posicionamiento-ia/")} className={a}>GEO</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{h.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="auditoria-seo-basica" />
    </>
  );
}
