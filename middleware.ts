import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const CLIENT_JWT_SECRET = process.env.CLIENT_JWT_SECRET;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Normalización de barra final SOLO para páginas ---
  // next.config tiene skipTrailingSlashRedirect:true, que desactiva la
  // normalización automática de Next (también en /api/*). La replicamos aquí
  // SOLO para páginas para que trailingSlash:true no meta un 308 en las APIs.
  // Debe ejecutarse ANTES de los checks de auth de /portal y /area-privada.
  // Excluye /api/*, /_next/* y cualquier ruta con extensión de fichero.
  const lastSegment = pathname.split("/").pop() ?? "";
  const isFile = lastSegment.includes(".");
  if (
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !isFile &&
    !pathname.endsWith("/")
  ) {
    // Nota: usar new URL(request.url), NO request.nextUrl.clone(): bajo
    // trailingSlash:true + skipTrailingSlashRedirect, el NextURL re-serializa
    // quitando la barra final y provoca un bucle (/x -> /x -> ...).
    const url = new URL(request.url);
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  // Protect /area-privada routes (except the login page itself).
  // Tras la normalización, la ruta de login canónica lleva barra final.
  if (pathname.startsWith("/area-privada") && pathname !== "/area-privada/login/") {
    const session = request.cookies.get("admin_session");
    if (!session || session.value !== "authenticated") {
      return NextResponse.redirect(new URL("/area-privada/login/", request.url));
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
