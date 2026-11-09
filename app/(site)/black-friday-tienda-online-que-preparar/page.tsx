import type { Metadata } from "next";
import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { blackFridayTiendaOnline } from "@/lib/articulos-tendencia/black-friday-tienda-online";

export const metadata: Metadata = metadataArticulo(blackFridayTiendaOnline, "es");

export default function Page() {
  return <ArticuloTendencia articulo={blackFridayTiendaOnline} lang="es" />;
}
