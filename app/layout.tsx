import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F4E4E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
