import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada — Mkt Web 360",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header lang="es" />
      <section className="min-h-[80vh] bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-xl">
          <p className="text-[120px] md:text-[160px] font-bold text-white/10 leading-none mb-0 select-none">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 -mt-4">
            Esta página no existe
          </h1>
          <p className="text-primary-200 mb-10 leading-relaxed">
            Puede que la URL haya cambiado, que el enlace esté desactualizado o que hayamos movido el contenido. Lo que sí existe es todo lo que necesitas para crecer online.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {[
              { label: "Inicio", href: "/" },
              { label: "Posicionamiento SEO", href: "/seo-posicionamiento-web-organico/" },
              { label: "Tiendas Online", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors border border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Volver al inicio
            </Link>
            <a
              href="https://wa.me/34622748987?text=Hola%2C%20no%20encuentro%20lo%20que%20buscaba%20en%20vuestra%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer lang="es" />
    </>
  );
}
