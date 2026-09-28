import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function CtaButton({
  href,
  label,
  ctaLocation,
  variant = "gold",
}: {
  href: string;
  label: string;
  ctaLocation: string;
  variant?: "gold" | "teal";
}) {
  const isGold = variant === "gold";
  return (
    <WhatsAppLink
      href={href}
      ctaLocation={ctaLocation}
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
    </WhatsAppLink>
  );
}
