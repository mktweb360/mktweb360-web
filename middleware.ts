import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SUPPORTED_LANGS = ["en", "fr"];
const CLIENT_JWT_SECRET = process.env.CLIENT_JWT_SECRET;

export async function middleware(request: NextRequest) {
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
    // Verificamos la firma del JWT (y su expiración) con jose, fijando HS256.
    // Si falla la firma, el token ha expirado o es un refresh token, forzamos re-login.
    try {
      const secret = new TextEncoder().encode(CLIENT_JWT_SECRET);
      const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });
      if (payload.token_type === "refresh") {
        throw new Error("refresh token not allowed in web portal");
      }
    } catch {
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
