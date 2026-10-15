// Catálogo de servicios publicado en MktOS (fuente de servicios y precios de la web).
// Se lee en el servidor con caché de 5 minutos. Si MktOS no responde, devuelve null y la web usa sus datos fijos.

export const CATALOGO_URL = process.env.MKTOS_CATALOG_URL || "https://mktos360.app/api/public/catalog";

export interface ModalidadCatalogo {
  key: string;
  nombre: string;
  descripcion: string | null;
  a_medida: boolean;
  precio: number | null;
  desde: boolean;
  periodo: "mes" | "unico" | "anio" | "primer_anio" | "presupuesto";
  iva_incluido: boolean;
  alta: number | null;
  permanencia_meses: number;
  preaviso_dias: number;
  caracteristicas: { key: string; texto: string; incluida: boolean; limite: number | null }[];
  valida_hasta: string | null;
}
export interface ServicioCatalogo {
  id: string;
  slug: string | null;
  url: string | null;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio_label: string | null;
  modalidades: ModalidadCatalogo[];
}
export interface Catalogo {
  servicios: ServicioCatalogo[];
  leido: string;
}

export async function leerCatalogo(): Promise<Catalogo | null> {
  try {
    const r = await fetch(CATALOGO_URL, { next: { revalidate: 300, tags: ["catalogo"] }, signal: AbortSignal.timeout(4000) });
    if (!r.ok) return null;
    const j = (await r.json()) as { ok?: boolean; actualizado?: string; servicios?: ServicioCatalogo[] };
    if (!j.ok || !Array.isArray(j.servicios)) return null;
    return { servicios: j.servicios, leido: j.actualizado ?? new Date().toISOString() };
  } catch {
    return null;
  }
}
