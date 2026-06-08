import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies — Mkt Web 360 SLU",
  description: "Información sobre el uso de cookies en el sitio web de Mkt Web 360 SLU.",
  alternates: { canonical: "https://www.mktweb360.com/politica-de-cookies/" },
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Política de Cookies" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-6">Política de Cookies</h1>
      <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños ficheros de texto que se almacenan en tu dispositivo cuando visitas una página web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">Cookies que utilizamos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left">Cookie</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Tipo</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Finalidad</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Duración</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "_ga", type: "Analítica", purpose: "Google Analytics — análisis de tráfico anónimo", duration: "2 años" },
                  { name: "_gid", type: "Analítica", purpose: "Google Analytics — diferencia sesiones de usuario", duration: "24 horas" },
                  { name: "_gtm_*", type: "Analítica", purpose: "Google Tag Manager — gestión de etiquetas", duration: "Sesión" },
                ].map(row => (
                  <tr key={row.name}>
                    <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.name}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.type}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.purpose}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">Cómo gestionar las cookies</h2>
          <p>Puedes configurar tu navegador para rechazar o eliminar cookies. Ten en cuenta que algunas funcionalidades del sitio pueden verse afectadas.</p>
        </section>
      </div>
    </div>
  );
}
