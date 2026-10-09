import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";
import { planPorId, precioTexto } from "@/lib/planes-seo";

// 09/10/2026 — EN/FR de /agencia-marketing-digital-toledo/. Esta carpeta sirve
// /en/digital-marketing-agency-toledo/; /fr/agence-marketing-digital-tolede/ reexporta este módulo.
// /oferta-seo-geo-gbp/ y /oferta-web-seo-organico/ solo existen en ES: en EN/FR esas tarjetas van sin enlace.

const BASE = "https://www.mktweb360.com";
type L = "en" | "fr";

const path = (lang: L) => `/${lang}/${langSlug(lang, "digital-marketing-agency-toledo")}/`;
const href = (lang: L, slug: string) => `/${lang}/${langSlug(lang, slug)}/`;

const META = {
  en: {
    title: "Digital Marketing Agency in Toledo, Spain",
    description: "Digital marketing agency based in Toledo: SEO, Google Maps, AI, Google Ads, web design and social media for SMEs and professionals. Published prices.",
    ogTitle: "Digital Marketing Agency in Toledo | Mkt Web 360",
    ogDescription: "Digital marketing for SMEs and professionals in Toledo, from our base in the province.",
  },
  fr: {
    title: "Agence de marketing digital à Tolède, Espagne",
    description: "Agence de marketing digital basée à Tolède : SEO, Google Maps, IA, Google Ads, création web et réseaux sociaux pour PME et professionnels. Tarifs publiés.",
    ogTitle: "Agence de marketing digital à Tolède | Mkt Web 360",
    ogDescription: "Marketing digital pour les PME et les professionnels de Tolède, depuis notre siège dans la province.",
  },
};

