import type { Metadata } from "next";
import { LandingPlanBf } from "@/components/landing/LandingPlanBf";

export const metadata: Metadata = {
  title: "SEO para tu tienda online pequeña | Mkt Web 360",
  description: "SEO técnico de tienda, categorías y fichas de producto, con GEO para que los asistentes de IA lean tu catálogo.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-ecommerce-s/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingPlanBf
      id="ecommerce-s"
      formType="landing-seo-ecommerce-s"
      titular="SEO para tu tienda online pequeña"
      entradilla="SEO técnico de tienda, categorías y fichas de producto, con GEO para que los asistentes de IA lean tu catálogo."
      whatsapp="Hola, me interesa el plan Ecommerce S de Black Friday"
    />
  );
}
