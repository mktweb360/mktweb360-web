import Link from "next/link";

export function Footer({ lang }: { lang?: string }) {
  return (
    <footer className="bg-primary-600 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">
            <span className="text-accent-400">Mkt</span> Web 360
          </h3>
          <p className="text-primary-200 text-sm leading-relaxed">
            Agencia de marketing digital para PYMEs y empresas. Servicio nacional.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.849-8.166-10.651h6.052l4.261 5.633 5.617-6.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/mkt-web-360-s-l/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Servicios</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            <li><Link href="/seo-posicionamiento-web-organico/" className="hover:text-white">SEO Posicionamiento</Link></li>
            <li><Link href="/sem-publicidad-ppc/" className="hover:text-white">SEM / Google Ads</Link></li>
            <li><Link href="/google-business-profile/" className="hover:text-white">Google Business Profile</Link></li>
            <li><Link href="/diseno-de-paginas-web/" className="hover:text-white">Diseño Web</Link></li>
            <li><Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="hover:text-white">Tiendas Online</Link></li>
            <li><Link href="/creacion-de-blog/" className="hover:text-white">Creación de Blog</Link></li>
            <li><Link href="/oferta-seo/" className="hover:text-white transition-colors font-semibold text-accent-400">Oferta SEO 6x3</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Más servicios</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            <li><Link href="/smm-social-media-marketing/" className="hover:text-white">Redes Sociales</Link></li>
            <li><Link href="/whatsapp-marketing/" className="hover:text-white">WhatsApp Marketing</Link></li>
            <li><Link href="/email-marketing/" className="hover:text-white">Email Marketing</Link></li>
            <li><Link href="/marketing-de-contenidos/" className="hover:text-white">Marketing de Contenidos</Link></li>
            <li><Link href="/analitica-web/" className="hover:text-white">Analítica Web</Link></li>
            <li><Link href="/reputacion-online/" className="hover:text-white">Reputación Online</Link></li>
            <li><Link href="/ia-aplicada-al-marketing/" className="hover:text-white">IA en Marketing</Link></li>
            <li><Link href="/geo-posicionamiento-ia/" className="hover:text-white">GEO — Posicionamiento IA</Link></li>
            <li><Link href="/blog-monetizacion/" className="hover:text-white transition-colors">Blog para Monetización</Link></li>
            <li><Link href="/ecommerce-participacion-resultados/" className="hover:text-white transition-colors">Ecommerce con Participación</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Empresa</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            <li><Link href="/blog/" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contacto/" className="hover:text-white">Contacto</Link></li>
            <li><Link href="/aviso-legal/" className="hover:text-white">Aviso Legal</Link></li>
            <li><Link href="/politica-de-privacidad/" className="hover:text-white">Política de Privacidad</Link></li>
            <li><Link href="/politica-de-cookies/" className="hover:text-white">Política de Cookies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Contacto</h4>
          <address className="text-sm text-primary-300 not-italic space-y-2">
            <p><a href="tel:+34622748897" className="hover:text-white">+34 622 748 897</a></p>
            <p><a href="mailto:info@mktweb360.com" className="hover:text-white">info@mktweb360.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-700 py-4 text-center text-xs text-primary-400">
        © {new Date().getFullYear()} Mkt Web 360 SLU · Todos los derechos reservados
      </div>
    </footer>
  );
}
