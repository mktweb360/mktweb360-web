import "server-only";
// Envío del registro de cada turno a MktOS (informe del asistente, RT127). Seudonimizado: hash del id de sesión,
// sin IP y con emails y teléfonos enmascarados. Nunca bloquea ni rompe la respuesta al visitante.
import { createHash } from "crypto";

const URL_ = (process.env.MKTOS_APP_URL || "https://mktos360.app").replace(/\/$/, "") + "/api/webhooks/assistant-event";

export const sidHash = (sid: string) => createHash("sha256").update("mw360:" + sid).digest("hex").slice(0, 32);

export function scrub(t: string, max: number) {
  return t.replace(/[^\s@]+@[^\s@]+\.[^\s@]{2,}/g, "[email]").replace(/(\+?\d[\d\s().-]{7,}\d)/g, "[teléfono]").slice(0, max);
}

export async function sendEvent(ev: Record<string, unknown>) {
  const secret = process.env.MKTOS_WEBHOOK_SECRET;
  if (!secret || process.env.CHATBOT_LOG === "off") return;
  try {
    const r = await fetch(URL_, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify(ev),
      signal: AbortSignal.timeout(5000),
    });
    if (!r.ok && r.status !== 404) console.warn("[chatbot] registro MktOS:", r.status);
  } catch (e) {
    console.warn("[chatbot] registro MktOS no disponible:", e instanceof Error ? e.message : e);
  }
}
