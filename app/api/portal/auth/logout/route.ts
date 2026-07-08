import { NextRequest, NextResponse } from "next/server";

// La cookie client_session es HttpOnly, por lo que solo el servidor puede borrarla.
export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/portal/login/", req.url));
  res.cookies.delete("client_session");
  return res;
}
