// Precios vigentes de los planes SEO: los del catálogo de MktOS, validados, con los de lib/planes-seo.ts de respaldo.
// Solo se acepta un precio del catálogo si encaja con cómo lo presenta la web (mensual, sin IVA, sin «desde»);
// si no encaja o la modalidad no está, se mantiene el precio de la web y se deja un aviso (lo ve MktOS › Web conectada).
import { leerCatalogo } from "@/lib/catalogo";
import { PLAN_EN_CATALOGO, precioLocal, type PlanId, type PreciosPlanes } from "@/lib/planes-seo";

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
