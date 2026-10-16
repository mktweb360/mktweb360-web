import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales de MKT WEB 360, S.L.U. conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "https://www.mktweb360.com/politica-de-privacidad/" },
  openGraph: { url: "https://www.mktweb360.com/politica-de-privacidad/" },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Política de Privacidad" }]} />
      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-2">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: octubre de 2026</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Responsable del tratamiento</h2>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Responsable:</strong> MKT WEB 360, S.L.U. (nombre comercial: Mkt Web 360)</p>
            <p><strong>CIF:</strong> B87679304</p>
            <p><strong>Administrador único:</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Dirección:</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo</p>
            <p><strong>Registro Mercantil:</strong> Tomo 35360, Folio 45, Sección 8, Hoja M-635651</p>
            <p><strong>Email de contacto:</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
          </div>
          <p className="mt-3">MKT WEB 360, S.L.U. no cuenta con Delegado de Protección de Datos (DPD) designado, al no estar obligada a ello según el artículo 37 del RGPD. Para cualquier consulta en materia de protección de datos, puede dirigirse a la dirección de correo electrónico indicada.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Finalidades del tratamiento y base jurídica</h2>
          <p className="mb-4">Tratamos sus datos personales para las siguientes finalidades:</p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.1 Gestión de solicitudes de contacto</h3>
              <p className="mb-1">Tratamos los datos que nos facilita a través del formulario de contacto del sitio web (nombre, email, teléfono y mensaje) para atender y gestionar su consulta o solicitud.</p>
              <p><strong>Base jurídica:</strong> cuando nos pide presupuesto, una auditoría o información sobre un servicio, la aplicación a petición suya de medidas precontractuales (art. 6.1.b RGPD); para cualquier otra consulta, nuestro interés legítimo en responderle (art. 6.1.f RGPD). La solicitud se registra en nuestro sistema interno de gestión de clientes (MktOS) para hacer su seguimiento.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.2 Envío de comunicaciones comerciales</h3>
              <p className="mb-1">Si nos otorga su consentimiento expreso, utilizaremos sus datos de contacto para enviarle información sobre nuestros servicios, novedades y contenidos de interés.</p>
              <p><strong>Base jurídica:</strong> Consentimiento del interesado (art. 6.1.a RGPD y art. 21 LSSI), recogido con una casilla independiente y no premarcada: enviar el formulario sin marcarla no da lugar a comunicaciones comerciales. Como prueba del consentimiento guardamos la fecha, la página y el texto que usted aceptó. Puede retirarlo en cualquier momento escribiendo a info@mktweb360.com o respondiendo a cualquiera de ellas, sin que ello afecte a la licitud del tratamiento anterior a su retirada.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.3 Área de clientes y prestación de servicios</h3>
              <p className="mb-1">Si es cliente, tratamos sus datos de acceso al área de clientes (email y contraseña, que se guarda cifrada de forma irreversible), los datos de empresa que usted mantiene en ella (razón social, NIF, dirección, teléfono y web), las facturas y los informes de los servicios contratados.</p>
              <p><strong>Base jurídica:</strong> Ejecución del contrato (art. 6.1.b RGPD) y cumplimiento de obligaciones legales de facturación, contabilidad y fiscalidad (art. 6.1.c RGPD).</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.4 Análisis estadístico del sitio web</h3>
              <p className="mb-1">Con su consentimiento previo, utilizamos Google Analytics 4 y Google Tag Manager para recopilar información estadística y anónima sobre el uso del sitio web, con el fin de mejorar su funcionalidad y contenidos.</p>
              <p><strong>Base jurídica:</strong> Consentimiento del interesado (art. 6.1.a RGPD y art. 22 LSSI).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Destinatarios de los datos y transferencias internacionales</h2>
          <p className="mb-4">Sus datos podrán ser comunicados a los siguientes proveedores de servicios que actúan como encargados del tratamiento, con los que MKT WEB 360, S.L.U. ha suscrito los correspondientes acuerdos de encargo de tratamiento:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left">Proveedor</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Finalidad</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">País</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Garantías</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Google LLC</td>
                  <td className="border border-gray-200 px-3 py-2">Google Analytics 4 y Google Tag Manager (analítica web)</td>
                  <td className="border border-gray-200 px-3 py-2">EE. UU.</td>
                  <td className="border border-gray-200 px-3 py-2">Cláusulas Contractuales Tipo (art. 46.2.c RGPD)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Vercel Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Alojamiento del sitio web y de la plataforma de gestión MktOS</td>
                  <td className="border border-gray-200 px-3 py-2">EE. UU.</td>
                  <td className="border border-gray-200 px-3 py-2">Cláusulas Contractuales Tipo (art. 46.2.c RGPD)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Supabase Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Base de datos de la plataforma de gestión MktOS (contactos, clientes, facturas y área de clientes)</td>
                  <td className="border border-gray-200 px-3 py-2">Datos alojados en Suiza (Zúrich)</td>
                  <td className="border border-gray-200 px-3 py-2">Decisión de adecuación de la Comisión Europea para Suiza; Cláusulas Contractuales Tipo para el acceso desde EE. UU.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Resend Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Envío de emails transaccionales</td>
                  <td className="border border-gray-200 px-3 py-2">EE. UU.</td>
                  <td className="border border-gray-200 px-3 py-2">Cláusulas Contractuales Tipo (art. 46.2.c RGPD)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">SiteGround</td>
                  <td className="border border-gray-200 px-3 py-2">Alojamiento del correo electrónico</td>
                  <td className="border border-gray-200 px-3 py-2">UE</td>
                  <td className="border border-gray-200 px-3 py-2">Dentro del EEE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">No se ceden datos a terceros para finalidades distintas a las descritas, salvo obligación legal.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Conservación de los datos</h2>
          <p className="mb-3">Los datos facilitados a través del formulario de contacto se conservarán durante <strong>3 años desde el último contacto</strong>, salvo que exista obligación legal de conservarlos por un período superior o que el interesado solicite su supresión antes de dicho plazo.</p>
          <p className="mb-3">Los datos de clientes, contratos y facturas se conservan mientras dure la relación y, después, durante los plazos legales: <strong>6 años</strong> para los libros, la correspondencia y los justificantes de la actividad (art. 30 del Código de Comercio) y, en su caso, el plazo de prescripción de las obligaciones tributarias.</p>
          <p className="mb-3">La prueba del consentimiento para comunicaciones comerciales se conserva mientras siga vigente y, tras su retirada, solo el tiempo necesario para atender posibles reclamaciones.</p>
          <p>Los datos tratados con fines analíticos a través de Google Analytics 4 se conservan durante el período configurado en dicha herramienta (por defecto, 14 meses), en formato anonimizado.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Derechos de los interesados</h2>
          <p className="mb-3">De conformidad con el RGPD y la LOPDGDD, puede ejercer en cualquier momento los siguientes derechos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso:</strong> Conocer qué datos personales tratamos sobre usted.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines para los que fueron recogidos.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado, de uso común y lectura mecánica.</li>
            <li><strong>Limitación del tratamiento:</strong> Solicitar la restricción del tratamiento de sus datos en determinadas circunstancias.</li>
          </ul>
          <p className="mt-4">Para ejercer cualquiera de estos derechos, puede dirigirse a <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>, indicando el derecho que desea ejercer. Le responderemos en el plazo de un mes. Si escribe desde un correo distinto del que consta en nuestros registros y tenemos dudas razonables sobre su identidad, podremos pedirle información adicional para confirmarla (art. 12.6 RGPD); no le pediremos copia del DNI si no es necesario.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Derecho de reclamación ante la autoridad de control</h2>
          <p>Si considera que el tratamiento de sus datos personales no es adecuado o vulnera la normativa vigente, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, autoridad de control competente en España, a través de su sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">www.aepd.es</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Decisiones automatizadas y elaboración de perfiles</h2>
          <p>MKT WEB 360, S.L.U. no realiza decisiones automatizadas ni elaboración de perfiles con los datos de los usuarios del sitio web en los términos del artículo 22 del RGPD.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">8. Modificaciones de la política de privacidad</h2>
          <p>MKT WEB 360, S.L.U. se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o cambios en la actividad empresarial. Cualquier modificación será publicada en esta página con la indicación de la fecha de actualización.</p>
        </section>

      </div>
    </div>
  );
}
