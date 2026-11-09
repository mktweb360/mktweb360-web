// Contenido de la página de demos (/demos/, /en/website-demos/, /fr/demos-sites-web/).
// Las demos son páginas de ejemplo con contenido ficticio: no se presentan como trabajos reales de clientes.
import type { Lang } from "@/lib/i18n/routes";

export const DEMOS_SLUG: Record<Lang, string> = {
  es: "/demos/",
  en: "/en/website-demos/",
  fr: "/fr/demos-sites-web/",
};

export interface DemosContent {
  inLang: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  home: string;
  h1: string;
  intro: string;
  ctaAudit: string;
  ctaContact: string;
  paintersTitle: string;
  paintersIntro: string;
  painters: Record<string, { tagline: string; includes: string }>;
  viewDemo: string;
  sample: string;
  othersTitle: string;
  othersIntro: string;
  stepsTitle: string;
  steps: { t: string; d: string }[];
  noteTitle: string;
  note: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalDesc: string;
  landingLink: string;
}

const ES: DemosContent = {
  inLang: "es-ES",
  metaTitle: "Demos de páginas web para ver antes de decidir",
  metaDescription:
    "Mira demos de webs para pintores, clínicas, restaurantes, tiendas y más. Ejemplos con contenido ficticio para ver el estilo y las secciones antes de encargar tu web.",
  breadcrumb: "Demos de webs",
  home: "Inicio",
  h1: "Demos de páginas web para ver antes de decidir",
  intro:
    "Entra, mueve la rueda y mira cómo quedaría una web como la tuya: secciones, estilo y formularios. Son páginas de ejemplo con contenido ficticio; la tuya se hace con tus fotos, tus servicios y tus datos reales.",
  ctaAudit: "Pide tu diagnóstico gratuito",
  ctaContact: "Hablar con nosotros",
  paintersTitle: "Demos para pintores y empresas de pintura",
  paintersIntro: "Tres estilos y tres tipos de negocio, todos con petición de presupuesto, trabajos, preguntas frecuentes y botón de WhatsApp.",
  painters: {
    autonomo: { tagline: "Pintor autónomo y decorador, estilo cálido y cercano.", includes: "Galería antes/después, servicios, proceso, reseñas y formulario." },
    viviendas: { tagline: "Empresa de pintura de viviendas y locales, estilo limpio y moderno.", includes: "Formulario en la portada, servicios por pestañas, trabajos con filtro y acabados." },
    fachadas: { tagline: "Fachadas y comunidades de propietarios, estilo sobrio en modo oscuro.", includes: "Servicios, proceso con comunidades, proyectos, administradores de fincas y cobertura." },
  },
  viewDemo: "Ver la demo",
  sample: "Contenido de ejemplo",
  othersTitle: "Demos de otros sectores",
  othersIntro: "Webs de servicios y tiendas online para otros negocios, con la misma forma de trabajar.",
  stepsTitle: "Cómo seguimos desde una demo",
  steps: [
    { t: "Eliges un estilo", d: "Te quedas con la demo que más se parece a lo que buscas, o con ideas de varias." },
    { t: "Hacemos tu proyecto", d: "Con tus textos, fotos, servicios y datos reales de empresa, no con los de ejemplo." },
    { t: "Lo ves antes de pagar", d: "Te enseñamos el proyecto preliminar y decides si sigues." },
  ],
  noteTitle: "Qué son estas demos",
  note: "Son diseños de ejemplo: los nombres, teléfonos, zonas, reseñas y trabajos son ficticios y las fotos son de bancos de imágenes. No indexan en Google y no son webs de clientes. El diseño y la estructura son los que podemos adaptar a tu negocio.",
  faqTitle: "Preguntas frecuentes sobre las demos",
  faqs: [
    { q: "¿Puedo usar una demo tal cual para mi negocio?", a: "No tal cual: llevan contenido ficticio y la marca de demostración. La adaptamos con tus datos reales, tus fotos y tu identidad, y la dejamos preparada para posicionar en Google." },
    { q: "¿Se pueden cambiar los colores y los textos?", a: "Sí. Los colores, la tipografía, las secciones y los textos se ajustan a tu negocio, a tu zona y a lo que buscan tus clientes." },
    { q: "¿Cuánto cuesta hacer mi web a partir de una demo?", a: "Depende de las páginas que necesites y de si incluyes SEO local y Google Business Profile. Tras un diagnóstico gratuito te enviamos un presupuesto cerrado. La oferta de web profesional indica su precio en su propia página." },
    { q: "¿Hay demos de mi sector?", a: "Tenemos demos de pintores y de otros sectores de servicios y tiendas. Si no está el tuyo, dínoslo y preparamos un ejemplo antes de que decidas." },
  ],
  finalTitle: "¿Te gusta alguna? Empieza por un diagnóstico gratuito",
  finalDesc: "Revisamos tu web actual y tu ficha de Google y te proponemos el estilo y las páginas que más te convienen. Sin compromiso.",
  landingLink: "Ver el servicio de páginas web para pintores",
};

