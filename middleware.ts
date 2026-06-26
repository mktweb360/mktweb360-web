import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGS = ["en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /area-privada routes (except the login page itself)
  if (pathname.startsWith("/area-privada") && pathname !== "/area-privada/login") {
    const session = request.cookies.get("admin_session");
    if (!session || session.value !== "authenticated") {
      return NextResponse.redirect(new URL("/area-privada/login", request.url));
    }
  }

  // Protect /portal (client portal) — except login and the magic-link callback
  if (
    pathname.startsWith("/portal") &&
    !pathname.startsWith("/portal/login") &&
    !pathname.startsWith("/portal/auth/callback")
  ) {
    const loginUrl = new URL("/portal/login/", request.url);
    const token = request.cookies.get("client_session")?.value;
    if (!token) {
      return NextResponse.redirect(loginUrl);
    }
    // Decodificamos el payload (sin verificar firma, igual que el portal client-side)
    // y comprobamos únicamente la expiración.
    let expired = true;
    try {
      const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      const payload = JSON.parse(atob(base64)) as { exp?: number };
      expired = typeof payload.exp !== "number" || payload.exp <= Date.now() / 1000;
    } catch {
      expired = true;
    }
    if (expired) {
      const res = NextResponse.redirect(loginUrl);
      res.cookies.delete("client_session");
      return res;
    }
  }

  // Skip static files, API routes, and existing Spanish routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/feed.xml") ||
    pathname.includes(".") ||
    SUPPORTED_LANGS.some((lang) => pathname.startsWith(`/${lang}`))
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
