import type { NextResponse } from "next/server";

// Guarda el token del área de cliente en la cookie HttpOnly (máx. 24 h; 30 min si debe cambiar la contraseña).
export function setPortalSession(res: NextResponse, token: string, expiresIn: number | undefined) {
  res.cookies.set("client_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.min(expiresIn ?? 86400, 86400),
  });
  return res;
}
