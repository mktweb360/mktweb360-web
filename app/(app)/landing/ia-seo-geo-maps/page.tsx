import type { Metadata } from "next";
import { LandingIaBf } from "@/components/landing/LandingIaBf";

export const metadata: Metadata = {
  title: "Que te encuentren en Google, en Maps y en la IA | Mkt Web 360",
  description: "SEO + GEO + Google Maps en un solo servicio mensual para pymes. Oferta Black Friday.",
  alternates: { canonical: "https://www.mktweb360.com/landing/ia-seo-geo-maps/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingIaBf
      variante="pack"
      formType="landing-ia-pack"
      titular="Que te encuentren en Google, en Maps y en la IA"
      entradilla="SEO, GEO (visibilidad en asistentes de IA) y Google Business Profile en un solo servicio mensual para pymes."
      whatsapp="Hola, me interesa la oferta Black Friday SEO + GEO + Google Maps"
    />
  );
}
