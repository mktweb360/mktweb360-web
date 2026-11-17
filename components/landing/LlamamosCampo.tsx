"use client";
import { useEffect, useId, useRef, useState } from "react";
import { trackLead } from "@/lib/track";
import { CONSENT_COMERCIAL } from "@/lib/consent-texts";

// Campo «Te llamamos» de la landing GEO: la persona deja su teléfono y la llamamos.
// Cerrado es una etiqueta; al pulsar se convierte en un campo de texto y el icono del avión de papel lo envía.
// Al abrirlo aparece la primera capa de privacidad (art. 13 RGPD) con su casilla obligatoria y la casilla comercial aparte, desmarcada.
// Envía a /api/contact con form_type "<formType>-llamada" (solo teléfono). La conversión de Google Ads es la misma del formulario de la landing.

const TEL_VALIDO = /^\+?[\d\s().-]{9,20}$/;

export function LlamamosCampo({ formType }: { formType: string }) {
  const uid = useId();
  const [tel, setTel] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const raiz = useRef<HTMLDivElement>(null);
  const inicio = useRef(0);
  const trampa = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inicio.current = Date.now();
  }, []);

  // Se cierra con Escape o al pulsar fuera, siempre que no haya nada escrito.
  useEffect(() => {
    if (!abierto) return;
    const fuera = (e: MouseEvent) => {
      if (raiz.current && !raiz.current.contains(e.target as Node) && !tel.trim()) setAbierto(false);
    };
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !tel.trim()) setAbierto(false);
    };
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", tecla);
    };
  }, [abierto, tel]);

  const valido = TEL_VALIDO.test(tel.trim()) && (tel.match(/\d/g) ?? []).length >= 9;

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!valido || !gdpr || estado === "enviando") return;
    setEstado("enviando");
    const params = new URLSearchParams(window.location.search);
    let guardadas: Record<string, string> = {};
    try {
      guardadas = JSON.parse(sessionStorage.getItem("mktweb360_utm") ?? "{}");
    } catch {}
    const utm = (k: string) => params.get(k) || guardadas[k] || "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: tel.trim(),
          gdpr: true,
          marketing: marketing ? "si" : "",
          form_type: `${formType}-llamada`,
          lang: "es",
          _hp: trampa.current?.value ?? "",
          _ts: inicio.current,
          page_origin: window.location.pathname,
          utm_source: utm("utm_source"),
          utm_medium: utm("utm_medium"),
          utm_campaign: utm("utm_campaign"),
          utm_content: utm("utm_content"),
          utm_term: utm("utm_term"),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEstado("ok");
      setAbierto(false);
      trackLead(formType, {
        page_origin: window.location.pathname,
        utm_source: utm("utm_source"),
        utm_medium: utm("utm_medium"),
        utm_campaign: utm("utm_campaign"),
      });
    } catch {
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-3 text-center text-sm font-semibold text-white" role="status">
        ✓ Recibido. Te llamaremos pronto.
      </div>
    );
  }

  return (
    <div ref={raiz} className="relative flex-1">
      <form onSubmit={enviar} className="flex h-full min-h-[44px] items-center rounded-xl border border-white/30 bg-white/10 pl-4 pr-1.5 focus-within:border-white/60 focus-within:bg-white/15">
        {/* Campo trampa anti-bots (lo vigila /api/contact) */}
        <input ref={trampa} name="_hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
        <input
          id={`${uid}-tel`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          onFocus={() => setAbierto(true)}
          placeholder={abierto ? "Tu teléfono" : "Te llamamos"}
          aria-label="Te llamamos: escribe tu teléfono"
          aria-describedby={abierto ? `${uid}-info` : undefined}
          className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white placeholder:text-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={!valido || !gdpr || estado === "enviando"}
          aria-label="Enviar mi teléfono para que me llamen"
          className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors enabled:bg-accent-500 enabled:hover:bg-accent-600 disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>

      {abierto && (
        <div id={`${uid}-info`} className="absolute right-0 top-full z-30 mt-2 w-[min(360px,86vw)] rounded-2xl bg-white p-4 text-left text-xs text-gray-600 shadow-xl">
          <p className="mb-3 leading-relaxed">
            <strong className="text-gray-800">Responsable:</strong> Mkt Web 360 SLU. <strong className="text-gray-800">Finalidad:</strong> llamarte para atender tu solicitud.{" "}
            <strong className="text-gray-800">Legitimación:</strong> tu consentimiento, que puedes retirar cuando quieras. <strong className="text-gray-800">Derechos:</strong> acceso,
            rectificación, supresión y otros, en info@mktweb360.com. Más información en la{" "}
            <a href="/politica-de-privacidad/" className="text-primary-600 underline" target="_blank" rel="noopener noreferrer">
              política de privacidad
            </a>
            .
          </p>
          <label className="mb-2 flex items-start gap-2">
            <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300" />
            <span>He leído y acepto la política de privacidad y consiento el tratamiento de mi teléfono para que me llamen. *</span>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300" />
            <span>{CONSENT_COMERCIAL.es}</span>
          </label>
          {estado === "error" && <p className="mt-2 font-semibold text-red-600">No se ha podido enviar. Escríbenos por WhatsApp o llama al 622 74 89 87.</p>}
        </div>
      )}
    </div>
  );
}
