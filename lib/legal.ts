export type LegalSlug = "aviso-legal" | "privacidad" | "cookies";

export const LEGAL_SLUGS: LegalSlug[] = ["aviso-legal", "privacidad", "cookies"];

export const LEGAL_TITULOS: Record<LegalSlug, string> = {
  "aviso-legal": "Aviso legal",
  privacidad: "Política de privacidad",
  cookies: "Política de cookies",
};

export const LEGAL_META: Record<LegalSlug, { title: string; description: string }> = {
  "aviso-legal": {
    title: "Aviso legal · DP Toldos",
    description:
      "Aviso legal de DP Toldos: titular del sitio, condiciones de uso, presupuestos y propiedad intelectual.",
  },
  privacidad: {
    title: "Política de privacidad · DP Toldos",
    description:
      "Cómo trata DP Toldos los datos personales de sus clientes: qué datos, para qué, cuánto tiempo y cómo ejercer tus derechos.",
  },
  cookies: {
    title: "Política de cookies · DP Toldos",
    description:
      "Qué cookies usa DP Toldos (Google Analytics) solo con tu consentimiento, y cómo retirarlo cuando quieras.",
  },
};
