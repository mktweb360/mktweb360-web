import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { user, pass } = await req.json();
  const validUser = process.env.ADMIN_USER ?? "admin";
  const validPass = process.env.ADMIN_PASS ?? "mktweb2025";

  if (user === validUser && pass === validPass) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });
    return res;
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
