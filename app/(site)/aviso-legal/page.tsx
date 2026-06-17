import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso Legal — Mkt Web 360 SLU",
  description: "Aviso legal y condiciones de uso del sitio web de Mkt Web 360 SLU, CIF B87679304.",
  alternates: { canonical: "https://www.mktweb360.com/aviso-legal/" },
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Aviso Legal" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Aviso Legal</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: junio de 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Datos identificativos</h2>
          <p className="mb-3">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos identificativos del titular del sitio web:</p>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Denominación social:</strong> Mkt Web 360 SLU</p>
            <p><strong>CIF:</strong> B87679304</p>
            <p><strong>Responsable:</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Denominación social:</strong> MKTWEB360, S.L.U.</p>
            <p><strong>Nombre comercial:</strong> MKTWEB</p>
            <p><strong>CIF:</strong> B87679304</p>
            <p><strong>Domicilio social:</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo</p>
            <p><strong>Registro Mercantil:</strong> Tomo 35360, Folio 45, Sección 8, Hoja M-635651</p>
            <p><strong>Teléfono:</strong> <a href="tel:+34622748987" className="text-accent-500 hover:underline">+34 622 74 89 87</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
            <p><strong>Sitio web:</strong> <a href="https://www.mktweb360.com" className="text-accent-500 hover:underline">https://www.mktweb360.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Objeto y ámbito de aplicación</h2>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.mktweb360.com</strong> (en adelante, "el Sitio Web"), titularidad de Mkt Web 360 SLU. El acceso al Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones. Mkt Web 360 SLU se reserva el derecho a modificar en cualquier momento el presente Aviso Legal, siendo responsabilidad del usuario revisarlo periódicamente.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Condiciones de uso</h2>
          <p className="mb-3">El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal, las buenas costumbres y el orden público. Queda expresamente prohibido:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Reproducir, distribuir o modificar los contenidos del Sitio Web sin autorización expresa de Mkt Web 360 SLU.</li>
            <li>Utilizar el Sitio Web para actividades ilícitas, contrarias a la buena fe o al orden público.</li>
            <li>Introducir o difundir virus informáticos o cualquier otro sistema que pueda producir daños en el Sitio Web o en sistemas de terceros.</li>
            <li>Intentar acceder, utilizar o manipular datos de Mkt Web 360 SLU, otros usuarios o terceros.</li>
            <li>Utilizar mecanismos de extracción masiva de datos (scraping) sin autorización.</li>
          </ul>
          <p className="mt-3">Mkt Web 360 SLU se reserva el derecho a denegar o retirar el acceso al Sitio Web a cualquier usuario que incumpla las presentes condiciones.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Propiedad intelectual e industrial</h2>
          <p className="mb-3">Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, vídeos, logotipos, marcas, nombres comerciales, diseño gráfico, código fuente y software— son propiedad de Mkt Web 360 SLU o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
          <p>Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otro uso de los contenidos del Sitio Web sin la autorización expresa y por escrito de Mkt Web 360 SLU. El incumplimiento de esta prohibición podrá dar lugar a las acciones legales correspondientes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Responsabilidad y garantías</h2>
          <p className="mb-3">Mkt Web 360 SLU no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web. Cuando ello sea razonablemente posible, se advertirá previamente de las interrupciones en el funcionamiento del Sitio Web.</p>
          <p className="mb-3">Mkt Web 360 SLU no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del Sitio Web, incluyendo los producidos en los sistemas informáticos de los usuarios por la introducción de virus o ataques informáticos originados en el Sitio Web.</p>
          <p>Los contenidos del Sitio Web tienen carácter meramente informativo. Mkt Web 360 SLU no garantiza la exactitud, integridad o actualización de la información publicada, ni asume responsabilidad alguna por los daños que pudiera causar la información contenida en el Sitio Web.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Política de enlaces</h2>
          <p className="mb-3">El Sitio Web puede contener enlaces a páginas web de terceros. Mkt Web 360 SLU no tiene control sobre dichos sitios web ni asume responsabilidad alguna por sus contenidos, políticas de privacidad o prácticas.</p>
          <p>Si desea establecer un enlace al Sitio Web desde otra página web, deberá solicitarlo previamente por escrito a Mkt Web 360 SLU a través de <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>. Queda prohibido el enlace desde páginas web cuyos contenidos sean ilícitos, ofensivos o contrarios al orden público.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Legislación aplicable y jurisdicción</h2>
          <p>Las presentes condiciones se rigen e interpretan de conformidad con la legislación española. Para la resolución de cualquier controversia, discrepancia o reclamación que pudiera derivarse de la interpretación o ejecución del presente Aviso Legal, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de la ciudad de <strong>Toledo (España)</strong>.</p>
        </section>

      </div>
    </div>
  );
}
