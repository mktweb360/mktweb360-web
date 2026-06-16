"use client";
import { useState } from "react";
import Link from "next/link";

export function HostingBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Banner trigger */}
      <div className="bg-primary-50 border border-primary-100 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl shrink-0">🌐</span>
          <div>
            <p className="font-semibold text-primary-600 text-sm">¿Necesitas hosting y dominio?</p>
            <p className="text-gray-500 text-xs mt-0.5">Hosting profesional + dominio .com + correos corporativos desde <strong>49€ el primer año</strong>.</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="shrink-0 bg-white border border-primary-300 text-primary-600 px-4 py-2 rounded-full text-xs font-bold hover:bg-primary-600 hover:text-white transition-colors"
        >
          Más información
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>

            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Solución completa</span>
              <h2 className="text-2xl font-bold text-primary-600 mb-2">Hosting profesional + dominio</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Todo lo que necesita tu web para funcionar desde el primer día, sin complicaciones técnicas.</p>
            </div>

            {/* Server specs */}
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Recursos del servidor</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "💾", label: "Almacenamiento", value: "SSD de alta velocidad" },
                  { icon: "🔒", label: "SSL gratuito", value: "Certificado incluido" },
                  { icon: "⚡", label: "Rendimiento", value: "Optimizado para WordPress" },
                  { icon: "🔄", label: "Backups", value: "Diarios automáticos" },
                  { icon: "📊", label: "Uptime", value: "99,9% garantizado" },
                  { icon: "🛡️", label: "Seguridad", value: "Firewall y anti-malware" },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-start gap-2">
                    <span className="text-base shrink-0">{spec.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-600">{spec.label}</p>
                      <p className="text-xs text-gray-400">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-primary-50 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3">Correos corporativos incluidos</p>
              <div className="space-y-2">
                {[
                  "Cuentas de correo con tu dominio (info@tuempresa.com)",
                  "Compatible con Gmail, Outlook y apps de móvil",
                  "Soporte incluido para la configuración inicial",
                  "Sin límite de cuentas de correo",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-primary-700">
                    <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-3xl font-bold text-accent-500">49€<span className="text-base font-normal text-gray-400"> / primer año</span></p>
                <p className="text-xs text-gray-400 mt-0.5">Dominio .com + hosting profesional incluidos</p>
              </div>
              <Link
                href="/contacto/?tipo=hosting-dominio"
                onClick={() => setOpen(false)}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent-600 transition-colors text-center"
              >
                Añadir a mi proyecto →
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
