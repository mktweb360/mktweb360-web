import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const MKTOS_URL = "https://mktos360.app/api/internal/leads";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET!;
const WORKSPACE_ID = "2a2551eb-0f4c-46aa-9666-e92ed0aab8b5";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "open";
  const limit = searchParams.get("limit") || "50";
  const offset = searchParams.get("offset") || "0";

  const url = new URL(MKTOS_URL);
  url.searchParams.set("workspace_id", WORKSPACE_ID);
  url.searchParams.set("status", status);
  url.searchParams.set("limit", limit);
  url.searchParams.set("offset", offset);

  try {
    const r = await fetch(url.toString(), {
      headers: {
        "x-webhook-secret": MKTOS_SECRET,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!r.ok) {
      console.error("[admin/leads] MktOS error:", r.status);
      return NextResponse.json({ ok: false, error: "Error al obtener leads" }, { status: 502 });
    }

    const data = await r.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error("[admin/leads] timeout:", e);
    return NextResponse.json({ ok: false, error: "Timeout al conectar con MktOS" }, { status: 504 });
  }
}
