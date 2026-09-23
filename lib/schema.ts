import { FICHAS, ORDEN, type Ficha, type FaqItem } from "./fichas";
import { MUNICIPIOS, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "./site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og.jpg`,
    telephone: WHATSAPP_NUMBER,
    areaServed: MUNICIPIOS.map((m) => ({
      "@type": "City",
      name: m,
    })),
    makesOffer: [
      ...ORDEN.map((slug) => {
        const f = FICHAS[slug];
        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: f.h1,
            url: `${SITE_URL}/toldos/${slug}`,
          },
        };
      }),
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento de toldos en el Baix Llobregat",
          url: `${SITE_URL}/toldos/mantenimiento`,
        },
      },
    ],
  };
}

export function fichaServiceSchema(ficha: Ficha) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Instalación de toldo ${ficha.nombre.toLowerCase()}`,
    name: ficha.h1,
    description: ficha.apertura,
    url: `${SITE_URL}/toldos/${ficha.slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: WHATSAPP_NUMBER,
    },
    areaServed: MUNICIPIOS.map((m) => ({
      "@type": "City",
      name: m,
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function mantenimientoServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mantenimiento de toldos",
    name: "Mantenimiento de toldos en el Baix Llobregat",
    description:
      "Mantenimiento integral de toldos en el Baix Llobregat, instalados por DP Toldos o por cualquier otro instalador. Se presupuesta por visita según el tipo de toldo y su estado.",
    url: `${SITE_URL}/toldos/mantenimiento`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: WHATSAPP_NUMBER,
    },
    areaServed: MUNICIPIOS.map((m) => ({
      "@type": "City",
      name: m,
    })),
  };
}
