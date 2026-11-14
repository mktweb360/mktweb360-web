"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { trackCta } from "@/lib/track";

/** Enlace con evento `cta_click` (GTM → GA4). Para teléfono usa type="phone" y un href tel:. */
export function TrackedLink({
  href,
  ctaId,
  location,
  type,
  text,
  className,
  newTab,
  children,
}: {
  href: string;
  ctaId: string;
  location: string;
  type: "audit" | "contact" | "phone" | "link";
  text: string;
  className?: string;
  /** Abre en pestaña nueva con rel seguro (enlaces externos, demos). */
  newTab?: boolean;
  children: ReactNode;
}) {
  const onClick = () => trackCta({ id: ctaId, location, type, text, destination: href });
  if (href.startsWith("tel:") || href.startsWith("http") || href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
