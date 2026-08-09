"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import WeatherWidget from "./WeatherWidget";

const LOCATION_IMAGE =
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=80";

export default function LocationSection() {
  return (
    <section id="location" className="relative bg-charcoal-950 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel index="05">Destination</SectionLabel>
          <h2 className="font-display font-black uppercase text-4xl md:text-5xl text-sand-50 leading-[0.95] mb-6">
            Explorez le Maroc autrement.
          </h2>
          <p className="text-sand-200/80 leading-relaxed max-w-md mb-8">
            Nos sorties partent des portes du désert, à seulement 20 minutes
            de Marrakech. Un point de rendez-vous facile d&apos;accès, pour
            basculer en quelques minutes de la ville aux dunes.
          </p>

          <dl className="space-y-4 mb-8">
            <div className="flex gap-4 text-sm">
              <dt className="w-40 shrink-0 font-mono text-xs uppercase tracking-eyebrow text-terracotta-400">
                Point de RDV
              </dt>
              <dd className="text-sand-100/80">À compléter — adresse exacte</dd>
            </div>
            <div className="flex gap-4 text-sm">
              <dt className="w-40 shrink-0 font-mono text-xs uppercase tracking-eyebrow text-terracotta-400">
                Distance
              </dt>
              <dd className="text-sand-100/80">20 min depuis Marrakech</dd>
            </div>
            <div className="flex gap-4 text-sm">
              <dt className="w-40 shrink-0 font-mono text-xs uppercase tracking-eyebrow text-terracotta-400">
                Prise en charge
              </dt>
              <dd className="text-sand-100/80">Navette disponible sur demande</dd>
            </div>
          </dl>

          <WeatherWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src={LOCATION_IMAGE}
            alt="Paysage désertique près de Marrakech"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div id="contact" className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-16 border-t border-dashed border-sand-50/20">
        <div className="grid md:grid-cols-3 gap-8 text-sand-100/80 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-terracotta-400 mb-2">Adresse</p>
            <p>À compléter</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-terracotta-400 mb-2">Téléphone</p>
            <p>À compléter</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-terracotta-400 mb-2">Email</p>
            <p>À compléter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
