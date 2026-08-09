"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";

const experiences = [
  {
    name: "Desert Discovery",
    duration: "1 – 2 heures",
    description:
      "Une première immersion dans les dunes, sur un parcours guidé pensé pour découvrir le désert en toute sérénité — idéal pour débuter.",
    image:
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Sunset Ride",
    duration: "2 heures",
    description:
      "Départ en fin d'après-midi pour rouler face à la lumière dorée du coucher de soleil sur les dunes. L'expérience la plus demandée.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Adventure Tour",
    duration: "Demi-journée",
    description:
      "Un itinéraire plus long à travers vallées et oasis, pour les riders en quête de sensations et de paysages changeants.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Private Experience",
    duration: "Sur-mesure",
    description:
      "Une sortie entièrement personnalisée, en petit groupe ou en solo, avec guide dédié — pour un moment d'exception.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiences" className="bg-sand-50 dark:bg-charcoal-950 py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-20 md:mb-28">
          <SectionLabel index="01">L&apos;expérience</SectionLabel>
          <SectionHeading size="lg" className="uppercase">Le désert. Votre ride.</SectionHeading>
          <p className="text-charcoal-700 dark:text-sand-200/80 mt-6 leading-relaxed">
            Chaque sortie Elta Quad est pensée comme une expérience à part
            entière — pas simplement une location de véhicule.
          </p>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 md:py-20 border-t border-dashed border-charcoal-950/20 dark:border-sand-50/20 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <span className="pointer-events-none select-none absolute -top-4 md:-top-8 right-0 font-display font-black text-charcoal-950/[0.04] dark:text-sand-50/[0.05] text-[8rem] md:text-[11rem] leading-none">
                0{i + 1}
              </span>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-eyebrow text-terracotta-600 dark:text-terracotta-400">
                  {exp.duration}
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-charcoal-950 dark:text-sand-50 mt-3 mb-5">
                  {exp.name}
                </h3>
                <p className="text-charcoal-700 dark:text-sand-200/80 leading-relaxed max-w-md">
                  {exp.description}
                </p>
                <a
                  href="#reservation"
                  className="group inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-eyebrow font-medium text-charcoal-950 dark:text-sand-50 border-b border-current pb-1 hover:text-terracotta-600 dark:hover:text-terracotta-400 hover:border-terracotta-600 dark:hover:border-terracotta-400 transition-colors"
                >
                  Réserver cette expérience
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
