// Textos fijos del asistente (sin IA). Tuteo, frases cortas, una sola pregunta por mensaje (guía de voz, §4).
// Cada tipo tiene variantes para no repetirse; se elige por número de mensaje.
import type { Lang } from "./core";

type T = Record<Lang, string[]>;

export const TXT = {
  aviso: {
    es: ["Soy el asistente virtual de Mkt Web 360 y funciono con inteligencia artificial. Te ayudo con nuestros servicios; si prefieres hablar con José, dímelo cuando quieras."],
    en: ["I'm Mkt Web 360's virtual assistant and I run on artificial intelligence. I can help you with our services; if you'd rather talk to José, just say so."],
    fr: ["Je suis l'assistant virtuel de Mkt Web 360 et je fonctionne avec l'intelligence artificielle. Je vous aide sur nos services ; pour parler à José, dites-le-moi."],
  } as T,
  saludo: {
    es: ["¡Hola! ¿A qué se dedica tu negocio y qué te gustaría conseguir?", "Hola. Cuéntame un poco de tu negocio y te digo cómo podemos ayudarte.", "¡Buenas! ¿Qué te trae por aquí: más clientes, una web nueva, aparecer en Google…?"],
    en: ["Hi! What does your business do, and what would you like to achieve?", "Hello. Tell me a bit about your business and I'll show you how we can help."],
    fr: ["Bonjour ! Que fait votre entreprise et que souhaitez-vous obtenir ?", "Bonjour. Parlez-moi un peu de votre activité et je vous dis comment nous pouvons aider."],
  } as T,
  reconducir: {
    es: ["¿Te interesa para tu negocio? Cuéntame a qué te dedicas y lo vemos con tu caso.", "Si me dices a qué se dedica tu negocio, te digo qué tendría sentido en tu caso.", "¿Lo estás valorando para tu empresa? ¿De qué sector es?"],
    en: ["Is this for your business? Tell me what you do and we'll look at your case.", "If you tell me about your business, I'll tell you what would make sense for you."],
    fr: ["Est-ce pour votre entreprise ? Dites-moi votre activité et nous regarderons votre cas.", "Si vous me parlez de votre activité, je vous dirai ce qui aurait du sens pour vous."],
  } as T,
  cupoPregunta: {
    es: ["Por aquí te ayudo sobre todo si estás pensando en mejorar la captación de tu negocio. ¿A qué te dedicas y qué te gustaría conseguir?"],
    en: ["I can help most if you're looking to win more customers for your business. What do you do, and what would you like to achieve?"],
    fr: ["Je vous aide surtout si vous souhaitez attirer plus de clients. Quelle est votre activité et quel est votre objectif ?"],
  } as T,
  cierre: {
    es: ["Este canal está pensado para quien quiere contar con Mkt Web 360 en su proyecto. Si en algún momento te encaja, pide aquí la auditoría gratuita o un presupuesto y lo vemos con tu caso. ¡Gracias por pasarte!"],
    en: ["This channel is for people who'd like Mkt Web 360 to help with their project. Whenever it suits you, ask here for the free audit or a quote and we'll look at your case. Thanks for stopping by!"],
    fr: ["Ce canal est destiné à ceux qui souhaitent confier leur projet à Mkt Web 360. Quand vous le souhaitez, demandez ici l'audit gratuit ou un devis. Merci de votre visite !"],
  } as T,
  tercero: {
    es: ["Eso lo contamos con detalle en el blog, pero por aquí no hago tutoriales ni trabajos a medida. Si lo que buscas es que lo hagamos para tu negocio, cuéntame a qué te dedicas.", "Aquí no preparo textos, guías ni trabajos. Lo que sí puedo es ayudarte a ver si nuestros servicios encajan con tu negocio: ¿a qué te dedicas?"],
    en: ["We cover that in detail on the blog, but I don't do tutorials or custom work here. If you'd like us to do it for your business, tell me what you do."],
    fr: ["Nous en parlons en détail sur le blog, mais je ne fais pas de tutoriels ni de travaux ici. Si vous souhaitez que nous le fassions pour votre entreprise, dites-moi votre activité."],
  } as T,
  legal: {
    es: ["En temas legales, fiscales o laborales no asesoramos; para eso lo mejor es tu gestor o un abogado. Donde sí te ayudo es con tu web, tu visibilidad en Google y la IA, y la captación de clientes. ¿Por ahí te puedo echar una mano?"],
    en: ["We don't give legal, tax or employment advice; your accountant or a lawyer is the right person for that. I can help with your website, visibility on Google and AI, and winning customers."],
    fr: ["Nous ne conseillons pas sur les questions juridiques, fiscales ou sociales ; votre comptable ou un avocat est la bonne personne. Je peux vous aider pour votre site, votre visibilité sur Google et l'IA, et l'acquisition de clients."],
  } as T,
  injection: {
    es: ["Solo puedo ayudarte con los servicios de Mkt Web 360. ¿Te cuento qué hacemos o prefieres pedir un presupuesto?"],
    en: ["I can only help with Mkt Web 360's services. Shall I tell you what we do, or would you like a quote?"],
    fr: ["Je ne peux vous aider que sur les services de Mkt Web 360. Je vous présente ce que nous faisons, ou vous préférez un devis ?"],
  } as T,
  largo: {
    es: ["Tu mensaje es un poco largo para este chat. ¿Me lo resumes en un par de frases?"],
    en: ["Your message is a bit long for this chat. Could you sum it up in a couple of sentences?"],
    fr: ["Votre message est un peu long pour ce chat. Pouvez-vous le résumer en deux phrases ?"],
  } as T,
  sinRespuesta: {
    es: ["No tengo esa respuesta exacta y prefiero no inventármela. Si me dejas tus datos, José te contesta personalmente.", "Eso prefiero que te lo responda José directamente, para darte un dato correcto. ¿Te pongo en contacto con él?"],
    en: ["I don't have that exact answer and I'd rather not make it up. Leave your details and José will reply personally."],
    fr: ["Je n'ai pas cette réponse exacte et je préfère ne pas l'inventer. Laissez vos coordonnées et José vous répondra personnellement."],
  } as T,
  persona: {
    es: ["Claro. Pulsa «Que me llaméis», deja tu teléfono y elige «Lo antes posible»: a José le llega el aviso al móvil en ese momento. Si lo prefieres, llama tú al 622 74 89 87."],
    en: ["Of course. Tap «Call me», leave your number and choose «As soon as possible»: José gets the alert on his phone right away. You can also call +34 622 74 89 87."],
    fr: ["Bien sûr. Touchez « Rappelez-moi », laissez votre numéro et choisissez « Dès que possible » : José reçoit l'alerte sur son téléphone aussitôt. Vous pouvez aussi appeler le +34 622 74 89 87."],
  } as T,
  presupuesto: {
    es: ["Perfecto. Déjame tus datos y José te prepara una propuesta con tu caso, sin compromiso."],
    en: ["Great. Leave your details and José will prepare a no-obligation proposal for your case."],
    fr: ["Parfait. Laissez vos coordonnées et José vous prépare une proposition sans engagement."],
  } as T,
  mercado: {
    es: ["Ojo: esas cifras son una referencia del mercado, no nuestras tarifas. Lo mejor es que te preparemos un presupuesto con tu caso: ¿te lo pido?"],
    en: ["Note: those figures are a market reference, not our rates. The best thing is a quote for your case: shall I request one?"],
    fr: ["Attention : ces chiffres sont une référence du marché, pas nos tarifs. Le mieux est un devis pour votre cas : je le demande ?"],
  } as T,
  precioPropio: {
    es: ["Los precios son sin IVA y pueden variar según el alcance. Para darte una cifra cerrada, lo mejor es un presupuesto con tu caso: ¿te lo preparamos?"],
    en: ["Prices exclude VAT and may vary with scope. For a firm figure, a quote for your case is best: shall we prepare one?"],
    fr: ["Les prix sont hors TVA et peuvent varier selon le périmètre. Pour un chiffre précis, le mieux est un devis : on vous le prépare ?"],
  } as T,
  negocio: {
    es: ["Perfecto, con eso ya podemos ayudarte. Lo que mejor suele funcionar es empezar por un diagnóstico de tu visibilidad en Google y en la IA, y a partir de ahí una propuesta a medida. ¿Te la preparamos, sin compromiso?", "Gracias por contármelo. Para decirte qué te conviene de verdad, lo mejor es que José vea tu caso y te prepare una propuesta. ¿Te la pido?"],
    en: ["Great, that helps. The best start is usually a diagnosis of your visibility on Google and AI, and then a tailored proposal. Shall we prepare one, no obligation?"],
    fr: ["Parfait. Le mieux est de commencer par un diagnostic de votre visibilité sur Google et l'IA, puis une proposition sur mesure. On vous la prépare, sans engagement ?"],
  } as T,
  iva: {
    es: ["Los precios que publicamos son sin IVA, salvo que se indique lo contrario; a los servicios se les suma el 21 %. Si quieres una cifra cerrada para tu caso, te preparamos un presupuesto: ¿te lo pido?"],
    en: ["Our published prices exclude VAT unless stated otherwise; 21% Spanish VAT is added to services. For a firm figure for your case, we can prepare a quote: shall I request one?"],
    fr: ["Nos prix publiés sont hors TVA, sauf mention contraire ; la TVA espagnole de 21 % s'ajoute aux services. Pour un chiffre précis, nous préparons un devis : je le demande ?"],
  } as T,
  masInfo: {
    es: ["Más información:"],
    en: ["More information:"],
    fr: ["Plus d'informations :"],
  } as T,
  leidoArticulo: {
    es: ["Lo tienes más desarrollado aquí:"],
    en: ["There's more detail here:"],
    fr: ["Plus de détails ici :"],
  } as T,
  leadOk: {
    es: ["¡Hecho! José ya tiene tu petición y te contactará lo antes posible. Gracias por confiar en Mkt Web 360."],
    en: ["Done! José has your request and will contact you as soon as possible. Thanks for trusting Mkt Web 360."],
    fr: ["C'est fait ! José a reçu votre demande et vous contactera au plus vite. Merci de votre confiance."],
  } as T,
};

