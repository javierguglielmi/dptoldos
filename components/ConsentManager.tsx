"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  pushConsentUpdate,
  readStoredConsent,
  writeStoredConsent,
  type ConsentChoice,
} from "@/lib/consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type ConsentContextValue = {
  openSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentManager");
  return ctx;
}

export default function ConsentManager({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentChoice | "unknown">("unknown");
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      pushConsentUpdate(stored);
      setStatus(stored);
    } else {
      setBannerOpen(true);
    }
  }, []);

  function choose(choice: ConsentChoice) {
    writeStoredConsent(choice);
    pushConsentUpdate(choice);
    setStatus(choice);
    setBannerOpen(false);
  }

  return (
    <ConsentContext.Provider value={{ openSettings: () => setBannerOpen(true) }}>
      {children}
      {bannerOpen && (
        <CookieBanner onAccept={() => choose("accepted")} onReject={() => choose("rejected")} />
      )}
      {status === "accepted" && GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    </ConsentContext.Provider>
  );
}

function CookieBanner({ onAccept, onReject }: { onAccept: () => void; onReject: () => void }) {
  const buttonBase: React.CSSProperties = {
    padding: "13px 26px",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 2,
    cursor: "pointer",
    lineHeight: 1,
  };

  return (
    <div
      role="dialog"
      aria-label="Consentimiento de cookies"
      aria-modal="false"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "#22292B",
        color: "#FFFFFF",
        borderTop: "1px solid #FFFFFF26",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px clamp(16px,4.5vw,24px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, opacity: 0.9, maxWidth: "62ch", flex: "1 1 320px" }}>
          Usamos cookies de análisis y publicidad (Google Analytics, Google Ads y Meta) solo si nos das tu
          consentimiento. Podés cambiarlo cuando quieras desde &quot;Configurar cookies&quot; en el pie de
          página. Más información en nuestra{" "}
          <a href="/legal/cookies" style={{ color: "#D9A75C", textDecoration: "underline" }}>
            política de cookies
          </a>
          .
        </p>
        <div style={{ display: "flex", gap: 12, flex: "none" }}>
          <button
            type="button"
            onClick={onReject}
            style={{
              ...buttonBase,
              background: "transparent",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
            }}
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={onAccept}
            style={{
              ...buttonBase,
              background: "#D9A75C",
              color: "#22292B",
              border: "1px solid #D9A75C",
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
