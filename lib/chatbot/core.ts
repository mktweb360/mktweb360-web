// Núcleo del asistente de mktweb360.com: reglas de ámbito, cupo informativo y búsqueda en la base de
// conocimiento aprobada por José. Funciones puras (sin red), probadas en scripts/check-chatbot.mjs.
// Diseño: docs/chatbot/DISENO-asistente-ia-v1.md (§5 defensa por capas, §13 intención comercial).

export type Lang = "es" | "en" | "fr";

export interface KbFaq {
  id: string;
  l: Lang;
  r: string;
  tipo: "servicio" | "informativa";
  q: string;
  a: string;
  cifras: boolean;
}
export interface KbPagina {
  ruta: string;
  tipo: string;
  servicio: string;
  title: string;
  description: string;
}

/** Estado de la conversación. Viaja firmado en un token: el visitante no puede alterarlo. */
export interface ChatState {
  sid: string;
  n: number; // mensajes del visitante
  inf: number; // respuestas informativas dadas (cupo)
  off: number; // intentos fuera de ámbito
  biz: boolean; // ya ha dado una señal de negocio
  ia: number; // llamadas a la IA en esta sesión
  closed: boolean; // conversación cerrada por el cupo o por abuso
}

export const LIMITS = {
  maxChars: 600,
  maxTurns: 20,
  maxIaPerSession: 12,
  infoQuota: 2, // respuestas informativas sin señal de negocio
  offTopicClose: 2, // al segundo intento fuera de ámbito se cierra
};

export function newState(sid: string): ChatState {
  return { sid, n: 0, inf: 0, off: 0, biz: false, ia: 0, closed: false };
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9€\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Clasificación del mensaje (capa 2, sin IA) ─────────────────────────────

const RX_INJECTION =
  /\b(ignora|olvida|ignore|forget|disregard)\b.{0,40}\b(instruccion|instrucciones|reglas|instructions|rules|consignes)\b|\b(system prompt|prompt del sistema|tus instrucciones|your instructions|act[uú]a como|actua como|haz de|you are now|ahora eres|pretend to be|jailbreak|modo desarrollador|developer mode|dan mode)\b/i;

const RX_THIRD_PARTY =
  /\b(paso a paso|step by step|tutorial|para (mi|un|una) (trabajo|tfg|tfm|master|clase|examen|universidad|asignatura|practica|tesis)|homework|hazme|haz me|redactame|redacta(r)? (un|una|el|la)|escribeme|escribe(me)? (un|una)|generame|genera (un|una)|traduce|traducir|translate|resumeme|resume este|codigo|programame|script|python|javascript|excel|formula|lista de herramientas|list of tools|ensename a|explicame como (hago|hacer|se hace)|como lo hago yo|hacerlo yo mismo|do it myself)\b/;

const RX_LEGAL =
  /\b(iva|irpf|hacienda|autonomos?|seguridad social|cuota de autonomo|multa|sancion|demanda|abogado|denuncia|impuesto|impuestos|factura electronica|lopd|despido|nomina|contrato laboral|tax|vat|lawsuit|impot|tva)\b/;

const RX_OUR_SERVICE = /\b(web|pagina|seo|geo|plan|servicio|servicios|precio|tarifa|presupuesto|campana|ads|tienda|chatbot|ficha|redes|mkt web)\b/;

const RX_PRICE_CONTEXT = /\b(precio|precios|cuesta|coste|costo|cuanto|tarifa|presupuesto|price|cost|how much|prix|combien|tarif)\b/;

const RX_BUSINESS =
  /\b(mi (negocio|empresa|clinica|tienda|web|pagina|restaurante|despacho|taller|academia|centro|marca|ecommerce|consulta|hotel|bar|inmobiliaria|gimnasio|ficha)|tengo (un|una)|me dedico|nos dedicamos|somos (un|una)|soy (dentista|fisio|abogad|coach|psicolog|dueno|autonomo|propietari|gerente|fotograf|arquitect|medic)|queremos|quiero (una|un|mas|aparecer|posicionar|contratar|presupuesto|vender|captar)|necesito (una|un|mas|clientes|vender)|presupuesto|contratar|cuanto cuesta|precio|tarifa|my (business|company|shop|clinic|website)|i want (a|to)|we are|mon (entreprise|site|commerce))\b/;

const RX_GREETING = /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|hi|hello|bonjour|salut|que tal)\b[\s!.?]*$/;

const RX_HUMAN = /\b(persona|humano|hablar con (alguien|jose|una persona)|llamar|llamada|telefono|whatsapp|contacto|contactar|human|someone|call me|appeler|quelqu un)\b/;

const RX_QUOTE = /\b(quiero|queria|necesito|pedir|pideme|solicitar|me (haceis|haces|hace|das|pasas|envias|mandas)|dame|hazme|preparame|mandame)\b.{0,25}\b(presupuesto|propuesta)\b|^(un )?presupuesto\b|\bquiero contratar|\b(quote|proposal|devis)\b/;

export type Intent = "too_long" | "injection" | "third_party" | "legal" | "greeting" | "human" | "quote" | "normal";

