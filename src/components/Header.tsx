"use client";

import { useEffect, useState } from "react";
import { Compass, Menu, X, ArrowRight } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import InstagramIcon from "./InstagramIcon";
import { useLanguage, TranslationKey } from "@/lib/i18n";

const links: { href: string; key: TranslationKey }[] = [
  { href: "#fleet", key: "nav_fleet" },
  { href: "#pricing", key: "nav_pricing" },
  { href: "#gallery", key: "nav_gallery" },
  { href: "#how-it-works", key: "nav_how" },
  { href: "#faq", key: "nav_faq" },
  { href: "#contact", key: "nav_contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/elta_quad/";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "bg-white/95 shadow-sm backdrop-blur-xl dark:bg-charcoal-950/95"
          : "bg-transparent"
      }`}
    >
      {/* Header */}
      <nav className="mx-auto grid h-14 w-full max-w-[1600px] grid-cols-1 items-center px-5 md:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:px-14">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div className="flex items-center justify-start">
          <a
            href="#"
            className={`group flex items-center gap-3 transition-colors duration-300 ${
              solid
                ? "text-charcoal-950 dark:text-sand-50"
                : "text-white"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                solid
                  ? "bg-terracotta-500 text-white"
                  : "bg-white/15 text-white backdrop-blur-md"
              } group-hover:bg-terracotta-500`}
            >
              <Compass
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </span>

            <span className="text-sm font-black tracking-tight">
              Elta<span className="text-terracotta-500"> Quad</span>
            </span>
          </a>
        </div>

        {/* =====================================================
            CENTER NAVIGATION
        ====================================================== */}

        <div className="hidden items-center justify-center lg:flex">
          <div
            className={`flex items-center rounded-2xl p-1 ${
              solid
                ? "bg-charcoal-950/[0.035] dark:bg-sand-50/[0.05]"
                : "bg-white/[0.08] backdrop-blur-sm"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative rounded-xl px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 xl:px-4 ${
                  solid
                    ? "text-charcoal-700 hover:bg-white hover:text-charcoal-950 dark:text-sand-200 dark:hover:bg-sand-50/10 dark:hover:text-sand-50"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t(link.key)}

                <span
                  className="
                    absolute bottom-1 left-1/2
                    h-0.5 w-0
                    -translate-x-1/2
                    rounded-full
                    bg-terracotta-500
                    transition-all duration-300
                    group-hover:w-6
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}

        <div className="hidden items-center justify-end gap-2 lg:flex">

          {/* Language */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className={`flex h-8 min-w-[44px] items-center justify-center rounded-xl border px-3 text-xs font-bold transition-all duration-200 ${
              solid
                ? "border-charcoal-950/10 text-charcoal-700 hover:border-terracotta-500/30 hover:bg-terracotta-50 hover:text-terracotta-600 dark:border-sand-50/10 dark:text-sand-200 dark:hover:bg-sand-50/10"
                : "border-white/20 text-white hover:border-white/40 hover:bg-white/10"
            }`}
            aria-label="Changer de langue"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Elta Quad sur Instagram"
            className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 ${
              solid
                ? "text-charcoal-700 hover:bg-terracotta-50 hover:text-terracotta-600 dark:text-sand-200 dark:hover:bg-sand-50/10"
                : "text-white hover:bg-white/10"
            }`}
          >
            <InstagramIcon size={16} />
          </a>

          {/* Separator */}
          <span
            className={`mx-1 h-5 w-px ${
              solid
                ? "bg-charcoal-950/10 dark:bg-sand-50/10"
                : "bg-white/20"
            }`}
          />

          {/* Dark mode */}
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl ${
              solid
                ? "hover:bg-charcoal-950/5 dark:hover:bg-sand-50/10"
                : "hover:bg-white/10"
            }`}
          >
            <DarkModeToggle />
          </div>

          {/* Reservation */}
          <a
            href="#reservation"
            className="
              group ml-2
              flex h-9 items-center gap-2
              rounded-xl
              bg-terracotta-500
              px-6
              text-sm font-bold text-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-terracotta-600
              hover:shadow-lg
              hover:shadow-terracotta-500/20
            "
          >
            {t("nav_reservation")}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={`absolute right-5 flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 lg:hidden ${
            solid
              ? "bg-charcoal-950/5 text-charcoal-950 dark:bg-sand-50/10 dark:text-sand-50"
              : "bg-white/10 text-white"
          }`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {open && (
        <div
          className="
            border-t
            border-charcoal-950/10
            bg-white
            px-5
            py-4
            shadow-xl
            dark:border-sand-50/10
            dark:bg-charcoal-950
            lg:hidden
          "
        >
          <div className="flex flex-col">

            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  flex items-center justify-between
                  border-b border-charcoal-950/10
                  py-2.5
                  text-sm font-semibold
                  text-charcoal-800
                  transition-colors
                  hover:text-terracotta-500
                  dark:border-sand-50/10
                  dark:text-sand-100
                "
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs font-bold text-terracotta-500">
                    0{index + 1}
                  </span>

                  {t(link.key)}
                </span>

                <ArrowRight size={17} />
              </a>
            ))}

            {/* Reservation */}
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="
                mt-5
                flex h-9
                items-center justify-between
                rounded-xl
                bg-terracotta-500
                px-5
                text-sm font-bold
                text-white
                transition-colors
                hover:bg-terracotta-600
              "
            >
              {t("nav_reservation")}

              <ArrowRight size={18} />
            </a>

            {/* Mobile controls */}
            <div className="mt-4 flex items-center gap-3 border-t border-charcoal-950/10 pt-4 dark:border-sand-50/10">

              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="
                  flex h-10 min-w-[44px]
                  items-center justify-center
                  rounded-xl
                  border border-charcoal-950/10
                  text-xs font-bold
                  dark:border-sand-50/10
                  dark:text-sand-100
                "
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elta Quad sur Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  text-charcoal-700
                  hover:bg-terracotta-50
                  hover:text-terracotta-500
                  dark:text-sand-200
                  dark:hover:bg-sand-50/10
                "
              >
                <InstagramIcon size={16} />
              </a>

              <div className="ml-auto">
                <DarkModeToggle />
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}