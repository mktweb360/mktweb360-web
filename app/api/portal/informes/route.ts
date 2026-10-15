import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

// Informe mensual: proxy a MktOS (/api/client/report), calculado con los datos reales de la agencia.
export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  const month = req.nextUrl.searchParams.get("month");
  const q = month && /^\d{4}-\d{2}$/.test(month) ? `?month=${month}` : "";
  try {
    const r = await fetchMktOS(`/report${q}`, token, { cache: "no-store" });
    if (r.status === 401) return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    const data = await r.json().catch(() => null);
    if (!r.ok || !data?.ok) return NextResponse.json({ ok: false, error: data?.error || "No se pudo cargar el informe." }, { status: r.status === 400 ? 400 : 502 });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo conectar con el servidor." }, { status: 502 });
  }
}