export function pick(t: T, lang: Lang, n: number): string {
  const arr = t[lang]?.length ? t[lang] : t.es;
  return arr[Math.abs(n) % arr.length];
}

/** Texto del bocadillo según la página (servicio inferido del índice de páginas). */
const BURBUJA: Record<string, Record<Lang, string[]>> = {
  seo: {
    es: ["¿Quieres que tu negocio aparezca en Google? Te ayudo a ver qué plan te encaja.", "¿Dudas con el SEO? Pregúntame y lo vemos con tu caso."],
    en: ["Want your business to show up on Google? I'll help you find the right plan."],
    fr: ["Vous voulez apparaître sur Google ? Je vous aide à trouver la bonne formule."],
  },
  web: {
    es: ["¿Pensando en una web nueva? Te cuento qué incluye y cómo trabajamos.", "¿Tu web no te trae clientes? Pregúntame y lo vemos."],
    en: ["Thinking about a new website? I'll tell you what's included and how we work."],
    fr: ["Un nouveau site en vue ? Je vous explique ce qui est inclus."],
  },
  ads: {
    es: ["¿Quieres clientes ya con Google Ads? Te explico cómo lo gestionamos."],
    en: ["Want customers now with Google Ads? I'll explain how we manage it."],
    fr: ["Des clients dès maintenant avec Google Ads ? Je vous explique."],
  },
  ia: {
    es: ["¿Te interesa la IA para tu negocio? Te cuento cómo la aplicamos.", "¿Sales cuando alguien pregunta a ChatGPT por lo tuyo? Lo vemos."],
    en: ["Interested in AI for your business? I'll show you how we use it."],
    fr: ["L'IA vous intéresse pour votre entreprise ? Je vous montre comment."],
  },
  general: {
    es: ["¿Te ayudo? Pregúntame por nuestros servicios o pide un presupuesto.", "¡Hola! Si buscas más clientes para tu negocio, te ayudo."],
    en: ["Can I help? Ask me about our services or request a quote."],
    fr: ["Je peux vous aider ? Posez-moi vos questions sur nos services."],
  },
};

export function bubbleFor(servicio: string | undefined, path: string, lang: Lang, n: number): string {
  const s = (servicio ?? "") + " " + path;
  const k = /seo|posicion|gbp|google-business|local/.test(s)
    ? "seo"
    : /web|tienda|ecommerce|shopify|woocommerce|shopware|diseno/.test(s)
      ? "web"
      : /sem|ads|ppc/.test(s)
        ? "ads"
        : /ia|chatbot|geo|agente|ai-/.test(s)
          ? "ia"
          : "general";
  const arr = BURBUJA[k][lang]?.length ? BURBUJA[k][lang] : BURBUJA[k].es;
  return arr[Math.abs(n) % arr.length];
}
