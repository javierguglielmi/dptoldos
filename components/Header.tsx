"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export type NavLinks = {
  home: string;
  tipos: string;
  mantenimiento: string;
  motor: string;
  proceso: string;
  zona: string;
  faq: string;
};

export default function Header({
  nav,
  waLink,
  logoAlt = "DP Toldos",
}: {
  nav: NavLinks;
  waLink: string;
  logoAlt?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "#1F4E4E",
        borderBottom: "1px solid #FFFFFF26",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8px clamp(16px,4.5vw,24px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href={nav.home}
          style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt={logoAlt}
            style={{ height: "clamp(60px,13vw,88px)", width: "auto", display: "block" }}
          />
        </a>
        <div style={{ flex: "1 1 auto", minWidth: 0, display: "flex", justifyContent: "flex-end" }}>
          <nav
            data-sections="1"
            style={{
              alignItems: "center",
              gap: "clamp(16px,2.2vw,28px)",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: ".01em",
              whiteSpace: "nowrap",
            }}
          >
            <a href={nav.tipos} className="nav-link" style={{ color: "#FFFFFF" }}>
              Tipos de toldo
            </a>
            <a href={nav.mantenimiento} className="nav-link" style={{ color: "#FFFFFF" }}>
              Mantenimiento
            </a>
            <a href={nav.motor} className="nav-link" style={{ color: "#FFFFFF" }}>
              Motorización
            </a>
            <a href={nav.proceso} className="nav-link" style={{ color: "#FFFFFF" }}>
              Cómo trabajamos
            </a>
            <a href={nav.zona} className="nav-link" style={{ color: "#FFFFFF" }}>
              Zona
            </a>
            <a href={nav.faq} className="nav-link" style={{ color: "#FFFFFF" }}>
              FAQ
            </a>
          </nav>
        </div>
        <nav style={{ flex: "none" }}>
          <a
            href={waLink}
            className="btn-gold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#D9A75C",
              color: "#22292B",
              padding: "12px clamp(14px,2.4vw,18px)",
              fontWeight: 700,
              fontSize: "clamp(13px,3.4vw,14px)",
              borderRadius: 2,
              whiteSpace: "nowrap",
            }}
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </nav>
        <button
          type="button"
          data-burger="1"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            flex: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 46,
            background: "transparent",
            border: "1px solid #FFFFFF59",
            borderRadius: 2,
            color: "#FFFFFF",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Secciones"
          style={{ borderTop: "1px solid #FFFFFF26", background: "#1A4444" }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "8px clamp(16px,4.5vw,24px) 18px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              href={nav.tipos}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              Tipos de toldo
            </a>
            <a
              href={nav.mantenimiento}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              Mantenimiento
            </a>
            <a
              href={nav.motor}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              Motorización
            </a>
            <a
              href={nav.proceso}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              Cómo trabajamos
            </a>
            <a
              href={nav.zona}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              Zona de servicio
            </a>
            <a
              href={nav.faq}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile"
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: 500,
                padding: "15px 2px",
                borderBottom: "1px solid #FFFFFF1f",
              }}
            >
              FAQ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
