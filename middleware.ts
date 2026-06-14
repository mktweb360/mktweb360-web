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
