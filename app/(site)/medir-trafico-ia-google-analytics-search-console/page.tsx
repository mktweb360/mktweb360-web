import type { Metadata } from "next";
import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { medirTraficoIa } from "@/lib/articulos-tendencia/medir-trafico-ia";

export const metadata: Metadata = metadataArticulo(medirTraficoIa, "es");

export default function Page() {
  return <ArticuloTendencia articulo={medirTraficoIa} lang="es" />;
}
