"use client";
import { useEffect } from "react";

/**
 * Sets document.documentElement.lang to the correct language code
 * for EN/FR pages. The root layout hardcodes lang="es" (required by Next.js
 * App Router — only root layout can render <html>), so this component
 * corrects it client-side for the [lang] route group.
 */
export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
