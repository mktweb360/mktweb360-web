import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 02/11/2026 — refuerzo del tema 7 (misma URL, EN y FR en esta carpeta compartida). Versión ES: app/(site)/como-crear-landing-page-que-convierte.
// Ejemplos de demostración, sin marcas de terceros ni cifras de conversión. Lo de Google Ads, solo lo que dice su ayuda oficial.

const SLUG = "how-to-create-landing-page-that-converts";
const ES_SLUG = "como-crear-landing-page-que-convierte";
const DATE_PUBLISHED = "2026-06-13";
const DATE = "2026-11-02";

type Lang = "en" | "fr";
const ogFor = (lang: Lang) => `/og-${SLUG}-${lang}.jpg`;
type Faq = { q: string; a: string };
type Ejemplo = { titulo: string; contexto: string; items: ReactNode[] };

const META = {
  en: {
    title: "Landing Page: What It Is, Examples That Convert, Mistakes",
    description:
      "What a landing page is, annotated examples by type of small business, a 10-question check for a landing page that doesn't convert, and what Google Ads asks for.",
    h1: "What is a landing page and how to build one that converts (with examples)",
  },
  fr: {
    title: "Landing page : définition, exemples qui convertissent, erreurs",
    description:
      "Ce qu'est une landing page, des exemples annotés par type de PME, un diagnostic en 10 questions si votre landing ne convertit pas et ce que demande Google Ads.",
    h1: "Qu'est-ce qu'une landing page et comment en créer une qui convertit (avec exemples)",
  },
} as const;

function toLang(lang: string): Lang {
  return lang === "fr" ? "fr" : "en";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = META[toLang(lang)];
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: alternatesFor(`/${lang}/${SLUG}/`) ?? { canonical: url },
    openGraph: {
      title: `${m.title} | Mkt Web 360`,
      description: m.description,
      url,
      type: "article",
      images: [{ url: ogFor(toLang(lang)), width: 1200, height: 630 }],
    },
  };
}

const FAQS: Record<Lang, Faq[]> = {
  en: [
    {
      q: "What is a good conversion rate for a landing page?",
      a: "There is no single figure that fits everyone: it depends on the sector, the offer and whether visitors arrive from an ad, from Google or from social media. The useful comparison is with your own page: the same landing page before and after a change, with the same type of traffic and the same period.",
    },
    {
      q: "Does a landing page have to sit outside my website?",
      a: "No. It can be one more page on your own domain, with its own URL. That way you measure everything in the same analytics property and visitors see the same brand as in the ad or on Google.",
    },
    {
      q: "Should a landing page be long or short?",
      a: "It depends on how hard the decision is. An urgent service needs little text and a phone number at hand. An expensive purchase or a business service needs more content, because there are more doubts to resolve before taking the step.",
    },
    {
      q: "How many landing pages do I need?",
      a: "One for each service or offer with a different intent. You do not need one per keyword: almost identical searches can go to the same page if visitors find exactly what they were looking for.",
    },
    {
      q: "Can I run an A/B test with little traffic?",
      a: "With few visits, an A/B test takes a long time to give a reliable result. In that case it is better to fix the obvious problems from the check first (headline, form, mobile and tracking) and compare periods.",
    },
  ],
  fr: [
    {
      q: "Quel taux de conversion est bon pour une landing page ?",
      a: "Il n'existe pas de chiffre valable pour tous : il dépend du secteur, de l'offre et de l'origine des visites (annonce, Google ou réseaux sociaux). La comparaison utile se fait avec votre propre page : la même landing avant et après un changement, avec le même type de trafic et sur la même période.",
    },
    {
      q: "La landing page doit-elle être en dehors de mon site ?",
      a: "Non. Elle peut être une page de plus sur votre domaine, avec sa propre URL. Vous mesurez ainsi tout dans la même propriété d'analytics et le visiteur retrouve la même marque que dans l'annonce ou sur Google.",
    },
    {
      q: "Landing page longue ou courte ?",
      a: "Cela dépend de la difficulté de la décision. Un service urgent demande peu de texte et un téléphone bien visible. Un achat coûteux ou un service aux entreprises demande plus de contenu, car il y a plus de doutes à lever avant de passer à l'action.",
    },
    {
      q: "De combien de landing pages ai-je besoin ?",
      a: "Une par service ou par offre ayant une intention différente. Inutile d'en créer une par mot-clé : des recherches presque identiques peuvent mener à la même page si le visiteur y trouve exactement ce qu'il cherchait.",
    },
    {
      q: "Peut-on faire un test A/B avec peu de trafic ?",
      a: "Avec peu de visites, un test A/B met longtemps à donner un résultat fiable. Mieux vaut d'abord corriger les problèmes évidents du diagnostic (titre, formulaire, mobile et mesure) puis comparer des périodes.",
    },
  ],
};