export function classify(text: string): { intent: Intent; business: boolean } {
  const raw = text.trim();
  if (raw.length > LIMITS.maxChars) return { intent: "too_long", business: false };
  const t = normalize(raw);
  const business = RX_BUSINESS.test(t);
  if (RX_INJECTION.test(raw) || RX_INJECTION.test(t)) return { intent: "injection", business: false };
  if (RX_THIRD_PARTY.test(t) && !RX_QUOTE.test(t)) return { intent: "third_party", business };
  // «¿El precio lleva IVA?» es una pregunta comercial, no fiscal.
  if (RX_LEGAL.test(t) && !(RX_PRICE_CONTEXT.test(t) && RX_OUR_SERVICE.test(t))) return { intent: "legal", business };
  if (RX_GREETING.test(t)) return { intent: "greeting", business: false };
  if (RX_QUOTE.test(t)) return { intent: "quote", business: true };
  if (RX_HUMAN.test(t)) return { intent: "human", business };
  return { intent: "normal", business };
}

export function isPriceQuestion(text: string): boolean {
  return RX_PRICE_CONTEXT.test(normalize(text));
}

// ── Búsqueda en la base de conocimiento ──────────────────────────────────

const STOP = new Set(
  (
    "de la el los las un una unos unas y o u a al del en por para con sin que se su sus es son lo le les mi mis tu tus " +
    "como cual cuales cuando donde quien muy mas menos ya si no me te nos os este esta estos estas ese esa eso hay ser " +
    "puedo puede pueden tengo tiene tienen hace hacer hago vuestro vuestra vosotros the a an and or of to in for on with " +
    "is are do does can my your you we it le les des du et ou pour avec sur est sont vous nous"
  ).split(" "),
);

function stem(w: string): string {
  if (w.length > 5 && w.endsWith("es")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("s")) return w.slice(0, -1);
  return w;
}

export function tokens(s: string): string[] {
  return normalize(s || "")
    .split(" ")
    .filter((w) => w.length > 2 && !STOP.has(w))
    .map(stem);
}

export interface Index {
  faqs: KbFaq[];
  docs: string[][];
  qs: Set<string>[];
  idf: Map<string, number>;
}

export function buildIndex(faqs: KbFaq[]): Index {
  const docs = faqs.map((f) => tokens(f.q + " " + f.a));
  const qs = faqs.map((f) => new Set(tokens(f.q)));
  const df = new Map<string, number>();
  for (const d of docs) for (const w of new Set(d)) df.set(w, (df.get(w) ?? 0) + 1);
  const N = docs.length || 1;
  const idf = new Map<string, number>();
  for (const [w, c] of df) idf.set(w, Math.log(1 + N / c));
  return { faqs, docs, qs, idf };
}

export function search(ix: Index, query: string, opts: { lang: Lang; path?: string; limit?: number } = { lang: "es" }) {
  const q = [...new Set(tokens(query))];
  if (!q.length) return [];
  const res: { faq: KbFaq; score: number; cov: number }[] = [];
  ix.faqs.forEach((f, i) => {
    if (f.l !== opts.lang) return;
    const d = new Set(ix.docs[i]);
    let s = 0;
    let hits = 0;
    for (const w of q) if (d.has(w)) { s += ix.idf.get(w) ?? 0; hits++; }
    // Coincidir con la pregunta de la FAQ pesa más que coincidir solo con la respuesta.
    let inQ = 0;
    for (const w of q) if (ix.qs[i].has(w)) { s += ix.idf.get(w) ?? 0; inQ++; }
    if (!hits) return;
    s = s / Math.sqrt(q.length);
    if (opts.path && samePath(f.r, opts.path)) s *= 1.35;
    res.push({ faq: f, score: s, cov: ix.qs[i].size ? inQ / ix.qs[i].size : 0 });
  });
  return res.sort((a, b) => b.score - a.score).slice(0, opts.limit ?? 5);
}

/** Umbral para dar una FAQ como respuesta directa (modo sin IA). Calibrado en scripts/check-chatbot.mjs:
 * puntuación mínima y que el mensaje cubra al menos la mitad de la pregunta de la FAQ. */
export const MATCH_THRESHOLD = 3;
export const MATCH_COVERAGE = 0.5;
export const isDirect = (h: { score: number; cov: number } | undefined) => !!h && h.score >= MATCH_THRESHOLD && h.cov >= MATCH_COVERAGE;

export function samePath(a: string, b: string): boolean {
  const n = (x: string) => "/" + x.replace(/^https?:\/\/[^/]+/, "").replace(/^\/+|\/+$/g, "") + "/";
  return n(a) === n(b);
}

// ── Contexto de página ─────────────────────────────────────────────────────

export function pageFor(paginas: KbPagina[], path: string): KbPagina | null {
  return paginas.find((p) => samePath(p.ruta, path)) ?? null;
}

/** El mensaje del visitante cuenta para el cupo informativo si no trae señal de negocio. */
export function quotaState(st: ChatState): "ok" | "ask_business" | "close" {
  if (st.biz) return "ok";
  if (st.inf >= LIMITS.infoQuota + 1) return "close";
  if (st.inf >= LIMITS.infoQuota) return "ask_business";
  return "ok";
}

