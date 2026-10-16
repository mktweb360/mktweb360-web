import { NextRequest, NextResponse } from "next/server";

import { setPortalSession } from "@/lib/portal-session";

const MKTOS_APP_URL = process.env.MKTOS_APP_URL || "https://mktos360.app";
const ERR: Record<string, string> = {
  invalid_credentials: "Correo o contraseña incorrectos.",
  locked: "Demasiados intentos. Por seguridad, espera 15 minutos o entra con el enlace por correo.",
  too_many: "Demasiados intentos desde esta conexión. Inténtalo más tarde.",
};

// Acceso con correo y contraseña: se valida en MktOS (servidor a servidor) y el token queda en la cookie HttpOnly.
export async function POST(req: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  try {
    const r = await fetch(`${MKTOS_APP_URL}/api/client/auth/password-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email ?? "", password: body.password ?? "", ip }),
      cache: "no-store",
    });
    const data = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string; access_token?: string; expires_in?: number; must_change?: boolean };
    if (!r.ok || !data.ok || !data.access_token) {
      return NextResponse.json({ ok: false, error: ERR[data.error ?? ""] ?? "No se ha podido iniciar sesión." }, { status: r.status === 423 || r.status === 429 ? r.status : 401 });
    }
    return setPortalSession(NextResponse.json({ ok: true, must_change: !!data.must_change }), data.access_token, data.expires_in);
  } catch {
    return NextResponse.json({ ok: false, error: "Error de conexión. Inténtalo de nuevo." }, { status: 502 });
  }
}
