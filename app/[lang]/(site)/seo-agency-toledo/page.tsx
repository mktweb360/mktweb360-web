import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";
import { planPorId, precioTexto } from "@/lib/planes-seo";

// 09/10/2026 — EN/FR de /agencia-seo-toledo/. Esta carpeta sirve /en/seo-agency-toledo/;
// /fr/agence-seo-tolede/ reexporta este módulo. Precios desde lib/planes-seo.ts (fuente única).
// La landing /oferta-seo-geo-gbp/ solo existe en ES: en EN/FR la tarjeta va sin enlace.

const BASE = "https://www.mktweb360.com";
type L = "en" | "fr";

const path = (lang: L) => `/${lang}/${langSlug(lang, "seo-agency-toledo")}/`;
const href = (lang: L, slug: string) => `/${lang}/${langSlug(lang, slug)}/`;

const META = {
  en: {
    title: "SEO Agency in Toledo: Website Rankings",
    description: "SEO agency based in Toledo: search rankings, Google Maps and AI visibility for businesses across the province. Published prices and a free SEO audit.",
    ogTitle: "SEO Agency in Toledo | Mkt Web 360",
    ogDescription: "Search engine optimisation for businesses in Toledo, from our base in the province.",
  },
  fr: {
    title: "Agence SEO à Tolède : référencement web",
    description: "Agence SEO basée à Tolède : référencement, Google Maps et visibilité dans l'IA pour les entreprises de la province. Tarifs publiés et audit SEO gratuit.",
    ogTitle: "Agence SEO à Tolède | Mkt Web 360",
    ogDescription: "Référencement pour les entreprises de Tolède, depuis notre siège dans la province.",
  },
};

