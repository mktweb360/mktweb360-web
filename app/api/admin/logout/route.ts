import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/area-privada/login", process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mktweb360.com"));
  res.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
  return res;
}
