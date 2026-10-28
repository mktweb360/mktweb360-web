import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 28/10/2026 — versiones EN/FR del artículo ES /estrategia-de-contenidos-calendario-editorial/ (tema 5).
// La carpeta FR (strategie-de-contenu-calendrier-editorial) reexporta esta página.
// Mismas fuentes y cifras que la versión ES; si cambian allí, cambiarlas aquí.

const ES_SLUG = "estrategia-de-contenidos-calendario-editorial";
const SLUGS = { en: "content-strategy-editorial-calendar", fr: "strategie-de-contenu-calendrier-editorial" } as const;
// Imagen con los rótulos en el idioma de la página (fuente: imagenes-blog/calendario-editorial-un-tema-cinco-piezas-en|fr.html).
const ogFor = (lang: "en" | "fr") => `/og-${SLUGS[lang]}.jpg`;
const DATE = "2026-11-01";

type L = "en" | "fr";
const asLang = (lang: string): L => (lang === "fr" ? "fr" : "en");

const META = {
  en: {
    title: "Content Strategy and Editorial Calendar (Free Template)",
    description:
      "A 5-step content strategy and an editorial calendar template you can copy: one topic, five pieces (blog, carousel, short video, newsletter and post) and what to measure.",
    h1: "How to build a content strategy for your business (with an editorial calendar template)",
  },
  fr: {
    title: "Stratégie de contenu et calendrier éditorial (modèle)",
    description:
      "Une stratégie de contenu en 5 étapes et un modèle de calendrier éditorial à copier : un sujet, cinq contenus (blog, carrousel, vidéo courte, newsletter et post) et quoi mesurer.",
    h1: "Comment créer une stratégie de contenu pour votre entreprise (avec un modèle de calendrier éditorial)",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = asLang((await params).lang);
  const m = META[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUGS[lang]}/`;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: alternatesFor(`/${lang}/${SLUGS[lang]}/`) ?? { canonical: url },
    openGraph: {
      title: `${m.title} | Mkt Web 360`,
      description: m.description,
      url,
      type: "article",
      images: [{ url: ogFor(lang), width: 1200, height: 630 }],
    },
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

const FAQS = {
  en: [
    {
      q: "What is the difference between a content strategy and an editorial calendar?",
      a: "The strategy decides why you publish, for whom and about which topics. The editorial calendar is the operational side: which piece goes out, on which channel, on which day and who prepares it. A calendar without a strategy just fills dates; a strategy without a calendar stays on paper.",
    },
    {
      q: "How often should a small business publish?",
      a: "As often as you can sustain for a whole year. As a rough guide, one pillar topic a month turned into five pieces gives you one post a week on each main channel. A steady pace beats three busy weeks followed by two silent months.",
    },
    {
      q: "What tool do I need for an editorial calendar?",
      a: "A spreadsheet is enough: Google Sheets or Excel, with the columns of the template in this article. Social media scheduling tools help you publish, but they do not decide which piece serves which goal.",
    },
    {
      q: "Can I use AI to create the content in my calendar?",
      a: "Yes, to organise ideas, outline and draft. What AI cannot add is your experience: cases, your own data and judgement. Review every piece before publishing. According to IAB Spain's 2026 Social Media Study, 87% of users in Spain consider it essential to label AI-generated content.",
    },
    {
      q: "How long does a content strategy take to show results?",
      a: "On social media, saves and shares show up within days. On the blog, search traffic follows SEO timelines: as a rough guide, 3 to 6 months for first results and 6 to 12 months to consolidate. Nobody can guarantee rankings or specific figures.",
    },
  ],
  fr: [
    {
      q: "Quelle différence entre stratégie de contenu et calendrier éditorial ?",
      a: "La stratégie décide pourquoi vous publiez, pour qui et sur quels sujets. Le calendrier éditorial est la partie opérationnelle : quel contenu sort, sur quel canal, quel jour et qui le prépare. Un calendrier sans stratégie remplit des dates ; une stratégie sans calendrier reste un document.",
    },
    {
      q: "À quelle fréquence une PME doit-elle publier ?",
      a: "Au rythme qu'elle peut tenir pendant un an. À titre indicatif, un sujet pilier par mois décliné en cinq contenus donne une publication par semaine sur chaque canal principal. Un rythme régulier vaut mieux que trois semaines intenses suivies de deux mois de silence.",
    },
    {
      q: "Quel outil faut-il pour un calendrier éditorial ?",
      a: "Un tableur suffit : Google Sheets ou Excel, avec les colonnes du modèle de cet article. Les outils de programmation des réseaux aident à publier, mais ne décident pas quel contenu sert quel objectif.",
    },
    {
      q: "Puis-je utiliser l'IA pour créer les contenus du calendrier ?",
      a: "Oui, pour organiser les idées, faire des plans et préparer des brouillons. Ce que l'IA ne peut pas apporter, c'est votre expérience : cas, données propres et regard d'expert. Relisez chaque contenu avant de le publier. Selon l'étude Réseaux sociaux 2026 d'IAB Spain, 87 % des utilisateurs en Espagne jugent indispensable d'étiqueter les contenus générés par l'IA.",
    },
    {
      q: "Combien de temps faut-il pour voir les effets d'une stratégie de contenu ?",
      a: "Sur les réseaux, les enregistrements et les partages se voient en quelques jours. Sur le blog, le trafic de recherche suit les délais du SEO : à titre indicatif, 3 à 6 mois pour les premiers résultats et 6 à 12 mois pour se consolider. Personne ne peut garantir des positions ni des chiffres précis.",
    },
  ],
};

const FUENTES = {
  en: [
    { texto: "IAB Spain: “IAB Spain presenta el Estudio de Redes Sociales 2026” (19/05/2026, with Elogia; accessed 28/10/2026).", url: "https://iabspain.es/iab-spain-presenta-estudio-rrss-2026/" },
    { texto: "Google Search Central: Optimizing your website for generative AI features on Google Search (updated 10/07/2026).", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { texto: "Google Search Central: Creating helpful, reliable, people-first content.", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { texto: "Search Console Help: Performance report (Search results).", url: "https://support.google.com/webmasters/answer/7576553?hl=en" },
  ],
  fr: [
    { texto: "IAB Spain : « IAB Spain presenta el Estudio de Redes Sociales 2026 » (19/05/2026, avec Elogia ; consulté le 28/10/2026).", url: "https://iabspain.es/iab-spain-presenta-estudio-rrss-2026/" },
    { texto: "Google Search Central : Optimizing your website for generative AI features on Google Search (mis à jour le 10/07/2026).", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { texto: "Google Search Central : AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { texto: "Google Search Central : Creating helpful, reliable, people-first content.", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { texto: "Aide Search Console : rapport « Performances » (résultats de recherche).", url: "https://support.google.com/webmasters/answer/7576553?hl=fr" },
  ],
};

function contenido(lang: L) {
  const a = (slug: string, texto: string) => (
    <Link href={`/${lang}/${langSlug(lang, slug)}/`} className="text-accent-500 hover:underline">{texto}</Link>
  );

  if (lang === "en") {
    return {
      crumb: "Content strategy and editorial calendar",
      categoria: "Content Marketing",
      fecha: "November 1, 2026",
      intro: "Five steps to stop publishing for the sake of it: what to talk about, in which format, when, and how to tell whether it works. With an editorial calendar template you can copy into your spreadsheet.",
      alt: "Four-week editorial calendar board: one monthly pillar topic split into five coloured cards, blog, carousel, short video, newsletter and post",
      respuesta: "A content strategy decides what you publish, for whom, on which channel and for which business goal. The editorial calendar turns it into dates, formats and owners. Our method: pick one pillar topic a month based on what your customers search for, turn it into five pieces and measure saves, shares and enquiries, not likes.",
      resumenT: "Quick summary",
      resumen: [
        <>A <strong>content strategy</strong> answers four questions for every piece: which business job it does, who it is for, which channel it goes on and what action it asks for.</>,
        <>Topics come from what your <strong>customers already search for</strong>: Search Console, Keyword Planner and the questions they ask you by phone or email.</>,
        <><strong>One topic, five pieces:</strong> a blog article, a carousel, a short video, a newsletter and a text post.</>,
        <>The <strong>editorial calendar</strong> is a spreadsheet with date, piece, channel, business job, audience, call to action and metric. The template is below.</>,
        <>Measure <strong>saves, shares and enquiries</strong>, not likes.</>,
      ],
      h2Que: "What is a content strategy, and how is it different from just posting?",
      pQue: "It is the plan that links what you publish to what your business sells. Posting without a strategy does not mean posting little: many businesses post often, but each piece goes its own way and nobody knows whether it helps.",
      difCab: ["Aspect", "Just posting", "With a content strategy"],
      dif: [
        ["Starting point", "“We need to post something this week”", "A business goal and a specific customer"],
        ["Topics", "Whatever the person posting thinks of", "What customers search for and ask"],
        ["Channels", "The same piece on every network", "Each format adapted to its channel"],
        ["Call to action", "None, or “follow us”", "One per piece: read, save, write, request a quote"],
        ["Measurement", "Likes and followers", "Saves, shares, clicks and enquiries"],
      ],
      criterio: <>Our rule for every piece is simple: it needs <strong>a business job, an audience, a channel and a call to action</strong>. If one of the four is missing, it does not go into the calendar.</>,
      h2P1: "Step 1. Why are you publishing, and for whom?",
      pP1: "Start with the business goal. Every piece does one of these four jobs:",
      funciones: [
        <><strong>Attract:</strong> get found by people who do not know you yet, on Google, in AI assistants or in social media search.</>,
        <><strong>Persuade:</strong> answer the doubts and objections that hold back a purchase (price, timing, how you work).</>,
        <><strong>Convert:</strong> lead to a specific action, such as requesting a quote, booking or getting in touch.</>,
        <><strong>Retain:</strong> make existing customers come back, recommend you or buy another service.</>,
      ],
      pP1b: "Then define your ideal customer with three questions. If you cannot answer them, ask three recent customers:",
      cliente: [
        <>What problem do they have just before they look for you, and what words do they use to describe it?</>,
        <>What stops them from deciding: price, distrust, lack of time, not knowing what they need?</>,
        <>Where do they look for information: Google, LinkedIn, Instagram, email, an AI assistant?</>,
      ],
      h2P2: "Step 2. Which topics should you cover?",
      pP2: "A pillar topic is a broad subject that matters to your customer and is directly related to what you sell. For a renovation company it could be “how much does a bathroom renovation cost”; for an accounting firm, “which expenses a freelancer can deduct”. Topics come from four places:",
      temas: [
        <><strong>Search Console, Performance report.</strong> Look for queries with impressions but low positions: Google already links you to that topic and a better piece can move it up. Sort them by impressions and group them by topic.</>,
        <><strong>Keyword Planner.</strong> It gives you the approximate volume of each search and related searches you had not thought of. We explain it in {a("how-to-use-google-keyword-planner", "how to use Google Keyword Planner")}.</>,
        <><strong>Real customer questions.</strong> The ones you get by phone, email and in sales meetings. If three customers ask the same thing, it is a topic.</>,
        <><strong>Social media search.</strong> Instagram, TikTok and LinkedIn are also used to search. We cover it in {a("social-seo-instagram-tiktok-linkedin", "social SEO: social networks as search engines")}.</>,
      ],
      pP2b: "Twelve topics give you a year of calendar. Rank them by how close they are to what you sell and by search interest, and start at the top.",
      h2P3: "Step 3. How do you get five pieces out of one topic?",
      pP3: "You do not need five different ideas. The blog article is the master piece and the other four adapt part of it to each channel, with their own format and call to action:",
      piezasCab: ["Piece", "Channel", "Job", "Call to action", "What to measure"],
      piezas: [
        ["Blog article", "Website (Google and AI assistants)", "Attract searches and be the source that gets cited", "Request the audit or see the service", "Impressions and clicks per query; enquiries from the article"],
        ["Carousel", "LinkedIn and Instagram", "Explain the method step by step", "Save it and read the full article", "Saves and shares"],
        ["Short video", "Reels, Shorts, TikTok or LinkedIn video", "Show a mistake or a step in under a minute", "Follow the account or comment with a question", "Shares and complete views"],
        ["Newsletter", "Email to your list", "Retain and reactivate people who already know you", "Reply or book a call", "Clicks and replies"],
        ["Text post", "LinkedIn", "Share your view or a case with your judgement", "Comment or send a message", "Meaningful comments and messages received"],
      ],
      pP3b: <>Adapting is not copy and paste. Each channel has its tone: on LinkedIn, an opinion with real judgement works, as explained in {a("linkedin-for-smes-lead-generation-2026", "LinkedIn for SMEs: a practical guide to generating leads")}; on the blog, the complete answer. If you use AI for drafts, check the voice with {a("how-to-write-content-that-doesnt-sound-like-ai", "these techniques so your content does not sound like AI")}.</>,
      pP3c: <>Social media does not replace the blog. According to IAB Spain&apos;s 2026 Social Media Study, 54% of users in Spain already use social networks to look for information before buying online, and the average user visits 7.2 networks. That attention is spread thin; the article on your website is the piece that remains yours and that Google can show. If you do not have a blog yet, see our {a("blog-creation-service", "blog creation service")}.</>,
      h2P4: "Step 4. How do you build an editorial calendar? (template)",
      pP4: "This is the template we use, with one example row. Select the table, copy it and paste it into Google Sheets or Excel: each column lands in its own cell.",
      plantillaCab: ["Date", "Pillar topic", "Piece", "Channel", "Business job", "Audience", "Call to action", "Owner", "Status", "Main metric", "Result"],
      plantilla: [["03/11", "How much a bathroom renovation costs", "Blog article", "Website", "Attract", "Homeowner comparing quotes", "Request a quote", "Marketing lead", "Draft", "Clicks and enquiries", "(fill in after a month)"]],
      comoT: "How to fill it in:",
      rellenar: [
        <><strong>Choose the month&apos;s pillar topic</strong> from your topic list, starting with the one closest to what you sell.</>,
        <><strong>Write the article first.</strong> It is the most complete piece and the others come from it.</>,
        <><strong>Fill in one row per piece</strong>, with all eleven columns. If a piece has no clear job or call to action, drop it.</>,
        <><strong>Assign an owner and a real date</strong>, allowing time for review.</>,
        <><strong>At the end of the month, fill in “Result”</strong> with each piece&apos;s main metric and decide which format to repeat.</>,
      ],
      repartoT: "And this is how a month with a single pillar topic is split:",
      repartoCab: ["Week", "What goes out"],
      reparto: [
        ["Week 1", "Blog article (Monday) and a text post introducing it (Friday)"],
        ["Week 2", "Carousel with the steps from the article"],
        ["Week 3", "Short video about a common mistake on the topic"],
        ["Week 4", "Newsletter summing up the month and linking to the article"],
      ],
      pRedes: "A social media editorial calendar is the same sheet filtered by channel. You do not need another document: add one view per network and you will see at a glance if one is left empty or if you keep repeating a format.",
      h2P5: "Step 5. What should you measure on each channel?",
      pP5: "We measure saves and shares because they say more than a like. Someone who saves a piece plans to come back to it because it solves something for them. Someone who shares it is recommending it to another person. A like takes one tap and tells you neither.",
      metCab: ["Channel", "Main metric", "Supporting metric", "Do not use as a goal"],
      met: [
        ["Blog", "Impressions and clicks for the topic's queries (Search Console)", "Enquiries coming from the article", "Visits with no context"],
        ["Carousel", "Saves and shares", "Clicks to the article", "Likes"],
        ["Short video", "Shares", "Share of people who watch to the end, if the network shows it", "Views lasting a few seconds"],
        ["Newsletter", "Clicks", "Replies and unsubscribes", "Opens as the only figure"],
        ["Text post", "Meaningful comments", "Messages and profile visits", "Likes"],
      ],
      pP5b: "Review the data once a month with the calendar open: record each piece's result and repeat the formats that work with the next topic.",
      h2IA: "What do the pieces that AI answers cite have in common?",
      pIA: "Google has official documentation; other assistants have no equivalent guide, so we apply the same four traits:",
      rasgos: [
        <><strong>It answers in the first lines.</strong> A direct answer of two or three sentences under the title, before the detail, for the reader in a hurry and for whoever summarises the page.</>,
        <><strong>It adds something of its own.</strong> Google&apos;s guide to its AI features asks for original content, with a unique perspective or first-hand experience, not what other pages already repeat.</>,
        <><strong>It is well organised.</strong> Headings that are real questions, tables and lists that stand on their own. Google makes clear there is no need to break text into tiny chunks: the structure is for the reader.</>,
        <><strong>It is a normal page, indexed and crawlable.</strong> According to Google, appearing in AI Overviews or AI Mode does not require special AI files or specific structured data.</>,
      ],
      ctaT: "Would you rather we did it with you?",
      ctaP: <>In our {a("content-marketing", "content marketing service")} we prepare the topics, the calendar and the pieces. If you first want to know where your website stands, the free audit reviews its technical health, your visibility on Google and in AI assistants, and three search opportunities. You get it by email within 24 business hours at most, with no commitment.</>,
      ctaB: "Request the free audit",
      faqT: "Frequently asked questions",
      fuentesT: "Sources",
      servicios: <>Related services: {a("content-marketing", "Content marketing")} · {a("blog-creation-service", "Blog creation")} · {a("digital-audit", "Free digital audit")}</>,
      volver: "← Back to blog",
      home: "Home",
    };
  }

  return {
    crumb: "Stratégie de contenu et calendrier éditorial",
    categoria: "Marketing de Contenu",
    fecha: "1er novembre 2026",
    intro: "Cinq étapes pour arrêter de publier pour publier : de quoi parler, sous quel format, quand, et comment savoir si cela fonctionne. Avec un modèle de calendrier éditorial à copier dans votre tableur.",
    alt: "Tableau de calendrier éditorial sur quatre semaines : un sujet pilier du mois réparti en cinq fiches de couleur, blog, carrousel, vidéo courte, newsletter et post",
    respuesta: "Une stratégie de contenu décide ce que vous publiez, pour qui, sur quel canal et avec quel objectif commercial. Le calendrier éditorial la traduit en dates, formats et responsables. Notre méthode : choisir un sujet pilier par mois à partir de ce que cherchent vos clients, en tirer cinq contenus et mesurer enregistrements, partages et demandes de contact, pas les « j'aime ».",
    resumenT: "En bref",
    resumen: [
      <>Une <strong>stratégie de contenu</strong> répond à quatre questions pour chaque contenu : quelle fonction commerciale il remplit, à qui il s&apos;adresse, sur quel canal il sort et quelle action il demande.</>,
      <>Les sujets viennent de ce que vos <strong>clients cherchent déjà</strong> : Search Console, le Planificateur de mots clés et les questions qu&apos;on vous pose au téléphone ou par e-mail.</>,
      <><strong>Un sujet, cinq contenus :</strong> un article de blog, un carrousel, une vidéo courte, une newsletter et un post texte.</>,
      <>Le <strong>calendrier éditorial</strong> est un tableur avec date, contenu, canal, fonction, audience, appel à l&apos;action et indicateur. Le modèle est plus bas.</>,
      <>Mesurez <strong>enregistrements, partages et demandes de contact</strong>, pas les « j&apos;aime ».</>,
    ],
    h2Que: "Qu'est-ce qu'une stratégie de contenu, et en quoi diffère-t-elle du simple fait de publier ?",
    pQue: "C'est le plan qui relie ce que vous publiez à ce que vend votre entreprise. Publier sans stratégie ne veut pas dire publier peu : beaucoup d'entreprises publient souvent, mais chaque contenu part dans sa propre direction et personne ne sait s'il sert à quelque chose.",
    difCab: ["Aspect", "Publier sans plus", "Avec une stratégie de contenu"],
    dif: [
      ["Point de départ", "« Il faut publier quelque chose cette semaine »", "Un objectif commercial et un client précis"],
      ["Sujets", "Ce qui vient à l'esprit de la personne qui publie", "Ce que le client cherche et demande"],
      ["Canaux", "Le même contenu sur tous les réseaux", "Chaque format adapté à son canal"],
      ["Appel à l'action", "Aucun, ou « suivez-nous »", "Un par contenu : lire, enregistrer, écrire, demander un devis"],
      ["Mesure", "« J'aime » et abonnés", "Enregistrements, partages, clics et demandes de contact"],
    ],
    criterio: <>Notre règle pour chaque contenu est simple : il lui faut <strong>une fonction commerciale, une audience, un canal et un appel à l&apos;action</strong>. S&apos;il en manque un, il n&apos;entre pas dans le calendrier.</>,
    h2P1: "Étape 1. Pourquoi publiez-vous, et pour qui ?",
    pP1: "Commencez par l'objectif commercial. Chaque contenu remplit l'une de ces quatre fonctions :",
    funciones: [
      <><strong>Attirer :</strong> être trouvé par ceux qui ne vous connaissent pas encore, sur Google, dans les assistants d&apos;IA ou dans la recherche des réseaux sociaux.</>,
      <><strong>Convaincre :</strong> lever les doutes et objections qui freinent l&apos;achat (prix, délais, façon de travailler).</>,
      <><strong>Convertir :</strong> mener à une action précise, comme demander un devis, réserver ou écrire.</>,
      <><strong>Fidéliser :</strong> faire revenir les clients, qu&apos;ils vous recommandent ou achètent un autre service.</>,
    ],
    pP1b: "Ensuite, définissez votre client idéal avec trois questions. Si vous ne savez pas y répondre, posez-les à trois clients récents :",
    cliente: [
      <>Quel problème a-t-il juste avant de vous chercher, et avec quels mots le décrit-il ?</>,
      <>Qu&apos;est-ce qui l&apos;empêche de se décider : le prix, la méfiance, le manque de temps, ne pas savoir ce dont il a besoin ?</>,
      <>Où s&apos;informe-t-il : Google, LinkedIn, Instagram, l&apos;e-mail, un assistant d&apos;IA ?</>,
    ],
    h2P2: "Étape 2. De quels sujets parler ?",
    pP2: "Un sujet pilier est un thème large qui intéresse votre client et qui a un lien direct avec ce que vous vendez. Pour une entreprise de rénovation, ce peut être « combien coûte la rénovation d'une salle de bains » ; pour un cabinet comptable, « quelles dépenses un indépendant peut déduire ». Les sujets viennent de quatre endroits :",
    temas: [
      <><strong>Search Console, rapport Performances.</strong> Repérez les requêtes avec des impressions mais des positions basses : Google vous associe déjà à ce sujet et un meilleur contenu peut la faire monter. Triez-les par impressions et regroupez-les par sujet.</>,
      <><strong>Planificateur de mots clés.</strong> Il donne le volume indicatif de chaque recherche et des recherches associées auxquelles vous n&apos;aviez pas pensé. Nous l&apos;expliquons dans {a("how-to-use-google-keyword-planner", "comment utiliser le Planificateur de mots clés de Google")}.</>,
      <><strong>Les vraies questions des clients.</strong> Celles du téléphone, des e-mails et des rendez-vous commerciaux. Si trois clients posent la même question, c&apos;est un sujet.</>,
      <><strong>La recherche dans les réseaux.</strong> Instagram, TikTok et LinkedIn servent aussi à chercher. Nous en parlons dans {a("seo-social-instagram-tiktok-linkedin-moteurs-recherche", "le SEO social : les réseaux comme moteurs de recherche")}.</>,
    ],
    pP2b: "Avec douze sujets, vous avez un an de calendrier. Classez-les selon leur proximité avec ce que vous vendez et l'intérêt de recherche, et commencez par le haut.",
    h2P3: "Étape 3. Comment tirer cinq contenus d'un seul sujet ?",
    pP3: "Inutile d'inventer cinq idées différentes. L'article de blog est le contenu principal et les quatre autres en adaptent une partie à chaque canal, avec leur propre format et leur propre appel à l'action :",
    piezasCab: ["Contenu", "Canal", "Fonction", "Appel à l'action", "Quoi mesurer"],
    piezas: [
      ["Article de blog", "Site web (Google et assistants d'IA)", "Attirer des recherches et être la source citée", "Demander l'audit ou voir le service", "Impressions et clics par requête ; demandes venues de l'article"],
      ["Carrousel", "LinkedIn et Instagram", "Expliquer la méthode étape par étape", "Enregistrer et lire l'article complet", "Enregistrements et partages"],
      ["Vidéo courte", "Reels, Shorts, TikTok ou vidéo LinkedIn", "Montrer une erreur ou une étape en moins d'une minute", "Suivre le compte ou poser une question en commentaire", "Partages et vues complètes"],
      ["Newsletter", "E-mail à votre liste", "Fidéliser et réactiver ceux qui vous connaissent déjà", "Répondre ou prendre rendez-vous", "Clics et réponses"],
      ["Post texte", "LinkedIn", "Donner votre avis ou raconter un cas avec votre regard", "Commenter ou écrire en message privé", "Commentaires de fond et messages reçus"],
    ],
    pP3b: <>Adapter n&apos;est pas copier-coller. Chaque canal a son ton : sur LinkedIn, l&apos;avis argumenté fonctionne, comme expliqué dans {a("linkedin-for-smes-lead-generation-2026", "LinkedIn pour les PME : guide pratique pour générer des leads")} ; sur le blog, la réponse complète. Si vous utilisez l&apos;IA pour les brouillons, vérifiez le ton avec {a("comment-ecrire-contenu-qui-ne-sonne-pas-ia", "ces techniques pour que vos contenus ne sonnent pas IA")}.</>,
    pP3c: <>Les réseaux ne remplacent pas le blog. Selon l&apos;étude Réseaux sociaux 2026 d&apos;IAB Spain, 54 % des utilisateurs en Espagne utilisent déjà les réseaux pour chercher des informations avant d&apos;acheter en ligne, et l&apos;utilisateur moyen fréquente 7,2 réseaux. Cette attention est dispersée ; l&apos;article de votre site est le contenu qui reste à vous et que Google peut afficher. Si vous n&apos;avez pas encore de blog, voyez notre {a("service-creation-blog", "service de création de blog")}.</>,
    h2P4: "Étape 4. Comment faire un calendrier éditorial ? (modèle)",
    pP4: "Voici le modèle que nous utilisons, avec une ligne d'exemple. Sélectionnez le tableau, copiez-le et collez-le dans Google Sheets ou Excel : chaque colonne tombe dans sa cellule.",
    plantillaCab: ["Date", "Sujet pilier", "Contenu", "Canal", "Fonction commerciale", "Audience", "Appel à l'action", "Responsable", "Statut", "Indicateur principal", "Résultat"],
    plantilla: [["03/11", "Combien coûte la rénovation d'une salle de bains", "Article de blog", "Site web", "Attirer", "Propriétaire qui compare des devis", "Demander un devis", "Responsable marketing", "Brouillon", "Clics et demandes", "(à remplir après un mois)"]],
    comoT: "Comment le remplir :",
    rellenar: [
      <><strong>Choisissez le sujet pilier du mois</strong> dans votre liste, en commençant par le plus proche de ce que vous vendez.</>,
      <><strong>Écrivez d&apos;abord l&apos;article.</strong> C&apos;est le contenu le plus complet et les autres en découlent.</>,
      <><strong>Remplissez une ligne par contenu</strong>, avec les onze colonnes. Si un contenu n&apos;a ni fonction ni appel à l&apos;action clairs, supprimez-le.</>,
      <><strong>Attribuez un responsable et une date réaliste</strong>, en comptant le temps de relecture.</>,
      <><strong>En fin de mois, remplissez « Résultat »</strong> avec l&apos;indicateur principal de chaque contenu et décidez quel format répéter.</>,
    ],
    repartoT: "Et voici la répartition d'un mois avec un seul sujet pilier :",
    repartoCab: ["Semaine", "Ce qui est publié"],
    reparto: [
      ["Semaine 1", "Article de blog (lundi) et post texte qui le présente (vendredi)"],
      ["Semaine 2", "Carrousel avec les étapes de l'article"],
      ["Semaine 3", "Vidéo courte sur une erreur fréquente du sujet"],
      ["Semaine 4", "Newsletter qui résume le mois et renvoie vers l'article"],
    ],
    pRedes: "Un calendrier éditorial pour les réseaux sociaux, c'est la même feuille filtrée par canal. Pas besoin d'un autre document : ajoutez une vue par réseau et vous verrez d'un coup d'œil si l'un reste vide ou si vous répétez un format.",
    h2P5: "Étape 5. Que mesurer sur chaque canal ?",
    pP5: "Nous mesurons les enregistrements et les partages parce qu'ils en disent plus qu'un « j'aime ». Qui enregistre un contenu compte y revenir parce qu'il lui règle un problème. Qui le partage le recommande à quelqu'un d'autre. Un « j'aime » coûte un clic et ne dit rien de tout cela.",
    metCab: ["Canal", "Indicateur principal", "Indicateur d'appui", "À ne pas prendre comme objectif"],
    met: [
      ["Blog", "Impressions et clics des requêtes du sujet (Search Console)", "Demandes de contact venues de l'article", "Visites sans contexte"],
      ["Carrousel", "Enregistrements et partages", "Clics vers l'article", "« J'aime »"],
      ["Vidéo courte", "Partages", "Part de personnes qui la regardent jusqu'au bout, si le réseau l'indique", "Vues de quelques secondes"],
      ["Newsletter", "Clics", "Réponses et désabonnements", "Ouvertures comme seul chiffre"],
      ["Post texte", "Commentaires de fond", "Messages et visites du profil", "« J'aime » sur le post"],
    ],
    pP5b: "Revoyez les données une fois par mois, calendrier ouvert : notez le résultat de chaque contenu et répétez les formats qui fonctionnent avec le sujet suivant.",
    h2IA: "Qu'ont en commun les contenus que citent les réponses d'IA ?",
    pIA: "Google publie une documentation officielle ; les autres assistants n'ont pas de guide équivalent, nous appliquons donc les mêmes quatre traits :",
    rasgos: [
      <><strong>Il répond dès les premières lignes.</strong> Une réponse directe de deux ou trois phrases sous le titre, avant le développement, pour le lecteur pressé et pour celui qui résume la page.</>,
      <><strong>Il apporte quelque chose de propre.</strong> Le guide de Google sur ses fonctions d&apos;IA demande un contenu original, avec un point de vue propre ou une expérience directe, pas ce que répètent déjà d&apos;autres pages.</>,
      <><strong>Il est bien structuré.</strong> Des titres qui sont de vraies questions, des tableaux et des listes qui se comprennent seuls. Google précise qu&apos;il n&apos;est pas nécessaire de découper le texte en petits morceaux : la structure est pour le lecteur.</>,
      <><strong>C&apos;est une page normale, indexée et explorable.</strong> Selon Google, apparaître dans les AI Overviews ou le mode IA n&apos;exige ni fichiers spéciaux pour l&apos;IA ni données structurées particulières.</>,
    ],
    ctaT: "Vous préférez que nous le fassions avec vous ?",
    ctaP: <>Avec notre {a("marketing-de-contenu", "service de marketing de contenu")}, nous préparons les sujets, le calendrier et les contenus. Si vous voulez d&apos;abord savoir où en est votre site, l&apos;audit gratuit examine son état technique, votre visibilité sur Google et dans les assistants d&apos;IA, et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrables maximum, sans engagement.</>,
    ctaB: "Demander l'audit gratuit",
    faqT: "Questions fréquentes",
    fuentesT: "Sources",
    servicios: <>Services associés : {a("marketing-de-contenu", "Marketing de contenu")} · {a("service-creation-blog", "Création de blog")} · {a("audit-digital", "Audit digital gratuit")}</>,
    volver: "← Retour au blog",
    home: "Accueil",
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = asLang((await params).lang);
  const m = META[lang];
  const t = contenido(lang);
  const FAQ = FAQS[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUGS[lang]}/`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.h1,
    description: m.description,
    inLanguage: lang,
    author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
    publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE,
    dateModified: DATE,
    image: `https://www.mktweb360.com${ogFor(lang)}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: t.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{t.categoria}</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{t.fecha}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{m.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
          <Image src={ogFor(lang)} alt={t.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{t.respuesta}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.resumenT}</h2>
          <Lista items={t.resumen} />

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Que}</h2>
          <p>{t.pQue}</p>
          <Tabla cabecera={t.difCab} filas={t.dif} />
          <p>{t.criterio}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2P1}</h2>
          <p>{t.pP1}</p>
          <Lista items={t.funciones} />
          <p>{t.pP1b}</p>
          <Lista items={t.cliente} numerada />

          <h2 className="text-2xl font-bold text-primary-600">{t.h2P2}</h2>
          <p>{t.pP2}</p>
          <Lista items={t.temas} numerada />
          <p>{t.pP2b}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2P3}</h2>
          <p>{t.pP3}</p>
          <Tabla cabecera={t.piezasCab} filas={t.piezas} />
          <p>{t.pP3b}</p>
          <p>{t.pP3c}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2P4}</h2>
          <p>{t.pP4}</p>
          <Tabla cabecera={t.plantillaCab} filas={t.plantilla} />
          <p>{t.comoT}</p>
          <Lista items={t.rellenar} numerada />
          <p>{t.repartoT}</p>
          <Tabla cabecera={t.repartoCab} filas={t.reparto} />
          <p>{t.pRedes}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2P5}</h2>
          <p>{t.pP5}</p>
          <Tabla cabecera={t.metCab} filas={t.met} />
          <p>{t.pP5b}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2IA}</h2>
          <p>{t.pIA}</p>
          <Lista items={t.rasgos} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{t.ctaT}</p>
            <p className="text-gray-600 text-sm mb-4">{t.ctaP}</p>
            <Link href={`/${lang}/${langSlug(lang, "digital-audit")}/`} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              {t.ctaB}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{t.faqT}</h2>
          <div className="space-y-3">
            {FAQ.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{t.fuentesT}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {FUENTES[lang].map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">{t.servicios}</p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{t.volver}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={ES_SLUG} />
    </>
  );
}
