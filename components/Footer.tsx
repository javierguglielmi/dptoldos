import WhatsAppIcon from "./WhatsAppIcon";
import { ZONA_RESUMEN } from "@/lib/site";

export type FooterTipo = { nombre: string; href: string };

export default function Footer({
  waLink,
  waDisplay,
  tipos,
  mantenimientoHref,
  hAviso,
  hPriv,
  hCookies,
  variant = "default",
  logoAlt = "DP Toldos",
}: {
  waLink: string;
  waDisplay: string;
  tipos: FooterTipo[];
  mantenimientoHref: string;
  hAviso: string;
  hPriv: string;
  hCookies: string;
  variant?: "default" | "legal";
  logoAlt?: string;
}) {
  return (
    <footer style={{ marginTop: "clamp(56px,7vw,88px)", background: "#22292B", color: "#FFFFFF" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(40px,5vw,64px) clamp(16px,4.5vw,24px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))",
          gap: 32,
        }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt={logoAlt}
            style={{ height: 96, width: "auto", display: "block", margin: "-8px 0 12px -6px" }}
          />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, opacity: 0.7, maxWidth: "30ch" }}>
            Toldos a medida en el Baix Llobregat. Medición, fabricación e instalación con el mismo
            instalador.
          </p>
        </div>
        <div>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#D9A75C",
              fontWeight: 700,
            }}
          >
            Contacto
          </p>
          <a
            href={waLink}
            className="nav-link"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 600, color: "#FFFFFF" }}
          >
            <WhatsAppIcon size={18} />
            {waDisplay}
          </a>
          <p style={{ margin: "12px 0 0", fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
            Lunes a sábado, 9:00 – 20:00
          </p>
        </div>
        <div>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#D9A75C",
              fontWeight: 700,
            }}
          >
            Tipos de toldo
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {tipos.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="nav-link" style={{ fontSize: 14, color: "#FFFFFF", opacity: 0.78 }}>
                  {t.nombre}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 6, paddingTop: 12, borderTop: "1px solid #FFFFFF1f" }}>
              <a href={mantenimientoHref} className="nav-link" style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>
                Mantenimiento de toldos
              </a>
            </li>
          </ul>
        </div>
        {variant === "legal" ? (
          <div>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: 12,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#D9A75C",
                fontWeight: 700,
              }}
            >
              Información legal
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <a href={hAviso} className="nav-link" style={{ fontSize: 14, color: "#FFFFFF", opacity: 0.78 }}>
                  Aviso legal
                </a>
              </li>
              <li>
                <a href={hPriv} className="nav-link" style={{ fontSize: 14, color: "#FFFFFF", opacity: 0.78 }}>
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href={hCookies} className="nav-link" style={{ fontSize: 14, color: "#FFFFFF", opacity: 0.78 }}>
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: 12,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#D9A75C",
                fontWeight: 700,
              }}
            >
              Zona de servicio
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, opacity: 0.78 }}>{ZONA_RESUMEN}</p>
          </div>
        )}
      </div>
      <div style={{ borderTop: "1px solid #FFFFFF1f" }}>
        {variant === "legal" ? (
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "18px clamp(16px,4.5vw,24px)",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
              fontSize: 13,
              opacity: 0.6,
            }}
          >
            <span>© 2026 DP Toldos</span>
            <span>Baix Llobregat, Barcelona</span>
          </div>
        ) : (
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "18px clamp(16px,4.5vw,24px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 13,
            }}
          >
            <span style={{ opacity: 0.6 }}>© 2026 DP Toldos</span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <a
                href={hAviso}
                style={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  textDecoration: "underline",
                  textDecorationColor: "#FFFFFF59",
                  textUnderlineOffset: 3,
                }}
              >
                Aviso legal
              </a>
              <a
                href={hPriv}
                style={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  textDecoration: "underline",
                  textDecorationColor: "#FFFFFF59",
                  textUnderlineOffset: 3,
                }}
              >
                Privacidad
              </a>
              <a
                href={hCookies}
                style={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  textDecoration: "underline",
                  textDecorationColor: "#FFFFFF59",
                  textUnderlineOffset: 3,
                }}
              >
                Cookies
              </a>
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
