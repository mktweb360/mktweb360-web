import type { Metadata } from "next";
import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { modoIaGoogle } from "@/lib/articulos-tendencia/modo-ia-google";

export const metadata: Metadata = metadataArticulo(modoIaGoogle, "es");

export default function Page() {
  return <ArticuloTendencia articulo={modoIaGoogle} lang="es" />;
}