// ── Validación de la salida de la IA (capa 5) ─────────────────────────────

/** Importes en euros que aparecen en un texto (normalizados a número). */
export function amounts(text: string): number[] {
  const out: number[] = [];
  const rx = /(\d{1,3}(?:[.\s]\d{3})*(?:,\d{1,2})?|\d+(?:,\d{1,2})?)\s?(?:€|euros?\b|eur\b)|€\s?(\d{1,3}(?:[.\s]\d{3})*(?:,\d{1,2})?|\d+)/gi;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text))) {
    const v = (m[1] ?? m[2] ?? "").replace(/[.\s]/g, "").replace(",", ".");
    const n = Number(v);
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

/** Comprueba que la respuesta generada no da precios que no estén en las fuentes permitidas ni filtra instrucciones. */
export function validateAiReply(reply: string, allowedAmounts: Set<number>): { ok: boolean; reason?: string } {
  const t = reply.toLowerCase();
  if (/reglas del asistente|system prompt|prompt del sistema|cache_control|<\/?(reglas|conocimiento|contexto)>/i.test(reply))
    return { ok: false, reason: "filtra instrucciones" };
  if (/\b(garantiza(mos|do)?|te aseguro|primera posici[oó]n|primer puesto|resultados garantizados|guaranteed)\b/i.test(t))
    return { ok: false, reason: "promesa de resultados" };
  for (const a of amounts(reply)) if (!allowedAmounts.has(a)) return { ok: false, reason: `importe no autorizado (${a})` };
  return { ok: true };
}

/** ¿El mensaje habla de algo de nuestro ámbito? Si no, y no hay coincidencia en la base, se trata como fuera de ámbito. */
const RX_MKT = /\b(web|pagina|seo|geo|google|maps|ficha|resena|anuncio|ads|campana|redes|instagram|facebook|tiktok|linkedin|youtube|marketing|cliente|clientes|venta|ventas|vender|tienda|ecommerce|shop|chatbot|ia|inteligencia|automatiza|email|newsletter|contenido|blog|posicion|visibilidad|lead|leads|captar|captacion|marca|logo|diseno|dominio|hosting|precio|presupuesto|servicio|plan|auditoria|mkt|agencia|negocio|empresa|website|site|clients|customers|marketing)\w*/;
export function inScope(text: string): boolean {
  return RX_MKT.test(normalize(text));
}

/** Página de servicio principal según el tema del mensaje (rutas canónicas de la web, de más a menos específica). */
const SERVICE_ROUTES: [RegExp, string][] = [
  [/\b(geo|chatgpt|gemini|perplexity|copilot|asistentes? de ia|llm)/, "/geo-posicionamiento-ia/"],
  [/\b(ficha|google business|business profile|gbp|google maps|maps|resenas)/, "/google-business-profile/"],
  [/\b(seo local|local)/, "/seo-local/"],
  [/\b(seo|posicionamiento|posicionar|buscador)/, "/seo-posicionamiento-web-organico/"],
  [/\b(google ads|ads|sem|ppc|anuncios|campanas de pago|publicidad)/, "/sem-publicidad-ppc/"],
  [/\b(redes|social|instagram|facebook|tiktok|linkedin|community)/, "/smm-social-media-marketing/"],
  [/\b(tienda|ecommerce|e commerce|woocommerce|shopify|shopware|vender online)/, "/tienda-online/"],
  [/\b(email|newsletter|mailing|correo)/, "/email-marketing/"],
  [/\b(contenido|contenidos|blog|articulos|copy)/, "/marketing-de-contenidos/"],
  [/\b(auditoria|diagnostico|analisis de mi web)/, "/auditoria-digital/"],
  [/\b(analitica|ga4|tag manager|medicion|conversiones)/, "/analitica-web/"],
  [/\b(video|audiovisual|reels|spot|fotografia)/, "/comunicacion-audiovisual/"],
  [/\b(chatbot|automatiza|inteligencia artificial|\bia\b|agente)/, "/ia-aplicada-al-marketing/"],
  [/\b(web|pagina|diseno|landing)/, "/diseno-de-paginas-web/"],
];
export function bestServicePage(paginas: KbPagina[], text: string): KbPagina | null {
  const t = normalize(text);
  for (const [rx, ruta] of SERVICE_ROUTES) {
    if (!rx.test(t)) continue;
    const p = paginas.find((x) => samePath(x.ruta, ruta));
    if (p?.description) return p;
  }
  return null;
}

/** Preguntas sobre nosotros («¿hacéis…?», «¿tenéis…?») son interés comercial: no consumen el cupo informativo. */
const RX_ABOUT_US = /\b(haceis|ofreceis|teneis|trabajais|podeis|vuestr\w*|os encargais|cobrais|mkt web|do you|can you|your|vous faites|proposez|vos)\b/;
export function aboutUs(text: string): boolean {
  return RX_ABOUT_US.test(normalize(text));
}
