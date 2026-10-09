import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 09/10/2026 — EN/FR de /diseno-web-toledo/. Esta carpeta sirve /en/web-design-toledo/;
// /fr/creation-site-web-tolede/ reexporta este módulo.
// La landing «Web + 6 meses de SEO» (/oferta-web-seo-organico/) solo existe en ES: en EN/FR se
// muestran sus precios sin enlace.

const BASE = "https://www.mktweb360.com";
type L = "en" | "fr";

const path = (lang: L) => `/${lang}/${langSlug(lang, "web-design-toledo")}/`;
const href = (lang: L, slug: string) => `/${lang}/${langSlug(lang, slug)}/`;

const META = {
  en: {
    title: "Web Design in Toledo: Professional Websites",
    description: "Website and online store design for businesses in Toledo, with technical SEO from day one. Based in the province, with prices from €249 + VAT.",
    ogTitle: "Web Design in Toledo | Mkt Web 360",
    ogDescription: "Websites and online stores for businesses in Toledo, fast and ready for Google.",
  },
  fr: {
    title: "Création de sites web professionnels à Tolède",
    description: "Création de sites web et de boutiques en ligne pour les entreprises de Tolède, avec SEO technique dès le premier jour. Basés dans la province, dès 249 € HT.",
    ogTitle: "Création de sites web à Tolède | Mkt Web 360",
    ogDescription: "Sites web et boutiques en ligne pour les entreprises de Tolède, rapides et prêts pour Google.",
  },
};

