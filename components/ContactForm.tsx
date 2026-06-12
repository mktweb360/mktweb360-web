"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) {
      form.reset();
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit_success",
          form_type: "contacto",
          form_location: window.location.pathname,
        });
      }
    }
  }

  const INPUT = "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input name="name" type="text" required className={INPUT} placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input name="email" type="email" required className={INPUT} placeholder="tu@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <input name="phone" type="tel" className={INPUT} placeholder="+34 600 000 000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Web (opcional)</label>
          <input name="website" type="url" className={INPUT} placeholder="https://tuweb.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
        <textarea name="message" required rows={5} className={INPUT} placeholder="Cuéntanos tu proyecto..." />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" name="gdpr" id="gdpr" required className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
        <label htmlFor="gdpr" className="text-sm text-gray-600">
          He leído y acepto la{" "}
          <a href="/politica-de-privacidad/" className="text-primary-600 hover:underline">
            política de privacidad
          </a>{" "}
          y consiento el tratamiento de mis datos. *
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>
      {status === "ok" && (
        <p className="text-emerald-600 font-medium">✓ Mensaje enviado. Te contactaremos pronto.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">Error al enviar. Por favor, llámanos al +34 696 714 476.</p>
      )}
    </form>
  );
}
