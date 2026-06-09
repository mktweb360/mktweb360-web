"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "ok" | "error";

export function OfertaForm() {
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          website: fd.get("website") || undefined,
          message: `[Oferta Web+SEO 999€]\n${fd.get("message") || "Sin mensaje adicional"}`,
          gdpr: true,
        }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">¡Solicitud recibida!</h3>
        <p className="text-blue-200">Te contactaremos en menos de 24 horas para confirmar tu plaza.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Nombre <span className="text-[#f97316]">*</span>
          </label>
          <input
            name="name"
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Email <span className="text-[#f97316]">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Teléfono <span className="text-[#f97316]">*</span>
          </label>
          <input
            name="phone"
            required
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-1">
            Web actual <span className="text-blue-300 text-xs">(opcional)</span>
          </label>
          <input
            name="website"
            placeholder="tuempresa.com"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200 mb-1">
          Mensaje <span className="text-blue-300 text-xs">(opcional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Cuéntanos algo sobre tu negocio o lo que necesitas..."
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] resize-none"
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 accent-[#f97316] shrink-0"
        />
        <span className="text-xs text-blue-200 leading-relaxed">
          He leído y acepto la{" "}
          <Link href="/politica-de-privacidad/" target="_blank" className="underline hover:text-white">
            Política de Privacidad
          </Link>
          . Consiento el tratamiento de mis datos para atender mi solicitud de información sobre la oferta.
        </span>
      </label>
      <button
        type="submit"
        disabled={!gdpr || status === "loading"}
        className="w-full bg-[#f97316] hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-lg"
      >
        {status === "loading" ? "Enviando…" : "Solicitar mi plaza ahora"}
      </button>
      {status === "error" && (
        <p className="text-red-300 text-sm text-center">
          Ha ocurrido un error. Por favor inténtalo de nuevo o llámanos al{" "}
          <a href="tel:+34696714476" className="underline">696 71 44 76</a>.
        </p>
      )}
    </form>
  );
}
