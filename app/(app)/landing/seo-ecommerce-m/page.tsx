import type { Metadata } from "next";
import { LandingPlanBf } from "@/components/landing/LandingPlanBf";

export const metadata: Metadata = {
  title: "SEO para tu tienda online con catálogo amplio | Mkt Web 360",
  description: "Arquitectura de categorías, SEO técnico y GEO para tiendas con varias familias de producto.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-ecommerce-m/" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <LandingPlanBf
      id="ecommerce-m"
      formType="landing-seo-ecommerce-m"
      titular="SEO para tu tienda online con catálogo amplio"
      entradilla="Arquitectura de categorías, SEO técnico y GEO para tiendas con varias familias de producto."
      whatsapp="Hola, me interesa el plan Ecommerce M de Black Friday"
    />
  );
}
