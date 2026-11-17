import type { Metadata } from "next";
import { LandingIaBf } from "@/components/landing/LandingIaBf";

export const metadata: Metadata = {
  title: "Optimiza tu web para la IA (GEO) | Mkt Web 360",
  description: "Posicionamiento en IA (GEO): auditoría de visibilidad, contenido citable y seguimiento mensual para empresas y profesionales.",
  alternates: { canonical: "https://www.mktweb360.com/landing/ia-visibilidad/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingIaBf
      variante="geo"
      formType="landing-ia-geo"
      eyebrow="GEO + SEO + MAPs"
      titular="Las tendencias de búsqueda están cambiando"
      subtitulo="Optimizar lo antes posible tu web para la IA puede darte una ventaja respecto a la competencia"
      entradilla="ChatGPT, Gemini, Perplexity, Claude o Google con IA responden con unos pocos negocios. Analizamos si el tuyo aparece y trabajamos para que puedan citarte."
      gancho="El que antes empiece, parte con ventaja"
      conMovil
      whatsapp="Hola, me interesa el servicio de visibilidad en IA (GEO)"
    />
  );
}
