export type FaqEntry = { q: string; a: string; pendiente?: boolean };

export default function FaqAccordion({ faqs }: { faqs: FaqEntry[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #22292B24" }}>
      {faqs.map((f) => (
        <details key={f.q} style={{ borderBottom: "1px solid #22292B24", background: "#F6F2EC" }}>
          <summary
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 24,
              padding: "22px 4px",
              fontSize: 18,
              fontWeight: 600,
              color: "#22292B",
              letterSpacing: "-.01em",
            }}
          >
            {f.q}
            <span
              data-chev="1"
              style={{
                flex: "none",
                width: 18,
                height: 18,
                position: "relative",
                marginTop: 4,
                transition: "transform .18s ease",
                color: "#D9A75C",
              }}
            >
              <span style={{ position: "absolute", left: 0, top: 8, width: 18, height: 2, background: "currentColor" }} />
              <span style={{ position: "absolute", left: 8, top: 0, width: 2, height: 18, background: "currentColor" }} />
            </span>
          </summary>
          <div style={{ padding: "0 clamp(4px,8vw,56px) 26px 4px", display: "flex", flexDirection: "column", gap: 10 }}>
            {f.pendiente && (
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 10px",
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#1F4E4E",
                  border: "1px dashed #1F4E4E59",
                }}
              >
                Pendiente de confirmar
              </span>
            )}
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "#22292B", opacity: 0.82 }}>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
