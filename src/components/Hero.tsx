"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WeatherWidget from "./WeatherWidget";
import InstagramIcon from "./InstagramIcon";
import { useLanguage } from "@/lib/i18n";

const INSTAGRAM_URL = "https://www.instagram.com/elta_quad/";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden
        bg-cover bg-center
        pt-24 pb-20
      "
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(15, 12, 9, 0.55) 0%,
            rgba(25, 18, 12, 0.38) 40%,
            rgba(20, 14, 9, 0.72) 100%
          ),
          url('/images/heropic.png')
        `,
      }}
    >
      {/* =====================================================
          AMBIENT OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_100%)]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          mx-auto flex max-w-4xl
          flex-col items-center
          px-5
          text-center text-white
        "
      >
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mb-5
            inline-flex items-center gap-2
            rounded-full
            border border-white/20
            bg-black/15
            px-4 py-2
            backdrop-blur-md
          "
        >
          <span className="h-2 w-2 rounded-full bg-terracotta-400 shadow-[0_0_12px_rgba(228,114,60,0.8)]" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            Elta Quad
          </span>
        </motion.div>

        {/* Weather */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="mb-7"
        >
          <WeatherWidget />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7 }}
          className="
            max-w-4xl
            text-2xl
            font-black
            leading-[0.98]
            tracking-[-0.04em]
            drop-shadow-2xl
            md:text-4xl
            lg:text-[2.75rem]
          "
        >
          {t("hero_title1")}

          <br />

          <span className="text-terracotta-400">
            {t("hero_title2")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7 }}
          className="
            mt-6
            max-w-2xl
            text-base
            leading-relaxed
            text-sand-100/90
            drop-shadow-lg
            md:text-base
          "
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7 }}
          className="mt-9 flex items-center gap-3"
        >
          {/* Main CTA */}
          <motion.a
            href="#reservation"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              inline-flex items-center
              gap-3
              rounded-xl
              bg-terracotta-500
              px-5 py-2.5
              text-sm
              font-bold
              text-white
              shadow-xl
              shadow-black/20
              transition-all duration-300
              hover:bg-terracotta-600
              hover:shadow-2xl
              hover:shadow-terracotta-500/20
              md:text-sm
            "
          >
            {t("hero_cta")}

            <span
              className="
                flex h-5 w-5
                items-center justify-center
                rounded-lg
                bg-white/15
              "
            >
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Elta Quad sur Instagram"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex h-[40px] w-[40px]
              items-center justify-center
              rounded-xl
              border border-white/25
              bg-white/10
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:border-white/40
              hover:bg-white/20
            "
          >
            <InstagramIcon size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#fleet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="
          absolute
          bottom-24
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/60
          transition-colors
          hover:text-white
          md:flex
        "
        aria-label="Découvrir la suite"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Découvrir
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>

      {/* Elegant desert wave transition */}
<div
  className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
  aria-hidden="true"
>
  <svg
    className="relative block h-[90px] w-full md:h-[120px]"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    {/* Soft shadow / depth */}
    <path
      d="
        M0 78
        C160 35 300 45 450 75
        C610 107 760 105 900 68
        C1050 28 1190 30 1440 68
        L1440 120
        L0 120
        Z
      "
      fill="rgba(0,0,0,0.14)"
      transform="translate(0, 6)"
    />

    {/* Main elegant wave */}
    <path
      d="
        M0 72
        C150 25 300 34 450 67
        C610 101 760 101 900 63
        C1050 23 1190 25 1440 63
        L1440 120
        L0 120
        Z
      "
      className="fill-sand-50 dark:fill-charcoal-950"
    />

    {/* Secondary soft wave */}
    <path
      d="
        M0 91
        C170 57 315 62 470 84
        C630 106 775 105 930 78
        C1080 52 1220 52 1440 78
        L1440 120
        L0 120
        Z
      "
      className="fill-sand-50 dark:fill-charcoal-950"
      opacity="0.96"
    />
  </svg>
</div>
    </section>
  );
}