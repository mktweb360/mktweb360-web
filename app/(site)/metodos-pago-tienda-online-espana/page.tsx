import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Métodos de Pago para Tiendas Online en España: Cuál Elegir en 2025 | Mkt Web 360",
  description: "Comparativa de pasarelas de pago para ecommerce en España: Stripe, Bizum, PayPal, Redsys y alternativas. Comisiones, integración con WooCommerce y cuál funciona mejor.",
  alternates: { canonical: "https://www.mktweb360.com/metodos-pago-tienda-online-espana/" },
  openGraph: {
    title: "Métodos de Pago para Tiendas Online en España | Mkt Web 360",
    description: "Comparativa de pasarelas de pago para ecommerce en España: Stripe, Bizum, PayPal, Redsys y alternativas. Comisiones, integración y cuál funciona mejor.",
    url: "https://www.mktweb360.com/metodos-pago-tienda-online-espana/",
    images: [{ url: "/og-metodos-pago-tienda-online-espana.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Métodos de Pago para Tiendas Online en España: Cuál Elegir en 2025 | Mkt Web 360",
  description: "Comparativa de pasarelas de pago para ecommerce en España: Stripe, Bizum, PayPal, Redsys y alternativas. Comisiones, integración con WooCommerce y cuál funciona mejor.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/metodos-pago-tienda-online-espana/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/metodos-pago-tienda-online-espana/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Métodos de pago tienda online España" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Métodos de pago para tiendas online en España: cuál elegir y cuánto cobran en 2025</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">La pasarela de pago que elijas afecta directamente a cuántos clientes terminan la compra. Una mala experiencia en el checkout es la principal causa de abandono de carrito. Esta guía compara las opciones disponibles en España para que elijas con datos.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué métodos de pago prefieren los compradores españoles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Según datos de la Comisión Nacional de los Mercados y la Competencia (CNMC) y estudios de ecommerce en España, los métodos de pago más usados en tiendas online españolas son, por orden de preferencia: tarjeta de crédito/débito (60-70% de las transacciones), PayPal (15-20%), Bizum (en crecimiento acelerado), transferencia bancaria y contra reembolso (en declive pero todavía relevante para productos de alto valor).</p>
        <p className="text-gray-700 leading-relaxed mb-4">La aparición de Bizum ha cambiado el panorama en España. En 2020 era irrelevante para el ecommerce; en 2025 es el método de pago preferido para muchas compras de importe medio porque no requiere introducir datos de tarjeta y la autorización es instantánea desde la app bancaria. Tiendas que han añadido Bizum reportan aumentos de conversión del 5-15% en el checkout.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Apple Pay y Google Pay (carteras digitales) han ganado relevancia, especialmente en compras desde móvil. Permiten completar una compra en 2-3 toques sin introducir datos manualmente, lo que reduce el abandono en el checkout móvil — que históricamente tiene tasas de conversión inferiores al desktop por la fricción de introducir datos en pantalla pequeña.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Stripe: la opción más completa para WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Stripe es la pasarela de pago más popular entre tiendas WooCommerce por sus comisiones transparentes, su integración nativa de alta calidad y la amplitud de métodos de pago soportados. La tarifa estándar en España es del 1,5% + 0,25€ para tarjetas europeas, y del 2,9% + 0,25€ para tarjetas no europeas. No hay cuotas mensuales ni costes de setup.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Stripe soporta de forma nativa: tarjetas Visa, Mastercard y American Express, Apple Pay, Google Pay, SEPA Direct Debit (domiciliación bancaria para suscripciones), Klarna (compra ahora, paga después) e iDEAL (relevante si vendes a Países Bajos). También es la única pasarela con soporte completo para Bizum a través de su integración con Stripe Payment Element.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El plugin oficial de Stripe para WooCommerce es robusto, gratuito y muy bien mantenido. La experiencia de checkout es personalizable y puede integrarse directamente en la página del carrito sin redirigir al usuario a otra página — lo que mejora las conversiones al reducir el número de pasos.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Redsys: la opción bancaria tradicional en España</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Redsys (antes Sermepa) es la pasarela de pago de los bancos españoles. Si tu negocio tiene una cuenta bancaria en BBVA, Santander, CaixaBank, Sabadell o similar, puedes contratar el Terminal de Punto de Venta Virtual (TPV Virtual) de Redsys a través de tu banco.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las comisiones de Redsys varían según el banco y el volumen de transacciones, pero suelen estar entre el 0,5% y el 1,5% por transacción, más una cuota mensual fija de 10-30€. Para volúmenes altos, puede ser más barato que Stripe. Para volúmenes bajos, la cuota mensual fija hace que el coste total sea superior.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La principal desventaja de Redsys para WooCommerce es que la integración estándar redirige al usuario a una página externa del banco para completar el pago, lo que añade fricción y puede aumentar el abandono de carrito. Existen plugins de pago para WooCommerce que mejoran esta experiencia, pero requieren una integración más compleja.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">PayPal: pros, contras y cuándo tiene sentido</h2>
        <p className="text-gray-700 leading-relaxed mb-4">PayPal sigue siendo relevante en España, especialmente para usuarios que no quieren compartir los datos de su tarjeta con una tienda que no conocen. Es especialmente popular para primeras compras en tiendas nuevas donde el cliente no confía todavía en la marca.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las comisiones de PayPal en España son del 3,4% + 0,35€ para pagos nacionales con tarjeta, y del 4,2% + 0,35€ para pagos internacionales. Son significativamente más altas que Stripe o Redsys. Para tiendas con tickets medios bajos (productos de menos de 20€), las comisiones de PayPal se comen una parte importante del margen.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La recomendación es incluir PayPal como opción adicional, no como única pasarela. Los clientes que prefieren PayPal probablemente no compren si no está disponible, pero si solo ofreces PayPal, perderás clientes que prefieren pagar con tarjeta directamente o con Bizum.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Bizum en ecommerce: cómo integrarlo en WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Bizum para ecommerce (Bizum Pay) es diferente del Bizum persona a persona que todos conocemos. Funciona a través de pasarelas intermediarias porque Bizum en sí no ofrece una API directa para comercios. Las pasarelas que soportan Bizum Pay en España incluyen Redsys (a través del banco), Sabadell Ecommerce, BBVA, PaycoMet, Módulo Payments y desde hace poco Stripe.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La experiencia de usuario de Bizum en ecommerce funciona así: el cliente selecciona Bizum como método de pago, introduce su número de teléfono, recibe una notificación push en su app bancaria y confirma el pago con su huella o PIN. El proceso completo dura 15-30 segundos y no requiere introducir datos de tarjeta. Esta simplicidad es su principal ventaja competitiva.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para WooCommerce, la forma más sencilla de integrar Bizum es a través del plugin de Stripe (que incluye Bizum en España) o del plugin de Redsys con módulo Bizum activado desde el banco. La primera opción es más moderna y tiene mejor UX; la segunda puede ser más económica en comisiones para volúmenes altos.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Buy Now Pay Later: Klarna, Aplazame y Cofidis</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las soluciones de "compra ahora, paga después" (BNPL) han ganado mucha tracción en España en los últimos años. Permiten al cliente fraccionar el pago en 3, 6 o más cuotas sin intereses (para el cliente; el comercio paga una comisión más alta). El impacto en la conversión es especialmente notable para productos de ticket medio-alto (200€ o más).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Klarna está disponible para WooCommerce en España a través del plugin oficial. Las comisiones son más altas que las pasarelas de pago estándar (2,99% + 0,35€), pero el aumento de conversión y del ticket medio puede compensar este sobrecoste. Aplazame (integrado con muchos bancos españoles) y Cofidis son alternativas con mayor penetración en ciertos sectores del retail español.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La decisión de incluir BNPL depende principalmente del ticket medio de tu tienda. Para productos de menos de 50€, no suele justificarse el coste adicional de integración y gestión. Para productos de 100€ o más, la opción de fraccionar puede ser el factor que cierre la venta para clientes que de otro modo abandonarían el carrito por el precio total.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
