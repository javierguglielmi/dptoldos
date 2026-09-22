import type { MetadataRoute } from "next";
import { ORDEN } from "@/lib/fichas";
import { LEGAL_SLUGS } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: string[] = [
    "/",
    ...ORDEN.map((s) => `/toldos/${s}`),
    "/toldos/mantenimiento",
    ...LEGAL_SLUGS.map((s) => `/legal/${s}`),
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
