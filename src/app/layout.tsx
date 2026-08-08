import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elta Quad — Location de Quads à l'heure",
  description:
    "Location de quads à l'heure chez Elta Quad pour vos sorties et randonnées. Réservez votre créneau en ligne.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
