"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SERVICES = [
  {
    label: "SEO Posicionamiento",
    href: "/seo-posicionamiento-web-organico/",
    desc: "Primeras posiciones en Google",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
    ),
  },
  {
    label: "SEM / Google Ads",
    href: "/sem-publicidad-ppc/",
    desc: "Resultados desde el primer día",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>
    ),
  },
  {
    label: "Google Business Profile",
    href: "/google-business-profile/",
    desc: "Visibilidad local en Google Maps",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
    ),
  },
  {
    label: "Diseño Web",
    href: "/diseno-de-paginas-web/",
    desc: "Webs que convierten visitas en clientes",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"/></svg>
    ),
  },
  {
    label: "Tiendas Online",
    href: "/diseno-de-paginas-web/diseno-tiendas-online/",
    desc: "Ecommerce sin comisiones ni licencias",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>
    ),
  },
  {
    label: "Creación de Blog",
    href: "/creacion-de-blog/",
    desc: "Blogs corporativos y profesionales",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/></svg>
    ),
  },
  {
    label: "Redes Sociales",
    href: "/smm-social-media-marketing/",
    desc: "Gestión profesional de tus redes",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    ),
  },
  {
    label: "Marketing de Contenidos",
    href: "/marketing-de-contenidos/",
    desc: "Contenido que posiciona y atrae",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    ),
  },
  {
    label: "WhatsApp Marketing",
    href: "/whatsapp-marketing/",
    desc: "Capta y fideliza por WhatsApp",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V20.25a.75.75 0 0 0 1.28.53l3.58-3.58A48.29 48.29 0 0 0 11.25 17c.527 0 1.049-.022 1.566-.064"/></svg>
    ),
  },
  {
    label: "Email Marketing",
    href: "/email-marketing/",
    desc: "ROI demostrado en cada envío",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
    ),
  },
  {
    label: "Analítica Web",
    href: "/analitica-web/",
    desc: "Datos que generan decisiones",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.5l4.5-4.5 4 4L15 9l6 6"/></svg>
    ),
  },
  {
    label: "Reputación Online",
    href: "/reputacion-online/",
    desc: "Gestión de reseñas e imagen digital",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg>
    ),
  },
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
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-accent-500 transition-colors">
              Servicios <span className="text-xs">▾</span>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white border border-gray-200 rounded-2xl shadow-xl py-6 px-6 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="grid grid-cols-3 gap-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <div className="mt-0.5">{s.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-primary-700 group-hover:text-accent-500 transition-colors">{s.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
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
                    <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-600 hover:text-accent-500">
                      {s.icon}{s.label}
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
