// Precios vigentes de los planes SEO: los del catálogo de MktOS, validados, con los de lib/planes-seo.ts de respaldo.
// Solo se acepta un precio del catálogo si encaja con cómo lo presenta la web (mensual, sin IVA, sin «desde»);
// si no encaja o la modalidad no está, se mantiene el precio de la web y se deja un aviso (lo ve MktOS › Web conectada).
import { leerCatalogo } from "@/lib/catalogo";
import { PLAN_EN_CATALOGO, precioLocal, type PlanId, type PreciosPlanes } from "@/lib/planes-seo";
import { PRECIOS_OFERTA_SEO_RESPALDO, type PreciosOfertaSeo } from "@/lib/ofertas";
export type { PreciosOfertaSeo } from "@/lib/ofertas";

export interface EstadoPlan {
  id: PlanId;
  offering: string;
  key: string;
  nombre: string;
  local: number | null;
  catalogo: number | null | undefined; // undefined = no está en el catálogo publicado
  usado: number | null;
  fuente: "catalogo" | "web";
  aviso: string | null;
}

export async function preciosPlanesSeo(): Promise<{ precios: PreciosPlanes; planes: EstadoPlan[]; conectado: boolean; leido: string | null }> {
  const cat = await leerCatalogo();
  const precios: PreciosPlanes = {};
  const planes: EstadoPlan[] = [];
  for (const id of Object.keys(PLAN_EN_CATALOGO) as PlanId[]) {
    const ref = PLAN_EN_CATALOGO[id];
    const local = precioLocal(id);
    const m = cat?.servicios.find((s) => s.id === ref.servicio)?.modalidades.find((x) => x.key === ref.modalidad);
    let aviso: string | null = null;
    let usado = local;
    if (!cat) aviso = null;
    else if (!m) aviso = "No está publicada en MktOS: la web mantiene su precio.";
    else if (m.precio === null) {
      if (m.periodo === "presupuesto") usado = null;
      else aviso = "Sin precio en MktOS pero no es «a presupuesto»: la web mantiene su precio.";
    } else if (m.periodo !== "mes") aviso = `En MktOS el periodo es «${m.periodo}» y la web lo muestra al mes: se mantiene el precio de la web.`;
    else if (m.iva_incluido) aviso = "En MktOS figura con IVA incluido y la web muestra precios sin IVA: se mantiene el precio de la web.";
    else if (m.desde) aviso = "En MktOS es un precio «desde» y la web lo muestra cerrado: se mantiene el precio de la web.";
    else if (!(m.precio > 0 && m.precio < 100000)) aviso = "Precio fuera de rango en MktOS: se mantiene el precio de la web.";
    else usado = m.precio;
    const fuente = cat && m && !aviso ? "catalogo" : "web";
    if (fuente === "catalogo") precios[id] = usado;
    planes.push({ id, offering: ref.servicio, key: ref.modalidad, nombre: m?.nombre ?? id, local, catalogo: m ? m.precio : undefined, usado, fuente, aviso });
  }
  return { precios, planes, conectado: !!cat, leido: cat?.leido ?? null };
}

// ── Oferta SEO + GEO + Google Business Profile: FUENTE ÚNICA de su precio (decisión de José, 29/10/2026) ──
// Todo lo que muestra o cita este precio (página de la oferta, consultor-seo / seo-consultant, guía SEO para pymes,
// banners de blog, portada, páginas de Toledo y el asistente) llama a esta función. Si MktOS cambia el precio,
// cambia en toda la web y en el asistente en ≤5 minutos (caché del catálogo). Respaldo: lib/ofertas.ts.
// - Sin permanencia: la modalidad del plan «pyme» del catálogo, con la misma validación que los planes.
// - Con permanencia de 6 meses: hoy NO está publicada en MktOS, así que sale del respaldo. Si se publica con la
//   modalidad de PERMANENCIA_6M_EN_CATALOGO (mensual, sin IVA, cerrada y con 6 meses de permanencia), se usa esa.
export const PERMANENCIA_6M_EN_CATALOGO = { servicio: "mw360-oferta-seo-geo-gbp", modalidad: "permanencia-6-meses" };

export async function preciosOfertaSeo(): Promise<PreciosOfertaSeo> {
  const [{ precios }, cat] = await Promise.all([preciosPlanesSeo(), leerCatalogo()]);
  const sin = precios.pyme;
  const m6 = cat?.servicios
    .find((s) => s.id === PERMANENCIA_6M_EN_CATALOGO.servicio)
    ?.modalidades.find((x) => x.key === PERMANENCIA_6M_EN_CATALOGO.modalidad);
  const p6Valido = m6 && m6.precio != null && m6.periodo === "mes" && !m6.iva_incluido && !m6.desde && m6.permanencia_meses === 6 && m6.precio > 0 && m6.precio < 100000;
  return {
    sinPermanencia: typeof sin === "number" ? sin : PRECIOS_OFERTA_SEO_RESPALDO.sinPermanencia,
    permanencia6m: p6Valido ? (m6.precio as number) : PRECIOS_OFERTA_SEO_RESPALDO.permanencia6m,
  };
}
