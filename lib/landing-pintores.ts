// Contenido de la landing de servicio «Páginas web para pintores» en ES, EN y FR.
// Reglas (política de precios 25/10/2026): sin importes de servicios; las ofertas con precio viven en lib/ofertas.ts.
// Prueba social: solo lo que ya publica /casos/ (sin cifras ni testimonios que no existan).
import { ROUTES, urlFor, type Lang } from "@/lib/i18n/routes";

export type LandingLang = Lang;

/** Ruta de `esPath` en el idioma pedido; si esa página no existe en ese idioma, la versión ES. */
export function ruta(esPath: string, lang: LandingLang): string {
  const r = ROUTES.find((x) => x.es === esPath);
  return (r && urlFor(r, lang)) || esPath;
}

export const LANDING_SLUG: Record<LandingLang, string> = {
  es: "/paginas-web-para-pintores/",
  en: "/en/web-design-for-painters/",
  fr: "/fr/creation-site-web-peintres/",
};

type Card = { t: string; d: string };

export interface LandingContent {
  inLang: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  breadcrumb: string;
  home: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  bullets: string[];
  ctaAudit: string;
  ctaContact: string;
  ctaCall: string;
  callLabel: string;
  formTitle: string;
  formSub: string;
  formMsgLabel: string;
  formMsgPh: string;
  formSubmit: string;
  problem: { title: string; intro: string; items: Card[] };
  audience: { title: string; intro: string; items: string[]; note: string };
  includes: { title: string; intro: string; items: Card[] };
  mid: { title: string; desc: string };
  process: { title: string; steps: Card[] };
  proof: { title: string; intro: string; items: { cliente: string; sector: string; d: string }[]; link: string };
  resources: { title: string; links: { esPath: string; text: string }[] };
  faqs: { q: string; a: string }[];
  final: { title: string; desc: string };
  serviceName: string;
  serviceType: string;
  audienceType: string;
  serviceDescription: string;
  areaName: string;
  catalogName: string;
}

