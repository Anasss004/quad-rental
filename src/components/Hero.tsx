"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WeatherWidget from "./WeatherWidget";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(22,18,13,0.75), rgba(120,72,20,0.45)), url('/images/heropic.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 text-white text-center flex flex-col items-center"
      >
        <p className="uppercase tracking-widest text-terracotta-400 font-semibold mb-3 text-sm">
          Elta Quad
        </p>

        <div className="mb-5">
          <WeatherWidget />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-[1.05] tracking-tight">
          {t("hero_title1")}
          <br />
          {t("hero_title2")}
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8 text-sand-100/90">
          {t("hero_subtitle")}
        </p>
        <motion.a
          href="#reservation"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 transition-colors px-7 py-3.5 rounded-lg font-semibold text-base shadow-lg"
        >
          {t("hero_cta")}
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>

      {/* Torn-edge transition into the section below */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-sand-50 dark:text-charcoal-950"
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Soft shadow cast onto the photo, suggesting the torn edge lifts off it */}
        <path
          d="M0,90 L0,34 L45,54 L85,24 L135,50 L175,16 L225,46 L265,20 L315,56 L355,26 L405,52 L445,12 L495,42 L545,18 L595,54 L635,28 L685,48 L725,14 L775,52 L815,22 L865,44 L905,12 L955,50 L995,24 L1045,54 L1085,18 L1135,46 L1175,26 L1200,38 L1200,90 Z"
          fill="black"
          opacity="0.12"
          transform="translate(0, 7)"
        />
        <path
          d="M0,90 L0,34 L45,54 L85,24 L135,50 L175,16 L225,46 L265,20 L315,56 L355,26 L405,52 L445,12 L495,42 L545,18 L595,54 L635,28 L685,48 L725,14 L775,52 L815,22 L865,44 L905,12 L955,50 L995,24 L1045,54 L1085,18 L1135,46 L1175,26 L1200,38 L1200,90 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
