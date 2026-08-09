"use client";

import { useEffect, useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { useLanguage, TranslationKey } from "@/lib/i18n";

const links: { href: string; key: TranslationKey }[] = [
  { href: "#fleet", key: "nav_fleet" },
  { href: "#pricing", key: "nav_pricing" },
  { href: "#gallery", key: "nav_gallery" },
  { href: "#how-it-works", key: "nav_how" },
  { href: "#faq", key: "nav_faq" },
  { href: "#contact", key: "nav_contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        solid
          ? "bg-white/95 dark:bg-charcoal-950/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#"
          className={`flex items-center gap-1.5 text-xl font-extrabold tracking-tight transition-colors ${
            solid ? "text-charcoal-950 dark:text-sand-50" : "text-white"
          }`}
        >
          <Compass size={22} className="text-terracotta-500" />
          Elta Quad
        </a>

        <div
          className={`hidden md:flex gap-6 text-sm font-medium transition-colors ${
            solid ? "text-charcoal-800 dark:text-sand-100" : "text-white/90"
          }`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-terracotta-500 transition-colors">
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className={`hidden md:flex items-center gap-3 ${solid ? "text-charcoal-800 dark:text-sand-100" : "text-white"}`}>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-semibold px-2 py-1 border border-current/30 rounded-md hover:border-current transition-colors"
            aria-label="Changer de langue"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <DarkModeToggle />
          <a
            href="#reservation"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            {t("nav_reservation")}
          </a>
        </div>

        <button
          className={`md:hidden ${solid ? "text-charcoal-950 dark:text-sand-50" : "text-white"}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-charcoal-950 border-t border-charcoal-950/10 dark:border-sand-50/10 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-charcoal-800 dark:text-sand-100">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-terracotta-500 transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors mt-1"
          >
            {t("nav_reservation")}
          </a>
          <div className="pt-2 border-t border-charcoal-950/10 dark:border-sand-50/10 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold px-2 py-1 border border-charcoal-950/20 dark:border-sand-50/20 rounded-md"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
