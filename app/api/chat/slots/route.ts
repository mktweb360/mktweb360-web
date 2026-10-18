// Asistente · GET /api/chat/slots — huecos libres para una llamada (calendario de MktOS). Sin datos personales.
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const BASE = (process.env.MKTOS_APP_URL || "https://mktos360.app").replace(/\/$/, "");

export async function GET() {
  const secret = process.env.MKTOS_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ slots: [] });
  try {
    const r = await fetch(`${BASE}/api/webhooks/assistant-booking`, { headers: { "x-webhook-secret": secret }, signal: AbortSignal.timeout(5000), cache: "no-store" });
    if (!r.ok) return NextResponse.json({ slots: [] });
    const j = (await r.json()) as { slots?: string[] };
    return NextResponse.json({ slots: (j.slots ?? []).filter((s) => typeof s === "string").slice(0, 8) }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ slots: [] });
  }
}
