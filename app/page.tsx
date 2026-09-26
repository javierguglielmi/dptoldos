import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PlaceEmphasis from "@/components/PlaceEmphasis";
import { FICHAS, ORDEN, RESUMEN } from "@/lib/fichas";
import { HOME_FAQS, MOTOR_ROWS, PASOS } from "@/lib/home-data";
import { CTA_LABEL, FONT_SERIF, MUNICIPIOS, SITE_URL, WHATSAPP_NUMBER, waLink } from "@/lib/site";
import { faqPageSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "DP Toldos · Toldos a medida en el Baix Llobregat",
  description:
    "Instalamos toldos a medida en el Baix Llobregat: brazo invisible, brazo directo, capota, vertical y corredero. Medición y presupuesto sin compromiso.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DP Toldos",
    locale: "es_ES",
    title: "DP Toldos · Toldos a medida en el Baix Llobregat",
    description: "Brazo invisible, brazo directo, capota, vertical y corredero. Instalador propio, sin subcontratas.",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const nav = {
  home: "#top",
  tipos: "#tipos",
  mantenimiento: "/toldos/mantenimiento",
  motor: "#motorizacion",
  proceso: "#proceso",
  zona: "#zona",
  faq: "#faq",
};

const legalHrefs = { aviso: "/legal/aviso-legal", priv: "/legal/privacidad", cookies: "/legal/cookies" };

const tipos = ORDEN.map((s) => ({ nombre: FICHAS[s].nombre, href: `/toldos/${s}`, desc: RESUMEN[s], ficha: FICHAS[s] }));

const wa = waLink("¡Hola! Me gustaría pedir presupuesto para un toldo 🙂");

const motorBadge: Record<string, { bg: string; fg: string; line: string }> = {
  yes: { bg: "#1F4E4E", fg: "#FFFFFF", line: "none" },
  part: { bg: "#D9A75C", fg: "#22292B", line: "none" },
  no: { bg: "#FFFFFF", fg: "#22292B", line: "inset 0 0 0 1px #22292B33" },
};

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F2EC" }}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqPageSchema(HOME_FAQS)} />
      <Header nav={nav} waLink={wa} />

      <section id="top" style={{ background: "#1F4E4E", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,6.5vw,88px) clamp(16px,4.5vw,24px) clamp(52px,8vw,104px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: "clamp(32px,5vw,64px)",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ margin: "0 0 20px", fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 600 }}>
              Baix Llobregat · Instalador propio, sin subcontratas
            </p>
            <h1
              style={{
                margin: "0 0 24px",
                fontFamily: FONT_SERIF,
                fontWeight: 500,
                fontSize: "clamp(38px,5.4vw,62px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
              }}
            >
              <PlaceEmphasis text="Instalamos toldos a medida en el Baix Llobregat" />
            </h1>
            <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.6, maxWidth: "52ch", color: "#FFFFFF" }}>
              Brazo invisible, brazo directo, capota, vertical y corredero. Medimos en tu casa, instalamos en pocos
              días desde que confirmas el presupuesto y respondemos con 2 años de garantía sobre producto e
              instalación. El mismo instalador que toma las medidas es el que monta: sin comerciales ni
              subcontratas por medio.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <CtaButton href={wa} label={CTA_LABEL} />
              <span style={{ fontSize: 14, lineHeight: 1.5, color: "#FFFFFF", opacity: 0.85, maxWidth: "26ch" }}>
                4 preguntas y te damos precio orientativo el mismo día.
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-local.webp"
              alt="Fachada de local con toldo de brazo directo en tejido ámbar y faldón ondulado sobre una terraza con mesas"
              style={{ width: "100%", maxWidth: 620, height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section id="tipos" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            borderBottom: "2px solid #1F4E4E",
            paddingBottom: 20,
            marginBottom: 40,
          }}
        >
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Tipos de toldo que instalamos
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Cinco sistemas. Cada ficha explica medidas máximas, anclajes y tejidos.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(215px,100%),1fr))", gap: 20 }}>
          {tipos.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="card-link"
              style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #22292B1f", textDecoration: "none" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.ficha.img ?? undefined}
                alt={t.ficha.imgAlt ?? t.nombre}
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", borderBottom: "1px solid #22292B1f" }}
              />
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.01em", color: "#22292B" }}>{t.nombre}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.75, flex: 1 }}>{t.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1F4E4E", letterSpacing: ".01em" }}>Ver ficha técnica →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="mantenimiento" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <a
          href="/toldos/mantenimiento"
          className="mantenimiento-banner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(24px,4vw,48px)",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#1F4E4E",
            color: "#FFFFFF",
            borderLeft: "8px solid #D9A75C",
            padding: "clamp(28px,4.5vw,52px) clamp(20px,4.5vw,52px)",
            textDecoration: "none",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <p style={{ margin: "0 0 14px", fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 600 }}>
              Otro servicio · No hace falta que sea nuestro
            </p>
            <h2 style={{ margin: "0 0 14px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.12, letterSpacing: "-.015em", color: "#FFFFFF" }}>
              Mantenimiento de toldos
            </h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#FFFFFF", maxWidth: "52ch" }}>
              Mantenimiento integral de cualquier toldo, lo hayamos instalado nosotros o no. Se presupuesta por
              visita según el sistema y su estado: sin cuota fija ni contrato anual.
            </p>
          </div>
          <span
            style={{
              flex: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #D9A75C",
              color: "#D9A75C",
              padding: "15px 24px",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Ver el servicio →
          </span>
        </a>
      </section>

      <section id="motorizacion" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f" }}>
          <div
            style={{
              padding: "clamp(26px,4vw,44px) clamp(16px,4vw,44px) 0",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
              Qué se puede motorizar
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#22292B", opacity: 0.8, maxWidth: "46ch" }}>
              No todos los sistemas admiten motor ni sensor de viento. Conviene saberlo antes de elegir, no después
              de medir.
            </p>
          </div>

          <div data-motor-cards="" style={{ gridTemplateColumns: "1fr", gap: 14, padding: "20px clamp(16px,4vw,44px) 28px" }}>
            {MOTOR_ROWS.map((m) => (
              <div key={m.nombre} style={{ border: "1px solid #22292B1f", padding: "16px 16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#1F4E4E", letterSpacing: "-.01em" }}>{m.nombre}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 12px",
                      fontSize: 13,
                      fontWeight: 700,
                      background: motorBadge[m.motorLevel].bg,
                      color: motorBadge[m.motorLevel].fg,
                      boxShadow: motorBadge[m.motorLevel].line,
                    }}
                  >
                    Motor: {m.motor}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 12px",
                      fontSize: 13,
                      fontWeight: 700,
                      background: motorBadge[m.sensorLevel].bg,
                      color: motorBadge[m.sensorLevel].fg,
                      boxShadow: motorBadge[m.sensorLevel].line,
                    }}
                  >
                    Sensor: {m.sensor}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>{m.nota}</p>
              </div>
            ))}
          </div>

          <div data-motor-table="" style={{ padding: "24px clamp(16px,4vw,44px) clamp(28px,4vw,44px)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0 16px 14px 0", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22292B", opacity: 0.6, fontWeight: 700, borderBottom: "2px solid #1F4E4E" }}>
                    Sistema
                  </th>
                  <th style={{ textAlign: "left", padding: "0 16px 14px", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22292B", opacity: 0.6, fontWeight: 700, borderBottom: "2px solid #1F4E4E", width: 166 }}>
                    Motor
                  </th>
                  <th style={{ textAlign: "left", padding: "0 16px 14px", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22292B", opacity: 0.6, fontWeight: 700, borderBottom: "2px solid #1F4E4E", width: 186 }}>
                    Sensor viento / sol
                  </th>
                  <th style={{ textAlign: "left", padding: "0 0 14px 16px", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22292B", opacity: 0.6, fontWeight: 700, borderBottom: "2px solid #1F4E4E" }}>
                    Nota
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOTOR_ROWS.map((m) => (
                  <tr key={m.nombre}>
                    <td style={{ padding: "16px 16px 16px 0", fontWeight: 600, color: "#22292B", borderBottom: "1px solid #22292B14", whiteSpace: "nowrap" }}>{m.nombre}</td>
                    <td style={{ padding: "14px 16px", borderBottom: "1px solid #22292B14" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 134,
                          maxWidth: "100%",
                          padding: "8px 10px",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: ".02em",
                          whiteSpace: "nowrap",
                          background: motorBadge[m.motorLevel].bg,
                          color: motorBadge[m.motorLevel].fg,
                          boxShadow: motorBadge[m.motorLevel].line,
                        }}
                      >
                        {m.motor}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", borderBottom: "1px solid #22292B14" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 134,
                          maxWidth: "100%",
                          padding: "8px 10px",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: ".02em",
                          whiteSpace: "nowrap",
                          background: motorBadge[m.sensorLevel].bg,
                          color: motorBadge[m.sensorLevel].fg,
                          boxShadow: motorBadge[m.sensorLevel].line,
                        }}
                      >
                        {m.sensor}
                      </span>
                    </td>
                    <td style={{ padding: "16px 0 16px 16px", borderBottom: "1px solid #22292B14", color: "#22292B", opacity: 0.8, lineHeight: 1.5 }}>{m.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="proceso" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            borderBottom: "2px solid #1F4E4E",
            paddingBottom: 20,
            marginBottom: 48,
          }}
        >
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Cómo trabajamos
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Cinco pasos. El primero lo das tú por WhatsApp; el resto lo llevamos nosotros.
          </p>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: "32px 28px" }}>
          {PASOS.map((p) => (
            <li key={p.num} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <span style={{ flex: "none", width: 46, height: 46, background: "#1F4E4E", color: "#FFFFFF", fontFamily: FONT_SERIF, fontSize: 22, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {p.num}
                </span>
                <span style={{ flex: 1, height: 1, background: "#D9A75C" }} />
                <span style={{ flex: "none", width: 5, height: 5, background: "#D9A75C" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#22292B", letterSpacing: "-.01em" }}>{p.titulo}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#22292B", opacity: 0.78 }}>{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="zona" style={{ marginTop: "clamp(64px,8vw,104px)", background: "#1F4E4E", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(52px,7vw,88px) clamp(16px,4.5vw,24px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(32px,5vw,64px)",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 20px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em" }}>
              Zona de servicio
            </h2>
            <p style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.6, maxWidth: "46ch", color: "#FFFFFF", opacity: 0.9 }}>
              Trabajamos en todo el Baix Llobregat. Una sola zona, un solo equipo: la visita de medición y la
              instalación las hace la misma persona.
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, maxWidth: "46ch", color: "#D9A75C" }}>
              ¿Estás justo en el límite de la comarca? Escríbenos igualmente y te lo confirmamos antes de
              presupuestar.
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(170px,100%),1fr))", gap: "2px 20px", alignContent: "start" }}>
            {MUNICIPIOS.map((m) => (
              <li key={m} style={{ padding: "10px 0", borderBottom: "1px solid #FFFFFF26", fontSize: 15, fontWeight: 500 }}>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <h2 style={{ margin: "0 0 32px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
          Preguntas frecuentes
        </h2>
        <FaqAccordion faqs={HOME_FAQS} />
      </section>

      <section style={{ maxWidth: 1200, margin: "clamp(56px,8vw,104px) auto 0", padding: "0 clamp(16px,4.5vw,24px)" }}>
        <div
          style={{
            background: "#D9A75C",
            color: "#22292B",
            padding: "clamp(28px,5vw,56px) clamp(20px,5vw,56px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 10px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.12, letterSpacing: "-.015em" }}>
              Pide tu precio orientativo
            </h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, maxWidth: "44ch" }}>
              Cuatro preguntas por WhatsApp: tipo de toldo, medidas aproximadas, municipio y si lo quieres
              motorizado.
            </p>
          </div>
          <CtaButton href={wa} label={CTA_LABEL} variant="teal" />
        </div>
      </section>

      <Footer
        waLink={wa}
        waDisplay={WHATSAPP_NUMBER}
        tipos={tipos.map((t) => ({ nombre: t.nombre, href: t.href }))}
        mantenimientoHref="/toldos/mantenimiento"
        hAviso={legalHrefs.aviso}
        hPriv={legalHrefs.priv}
        hCookies={legalHrefs.cookies}
      />
    </div>
  );
}
