import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies — Mkt Web 360 SLU",
  description: "Información sobre el uso de cookies en el sitio web de Mkt Web 360 SLU conforme al art. 22 LSSI y el RGPD.",
  alternates: { canonical: "https://www.mktweb360.com/politica-de-cookies/" },
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Política de Cookies" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Política de Cookies</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: junio de 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños ficheros de texto que un sitio web almacena en el dispositivo del usuario (ordenador, tableta o smartphone) cuando este lo visita. Permiten que el sitio web recuerde información sobre la visita, como el idioma de preferencia o las opciones de configuración, lo que puede facilitarle la próxima visita y hacer que el sitio le resulte más útil.</p>
          <p className="mt-2">Las cookies pueden ser propias (establecidas por el propio sitio web) o de terceros (establecidas por servicios externos al sitio web), y pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes (permanecen en el dispositivo durante un período determinado).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Base legal</h2>
          <p>La instalación de cookies no esenciales requiere el consentimiento previo e informado del usuario, de conformidad con el <strong>artículo 7 del Reglamento (UE) 2016/679 (RGPD)</strong> y el <strong>artículo 22 de la Ley 34/2002, de Servicios de la Sociedad de la Información (LSSI)</strong>. Las cookies estrictamente necesarias para el funcionamiento del sitio no requieren consentimiento.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Cookies que utiliza este sitio web</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Nombre</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Proveedor</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Tipo</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Finalidad</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "_ga",
                    provider: "Google Analytics",
                    type: "Analítica",
                    purpose: "Distingue usuarios únicos asignando un número identificador aleatorio",
                    duration: "2 años",
                  },
                  {
                    name: "_ga_*",
                    provider: "Google Analytics",
                    type: "Analítica",
                    purpose: "Mantiene el estado de sesión para Google Analytics 4",
                    duration: "2 años",
                  },
                  {
                    name: "_gid",
                    provider: "Google Analytics",
                    type: "Analítica",
                    purpose: "Distingue usuarios únicos; se renueva cada 24 horas",
                    duration: "24 horas",
                  },
                  {
                    name: "_gcl_au",
                    provider: "Google Tag Manager",
                    type: "Analítica",
                    purpose: "Almacena y rastrea conversiones publicitarias",
                    duration: "3 meses",
                  },
                  {
                    name: "mktweb360_consent",
                    provider: "Propio",
                    type: "Preferencias",
                    purpose: "Guarda las preferencias de consentimiento de cookies del usuario",
                    duration: "1 año",
                  },
                ].map((row) => (
                  <tr key={row.name} className="even:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.name}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.provider}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.type}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.purpose}</td>
                    <td className="border border-gray-200 px-3 py-2 whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Cómo gestionar las cookies</h2>
          <p className="mb-4">Puede gestionar sus preferencias de cookies en cualquier momento a través del panel de preferencias disponible en la parte inferior de esta página, o bien configurando su navegador para bloquear o eliminar las cookies. A continuación encontrará instrucciones para los principales navegadores:</p>

          <div className="space-y-3">
            {[
              {
                browser: "Google Chrome",
                instructions: "Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.",
              },
              {
                browser: "Mozilla Firefox",
                instructions: "Opciones → Privacidad y seguridad → Cookies y datos del sitio.",
              },
              {
                browser: "Safari (macOS / iOS)",
                instructions: "Preferencias → Privacidad → Gestionar datos de sitios web.",
              },
              {
                browser: "Microsoft Edge",
                instructions: "Configuración → Privacidad, búsqueda y servicios → Cookies y permisos del sitio.",
              },
            ].map((item) => (
              <div key={item.browser} className="bg-gray-50 rounded-lg px-4 py-3">
                <p><strong>{item.browser}:</strong> {item.instructions}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-500">Tenga en cuenta que deshabilitar determinadas cookies puede afectar al correcto funcionamiento del sitio web o a su experiencia de navegación.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Actualizaciones de la política de cookies</h2>
          <p>Mkt Web 360 SLU se reserva el derecho a modificar la presente Política de Cookies para adaptarla a cambios legislativos, nuevas tecnologías o a la incorporación de nuevos servicios. Cuando se produzcan cambios significativos, se informará al usuario mediante el panel de consentimiento de cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Contacto</h2>
          <p>Para cualquier consulta relacionada con el uso de cookies en este sitio web, puede contactar con nosotros en: <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
        </section>

      </div>
    </div>
  );
}