function content(lang: L): LocalServiceContent {
  const pyme = planPorId("pyme", lang);
  const local = planPorId("local", lang);
  if (lang === "fr") {
    return {
      lang,
      url: BASE + path(lang),
      breadcrumb: "Agence de marketing digital à Tolède",
      h1: "Agence de marketing digital à Tolède",
      h1Accent: "pour les PME et les professionnels qui veulent plus de clients",
      intro: "Nous sommes Mkt Web 360, agence de marketing digital basée à El Viso de San Juan (Tolède). Nous aidons les entreprises de la province à trouver des clients sur internet : être trouvées sur Google et sur Google Maps, être recommandées par l'IA et avoir un site qui transforme les visites en contacts.",
      bullets: ["Un seul responsable pour votre compte", "Des spécialistes par domaine à chaque étape du projet", "Google Ads sans commission sur votre investissement"],
      porQue: [
        { t: "Nous commençons par un diagnostic", d: "Avant de proposer des actions, nous examinons votre site, votre fiche Google et vos données. Vous savez ainsi quoi corriger en premier et ce qui ne vaut pas encore la peine d'être fait." },
        { t: "Des prix clairs", d: "Nous publions nos tarifs et ce que comprend chacun d'eux, avec leurs limites. Sans engagement sur les services mensuels." },
        { t: "Nous mesurons ce qui compte", d: "Contacts, appels et ventes, pas seulement des visites. Chaque mois, nous vous envoyons un rapport avec le travail réalisé et les prochaines étapes." },
      ],
      queHacemosTitulo: "Services de marketing digital pour les entreprises de Tolède",
      queHacemos: [
        { t: "SEO et référencement local", d: "Apparaître sur Google et sur la carte quand on cherche votre service.", href: href(lang, "seo-agency-toledo"), linkText: "Agence SEO à Tolède" },
        { t: "Création de sites web et boutiques en ligne", d: "Des sites rapides, clairs et prêts à générer des contacts.", href: href(lang, "web-design-toledo"), linkText: "Création de sites web à Tolède" },
        { t: "Google Ads", d: "Des campagnes pour trouver des clients dès le premier jour, sans prélever de pourcentage sur votre investissement.", href: href(lang, "google-ads-management"), linkText: "Service Google Ads" },
        { t: "Visibilité dans les assistants d'IA (GEO)", d: "Faire en sorte que les assistants d'IA citent et recommandent votre entreprise.", href: href(lang, "geo-generative-engine-optimization"), linkText: "Service GEO" },
        { t: "Réseaux sociaux", d: "Des publications avec un objectif précis : confiance, communauté ou acquisition.", href: href(lang, "social-media-marketing"), linkText: "Service réseaux sociaux" },
        { t: "Audit gratuit", d: "Un diagnostic SEO et de visibilité dans l'IA de votre site, dans votre boîte mail.", href: href(lang, "digital-audit"), linkText: "Demander l'audit gratuit" },
      ],
      precios: [
        { nombre: pyme.nombre, precio: precioTexto(pyme, lang), detalle: "La formule la plus complète pour les PME dont le site compte jusqu'à 30 pages.", href: pyme.href },
        { nombre: "Site + 6 mois de SEO", precio: "999 € HT", detalle: "Site professionnel prêt à être positionné, avec hébergement, nom de domaine et messagerie." },
        { nombre: "Calculez votre formule SEO", precio: `À partir de ${precioTexto(local, lang)}`, detalle: "Des formules selon la taille de votre site, vos établissements et vos langues.", href: href(lang, "seo-pricing") },
      ],
      contexto: {
        titulo: "Comment choisir une agence de marketing digital à Tolède",
        parrafos: [
          "Demandez toujours qu'on vous explique ce qui sera fait chaque mois, par qui et comment ce sera mesuré. Méfiez-vous des garanties de première position et des contrats à engagement long sans résultats mesurables.",
          "Avant de décider, comparez ce que comprend chaque proposition : combien de contenus par mois, qui applique les modifications techniques, si la fiche Google fait partie du service et avec quels outils on mesure. Les outils de mesure (Search Console et Google Analytics) doivent toujours être au nom de votre entreprise, quel que soit votre prestataire.",
          "Nous avons rédigé un guide avec les questions à poser et les signaux d'alerte avant de signer. Il vous aide à évaluer n'importe quelle proposition, y compris la nôtre.",
        ],
      },
      enlaces: [
        { href: href(lang, "digital-marketing-agencies-toledo"), text: "Guide : comment choisir une agence à Tolède" },
        { href: href(lang, "digital-marketing-toledo"), text: "Guide du marketing digital à Tolède" },
        { href: href(lang, "seo-pricing"), text: "Tarifs SEO" },
      ],
      faqs: [
        { q: "Où se trouve l'agence ?", a: "Notre siège se trouve Calle Chopo 98, 45215 El Viso de San Juan (Tolède). Nous travaillons avec des entreprises de toute la province et du reste de l'Espagne." },
        { q: "Travaillez-vous avec des indépendants ou seulement avec des entreprises ?", a: "Avec les deux. Nous avons des formules pour les professionnels avec un site simple, pour les PME et pour les entreprises avec plusieurs établissements ou des boutiques en ligne." },
        { q: "Prenez-vous une commission sur votre investissement Google Ads ?", a: "Non. Nous facturons la gestion, pas un pourcentage de ce que vous investissez en publicité." },
        { q: "Par où commencer si je ne sais pas ce dont j'ai besoin ?", a: "Par l'audit gratuit : nous vous envoyons par e-mail un diagnostic de votre site sur Google et dans les assistants d'IA, avec les 3 actions les plus impactantes. À partir de là, vous décidez de le faire vous-même ou avec nous." },
        { q: "De quelles informations avez-vous besoin pour commencer ?", a: "L'adresse de votre site et, si vous les avez, un accès en lecture à Google Search Console et à Google Analytics. Les comptes restent toujours au nom de votre entreprise." },
        { q: "Y a-t-il un engagement ?", a: "Les services SEO mensuels sont sans engagement : vous pouvez résilier avec un préavis de 30 jours." },
      ],
      formType: "marketing-toledo",
    };
  }
  return {
    lang,
    url: BASE + path(lang),
    breadcrumb: "Digital marketing agency in Toledo",
    h1: "Digital marketing agency in Toledo",
    h1Accent: "for SMEs and professionals who want more customers",
    intro: "We are Mkt Web 360, a digital marketing agency based in El Viso de San Juan (Toledo). We help businesses in the province win customers online: being found on Google and on Google Maps, being recommended by AI and having a website that turns visits into enquiries.",
    bullets: ["A single person responsible for your account", "Specialists in each area at every stage of the project", "Google Ads with no commission on your ad spend"],
    porQue: [
      { t: "We start with a diagnosis", d: "Before proposing any actions, we review your website, your Google listing and your data. That way you know what to fix first and what is not worth doing yet." },
      { t: "Clear prices", d: "We publish our rates and what each one includes, with its limits. No minimum term on monthly services." },
      { t: "We measure what matters", d: "Enquiries, calls and sales, not just visits. Every month we send you a report with what has been done and the next steps." },
    ],
    queHacemosTitulo: "Digital marketing services for businesses in Toledo",
    queHacemos: [
      { t: "SEO and local search", d: "Appear on Google and on the map when people search for your service.", href: href(lang, "seo-agency-toledo"), linkText: "SEO agency in Toledo" },
      { t: "Web design and online stores", d: "Fast, clear websites ready to capture enquiries.", href: href(lang, "web-design-toledo"), linkText: "Web design in Toledo" },
      { t: "Google Ads", d: "Campaigns to win customers from day one, without charging a percentage of your ad spend.", href: href(lang, "google-ads-management"), linkText: "Google Ads service" },
      { t: "Visibility in AI assistants (GEO)", d: "Getting AI assistants to cite and recommend your business.", href: href(lang, "geo-generative-engine-optimization"), linkText: "GEO service" },
      { t: "Social media", d: "Posts with a specific goal: trust, community or lead generation.", href: href(lang, "social-media-marketing"), linkText: "Social media service" },
      { t: "Free audit", d: "An SEO and AI-visibility diagnosis of your website, sent to your inbox.", href: href(lang, "digital-audit"), linkText: "Request a free audit" },
    ],
    precios: [
      { nombre: pyme.nombre, precio: precioTexto(pyme, lang), detalle: "The most complete package for SMEs with a website of up to 30 pages.", href: pyme.href },
      { nombre: "Website + 6 months of SEO", precio: "€999 + VAT", detalle: "A professional website ready to rank, with hosting, domain and email." },
      { nombre: "Work out your SEO plan", precio: `From ${precioTexto(local, lang)}`, detalle: "Plans based on the size of your website, your locations and your languages.", href: href(lang, "seo-pricing") },
    ],
    contexto: {
      titulo: "How to choose a digital marketing agency in Toledo",
      parrafos: [
        "Always ask them to explain what will be done each month, who will do it and how it will be measured. Be wary of first-position guarantees and of long tie-in contracts without measurable results.",
        "Before deciding, compare what each proposal includes: how many pieces of content per month, who applies the technical changes, whether the Google listing is part of the service and which tools are used to measure results. The measurement tools (Search Console and Google Analytics) must always be in your company's name, whoever you work with.",
        "We have written a guide with the questions worth asking and the warning signs to look out for before hiring. It helps you assess any proposal, including ours.",
      ],
    },
    enlaces: [
      { href: href(lang, "digital-marketing-agencies-toledo"), text: "Guide: how to choose an agency in Toledo" },
      { href: href(lang, "digital-marketing-toledo"), text: "Guide to digital marketing in Toledo" },
      { href: href(lang, "seo-pricing"), text: "SEO pricing" },
    ],
    faqs: [
      { q: "Where is the agency?", a: "Our base is at Calle Chopo 98, 45215 El Viso de San Juan (Toledo). We work with businesses across the province and the rest of Spain." },
      { q: "Do you work with sole traders or only with companies?", a: "With both. We have plans for professionals with a simple website, for SMEs and for companies with several locations or online stores." },
      { q: "Do you charge a commission on your Google Ads spend?", a: "No. We charge for management, not a percentage of what you invest in advertising." },
      { q: "Where should I start if I don't know what I need?", a: "With the free audit: we email you a diagnosis of your website on Google and in AI assistants, with the 3 highest-impact actions. From there, you decide whether to do it yourself or with us." },
      { q: "What information do you need to get started?", a: "Your website address and, if you have them, read access to Google Search Console and Google Analytics. The accounts always remain in your company's name." },
      { q: "Is there a minimum term?", a: "Monthly SEO services have no minimum term: you can cancel with 30 days' notice." },
    ],
    formType: "marketing-toledo",
  };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const m = META[lang];
  const url = BASE + path(lang);
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(path(lang)) ?? { canonical: url },
    openGraph: { title: m.ogTitle, description: m.ogDescription, url, images: [{ url: "/og-marketing-digital-toledo.jpg", width: 1200, height: 630 }] },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const c = content(lang);
  return (
    <>
      {localServiceSchemas(c, lang === "fr" ? "Marketing digital à Tolède" : "Digital marketing in Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
