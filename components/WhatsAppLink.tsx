"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/track";

export default function WhatsAppLink({
  href,
  ctaLocation,
  children,
  onClick,
  ...rest
}: {
  href: string;
  ctaLocation: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      onClick={(e) => {
        trackWhatsAppClick(ctaLocation);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
