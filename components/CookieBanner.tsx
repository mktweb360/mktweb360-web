"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Consent = { analytics: boolean; date: string };

function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, unknown>;
  w.dataLayer = (w.dataLayer as unknown[]) || [];
  (w.dataLayer as unknown[]).push(data);
}

function setConsentDefault() {
  pushToDataLayer({
    event: "consent_default",
    "consent": {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
      region: ["ES"],
    },
  });
}

function updateConsent(analytics: boolean) {
  const granted = analytics ? "granted" : "denied";
  pushToDataLayer({
    event: "consent_update",
    "consent": {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: granted,
      functionality_storage: granted,
      personalization_storage: "denied",
      security_storage: "granted",
    },
  });
}

function loadGTM() {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, unknown>;
  w.dataLayer = (w.dataLayer as unknown[]) || [];
  if (document.querySelector('script[src*="GTM-KVB3R3H"]')) return;
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KVB3R3H";
  script.async = true;
  document.head.appendChild(script);
}

function saveConsent(analytics: boolean) {
  const consent: Consent = { analytics, date: new Date().toISOString() };
  localStorage.setItem("mktweb360_consent", JSON.stringify(consent));
  updateConsent(analytics);
  if (analytics) loadGTM();
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setConsentDefault();
    const stored = localStorage.getItem("mktweb360_consent");
    if (!stored) {
      setVisible(true);
    } else {
      const consent: Consent = JSON.parse(stored);
      updateConsent(consent.analytics);
      if (consent.analytics) loadGTM();
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    saveConsent(true);
    setVisible(false);
  };

  const reject = () => {
    saveConsent(false);
    setVisible(false);
  };

  const savePreferences = () => {
    saveConsent(analyticsEnabled);
    setModalOpen(false);
    setVisible(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
          <p className="text-sm text-gray-700 flex-1">
            Utilizamos cookies propias y de terceros para analizar el uso del sitio web y ofrecerte una mejor experiencia. Puedes aceptar todas las cookies, rechazarlas o personalizar tu elección.{" "}
            <Link href="/politica-de-cookies/" className="text-accent-500 underline hover:text-accent-600 whitespace-nowrap">
              Más información
            </Link>
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={reject}
              className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Personalizar
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm bg-accent-500 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <h2 className="text-lg font-bold text-primary-900 mb-1">Personalizar cookies</h2>
            <p className="text-xs text-gray-500 mb-6">
              Configura qué cookies deseas aceptar. Las cookies necesarias no pueden desactivarse.
            </p>

            <div className="border border-gray-200 rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-sm text-primary-900">Cookies necesarias</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">Siempre activas</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Necesarias para el funcionamiento básico del sitio. Incluyen la cookie <code className="bg-gray-100 px-1 rounded">mktweb360_consent</code> que guarda tus preferencias.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-sm text-primary-900">Cookies analíticas</span>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    analyticsEnabled ? "bg-accent-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                      analyticsEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Google Analytics 4 y Google Tag Manager. Nos permiten entender cómo interactúan los visitantes con el sitio de forma anónima y mejorar nuestros contenidos.
              </p>
            </div>

            <button
              onClick={savePreferences}
              className="w-full bg-accent-500 text-white py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      )}
    </>
  );
}
