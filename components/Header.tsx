"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SERVICES = [
  { label: "SEO Posicionamiento", href: "/seo-posicionamiento-web-organico/" },
  { label: "SEM / Google Ads", href: "/sem-publicidad-ppc/" },
  { label: "Redes Sociales", href: "/smm-social-media-marketing/" },
  { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
  { label: "Marketing de Contenidos", href: "/marketing-de-contenidos/" },
  { label: "Auditoría Digital", href: "/auditoria-digital/" },
  { label: "Audiovisual", href: "/comunicacion-audiovisual/" },
  { label: "Kit Digital", href: "/kit-digital/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/">
          <Image src="/logo.png" alt="Mkt Web 360 — Agencia de Marketing Digital" width={180} height={50} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-accent-500 transition-colors">Inicio</Link>
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-accent-500 transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Servicios <span className="text-xs">▾</span>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/nosotros/" className="hover:text-accent-500 transition-colors">Nosotros</Link>
          <Link href="/casos/" className="hover:text-accent-500 transition-colors">Casos</Link>
          <Link href="/blog/" className="hover:text-accent-500 transition-colors">Blog</Link>
          <Link
            href="/contacto/"
            className="bg-accent-500 text-white px-4 py-2 rounded-full hover:bg-accent-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-primary-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-accent-500">Inicio</Link>
            <div>
              <button
                className="flex items-center gap-1 hover:text-accent-500 w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Servicios <span className="text-xs">▾</span>
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-accent-500">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/nosotros/" onClick={() => setMenuOpen(false)} className="hover:text-accent-500">Nosotros</Link>
            <Link href="/casos/" onClick={() => setMenuOpen(false)} className="hover:text-accent-500">Casos</Link>
            <Link href="/blog/" onClick={() => setMenuOpen(false)} className="hover:text-accent-500">Blog</Link>
            <Link
              href="/contacto/"
              onClick={() => setMenuOpen(false)}
              className="bg-accent-500 text-white px-4 py-2 rounded-full text-center hover:bg-accent-600"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
