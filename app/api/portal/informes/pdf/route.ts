import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  try {
    const res = await fetchMktOS("/reports/pdf", token, { cache: "no-store" });

    if (res.status === 401) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudo generar el PDF." },
        { status: 502 }
      );
    }

    const pdf = await res.arrayBuffer();
    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="informe-mktweb360.pdf"',
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
