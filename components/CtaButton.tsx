import WhatsAppIcon from "./WhatsAppIcon";

export default function CtaButton({
  href,
  label,
  variant = "gold",
}: {
  href: string;
  label: string;
  variant?: "gold" | "teal";
}) {
  const isGold = variant === "gold";
  return (
    <a
      href={href}
      className={isGold ? "btn-gold" : "btn-teal"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: isGold ? "#D9A75C" : "#1F4E4E",
        color: isGold ? "#22292B" : "#FFFFFF",
        padding: "17px 28px",
        fontWeight: 700,
        fontSize: 17,
        borderRadius: 2,
      }}
    >
      <WhatsAppIcon size={20} />
      {label}
    </a>
  );
}
