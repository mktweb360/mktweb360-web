import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { medirTraficoIa } from "@/lib/articulos-tendencia/medir-trafico-ia";

// Plantilla compartida EN/FR (la carpeta FR reexporta esta página), como el resto de artículos traducidos.
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return metadataArticulo(medirTraficoIa, lang === "fr" ? "fr" : "en");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ArticuloTendencia articulo={medirTraficoIa} lang={lang === "fr" ? "fr" : "en"} />;
}
