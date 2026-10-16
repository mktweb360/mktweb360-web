import { NextRequest, NextResponse } from "next/server";

import { fetchMktOS } from "@/lib/mktos-client";

// «Mis datos»: proxy a MktOS (/api/client/profile). Los cambios se escriben en la ficha del cliente en MktOS.
async function proxy(req: NextRequest, method: "GET" | "PUT") {
  const token = req.cookies.get("client_session")?.value;
  if (!token) return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  try {
    const r = await fetchMktOS("/profile", token, { method, cache: "no-store", ...(method === "PUT" ? { body: await req.text() } : {}) });
    if (r.status === 401) return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    const data = await r.json().catch(() => null);
    if (!data) return NextResponse.json({ ok: false, error: "No se pudieron cargar tus datos." }, { status: 502 });
    return NextResponse.json(data, { status: r.ok ? 200 : r.status });
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo conectar con el servidor." }, { status: 502 });
  }
}
export const GET = (req: NextRequest) => proxy(req, "GET");
export const PUT = (req: NextRequest) => proxy(req, "PUT");
