import { NextRequest, NextResponse } from "next/server";

import { fetchMktOS } from "@/lib/mktos-client";
import { setPortalSession } from "@/lib/portal-session";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) return NextResponse.json({ ok: false, error: "Sesión caducada. Vuelve a entrar." }, { status: 401 });
  let body: { current?: string; next?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
  }
  try {
    const r = await fetchMktOS("/auth/change-password", token, { method: "POST", body: JSON.stringify({ current: body.current ?? "", next: body.next ?? "" }), cache: "no-store" });
    const data = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string; access_token?: string; expires_in?: number };
    if (r.status === 401) return NextResponse.json({ ok: false, error: "Sesión caducada. Vuelve a entrar." }, { status: 401 });
    if (!r.ok || !data.ok || !data.access_token) return NextResponse.json({ ok: false, error: data.error ?? "No se ha podido cambiar la contraseña." }, { status: 400 });
    return setPortalSession(NextResponse.json({ ok: true }), data.access_token, data.expires_in);
  } catch {
    return NextResponse.json({ ok: false, error: "Error de conexión. Inténtalo de nuevo." }, { status: 502 });
  }
}
