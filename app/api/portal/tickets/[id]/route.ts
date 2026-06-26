import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  const { id } = await ctx.params;

  try {
    const res = await fetchMktOS(`/tickets/${encodeURIComponent(id)}`, token, {
      cache: "no-store",
    });
    if (res.status === 401) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    if (res.status === 404) {
      return NextResponse.json({ ok: false, error: "Ticket no encontrado." }, { status: 404 });
    }
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudo cargar el ticket." },
        { status: 502 }
      );
    }
    const data = await res.json().catch(() => null);
    const ticket = (data && (data.ticket ?? data)) || null;
    const replies = Array.isArray(data?.replies)
      ? data.replies
      : Array.isArray(ticket?.replies)
        ? ticket.replies
        : [];
    return NextResponse.json({ ok: true, ticket, replies });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
