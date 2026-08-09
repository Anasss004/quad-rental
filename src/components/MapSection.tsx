"use client";

import { MapPin, Phone, Mail, Navigation, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const MAP_URL =
  "https://www.google.com/maps?q=quad%20rental&output=embed";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=quad%20rental";

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F5F1E8] py-12 md:py-16"
    >
      {/* Ambient background */}
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

              {/* Adresse */}
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

                  <p className="mt-1 text-sm font-semibold text-charcoal-900">
                    À compléter
                  </p>
                </div>
              </div>

              {/* Téléphone */}
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

              {/* Email */}
              <a
                href="mailto:contact@eltaquad.com"
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
                    contact@eltaquad.com
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

            {/* Map CTA */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                flex w-full
                items-center justify-center gap-2
                rounded-xl
                bg-charcoal-950
                px-5 py-3.5
                text-sm font-bold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-terracotta-600
                hover:shadow-lg
              "
            >
              <Navigation size={17} />
              Ouvrir dans Google Maps
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* =================================================
              MAP
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 1.02 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              min-h-[280px]
              overflow-hidden
              rounded-[2rem]
              border border-charcoal-950/10
              bg-[#E5E0D6]
              shadow-xl
              shadow-charcoal-950/5
              md:min-h-[340px]
            "
          >
            {/* Google Maps */}
            <iframe
              title="Localisation Elta Quad"
              src={MAP_URL}
              className="
                absolute inset-0
                h-full w-full
                border-0
                grayscale-[15%]
                contrast-[0.96]
                transition-all duration-700
                group-hover:grayscale-0
                group-hover:contrast-100
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Top gradient */}
            <div
              className="
                pointer-events-none
                absolute inset-x-0 top-0
                h-28
                bg-gradient-to-b
                from-black/15
                to-transparent
              "
            />

            {/* Location badge */}
            <div
              className="
                absolute left-5 top-5
                flex items-center gap-3
                rounded-2xl
                border border-white/50
                bg-white/95
                px-4 py-3
                shadow-xl
                backdrop-blur-md
                md:left-6 md:top-6
              "
            >
              <div
                className="
                  flex h-10 w-10
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

            {/* Bottom overlay */}
            <div
              className="
                absolute
                bottom-5 left-5 right-5
                md:bottom-6 md:left-6 md:right-6
              "
            >
              <div
                className="
                  flex flex-col gap-3
                  rounded-2xl
                  border border-white/15
                  bg-charcoal-950/85
                  p-4
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p className="text-sm font-bold">
                    Retrouvez-nous à Marrakech
                  </p>

                  <p className="mt-1 text-xs text-white/55">
                    Adresse exacte à compléter
                  </p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-terracotta-500
                    px-4 py-3
                    text-xs font-bold
                    text-white
                    transition-all duration-300
                    hover:bg-terracotta-600
                    hover:shadow-lg
                  "
                >
                  Itinéraire
                  <Navigation size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}