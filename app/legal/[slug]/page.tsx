import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FICHAS, ORDEN } from "@/lib/fichas";
import { LEGAL_META, LEGAL_SLUGS, LEGAL_TITULOS, type LegalSlug } from "@/lib/legal";
import { FONT_SERIF, SITE_URL, WHATSAPP_NUMBER, waLink } from "@/lib/site";

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

function isLegalSlug(slug: string): slug is LegalSlug {
  return (LEGAL_SLUGS as string[]).includes(slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isLegalSlug(slug)) return {};
  const meta = LEGAL_META[slug];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/legal/${slug}` },
    robots: { index: false, follow: true },
    openGraph: {
      type: "article",
      siteName: "DP Toldos",
      locale: "es_ES",
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/legal/${slug}`,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}

const nav = {
  home: "/",
  tipos: "/#tipos",
  mantenimiento: "/toldos/mantenimiento",
  motor: "/#motorizacion",
  proceso: "/#proceso",
  zona: "/#zona",
  faq: "/#faq",
};

const legalHrefs = { aviso: "/legal/aviso-legal", priv: "/legal/privacidad", cookies: "/legal/cookies" };

const h2Style: React.CSSProperties = {
  margin: "0 0 16px",
  fontFamily: FONT_SERIF,
  fontWeight: 500,
  fontSize: "clamp(26px,3vw,34px)",
  lineHeight: 1.15,
  color: "#1F4E4E",
  borderBottom: "2px solid #1F4E4E",
  paddingBottom: 12,
};

