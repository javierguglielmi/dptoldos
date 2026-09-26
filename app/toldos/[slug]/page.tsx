import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PlaceEmphasis from "@/components/PlaceEmphasis";
import { FICHAS, ORDEN, RESUMEN, type FichaSlug, COMUNES } from "@/lib/fichas";
import { CTA_LABEL, FONT_SERIF, SITE_URL, WHATSAPP_NUMBER, waLink } from "@/lib/site";
import { faqPageSchema, fichaServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return ORDEN.map((slug) => ({ slug }));
}

function getFicha(slug: string) {
  return (ORDEN as readonly string[]).includes(slug) ? FICHAS[slug as FichaSlug] : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ficha = getFicha(slug);
  if (!ficha) return {};
  const ogImage = `/assets/og-${ficha.slug}.jpg`;
  return {
    title: ficha.metaTitle,
    description: ficha.metaDescription,
    alternates: { canonical: `/toldos/${ficha.slug}` },
    openGraph: {
      type: "article",
      siteName: "DP Toldos",
      locale: "es_ES",
      title: ficha.metaTitle,
      description: ficha.metaDescription,
      url: `${SITE_URL}/toldos/${ficha.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

const legalHrefs = { aviso: "/legal/aviso-legal", priv: "/legal/privacidad", cookies: "/legal/cookies" };

export default async function FichaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ficha = getFicha(slug);
  if (!ficha) notFound();

  const nav = {
    home: "/",
    tipos: "/#tipos",
    mantenimiento: "/toldos/mantenimiento",
    motor: "/#motorizacion",
    proceso: "/#proceso",
    zona: "/#zona",
    faq: "/#faq",
  };

  const wa = waLink(`¡Hola! Me gustaría pedir presupuesto para un toldo ${ficha.nombre.toLowerCase()} 🙂`);

  const tipos = ORDEN.map((s) => ({ nombre: FICHAS[s].nombre, href: `/toldos/${s}` }));
  const otros = ORDEN.filter((s) => s !== ficha.slug).map((s) => ({
    ...FICHAS[s],
    desc: RESUMEN[s],
  }));

  return (
    <div style={{ minHeight: "100vh", background: "#F6F2EC" }}>
      <JsonLd data={fichaServiceSchema(ficha)} />
      <JsonLd data={faqPageSchema(ficha.faqs)} />
      <Header nav={nav} waLink={wa} />

      <section id="top" style={{ background: "#1F4E4E", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,4vw,44px) clamp(16px,4.5vw,24px) clamp(48px,7vw,88px)" }}>
          <nav aria-label="Ruta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 13, letterSpacing: ".02em", marginBottom: "clamp(24px,4vw,40px)" }}>
            <a href="/" style={{ color: "#D9A75C" }}>Inicio</a>
            <span style={{ opacity: 0.5 }}>/</span>
            <a href="/#tipos" style={{ color: "#D9A75C" }}>Tipos de toldo</a>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: 0.75 }}>{ficha.nombre}</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
            <div>
              <p style={{ margin: "0 0 20px", fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 600 }}>
                Ficha técnica · {ficha.nombre}
              </p>
              <h1 style={{ margin: "0 0 24px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(34px,4.8vw,56px)", lineHeight: 1.06, letterSpacing: "-.02em" }}>
                <PlaceEmphasis text={ficha.h1} />
              </h1>
              <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.6, maxWidth: "54ch", color: "#FFFFFF" }}>
                {ficha.apertura}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                <CtaButton href={wa} label={CTA_LABEL} />
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "#FFFFFF", opacity: 0.85, maxWidth: "26ch" }}>
                  Dinos medidas aproximadas y municipio: te damos precio orientativo.
                </span>
              </div>
            </div>
            <div>
              {ficha.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ficha.img}
                  alt={ficha.imgAlt ?? ficha.nombre}
                  style={{ width: "100%", height: "clamp(280px,32vw,420px)", objectFit: "cover", display: "block" }}
                />
              ) : (
                <div style={{ border: "1px dashed #D9A75C", background: "#1A4343", minHeight: "clamp(280px,32vw,420px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 24 }}>
                  <p style={{ margin: "0 0 6px", fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 700 }}>
                    Placeholder · foto pendiente
                  </p>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "#FFFFFF", opacity: 0.8, maxWidth: "40ch" }}>{ficha.foto}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="tecnico" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "2px solid #1F4E4E", paddingBottom: 20, marginBottom: 40 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Detalle técnico
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Lo específico de este sistema. El resto de condiciones son iguales en los cinco.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", gap: 20, marginBottom: 28 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Medidas máximas</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>{ficha.medidasTitulo}</p>
            {ficha.medidasNota && (
              <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>{ficha.medidasNota}</p>
            )}
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Motorización</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>{ficha.motorTitulo}</p>
            <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>{ficha.motorNota}</p>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Mejor uso</p>
            <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: 26, lineHeight: 1.2, color: "#22292B" }}>{ficha.usoTitulo}</p>
            <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.8 }}>{ficha.usoNota}</p>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #22292B1f", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          {ficha.tecnico.map((b) => (
            <div key={b.t} style={{ padding: "26px clamp(20px,3vw,32px)", borderBottom: "1px solid #22292B14", borderRight: "1px solid #22292B14", display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#1F4E4E", letterSpacing: "-.01em" }}>{b.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#22292B", opacity: 0.82 }}>{b.d}</p>
            </div>
          ))}
        </div>

        {ficha.avisoTitulo && (
          <div
            style={{
              marginTop: 28,
              background: "#D9A75C",
              color: "#22292B",
              padding: "clamp(24px,4vw,40px) clamp(20px,4vw,44px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
              gap: "20px clamp(28px,4vw,56px)",
              alignItems: "start",
            }}
          >
            <h3 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(23px,2.6vw,30px)", lineHeight: 1.15, letterSpacing: "-.015em" }}>
              {ficha.avisoTitulo}
            </h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{ficha.avisoTexto}</p>
          </div>
        )}
      </section>

      <section id="comunes" style={{ marginTop: "clamp(64px,8vw,104px)", background: "#1F4E4E", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(52px,7vw,88px) clamp(16px,4.5vw,24px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "1px solid #FFFFFF3d", paddingBottom: 20, marginBottom: 40 }}>
            <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em" }}>
              Igual en los cinco sistemas
            </h2>
            <p style={{ margin: 0, fontSize: 15, color: "#FFFFFF", opacity: 0.8, maxWidth: "34ch" }}>
              Materiales, garantía, precio y plazos no cambian según el tipo de toldo.
            </p>
          </div>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(270px,100%),1fr))", gap: "2px clamp(28px,4vw,56px)" }}>
            {COMUNES.map((c) => (
              <div key={c.k} style={{ padding: "20px 0", borderTop: "1px solid #FFFFFF26", display: "flex", flexDirection: "column", gap: 8 }}>
                <dt style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#D9A75C" }}>{c.k}</dt>
                <dd style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#FFFFFF", opacity: 0.88 }}>{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="faq" style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <h2 style={{ margin: "0 0 32px", fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
          Preguntas frecuentes
        </h2>
        <FaqAccordion faqs={ficha.faqs} />
      </section>

      <section id="otros" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(16px,4.5vw,24px) 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, borderBottom: "2px solid #1F4E4E", paddingBottom: 20, marginBottom: 40 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(28px,3.2vw,38px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#1F4E4E" }}>
            Otros sistemas
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#22292B", opacity: 0.75, maxWidth: "34ch" }}>
            Si no es el tuyo, compáralo con los demás antes de pedir presupuesto.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))", gap: 20 }}>
          {otros.map((o) => (
            <a
              key={o.slug}
              href={`/toldos/${o.slug}`}
              className="card-link"
              style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #22292B1f", textDecoration: "none" }}
            >
              {o.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={o.img}
                  alt={o.imgAlt ?? o.nombre}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", borderBottom: "1px solid #22292B1f" }}
                />
              ) : (
                <div style={{ borderBottom: "1px dashed #1F4E4E59", background: "#EDE6D9", aspectRatio: "4/3", display: "flex", alignItems: "flex-end", padding: 12 }}>
                  <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#1F4E4E" }}>Foto pendiente</span>
                </div>
              )}
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.01em", color: "#22292B" }}>{o.nombre}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#22292B", opacity: 0.75, flex: 1 }}>{o.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1F4E4E", letterSpacing: ".01em" }}>Ver ficha técnica →</span>
              </div>
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
              {ficha.ctaTitulo}
            </h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, maxWidth: "44ch" }}>
              Tres o cuatro preguntas por WhatsApp y te damos un precio orientativo. El cerrado sale de la visita
              de medición.
            </p>
          </div>
          <CtaButton href={wa} label={CTA_LABEL} variant="teal" />
        </div>
      </section>

      <Footer
        waLink={wa}
        waDisplay={WHATSAPP_NUMBER}
        tipos={tipos}
        mantenimientoHref="/toldos/mantenimiento"
        hAviso={legalHrefs.aviso}
        hPriv={legalHrefs.priv}
        hCookies={legalHrefs.cookies}
      />
    </div>
  );
}
