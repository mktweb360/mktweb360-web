import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, ROUTES, urlFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

// 28/10/2026 — versiones EN/FR de /cuanto-tarda-el-seo-en-dar-resultados/ (tema 3 del plan de blog).
// La carpeta FR (seo-combien-de-temps-resultats) reexporta esta página. Plazos: los unificados de la web.

type L = "en" | "fr";
const SLUG: Record<L, string> = { en: "how-long-does-seo-take", fr: "seo-combien-de-temps-resultats" };
const DATE = "2026-10-28";
const OG: Record<L, string> = { en: "/og-how-long-does-seo-take.jpg", fr: "/og-seo-combien-de-temps-resultats.jpg" };

// Ruta del enlace interno en el idioma de la página (si no existe traducción, la versión ES).
function href(lang: L, esPath: string): string {
  const r = ROUTES.find((x) => x.es === esPath);
  return (r && urlFor(r, lang)) || esPath;
}

const TXT = {
  en: {
    title: "How Long Does SEO Take to Work? Timelines by Phase",
    description:
      "SEO usually takes 3 to 6 months to show first results and 6 to 12 months to consolidate, as a guide. What happens each month and how to see it in Search Console.",
    h1: "How long does SEO take to work: what happens month by month and what it depends on",
    lead: "The timeline depends on where your website stands today and who you compete with. Here is what happens in each phase, which Search Console figures move first, and when a delay points to a problem.",
    alt: "Indicative 12-month chart: impressions rise first, then position improves, and clicks and enquiries come last",
    date: "28 October 2026",
    crumb: "How long does SEO take",
    home: "Home",
  },
  fr: {
    title: "Combien de temps faut-il pour que le SEO fonctionne ? Délais par phase",
    description:
      "Le SEO donne généralement ses premiers résultats en 3 à 6 mois et se consolide en 6 à 12 mois, à titre indicatif. Ce qui se passe chaque mois et comment le voir dans Search Console.",
    h1: "Combien de temps faut-il pour que le SEO donne des résultats : mois par mois et de quoi cela dépend",
    lead: "Le délai dépend de l'état actuel de votre site et de vos concurrents. Voici ce qui se passe à chaque phase, quels chiffres de Search Console bougent en premier et quand un retard signale un problème.",
    alt: "Graphique indicatif sur 12 mois : les impressions montent d'abord, puis la position s'améliore, et les clics et contacts arrivent en dernier",
    date: "28 octobre 2026",
    crumb: "Délais du SEO",
    home: "Accueil",
  },
} as const;