const ES: LandingContent = {
  inLang: "es-ES",
  metaTitle: "Páginas web para pintores que consiguen clientes",
  metaDescription:
    "Diseño de páginas web para pintores y empresas de pintura: presupuesto en un clic, SEO local, Google Business Profile, galería antes/después y reseñas. Diagnóstico gratuito.",
  ogTitle: "Páginas web para pintores y empresas de pintura | Mkt Web 360",
  breadcrumb: "Páginas web para pintores",
  home: "Inicio",
  eyebrow: "Diseño web para pintores y empresas de pintura",
  h1: "Páginas web para pintores",
  h1Accent: "que reciben solicitudes de presupuesto, no solo visitas",
  intro:
    "Diseñamos la web de tu empresa de pintura para que quien busca «pintor en tu ciudad» vea tu trabajo, confíe en ti y te pida presupuesto desde el móvil. Con SEO local, ficha de Google y reseñas trabajando en la misma dirección.",
  bullets: [
    "Web pensada para pedir presupuesto, no para decorar",
    "SEO local y Google Business Profile desde el primer día",
    "Galería antes/después y reseñas visibles",
    "Diagnóstico gratuito de tu web actual, sin compromiso",
  ],
  ctaAudit: "Pide tu diagnóstico gratuito",
  ctaContact: "Hablar con nosotros",
  ctaCall: "Llamar ahora",
  callLabel: "+34 622 74 89 87",
  formTitle: "Cuéntanos tu caso y te respondemos",
  formSub: "Te contestamos por correo con el siguiente paso. Sin compromiso.",
  formMsgLabel: "¿Qué necesitas?",
  formMsgPh: "Ej.: tengo una empresa de pintura en… y quiero una web que me traiga presupuestos.",
  formSubmit: "Quiero mi diagnóstico",
  problem: {
    title: "Por qué muchas webs de pintores no traen clientes",
    intro:
      "Un cliente que necesita pintar su vivienda, su comunidad o su local compara varias empresas en pocos minutos y suele llamar a la primera que le transmite confianza. Estos son los fallos que más se repiten:",
    items: [
      { t: "Una tarjeta de visita online", d: "Cuatro fotos y un teléfono no responden a «¿cuánto cuesta?», «¿trabajáis en mi zona?» ni «¿puedo ver trabajos como el mío?». El visitante se va a la siguiente." },
      { t: "Sin páginas para lo que se busca", d: "Quien busca «pintar fachada» o «pintor de pisos» necesita una página que trate justo eso, en tu zona. Una sola página de servicios no se posiciona para todo." },
      { t: "Sin camino claro hacia el presupuesto", d: "Si pedir presupuesto exige buscar un formulario, escribir un correo largo o esperar días, el cliente pide a otra empresa que ya le ha respondido." },
    ],
  },
  audience: {
    title: "Para quién es este servicio",
    intro: "Trabajamos con negocios que viven de trabajos de pintura y reforma en una zona concreta:",
    items: [
      "Pintores autónomos que quieren dejar de depender solo del boca a boca y de los portales",
      "Empresas de pintura de interior y exterior, de viviendas y locales",
      "Pintores de fachadas, comunidades de propietarios y obra nueva",
      "Pintores decoradores, microcemento, lacados y papel pintado",
      "Empresas de reformas donde la pintura es una parte importante del trabajo",
    ],
    note: "Si buscas una web de portfolio para un pintor artista (cuadros y exposiciones), este no es el servicio: aquí trabajamos la captación de clientes para pintura de obra y decoración.",
  },
  includes: {
    title: "Qué incluye la web de una empresa de pintura",
    intro: "Cada pieza tiene un motivo: que te encuentren, que te crean y que te escriban.",
    items: [
      { t: "Web orientada al presupuesto", d: "Titular claro con tu zona, botón de presupuesto visible en cada pantalla y un formulario corto que pide solo lo necesario: tipo de trabajo, zona y cómo contactar." },
      { t: "SEO local y páginas por servicio", d: "Una página para cada trabajo que buscan tus clientes (pisos, fachadas, locales…) y para tus zonas principales, con estructura y datos estructurados preparados para Google." },
      { t: "Google Business Profile", d: "Ficha de Google optimizada y coherente con la web (nombre, categorías, zona de servicio, fotos y publicaciones) para aparecer en el mapa cuando te buscan cerca." },
      { t: "Galería de trabajos antes y después", d: "Tus mejores obras ordenadas por tipo de trabajo, con fotos optimizadas para que carguen rápido en el móvil y con texto alternativo descriptivo." },
      { t: "Reseñas visibles", d: "Reseñas reales de tus clientes mostradas en la web y un sistema sencillo para pedirlas con un enlace directo, respetando las normas de Google." },
      { t: "Llamada, formulario y WhatsApp", d: "Botón de llamada con un toque en el móvil, formulario y, si lo usas con tus clientes, botón de WhatsApp. Medimos cada contacto para saber qué canal funciona." },
    ],
  },
  mid: {
    title: "¿Quieres saber cómo está tu web hoy?",
    desc: "Revisamos tu web y tu ficha de Google y te decimos, con ejemplos concretos, qué te está costando presupuestos y qué corregir primero. Es gratuito y sin compromiso.",
  },
  process: {
    title: "Cómo trabajamos: de tu situación actual a una web que pide presupuestos",
    steps: [
      { t: "Diagnóstico gratuito", d: "Revisamos tu web, tu ficha de Google y lo que hace tu competencia en tu zona. Te enviamos las conclusiones y el siguiente paso." },
      { t: "Estructura y textos", d: "Definimos las páginas que necesitas (servicios y zonas) y escribimos los textos pensando en lo que pregunta tu cliente antes de llamar." },
      { t: "Diseño, desarrollo y medición", d: "Construimos la web rápida y adaptada al móvil, con formulario, llamada y, si procede, WhatsApp medidos. La revisas en una versión de pruebas antes de publicar." },
      { t: "Publicación y seguimiento", d: "Publicamos, damos de alta la web en Google Search Console y te enseñamos a gestionarla. Después revisamos qué contactos llegan y qué mejorar." },
    ],
  },
  proof: {
    title: "Trabajo real con negocios locales",
    intro:
      "Mkt Web 360 SLU es una agencia con sede en El Viso de San Juan (Toledo). Estos son proyectos reales de negocios locales y de servicios en los que hemos trabajado la web y el posicionamiento; puedes leer cada caso con su detalle:",
    items: [
      { cliente: "Domer Servicios Asistenciales", sector: "Servicios de atención a personas mayores", d: "SEO local y diseño web para un sector de mucha demanda local." },
      { cliente: "Metalher SL", sector: "Industria metalúrgica", d: "Web corporativa y SEO técnico para generar contactos comerciales." },
      { cliente: "Spirit White Siberian Husky", sector: "Cría canina especializada", d: "Web, SEO y contenidos para atraer compradores de un nicho concreto." },
    ],
    link: "Ver todos los casos",
  },
  resources: {
    title: "Antes de decidir, estas guías te ayudan",
    links: [
      { esPath: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", text: "Guía: cómo crear una página web para pintores y conseguir clientes en Google" },
      { esPath: "/google-business-profile/", text: "Servicio de Google Business Profile" },
      { esPath: "/seo-local-empresas-servicios/", text: "SEO local para empresas de servicios" },
      { esPath: "/resenas-google-como-conseguirlas-legalmente/", text: "Cómo conseguir reseñas en Google de forma legal" },
      { esPath: "/diseno-de-paginas-web/", text: "Nuestro servicio de diseño de páginas web" },
    ],
  },
  faqs: [
    { q: "¿Cuánto cuesta una página web para una empresa de pintura?", a: "Depende de las páginas que necesites (servicios, zonas, galería) y de si incluyes SEO local y Google Business Profile. Tras el diagnóstico gratuito te enviamos un presupuesto cerrado, sin sorpresas. Las ofertas vigentes de la agencia indican su precio en su propia página." },
    { q: "¿Cuánto tiempo tarda en estar lista?", a: "Depende del tamaño de la web y de lo rápido que tengamos tus fotos, textos y datos. Al aceptar el presupuesto te damos un calendario con las fechas de revisión y de publicación." },
    { q: "¿Cuándo empezaré a recibir clientes desde Google?", a: "No podemos prometer plazos ni posiciones: el SEO local depende de tu zona, de la competencia y de tu ficha de Google. Lo que sí hacemos es dejar la web preparada y medirla desde el primer día, para que veas qué contactos llegan y de dónde." },
    { q: "¿Necesito tener fotos profesionales de mis trabajos?", a: "No. Un móvil moderno con buena luz es suficiente. Te explicamos cómo fotografiar el antes y el después de cada obra, y nosotros optimizamos las imágenes para que la web cargue rápido." },
    { q: "¿Podéis ocuparos también de mi ficha de Google?", a: "Sí. Optimizamos tu Google Business Profile (categorías, zona de servicio, fotos, publicaciones) y te ayudamos a pedir reseñas a tus clientes de forma legal, con un enlace directo." },
    { q: "¿Puedo gestionar yo la web después?", a: "Sí. Te enseñamos a cambiar textos, subir nuevas obras a la galería y actualizar datos. La web es tuya desde el primer día y no hay mantenimiento obligatorio." },
    { q: "Ya tengo una web, ¿la rehacéis o la mejoráis?", a: "Lo decidimos con el diagnóstico gratuito. Si la web ya recibe visitas, la mejoramos o la rediseñamos manteniendo las URLs que posicionan o con redirecciones bien planteadas para no perder lo ganado." },
  ],
  final: {
    title: "Empieza por un diagnóstico gratuito de tu web",
    desc: "Te decimos qué mejorar para que tu web de pintura reciba más solicitudes de presupuesto. Sin compromiso.",
  },
  serviceName: "Páginas web para pintores y empresas de pintura",
  serviceType: "Diseño web y SEO local para empresas de pintura",
  audienceType: "Pintores autónomos y empresas de pintura",
  serviceDescription:
    "Diseño de páginas web para pintores y empresas de pintura orientadas a recibir solicitudes de presupuesto: SEO local, Google Business Profile, galería de trabajos antes y después, reseñas y contacto por llamada, formulario o WhatsApp.",
  areaName: "España",
  catalogName: "Qué incluye la web para pintores",
};

const EN: LandingContent = {
  inLang: "en",
  metaTitle: "Website Design for Painters and Painting Companies",
  metaDescription:
    "Website design for painters and painting contractors in Spain: quote requests in one tap, local SEO, Google Business Profile, before/after gallery and reviews. Free diagnosis.",
  ogTitle: "Website Design for Painters and Painting Companies | Mkt Web 360",
  breadcrumb: "Website design for painters",
  home: "Home",
  eyebrow: "Web design for painters and painting contractors",
  h1: "Website design for painters",
  h1Accent: "that brings quote requests, not just visits",
  intro:
    "We build the website of your painting business so that anyone searching for a painter in your area sees your work, trusts you and asks for a quote from their phone. Local SEO, your Google profile and your reviews all pull in the same direction.",
  bullets: [
    "A website built to get quote requests, not to look pretty",
    "Local SEO and Google Business Profile from day one",
    "Before/after gallery and visible reviews",
    "Free diagnosis of your current website, no obligation",
  ],
  ctaAudit: "Get your free diagnosis",
  ctaContact: "Talk to us",
  ctaCall: "Call now",
  callLabel: "+34 622 74 89 87",
  formTitle: "Tell us about your business and we will reply",
  formSub: "We reply by email with the next step. No obligation.",
  formMsgLabel: "What do you need?",
  formMsgPh: "E.g. I run a painting company in… and I want a website that brings me quote requests.",
  formSubmit: "I want my diagnosis",
  problem: {
    title: "Why many painters' websites do not bring customers",
    intro:
      "Someone who needs a home, a building or a shop painted compares several companies in a few minutes and usually calls the first one that earns their trust. These are the most common mistakes:",
    items: [
      { t: "An online business card", d: "A few photos and a phone number do not answer “how much will it cost?”, “do you work in my area?” or “can I see jobs like mine?”. The visitor moves on to the next painter." },
      { t: "No pages for what people search", d: "Someone searching for “exterior painter” or “apartment painter” needs a page about exactly that, in your area. A single services page cannot rank for everything." },
      { t: "No clear path to a quote", d: "If asking for a quote means hunting for a form, writing a long email or waiting for days, the customer goes with the company that already replied." },
    ],
  },
  audience: {
    title: "Who this service is for",
    intro: "We work with businesses that live off painting and refurbishment jobs in a specific area:",
    items: [
      "Self-employed painters who want to depend less on word of mouth and lead portals",
      "Interior and exterior painting companies, for homes and commercial premises",
      "Facade painters, property managers and new-build contractors",
      "Decorators: microcement, lacquering and wallpaper specialists",
      "Renovation companies where painting is a major part of the work",
    ],
    note: "If you want a portfolio site for an artist-painter (paintings and exhibitions), this is not the right service: we focus on winning customers for building and decorative painting work.",
  },
  includes: {
    title: "What a painting company's website includes",
    intro: "Every piece has a purpose: get you found, get you trusted and get you contacted.",
    items: [
      { t: "A quote-focused website", d: "A clear headline with your area, a quote button visible on every screen and a short form that only asks what is needed: type of job, location and how to reach the customer." },
      { t: "Local SEO and service pages", d: "One page for each job your customers search for (flats, facades, shops…) and for your main areas, with structure and structured data ready for Google." },
      { t: "Google Business Profile", d: "A Google profile optimised and consistent with the website (name, categories, service area, photos and posts) so you show up on the map when people search nearby." },
      { t: "Before and after gallery", d: "Your best jobs organised by type of work, with photos optimised to load fast on mobile and descriptive alt text." },
      { t: "Visible reviews", d: "Real customer reviews shown on the site and a simple way to ask for them with a direct link, following Google's rules." },
      { t: "Call, form and WhatsApp", d: "A one-tap call button on mobile, a form and, if you use it with your customers, a WhatsApp button. We measure every contact so you know which channel works." },
    ],
  },
  mid: {
    title: "Want to know how your website is doing today?",
    desc: "We review your website and your Google profile and tell you, with concrete examples, what is costing you quote requests and what to fix first. It is free and there is no obligation.",
  },
  process: {
    title: "How we work: from where you are now to a website that asks for quotes",
    steps: [
      { t: "Free diagnosis", d: "We review your website, your Google profile and what your competitors do in your area. We send you the conclusions and the next step." },
      { t: "Structure and copy", d: "We define the pages you need (services and areas) and write the copy around the questions your customer asks before calling." },
      { t: "Design, development and tracking", d: "We build a fast, mobile-friendly website with a measured form, call button and, where relevant, WhatsApp. You review it on a test version before it goes live." },
      { t: "Launch and follow-up", d: "We publish, register the site in Google Search Console and show you how to manage it. Afterwards we review the contacts that arrive and what to improve." },
    ],
  },
  proof: {
    title: "Real work with local businesses",
    intro:
      "Mkt Web 360 SLU is an agency based in El Viso de San Juan (Toledo, Spain). These are real local and service businesses whose website and search visibility we have worked on; you can read each case in detail:",
    items: [
      { cliente: "Domer Servicios Asistenciales", sector: "Care services for older people", d: "Local SEO and web design for a sector with strong local demand." },
      { cliente: "Metalher SL", sector: "Metalworking industry", d: "Corporate website and technical SEO to generate sales enquiries." },
      { cliente: "Spirit White Siberian Husky", sector: "Specialist dog breeding", d: "Website, SEO and content to attract buyers in a specific niche." },
    ],
    link: "See all case studies",
  },
  resources: {
    title: "Before you decide, these guides help",
    links: [
      { esPath: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", text: "Guide: how to create a website for painters that gets customers on Google" },
      { esPath: "/google-business-profile/", text: "Google Business Profile service" },
      { esPath: "/seo-local-empresas-servicios/", text: "Local SEO for service businesses" },
      { esPath: "/diseno-de-paginas-web/", text: "Our website design service" },
    ],
  },
  faqs: [
    { q: "How much does a website for a painting company cost?", a: "It depends on the pages you need (services, areas, gallery) and whether you include local SEO and Google Business Profile. After the free diagnosis we send you a fixed quote with no surprises. Current agency offers show their price on their own page." },
    { q: "How long does it take to be ready?", a: "It depends on the size of the website and how quickly we get your photos, copy and details. When you accept the quote we give you a schedule with review and launch dates." },
    { q: "When will I start getting customers from Google?", a: "We cannot promise timeframes or rankings: local SEO depends on your area, your competition and your Google profile. What we do is leave the site ready and measure it from day one, so you can see which contacts arrive and where from." },
    { q: "Do I need professional photos of my jobs?", a: "No. A modern phone in good light is enough. We explain how to photograph the before and after of each job, and we optimise the images so the site loads fast." },
    { q: "Can you also take care of my Google profile?", a: "Yes. We optimise your Google Business Profile (categories, service area, photos, posts) and help you ask customers for reviews legitimately with a direct link." },
    { q: "Can I manage the website myself afterwards?", a: "Yes. We show you how to edit text, add new jobs to the gallery and update details. The website is yours from day one and there is no compulsory maintenance plan." },
    { q: "I already have a website. Do you rebuild it or improve it?", a: "We decide that in the free diagnosis. If the site already gets visits, we improve or redesign it while keeping the URLs that rank, or with well-planned redirects, so you do not lose what you have earned." },
  ],
  final: {
    title: "Start with a free diagnosis of your website",
    desc: "We tell you what to improve so your painting website gets more quote requests. No obligation.",
  },
  serviceName: "Website design for painters and painting companies",
  serviceType: "Web design and local SEO for painting companies",
  audienceType: "Self-employed painters and painting companies",
  serviceDescription:
    "Website design for painters and painting companies built to receive quote requests: local SEO, Google Business Profile, before/after job gallery, reviews and contact by phone, form or WhatsApp.",
  areaName: "Spain",
  catalogName: "What the website for painters includes",
};

const FR: LandingContent = {
  inLang: "fr",
  metaTitle: "Création de site web pour peintres en bâtiment",
  metaDescription:
    "Création de sites web pour peintres et entreprises de peinture en Espagne : demandes de devis en un clic, SEO local, Google Business Profile, galerie avant/après et avis. Diagnostic gratuit.",
  ogTitle: "Création de site web pour peintres et entreprises de peinture | Mkt Web 360",
  breadcrumb: "Site web pour peintres",
  home: "Accueil",
  eyebrow: "Création web pour peintres et entreprises de peinture",
  h1: "Création de site web pour peintres",
  h1Accent: "qui reçoivent des demandes de devis, pas seulement des visites",
  intro:
    "Nous concevons le site de votre entreprise de peinture pour que la personne qui cherche un peintre dans votre zone voie votre travail, vous fasse confiance et demande un devis depuis son mobile. SEO local, fiche Google et avis vont dans la même direction.",
  bullets: [
    "Un site conçu pour obtenir des demandes de devis, pas pour décorer",
    "SEO local et Google Business Profile dès le premier jour",
    "Galerie avant/après et avis visibles",
    "Diagnostic gratuit de votre site actuel, sans engagement",
  ],
  ctaAudit: "Demandez votre diagnostic gratuit",
  ctaContact: "Nous contacter",
  ctaCall: "Appeler maintenant",
  callLabel: "+34 622 74 89 87",
  formTitle: "Parlez-nous de votre activité, nous vous répondons",
  formSub: "Nous vous répondons par e-mail avec la prochaine étape. Sans engagement.",
  formMsgLabel: "De quoi avez-vous besoin ?",
  formMsgPh: "Ex. : j'ai une entreprise de peinture à… et je veux un site qui m'apporte des demandes de devis.",
  formSubmit: "Je veux mon diagnostic",
  problem: {
    title: "Pourquoi beaucoup de sites de peintres n'apportent pas de clients",
    intro:
      "Une personne qui doit faire peindre son logement, son immeuble ou son local compare plusieurs entreprises en quelques minutes et appelle en général la première qui lui inspire confiance. Voici les erreurs les plus fréquentes :",
    items: [
      { t: "Une carte de visite en ligne", d: "Quelques photos et un numéro de téléphone ne répondent pas à « combien ça coûte ? », « travaillez-vous dans ma zone ? » ni « puis-je voir des chantiers comme le mien ? ». Le visiteur passe au peintre suivant." },
      { t: "Pas de pages pour ce que l'on recherche", d: "Qui cherche « peintre façade » ou « peintre appartement » a besoin d'une page qui traite exactement de cela, dans votre zone. Une seule page de services ne peut pas se positionner sur tout." },
      { t: "Pas de chemin clair vers le devis", d: "Si demander un devis oblige à chercher un formulaire, à écrire un long e-mail ou à attendre des jours, le client choisit l'entreprise qui a déjà répondu." },
    ],
  },
  audience: {
    title: "À qui s'adresse ce service",
    intro: "Nous travaillons avec des entreprises qui vivent de chantiers de peinture et de rénovation dans une zone précise :",
    items: [
      "Peintres indépendants qui veulent moins dépendre du bouche-à-oreille et des plateformes",
      "Entreprises de peinture intérieure et extérieure, pour logements et locaux",
      "Peintres de façades, syndics de copropriété et constructions neuves",
      "Peintres décorateurs : microciment, laquage et papier peint",
      "Entreprises de rénovation où la peinture est une part importante du travail",
    ],
    note: "Si vous cherchez un site portfolio pour un peintre artiste (tableaux et expositions), ce n'est pas le bon service : nous travaillons l'acquisition de clients pour la peinture en bâtiment et la décoration.",
  },
  includes: {
    title: "Ce que comprend le site d'une entreprise de peinture",
    intro: "Chaque élément a une raison d'être : qu'on vous trouve, qu'on vous croie et qu'on vous contacte.",
    items: [
      { t: "Un site orienté devis", d: "Un titre clair avec votre zone, un bouton de devis visible sur chaque écran et un formulaire court qui ne demande que l'essentiel : type de travaux, zone et moyen de contact." },
      { t: "SEO local et pages par service", d: "Une page pour chaque type de travaux recherché (appartements, façades, locaux…) et pour vos principales zones, avec structure et données structurées prêtes pour Google." },
      { t: "Google Business Profile", d: "Une fiche Google optimisée et cohérente avec le site (nom, catégories, zone de service, photos et publications) pour apparaître sur la carte quand on vous cherche à proximité." },
      { t: "Galerie de chantiers avant/après", d: "Vos meilleurs chantiers classés par type de travaux, avec des photos optimisées pour charger vite sur mobile et un texte alternatif descriptif." },
      { t: "Avis visibles", d: "De vrais avis clients affichés sur le site et un moyen simple de les demander avec un lien direct, dans le respect des règles de Google." },
      { t: "Appel, formulaire et WhatsApp", d: "Un bouton d'appel en un clic sur mobile, un formulaire et, si vous l'utilisez avec vos clients, un bouton WhatsApp. Nous mesurons chaque contact pour savoir quel canal fonctionne." },
    ],
  },
  mid: {
    title: "Vous voulez savoir où en est votre site aujourd'hui ?",
    desc: "Nous examinons votre site et votre fiche Google et nous vous disons, avec des exemples concrets, ce qui vous coûte des demandes de devis et quoi corriger en premier. C'est gratuit et sans engagement.",
  },
  process: {
    title: "Notre méthode : de votre situation actuelle à un site qui génère des devis",
    steps: [
      { t: "Diagnostic gratuit", d: "Nous examinons votre site, votre fiche Google et ce que font vos concurrents dans votre zone. Nous vous envoyons les conclusions et la prochaine étape." },
      { t: "Structure et textes", d: "Nous définissons les pages nécessaires (services et zones) et rédigeons les textes à partir des questions que se pose votre client avant d'appeler." },
      { t: "Conception, développement et mesure", d: "Nous construisons un site rapide et adapté au mobile, avec formulaire et bouton d'appel mesurés et, le cas échéant, WhatsApp. Vous le relisez sur une version de test avant la mise en ligne." },
      { t: "Mise en ligne et suivi", d: "Nous publions, déclarons le site dans Google Search Console et vous apprenons à le gérer. Ensuite nous examinons les contacts reçus et ce qu'il faut améliorer." },
    ],
  },
  proof: {
    title: "Un vrai travail avec des entreprises locales",
    intro:
      "Mkt Web 360 SLU est une agence basée à El Viso de San Juan (Tolède, Espagne). Voici de vraies entreprises locales et de services dont nous avons travaillé le site et le référencement ; vous pouvez lire chaque cas en détail :",
    items: [
      { cliente: "Domer Servicios Asistenciales", sector: "Services d'aide aux personnes âgées", d: "SEO local et création de site pour un secteur à forte demande locale." },
      { cliente: "Metalher SL", sector: "Industrie métallurgique", d: "Site vitrine et SEO technique pour générer des contacts commerciaux." },
      { cliente: "Spirit White Siberian Husky", sector: "Élevage canin spécialisé", d: "Site, SEO et contenus pour attirer des acheteurs d'une niche précise." },
    ],
    link: "Voir tous les cas",
  },
  resources: {
    title: "Avant de décider, ces guides vous aident",
    links: [
      { esPath: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", text: "Guide : comment créer un site web pour peintres qui attire des clients sur Google" },
      { esPath: "/google-business-profile/", text: "Service Google Business Profile" },
      { esPath: "/seo-local-empresas-servicios/", text: "SEO local pour les entreprises de services" },
      { esPath: "/diseno-de-paginas-web/", text: "Notre service de création de sites web" },
    ],
  },
  faqs: [
    { q: "Combien coûte un site web pour une entreprise de peinture ?", a: "Cela dépend des pages nécessaires (services, zones, galerie) et de l'inclusion ou non du SEO local et de Google Business Profile. Après le diagnostic gratuit, nous vous envoyons un devis ferme, sans surprise. Les offres en cours de l'agence indiquent leur prix sur leur propre page." },
    { q: "Combien de temps faut-il pour qu'il soit prêt ?", a: "Cela dépend de la taille du site et de la rapidité avec laquelle nous recevons vos photos, textes et informations. À l'acceptation du devis, nous vous remettons un calendrier avec les dates de relecture et de mise en ligne." },
    { q: "Quand vais-je recevoir des clients depuis Google ?", a: "Nous ne pouvons promettre ni délais ni positions : le SEO local dépend de votre zone, de la concurrence et de votre fiche Google. Nous préparons le site et le mesurons dès le premier jour, pour que vous voyiez quels contacts arrivent et d'où ils viennent." },
    { q: "Ai-je besoin de photos professionnelles de mes chantiers ?", a: "Non. Un smartphone récent avec une bonne lumière suffit. Nous vous expliquons comment photographier l'avant et l'après de chaque chantier et nous optimisons les images pour que le site charge vite." },
    { q: "Pouvez-vous aussi vous occuper de ma fiche Google ?", a: "Oui. Nous optimisons votre Google Business Profile (catégories, zone de service, photos, publications) et nous vous aidons à demander des avis à vos clients de façon légitime, avec un lien direct." },
    { q: "Pourrai-je gérer le site moi-même ensuite ?", a: "Oui. Nous vous apprenons à modifier les textes, ajouter de nouveaux chantiers à la galerie et mettre à jour les informations. Le site est à vous dès le premier jour, sans maintenance obligatoire." },
    { q: "J'ai déjà un site : le refaites-vous ou l'améliorez-vous ?", a: "Nous le décidons avec le diagnostic gratuit. Si le site reçoit déjà des visites, nous l'améliorons ou le refondons en gardant les URL qui se positionnent ou avec des redirections bien pensées pour ne rien perdre." },
  ],
  final: {
    title: "Commencez par un diagnostic gratuit de votre site",
    desc: "Nous vous disons quoi améliorer pour que votre site de peinture reçoive plus de demandes de devis. Sans engagement.",
  },
  serviceName: "Création de site web pour peintres et entreprises de peinture",
  serviceType: "Création de site web et SEO local pour entreprises de peinture",
  audienceType: "Peintres indépendants et entreprises de peinture",
  serviceDescription:
    "Création de sites web pour peintres et entreprises de peinture conçus pour recevoir des demandes de devis : SEO local, Google Business Profile, galerie de chantiers avant/après, avis et contact par téléphone, formulaire ou WhatsApp.",
  areaName: "Espagne",
  catalogName: "Ce que comprend le site pour peintres",
};

export const LANDING: Record<LandingLang, LandingContent> = { es: ES, en: EN, fr: FR };
