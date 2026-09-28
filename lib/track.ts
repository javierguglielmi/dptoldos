import { readStoredConsent } from "./consent";

export function trackWhatsAppClick(ctaLocation: string) {
  if (typeof window === "undefined") return;
  if (readStoredConsent() !== "accepted") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  });
}
