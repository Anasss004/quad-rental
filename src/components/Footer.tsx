"use client";

import { Compass } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="bg-charcoal-950 text-sand-200/60 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <span className="flex items-center gap-1.5 font-semibold text-sand-50">
          <Compass size={16} className="text-terracotta-500" />
          Elta Quad
        </span>
        <span>
          © {year} Elta Quad — {t("footer_tagline")}
        </span>
      </div>
    </footer>
  );
}
