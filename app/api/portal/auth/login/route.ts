import { NextRequest, NextResponse } from "next/server";

const MKTOS_APP_URL = process.env.MKTOS_APP_URL || "https://mktos360.app";

export async function POST(req: NextRequest) {
  let email: string | undefined;
  try {
    const body = await req.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ ok: false, error: "Email requerido." }, { status: 400 });
  }

  try {
    const res = await fetch(`${MKTOS_APP_URL}/api/client/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    let data: Record<string, unknown> = {};
    try {
      data = await res.json();
    } catch {
      // MktOS devolvió una respuesta no-JSON; nos quedamos con el estado HTTP.
    }

    // Normalizamos: si MktOS incluye su propio `ok`, prevalece sobre res.ok.
    return NextResponse.json({ ok: res.ok, ...data }, { status: res.status });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor. Inténtalo de nuevo." },
      { status: 502 }
    );
  }
}
