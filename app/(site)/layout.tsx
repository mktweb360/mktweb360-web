import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RootDocument } from "@/components/RootDocument";
import { baseMetadata } from "@/lib/root-metadata";

// Layout raíz de las páginas en español: <html lang="es"> servido desde el servidor.
export const metadata = baseMetadata;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="es">
      <Header />
      <main>{children}</main>
      <Footer />
    </RootDocument>
  );
}