const EN: DemosContent = {
  inLang: "en",
  metaTitle: "Website Demos to Explore Before You Decide",
  metaDescription:
    "Browse website demos for painters, clinics, restaurants, online stores and more. Sample content only, so you can see the style and sections before ordering your site.",
  breadcrumb: "Website demos",
  home: "Home",
  h1: "Website demos to explore before you decide",
  intro:
    "Open them, scroll and see what a website like yours could look like: sections, style and forms. These are sample pages with fictional content; yours is built with your own photos, services and real business details.",
  ctaAudit: "Get your free diagnosis",
  ctaContact: "Talk to us",
  paintersTitle: "Demos for painters and painting companies",
  paintersIntro: "Three styles and three types of business, all with quote requests, jobs, FAQs and a WhatsApp button.",
  painters: {
    autonomo: { tagline: "Self-employed painter and decorator, warm and personal style.", includes: "Before/after gallery, services, process, reviews and a form." },
    viviendas: { tagline: "Painting company for homes and shops, clean modern style.", includes: "Form on the home screen, services in tabs, filterable jobs and finishes." },
    fachadas: { tagline: "Facades and homeowners' associations, sober dark style.", includes: "Services, process with associations, projects, property managers and coverage." },
  },
  viewDemo: "View the demo",
  sample: "Sample content",
  othersTitle: "Demos for other sectors",
  othersIntro: "Service websites and online stores for other businesses, built the same way.",
  stepsTitle: "What happens after a demo",
  steps: [
    { t: "You pick a style", d: "You keep the demo closest to what you want, or take ideas from several." },
    { t: "We build your project", d: "With your own copy, photos, services and real company details, not the sample ones." },
    { t: "You see it before paying", d: "We show you the preliminary project and you decide whether to go on." },
  ],
  noteTitle: "What these demos are",
  note: "They are sample designs: names, phone numbers, areas, reviews and jobs are fictional and the photos come from image libraries. They are not indexed by Google and they are not client websites. The design and structure are what we can adapt to your business.",
  faqTitle: "Frequently asked questions about the demos",
  faqs: [
    { q: "Can I use a demo as it is for my business?", a: "Not as it is: they carry fictional content and a demo notice. We adapt them with your real details, photos and identity, and prepare them to rank on Google." },
    { q: "Can colours and text be changed?", a: "Yes. Colours, typography, sections and copy are adjusted to your business, your area and what your customers look for." },
    { q: "How much does a website based on a demo cost?", a: "It depends on the pages you need and whether you include local SEO and Google Business Profile. After a free diagnosis we send you a fixed quote. The professional website offer shows its price on its own page." },
    { q: "Is there a demo for my sector?", a: "We have demos for painters and for other service and online-store sectors. If yours is missing, tell us and we will prepare an example before you decide." },
  ],
  finalTitle: "Like one of them? Start with a free diagnosis",
  finalDesc: "We review your current website and Google profile and suggest the style and pages that suit you best. No obligation.",
  landingLink: "See our website design service for painters",
};

