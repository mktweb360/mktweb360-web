// Filtro antispam común de los formularios (contacto, landings y asistente). 28/10/2026.
// Dos niveles:
//  - "bot": campo trampa relleno. Se descarta en silencio (respuesta ok para no dar pistas).
//  - "sospechoso": envío demasiado rápido, sin marca de tiempo del formulario o con texto aleatorio.
//    No se crea la oportunidad en MktOS (el CRM se llenaba de leads basura), pero el email a info@
//    sale igual, marcado «[Posible spam]», para que un lead real mal clasificado no se pierda.

export type SpamVerdict = { level: "ok" | "sospechoso" | "bot"; reasons: string[] };

// Tiempo mínimo entre que se pinta el formulario y se envía. Una persona tarda bastante más.
const MIN_FILL_MS = 3000;
// Una marca de tiempo de hace más de un día no sirve (formulario copiado o reutilizado por un bot).
const MAX_FILL_MS = 24 * 60 * 60 * 1000;

const VOWELS = /[aeiouáéíóúüy]/gi;

// Cadena aleatoria: los bots de formularios mandan cosas como «uvdYkMUbXNkSFmPoYw» o «LoctPgnaqsMscNOEggnfL».
export function looksRandom(s: string): boolean {
  const v = s.trim();
  if (!v) return false;
  // Sin espacios, solo alfanumérico y largo: el patrón de siempre.
  if (/^[a-zA-Z0-9]{12,}$/.test(v)) return true;
  for (const w of v.split(/\s+/)) {
    if (w.length < 8 || !/^[a-zA-Z]+$/.test(w)) continue;
    // Mayúsculas en mitad de la palabra varias veces (McDonald tiene una; los bots, muchas).
    const innerUpper = (w.slice(1).match(/[A-Z]/g) || []).length;
    if (innerUpper >= 3) return true;
    // Casi sin vocales en una palabra larga.
    const vowels = (w.match(VOWELS) || []).length;
    if (vowels / w.length < 0.2) return true;
  }
  return false;
}

// Dominio de web o email inventado: sin vocales suficientes en la parte principal (p. ej. «yflqmwhghxa.com»).
export function looksRandomDomain(s: string): boolean {
  const host = s.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#]/)[0];
  const main = host.split(".").slice(-2, -1)[0] || "";
  if (main.length < 7 || !/^[a-z]+$/.test(main)) return false;
  return (main.match(VOWELS) || []).length / main.length < 0.25;
}

export function checkSpam(input: {
  honeypot?: unknown;
  startedAt?: unknown;
  texts?: string[];
  domains?: string[];
}): SpamVerdict {
  if (typeof input.honeypot === "string" ? input.honeypot.trim() : input.honeypot)
    return { level: "bot", reasons: ["campo trampa relleno"] };

  const reasons: string[] = [];
  const ts = Number(input.startedAt);
  if (!Number.isFinite(ts) || ts <= 0) reasons.push("sin marca de tiempo del formulario");
  else {
    const elapsed = Date.now() - ts;
    if (elapsed < MIN_FILL_MS) reasons.push(`enviado en ${Math.max(0, Math.round(elapsed / 100) / 10)} s`);
    else if (elapsed > MAX_FILL_MS) reasons.push("marca de tiempo caducada");
  }
  for (const t of input.texts ?? []) if (looksRandom(t)) { reasons.push(`texto aleatorio: «${t.slice(0, 40)}»`); break; }
  for (const d of input.domains ?? []) if (d && looksRandomDomain(d)) { reasons.push(`dominio aleatorio: «${d.slice(0, 60)}»`); break; }

  return { level: reasons.length ? "sospechoso" : "ok", reasons };
}
