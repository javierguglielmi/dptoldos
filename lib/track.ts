import { sendGAEvent } from "@next/third-parties/google";
import { readStoredConsent } from "./consent";

export function trackWhatsAppClick(ctaLocation: string) {
  if (typeof window === "undefined") return;
  if (readStoredConsent() !== "accepted") return;
  sendGAEvent("event", "whatsapp_click", {
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  });
}
