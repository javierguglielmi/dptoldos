export const FONT_SERIF = "var(--font-newsreader), Georgia, serif";
export const FONT_SANS = "var(--font-archivo), system-ui, sans-serif";

export const SITE_URL = "https://dptoldos.vercel.app";
export const SITE_NAME = "DP Toldos";
export const WHATSAPP_NUMBER = "+34 605 04 69 35";
export const CTA_LABEL = "Pedir presupuesto por WhatsApp";

export function waLink(message: string): string {
  const clean = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export const MUNICIPIOS = [
  "Sant Just Desvern",
  "Esplugues de Llobregat",
  "Sant Joan Despí",
  "Castelldefels",
  "Gavà",
  "Begues",
  "Sant Feliu de Llobregat",
  "Molins de Rei",
  "Viladecans",
  "Cornellà de Llobregat",
  "Sant Boi de Llobregat",
  "El Prat de Llobregat",
];

export const ZONA_RESUMEN =
  "Baix Llobregat: Sant Just Desvern, Esplugues, Sant Joan Despí, Castelldefels, Gavà, Begues, Sant Feliu, Molins de Rei, Viladecans y alrededores.";
