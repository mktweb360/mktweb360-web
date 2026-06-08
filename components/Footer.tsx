import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-600 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">
            <span className="text-accent-400">Mkt</span> Web 360
          </h3>
          <p className="text-primary-200 text-sm leading-relaxed">
            Agencia de marketing digital para PYMEs y empresas. Servicio nacional desde Toledo, España.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white text-sm" aria-label="Facebook">FB</a>
            <a href="https://twitter.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white text-sm" aria-label="Twitter">TW</a>
            <a href="https://www.instagram.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white text-sm" aria-label="Instagram">IG</a>
            <a href="https://www.linkedin.com/company/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white text-sm" aria-label="LinkedIn">LI</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Servicios</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            <li><Link href="/seo-posicionamiento-web-organico/" className="hover:text-white">SEO Posicionamiento</Link></li>
            <li><Link href="/sem-publicidad-ppc/" className="hover:text-white">SEM / Google Ads</Link></li>
            <li><Link href="/smm-social-media-marketing/" className="hover:text-white">Redes Sociales</Link></li>
            <li><Link href="/diseno-de-paginas-web/" className="hover:text-white">Diseño Web</Link></li>
            <li><Link href="/marketing-de-contenidos/" className="hover:text-white">Marketing de Contenidos</Link></li>
            <li><Link href="/kit-digital/" className="hover:text-white">Kit Digital</Link></li>
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
            <p>El Viso de San Juan, Toledo, España</p>
            <p><a href="tel:+34696714476" className="hover:text-white">+34 696 714 476</a></p>
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
