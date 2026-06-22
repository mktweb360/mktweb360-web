import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const MKTOS_URL = "https://mktos360.app/api/webhooks/commercial-close";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET!;
const MKTOS_APP_URL = process.env.MKTOS_APP_URL || "https://mktos360.app";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const {
    opportunity_id,
    nombre,
    email,
    telefono,
    empresa,
    cif,
    direccion,
    precio,
    forma_pago,
    cuotas,
    comercial,
    notas,
  } = await req.json();

  if (!nombre || !email || !precio) {
    return NextResponse.json({ ok: false, error: "nombre, email y precio son obligatorios" }, { status: 400 });
  }

  try {
    const r = await fetch(MKTOS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": MKTOS_SECRET,
      },
      body: JSON.stringify({
        nombre,
        email,
        telefono: telefono || "",
        empresa: empresa || "",
        cif: cif || "",
        direccion: direccion || "",
        servicio_id: "seo-6x3",
        servicio_nombre: "SEO 6 meses x 3",
        precio: Number(precio),
        forma_pago: forma_pago || "single",
        cuotas: cuotas || undefined,
        opportunity_id: opportunity_id || undefined,
        comercial: comercial || "",
        notas: notas || "",
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error("[cerrar-contrato/seo-6x3] MktOS error:", r.status, text);
      return NextResponse.json({ ok: false, error: "Error en MktOS" }, { status: 502 });
    }

    const data = await r.json() as { ok: boolean; contract_id?: string };
    if (!data.ok || !data.contract_id) {
      return NextResponse.json({ ok: false, error: "MktOS no devolvió contract_id" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      contract_id: data.contract_id,
      redirect_url: `${MKTOS_APP_URL}/app/contracts/${data.contract_id}`,
    });
  } catch (e) {
    console.error("[cerrar-contrato/seo-6x3] timeout:", e);
    return NextResponse.json({ ok: false, error: "Timeout al conectar con MktOS" }, { status: 504 });
  }
}