const FR: DemosContent = {
  inLang: "fr",
  metaTitle: "Démos de sites web à découvrir avant de décider",
  metaDescription:
    "Découvrez des démos de sites pour peintres, cliniques, restaurants, boutiques et plus encore. Contenu fictif pour voir le style et les sections avant de commander votre site.",
  breadcrumb: "Démos de sites web",
  home: "Accueil",
  h1: "Démos de sites web à découvrir avant de décider",
  intro:
    "Ouvrez-les, faites défiler et voyez à quoi pourrait ressembler un site comme le vôtre : sections, style et formulaires. Ce sont des pages d'exemple au contenu fictif ; le vôtre est réalisé avec vos photos, vos services et vos vraies données.",
  ctaAudit: "Demandez votre diagnostic gratuit",
  ctaContact: "Nous contacter",
  paintersTitle: "Démos pour peintres et entreprises de peinture",
  paintersIntro: "Trois styles et trois types d'entreprise, tous avec demande de devis, chantiers, questions fréquentes et bouton WhatsApp.",
  painters: {
    autonomo: { tagline: "Peintre décorateur indépendant, style chaleureux et proche.", includes: "Galerie avant/après, services, méthode, avis et formulaire." },
    viviendas: { tagline: "Entreprise de peinture pour logements et locaux, style épuré et moderne.", includes: "Formulaire en page d'accueil, services par onglets, chantiers filtrables et finitions." },
    fachadas: { tagline: "Façades et copropriétés, style sobre en mode sombre.", includes: "Services, méthode avec les copropriétés, projets, syndics et zones d'intervention." },
  },
  viewDemo: "Voir la démo",
  sample: "Contenu d'exemple",
  othersTitle: "Démos pour d'autres secteurs",
  othersIntro: "Sites de services et boutiques en ligne pour d'autres activités, réalisés de la même façon.",
  stepsTitle: "Ce qui se passe après une démo",
  steps: [
    { t: "Vous choisissez un style", d: "Vous gardez la démo la plus proche de ce que vous cherchez, ou des idées de plusieurs." },
    { t: "Nous construisons votre projet", d: "Avec vos textes, vos photos, vos services et les vraies données de votre entreprise, pas celles de l'exemple." },
    { t: "Vous le voyez avant de payer", d: "Nous vous présentons le projet préliminaire et vous décidez de poursuivre ou non." },
  ],
  noteTitle: "Ce que sont ces démos",
  note: "Ce sont des maquettes d'exemple : noms, téléphones, zones, avis et chantiers sont fictifs et les photos viennent de banques d'images. Elles ne sont pas indexées par Google et ne sont pas des sites de clients. Le design et la structure sont ce que nous pouvons adapter à votre activité.",
  faqTitle: "Questions fréquentes sur les démos",
  faqs: [
    { q: "Puis-je utiliser une démo telle quelle pour mon entreprise ?", a: "Pas telle quelle : elles contiennent du contenu fictif et un avis de démonstration. Nous les adaptons avec vos vraies données, vos photos et votre identité, et les préparons pour se positionner sur Google." },
    { q: "Peut-on changer les couleurs et les textes ?", a: "Oui. Les couleurs, la typographie, les sections et les textes sont ajustés à votre activité, à votre zone et à ce que cherchent vos clients." },
    { q: "Combien coûte un site à partir d'une démo ?", a: "Cela dépend des pages nécessaires et de l'inclusion ou non du SEO local et de Google Business Profile. Après un diagnostic gratuit, nous vous envoyons un devis ferme. L'offre de site professionnel indique son prix sur sa propre page." },
    { q: "Y a-t-il une démo pour mon secteur ?", a: "Nous avons des démos pour les peintres et pour d'autres secteurs de services et de boutiques en ligne. Si le vôtre manque, dites-le-nous et nous préparerons un exemple avant que vous décidiez." },
  ],
  finalTitle: "Une démo vous plaît ? Commencez par un diagnostic gratuit",
  finalDesc: "Nous examinons votre site actuel et votre fiche Google et vous proposons le style et les pages qui vous conviennent le mieux. Sans engagement.",
  landingLink: "Voir notre service de création de site pour peintres",
};

export const DEMOS_CONTENT: Record<Lang, DemosContent> = { es: ES, en: EN, fr: FR };
