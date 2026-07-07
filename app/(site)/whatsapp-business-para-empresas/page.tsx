import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "WhatsApp Business para Empresas — Guía Completa 2025",
  description: "Cómo usar WhatsApp Business para captar y fidelizar clientes. Configuración, automatizaciones, catálogo y estrategia para empresas. Guía actualizada 2025.",
  alternates: { canonical: "https://www.mktweb360.com/whatsapp-business-para-empresas/" },
  openGraph: {
    title: "WhatsApp Business para Empresas — Guía Completa 2025 | Mkt Web 360",
    description: "Cómo usar WhatsApp Business para captar y fidelizar clientes. Configuración, automatizaciones, catálogo y estrategia para empresas. Guía actualizada 2025.",
    url: "https://www.mktweb360.com/whatsapp-business-para-empresas/",
    images: [{ url: "https://www.mktweb360.com/og-whatsapp-business-para-empresas.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "WhatsApp Business para Empresas — Guía Completa 2025 | Mkt Web 360",
  description: "Cómo usar WhatsApp Business para captar y fidelizar clientes. Configuración, automatizaciones, catálogo y estrategia para empresas. Guía actualizada 2025.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/whatsapp-business-para-empresas/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/whatsapp-business-para-empresas/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "WhatsApp Business" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Marketing Digital</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">WhatsApp Business para empresas: guía completa de configuración y estrategia</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">WhatsApp Business es el canal de comunicación con mayor tasa de apertura — un 98%. Esta guía explica cómo configurarlo correctamente, qué funciones aprovechar y cómo usarlo para captar y fidelizar clientes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">WhatsApp Business vs WhatsApp normal: diferencias clave</h2>
        <p className="text-gray-700 leading-relaxed mb-4">WhatsApp Business es una aplicación separada, gratuita, diseñada específicamente para empresas. A diferencia de WhatsApp normal, ofrece funciones pensadas para la comunicación comercial: perfil de empresa con información de contacto y descripción, catálogo de productos y servicios, respuestas automáticas, etiquetas para organizar conversaciones y estadísticas de mensajes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El número de teléfono puede ser el mismo que usas para WhatsApp personal si cambias de una app a la otra, o puedes usar un número diferente dedicado exclusivamente al negocio. La segunda opción es más profesional: separa la comunicación personal de la empresarial y facilita la gestión si más de una persona debe acceder a la cuenta.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una diferencia importante: WhatsApp Business estándar solo puede usarse en un dispositivo (como WhatsApp normal). Si necesitas que varios miembros del equipo gestionen la misma cuenta desde diferentes dispositivos, necesitas WhatsApp Business API, que tiene un coste pero ofrece capacidades mucho mayores.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo configurar tu perfil de empresa</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una configuración completa y profesional del perfil de WhatsApp Business genera confianza desde el primer mensaje y facilita que los clientes potenciales encuentren la información que necesitan sin tener que preguntarla.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Nombre del negocio:</strong> Usa el nombre oficial de tu empresa, tal como aparece en tu web y en Google. La consistencia entre canales facilita que los clientes te reconozcan.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Foto de perfil:</strong> El logo de tu empresa, con buena resolución. No uses fotos personales ni imágenes genéricas.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Descripción:</strong> 139 caracteres para describir qué hace tu empresa y qué problema resuelves. Sé directo y orientado al beneficio del cliente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Categoría:</strong> Elige la categoría que mejor describa tu negocio para que WhatsApp pueda clasificarlo correctamente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Horario de atención:</strong> Configura los días y horarios en que atiendes por WhatsApp. Esto gestiona las expectativas del cliente y evita frustración cuando el mensaje tarda en responderse.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Dirección y web:</strong> Añade tu dirección física si tienes local y <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">el enlace a tu web</Link>. Estos datos aparecen en tu perfil y ayudan a los clientes a encontrarte.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Catálogo de productos y servicios en WhatsApp</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El catálogo de WhatsApp Business permite crear una vitrina de tus productos o servicios directamente en la app. Los clientes pueden ver el catálogo desde tu perfil sin necesidad de visitar tu web, y pueden enviar pedidos o consultas sobre productos específicos directamente en el chat.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para cada ítem del catálogo puedes añadir: nombre, descripción, precio, enlace al producto en tu web y código de referencia. Para negocios de hostelería, retail o servicios profesionales, tener el catálogo bien configurado puede ser la diferencia entre que un cliente te pregunte por precio (y quizás no compre) a que llegue al chat ya con la intención de compra formada.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios de servicios, el catálogo funciona igualmente bien: presenta cada servicio con una descripción clara, el tiempo estimado y el precio orientativo. Esto reduce el tiempo de cualificación en cada conversación.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Respuestas automáticas y mensajes de bienvenida</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las automatizaciones básicas de WhatsApp Business son sencillas pero muy efectivas para mejorar la experiencia del cliente y reducir el tiempo de gestión manual.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Mensaje de bienvenida:</strong> Se envía automáticamente cuando alguien te contacta por primera vez o después de 14 días de inactividad. Úsalo para agradecer el contacto, presentar tu empresa y gestionar expectativas de tiempo de respuesta. Evita los mensajes genéricos — personaliza el tono para que encaje con la voz de tu marca.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Mensaje de ausencia:</strong> Se activa fuera del horario de atención. Informa al cliente de que estás fuera y cuándo responderás. Incluir el horario de atención en este mensaje reduce la frustración de los clientes que no lo recuerdan.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Respuestas rápidas:</strong> Atajos para mensajes que envías frecuentemente (presupuestos, información de horarios, dirección, enlace al catálogo). Se activan con "/" seguido de una palabra clave. Esto ahorra tiempo considerable en la gestión diaria.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia de captación por WhatsApp</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Tener WhatsApp Business configurado es solo el primer paso. La estrategia de captación define cómo llevas potenciales clientes a iniciar una conversación contigo por este canal.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El método más directo es añadir el botón de WhatsApp en tu web y en <Link href="/smm-social-media-marketing/" className="text-accent-500 hover:underline">tus perfiles de redes sociales</Link>. El enlace directo (wa.me/34TUTELEFONO) permite iniciar una conversación con un clic sin necesidad de guardar el número. Añade un mensaje preescrito en el enlace para reducir la fricción: "wa.me/34622748987?text=Hola, quiero más información sobre vuestros servicios".</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios que hacen <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">publicidad en Meta (Facebook e Instagram)</Link>, los anuncios con CTA de WhatsApp tienen generalmente una tasa de conversión superior a los anuncios con formulario porque reducen la fricción: el usuario hace clic y directamente empieza una conversación, sin rellenar datos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los QR de WhatsApp en materiales físicos (tarjetas de visita, folletos, escaparates) conectan el mundo offline con el canal digital de forma muy sencilla y tienen una tasa de uso sorprendentemente alta.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">WhatsApp Business API: cuándo dar el salto</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La API de WhatsApp Business está pensada para empresas con volumen de mensajes elevado que necesitan automatizaciones avanzadas, integración con CRM o atención por múltiples agentes desde el mismo número. Es la opción que usan los ecommerce de tamaño medio, clínicas con gran volumen de citas o empresas con equipos de atención al cliente.</p>
        <p className="text-gray-700 leading-relaxed mb-4">A diferencia de la app gratuita, la API tiene coste: se paga por conversación iniciada (con tarifas distintas según si la inicia el cliente o la empresa) y necesita un proveedor intermediario (BSP - Business Solution Provider) que gestiona la integración técnica.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las capacidades que añade la API son: múltiples agentes en el mismo número, chatbots para cualificación automática, integración con CRM (HubSpot, Salesforce), envío masivo de mensajes de marketing con plantillas aprobadas por WhatsApp, y analítica avanzada de conversaciones. Para empresas que gestionan más de 50-100 conversaciones al mes, la inversión en API se amortiza rápidamente en tiempo de gestión.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" />
    </>
  );
}
