// Secciones nuevas de la landing de pintores (14/11/2026): demos, paquetes, promesa, búsqueda con IA y formulario.
// Reglas: sin precios salvo el de la oferta vigente «Web profesional» (lib/ofertas.ts); sin promesas de resultados;
// las demos son ejemplos de diseño con datos ficticios (no servicio local en esas ciudades).
import type { LandingLang } from "@/lib/landing-pintores";
import { PRECIO_WEB_PROFESIONAL_DESDE } from "@/lib/ofertas";

/** Demos de pintores. `url: null` = todavía sin publicar (la tarjeta lo indica y no enlaza). Cambiar aquí al pasar a dominio propio. */
export interface DemoPintor {
  id: string;
  nombre: string;
  url: string | null;
  tono: "ambar" | "luz" | "calido";
  estilo: Record<LandingLang, string>;
}

export const DEMOS_PINTORES: DemoPintor[] = [
  {
    id: "fachadas-norte",
    nombre: "Fachadas Norte",
    url: "https://fachadas-norte-bilbao.lovable.app",
    tono: "ambar",
    estilo: {
      es: "Comunidades de propietarios y fachadas. Estilo oscuro con acento ámbar.",
      en: "Homeowner associations and façades. Dark style with amber accent.",
      fr: "Copropriétés et façades. Style sombre avec accent ambre.",
    },
  },
  {
    id: "pinturas-lumen",
    nombre: "Pinturas Lumen",
    url: "https://lumen-valencia-color-stories.lovable.app",
    tono: "luz",
    estilo: {
      es: "Viviendas y locales. Estilo luminoso, con solicitud de presupuesto en la propia cabecera.",
      en: "Homes and shops. Bright style, with the quote request right in the header.",
      fr: "Logements et commerces. Style lumineux, avec la demande de devis dans l'en-tête.",
    },
  },
  {
    id: "brocha-y-brillo",
    nombre: "Brocha y Brillo",
    url: "https://brocha-y-brillo-getafe.lovable.app",
    tono: "calido",
    estilo: {
      es: "Pintor y decorador autónomo. Estilo cálido y minimalista, con galería antes/después deslizable.",
      en: "Self-employed painter and decorator. Warm, minimal style with a slidable before/after gallery.",
      fr: "Peintre décorateur indépendant. Style chaleureux et minimaliste, galerie avant/après coulissante.",
    },
  },
];

interface Paquete {
  id: "esencial" | "completo" | "premium";
  nombre: string;
  lema: string;
  precio: string;
  nota?: string;
  checks: string[];
  cta: string;
  href: string; // ruta ES canónica
  destacado?: boolean;
}

export interface ExtraContent {
  demos: { otro: { t: string; d: string; cta: string }; title: string; intro: string; ver: string; enPreparacion: string; nota: string; mas: string };
  paquetes: { title: string; intro: string; items: Paquete[]; pie: string };
  promesa: { title: string; intro: string; items: { t: string; d: string }[] };
  ia: { title: string; texto: string; enlace: string; fuentesLabel: string; fuentes: { t: string; href: string }[] };
  video: { titulo: string; reproducir: string; sinSubtitulos: string };
  diagnostico: { title: string; intro: string };
  badge: { esencial: string; completo: string };
  hero: { cta: string; demos: string; checks: string[]; ilustracion: string };
}

const D = PRECIO_WEB_PROFESIONAL_DESDE;

