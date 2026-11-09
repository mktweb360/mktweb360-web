import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { modoIaGoogle } from "@/lib/articulos-tendencia/modo-ia-google";

// Plantilla compartida EN/FR (la carpeta FR reexporta esta página), como el resto de artículos traducidos.
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return metadataArticulo(modoIaGoogle, lang === "fr" ? "fr" : "en");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ArticuloTendencia articulo={modoIaGoogle} lang={lang === "fr" ? "fr" : "en"} />;
}
