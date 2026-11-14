"use client";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { trackCta } from "@/lib/track";

export interface DemoVentanaTextos {
  cerrar: string;
  nuevaPestana: string;
  pedir: string;
  aviso: string;
}

/**
 * Botón «Ver demo» que abre la demo en una ventana dentro de la propia página.
 * Sin JavaScript (o con Ctrl/Cmd/clic central) sigue siendo un enlace normal a una pestaña nueva.
 * Si la demo no se deja incrustar, el botón «Abrir en pestaña nueva» es la salida.
 */
export function DemoVentana({
  url,
  nombre,
  ctaId,
  etiqueta,
  textos,
  className,
  children,
}: {
  url: string;
  nombre: string;
  ctaId: string;
  etiqueta: string;
  textos: DemoVentanaTextos;
  className?: string;
  children: ReactNode;
}) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  const abrir = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const d = dlg.current;
    if (!d || typeof d.showModal !== "function") return; // el enlace normal hace su trabajo
    e.preventDefault();
    trackCta({ id: ctaId, location: "demos", type: "link", text: etiqueta, destination: url });
    setSrc(url);
    d.showModal();
    document.body.style.overflow = "hidden";
  };

  const cerrar = () => {
    dlg.current?.close();
  };
  const alCerrar = () => {
    document.body.style.overflow = "";
    setSrc(null); // descarga la demo
  };

  const pedir = () => {
    trackCta({ id: `${ctaId}-pedir`, location: "demos-ventana", type: "contact", text: textos.pedir, destination: "#diagnostico" });
    cerrar();
    setTimeout(() => document.getElementById("diagnostico")?.scrollIntoView({ behavior: "auto" }), 60);
  };

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer" className={className} onClick={abrir}>
        {children}
      </a>
      <dialog
        ref={dlg}
        onClose={alCerrar}
        onClick={(e) => { if (e.target === dlg.current) cerrar(); }}
        aria-label={nombre}
        className="m-0 h-[100dvh] w-screen max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/70 md:m-auto md:h-[90vh] md:w-[min(1200px,94vw)] md:rounded-2xl"
      >
        <div className="flex h-full w-full flex-col overflow-hidden bg-white md:rounded-2xl">
          <div className="flex flex-wrap items-center gap-2 bg-primary-700 px-3 py-2 text-white">
            <span className="mr-auto truncate text-sm font-semibold">{nombre}</span>
            <button type="button" onClick={pedir} className="rounded-full bg-accent-500 px-4 py-1.5 text-sm font-bold text-white hover:bg-accent-600">
              {textos.pedir}
            </button>
            <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-3 py-1.5 text-sm hover:bg-white/10">
              {textos.nuevaPestana} ↗
            </a>
            <button type="button" onClick={cerrar} aria-label={textos.cerrar} className="rounded-full border border-white/40 px-3 py-1.5 text-sm font-semibold hover:bg-white/10">
              {textos.cerrar} ✕
            </button>
          </div>
          <p className="bg-primary-50 px-3 py-1 text-xs text-gray-600">{textos.aviso}</p>
          {src && <iframe src={src} title={nombre} className="min-h-0 w-full grow border-0" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" />}
        </div>
      </dialog>
    </>
  );
}
