import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mktweb360.com"),
  title: {
    default: "Mkt Web 360 — Agencia de Marketing Digital | España",
    template: "%s | Mkt Web 360",
  },
  description:
    "Agencia de marketing digital especializada en SEO, SEM, Redes Sociales y Diseño Web para PYMEs y empresas. Servicio nacional desde Toledo, España.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.mktweb360.com",
    siteName: "Mkt Web 360",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
