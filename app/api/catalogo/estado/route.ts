// Estado de la conexión de la web con el catálogo de MktOS: qué precio muestra cada plan y de dónde sale.
// Lo consulta MktOS (Servicios y contratos › Web conectada). Solo datos públicos de precios.
import { NextResponse } from "next/server";

import { PLAN_EN_CATALOGO } from "@/lib/planes-seo";
import { preciosPlanesSeo } from "@/lib/precios-planes";

export const dynamic = "force-dynamic";

const PAGINAS = ["/precios-seo/", "/seo-local/", "/en/seo-pricing/", "/en/local-seo-services/", "/en/seo-agency-toledo/", "/en/digital-marketing-agency-toledo/", "/oferta-seo-geo-gbp/", "/agencia-seo-toledo/", "/agencia-marketing-digital-toledo/", "/consultor-seo/", "/en/seo-consultant/", "/fr/consultant-seo/"];

export async function GET() {
  const { planes, conectado, leido } = await preciosPlanesSeo();
  // mw360-seo-local: la página /seo-local/ muestra los planes de «Planes SEO».
  const servicios = [...new Set([...Object.values(PLAN_EN_CATALOGO).map((r) => r.servicio), "mw360-seo-local"])];
  return NextResponse.json(
    { ok: true, conectado, leido, servicios_conectados: servicios, paginas: PAGINAS, planes },
    { headers: { "Cache-Control": "no-store" } },
  );
}
