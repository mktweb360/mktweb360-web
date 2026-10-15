import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

// Plan de trabajo del cliente: proxy a MktOS (/api/client/plan), el mismo plan que gestiona la agencia.
export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  try {
    const r = await fetchMktOS("/plan", token, { cache: "no-store" });
    if (r.status === 401) return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    const data = await r.json().catch(() => null);
    if (!r.ok || !data?.ok) return NextResponse.json({ ok: false, error: "No se pudieron cargar las tareas." }, { status: 502 });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo conectar con el servidor." }, { status: 502 });
  }
}
