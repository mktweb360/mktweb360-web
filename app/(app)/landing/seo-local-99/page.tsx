import type { Metadata } from "next";
import { LandingPlanBf } from "@/components/landing/LandingPlanBf";

export const metadata: Metadata = {
  title: "SEO local para que te encuentren cerca | Mkt Web 360",
  description: "Posicionamiento en Google y en tu ficha de Google Business Profile para autónomos y profesionales.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-local-99/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingPlanBf
      id="local"
      formType="landing-seo-local"
      titular="SEO local para que te encuentren cerca"
      entradilla="Posicionamiento en Google y en tu ficha de Google Business Profile para autónomos y profesionales."
      whatsapp="Hola, me interesa el plan SEO Local Esencial de Black Friday"
    />
  );
}
