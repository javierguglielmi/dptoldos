export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "dptoldos-cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // localStorage unavailable (private mode, disabled) — consent still
    // applies for this page load via pushConsentUpdate, just won't persist.
  }
}

export function pushConsentUpdate(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const granted = choice === "accepted";
  const state = {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  };
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", state);
  } else {
    window.dataLayer.push(["consent", "update", state]);
  }
}
