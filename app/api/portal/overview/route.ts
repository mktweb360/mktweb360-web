import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

// Panel del cliente: proxy a MktOS (/api/client/overview), que lee las mismas tablas con las que trabaja la agencia.
export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  try {
    const r = await fetchMktOS("/overview", token, { cache: "no-store" });
    if (r.status === 401) return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    const data = await r.json().catch(() => null);
    if (!r.ok || !data?.ok) return NextResponse.json({ ok: false, error: "No se pudieron cargar los datos de tu cuenta." }, { status: 502 });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo conectar con el servidor." }, { status: 502 });
  }
}