function faqs(lang: L) {
  return lang === "en"
    ? [
        { q: "Can SEO be sped up?", a: "You can avoid slowing it down. What shortens timelines most is fixing indexing problems early, focusing each page on one search and working consistently. Paying for links or publishing lots of low-quality content can have the opposite effect." },
        { q: "What happens if I stop doing SEO?", a: "What you have gained does not disappear overnight, but it fades if competitors keep working and your content goes out of date. Maintenance costs less than starting again." },
        { q: "Does GEO (appearing in AI answers) take the same time?", a: "In Google, yes, it goes hand in hand: its AI features use pages that are indexed and eligible for Search. In assistants such as ChatGPT or Perplexity, answers change with the question and the moment, so it is measured with a fixed set of questions repeated every month." },
        { q: "Why do I have impressions but no clicks?", a: "Usually because you appear below the first page, where almost nobody looks, or because the title and description do not invite people in. It is a normal part of the start-up phase, between months 1 and 3." },
        { q: "How long should I give it before deciding whether it works?", a: "At least 6 months of consistent work to judge the trend in impressions and positions, always measured against your starting data." },
      ]
    : [
        { q: "Peut-on accélérer le SEO ?", a: "On peut surtout éviter de le ralentir. Ce qui raccourcit le plus les délais, c'est de corriger tôt les problèmes d'indexation, de centrer chaque page sur une recherche et de travailler avec régularité. Acheter des liens ou publier beaucoup de contenu de faible qualité peut avoir l'effet inverse." },
        { q: "Que se passe-t-il si j'arrête le SEO ?", a: "Les acquis ne disparaissent pas du jour au lendemain, mais ils s'érodent si les concurrents continuent et que votre contenu vieillit. L'entretien coûte moins cher que de repartir de zéro." },
        { q: "Le GEO (apparaître dans les réponses des IA) prend-il le même temps ?", a: "Chez Google, oui, les deux vont de pair : ses fonctions d'IA utilisent des pages indexées et éligibles à la recherche. Dans des assistants comme ChatGPT ou Perplexity, les réponses varient selon la question et le moment ; on le mesure donc avec une série fixe de questions répétée chaque mois." },
        { q: "Pourquoi ai-je des impressions mais pas de clics ?", a: "En général parce que vous apparaissez après la première page, où presque personne ne regarde, ou parce que le titre et la description ne donnent pas envie de cliquer. C'est normal pendant la phase de démarrage, entre le mois 1 et le mois 3." },
        { q: "Combien de temps attendre avant de juger si ça fonctionne ?", a: "Au moins 6 mois de travail régulier pour évaluer la tendance des impressions et des positions, toujours en comparant avec les données de départ." },
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

const a = "text-accent-500 hover:underline";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const t = TXT[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUG[lang]}/`;
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: alternatesFor(`/${lang}/${SLUG[lang]}/`) ?? { canonical: url },
    openGraph: { title: `${t.title} | Mkt Web 360`, description: t.description, url, type: "article", images: [{ url: OG[lang], width: 1200, height: 630 }] },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const isEn = lang === "en";
  const t = TXT[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUG[lang]}/`;
  const FAQS = faqs(lang);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.h1,
    description: t.description,
    inLanguage: lang,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE,
    dateModified: DATE,
    image: `https://www.mktweb360.com${OG[lang]}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const auditoria = href(lang, "/auditoria-seo-basica/");
  const diagnostico = href(lang, "/auditoria-digital/");

  const intro = isEn ? (
    <>With consistent work, a website&apos;s SEO usually starts to show visible results <strong>between 3 and 6 months</strong>, and consolidates <strong>between 6 and 12 months</strong>. These are indicative timelines: they depend on the state of the site at the start, the competition in your sector and what you do each month. A local business&apos;s Google Business Profile usually moves sooner, in 1-2 months. Nobody can guarantee you a specific position, and Google says so explicitly.</>
  ) : (
    <>Avec un travail régulier, le SEO d&apos;un site commence en général à donner des résultats visibles <strong>entre 3 et 6 mois</strong>, et se consolide <strong>entre 6 et 12 mois</strong>. Ce sont des délais indicatifs : ils dépendent de l&apos;état du site au départ, de la concurrence de votre secteur et de ce que vous faites chaque mois. La fiche Google d&apos;une entreprise locale bouge en général plus tôt, en 1 à 2 mois. Personne ne peut vous garantir une position précise, et Google le dit expressément.</>
  );

  const resumen: ReactNode[] = isEn
    ? [
        <><strong>First results:</strong> 3-6 months. <strong>Consolidation:</strong> 6-12 months. Indicative, not a promise.</>,
        <>The first thing to move is <strong>impressions</strong>, then <strong>average position</strong>, and finally <strong>clicks and enquiries</strong>.</>,
        <>According to Google, some changes show up within hours and others can take several months.</>,
        <><strong>Local SEO and Google Business Profile:</strong> 1-2 months, because you compete with few businesses in your area.</>,
        <>If impressions have not moved after 6 months, time is not the problem: run a <Link href={auditoria} className={a}>website audit</Link>.</>,
      ]
    : [
        <><strong>Premiers résultats :</strong> 3 à 6 mois. <strong>Consolidation :</strong> 6 à 12 mois. Indicatif, pas une promesse.</>,
        <>Ce qui bouge en premier, ce sont les <strong>impressions</strong>, puis la <strong>position moyenne</strong>, et enfin les <strong>clics et les contacts</strong>.</>,
        <>Selon Google, certains changements se voient en quelques heures et d&apos;autres peuvent prendre plusieurs mois.</>,
        <><strong>SEO local et fiche Google :</strong> 1 à 2 mois, car vous êtes en concurrence avec peu d&apos;entreprises de votre zone.</>,
        <>Si les impressions n&apos;ont pas bougé au bout de 6 mois, le problème n&apos;est pas le temps : faites un <Link href={auditoria} className={a}>audit de votre site</Link>.</>,
      ];

  const esperas: ReactNode[] = isEn
    ? [
        <><strong>Google has to crawl and index the changes.</strong> According to its documentation, crawling can take &quot;anywhere from a few days to a few weeks&quot;, and requesting indexing does not guarantee the page will appear.</>,
        <><strong>Google has to assess the page against the others.</strong> Its SEO starter guide puts it this way: some changes take effect within a few hours, others can take several months.</>,
        <><strong>Authority builds up.</strong> Mentions, links and reviews arrive gradually, and they are what separates equally good pages.</>,
      ]
    : [
        <><strong>Google doit explorer et indexer les changements.</strong> Selon sa documentation, l&apos;exploration peut prendre « de quelques jours à quelques semaines », et demander l&apos;indexation ne garantit pas que la page apparaisse.</>,
        <><strong>Google doit évaluer la page face aux autres.</strong> Son guide de démarrage SEO le résume ainsi : certains changements prennent effet en quelques heures, d&apos;autres peuvent prendre plusieurs mois.</>,
        <><strong>L&apos;autorité s&apos;accumule.</strong> Les mentions, les liens et les avis arrivent peu à peu, et ce sont eux qui départagent des pages de qualité égale.</>,
      ];

  const fases = isEn
    ? [
        ["Month 0-1 · Basics", "Audit, fixing indexing and technical errors, keyword map (one main search per page)", "Pages move to \"indexed\". Few changes in Performance yet"],
        ["Months 1-3 · Start-up", "Service pages rewritten, internal linking, complete Google Business Profile, first content", "Impressions rise and new searches appear, many in positions 20-50"],
        ["Months 3-6 · First results", "New content every month, titles with low click-through rate adjusted, first mentions and links", "Average position improves and some searches reach page one. First clicks from service searches"],
        ["Months 6-12 · Consolidation", "Expand what works, build authority, update content", "More stable clicks and enquiries coming from organic search"],
      ]
    : [
        ["Mois 0-1 · Bases", "Audit, correction de l'indexation et des erreurs techniques, carte des mots-clés (une recherche principale par page)", "Des pages passent à « indexée ». Encore peu de changements dans Performances"],
        ["Mois 1-3 · Démarrage", "Pages de services réécrites, maillage interne, fiche Google complète, premiers contenus", "Les impressions montent et de nouvelles recherches apparaissent, souvent en positions 20-50"],
        ["Mois 3-6 · Premiers résultats", "Nouveau contenu chaque mois, titres à faible taux de clics ajustés, premières mentions et premiers liens", "La position moyenne s'améliore et certaines recherches entrent en première page. Premiers clics sur des recherches de services"],
        ["Mois 6-12 · Consolidation", "Développer ce qui fonctionne, renforcer l'autorité, mettre à jour les contenus", "Clics plus stables et contacts issus du référencement naturel"],
      ];

  const variables = isEn
    ? [
        ["Starting point", "Indexed site, no technical errors", "Unindexed pages, botched migration, duplicate URLs"],
        ["Competition", "Niche or local searches with few strong competitors", "National searches with big brands and media"],
        ["Age and authority", "Domain with history, real mentions and reviews", "New domain, no mentions"],
        ["Intent", "The page answers exactly what is searched", "One page tries to answer everything"],
        ["Consistency", "Work every month for a year", "Bursts of work and idle months"],
      ]
    : [
        ["Point de départ", "Site indexé, sans erreurs techniques", "Pages non indexées, migration ratée, URL en double"],
        ["Concurrence", "Recherches de niche ou locales, avec peu de concurrents forts", "Recherches nationales avec de grandes marques et des médias"],
        ["Ancienneté et autorité", "Domaine avec un historique, de vraies mentions et de vrais avis", "Domaine neuf, sans mentions"],
        ["Intention", "La page répond exactement à ce qui est recherché", "Une page qui veut répondre à tout"],
        ["Régularité", "Du travail chaque mois pendant un an", "Des pics de travail et des mois à l'arrêt"],
      ];

  const metricas: ReactNode[] = isEn
    ? [
        <><strong>Impressions:</strong> they should rise before anything else. It is the sign that Google shows you for more searches.</>,
        <><strong>Number of distinct queries:</strong> if it grows, Google understands better what your site is about.</>,
        <><strong>Average position for the searches that matter to you:</strong> look at each search, not the sitewide average, which mixes in searches unrelated to your business.</>,
        <><strong>Clicks and CTR:</strong> if you have page-one impressions but few clicks, review the title and description.</>,
        <><strong>Real enquiries:</strong> forms, calls and orders coming from organic search. That is what counts for the business.</>,
      ]
    : [
        <><strong>Impressions :</strong> elles doivent monter avant tout le reste. C&apos;est le signe que Google vous montre pour davantage de recherches.</>,
        <><strong>Nombre de requêtes différentes :</strong> s&apos;il augmente, Google comprend mieux le sujet de votre site.</>,
        <><strong>Position moyenne des recherches qui comptent pour vous :</strong> regardez celle de chaque recherche, pas la moyenne du site, qui mélange des recherches sans rapport avec votre activité.</>,
        <><strong>Clics et CTR :</strong> si vous avez des impressions en première page mais peu de clics, revoyez le titre et la description.</>,
        <><strong>Contacts réels :</strong> formulaires, appels et commandes issus du référencement naturel. C&apos;est ce qui compte pour l&apos;entreprise.</>,
      ];

  const actualizaciones = isEn
    ? [
        ["Discover (February)", "05/02/2026", "21 days"],
        ["Spam (March)", "24/03/2026", "less than 1 day"],
        ["Core update (March)", "27/03/2026", "12 days"],
        ["Core update (May)", "21/05/2026", "11 days"],
        ["Spam (June)", "24/06/2026", "2 days"],
        ["Spam (August)", "18/08/2026", "2 days"],
        ["Spam (September)", "24/09/2026", "13 days"],
      ]
    : [
        ["Discover (février)", "05/02/2026", "21 jours"],
        ["Spam (mars)", "24/03/2026", "moins d'1 jour"],
        ["Core update (mars)", "27/03/2026", "12 jours"],
        ["Core update (mai)", "21/05/2026", "11 jours"],
        ["Spam (juin)", "24/06/2026", "2 jours"],
        ["Spam (août)", "18/08/2026", "2 jours"],
        ["Spam (septembre)", "24/09/2026", "13 jours"],
      ];

  const alarmas: ReactNode[] = isEn
    ? [
        <>After 3 months your main pages <strong>are still not indexed</strong>.</>,
        <>Impressions <strong>have not risen at all</strong> in 6 months of work.</>,
        <>You were promised <strong>a specific position or guaranteed results</strong>. Google warns that nobody can guarantee the top spot.</>,
        <>You get visits but <strong>no enquiries</strong>: then the problem is the page (offer, form, trust), not SEO.</>,
        <><strong>Two of your pages take turns</strong> on the same search and neither settles.</>,
      ]
    : [
        <>Au bout de 3 mois, vos pages principales <strong>ne sont toujours pas indexées</strong>.</>,
        <>Les impressions <strong>n&apos;augmentent pas du tout</strong> en 6 mois de travail.</>,
        <>On vous a promis <strong>une position précise ou des résultats garantis</strong>. Google prévient que personne ne peut garantir la première place.</>,
        <>Vous avez des visites mais <strong>aucun contact</strong> : le problème est alors la page (offre, formulaire, confiance), pas le SEO.</>,
        <><strong>Deux de vos pages se relaient</strong> sur la même recherche et aucune ne se stabilise.</>,
      ];

  const fuentes = [
    { texto: "Google Search Central: Do you need an SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
    { texto: "Google Search Central: SEO Starter Guide.", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { texto: "Google Search Central: Ask Google to recrawl your URLs.", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" },
    { texto: isEn ? "Google Search Status Dashboard: 2026 ranking incidents (checked 28/10/2026)." : "Google Search Status Dashboard : incidents de classement 2026 (consulté le 28/10/2026).", url: "https://status.search.google.com/summary" },
    { texto: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (03/06/2026).", url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
    { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  ];

  const h = isEn
    ? { resumen: "Quick summary", porque: "Why SEO takes time", porqueIntro: "There are three waits that add up:", fases: "What happens in each phase", fasesCab: ["Phase", "What is done", "What you see in Search Console"], fasesNota: "The phases overlap. A site that has been around for years and has some authority can skip part of the start-up. A brand-new one starts from zero.", variables: "What makes it faster or slower", varCab: ["Factor", "Speeds it up", "Slows it down"], local: "Why local SEO is usually faster", sc: "How to tell in Search Console whether you are on track", scIntro: "Always compare the same period (for example, the last 3 months against the previous 3) and the same country:", scIA: "Since 31 August 2026, Search Console also shows every website how often it appears in Google's AI answers (AI Overviews and AI Mode). As Google only uses indexed pages for those answers, SEO work is also the foundation for appearing in them.", upd: "And do Google updates change the timeline?", updIntro: "They can bring it forward or push it back by a few weeks, but they do not change what works. In 2026, Google's official Search status dashboard lists:", updCab: ["Update", "Start", "Duration"], updNota: "If your data changes sharply on those dates, compare before and after the update before touching anything.", alarm: "Warning signs: when the problem is not time", alarmNota: "In any of these cases, a website audit with the 30-point checklist tells you where to start.", ctaT: "Want to know where your website stands?", ctaD: "Our free audit reviews the technical state, your visibility in Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 working hours, with no commitment.", ctaB: "Request the free audit", faq: "Frequently asked questions", fuentes: "Sources", rel: "Related services:", back: "← Back to the blog" }
    : { resumen: "Résumé rapide", porque: "Pourquoi le SEO prend du temps", porqueIntro: "Trois attentes s'additionnent :", fases: "Ce qui se passe à chaque phase", fasesCab: ["Phase", "Ce qui est fait", "Ce que l'on voit dans Search Console"], fasesNota: "Les phases se chevauchent. Un site qui existe depuis des années et qui a un peu d'autorité peut sauter une partie du démarrage. Un site tout neuf part de zéro.", variables: "Ce qui accélère ou ralentit", varCab: ["Facteur", "Accélère", "Ralentit"], local: "Pourquoi le SEO local va en général plus vite", sc: "Comment savoir dans Search Console si vous êtes sur la bonne voie", scIntro: "Comparez toujours la même période (par exemple, les 3 derniers mois avec les 3 précédents) et le même pays :", scIA: "Depuis le 31 août 2026, Search Console indique aussi à tous les sites combien de fois ils apparaissent dans les réponses d'IA de Google (AI Overviews et mode IA). Comme Google n'utilise que des pages indexées pour ces réponses, le travail SEO est aussi la base pour y apparaître.", upd: "Et les mises à jour de Google, changent-elles le délai ?", updIntro: "Elles peuvent l'avancer ou le retarder de quelques semaines, mais elles ne changent pas ce qui fonctionne. En 2026, le tableau de bord officiel de l'état de la recherche Google recense :", updCab: ["Mise à jour", "Début", "Durée"], updNota: "Si vos données changent brusquement à ces dates, comparez avant et après la mise à jour avant de toucher à quoi que ce soit.", alarm: "Signaux d'alerte : quand le problème n'est pas le temps", alarmNota: "Dans tous ces cas, un audit de site avec la checklist de 30 points vous indique par où commencer.", ctaT: "Vous voulez savoir où en est votre site ?", ctaD: "Notre audit gratuit examine l'état technique, votre visibilité dans Google et dans les assistants d'IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrées, sans engagement.", ctaB: "Demander l'audit gratuit", faq: "Questions fréquentes", fuentes: "Sources", rel: "Services associés :", back: "← Retour au blog" };

  const localTxt = isEn ? (
    <>In a local search such as &quot;plumber near me&quot;, Google compares few businesses: the ones in your area. A complete Google Business Profile with the same details as your website, plus answered reviews, usually shows results in 1-2 months. National searches are more competitive and move more slowly.</>
  ) : (
    <>Dans une recherche locale comme « plombier près de chez moi », Google compare peu d&apos;entreprises : celles de votre zone. Une fiche Google complète, avec les mêmes informations que votre site, et des avis auxquels vous répondez, donne en général des résultats en 1 à 2 mois. Les recherches nationales sont plus concurrentielles et avancent plus lentement.</>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: t.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{t.date}</time>
            <AuthorByline lang={lang} />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{t.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.lead}</p>
          <Image src={OG[lang]} alt={t.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{intro}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.resumen}</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">{h.porque}</h2>
          <p>{h.porqueIntro}</p>
          <Lista items={esperas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">{h.fases}</h2>
          <Tabla cabecera={h.fasesCab} filas={fases} />
          <p>{h.fasesNota}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.variables}</h2>
          <Tabla cabecera={h.varCab} filas={variables} />

          <h2 className="text-2xl font-bold text-primary-600">{h.local}</h2>
          <p>{localTxt}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.sc}</h2>
          <p>{h.scIntro}</p>
          <Lista items={metricas} numerada />
          <p>{h.scIA}</p>

          <BlogBanner variant="seogeogbp" lang={lang} />

          <h2 className="text-2xl font-bold text-primary-600">{h.upd}</h2>
          <p>{h.updIntro}</p>
          <Tabla cabecera={h.updCab} filas={actualizaciones} />
          <p>{h.updNota}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.alarm}</h2>
          <Lista items={alarmas} />
          <p><Link href={auditoria} className={a}>{h.alarmNota}</Link></p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{h.ctaT}</p>
            <p className="text-gray-600 text-sm mb-4">{h.ctaD}</p>
            <Link href={diagnostico} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">{h.ctaB}</Link>
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
            {h.rel} <Link href={href(lang, "/seo-posicionamiento-web-organico/")} className={a}>SEO</Link> · <Link href={href(lang, "/precios-seo/")} className={a}>{isEn ? "SEO pricing" : "Tarifs SEO"}</Link> · <Link href={href(lang, "/seo-local/")} className={a}>{isEn ? "Local SEO" : "SEO local"}</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{h.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cuanto-tarda-el-seo-en-dar-resultados" />
    </>
  );
}
