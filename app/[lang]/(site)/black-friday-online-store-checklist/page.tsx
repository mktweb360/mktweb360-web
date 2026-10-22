import { ArticuloTendencia, metadataArticulo } from "@/components/blog/ArticuloTendencia";
import { blackFridayTiendaOnline } from "@/lib/articulos-tendencia/black-friday-tienda-online";

// Plantilla compartida EN/FR (la carpeta FR reexporta esta página), como el resto de artículos traducidos.
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return metadataArticulo(blackFridayTiendaOnline, lang === "fr" ? "fr" : "en");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ArticuloTendencia articulo={blackFridayTiendaOnline} lang={lang === "fr" ? "fr" : "en"} />;
}
