import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { alternatesFor } from "@/lib/i18n/routes";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, fromMeta, ORG_ID } from "@/lib/schema";

export const metadata: Metadata = {
  // absolute: evita que la plantilla del layout ("%s | Mkt Web 360") duplique la marca.
  title: { absolute: "Agencia de Marketing Digital 360 para Pymes | Mkt Web 360" },
  description: "Agencia de marketing digital 360 para pymes y autónomos de toda España: SEO y GEO, Google Ads, redes sociales, diseño web, tiendas online e IA aplicada.",
  // hreflang a /en/ y /fr/ (antes solo canonical: la portada no declaraba sus traducciones).
  alternates: alternatesFor("/") ?? { canonical: "/" },
  openGraph: {
    description: "Agencia de marketing digital 360: SEO y GEO, redes sociales, diseño web y tiendas online, Google Ads e IA aplicada para empresas de toda España.",
    images: [{ url: "https://www.mktweb360.com/og-homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema("WebPage", { lang: "es", path: "/", ...fromMeta(metadata) }, { mainEntity: { "@id": ORG_ID } })} />
      <HomeClient />
    </>
  );
}
