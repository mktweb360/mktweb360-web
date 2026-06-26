import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  try {
    const [meRes, servicesRes, summaryRes] = await Promise.all([
      fetchMktOS("/me", token, { cache: "no-store" }),
      fetchMktOS("/services", token, { cache: "no-store" }),
      fetchMktOS("/reports/summary", token, { cache: "no-store" }),
    ]);

    // 401 desde MktOS → token inválido/expirado: lo propagamos para forzar re-login.
    if ([meRes, servicesRes, summaryRes].some((r) => r.status === 401)) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    if (!meRes.ok || !servicesRes.ok || !summaryRes.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudieron cargar los datos de tu cuenta." },
        { status: 502 }
      );
    }

    const me = await meRes.json().catch(() => null);
    const servicesData = await servicesRes.json().catch(() => null);
    const summaryData = await summaryRes.json().catch(() => null);

    return NextResponse.json({
      ok: true,
      me,
      services: Array.isArray(servicesData?.services) ? servicesData.services : [],
      summary: Array.isArray(summaryData?.summary) ? summaryData.summary : [],
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
