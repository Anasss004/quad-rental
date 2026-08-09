"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quad } from "@/lib/catalog";

export function QuadCard({ quad, index }: { quad: Quad; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-900">
        <Image
          src={quad.image}
          alt={quad.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />

        <span
          className={`absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border ${
            quad.available
              ? "border-sand-50/40 text-sand-50/90"
              : "border-sand-50/20 bg-charcoal-950/70 text-sand-100/70"
          }`}
        >
          {quad.available ? "Prêt à rouler" : "Complet"}
        </span>

        <span className="absolute top-4 right-4 font-mono text-[10px] text-sand-50/50">
          0{index + 1}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6 text-sand-50">
          <h3 className="font-display font-black text-2xl mb-1">{quad.name}</h3>
          <p className="font-mono text-xs uppercase tracking-eyebrow text-sand-100/70">
            {quad.cc} · {quad.capacity} · {quad.transmission}
          </p>

          <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
            <div className="flex items-center justify-between pt-5 mt-5 border-t border-dashed border-sand-50/30">
              <span className="font-display font-black text-xl text-terracotta-400">
                {quad.pricePerHour}€ / h
              </span>
              <a
                href="#reservation"
                className="group/link inline-flex items-center gap-1.5 text-xs uppercase tracking-eyebrow font-medium border-b border-sand-50 pb-0.5 hover:text-terracotta-400 hover:border-terracotta-400 transition-colors"
              >
                Réserver
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
