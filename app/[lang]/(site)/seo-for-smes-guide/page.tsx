import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, ROUTES, urlFor } from "@/lib/i18n/routes";
import { planesSeo, type PlanSeo } from "@/lib/planes-seo";
import { preciosPlanesSeo } from "@/lib/precios-planes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

// 28/10/2026 — versiones EN/FR de /seo-para-pymes-guia/ (tema 2 del plan de blog).
// La carpeta FR (seo-pour-pme-guide) reexporta esta página. Precios: catálogo de MktOS, nunca a mano.

type L = "en" | "fr";
const SLUG: Record<L, string> = { en: "seo-for-smes-guide", fr: "seo-pour-pme-guide" };
const DATE = "2026-10-28";
const OG: Record<L, string> = { en: "/og-seo-for-smes-guide.jpg", fr: "/og-seo-pour-pme-guide.jpg" };
const ORDEN: PlanSeo["id"][] = ["local", "pyme", "crecimiento", "ecommerce-s", "ecommerce-m"];

function href(lang: L, esPath: string): string {
  const r = ROUTES.find((x) => x.es === esPath);
  return (r && urlFor(r, lang)) || esPath;
}

const TXT = {
  en: {
    title: "SEO for SMEs: What to Do, What It Costs and Where to Start",
    description:
      "SEO for SMEs in Spain (2026): what you can do yourself this week, what is worth delegating, what an SEO plan costs and how long it takes to show results.",
    h1: "SEO for SMEs in 2026: a practical guide to getting started without wasting money",
    lead: "What SEO means for a small business, what you can do yourself this very week, what is worth delegating, what it costs and how long it takes. No ranking promises.",
    alt: "Comic strip: a shop owner wonders why nobody finds them on Google, then points to their SEO to-do list for the week",
    date: "28 October 2026",
    crumb: "SEO for SMEs",
    home: "Home",
  },
  fr: {
    title: "SEO pour PME : que faire, combien ça coûte et par où commencer",
    description:
      "SEO pour PME en Espagne (2026) : ce que vous pouvez faire vous-même cette semaine, ce qu'il vaut mieux déléguer, combien coûte un plan SEO et en quel délai.",
    h1: "SEO pour PME en 2026 : guide pratique pour démarrer sans gaspiller d'argent",
    lead: "Ce que le SEO représente pour une petite entreprise, ce que vous pouvez faire vous-même dès cette semaine, ce qu'il vaut mieux déléguer, combien ça coûte et combien de temps il faut. Sans promesse de positions.",
    alt: "Bande dessinée : une commerçante se demande pourquoi personne ne la trouve sur Google, puis montre sa liste de tâches SEO de la semaine",
    date: "28 octobre 2026",
    crumb: "SEO pour PME",
    home: "Accueil",
  },
} as const;

