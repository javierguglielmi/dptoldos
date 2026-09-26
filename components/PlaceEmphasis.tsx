const TARGET = "Baix Llobregat";

/**
 * Renders a heading string as-is, but visually de-emphasizes "Baix Llobregat"
 * (smaller size, lighter weight) instead of letting it read as headline text.
 * The full string stays a real text node — nothing is removed from the H1.
 */
export default function PlaceEmphasis({ text }: { text: string }) {
  const idx = text.indexOf(TARGET);
  if (idx === -1) return <>{text}</>;
  const before = text.slice(0, idx);
  const after = text.slice(idx + TARGET.length);
  return (
    <>
      {before}
      <span style={{ fontSize: "0.55em", fontWeight: 500, opacity: 0.8 }}>{TARGET}</span>
      {after}
    </>
  );
}
