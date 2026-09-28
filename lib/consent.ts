export type ConsentChoice = "accepted" | "rejected";

type StoredConsent = {
  choice: ConsentChoice;
  timestamp: number;
};

const STORAGE_KEY = "dptoldos-cookie-consent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const ANALYTICS_COOKIE_PREFIXES = ["_ga", "_gcl"];
const APEX_DOMAIN = ".dptoldos.es";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed.choice !== "accepted" && parsed.choice !== "rejected") return null;
    if (typeof parsed.timestamp !== "number") return null;
    if (Date.now() - parsed.timestamp > MAX_AGE_MS) return null;
    return parsed.choice;
  } catch {
    return null;
  }
}

export function writeStoredConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  try {
    const stored: StoredConsent = { choice, timestamp: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
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

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const names = document.cookie
    .split(";")
    .map((pair) => pair.split("=")[0].trim())
    .filter((name) => name.length > 0 && ANALYTICS_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix)));

  const domains = [window.location.hostname, APEX_DOMAIN];
  for (const name of names) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
  }
}
