import { NextRequest, NextResponse } from "next/server";

const MKTOS_APP_URL = process.env.MKTOS_APP_URL || "https://mktos360.app";

// El enlace del correo trae un código de un solo uso (30 min). Se canjea en MktOS, servidor a servidor,
// por un token de acceso de 24 h que se guarda en una cookie HttpOnly. El token nunca viaja en la URL.
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const loginUrl = new URL("/portal/login/", req.url);

  if (!code) {
    loginUrl.searchParams.set("error", "invalid_token");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const r = await fetch(`${MKTOS_APP_URL}/api/client/auth/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
      cache: "no-store",
    });
    const data = (await r.json().catch(() => ({}))) as { ok?: boolean; access_token?: string; expires_in?: number };
    if (!r.ok || !data.ok || !data.access_token) {
      loginUrl.searchParams.set("error", "invalid_token");
      return NextResponse.redirect(loginUrl);
    }

    const res = NextResponse.redirect(new URL("/portal/dashboard/", req.url));
    res.cookies.set("client_session", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: Math.min(data.expires_in ?? 86400, 86400),
    });
    return res;
  } catch {
    loginUrl.searchParams.set("error", "invalid_token");
    return NextResponse.redirect(loginUrl);
  }
}
