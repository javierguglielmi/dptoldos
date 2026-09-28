"use client";

import type { CSSProperties } from "react";
import { useConsent } from "./ConsentManager";

export default function CookieSettingsLink({ style }: { style?: CSSProperties }) {
  const { openSettings } = useConsent();
  return (
    <button
      type="button"
      onClick={openSettings}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",
        font: "inherit",
        ...style,
      }}
    >
      Configurar cookies
    </button>
  );
}
