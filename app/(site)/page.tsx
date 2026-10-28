import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  // absolute: evita que la plantilla del layout ("%s | Mkt Web 360") duplique la marca.
  title: { absolute: "Agencia de Marketing Digital 360 para Pymes | Mkt Web 360" },
  description: "Agencia de marketing digital 360: SEO y GEO, redes sociales, diseño web y tiendas online, Google Ads e IA aplicada para empresas, pymes y autónomos de toda España.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: "Agencia de marketing digital 360: SEO y GEO, redes sociales, diseño web y tiendas online, Google Ads e IA aplicada para empresas de toda España.",
    images: [{ url: "https://www.mktweb360.com/og-homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
