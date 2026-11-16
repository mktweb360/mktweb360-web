import type { Metadata } from "next";
import { LandingPlanBf } from "@/components/landing/LandingPlanBf";

export const metadata: Metadata = {
  title: "SEO y GEO para empresas con varias sedes | Mkt Web 360",
  description: "Una estrategia de visibilidad en Google y en asistentes de IA para webs de servicios más amplias y varias fichas.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-crecimiento-multisede/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingPlanBf
      id="crecimiento"
      formType="landing-seo-crecimiento"
      titular="SEO y GEO para empresas con varias sedes"
      entradilla="Una estrategia de visibilidad en Google y en asistentes de IA para webs de servicios más amplias y varias fichas."
      whatsapp="Hola, me interesa el plan Crecimiento / Multisede de Black Friday"
    />
  );
}
