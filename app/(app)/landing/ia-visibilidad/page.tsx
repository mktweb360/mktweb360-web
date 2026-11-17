import type { Metadata } from "next";
import { LandingIaBf } from "@/components/landing/LandingIaBf";

export const metadata: Metadata = {
  title: "Aparece en las respuestas de ChatGPT y la IA | Mkt Web 360",
  description: "Posicionamiento en IA (GEO): auditoría de visibilidad, contenido citable y seguimiento mensual para empresas y profesionales.",
  alternates: { canonical: "https://www.mktweb360.com/landing/ia-visibilidad/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingIaBf
      variante="geo"
      formType="landing-ia-geo"
      titular="¿Te recomienda ChatGPT cuando tus clientes preguntan?"
      entradilla="Posicionamiento en IA (GEO): analizamos cómo te mencionan los asistentes de IA y trabajamos para que puedan citar tu empresa."
      whatsapp="Hola, me interesa el servicio de visibilidad en IA (GEO)"
    />
  );
}