function content(lang: L): LocalServiceContent {
  if (lang === "fr") {
    return {
      lang,
      url: BASE + path(lang),
      breadcrumb: "Création de sites web à Tolède",
      h1: "Création de sites web à Tolède",
      h1Accent: "des sites rapides qui attirent des clients",
      intro: "Nous créons des sites web et des boutiques en ligne pour les entreprises de Tolède depuis notre siège d'El Viso de San Juan. Des sites pensés pour que le client comprenne ce que vous faites, vous fasse confiance et vous contacte, et prêts à apparaître sur Google dès le premier jour.",
      bullets: ["Prix fixe et publié", "SEO technique et mesure inclus", "Agence basée dans la province de Tolède"],
      porQue: [
        { t: "Un site est un outil de vente", d: "Nous ne le jugeons pas à sa beauté, mais à sa capacité à générer des contacts : messages clairs, appels à l'action visibles et formulaires qui fonctionnent et sont mesurés." },
        { t: "Rapide sur mobile", d: "La plupart de vos clients vous chercheront depuis leur mobile. Nous optimisons les images, les polices et le code pour que le site se charge vite là où cela compte le plus." },
        { t: "Prêt pour Google et l'IA", d: "Titres, structure, données structurées et fiche Google cohérents dès le lancement, pour ne rien avoir à refaire ensuite." },
      ],
      queHacemosTitulo: "Quels types de sites nous créons pour les entreprises de Tolède",
      queHacemos: [
        { t: "Site institutionnel ou de services", d: "Pour les professionnels et les PME qui doivent présenter leurs services et recevoir des demandes.", href: href(lang, "web-design"), linkText: "Service de création de sites web" },
        { t: "Boutique en ligne", d: "Des boutiques sans commission sur les ventes ni licence mensuelle, avec catalogue, passerelle de paiement et SEO technique.", href: href(lang, "online-store-offer"), linkText: "Boutique en ligne dès 490 €" },
        { t: "Refonte d'un site existant", d: "Si votre site est déjà positionné, nous le refondons sans perdre l'acquis : mêmes URL ou redirections bien pensées." },
        { t: "Site + SEO dès le départ", d: "Nous lançons le site et le positionnons pendant les premiers mois avec la même équipe." },
      ],
      precios: [
        { nombre: "Site professionnel", precio: "À partir de 249 € HT", detalle: "Conception et développement du site, sans la formule SEO." },
        { nombre: "Site + 6 mois de SEO", precio: "999 € HT", detalle: "Site professionnel avec hébergement, nom de domaine, messagerie et 6 mois de référencement." },
        { nombre: "Boutique en ligne", precio: "À partir de 490 €", detalle: "Boutique sans commission sur les ventes ni licence mensuelle.", href: href(lang, "online-store-offer") },
      ],
      contexto: {
        titulo: "Comment nous concevons un site pour une entreprise de Tolède",
        parrafos: [
          "Nous partons de ce que le client recherche lorsqu'il a besoin de votre service : quels mots il utilise, s'il cherche à Tolède même ou dans sa commune, et ce qu'il a besoin de voir pour se décider. À partir de là, nous définissons les pages, les textes et les appels à l'action avant de concevoir le design.",
          "Pendant le développement, nous travaillons sur une version de test pour que vous puissiez la valider avant publication, et nous préparons les mentions légales, la politique de cookies et les formulaires avec leur protection anti-spam. Au lancement, nous déclarons le site dans Google Search Console et envoyons le plan du site pour que Google le découvre au plus vite.",
          "Ensuite, le site est mesuré : demandes par formulaire, appels et clics WhatsApp. Vous savez ainsi ce qui vous amène des clients et ce qui ne le fait pas, et vous pouvez décider avec des données où investir.",
        ],
      },
      enlaces: [
        { href: href(lang, "web-design"), text: "Notre service de création de sites web" },
        { href: href(lang, "how-much-does-a-website-cost"), text: "Combien coûte un site web professionnel" },
        { href: href(lang, "digital-marketing-toledo"), text: "Guide du marketing digital à Tolède" },
      ],
      faqs: [
        { q: "Combien coûte un site web à Tolède ?", a: "Nos prix sont les mêmes dans toute l'Espagne : site professionnel à partir de 249 € HT, site avec 6 mois de SEO pour 999 € HT et boutique en ligne à partir de 490 €. Nous vous envoyons un devis ferme selon vos besoins." },
        { q: "Le site inclut-il l'hébergement et le nom de domaine ?", a: "La formule site + 6 mois de SEO inclut l'hébergement, le nom de domaine, la messagerie professionnelle et les pages légales. Pour les autres options, nous le précisons dans le devis." },
        { q: "Pouvez-vous refondre mon site sans perdre mon positionnement ?", a: "Oui. Nous examinons quelles pages reçoivent des visites et depuis quelles recherches, et nous conservons les URL ou créons des redirections vers la page équivalente pour préserver l'acquis." },
        { q: "Combien de temps faut-il pour publier le site ?", a: "Cela dépend de sa taille et de la réception à temps des textes, des photos et des informations légales de l'entreprise. À l'acceptation du devis, nous vous remettons un calendrier avec les dates de validation et de publication." },
        { q: "Qui rédige les textes du site ?", a: "Nous pouvons partir des vôtres ou les rédiger à partir des informations que vous nous donnez sur vos services. Dans les deux cas, nous les adaptons pour qu'ils répondent à ce que cherche votre client et aux recherches Google qui vous intéressent." },
        { q: "Où êtes-vous situés ?", a: "Calle Chopo 98, 45215 El Viso de San Juan (Tolède). Nous travaillons avec des entreprises de toute la province et du reste de l'Espagne." },
      ],
      formType: "diseno-web-toledo",
    };
  }
  return {
    lang,
    url: BASE + path(lang),
    breadcrumb: "Web design in Toledo",
    h1: "Web design in Toledo",
    h1Accent: "websites that load fast and bring in customers",
    intro: "We design websites and online stores for businesses in Toledo from our base in El Viso de San Juan. Websites designed so that customers understand what you do, trust you and get in touch, and ready to appear on Google from day one.",
    bullets: ["Fixed, published price", "Technical SEO and tracking included", "Agency based in the province of Toledo"],
    porQue: [
      { t: "A website is a sales tool", d: "We do not judge it by how good it looks, but by whether it generates enquiries: clear messages, visible calls to action and forms that work and are tracked." },
      { t: "Fast on mobile", d: "Most of your customers will look for you on their phone. We optimise images, fonts and code so that the website loads quickly where it matters most." },
      { t: "Ready for Google and AI", d: "Titles, structure, structured data and a consistent Google listing from launch, so that nothing has to be redone later." },
    ],
    queHacemosTitulo: "What kind of websites we build for businesses in Toledo",
    queHacemos: [
      { t: "Corporate or service website", d: "For professionals and SMEs that need to explain their services and receive enquiries.", href: href(lang, "web-design"), linkText: "Web design service" },
      { t: "Online store", d: "Stores with no commission per sale and no monthly licences, with a catalogue, payment gateway and technical SEO.", href: href(lang, "online-store-offer"), linkText: "Online store from €490" },
      { t: "Redesign of an existing website", d: "If your website already ranks, we redesign it without losing what it has earned: the same URLs or well-planned redirects." },
      { t: "Website + SEO from the start", d: "We launch the website and optimise it for search during the first months with the same team." },
    ],
    precios: [
      { nombre: "Professional website", precio: "From €249 + VAT", detalle: "Website design and development, without the SEO package." },
      { nombre: "Website + 6 months of SEO", precio: "€999 + VAT", detalle: "Professional website with hosting, domain, email and 6 months of search engine optimisation." },
      { nombre: "Online store", precio: "From €490", detalle: "A store with no commission per sale and no monthly licences.", href: href(lang, "online-store-offer") },
    ],
    contexto: {
      titulo: "How we approach a website for a business in Toledo",
      parrafos: [
        "We start with what customers search for when they need your service: which words they use, whether they search in the city of Toledo or in their own town, and what they need to see to make a decision. With that, we define the pages, the copy and the calls to action before designing anything.",
        "During development we work on a staging version so that you can review it before it goes live, and we prepare the legal texts, the cookie policy and the forms with their spam protection. At launch, we register the website in Google Search Console and submit the sitemap so that Google discovers it as soon as possible.",
        "After that, the website is measured: form enquiries, calls and WhatsApp clicks. That way you know what brings you customers and what does not, and you can decide with data where to invest.",
      ],
    },
    enlaces: [
      { href: href(lang, "web-design"), text: "Our web design service" },
      { href: href(lang, "how-much-does-a-website-cost"), text: "How much a professional website costs" },
      { href: href(lang, "digital-marketing-toledo"), text: "Guide to digital marketing in Toledo" },
    ],
    faqs: [
      { q: "How much does a website cost in Toledo?", a: "Our prices are the same throughout Spain: a professional website from €249 + VAT, a website with 6 months of SEO for €999 + VAT and an online store from €490. We send you a fixed quote based on what you need." },
      { q: "Does the website include hosting and a domain?", a: "The website + 6 months of SEO package includes hosting, domain, business email and legal pages. For the other options, we specify it in the quote." },
      { q: "Can you redesign my website without losing rankings?", a: "Yes. We review which pages receive visits and from which searches, and we keep the URLs or create redirects to the equivalent page to preserve what has been earned." },
      { q: "How long does it take to get the website published?", a: "It depends on the size and on receiving the copy, photos and legal details of the business on time. When you accept the quote, we give you a schedule with the review and publication dates." },
      { q: "Who writes the website copy?", a: "We can start from yours or write it with the information you give us about your services. In both cases we adapt it so that it answers what your customers are looking for and the Google searches that matter to you." },
      { q: "Where are you based?", a: "At Calle Chopo 98, 45215 El Viso de San Juan (Toledo). We work with businesses across the province and the rest of Spain." },
    ],
    formType: "diseno-web-toledo",
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
    openGraph: { title: m.ogTitle, description: m.ogDescription, url },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const c = content(lang);
  return (
    <>
      {localServiceSchemas(c, lang === "fr" ? "Création de sites web à Tolède" : "Web design in Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
