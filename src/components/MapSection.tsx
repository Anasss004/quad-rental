"use client";

import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const MAP_URL =
  "https://www.google.com/maps?q=31.696463,-8.209277&z=16&output=embed";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=31.696463,-8.209277";

const WAZE_URL =
  "https://www.waze.com/ul?ll=31.696463%2C-8.209277&navigate=yes";

const APPLE_MAPS_URL =
  "https://maps.apple.com/?ll=31.696463,-8.209277&q=Elta%20Quad";

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F5F1E8] py-12 md:py-16"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-terracotta-400/8 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl md:mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-terracotta-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
              Contact
            </span>
          </div>

          <h2 className="text-xl font-black tracking-tight text-charcoal-950 md:text-2xl">
            {t("contact_title")}
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-600 md:text-lg">
            Retrouvez-nous facilement et préparez votre départ vers les
            pistes du désert.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[2rem]
              border border-charcoal-950/8
              bg-[#FCFAF5]
              p-6
              shadow-sm
              md:p-7
            "
          >
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal-400">
                Elta Quad
              </p>

              <h3 className="mt-2 text-lg font-black text-charcoal-950">
                Parlons de votre aventure.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                Une question sur le départ, les horaires ou les réservations ?
                Contactez-nous directement.
              </p>
            </div>

            <div className="space-y-3">

              {/* =================================================
                  ADDRESS
              ================================================== */}

              <div
                className="
                  group
                  flex items-center gap-4
                  rounded-2xl
                  border border-charcoal-950/8
                  bg-[#F5F1E8]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-terracotta-500/20
                  hover:shadow-md
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-terracotta-500/10
                    text-terracotta-600
                  "
                >
                  <MapPin size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal-400">
                    Adresse
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-relaxed text-charcoal-900">
                    Route Souihla, Vers Autoroute Agadir,
                    Marrakech 40120 Maroc
                  </p>
                </div>
              </div>

              {/* =================================================
                  PHONE
              ================================================== */}

              <a
                href="tel:+212664350232"
                className="
                  group
                  flex items-center gap-4
                  rounded-2xl
                  border border-charcoal-950/8
                  bg-[#F5F1E8]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-terracotta-500/20
                  hover:shadow-md
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-terracotta-500/10
                    text-terracotta-600
                  "
                >
                  <Phone size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal-400">
                    Téléphone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-charcoal-900">
                    +212 664 350 232
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="
                    text-charcoal-300
                    transition-all
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-terracotta-500
                  "
                />
              </a>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:touristransfers@gmail.com"
                className="
                  group
                  flex items-center gap-4
                  rounded-2xl
                  border border-charcoal-950/8
                  bg-[#F5F1E8]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-terracotta-500/20
                  hover:shadow-md
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-terracotta-500/10
                    text-terracotta-600
                  "
                >
                  <Mail size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal-400">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-charcoal-900">
                    touristransfers@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="
                    text-charcoal-300
                    transition-all
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-terracotta-500
                  "
                />
              </a>

            </div>
          </motion.div>

          {/* =================================================
              INTERACTIVE MAP
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 1.02 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[2rem]
              border border-charcoal-950/10
              bg-[#E5E0D6]
              shadow-xl
              shadow-charcoal-950/8
              md:min-h-[440px]
            "
          >
            {/* =================================================
                GOOGLE MAP
            ================================================== */}

            <iframe
              title="Localisation Elta Quad"
              src={MAP_URL}
              className="
                absolute inset-0
                h-full w-full
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Soft top gradient */}
            <div
              className="
                pointer-events-none
                absolute inset-x-0 top-0
                h-32
                bg-gradient-to-b
                from-black/20
                to-transparent
              "
            />

            {/* =================================================
                LOCATION BADGE
            ================================================== */}

            <div
              className="
                absolute left-4 top-4
                flex items-center gap-3
                rounded-2xl
                border border-white/60
                bg-white/95
                px-4 py-3
                shadow-xl
                backdrop-blur-md
                md:left-5 md:top-5
              "
            >
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-terracotta-500
                  text-white
                  shadow-md
                "
              >
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal-400">
                  Point de départ
                </p>

                <p className="mt-0.5 text-sm font-black text-charcoal-950">
                  Elta Quad
                </p>
              </div>
            </div>

            {/* =================================================
                NAVIGATION PANEL
            ================================================== */}

            <div
              className="
                absolute
                bottom-4 left-4 right-4
                md:bottom-5 md:left-5 md:right-5
              "
            >
              <div
                className="
                  rounded-[1.5rem]
                  border border-white/15
                  bg-charcoal-950/90
                  p-4
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {/* Panel heading */}
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl
                      bg-white/10
                    "
                  >
                    <Compass size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Comment souhaitez-vous nous rejoindre ?
                    </p>

                    <p className="mt-0.5 text-[11px] text-white/50">
                      Choisissez votre application de navigation
                    </p>
                  </div>
                </div>

                {/* =================================================
                    NAVIGATION BUTTONS
                ================================================== */}

                <div className="grid grid-cols-3 gap-2">

                  {/* Google Maps */}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/nav
                      flex items-center justify-center gap-2
                      rounded-xl
                      bg-white
                      px-3 py-3
                      text-xs font-bold
                      text-charcoal-950
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-terracotta-500
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    <MapPin
                      size={15}
                      className="
                        transition-transform
                        group-hover/nav:scale-110
                      "
                    />

                    <span className="hidden sm:inline">
                      Google Maps
                    </span>

                    <span className="sm:hidden">
                      Maps
                    </span>
                  </a>

                  {/* Waze */}
                  <a
                    href={WAZE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/nav
                      flex items-center justify-center gap-2
                      rounded-xl
                      bg-white/10
                      px-3 py-3
                      text-xs font-bold
                      text-white
                      ring-1 ring-white/10
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white
                      hover:text-charcoal-950
                      hover:shadow-lg
                    "
                  >
                    <Navigation
                      size={15}
                      className="
                        transition-transform
                        group-hover/nav:scale-110
                      "
                    />

                    Waze
                  </a>

                  {/* Apple Maps */}
                  <a
                    href={APPLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/nav
                      flex items-center justify-center gap-2
                      rounded-xl
                      bg-white/10
                      px-3 py-3
                      text-xs font-bold
                      text-white
                      ring-1 ring-white/10
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white
                      hover:text-charcoal-950
                      hover:shadow-lg
                    "
                  >
                    <span
                      className="
                        text-sm font-black
                        transition-transform
                        group-hover/nav:scale-110
                      "
                    >
                      
                    </span>

                    <span className="hidden sm:inline">
                      Apple Plans
                    </span>

                    <span className="sm:hidden">
                      Apple
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}