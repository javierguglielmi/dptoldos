import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PlaceEmphasis from "@/components/PlaceEmphasis";
import { FICHAS, ORDEN, RESUMEN } from "@/lib/fichas";
import { CTA_LABEL, FONT_SERIF, SITE_URL, WHATSAPP_NUMBER, waLink } from "@/lib/site";
import { mantenimientoServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mantenimiento de toldos en el Baix Llobregat · DP Toldos",
  description:
    "Mantenimiento integral de toldos en el Baix Llobregat, los hayamos instalado nosotros o no. Se presupuesta por visita según el tipo de toldo y su estado.",
  alternates: { canonical: "/toldos/mantenimiento" },
  openGraph: {
    type: "article",
    siteName: "DP Toldos",
    locale: "es_ES",
    title: "Mantenimiento de toldos en el Baix Llobregat · DP Toldos",
    description:
      "Mantenimiento integral de toldos en el Baix Llobregat, los hayamos instalado nosotros o no. Se presupuesta por visita según el tipo de toldo y su estado.",
    url: `${SITE_URL}/toldos/mantenimiento`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const nav = {
  home: "/",
  tipos: "/#tipos",
  mantenimiento: "#top",
  motor: "/#motorizacion",
  proceso: "/#proceso",
  zona: "/#zona",
  faq: "#faq",
};

const legalHrefs = { aviso: "/legal/aviso-legal", priv: "/legal/privacidad", cookies: "/legal/cookies" };

const faqs = [
  {
    q: "¿Mantienen toldos que no instalaron ustedes?",
    a: "Sí, cualquier toldo, sin importar quién lo instaló. No hace falta que sea de los sistemas que montamos nosotros ni de una marca concreta.",
  },
  {
    q: "¿Cuánto cuesta el mantenimiento?",
    a: "Se presupuesta según el tipo de toldo y su estado. No hay un precio cerrado ni un plan de cuota fija: un toldo motorizado de seis metros y un estor vertical pequeño no dan el mismo trabajo.",
  },
  {
    q: "¿Es un servicio con contrato anual?",
    a: "No. Se pide y se presupuesta por visita, cuando lo necesitas. No firmas nada que te ate a una revisión periódica.",
  },
];

export default function MantenimientoPage() {
  const wa = waLink("¡Hola! Quería preguntar por el mantenimiento de un toldo 🙂");
  const tipos = ORDEN.map((s) => ({ nombre: FICHAS[s].nombre, href: `/toldos/${s}`, desc: RESUMEN[s] }));

  return (
    <div style={{ minHeight: "100vh", background: "#F6F2EC" }}>
      <JsonLd data={mantenimientoServiceSchema()} />
      <Header nav={nav} waLink={wa} />

      <section id="top" style={{ background: "#1F4E4E", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,44px) clamp(16px,4.5vw,24px) clamp(52px,8vw,104px)" }}>
          <nav aria-label="Ruta" style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", fontSize: 13, marginBottom: "clamp(28px,4vw,44px)", color: "#FFFFFF" }}>
            <a href="/" style={{ color: "#FFFFFF", opacity: 0.75 }}>Inicio</a>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: 0.75 }}>Servicios</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: "#D9A75C", fontWeight: 600 }}>Mantenimiento</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
            <div>
              <p style={{ margin: "0 0 20px", fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 600 }}>
                Servicio · Mantenimiento
              </p>
              <h1 style={{ margin: "0 0 24px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(34px,4.8vw,56px)", lineHeight: 1.06, letterSpacing: "-.02em" }}>
                <PlaceEmphasis text="Mantenimiento de toldos en el Baix Llobregat" />
              </h1>
              <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.6, maxWidth: "54ch", color: "#FFFFFF" }}>
                Hacemos mantenimiento integral de toldos, instalados por DP Toldos o por cualquier otro instalador.
                No hace falta que lo hayamos montado nosotros. El presupuesto se ajusta según el tipo de toldo y su
                estado: no es un pack cerrado ni una cuota fija.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                <CtaButton href={wa} label={CTA_LABEL} />
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "#FFFFFF", opacity: 0.85, maxWidth: "26ch" }}>
                  Dinos qué toldo tienes y qué le pasa: te decimos si hace falta visita.
                </span>
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/mantenimiento.webp"
                alt="Operario subido a una escalera ajustando con una atornilladora el cofre de un toldo de brazo invisible gris instalado en una fachada"
                style={{ width: "100%", height: "clamp(280px,32vw,420px)", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tecnico" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "2px solid #1F4E4E", paddingBottom: 20, marginBottom: 40 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Cómo funciona el servicio
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Un servicio transversal: no depende del sistema que tengas ni de quién lo instaló.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", gap: 20, marginBottom: 28 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Qué toldos</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>Cualquiera</p>
            <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>
              Los cinco sistemas que instalamos y también toldos de otras marcas u otros instaladores.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Formato</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>Por visita</p>
            <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>
              Sin suscripción y sin contrato de revisión anual. Se pide cuando hace falta.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Presupuesto</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>Según toldo y estado</p>
            <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>
              No hay pack cerrado ni cuota fija: cada toldo llega en un estado distinto.
            </p>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <div style={{ padding: "26px clamp(20px,3vw,32px)", borderBottom: "1px solid #22292B14", borderRight: "1px solid #22292B14", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Alcance</p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#22292B", opacity: 0.85 }}>
              Mantenimiento integral, no una intervención puntual sobre una sola pieza.
            </p>
          </div>
          <div style={{ padding: "26px clamp(20px,3vw,32px)", borderBottom: "1px solid #22292B14", borderRight: "1px solid #22292B14", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Sin condición de origen</p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#22292B", opacity: 0.85 }}>
              No exigimos que el toldo sea nuestro.
            </p>
          </div>
          <div style={{ padding: "26px clamp(20px,3vw,32px)", borderBottom: "1px solid #22292B14", borderRight: "1px solid #22292B14", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Qué incluye una visita</p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#22292B", opacity: 0.85 }}>
              Evaluamos el estado del toldo en la visita y te decimos qué hace falta, desde un ajuste simple hasta
              el cambio de lona.
            </p>
          </div>
          <div style={{ padding: "26px clamp(20px,3vw,32px)", borderBottom: "1px solid #22292B14", borderRight: "1px solid #22292B14", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Zona</p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#22292B", opacity: 0.85 }}>
              Baix Llobregat, con prioridad en Sant Just Desvern, Esplugues, Castelldefels, Gavà, Sant Joan Despí y
              Begues.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "2px solid #1F4E4E", paddingBottom: 20, marginBottom: 24 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Preguntas sobre el mantenimiento
          </h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      <section id="otros" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "2px solid #1F4E4E", paddingBottom: 20, marginBottom: 40 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(28px,3.2vw,38px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Sistemas que instalamos
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Si además de mantener el tuyo estás pensando en uno nuevo.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))", gap: 20 }}>
          {tipos.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="card-link"
              style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #22292B1f", textDecoration: "none", padding: 20, gap: 10 }}
            >
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.01em", color: "#22292B" }}>{t.nombre}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.75, flex: 1 }}>{t.desc}</p>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1F4E4E", letterSpacing: ".01em" }}>Ver ficha técnica →</span>
            </a>
          ))}
        </div>
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
              ¿Tu toldo pide una revisión?
            </h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, maxWidth: "44ch" }}>
              Cuéntanos qué toldo tienes y qué le notas. Con eso te decimos si hace falta visita y qué supondría.
            </p>
          </div>
          <CtaButton href={wa} label={CTA_LABEL} variant="teal" />
        </div>
      </section>

      <Footer
        waLink={wa}
        waDisplay={WHATSAPP_NUMBER}
        tipos={tipos.map((t) => ({ nombre: t.nombre, href: t.href }))}
        mantenimientoHref="#top"
        hAviso={legalHrefs.aviso}
        hPriv={legalHrefs.priv}
        hCookies={legalHrefs.cookies}
      />
    </div>
  );
}
