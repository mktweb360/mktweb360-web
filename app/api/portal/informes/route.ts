import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  try {
    const [reportsRes, summaryRes] = await Promise.all([
      fetchMktOS("/reports", token, { cache: "no-store" }),
      fetchMktOS("/reports/summary", token, { cache: "no-store" }),
    ]);

    if ([reportsRes, summaryRes].some((r) => r.status === 401)) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    if (!reportsRes.ok || !summaryRes.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudieron cargar los informes." },
        { status: 502 }
      );
    }

    const reportsData = await reportsRes.json().catch(() => null);
    const summaryData = await summaryRes.json().catch(() => null);

    return NextResponse.json({
      ok: true,
      reports: Array.isArray(reportsData?.reports)
        ? reportsData.reports
        : Array.isArray(reportsData)
          ? reportsData
          : [],
      summary: Array.isArray(summaryData?.summary) ? summaryData.summary : [],
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