function AvisoLegal() {
  return (
    <div>
      <h2 style={h2Style}>1. Titular del sitio web</h2>
      <p style={{ margin: "0 0 14px" }}>
        Este sitio web es titularidad de DP Toldos. Los datos de contacto y la actividad son los siguientes:
      </p>
      <ul style={{ margin: "0 0 32px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 8 }}><strong>Nombre comercial:</strong> DP Toldos</li>
        <li style={{ marginBottom: 8 }}><strong>Correo electrónico:</strong> hola@dptoldos.com</li>
        <li style={{ marginBottom: 8 }}><strong>NIF/CIF:</strong> Pendiente de confirmar</li>
        <li style={{ marginBottom: 8 }}><strong>Actividad:</strong> fabricación, venta e instalación de toldos a medida</li>
        <li><strong>Ámbito:</strong> Baix Llobregat, provincia de Barcelona</li>
      </ul>
      <p style={{ margin: "0 0 32px" }}>
        Para cualquier cuestión relativa a este aviso, a un presupuesto o a una instalación, puede escribir al
        correo indicado o contactar por WhatsApp desde los botones del sitio.
      </p>

      <h2 style={h2Style}>2. Objeto del sitio</h2>
      <p style={{ margin: "0 0 14px" }}>
        Este sitio tiene una finalidad informativa: presenta los sistemas de toldo que instalamos, sus
        características técnicas y la zona en la que trabajamos, y permite ponerse en contacto para solicitar una
        medición o un presupuesto.
      </p>
      <p style={{ margin: "0 0 32px" }}>No es una tienda en línea. No se realizan ventas, pagos ni contrataciones a través de la web.</p>

      <h2 style={h2Style}>3. Precios, medidas y presupuestos</h2>
      <p style={{ margin: "0 0 14px" }}>
        Las medidas máximas, los plazos y cualquier precio orientativo que aparezca en el sitio son informativos y
        no constituyen una oferta vinculante. Cada instalación depende del hueco, del tipo de anclaje y del estado
        de la fachada.
      </p>
      <p style={{ margin: "0 0 32px" }}>
        La oferta en firme es el presupuesto por escrito que entregamos después de medir en el domicilio o local
        del cliente. Solo ese documento, con sus medidas, materiales, importe y plazo, tiene valor contractual.
      </p>

      <h2 style={h2Style}>4. Condiciones de uso</h2>
      <p style={{ margin: "0 0 14px" }}>
        El acceso al sitio es libre y gratuito. Quien lo utiliza se compromete a hacerlo conforme a la ley y a no
        emplearlo para actividades ilícitas ni para dañar sus sistemas.
      </p>
      <p style={{ margin: "0 0 32px" }}>
        Procuramos que la información técnica esté actualizada y sea exacta, pero puede contener errores o quedar
        desfasada. Nos reservamos el derecho de modificar los contenidos, los sistemas ofrecidos y este aviso sin
        previo aviso.
      </p>

      <h2 style={h2Style}>5. Propiedad intelectual</h2>
      <p style={{ margin: "0 0 32px" }}>
        Los textos, las fotografías de instalaciones propias, el logotipo y el diseño del sitio son titularidad de
        DP Toldos o se utilizan con autorización. No se permite reproducirlos, distribuirlos ni utilizarlos con
        fines comerciales sin consentimiento por escrito. Sí puede enlazarse libremente a cualquier página del
        sitio.
      </p>

      <h2 style={h2Style}>6. Enlaces a terceros</h2>
      <p style={{ margin: "0 0 32px" }}>
        Los botones de contacto abren WhatsApp, un servicio de WhatsApp Ireland Limited ajeno a DP Toldos. Al
        usarlo se aplican sus propias condiciones y su política de privacidad, sobre las que no tenemos control.
      </p>

      <h2 style={h2Style}>7. Responsabilidad</h2>
      <p style={{ margin: "0 0 32px" }}>
        No respondemos de los daños derivados de un uso indebido del sitio, de interrupciones del servicio ajenas
        a nuestro control ni de las decisiones tomadas únicamente a partir de la información publicada, sin una
        medición previa por nuestra parte.
      </p>

      <h2 style={h2Style}>8. Legislación aplicable</h2>
      <p style={{ margin: "0 0 32px" }}>
        Este aviso se rige por la legislación española. Para cualquier controversia serán competentes los juzgados
        y tribunales del domicilio del titular, salvo que la parte contraria tenga la condición de consumidor, en
        cuyo caso serán los de su propio domicilio.
      </p>
    </div>
  );
}

function Privacidad() {
  return (
    <div>
      <h2 style={h2Style}>1. Responsable del tratamiento</h2>
      <ul style={{ margin: "0 0 32px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 8 }}><strong>Responsable:</strong> DP Toldos</li>
        <li style={{ marginBottom: 8 }}><strong>Correo de contacto:</strong> hola@dptoldos.com</li>
        <li><strong>Ámbito de actividad:</strong> Baix Llobregat, provincia de Barcelona</li>
      </ul>

      <h2 style={h2Style}>2. Qué datos tratamos</h2>
      <p style={{ margin: "0 0 14px" }}>
        Este sitio no tiene formularios: no recogemos ningún dato mientras se navega. Solo tratamos los datos que
        el cliente nos facilita cuando nos contacta, por WhatsApp, por teléfono, por correo electrónico o en
        persona:
      </p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 8 }}>Nombre y apellidos.</li>
        <li style={{ marginBottom: 8 }}>Teléfono y, si lo facilita, correo electrónico.</li>
        <li style={{ marginBottom: 8 }}>Dirección donde se instalará el toldo.</li>
        <li style={{ marginBottom: 8 }}>Fotografías y medidas del hueco, la fachada o la terraza, cuando el cliente nos las envía.</li>
        <li style={{ marginBottom: 8 }}>Contenido de la conversación mantenida sobre el trabajo.</li>
        <li>Datos de facturación, si se contrata la instalación.</li>
      </ul>
      <p style={{ margin: "0 0 32px" }}>No tratamos datos de categorías especiales ni realizamos perfilado ni decisiones automatizadas.</p>

      <h2 style={h2Style}>3. Para qué los usamos y con qué base legal</h2>
      <ul style={{ margin: "0 0 32px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 10 }}><strong>Atender la solicitud y preparar el presupuesto.</strong> Base: el consentimiento del interesado al contactarnos y la relación precontractual.</li>
        <li style={{ marginBottom: 10 }}><strong>Medir, fabricar e instalar el toldo contratado.</strong> Base: la ejecución del contrato.</li>
        <li style={{ marginBottom: 10 }}><strong>Atender la garantía de 2 años y las reparaciones posteriores.</strong> Base: la ejecución del contrato y nuestro interés legítimo en acreditar el trabajo realizado.</li>
        <li><strong>Emitir facturas y cumplir obligaciones contables y fiscales.</strong> Base: obligación legal.</li>
      </ul>
      <p style={{ margin: "0 0 32px" }}>No enviamos comunicaciones comerciales ni boletines.</p>

      <h2 style={h2Style}>4. Cuánto tiempo los conservamos</h2>
      <p style={{ margin: "0 0 14px" }}>
        Si la solicitud no llega a convertirse en un trabajo, los datos se conservan el tiempo necesario para
        atenderla y se eliminan después.
      </p>
      <p style={{ margin: "0 0 32px" }}>
        Si hay instalación, los datos y la documentación del trabajo se conservan durante <strong>5 años</strong>,
        plazo que cubre tanto la garantía de 2 años como las obligaciones fiscales y contables aplicables.
      </p>

      <h2 style={h2Style}>5. A quién se comunican</h2>
      <p style={{ margin: "0 0 14px" }}>
        No vendemos ni cedemos datos a terceros. Acceden a ellos únicamente los proveedores necesarios para
        funcionar, cada uno con su propia política:
      </p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 8 }}><strong>WhatsApp Ireland Limited</strong> (grupo Meta), cuando el contacto se produce por WhatsApp: la conversación se aloja en su servicio.</li>
        <li style={{ marginBottom: 8 }}><strong>Proveedor de correo electrónico</strong>, para los mensajes recibidos por email.</li>
        <li style={{ marginBottom: 8 }}><strong>Vercel Inc.</strong>, empresa que aloja este sitio web y registra los accesos técnicos al servidor.</li>
        <li><strong>Asesoría fiscal y contable</strong>, para la facturación.</li>
      </ul>
      <p style={{ margin: "0 0 32px" }}>También se comunican a la Administración cuando una norma lo exige.</p>

      <h2 style={h2Style}>6. Derechos del interesado</h2>
      <p style={{ margin: "0 0 14px" }}>
        Cualquier persona puede solicitar el acceso a sus datos, su rectificación o supresión, la limitación u
        oposición al tratamiento y la portabilidad, así como retirar el consentimiento en cualquier momento.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        Para ejercerlos basta escribir a <strong>hola@dptoldos.com</strong> indicando qué derecho se quiere
        ejercer. Responderemos en el plazo máximo de un mes.
      </p>
      <p style={{ margin: "0 0 32px" }}>
        Si considera que no hemos atendido su solicitud correctamente, puede presentar una reclamación ante la
        Agencia Española de Protección de Datos (AEPD).
      </p>

      <h2 style={h2Style}>7. Seguridad y menores</h2>
      <p style={{ margin: "0 0 32px" }}>
        Aplicamos medidas razonables para proteger la información frente a pérdidas o accesos no autorizados, y
        limitamos el acceso a quien lo necesita para su trabajo. No dirigimos nuestros servicios a menores de edad
        ni recogemos sus datos de forma intencionada.
      </p>
    </div>
  );
}

function Cookies() {
  return (
    <div>
      <h2 style={h2Style}>Este sitio no utiliza cookies</h2>
      <p style={{ margin: "0 0 14px" }}>
        DP Toldos no instala cookies propias ni de terceros en el navegador de quien visita esta web. No hay
        analítica, ni píxeles de seguimiento, ni publicidad, ni botones de redes sociales incrustados.
      </p>
      <p style={{ margin: "0 0 32px" }}>
        Por eso no verá ningún aviso pidiéndole permiso: no hay nada que consentir. El sitio son páginas estáticas
        que se descargan y se muestran, sin guardar nada en su equipo.
      </p>

      <h2 style={h2Style}>Qué sí ocurre al visitarnos</h2>
      <p style={{ margin: "0 0 14px" }}>Hay dos conexiones a servicios externos que conviene conocer, aunque no impliquen cookies:</p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 22 }}>
        <li style={{ marginBottom: 10 }}>
          <strong>Tipografías.</strong> Las fuentes del sitio se cargan desde los servidores de Google Fonts. Esa
          petición transmite su dirección IP y datos técnicos del navegador a Google, necesarios para servir el
          archivo.
        </li>
        <li>
          <strong>Alojamiento.</strong> El sitio está alojado en Vercel, que registra los accesos al servidor (IP,
          fecha, página solicitada) con fines técnicos y de seguridad.
        </li>
      </ul>
      <p style={{ margin: "0 0 32px" }}>Ninguna de las dos cosas se usa para identificar a nadie ni para seguir su actividad entre sitios.</p>

      <h2 style={h2Style}>Al pulsar el botón de WhatsApp</h2>
      <p style={{ margin: "0 0 32px" }}>
        Los botones de contacto abren WhatsApp fuera de este sitio. A partir de ese momento se aplican las
        condiciones y la política de privacidad de WhatsApp Ireland Limited, que sí utiliza sus propias
        tecnologías de almacenamiento.
      </p>

      <h2 style={h2Style}>Cómo controlar las cookies en general</h2>
      <p style={{ margin: "0 0 32px" }}>
        Aunque aquí no haga falta, cualquier navegador permite ver, bloquear o borrar las cookies almacenadas
        desde su configuración de privacidad: Chrome, Safari, Firefox y Edge incluyen esa opción en su panel de
        ajustes.
      </p>

      <h2 style={h2Style}>Si esto cambia</h2>
      <p style={{ margin: "0 0 32px" }}>
        Si en el futuro añadimos analítica o cualquier herramienta que instale cookies, actualizaremos esta página
        y mostraremos el aviso de consentimiento correspondiente antes de activarla.
      </p>
    </div>
  );
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  if (!isLegalSlug(rawSlug)) notFound();
  const slug = rawSlug;
  const wa = waLink("¡Hola! Me gustaría pedir presupuesto para un toldo 🙂");
  const tipos = ORDEN.map((s) => ({ nombre: FICHAS[s].nombre, href: `/toldos/${s}` }));

  return (
    <div style={{ minHeight: "100vh", background: "#F6F2EC" }}>
      <Header nav={nav} waLink={wa} />

      <section style={{ background: "#1F4E4E", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(16px,4.5vw,24px) clamp(40px,5.5vw,72px)" }}>
          <p style={{ margin: "0 0 16px", fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#D9A75C", fontWeight: 600 }}>
            Información legal
          </p>
          <h1 style={{ margin: 0, fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(34px,4.8vw,56px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
            {LEGAL_TITULOS[slug]}
          </h1>
          <p style={{ margin: "18px 0 0", fontSize: 15, opacity: 0.75 }}>Última actualización: septiembre de 2026</p>
        </div>
      </section>

      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(40px,5.5vw,72px) clamp(16px,4.5vw,24px) 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "start",
        }}
      >
        <article style={{ maxWidth: "70ch", fontSize: 17, lineHeight: 1.75, gridColumn: "1 / -1" }}>
          {slug === "aviso-legal" && <AvisoLegal />}
          {slug === "privacidad" && <Privacidad />}
          {slug === "cookies" && <Cookies />}

          <div style={{ borderTop: "1px solid #22292B1f", paddingTop: 28, marginTop: 8, display: "flex", flexWrap: "wrap", gap: "12px 24px" }}>
            <a href="/legal/aviso-legal" style={{ fontSize: 15, fontWeight: 600, color: "#1F4E4E" }}>Aviso legal</a>
            <a href="/legal/privacidad" style={{ fontSize: 15, fontWeight: 600, color: "#1F4E4E" }}>Política de privacidad</a>
            <a href="/legal/cookies" style={{ fontSize: 15, fontWeight: 600, color: "#1F4E4E" }}>Política de cookies</a>
            <a href="/" style={{ fontSize: 15, fontWeight: 600, color: "#1F4E4E" }}>Volver al inicio</a>
          </div>
        </article>
      </main>

      <Footer
        waLink={wa}
        waDisplay={WHATSAPP_NUMBER}
        tipos={tipos}
        mantenimientoHref="/toldos/mantenimiento"
        hAviso={legalHrefs.aviso}
        hPriv={legalHrefs.priv}
        hCookies={legalHrefs.cookies}
        variant="legal"
      />
    </div>
  );
}