function content(lang: L): LocalServiceContent {
  const local = planPorId("local", lang);
  const pyme = planPorId("pyme", lang);
  if (lang === "fr") {
    return {
      lang,
      url: BASE + path(lang),
      breadcrumb: "Agence SEO à Tolède",
      h1: "Agence SEO à Tolède",
      h1Accent: "pour qu'on vous trouve avant vos concurrents",
      intro: "Nous sommes une agence de référencement basée à El Viso de San Juan, dans la Sagra tolédane. Nous travaillons le SEO d'entreprises de Tolède pour qu'elles apparaissent sur Google, sur Google Maps et dans les assistants d'IA lorsque leurs clients cherchent ce qu'elles proposent.",
      bullets: ["Agence fondée en 2016, basée dans la province de Tolède", "SEO + Google Maps + visibilité dans l'IA", "Tarifs publiés et sans engagement"],
      porQue: [
        { t: "Nous sommes dans la province", d: "Notre siège est dans la Sagra. Nous savons que se positionner à Tolède même n'a rien à voir avec une petite commune, et nous construisons le SEO de chaque entreprise en fonction de l'endroit où se trouvent ses clients." },
        { t: "Une méthode, pas des promesses", d: "Nous partons de vos données Search Console, vérifions chaque erreur avant toute recommandation et mesurons chaque mois. Nous ne garantissons pas de positions : personne ne le peut." },
        { t: "Google et l'IA en même temps", d: "De plus en plus de clients interrogent des assistants d'IA. Nous travaillons votre site pour qu'il y soit aussi cité et recommandé." },
      ],
      queHacemosTitulo: "Ce que nous faisons pour le SEO de votre entreprise à Tolède",
      queHacemos: [
        { t: "Audit technique et de contenus", d: "Indexation, vitesse, structure et textes : nous corrigeons ce qui freine votre site avant de créer quoi que ce soit de nouveau." },
        { t: "Mots-clés de votre service et de votre zone", d: "De vraies recherches de clients de Tolède et des environs, chacune avec sa propre page pour qu'elles ne se fassent pas concurrence." },
        { t: "Google Business Profile", d: "Fiche complète, publications et gestion de vrais avis pour apparaître sur la carte de Google.", href: href(lang, "google-business-profile-service"), linkText: "Service Google Business Profile" },
        { t: "Visibilité dans les assistants d'IA", d: "Contenu citable, données structurées et cohérence de votre marque dans les sources que consultent les assistants.", href: href(lang, "geo-generative-engine-optimization"), linkText: "Qu'est-ce que le GEO" },
      ],
      precios: [
        { nombre: local.nombre, precio: precioTexto(local, lang), detalle: "Sites de 10 pages maximum, 1 fiche Google et 2 contenus par mois.", href: local.href },
        { nombre: pyme.nombre, precio: precioTexto(pyme, lang), detalle: "Sites de 30 pages maximum, 1 fiche Google et 5 contenus par mois.", href: pyme.href },
        { nombre: "Autres tailles et boutiques en ligne", precio: "Calculez votre formule", detalle: "Sites plus grands, plusieurs établissements ou e-commerce.", href: href(lang, "seo-pricing") },
      ],
      contexto: {
        titulo: "Référencement à Tolède : comment nous travaillons la zone",
        parrafos: [
          "Dans la province de Tolède coexistent des recherches très différentes : celui qui cherche un service à Tolède même, celui qui le cherche dans sa commune de la Sagra et celui qui cherche sans indiquer de lieu et laisse Google utiliser sa position. C'est pourquoi il ne suffit pas d'ajouter « Toledo » aux textes : il faut décider quelles pages travaillent chaque zone et comment elles sont renforcées par la fiche Google.",
          "Le travail de chaque mois suit un ordre : nous corrigeons d'abord ce qui, techniquement, empêche le positionnement, puis nous renforçons les pages des services qui vous intéressent le plus et leur lien avec la fiche Google, et enfin nous créons les contenus qui répondent aux questions de vos clients avant qu'ils ne fassent appel à vous. Chaque rapport mensuel explique ce qui a été fait, ce qui a changé dans Search Console et ce que nous ferons ensuite.",
          "Si votre entreprise s'adresse à toute l'Espagne, la stratégie est différente : un positionnement national par service, sans vous limiter à un lieu. Nous vous disons laquelle vous convient après l'audit.",
        ],
      },
      enlaces: [
        { href: href(lang, "seo-web-positioning"), text: "Notre service de référencement SEO" },
        { href: href(lang, "seo-toledo-guide"), text: "Guide : comment faire du SEO à Tolède" },
        { href: href(lang, "digital-audit"), text: "Audit SEO gratuit" },
      ],
      faqs: [
        { q: "Où se trouve votre siège ?", a: "Calle Chopo 98, 45215 El Viso de San Juan (Tolède). Nous travaillons avec des entreprises de toute la province et du reste de l'Espagne." },
        { q: "Combien coûte le SEO pour une entreprise de Tolède ?", a: `La même chose qu'ailleurs : à partir de ${precioTexto(local, lang)} pour un professionnel avec un petit site et ${precioTexto(pyme, lang)} pour une PME. Le calculateur de tarifs SEO vous indique la formule selon la taille de votre site.` },
        { q: "En combien de temps voit-on des résultats ?", a: "Les modifications techniques se reflètent en quelques semaines ; le positionnement sur des recherches concurrentielles prend généralement plusieurs mois. Nous mesurons par rapport à une situation de référence et vous envoyons un rapport chaque mois." },
        { q: "Travaillez-vous aussi la carte de Google ?", a: "Oui. La fiche Google Business Profile fait partie des formules de SEO local et de la formule SEO + GEO + Google Business Profile." },
      ],
      formType: "seo-toledo",
    };
  }
  return {
    lang,
    url: BASE + path(lang),
    breadcrumb: "SEO agency in Toledo",
    h1: "SEO agency in Toledo",
    h1Accent: "so that customers find you before your competitors",
    intro: "We are a search engine optimisation agency based in El Viso de San Juan, in the Toledo part of La Sagra. We handle SEO for businesses in Toledo so that they appear on Google, on Google Maps and in AI assistants when their customers search for what they offer.",
    bullets: ["Agency founded in 2016, based in the province of Toledo", "SEO + Google Maps + visibility in AI", "Published prices and no minimum term"],
    porQue: [
      { t: "We are in the province", d: "Our base is in La Sagra. We know that competing in the city of Toledo is not the same as competing in a small town, and we plan each business's SEO around where its customers are." },
      { t: "A method, not promises", d: "We start from your Search Console data, check every error before recommending anything and measure every month. We do not guarantee rankings: nobody can." },
      { t: "Google and AI at the same time", d: "More and more customers ask AI assistants. We work on your website so that you are also cited and recommended there." },
    ],
    queHacemosTitulo: "What we do for your business's SEO in Toledo",
    queHacemos: [
      { t: "Technical and content audit", d: "Indexing, speed, structure and copy: we fix what is holding your website back before creating anything new." },
      { t: "Keywords for your service and your area", d: "Real searches made by customers in and around Toledo, each with its own page so that they do not compete with each other." },
      { t: "Google Business Profile", d: "A complete listing, regular posts and management of genuine reviews so that you appear on the Google map.", href: href(lang, "google-business-profile-service"), linkText: "Google Business Profile service" },
      { t: "Visibility in AI assistants", d: "Citable content, structured data and a consistent brand across the sources that assistants consult.", href: href(lang, "geo-generative-engine-optimization"), linkText: "What GEO is" },
    ],
    precios: [
      { nombre: local.nombre, precio: precioTexto(local, lang), detalle: "Websites of up to 10 pages, 1 Google Business Profile listing and 2 pieces of content per month.", href: local.href },
      { nombre: pyme.nombre, precio: precioTexto(pyme, lang), detalle: "Websites of up to 30 pages, 1 Google Business Profile listing and 5 pieces of content per month.", href: pyme.href },
      { nombre: "Other sizes and online stores", precio: "Work out your plan", detalle: "Larger websites, several locations or ecommerce.", href: href(lang, "seo-pricing") },
    ],
    contexto: {
      titulo: "Search engine optimisation in Toledo: how we work the area",
      parrafos: [
        "Very different searches coexist in the province of Toledo: someone looking for a service in the city of Toledo, someone looking for it in their own town in La Sagra and someone searching without giving a location and letting Google use where they are. That is why adding «Toledo» to your copy is not enough: you have to decide which pages target each area and how they are reinforced by the Google Business Profile listing.",
        "Each month's work follows an order: first we fix the technical issues that prevent ranking, then we strengthen the pages for the services that matter most to you and their relationship with the Google listing, and finally we create the content that answers your customers' questions before they hire. Each monthly report explains what has been done, what has changed in Search Console and what we will do next.",
        "If your business serves the whole of Spain, the strategy is different: national rankings by service, without limiting yourself to one location. We will tell you which one suits you after the audit.",
      ],
    },
    enlaces: [
      { href: href(lang, "seo-web-positioning"), text: "Our SEO service" },
      { href: href(lang, "seo-toledo-guide"), text: "Guide: how to do SEO in Toledo" },
      { href: href(lang, "digital-audit"), text: "Free SEO audit" },
    ],
    faqs: [
      { q: "Where are you based?", a: "At Calle Chopo 98, 45215 El Viso de San Juan (Toledo). We work with businesses across the province and the rest of Spain." },
      { q: "How much does SEO cost for a business in Toledo?", a: `The same as anywhere else: from ${precioTexto(local, lang)} for a professional with a small website and ${precioTexto(pyme, lang)} for an SME. The SEO pricing calculator shows you the plan based on the size of your website.` },
      { q: "How long does it take to see results?", a: "Technical changes are reflected within weeks; ranking for competitive searches usually takes months. We measure against a baseline and send you a report every month." },
      { q: "Do you also work on the Google map?", a: "Yes. The Google Business Profile listing is part of the local SEO plans and of the SEO + GEO + Google Business Profile package." },
    ],
    formType: "seo-toledo",
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
    openGraph: { title: m.ogTitle, description: m.ogDescription, url, images: [{ url: "/og-seo-toledo.jpg", width: 1200, height: 630 }] },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const c = content(lang);
  return (
    <>
      {localServiceSchemas(c, lang === "fr" ? "Référencement SEO à Tolède" : "Search engine optimisation in Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
