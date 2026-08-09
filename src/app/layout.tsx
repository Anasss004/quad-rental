import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-project.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Elta Quad — Location de Quads à l'heure",
  description:
    "Location de quads à l'heure chez Elta Quad pour vos sorties et randonnées. Réservez votre créneau en ligne.",
  openGraph: {
    title: "Elta Quad — Location de Quads à l'heure",
    description:
      "Location de quads à l'heure chez Elta Quad pour vos sorties et randonnées. Réservez votre créneau en ligne.",
    url: siteUrl,
    siteName: "Elta Quad",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Elta Quad — Location de quads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elta Quad — Location de Quads à l'heure",
    description:
      "Location de quads à l'heure chez Elta Quad pour vos sorties et randonnées.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elta Quad",
  description:
    "Location de quads à l'heure pour vos sorties et randonnées.",
  url: siteUrl,
  priceRange: "€€",
  areaServed: "FR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <div className="grain" aria-hidden="true" />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