export const EXTRA: Record<LandingLang, ExtraContent> = {
  es: {
    hero: {
      cta: "Pide tu diagnóstico gratuito",
      demos: "Ver ejemplos de diseño",
      checks: ["Pensada para que te pidan presupuesto", "Hecha para el móvil y para Google", "Diagnóstico gratuito, sin compromiso"],
      ilustracion: "Ilustración de una pared recién pintada con una página web encima",
    },
    demos: {
      otro: { t: "¿Otro estilo?", d: "Una web a medida para tu empresa, única y original.", cta: "Cuéntanos qué quieres" },
      title: "Mira cómo puede quedar tu web",
      intro: "Tres propuestas ya diseñadas, para que veas el estilo antes de decidir. Ábrelas, recórrelas en el móvil y quédate con lo que te guste.",
      ver: "Ver demo",
      enPreparacion: "Demo en preparación",
      nota: "Son demos con datos ficticios: teléfonos, textos y fotos de ejemplo. Los nombres de empresa y las ciudades que veas son solo ilustrativos de un estilo, no un servicio local.",
      mas: "¿Prefieres otra cosa? Si lo quieres, diseñamos una totalmente única y original para ti.",
    },
    paquetes: {
      title: "Tres formas de empezar",
      intro: "Elige el punto de partida. Todos parten de un diagnóstico gratuito y puedes crecer de uno a otro.",
      items: [
        {
          id: "esencial",
          nombre: "Esencial",
          lema: "Tu web profesional, lista para pedir presupuesto",
          precio: `Desde ${D} € + IVA`,
          nota: "Pago único. Hosting, dominio y correo no incluidos. Sin permanencia.",
          checks: ["Diseño a medida", "Botón de presupuesto visible en cada pantalla", "Formulario corto", "Llamada y WhatsApp con un toque", "La gestionas tú después"],
          cta: "Ver la oferta",
          href: "/oferta-web-seo-organico/",
        },
        {
          id: "completo",
          nombre: "Completo",
          lema: "Para que además te encuentren y te elijan",
          precio: "Presupuesto tras diagnóstico gratuito",
          checks: ["Todo lo del Esencial", "SEO local y una página por servicio", "Google Business Profile optimizado", "Galería de trabajos antes y después", "Reseñas visibles en la web"],
          cta: "Pedir presupuesto",
          href: "#diagnostico",
          destacado: true,
        },
        {
          id: "premium",
          nombre: "Premium",
          lema: "Desarrollos pensados solo para tu negocio",
          precio: "Solicita presupuesto",
          checks: [
            "Todo lo del Completo",
            "Herramientas a medida para tus clientes. Por ejemplo, podemos desarrollar:",
            "· una paleta de colores (carta RAL) para que el cliente pruebe combinaciones y vea una idea de cómo quedarían en su estancia",
            "· un módulo en el que el cliente introduce las medidas y describe lo que quiere para su casa",
            "Integraciones con tus herramientas",
          ],
          cta: "Solicitar presupuesto",
          href: "#diagnostico",
        },
      ],
      pie: "Las herramientas del paquete Premium se estudian y se presupuestan caso por caso; lo que se incluya queda por escrito antes de empezar.",
    },
    promesa: {
      title: "Trabajo bien hecho, también en los detalles",
      intro: "No podemos prometerte posiciones en Google ni un número de presupuestos. Lo que sí depende de nosotros, y cuidamos:",
      items: [
        { t: "Un proceso claro", d: "Sabes qué hacemos en cada fase, qué necesitamos de ti y cuándo toca revisar." },
        { t: "Cuidado en cada acabado", d: "Revisamos textos, imágenes, móvil y formularios antes de publicar, como se remata un trabajo de pintura." },
        { t: "Medimos qué funciona", d: "Llamadas, formularios y WhatsApp quedan medidos desde el primer día para ver qué contactos llegan y de dónde." },
        { t: "Mejora con datos", d: "Con lo que medimos, ajustamos la web. Sin cambios por intuición." },
      ],
    },
    ia: {
      title: "Google ya busca también con IA",
      texto:
        "Según el INE, el 54,8 % de las personas de 16 a 74 años usó herramientas de IA generativa en los tres últimos meses (encuesta de 2026), y Google ya muestra respuestas generadas con IA en sus resultados. Además ofrece en España el Modo IA, una forma de buscar en la que responde con texto generado por inteligencia artificial y enlaces a webs. Para que tu página pueda aparecer ahí no hay trucos: debe estar indexada, mostrar con claridad qué servicios ofreces y en qué zona trabajas, y responder las dudas reales de tus clientes. Preparamos tu web con esto en mente, sin prometer posiciones.",
      enlace: "Cómo lo trabajamos en SEO + GEO + Google Maps",
      fuentesLabel: "Fuentes",
      fuentes: [
        { t: "INE: TIC en los hogares 2026", href: "https://www.ine.es/dyngs/Prensa/TICH2026.htm" },
        { t: "Google: el Modo IA llega a España", href: "https://blog.google/intl/es-es/productos/la-busqueda-de-google-el-modo-ia-llega-a-espana/" },
        { t: "Google Search Central: funciones de IA y tu sitio web", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
    video: { titulo: "Presentación: páginas web para pintores", reproducir: "Reproducir el vídeo", sinSubtitulos: "El vídeo incluye subtítulos." },
    diagnostico: {
      title: "Empecemos por conocerte",
      intro: "Cuéntanos cómo trabajas y qué necesitas. Te respondemos por correo con un diagnóstico gratuito de tu web y el siguiente paso. Sin compromiso.",
    },
    badge: { esencial: "Esencial", completo: "Completo" },
  },
  en: {
    hero: {
      cta: "Get your free diagnosis",
      demos: "See design examples",
      checks: ["Built to bring quote requests", "Made for mobile and for Google", "Free diagnosis, no obligation"],
      ilustracion: "Illustration of a freshly painted wall with a web page on it",
    },
    demos: {
      otro: { t: "Another style?", d: "A custom website for your business, unique and original.", cta: "Tell us what you want" },
      title: "See how your website could look",
      intro: "Three designs already made, so you can see the style before deciding. Open them, try them on your phone and keep what you like.",
      ver: "View demo",
      enPreparacion: "Demo in preparation",
      nota: "These demos use made-up data: sample phone numbers, texts and photos. Business names and cities shown only illustrate a style; they are not a local service.",
      mas: "Prefer something else? If you wish, we design a completely unique, original one for you.",
    },
    paquetes: {
      title: "Three ways to start",
      intro: "Pick your starting point. All begin with a free diagnosis and you can move up from one to the next.",
      items: [
        {
          id: "esencial",
          nombre: "Essential",
          lema: "Your professional website, ready to get quote requests",
          precio: `From €${D} + VAT`,
          nota: "One-off payment. Hosting, domain and email not included. No minimum term.",
          checks: ["Custom design", "Quote button visible on every screen", "Short form", "One-tap call and WhatsApp", "You manage it afterwards"],
          cta: "See the offer",
          href: "/oferta-web-seo-organico/",
        },
        {
          id: "completo",
          nombre: "Complete",
          lema: "So you also get found and chosen",
          precio: "Quote after a free diagnosis",
          checks: ["Everything in Essential", "Local SEO and one page per service", "Optimised Google Business Profile", "Before/after work gallery", "Reviews visible on the site"],
          cta: "Request a quote",
          href: "#diagnostico",
          destacado: true,
        },
        {
          id: "premium",
          nombre: "Premium",
          lema: "Developments designed only for your business",
          precio: "Request a quote",
          checks: [
            "Everything in Complete",
            "Custom tools for your customers. For example, we can develop:",
            "· a colour palette (RAL chart) so customers try combinations and get an idea of how they would look in their room",
            "· a module where the customer enters measurements and describes what they want for their home",
            "Integrations with your tools",
          ],
          cta: "Request a quote",
          href: "#diagnostico",
        },
      ],
      pie: "Premium tools are studied and quoted case by case; whatever is included is put in writing before we start.",
    },
    promesa: {
      title: "Work done well, down to the details",
      intro: "We cannot promise Google rankings or a number of quote requests. What does depend on us, and we take care of:",
      items: [
        { t: "A clear process", d: "You know what we do in each phase, what we need from you and when to review." },
        { t: "Care in every finish", d: "We check texts, images, mobile and forms before publishing, the way a paint job is finished." },
        { t: "We measure what works", d: "Calls, forms and WhatsApp are measured from day one so you see which contacts arrive and from where." },
        { t: "Improvement from data", d: "We adjust the site with what we measure. No changes by gut feeling." },
      ],
    },
    ia: {
      title: "Google now also searches with AI",
      texto:
        "According to Spain's INE, 54.8% of people aged 16 to 74 used generative AI tools in the last three months (2026 survey), and Google already shows AI-generated answers in its results. It also offers AI Mode in Spain, a way of searching where it answers with AI-generated text and links to websites. There are no tricks to appear there: your page must be indexed, show clearly which services you offer and where you work, and answer your customers' real questions. We prepare your website with this in mind, without promising rankings.",
      enlace: "How we work on it in SEO + GEO + Google Maps",
      fuentesLabel: "Sources",
      fuentes: [
        { t: "INE (Spain): ICT in households 2026", href: "https://www.ine.es/dyngs/Prensa/TICH2026.htm" },
        { t: "Google: AI Mode arrives in Spain (in Spanish)", href: "https://blog.google/intl/es-es/productos/la-busqueda-de-google-el-modo-ia-llega-a-espana/" },
        { t: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
    video: { titulo: "Presentation: websites for painters", reproducir: "Play the video", sinSubtitulos: "The video has subtitles." },
    diagnostico: {
      title: "Let's start by getting to know you",
      intro: "Tell us how you work and what you need. We reply by email with a free diagnosis of your website and the next step. No obligation.",
    },
    badge: { esencial: "Essential", completo: "Complete" },
  },
  fr: {
    hero: {
      cta: "Demandez votre diagnostic gratuit",
      demos: "Voir des exemples de design",
      checks: ["Conçu pour recevoir des demandes de devis", "Pensé pour le mobile et pour Google", "Diagnostic gratuit, sans engagement"],
      ilustracion: "Illustration d'un mur fraîchement peint avec une page web dessus",
    },
    demos: {
      otro: { t: "Un autre style ?", d: "Un site sur mesure pour votre entreprise, unique et original.", cta: "Dites-nous ce que vous voulez" },
      title: "Voyez ce que pourrait donner votre site",
      intro: "Trois propositions déjà conçues pour découvrir le style avant de décider. Ouvrez-les, parcourez-les sur mobile et gardez ce qui vous plaît.",
      ver: "Voir la démo",
      enPreparacion: "Démo en préparation",
      nota: "Ces démos utilisent des données fictives : téléphones, textes et photos d'exemple. Les noms d'entreprise et les villes affichés illustrent seulement un style, pas un service local.",
      mas: "Vous préférez autre chose ? Si vous le souhaitez, nous concevons un site totalement unique et original pour vous.",
    },
    paquetes: {
      title: "Trois façons de commencer",
      intro: "Choisissez votre point de départ. Tous commencent par un diagnostic gratuit et vous pouvez passer de l'un à l'autre.",
      items: [
        {
          id: "esencial",
          nombre: "Essentiel",
          lema: "Votre site professionnel, prêt à recevoir des demandes de devis",
          precio: `À partir de ${D} € HT`,
          nota: "Paiement unique. Hébergement, nom de domaine et messagerie non inclus. Sans engagement.",
          checks: ["Design sur mesure", "Bouton de devis visible à chaque écran", "Formulaire court", "Appel et WhatsApp en un geste", "Vous le gérez ensuite"],
          cta: "Voir l'offre",
          href: "/oferta-web-seo-organico/",
        },
        {
          id: "completo",
          nombre: "Complet",
          lema: "Pour être aussi trouvé et choisi",
          precio: "Devis après diagnostic gratuit",
          checks: ["Tout l'Essentiel", "SEO local et une page par service", "Google Business Profile optimisé", "Galerie de chantiers avant/après", "Avis visibles sur le site"],
          cta: "Demander un devis",
          href: "#diagnostico",
          destacado: true,
        },
        {
          id: "premium",
          nombre: "Premium",
          lema: "Des développements conçus uniquement pour votre activité",
          precio: "Demandez un devis",
          checks: [
            "Tout le Complet",
            "Outils sur mesure pour vos clients. Par exemple, nous pouvons développer :",
            "· une palette de couleurs (nuancier RAL) pour que le client essaie des combinaisons et ait une idée du rendu dans sa pièce",
            "· un module où le client saisit les mesures et décrit ce qu'il veut pour son logement",
            "Intégrations avec vos outils",
          ],
          cta: "Demander un devis",
          href: "#diagnostico",
        },
      ],
      pie: "Les outils Premium sont étudiés et chiffrés au cas par cas ; ce qui est inclus est mis par écrit avant de commencer.",
    },
    promesa: {
      title: "Du travail bien fait, jusque dans les détails",
      intro: "Nous ne pouvons pas promettre de positions dans Google ni un nombre de devis. Ce qui dépend de nous, nous le soignons :",
      items: [
        { t: "Un processus clair", d: "Vous savez ce que nous faisons à chaque phase, ce dont nous avons besoin et quand relire." },
        { t: "Le soin de chaque finition", d: "Nous vérifions textes, images, mobile et formulaires avant de publier, comme on termine un chantier de peinture." },
        { t: "Nous mesurons ce qui marche", d: "Appels, formulaires et WhatsApp sont mesurés dès le premier jour pour voir quels contacts arrivent et d'où." },
        { t: "Amélioration par les données", d: "Nous ajustons le site avec ce que nous mesurons. Pas de changements au feeling." },
      ],
    },
    ia: {
      title: "Google cherche aussi avec l'IA",
      texto:
        "Selon l'INE (Espagne), 54,8 % des 16-74 ans ont utilisé des outils d'IA générative au cours des trois derniers mois (enquête 2026), et Google affiche déjà des réponses générées par l'IA dans ses résultats. Il propose aussi en Espagne le Mode IA, une façon de chercher où il répond avec un texte généré par l'IA et des liens vers des sites. Pour y apparaître, pas de trucs : votre page doit être indexée, montrer clairement vos services et votre zone d'intervention, et répondre aux vraies questions de vos clients. Nous préparons votre site dans cet esprit, sans promettre de positions.",
      enlace: "Comment nous le travaillons en SEO + GEO + Google Maps",
      fuentesLabel: "Sources",
      fuentes: [
        { t: "INE (Espagne) : TIC dans les foyers 2026", href: "https://www.ine.es/dyngs/Prensa/TICH2026.htm" },
        { t: "Google : le Mode IA arrive en Espagne (en espagnol)", href: "https://blog.google/intl/es-es/productos/la-busqueda-de-google-el-modo-ia-llega-a-espana/" },
        { t: "Google Search Central : fonctionnalités d'IA et votre site", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
    video: { titulo: "Présentation : sites web pour peintres", reproducir: "Lire la vidéo", sinSubtitulos: "La vidéo est sous-titrée." },
    diagnostico: {
      title: "Commençons par faire connaissance",
      intro: "Dites-nous comment vous travaillez et ce dont vous avez besoin. Nous répondons par e-mail avec un diagnostic gratuit de votre site et la prochaine étape. Sans engagement.",
    },
    badge: { esencial: "Essentiel", completo: "Complet" },
  },
};

/** Vídeo de presentación: se activa cuando exista el archivo (poster, mp4 y subtítulos .vtt en /public). */
export const VIDEO_PINTORES: { src: string; poster: string; vtt: Record<LandingLang, string> } | null = null;