function faqs(lang: L, min: number, max: number) {
  return lang === "en"
    ? [
        { q: "Is SEO worth it for a small business?", a: "It is usually worth it when people are searching for what you sell and you can keep the work going for at least 6-12 months. If you need clients next week, Google Ads delivers results sooner, and the two can be combined." },
        { q: "Can I do SEO myself?", a: "Yes, part of it: Search Console, your Google Business Profile, reviews and the copy for your services. The technical side and the keyword strategy are what most businesses delegate, because a mistake there can remove pages from Google." },
        { q: "How much does SEO cost for an SME?", a: `In our published plans with no minimum term, between €${min} and €${max} per month excluding VAT, depending on the size of the website, the number of Google Business Profiles and the monthly content. Stores with more than 5,000 products or several languages are quoted individually.` },
        { q: "What is the difference between local SEO and SEO for SMEs?", a: "Local SEO is one part of an SME's SEO: it focuses on appearing in your area, especially on Google Maps and in searches that include a town or \"near me\". If you sell across Spain or online, local SEO matters less." },
        { q: "Is SEO still useful with AI?", a: "Yes. Google states that its AI features use pages that are indexed and eligible for Search, so SEO is the foundation for appearing in those answers too." },
      ]
    : [
        { q: "Le SEO vaut-il la peine pour une petite entreprise ?", a: "En général oui, quand des gens recherchent ce que vous vendez et que vous pouvez maintenir le travail au moins 6 à 12 mois. Si vous avez besoin de clients la semaine prochaine, Google Ads donne des résultats plus vite, et les deux peuvent se combiner." },
        { q: "Puis-je faire du SEO moi-même ?", a: "Oui, une partie : Search Console, la fiche Google, les avis et les textes de vos services. La partie technique et la stratégie de mots-clés sont ce que l'on délègue le plus, car une erreur à ce niveau peut faire disparaître des pages de Google." },
        { q: "Combien coûte le SEO pour une PME ?", a: `Dans nos offres publiées sans engagement, entre ${min} € et ${max} € HT par mois, selon la taille du site, le nombre de fiches Google et le contenu mensuel. Les boutiques de plus de 5 000 produits ou multilingues font l'objet d'un devis.` },
        { q: "Quelle différence entre SEO local et SEO pour PME ?", a: "Le SEO local est une partie du SEO d'une PME : il vise à apparaître dans votre zone, surtout sur Google Maps et dans les recherches avec une ville ou « près de chez moi ». Si vous vendez dans toute l'Espagne ou en ligne, le SEO local pèse moins." },
        { q: "Le SEO sert-il encore avec l'IA ?", a: "Oui. Google indique que ses fonctions d'IA utilisent des pages indexées et éligibles à la recherche ; le SEO est donc la base pour apparaître aussi dans ces réponses." },
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

  const { precios } = await preciosPlanesSeo();
  const planes = planesSeo(lang, precios);
  const tabla = ORDEN.map((id) => planes.find((p) => p.id === id)).filter((p): p is PlanSeo => !!p && p.precio !== null);
  const importes = tabla.map((p) => p.precio as number);
  const min = Math.min(...importes);
  const max = Math.max(...importes);
  const FAQS = faqs(lang, min, max);
  const precio = (n: number) => (isEn ? `€${n}` : `${n} €`);

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
  const plazos = href(lang, "/cuanto-tarda-el-seo-en-dar-resultados/");

  const intro = isEn ? (
    <><strong>SEO for SMEs</strong> is the work of getting your website to appear on Google when a potential client searches for what you sell, without paying for each click. For a small business it usually covers five fronts: Google being able to read the site, each page answering a specific search, a complete Google Business Profile, other websites mentioning you, and AI assistants being able to cite you. First results usually arrive between 3 and 6 months.</>
  ) : (
    <>Le <strong>SEO pour PME</strong>, c&apos;est le travail qui permet à votre site d&apos;apparaître sur Google quand un client potentiel recherche ce que vous vendez, sans payer chaque clic. Pour une petite entreprise, il couvre en général cinq fronts : que Google puisse lire le site, que chaque page réponde à une recherche précise, que la fiche Google soit complète, que d&apos;autres sites parlent de vous et que les assistants d&apos;IA puissent vous citer. Les premiers résultats arrivent en général entre 3 et 6 mois.</>
  );

  const resumen: ReactNode[] = isEn
    ? [
        <><strong>The starting point matters:</strong> according to Spain&apos;s National Statistics Institute (INE, 22/10/2026), only 36.2% of Spanish businesses with fewer than 10 employees have a website, compared with 82.9% of those with 10 or more.</>,
        <><strong>Some tasks you can do yourself,</strong> such as setting up Search Console, completing your Google Business Profile or rewriting your service pages.</>,
        <><strong>Worth delegating:</strong> the technical side, the keyword strategy and monthly monitoring.</>,
        <><strong>Price:</strong> in our published plans it ranges from {precio(min)} to {precio(max)} per month excluding VAT, depending on the size of the website.</>,
        <><strong>Indicative timelines:</strong> 3-6 months for first results and 6-12 to consolidate. Nobody can guarantee you a ranking.</>,
      ]
    : [
        <><strong>Le point de départ compte :</strong> selon l&apos;Institut national de la statistique espagnol (INE, 22/10/2026), seules 36,2 % des entreprises espagnoles de moins de 10 salariés ont un site web, contre 82,9 % de celles de 10 salariés ou plus.</>,
        <><strong>Certaines tâches sont à votre portée,</strong> comme activer Search Console, compléter votre fiche Google ou réécrire vos pages de services.</>,
        <><strong>Mieux vaut déléguer</strong> la technique, la stratégie de mots-clés et le suivi mensuel.</>,
        <><strong>Prix :</strong> dans nos offres publiées, de {precio(min)} à {precio(max)} HT par mois, selon la taille du site.</>,
        <><strong>Délais indicatifs :</strong> 3 à 6 mois pour les premiers résultats et 6 à 12 pour consolider. Personne ne peut vous garantir une position.</>,
      ];

  const frentes = isEn
    ? [
        ["Technical", "Google can crawl, index and load your site quickly on mobile", "Key pages indexed in Search Console, Core Web Vitals in the green"],
        ["Content", "One page per service and per main search, answering what the client asks", "Impressions for service searches go up"],
        ["Local", "Complete Google Business Profile and the same details on your site and in directories", "More calls and visits from the profile"],
        ["Authority", "Real mentions and links from clients, suppliers, associations and the press", "New domains start linking to you"],
        ["AI", "Content that assistants can read and cite, and consistent business details", "You appear in Search Console's generative AI report and in test questions"],
      ]
    : [
        ["Technique", "Google peut explorer, indexer et charger rapidement votre site sur mobile", "Pages clés indexées dans Search Console, Core Web Vitals au vert"],
        ["Contenu", "Une page par service et par recherche principale, qui répond aux questions du client", "Les impressions des recherches de services augmentent"],
        ["Local", "Fiche Google complète et mêmes informations sur le site et dans les annuaires", "Plus d'appels et de visites depuis la fiche"],
        ["Autorité", "De vraies mentions et de vrais liens de clients, fournisseurs, associations et médias", "De nouveaux domaines font un lien vers vous"],
        ["IA", "Un contenu que les assistants peuvent lire et citer, et des informations d'entreprise cohérentes", "Vous apparaissez dans le rapport IA générative de Search Console et dans les questions test"],
      ];

  const tareas: ReactNode[] = isEn
    ? [
        <><strong>Set up Google Search Console</strong> and verify it with an HTML file or DNS. It is free and gives you Google&apos;s real data.</>,
        <><strong>Complete your Google Business Profile:</strong> the real business name, category, services, opening hours and your own photos.</>,
        <><strong>Write down 10 questions</strong> your clients always ask. Each one is a potential piece of content.</>,
        <><strong>Check that each service has its own page,</strong> with a title that says what you do and, if you work in an area, where.</>,
        <><strong>Ask all your clients for reviews,</strong> not only the ones you think are happy, and reply to every one.</>,
        <><strong>Make sure your name, phone number and address match</strong> on your website, your profile and the directories you appear in.</>,
        <><strong>Go through the <Link href={auditoria} className={a}>30-point website audit checklist</Link></strong> and note what fails.</>,
      ]
    : [
        <><strong>Activez Google Search Console</strong> et validez-la par fichier HTML ou par DNS. C&apos;est gratuit et vous donne les vraies données de Google.</>,
        <><strong>Complétez votre fiche Google :</strong> le vrai nom de l&apos;entreprise, la catégorie, les services, les horaires et vos propres photos.</>,
        <><strong>Notez 10 questions</strong> que vos clients vous posent toujours. Chacune est un contenu potentiel.</>,
        <><strong>Vérifiez que chaque service a sa propre page,</strong> avec un titre qui dit ce que vous faites et, si vous travaillez sur une zone, où.</>,
        <><strong>Demandez des avis à tous vos clients,</strong> pas seulement à ceux que vous pensez satisfaits, et répondez à tous.</>,
        <><strong>Vérifiez que votre nom, votre téléphone et votre adresse sont identiques</strong> sur le site, la fiche et les annuaires où vous figurez.</>,
        <><strong>Passez en revue la <Link href={auditoria} className={a}>checklist d&apos;audit de site en 30 points</Link></strong> et notez ce qui échoue.</>,
      ];

  const delegar: ReactNode[] = isEn
    ? [
        <><strong>Technical SEO:</strong> redirects, indexing, speed and structured data. A mistake here can remove pages from Google without you noticing.</>,
        <><strong>Keyword strategy:</strong> deciding which search each page targets so they do not compete with each other.</>,
        <><strong>Regular content:</strong> writing every month takes time. Delegating does not mean staying out of it: nobody knows your business like you do.</>,
        <><strong>Measurement:</strong> comparing the same data every month (Search Console and real enquiries) and deciding what to adjust.</>,
      ]
    : [
        <><strong>Le SEO technique :</strong> redirections, indexation, vitesse et données structurées. Une erreur ici peut faire disparaître des pages de Google sans que vous le remarquiez.</>,
        <><strong>La stratégie de mots-clés :</strong> décider quelle recherche cible chaque page pour qu&apos;elles ne se concurrencent pas.</>,
        <><strong>Le contenu régulier :</strong> écrire chaque mois prend du temps. Déléguer ne veut pas dire ne pas participer : personne ne connaît votre entreprise mieux que vous.</>,
        <><strong>La mesure :</strong> comparer chaque mois les mêmes données (Search Console et contacts réels) et décider quoi ajuster.</>,
      ];

  const preguntas: ReactNode[] = isEn
    ? [
        <><strong>What results do you expect, and when?</strong> Be wary of anyone who promises a ranking: Google warns that nobody can guarantee the top spot.</>,
        <><strong>What will you do in the first month?</strong> It should start with an audit and a keyword map, not with publishing for the sake of it.</>,
        <><strong>How will we measure it?</strong> With Search Console and real enquiries, not with metrics from a proprietary tool you cannot check.</>,
        <><strong>Who does the work?</strong> It is worth knowing whether the person you talk to does it or it is subcontracted.</>,
        <><strong>Is there a minimum term?</strong> And what happens to the content and the accesses if you leave.</>,
        <><strong>How do you get links?</strong> Techniques that manipulate links go against Google&apos;s policies and put the site at risk.</>,
      ]
    : [
        <><strong>Quels résultats attendez-vous, et dans quel délai ?</strong> Méfiez-vous de quiconque promet une position : Google prévient que personne ne peut garantir la première place.</>,
        <><strong>Que ferez-vous le premier mois ?</strong> Il faut commencer par un audit et une carte des mots-clés, pas par publier pour publier.</>,
        <><strong>Comment allons-nous mesurer ?</strong> Avec Search Console et les contacts réels, pas avec les indicateurs d&apos;un outil maison que vous ne pouvez pas vérifier.</>,
        <><strong>Qui fait le travail ?</strong> Il est utile de savoir si c&apos;est la personne avec qui vous parlez ou si c&apos;est sous-traité.</>,
        <><strong>Y a-t-il un engagement ?</strong> Et que deviennent le contenu et les accès si vous arrêtez.</>,
        <><strong>Comment obtenez-vous des liens ?</strong> Les techniques qui manipulent les liens vont à l&apos;encontre des règles de Google et mettent le site en danger.</>,
      ];

  const h = isEn
    ? { resumen: "Quick summary", porque: "Why SEO makes sense for an SME", porque1: "An SME cannot compete with a large company on advertising budget, but it can on specific searches: a service in an area, a very specific problem in its sector, a question its clients always ask. There, a well-built website and a well-kept Google Business Profile compete on equal terms.", porque2: "What is more, most small businesses start from scratch. With 36.2% of micro-businesses having a website (INE, 2026), a page that properly answers what your clients search for already sets you apart from much of your local competition.", frentes: "The 5 fronts of SEO for an SME", frentesCab: ["Front", "What it is", "Sign it is working"], tareas: "What you can do yourself this week", delegar: "What is worth delegating, and why", coste: "How much SEO costs for an SME", costeIntro: "It depends on the size of the website, how many Google Business Profiles you have and how much content is needed. These are our published plans, excluding VAT and with no minimum term:", costeCab: ["Plan", "Who it is for", "Price per month (excl. VAT)"], costeNota1: "What each plan includes and its limits are on our", costeLink: "SEO pricing page", plazos: "How long SEO takes to show", plazosTxt: "As a guide, first results arrive between 3 and 6 months and consolidate between 6 and 12. The Google Business Profile usually moves sooner, in 1-2 months. Impressions in Search Console rise first; clicks and enquiries come later.", plazosLink: "We explain it phase by phase here", elegir: "How to choose who to hire: 6 questions", empezar: "Where to start", empezarTxt: "If you do not know the state of your website, start there. You can do it yourself with the", empezarCheck: "30-point checklist", empezarTxt2: "or request our free audit. If you then want us to take care of it, this is our", empezarServ: "SEO service", ctaT: "Free audit of your website", ctaD: "We review the technical state, your visibility in Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 working hours, with no commitment.", ctaB: "Request the free audit", faq: "Frequently asked questions", fuentes: "Sources", rel: "Related services:", back: "← Back to the blog" }
    : { resumen: "Résumé rapide", porque: "Pourquoi le SEO a du sens pour une PME", porque1: "Une PME ne peut pas rivaliser avec une grande entreprise en budget publicitaire, mais elle le peut sur des recherches précises : un service dans une zone, un problème très spécifique de son secteur, une question que ses clients posent toujours. Là, un site bien fait et une fiche Google soignée jouent à armes égales.", porque2: "De plus, la plupart des petites entreprises partent de zéro. Avec 36,2 % des microentreprises dotées d'un site (INE, 2026), une page qui répond bien à ce que cherchent vos clients vous distingue déjà d'une bonne partie de votre concurrence locale.", frentes: "Les 5 fronts du SEO d'une PME", frentesCab: ["Front", "De quoi il s'agit", "Signe que ça fonctionne"], tareas: "Ce que vous pouvez faire vous-même cette semaine", delegar: "Ce qu'il vaut mieux déléguer, et pourquoi", coste: "Combien coûte le SEO pour une PME", costeIntro: "Cela dépend de la taille du site, du nombre de fiches Google et de la quantité de contenu nécessaire. Voici nos offres publiées, hors TVA et sans engagement :", costeCab: ["Offre", "Pour qui", "Prix mensuel (HT)"], costeNota1: "Le contenu de chaque offre et ses limites sont sur notre", costeLink: "page des tarifs SEO", plazos: "Combien de temps avant de voir le SEO", plazosTxt: "À titre indicatif, les premiers résultats arrivent entre 3 et 6 mois et se consolident entre 6 et 12. La fiche Google bouge en général plus tôt, en 1 à 2 mois. Les impressions dans Search Console montent d'abord ; les clics et les contacts arrivent ensuite.", plazosLink: "Nous l'expliquons phase par phase ici", elegir: "Comment choisir un prestataire : 6 questions", empezar: "Par où commencer", empezarTxt: "Si vous ne savez pas où en est votre site, commencez par là. Vous pouvez le faire vous-même avec la", empezarCheck: "checklist en 30 points", empezarTxt2: "ou nous demander l'audit gratuit. Si vous voulez ensuite que nous nous en occupions, voici notre", empezarServ: "service SEO", ctaT: "Audit gratuit de votre site", ctaD: "Nous examinons l'état technique, votre visibilité dans Google et dans les assistants d'IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrées, sans engagement.", ctaB: "Demander l'audit gratuit", faq: "Questions fréquentes", fuentes: "Sources", rel: "Services associés :", back: "← Retour au blog" };

  const fuentes = [
    { texto: isEn ? "INE: Survey on ICT use and e-commerce in companies, press release of 22/10/2026 (percentages of companies with internet access)." : "INE : Enquête sur l'usage des TIC et du commerce électronique dans les entreprises, communiqué du 22/10/2026 (pourcentages des entreprises disposant d'un accès à internet).", url: "https://www.ine.es/dyngs/Prensa/ETICCE20251T2026.htm" },
    { texto: "Google Search Central: Do you need an SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
    { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { texto: "Google Search Central: Spam policies for Google web search (link spam).", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { texto: "Google Business Profile Help: Guidelines for representing your business on Google.", url: "https://support.google.com/business/answer/3038177" },
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
          <p>{h.porque1}</p>
          <p>{h.porque2}</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.frentes}</h2>
          <Tabla cabecera={h.frentesCab} filas={frentes} />

          <h2 className="text-2xl font-bold text-primary-600">{h.tareas}</h2>
          <Lista items={tareas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">{h.delegar}</h2>
          <Lista items={delegar} />

          <h2 className="text-2xl font-bold text-primary-600">{h.coste}</h2>
          <p>{h.costeIntro}</p>
          <Tabla cabecera={h.costeCab} filas={tabla.map((p) => [p.nombre, p.paraQuien, precio(p.precio as number)])} />
          <p>{h.costeNota1} <Link href={href(lang, "/precios-seo/")} className={a}>{h.costeLink}</Link>.</p>

          <BlogBanner variant="seogeogbp" lang={lang} />

          <h2 className="text-2xl font-bold text-primary-600">{h.plazos}</h2>
          <p>{h.plazosTxt} <Link href={plazos} className={a}>{h.plazosLink}</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">{h.elegir}</h2>
          <Lista items={preguntas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">{h.empezar}</h2>
          <p>
            {h.empezarTxt} <Link href={auditoria} className={a}>{h.empezarCheck}</Link> {h.empezarTxt2} <Link href={href(lang, "/seo-posicionamiento-web-organico/")} className={a}>{h.empezarServ}</Link>.
          </p>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{h.ctaT}</p>
            <p className="text-gray-600 text-sm mb-4">{h.ctaD}</p>
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
            {h.rel} <Link href={href(lang, "/seo-posicionamiento-web-organico/")} className={a}>SEO</Link> · <Link href={href(lang, "/precios-seo/")} className={a}>{isEn ? "SEO pricing" : "Tarifs SEO"}</Link> · <Link href={href(lang, "/seo-local/")} className={a}>{isEn ? "Local SEO" : "SEO local"}</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{h.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-para-pymes-guia" />
    </>
  );
}
