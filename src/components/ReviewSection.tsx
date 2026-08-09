"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";

const stats = [
  { value: "4.9 / 5", label: "Note moyenne" },
  { value: "3 200+", label: "Sorties réalisées" },
  { value: "8 ans", label: "D'expérience" },
  { value: "100%", label: "Guides certifiés" },
];

const reviews = [
  {
    name: "Sarah B.",
    text: "Super sortie en famille, le quad était en excellent état et l'accueil très chaleureux. On recommande Elta Quad !",
  },
  {
    name: "Karim M.",
    text: "Réservation en ligne super simple, confirmation rapide par téléphone. Parfait pour un enterrement de vie de garçon.",
  },
  {
    name: "Julie D.",
    text: "Premier quad de ma vie, on m'a bien expliqué la sécurité avant de partir. Expérience à refaire sans hésiter.",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-sand-50 dark:bg-charcoal-950 py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <SectionLabel index="04">Confiance</SectionLabel>
          <SectionHeading size="lg" className="uppercase">Une réputation forgée dans le sable.</SectionHeading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 pb-16 mb-16 border-b border-dashed border-charcoal-950/20 dark:border-sand-50/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display font-black text-3xl md:text-4xl text-charcoal-950 dark:text-sand-50">
                {s.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/70 mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-terracotta-500 mb-4 text-sm">★★★★★</p>
              <p className="text-charcoal-800 dark:text-sand-100/90 leading-relaxed mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/60">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
