import { redirect } from "next/navigation";

// Esta ruta ES redirige a la versión EN principal — la página está orientada
// a empresas extranjeras y su versión canónica es /en/digital-marketing-agency-spain/
export default function AgenciaMarketingDigitalEspanaPage() {
  redirect("/en/digital-marketing-agency-spain/");
}
