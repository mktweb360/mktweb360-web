"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in ${className ?? ""}`}
        aria-label={`Ampliar imagen: ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70"
          >
            ×
          </button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
            priority
          />
        </div>
      )}
    </>
  );
}
