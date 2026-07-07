#!/usr/bin/env python3
"""Generate 26 additional OG images (blog/service pages) reusing the visual
spec from gen_og_images.py (1200x630 JPEG, navy gradient, orange accent bar,
dot texture, bottom brand bar). Same make() function -> identical styling."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gen_og_images import make  # noqa: E402  (reuse identical rendering)

IMAGES = [
    # --- ECOMMERCE ---
    ("og-conectar-tpv-tienda-online.jpg", "TPV + Ecommerce",
     "Tu tienda física y online, sincronizadas en tiempo real.",
     "Conecta tu TPV con WooCommerce y gestiona stock, pedidos y ventas desde un solo sistema."),
    ("og-configurar-envios-woocommerce.jpg", "Envíos WooCommerce",
     "Configura tus envíos y vende sin fricciones.",
     "Guía completa para configurar métodos de envío, transportistas y tarifas en tu tienda WooCommerce."),
    ("og-diseno-web-tienda-online.jpg", "Diseño Tienda Online",
     "Tu tienda online diseñada para vender, no para existir.",
     "Diseño web para tiendas online con foco en conversión, SEO y experiencia de compra."),
    ("og-google-shopping-tiendas-online.jpg", "Google Shopping",
     "Tus productos en Google Shopping desde hoy.",
     "Cómo aparecer en Google Shopping, configurar el feed y conseguir ventas con publicidad de producto."),
    ("og-importar-productos-woocommerce.jpg", "WooCommerce",
     "Importa tu catálogo sin errores ni horas perdidas.",
     "Guía paso a paso para importar productos masivamente en WooCommerce desde CSV o Excel."),
    ("og-metodos-pago-tienda-online-espana.jpg", "Métodos de Pago",
     "Los métodos de pago que más convierten en España.",
     "Stripe, Bizum, PayPal, aplazamiento. Qué pasarelas de pago funcionan mejor para tiendas online españolas."),
    ("og-migrar-shopify-woocommerce.jpg", "Migración Shopify",
     "Sal de Shopify sin perder datos ni posicionamiento.",
     "Proceso completo para migrar de Shopify a WooCommerce conservando productos, clientes y SEO."),
    ("og-migrar-tienda-online-sin-perder-datos.jpg", "Migración Ecommerce",
     "Cambia de plataforma. Conserva todo lo que importa.",
     "Cómo migrar tu tienda online sin perder datos, clientes, historial de pedidos ni tráfico orgánico."),
    # --- DISEÑO WEB VERTICAL ---
    ("og-diseno-web-para-clinicas.jpg", "Web para Clínicas",
     "La web que tu clínica necesita para captar pacientes.",
     "Diseño web profesional para clínicas y centros de salud. SEO local, citas online y confianza desde el primer clic."),
    ("og-diseno-web-para-coaches.jpg", "Web para Coaches",
     "Tu web como herramienta de captación de clientes.",
     "Diseño web para coaches y consultores. Propuesta de valor clara, formularios de contacto y posicionamiento."),
    ("og-diseno-web-para-dentistas.jpg", "Web para Dentistas",
     "Más pacientes desde Google para tu clínica dental.",
     "Webs para dentistas diseñadas para aparecer en búsquedas locales y convertir visitas en citas."),
    # --- SEO / GEO ---
    ("og-auditoria-seo-basica.jpg", "Auditoría SEO",
     "Descubre qué frena tu posicionamiento en Google.",
     "Cómo hacer una auditoría SEO básica: técnica, contenido, keywords y backlinks. Paso a paso."),
    ("og-como-usar-planificador-palabras-clave.jpg", "Google Ads",
     "Encuentra las keywords que tu cliente busca.",
     "Guía completa del Planificador de Palabras Clave de Google Ads para SEO y SEM en 2026."),
    ("og-cuando-elegir-seo-vs-google-ads.jpg", "SEO vs Google Ads",
     "¿SEO o Google Ads? La respuesta depende de tu negocio.",
     "Cuándo invertir en posicionamiento orgánico y cuándo en publicidad de pago. Criterios reales."),
    ("og-link-building-pymes.jpg", "Link Building",
     "Consigue enlaces que Google respeta de verdad.",
     "Estrategias de link building para pymes y autónomos. Sin compra de enlaces, sin riesgos de penalización."),
    ("og-geo-vs-seo-diferencias.jpg", "GEO vs SEO",
     "El SEO que conoces ya no es suficiente.",
     "Diferencias entre SEO tradicional y GEO. Por qué optimizar para ChatGPT, Gemini y Perplexity importa en 2026."),
    ("og-que-es-geo-generative-engine-optimization.jpg", "¿Qué es GEO?",
     "Aparece en las respuestas de la IA, no solo en Google.",
     "Qué es el GEO (Generative Engine Optimization) y por qué es la evolución del SEO en la era de la IA."),
    # --- MARKETING / SOCIAL ---
    ("og-chatgpt-para-marketing-digital.jpg", "ChatGPT Marketing",
     "IA en tu marketing. Sin perder tu voz de marca.",
     "Cómo usar ChatGPT en marketing digital: qué tareas delegar, cómo mantener la calidad y qué nunca automatizar."),
    ("og-email-marketing-pymes.jpg", "Email Marketing",
     "El canal con mayor ROI del marketing digital.",
     "Estrategia de email marketing para pymes. Cómo construir tu lista, qué enviar y cómo medir resultados."),
    ("og-gestion-resenas-negativas-google.jpg", "Reseñas Google",
     "Una reseña negativa bien gestionada genera confianza.",
     "Cómo responder reseñas negativas en Google, cuándo pedir su eliminación y cómo generar más reseñas positivas."),
    ("og-whatsapp-business-para-empresas.jpg", "WhatsApp Business",
     "El canal de atención que tus clientes ya usan.",
     "Cómo configurar WhatsApp Business, captar clientes y automatizar respuestas para tu empresa."),
    # --- OTROS ---
    ("og-como-crear-landing-page-que-convierte.jpg", "Landing Pages",
     "Una landing page que convierte visitantes en clientes.",
     "Elementos, estructura y copywriting de una landing page de alta conversión. Con ejemplos reales."),
    ("og-como-medir-roi-marketing-digital.jpg", "ROI Marketing",
     "Mide lo que importa. Invierte en lo que funciona.",
     "Cómo calcular el ROI de tus campañas de marketing digital y qué métricas usar para cada canal."),
    ("og-digitalizacion-empresas-castilla-la-mancha.jpg", "Digitalización CLM",
     "Digitaliza tu empresa en Castilla-La Mancha.",
     "Ayudas, herramientas y pasos para digitalizar tu negocio en Castilla-La Mancha en 2026."),
    ("og-marketing-shopware.jpg", "Marketing Shopware",
     "Shopware crece cuando tiene la estrategia correcta.",
     "SEO, Google Ads, GEO y contenidos específicos para tiendas Shopware. Más tráfico, más ventas."),
    # --- HOMEPAGE ---
    ("og-homepage.jpg", "Agencia de Marketing Digital",
     "Tu mejor cliente aún no te conoce. Vamos a presentaros.",
     "SEO, Google Ads, diseño web, redes sociales y GEO para pymes y autónomos en España."),
]

if __name__ == "__main__":
    for fname, badge, tagline, desc in IMAGES:
        p = make(fname, badge, tagline, desc)
        print("wrote", p)
    print("TOTAL", len(IMAGES))
