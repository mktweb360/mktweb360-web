import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  const { id } = await ctx.params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
  }

  try {
    const res = await fetchMktOS(`/tickets/${encodeURIComponent(id)}/reply`, token, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (res.status === 401) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: (data as { error?: string }).error || "No se pudo enviar la respuesta." },
        { status: res.status }
      );
    }
    return NextResponse.json({ ok: true, ...(data as object) }, { status: res.status });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