function contenido(lang: Lang) {
  const L = (slug: string) => `/${lang}/${langSlug(lang, slug)}/`;
  const a = "text-accent-500 hover:underline";

  if (lang === "en") {
    return {
      crumbs: ["Home", "Landing page: what it is and examples"],
      category: "Web Design",
      updated: "Updated November 2, 2026",
      intro:
        "Four landing page examples by type of small business, annotated with what you can check on your own page, plus a 10-question check for when the page gets visits but no enquiries.",
      alt: "Two landing page wireframes compared: before, with a generic headline, a menu with six exits, three buttons, an eight-field form and a stock photo; after, with a service-and-benefit headline, no menu, a single button, a three-field form and real reviews",
      answer: (
        <>
          A <strong>landing page</strong> is a web page designed so that the visitor does one thing only: request a quote, book, buy or download something. Unlike the home page, it does not present the whole company: it answers a specific search or ad and removes everything that distracts from that action.
        </>
      ),
      h: {
        resumen: "Quick summary",
        diferencia: "What is a landing page and how is it different from a home page?",
        elementos: "What elements does a landing page that converts have?",
        ejemplos: "Landing page examples, annotated by type of business",
        propio: "A real example: our free diagnosis page",
        errores: "What mistakes stop a landing page from converting?",
        diagnostico: "My landing page doesn't convert: a 10-question check",
        ads: "What does Google Ads ask of a landing page?",
        herramientas: "Which tool should you use to build a landing page?",
        faq: "Frequently asked questions",
        fuentes: "Sources",
      },
      resumen: [
        <>A <strong>landing page</strong> has <strong>a single goal</strong>: getting the visitor to request a quote, book, buy or download something.</>,
        <>It works when it <strong>repeats what the person searched for</strong> or what the ad promised, and removes everything that distracts from that action.</>,
        <>The examples below are <strong>annotated with 5 elements you can check</strong> on your own page, by type of business.</>,
        <>If your landing page does not convert, check in this order: <strong>message, traffic, form, mobile and tracking</strong>.</>,
        <>For Google Ads, <strong>landing page experience</strong> is one of the three components of Quality Score.</>,
      ] as ReactNode[],
      diferenciaTexto:
        "A home page has to serve everyone: customers, job seekers, suppliers and people who just want your phone number. A landing page serves one person with one need. That is why it usually has fewer links, a more specific message and a single button.",
      diferenciaCab: ["Aspect", "Home page", "Landing page"],
      diferencias: [
        ["Goal", "Present the company and spread visitors across the site", "Get one specific action"],
        ["Where visitors come from", "Brand searches, links and varied searches", "An ad, a campaign or a specific search"],
        ["Navigation", "Full menu with many exits", "No menu, or the bare minimum"],
        ["Message", "General: everything the company does", "One only: the service or offer that was searched for"],
        ["How it is measured", "Visits and journeys across the site", "Percentage of visitors who complete the action"],
      ],
      diferenciaAds: (
        <>
          It is the page your <Link href={L("google-ads-management")} className={a}>Google Ads campaigns</Link> should point to: someone who clicks an ad for &quot;boiler repair&quot; wants to see exactly that, not your home page with every service you offer.
        </>
      ),
      elementosIntro: "There is no single template, but these seven elements appear in almost every landing page that works:",
      elementos: [
        <><strong>A headline that repeats the search or the ad.</strong> Service and benefit in one sentence: &quot;Boiler repair with a quote before we visit&quot; says more than &quot;Complete solutions for your home&quot;.</>,
        <><strong>A subheading that says who it is for and what is included.</strong> Service area, timeframe or what the customer gets, with details you can deliver.</>,
        <><strong>One main action.</strong> A button whose text says what happens when you click it (&quot;Get a quote&quot;, &quot;Book an appointment&quot;), not &quot;Submit&quot; or &quot;More information&quot;. It can be repeated down the page, but it is always the same action.</>,
        <><strong>A short form.</strong> Only what you need for the first contact, with the privacy notice (GDPR) and a separate checkbox for marketing communications.</>,
        <><strong>Real proof.</strong> Google reviews, professional registrations, years in business, guarantees or photos of your own work. No invented testimonials and no client logos without permission.</>,
        <><strong>Answers to the doubts that hold people back.</strong> Price or how it is calculated, timeframes, service area, what happens after sending the form. A few short FAQs cover much of it.</>,
        <><strong>Fast on mobile and properly tracked.</strong> It loads quickly, the button is visible without scrolling on a phone, and every form or call is recorded as a conversion.</>,
      ] as ReactNode[],
      ejemplosIntro:
        "These are demonstration examples, described rather than screenshotted, so you can compare them with your page point by point. Each one has five elements you can check just by opening the page on your phone.",
      ejemplos: [
        {
          titulo: "Local service: boiler repair",
          contexto: "The person has a problem today and searches from their phone. The main action is to call or request a quote.",
          items: [
            <><strong>Headline:</strong> the service and the area you cover, matching the ad.</>,
            <><strong>Call button</strong> visible on mobile without scrolling, which dials when tapped.</>,
            <><strong>Response time</strong> in writing, only if you can always meet it.</>,
            <><strong>Google reviews</strong> linked to your Business Profile so they can be checked.</>,
            <><strong>Three-field form:</strong> name, phone or email, and what they need.</>,
          ],
        },
        {
          titulo: "Clinic: first physiotherapy appointment",
          contexto: "Trust and closeness matter most here. The main action is to book an appointment.",
          items: [
            <><strong>A specific treatment</strong> in the headline, not a general health slogan.</>,
            <><strong>Who will treat you</strong>, with their qualification and registration number.</>,
            <><strong>What the first visit includes</strong>, how long it lasts and its price or how it is set.</>,
            <><strong>Simple booking:</strong> available time slots or a form with the preferred time.</>,
            <><strong>A form without health data</strong> and no promises of results: clinical details are dealt with in the consultation.</>,
          ],
        },
        {
          titulo: "Online shop: product campaign landing page",
          contexto: "The person is comparing prices and conditions. The main action is to add to cart.",
          items: [
            <><strong>Product and price</strong> at the top, with VAT stated.</>,
            <><strong>Shipping costs and delivery time</strong> visible before the cart, not at the end.</>,
            <><strong>A single buy button</strong>, without banners for other offers around it.</>,
            <><strong>Your own photos and dimensions</strong> or sizes, which is what raises most doubts.</>,
            <><strong>Returns and buyer reviews</strong> linked from the same page.</>,
          ],
        },
        {
          titulo: "B2B company: a service for other businesses",
          contexto: "More than one person decides and the sale takes longer. The main action is to request a meeting or download a document.",
          items: [
            <><strong>A headline with the sector&apos;s problem</strong> and the type of company you serve.</>,
            <><strong>How it works</strong> in three or four steps, with timeframes.</>,
            <><strong>References or case studies</strong> only if they are real and the client has authorised them.</>,
            <><strong>A form that qualifies:</strong> business email and one question about size or need. We explain it in <Link href={L("how-to-generate-quality-leads")} className={a}>how to generate quality leads</Link>.</>,
            <><strong>What happens next:</strong> who replies, by which channel and within what timeframe.</>,
          ],
        },
      ] as Ejemplo[],
      propioTexto: (
        <>
          Mkt Web 360&apos;s <Link href={L("digital-audit")} className={a}>free diagnosis</Link> page is a landing page with one action: requesting the report. The original page is in Spanish; these are its five elements:
        </>
      ),
      propio: [
        <><strong>Headline with a promise and a timeframe:</strong> a free diagnosis of your presence on Google and in AI, within 24 hours, in your inbox.</>,
        <><strong>Three bullet points that remove risk:</strong> free and with no commitment; reviewed by a specialist; SEO, AI and Google Business Profile in the same report.</>,
        <><strong>Form next to the headline:</strong> only name, email and website are required; phone, Business Profile and goal are optional.</>,
        <><strong>What you receive and how it works</strong>, explained in blocks before the FAQ.</>,
        <><strong>The same action at the end:</strong> the final button takes you back to the form.</>,
      ] as ReactNode[],
      propioNota:
        "It keeps the site menu because it also receives visits from the blog and from Google, not just from ads. On a landing page used only for campaigns we would remove it.",
      errores: [
        <><strong>Several goals at once:</strong> call, write, follow on social media and subscribe, all on the same screen.</>,
        <><strong>The full site menu:</strong> every link is an exit before converting.</>,
        <><strong>A long form:</strong> asking for address, company or budget when they are not needed yet.</>,
        <><strong>Sending the ad to the home page</strong> instead of the page for the advertised service.</>,
        <><strong>A page designed for desktop:</strong> on mobile the button ends up at the bottom or the form is hard to fill in.</>,
        <><strong>Proof that cannot be checked:</strong> anonymous testimonials, figures with no source or stock photos.</>,
      ] as ReactNode[],
      erroresNota: (
        <>
          If these problems repeat across the whole site and not just one page, it may need more than a tweak: look at the <Link href={L("signs-your-website-needs-redesign")} className={a}>signs your website needs a redesign</Link>.
        </>
      ),
      diagnosticoIntro: "Answer them with the page open on your phone. Every \"no\" is a specific task:",
      diagnostico: [
        <><strong>Does the headline repeat what the person searched for or what the ad promised?</strong> If not, rewrite it with the service and the benefit.</>,
        <><strong>Can someone tell in a few seconds what you offer, to whom and where?</strong> Show it to someone who does not know your business and ask them.</>,
        <><strong>Is there a single main action?</strong> If there are three different buttons, pick one.</>,
        <><strong>Is the button or form visible on mobile without scrolling?</strong> Check it on your own phone.</>,
        <><strong>Does the form ask only for what is essential?</strong> Remove fields you do not use in your first reply.</>,
        <><strong>Is there real, verifiable proof?</strong> Google reviews, registrations, guarantees or your own work.</>,
        <><strong>Do you answer the doubts that hold people back?</strong> Price or how it is calculated, timeframe, area and what happens next.</>,
        <><strong>Does it load quickly on mobile?</strong> PageSpeed Insights, Google&apos;s free tool, tells you what is slowing it down.</>,
        <><strong>Is the right traffic arriving?</strong> Look at the search terms in Google Ads or the queries in Search Console: if they have nothing to do with your service, the problem comes before the page.</>,
        <><strong>Are conversions tracked properly?</strong> Sometimes the landing page does convert, but forms or calls are not recorded. Send a test and check it shows up in Google Analytics 4 or Google Ads.</>,
      ] as ReactNode[],
      sintomasIntro: "To decide where to start, match what you see in your data with the questions:",
      sintomasCab: ["Symptom", "Likely cause", "Questions to review"],
      sintomas: [
        ["Lots of visits and almost no enquiries", "The message does not match the search, or the traffic is wrong", "1, 2 and 9"],
        ["People leave as soon as they arrive", "Slow loading, or the page is not what the ad promised", "1 and 8"],
        ["They start the form and do not finish it", "Too many fields or errors when submitting", "4 and 5"],
        ["Enquiries that are not a good fit", "An ambiguous promise or missing information that filters", "2 and 7"],
        ["Analytics shows zero but emails arrive", "The conversion is not being recorded", "10"],
      ],
      adsTexto: (
        <>
          According to Google Ads Help, <strong>landing page experience</strong> is one of the three components of Quality Score and reflects how relevant and useful the page is to people who click the ad. It is assessed by comparison with other advertisers&apos; ads shown for the same search over the last 90 days, and its status can be &quot;Above average&quot;, &quot;Average&quot; or &quot;Below average&quot;.
        </>
      ),
      adsIntro: "What Google recommends in its official documentation:",
      adsCab: ["What Google asks for", "Where it says so"],
      ads: [
        ["The page closely relates to the ad and the keywords", "Optimize your ads and landing pages"],
        ["The page matches the call to action in the ad", "Optimize your ads and landing pages"],
        ["Useful, original information about what you advertise, with the important parts near the top", "Optimize your ads and landing pages"],
        ["Easy navigation, no excess of ads or pop-ups, and built for mobile", "Optimize your ads and landing pages"],
        ["A consistent message from ad to page and faster loading", "5 ways to use Quality Score to improve your performance"],
        ["The destination works, can be crawled, is accessible and matches the display URL", "Destination requirements (policy)"],
      ],
      adsInforme:
        "The \"Landing pages\" report in Google Ads shows, for each URL, clicks, CTR and the share of clicks that reach mobile-friendly pages. It is the first place to look if landing page experience is \"Below average\".",
      herramientasTexto:
        "Almost any tool will do. What makes a page convert is the content and the speed, not the tool. This table is not a ranking, just when each option fits:",
      herramientasCab: ["Option", "Fits if…", "Watch out for"],
      herramientas: [
        ["WordPress", "Your site is already on WordPress and you want to edit the text yourself", "Use a template without a menu, avoid unnecessary plugins and watch mobile speed"],
        ["Next.js or another framework", "You want full control of the code, performance and tracking", "Every design change needs a developer"],
        ["Landing page builders", "You need to launch campaigns quickly and test variants", "Monthly fee, a properly set-up custom domain and no duplicate content from your site"],
      ],
      herramientasNota: (
        <>
          If you would rather we built it, we do it as part of our <Link href={L("web-design")} className={a}>web design service</Link>, with conversion tracking included.
        </>
      ),
      cta: {
        titulo: "Is your landing page getting visits but no enquiries?",
        texto:
          "Our free diagnosis reviews your website's technical health, your visibility on Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 business hours, with no commitment.",
        boton: "Request the free diagnosis",
      },
      fuentes: [
        { texto: "Google Ads Help: About Quality Score for Search campaigns.", url: "https://support.google.com/google-ads/answer/2404197?hl=en" },
        { texto: "Google Ads Help: Optimize your ads and landing pages.", url: "https://support.google.com/google-ads/answer/6238826?hl=en" },
        { texto: "Google Ads Help: 5 ways to use Quality Score to improve your performance.", url: "https://support.google.com/google-ads/answer/6167130?hl=en" },
        { texto: "Google Ads Help: Evaluate the performance of your landing pages.", url: "https://support.google.com/google-ads/answer/7543502?hl=en" },
        { texto: "Google Ads policies: Destination requirements.", url: "https://support.google.com/adspolicy/answer/6368661?hl=en" },
        { texto: "PageSpeed Insights, Google's free tool.", url: "https://pagespeed.web.dev/" },
      ],
      consultado: "Accessed 28/10/2026.",
      relacionados: (
        <>
          Related services: <Link href={L("web-design")} className={a}>Web design</Link> · <Link href={L("google-ads-management")} className={a}>Google Ads management</Link> · <Link href={L("digital-audit")} className={a}>Free diagnosis</Link>
        </>
      ),
      volver: "← Back to blog",
    };
  }

  return {
    crumbs: ["Accueil", "Landing page : définition et exemples"],
    category: "Création web",
    updated: "Mis à jour le 2 novembre 2026",
    intro:
      "Quatre exemples de landing page par type de PME, annotés avec ce que vous pouvez vérifier sur la vôtre, et un diagnostic en 10 questions pour le cas où la page reçoit des visites mais aucune demande.",
    alt: "Deux maquettes de landing page comparées : avant, avec un titre générique, un menu à six sorties, trois boutons, un formulaire de huit champs et une photo de banque d'images ; après, avec un titre service et bénéfice, sans menu, un seul bouton, un formulaire de trois champs et de vrais avis",
    answer: (
      <>
        Une <strong>landing page</strong> (page d&apos;atterrissage) est une page web conçue pour que le visiteur fasse une seule chose : demander un devis, réserver, acheter ou télécharger quelque chose. Contrairement à la page d&apos;accueil, elle ne présente pas toute l&apos;entreprise : elle répond à une recherche ou à une annonce précise et retire tout ce qui détourne de cette action.
      </>
    ),
    h: {
      resumen: "En bref",
      diferencia: "Qu'est-ce qu'une landing page et en quoi diffère-t-elle de la page d'accueil ?",
      elementos: "Quels éléments a une landing page qui convertit ?",
      ejemplos: "Exemples de landing page annotés par type d'entreprise",
      propio: "Un exemple réel : notre page de diagnostic gratuit",
      errores: "Quelles erreurs empêchent une landing page de convertir ?",
      diagnostico: "Ma landing page ne convertit pas : diagnostic en 10 questions",
      ads: "Qu'exige Google Ads d'une landing page ?",
      herramientas: "Avec quel outil créer une landing page ?",
      faq: "Questions fréquentes",
      fuentes: "Sources",
    },
    resumen: [
      <>Une <strong>landing page</strong> a <strong>un seul objectif</strong> : que le visiteur demande un devis, réserve, achète ou télécharge quelque chose.</>,
      <>Elle fonctionne quand elle <strong>reprend ce que la personne a cherché</strong> ou ce que promettait l&apos;annonce, et qu&apos;elle retire tout ce qui détourne de cette action.</>,
      <>Les exemples ci-dessous sont <strong>annotés avec 5 éléments vérifiables</strong> sur votre propre page, selon le type d&apos;entreprise.</>,
      <>Si votre landing ne convertit pas, vérifiez dans cet ordre : <strong>message, trafic, formulaire, mobile et mesure</strong>.</>,
      <>Pour Google Ads, l&apos;<strong>expérience sur la page de destination</strong> est l&apos;une des trois composantes du niveau de qualité.</>,
    ] as ReactNode[],
    diferenciaTexto:
      "La page d'accueil doit servir tout le monde : clients, candidats, fournisseurs et personnes qui veulent seulement votre numéro. Une landing page sert une seule personne avec un seul besoin. C'est pourquoi elle comporte en général moins de liens, un message plus précis et un bouton unique.",
    diferenciaCab: ["Aspect", "Page d'accueil", "Landing page"],
    diferencias: [
      ["Objectif", "Présenter l'entreprise et répartir la visite sur le site", "Obtenir une action précise"],
      ["Origine des visites", "Recherches de marque, liens et recherches variées", "Une annonce, une campagne ou une recherche précise"],
      ["Navigation", "Menu complet avec de nombreuses sorties", "Sans menu ou avec le strict minimum"],
      ["Message", "Général : tout ce que fait l'entreprise", "Un seul : le service ou l'offre recherché"],
      ["Mesure", "Visites et parcours sur le site", "Pourcentage de visiteurs qui réalisent l'action"],
    ],
    diferenciaAds: (
      <>
        C&apos;est la page vers laquelle orienter vos <Link href={L("google-ads-management")} className={a}>campagnes Google Ads</Link> : la personne qui clique sur une annonce « réparation de chaudière » veut voir cela, pas la page d&apos;accueil avec tous vos services.
      </>
    ),
    elementosIntro: "Il n'existe pas de modèle unique, mais ces sept éléments se retrouvent dans presque toutes les landing pages qui fonctionnent :",
    elementos: [
      <><strong>Un titre qui reprend la recherche ou l&apos;annonce.</strong> Service et bénéfice en une phrase : « Réparation de chaudière avec devis avant intervention » en dit plus que « Solutions globales pour votre maison ».</>,
      <><strong>Un sous-titre qui dit à qui elle s&apos;adresse et ce qui est inclus.</strong> Zone d&apos;intervention, délai ou ce que reçoit le client, avec des engagements que vous pouvez tenir.</>,
      <><strong>Une action principale.</strong> Un bouton dont le texte dit ce qui se passe au clic (« Demander un devis », « Prendre rendez-vous »), pas « Envoyer » ni « En savoir plus ». Il peut être répété sur la page, mais c&apos;est toujours la même action.</>,
      <><strong>Un formulaire court.</strong> Seulement ce qu&apos;il faut pour le premier contact, avec l&apos;information RGPD et, à part, la case pour les communications commerciales.</>,
      <><strong>De vraies preuves.</strong> Avis Google, inscriptions à un ordre professionnel, années d&apos;activité, garanties ou photos de vos propres réalisations. Pas de témoignages inventés ni de logos de clients sans autorisation.</>,
      <><strong>Des réponses aux doutes qui freinent.</strong> Prix ou mode de calcul, délais, zone d&apos;intervention, ce qui se passe après l&apos;envoi du formulaire. Quelques questions fréquentes courtes en règlent une bonne partie.</>,
      <><strong>Rapide sur mobile et bien mesurée.</strong> Elle charge vite, le bouton est visible sans défiler sur mobile et chaque formulaire ou appel est enregistré comme conversion.</>,
    ] as ReactNode[],
    ejemplosIntro:
      "Ce sont des exemples de démonstration, décrits plutôt que capturés, pour que vous puissiez comparer avec votre page point par point. Chacun comporte cinq éléments que l'on vérifie en ouvrant simplement la page sur mobile.",
    ejemplos: [
      {
        titulo: "Service local : réparation de chaudière",
        contexto: "La personne a un problème aujourd'hui et cherche depuis son mobile. L'action principale est d'appeler ou de demander un devis.",
        items: [
          <><strong>Titre :</strong> le service et la zone où vous intervenez, comme dans l&apos;annonce.</>,
          <><strong>Bouton d&apos;appel</strong> visible sur mobile sans défiler, qui compose le numéro au toucher.</>,
          <><strong>Délai de réponse</strong> écrit, seulement si vous pouvez toujours le tenir.</>,
          <><strong>Avis Google</strong> avec un lien vers votre fiche, pour qu&apos;ils soient vérifiables.</>,
          <><strong>Formulaire de 3 champs :</strong> nom, téléphone ou e-mail et besoin.</>,
        ],
      },
      {
        titulo: "Cabinet de santé : première séance de kinésithérapie",
        contexto: "La confiance et la proximité comptent avant tout. L'action principale est de prendre rendez-vous.",
        items: [
          <><strong>Un soin précis</strong> dans le titre, pas un slogan général sur la santé.</>,
          <><strong>Qui vous reçoit</strong>, avec son diplôme et son numéro d&apos;inscription à l&apos;ordre.</>,
          <><strong>Ce que comprend la première séance</strong>, sa durée et son prix ou la façon dont il est fixé.</>,
          <><strong>Réservation simple :</strong> créneaux disponibles ou formulaire avec la plage horaire souhaitée.</>,
          <><strong>Un formulaire sans données de santé</strong> et sans promesse de résultats : le détail clinique se traite en consultation.</>,
        ],
      },
      {
        titulo: "Boutique en ligne : landing d'une campagne produit",
        contexto: "La personne compare les prix et les conditions. L'action principale est d'ajouter au panier.",
        items: [
          <><strong>Produit et prix</strong> en haut, TVA indiquée.</>,
          <><strong>Frais et délai de livraison</strong> visibles avant le panier, pas à la fin.</>,
          <><strong>Un seul bouton d&apos;achat</strong>, sans bannières d&apos;autres offres autour.</>,
          <><strong>Vos propres photos et dimensions</strong> ou tailles, qui suscitent le plus de questions.</>,
          <><strong>Retours et avis d&apos;acheteurs</strong> accessibles depuis la même page.</>,
        ],
      },
      {
        titulo: "Entreprise B2B : un service pour d'autres entreprises",
        contexto: "Plusieurs personnes décident et la vente est plus longue. L'action principale est de demander un rendez-vous ou de télécharger un document.",
        items: [
          <><strong>Un titre avec le problème du secteur</strong> et le type d&apos;entreprise visé.</>,
          <><strong>Le fonctionnement</strong> en trois ou quatre étapes, avec les délais.</>,
          <><strong>Références ou études de cas</strong> seulement si elles sont réelles et autorisées par le client.</>,
          <><strong>Un formulaire qui qualifie :</strong> e-mail professionnel et une question sur la taille ou le besoin. Nous l&apos;expliquons dans <Link href={L("comment-generer-leads-qualite")} className={a}>comment générer des leads de qualité</Link>.</>,
          <><strong>La suite :</strong> qui répond, par quel canal et dans quel délai.</>,
        ],
      },
    ] as Ejemplo[],
    propioTexto: (
      <>
        La page de <Link href={L("audit-digital")} className={a}>diagnostic gratuit</Link> de Mkt Web 360 est une landing page avec une seule action : demander le rapport. La page d&apos;origine est en espagnol ; voici ses cinq éléments :
      </>
    ),
    propio: [
      <><strong>Un titre avec une promesse et un délai :</strong> un diagnostic gratuit de votre présence sur Google et dans l&apos;IA, en 24 heures, dans votre boîte mail.</>,
      <><strong>Trois puces qui réduisent le risque :</strong> gratuit et sans engagement ; vérifié par un spécialiste ; SEO, IA et fiche Google dans le même rapport.</>,
      <><strong>Le formulaire à côté du titre :</strong> seuls le nom, l&apos;e-mail et le site sont obligatoires ; téléphone, fiche Google et objectif sont facultatifs.</>,
      <><strong>Ce que l&apos;on reçoit et comment ça marche</strong>, expliqué en blocs avant les questions fréquentes.</>,
      <><strong>La même action à la fin :</strong> le dernier bouton ramène au formulaire.</>,
    ] as ReactNode[],
    propioNota:
      "Elle garde le menu du site, car elle reçoit aussi des visites depuis le blog et depuis Google, pas seulement depuis des annonces. Sur une landing réservée aux campagnes, nous le retirerions.",
    errores: [
      <><strong>Plusieurs objectifs à la fois :</strong> appeler, écrire, suivre sur les réseaux et s&apos;abonner sur le même écran.</>,
      <><strong>Le menu complet du site :</strong> chaque lien est une sortie avant la conversion.</>,
      <><strong>Un formulaire long :</strong> demander l&apos;adresse, l&apos;entreprise ou le budget alors que ce n&apos;est pas encore utile.</>,
      <><strong>Envoyer l&apos;annonce vers la page d&apos;accueil</strong> au lieu de la page du service annoncé.</>,
      <><strong>Une page pensée pour l&apos;ordinateur :</strong> sur mobile, le bouton se retrouve en bas ou le formulaire est pénible à remplir.</>,
      <><strong>Des preuves invérifiables :</strong> témoignages anonymes, chiffres sans source ou photos de banque d&apos;images.</>,
    ] as ReactNode[],
    erroresNota: (
      <>
        Si ces problèmes se répètent sur tout le site et pas seulement sur une page, il faudra peut-être plus qu&apos;une retouche : consultez les <Link href={L("signs-your-website-needs-redesign")} className={a}>signes qu&apos;un site a besoin d&apos;une refonte</Link>.
      </>
    ),
    diagnosticoIntro: "Répondez-y avec la page ouverte sur votre mobile. Chaque « non » est une tâche concrète :",
    diagnostico: [
      <><strong>Le titre reprend-il ce que la personne a cherché ou ce que promettait l&apos;annonce ?</strong> Sinon, réécrivez-le avec le service et le bénéfice.</>,
      <><strong>Comprend-on en quelques secondes ce que vous proposez, à qui et où ?</strong> Montrez-la à quelqu&apos;un qui ne connaît pas votre activité et demandez-lui.</>,
      <><strong>Y a-t-il une seule action principale ?</strong> S&apos;il y a trois boutons différents, choisissez-en un.</>,
      <><strong>Le bouton ou le formulaire est-il visible sur mobile sans défiler ?</strong> Vérifiez sur votre propre téléphone.</>,
      <><strong>Le formulaire ne demande-t-il que l&apos;essentiel ?</strong> Retirez les champs que vous n&apos;utilisez pas pour la première réponse.</>,
      <><strong>Y a-t-il de vraies preuves vérifiables ?</strong> Avis Google, inscriptions professionnelles, garanties ou réalisations.</>,
      <><strong>Répondez-vous aux doutes qui freinent ?</strong> Prix ou mode de calcul, délai, zone et la suite.</>,
      <><strong>Charge-t-elle vite sur mobile ?</strong> PageSpeed Insights, l&apos;outil gratuit de Google, indique ce qui la ralentit.</>,
      <><strong>Le bon trafic arrive-t-il ?</strong> Regardez les termes de recherche dans Google Ads ou les requêtes dans Search Console : s&apos;ils n&apos;ont rien à voir avec votre service, le problème se situe avant la page.</>,
      <><strong>La conversion est-elle bien mesurée ?</strong> Parfois la landing convertit, mais les formulaires ou les appels ne sont pas enregistrés. Faites un test et vérifiez qu&apos;il apparaît dans Google Analytics 4 ou Google Ads.</>,
    ] as ReactNode[],
    sintomasIntro: "Pour savoir par où commencer, croisez ce que vous voyez dans vos données avec les questions :",
    sintomasCab: ["Symptôme", "Cause probable", "Questions à revoir"],
    sintomas: [
      ["Beaucoup de visites et presque aucune demande", "Le message ne correspond pas à la recherche, ou le trafic n'est pas le bon", "1, 2 et 9"],
      ["Les visiteurs repartent aussitôt", "Chargement lent ou page différente de ce que promettait l'annonce", "1 et 8"],
      ["Ils commencent le formulaire sans le terminer", "Trop de champs ou erreurs à l'envoi", "4 et 5"],
      ["Des demandes qui ne correspondent pas", "Promesse ambiguë ou manque d'informations qui filtrent", "2 et 7"],
      ["Analytics à zéro mais des e-mails arrivent", "La conversion n'est pas enregistrée", "10"],
    ],
    adsTexto: (
      <>
        Selon l&apos;aide Google Ads, l&apos;<strong>expérience sur la page de destination</strong> est l&apos;une des trois composantes du niveau de qualité et reflète la pertinence et l&apos;utilité de la page pour les personnes qui cliquent sur l&apos;annonce. Elle est évaluée par comparaison avec les annonces d&apos;autres annonceurs diffusées pour la même recherche au cours des 90 derniers jours, et son état peut être « Supérieur à la moyenne », « Moyen » ou « Inférieur à la moyenne ».
      </>
    ),
    adsIntro: "Ce que recommande Google dans sa documentation officielle :",
    adsCab: ["Ce que demande Google", "Où il le dit"],
    ads: [
      ["La page est étroitement liée à l'annonce et aux mots clés", "Optimiser vos annonces et vos pages de destination"],
      ["La page correspond à l'incitation à l'action de l'annonce", "Optimiser vos annonces et vos pages de destination"],
      ["Des informations utiles et originales sur ce que vous annoncez, l'essentiel en haut de page", "Optimiser vos annonces et vos pages de destination"],
      ["Navigation simple, sans excès d'annonces ni de fenêtres pop-up, et adaptée au mobile", "Optimiser vos annonces et vos pages de destination"],
      ["Un message cohérent de l'annonce à la page et une vitesse de chargement améliorée", "5 manières d'utiliser le niveau de qualité pour améliorer vos performances"],
      ["La destination fonctionne, peut être explorée, est accessible et correspond à l'URL à afficher", "Exigences relatives à la destination de l'annonce (règles)"],
    ],
    adsInforme:
      "Le rapport « Pages de destination » de Google Ads affiche, pour chaque URL, les clics, le CTR et la part de clics qui aboutissent sur des pages adaptées aux mobiles. C'est le premier endroit à consulter si l'expérience sur la page de destination est « Inférieure à la moyenne ».",
    herramientasTexto:
      "Presque n'importe lequel. Ce qui fait convertir une page, c'est le contenu et la vitesse, pas l'outil. Ce tableau n'est pas un classement, il indique quand chaque option convient :",
    herramientasCab: ["Option", "Convient si…", "Points de vigilance"],
    herramientas: [
      ["WordPress", "Votre site est déjà sous WordPress et vous voulez modifier les textes vous-même", "Utiliser un modèle sans menu, éviter les extensions superflues et surveiller la vitesse sur mobile"],
      ["Next.js ou un autre framework", "Vous voulez un contrôle total du code, des performances et de la mesure", "Chaque changement de design passe par un développeur"],
      ["Constructeurs de landing pages", "Vous devez lancer des campagnes vite et tester des variantes", "Abonnement mensuel, domaine personnalisé bien configuré et pas de contenu dupliqué de votre site"],
    ],
    herramientasNota: (
      <>
        Si vous préférez que nous la réalisions, nous le faisons dans le cadre de notre service de <Link href={L("creation-site-web")} className={a}>création de site web</Link>, avec la mesure des conversions incluse.
      </>
    ),
    cta: {
      titulo: "Votre landing reçoit des visites mais pas de demandes ?",
      texto:
        "Notre diagnostic gratuit examine l'état technique de votre site, votre visibilité sur Google et dans les assistants IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrées maximum, sans engagement.",
      boton: "Demander le diagnostic gratuit",
    },
    fuentes: [
      { texto: "Aide Google Ads : « À propos du niveau de qualité pour les campagnes sur le Réseau de Recherche ».", url: "https://support.google.com/google-ads/answer/2404197?hl=fr" },
      { texto: "Aide Google Ads : « Optimiser vos annonces et vos pages de destination ».", url: "https://support.google.com/google-ads/answer/6238826?hl=fr" },
      { texto: "Aide Google Ads : « 5 manières d'utiliser le niveau de qualité pour améliorer vos performances ».", url: "https://support.google.com/google-ads/answer/6167130?hl=fr" },
      { texto: "Aide Google Ads : évaluer les performances de vos pages de destination.", url: "https://support.google.com/google-ads/answer/7543502?hl=fr" },
      { texto: "Règles Google Ads : « Exigences relatives à la destination de l'annonce ».", url: "https://support.google.com/adspolicy/answer/6368661?hl=fr" },
      { texto: "PageSpeed Insights, outil gratuit de Google.", url: "https://pagespeed.web.dev/" },
    ],
    consultado: "Consulté le 28/10/2026.",
    relacionados: (
      <>
        Services associés : <Link href={L("creation-site-web")} className={a}>Création de site web</Link> · <Link href={L("gestion-google-ads")} className={a}>Gestion Google Ads</Link> · <Link href={L("audit-digital")} className={a}>Diagnostic gratuit</Link>
      </>
    ),
    volver: "← Retour au blog",
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
  const { lang: rawLang } = await params;
  const lang = toLang(rawLang);
  const m = META[lang];
  const c = contenido(lang);
  const faqs = FAQS[lang];
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  const h2 = "text-2xl font-bold text-primary-600";
  const h3 = "text-xl font-bold text-primary-700";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.h1,
    description: m.description,
    inLanguage: lang,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE,
    image: `https://www.mktweb360.com${ogFor(lang)}`,
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
        <Breadcrumbs crumbs={[{ label: c.crumbs[0], href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: c.crumbs[1] }]} />
        <AuthorByline lang={lang} block />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{c.category}</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{c.updated}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{m.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{c.intro}</p>
          <Image src={ogFor(lang)} alt={c.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{c.answer}</p>

          <h2 className={h2}>{c.h.resumen}</h2>
          <Lista items={c.resumen} />

          <h2 className={h2}>{c.h.diferencia}</h2>
          <p>{c.diferenciaTexto}</p>
          <Tabla cabecera={c.diferenciaCab} filas={c.diferencias} />
          <p>{c.diferenciaAds}</p>

          <h2 className={h2}>{c.h.elementos}</h2>
          <p>{c.elementosIntro}</p>
          <Lista items={c.elementos} numerada />

          <h2 className={h2}>{c.h.ejemplos}</h2>
          <p>{c.ejemplosIntro}</p>
          {c.ejemplos.map((e) => (
            <section key={e.titulo} className="space-y-3">
              <h3 className={h3}>{e.titulo}</h3>
              <p>{e.contexto}</p>
              <Lista items={e.items} numerada />
            </section>
          ))}

          <section className="space-y-3">
            <h3 className={h3}>{c.h.propio}</h3>
            <p>{c.propioTexto}</p>
            <Lista items={c.propio} numerada />
            <p>{c.propioNota}</p>
          </section>

          <h2 className={h2}>{c.h.errores}</h2>
          <Lista items={c.errores} />
          <p>{c.erroresNota}</p>

          <BlogBanner lang={lang} />

          <h2 className={h2}>{c.h.diagnostico}</h2>
          <p>{c.diagnosticoIntro}</p>
          <Lista items={c.diagnostico} numerada />
          <p>{c.sintomasIntro}</p>
          <Tabla cabecera={c.sintomasCab} filas={c.sintomas} />

          <h2 className={h2}>{c.h.ads}</h2>
          <p>{c.adsTexto}</p>
          <p>{c.adsIntro}</p>
          <Tabla cabecera={c.adsCab} filas={c.ads} />
          <p>{c.adsInforme}</p>

          <h2 className={h2}>{c.h.herramientas}</h2>
          <p>{c.herramientasTexto}</p>
          <Tabla cabecera={c.herramientasCab} filas={c.herramientas} />
          <p>{c.herramientasNota}</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{c.cta.titulo}</p>
            <p className="text-gray-600 text-sm mb-4">{c.cta.texto}</p>
            <Link
              href={`/${lang}/${langSlug(lang, "digital-audit")}/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {c.cta.boton}
            </Link>
          </div>

          <h2 className={h2}>{c.h.faq}</h2>
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

          <h2 className={h2}>{c.h.fuentes}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {c.fuentes.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto} {c.consultado}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">{c.relacionados}</p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {c.volver}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={ES_SLUG} />
    </>
  );
}
