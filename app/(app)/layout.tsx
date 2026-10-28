import { RootDocument } from "@/components/RootDocument";
import { baseMetadata } from "@/lib/root-metadata";

// Layout raíz de área privada, portal de clientes y landings (en español, sin la cabecera de la web).
// Área privada y portal no se indexan (las landings ya llevan su propio noindex).
export const metadata = { ...baseMetadata, robots: { index: false, follow: false } };

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
