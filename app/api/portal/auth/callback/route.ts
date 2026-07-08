import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const CLIENT_JWT_SECRET = process.env.CLIENT_JWT_SECRET;

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  const loginUrl = new URL("/portal/login/", req.url);

  if (!token || !CLIENT_JWT_SECRET) {
    loginUrl.searchParams.set("error", "invalid_token");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(CLIENT_JWT_SECRET);
    // MktOS firma los client tokens con HS256; fijamos el algoritmo para evitar
    // ataques de confusión de algoritmo.
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });

    // El portal web solo acepta access tokens: un refresh token nunca debe abrir sesión.
    if (payload.token_type === "refresh") {
      loginUrl.searchParams.set("error", "invalid_token");
      return NextResponse.redirect(loginUrl);
    }

    // Max-Age (seconds) derived from the JWT exp so the cookie dies with the token.
    const nowSec = Math.floor(Date.now() / 1000);
    const maxAge =
      typeof payload.exp === "number"
        ? Math.max(0, payload.exp - nowSec)
        : 60 * 60 * 24;

    const res = NextResponse.redirect(new URL("/portal/dashboard/", req.url));
    res.cookies.set("client_session", token, {
      httpOnly: true,
      // Secure in production; allowed off in local dev so http://localhost can set the cookie.
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });
    return res;
  } catch {
    // Invalid signature or expired token.
    loginUrl.searchParams.set("error", "invalid_token");
    return NextResponse.redirect(loginUrl);
  }
}
