"use client";

import { MapPin, Users, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const routes = [
  { label: "Carrefour Targa", price: "20€" },
  { label: "Guéliz (Carré Eden)", price: "30€" },
];

const WHATSAPP_PHONE = "212664350232";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite réserver un transfert aller-retour."
);

export default function TransferSection() {
  return (
    <section id="transfer" className="py-20 md:py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
        Transfert Aller-Retour
      </h2>
      <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-12 max-w-md mx-auto">
        Véhicule 7 places, confortable et climatisé, pour rejoindre notre base de départ.
      </p>

      <Reveal>
        <div className="max-w-4xl mx-auto bg-white dark:bg-charcoal-900 border border-charcoal-950/10 dark:border-sand-50/10 rounded-xl overflow-hidden md:flex">
          <div className="relative md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/transfer.jpeg"
              alt="Véhicule de transfert 7 places Elta Quad"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta-600 dark:text-terracotta-400 mb-3">
              <Users size={14} />
              Jusqu'à 7 personnes
            </span>

            <ul className="space-y-3 mb-6">
              {routes.map((route) => (
                <li
                  key={route.label}
                  className="flex items-center justify-between border-b border-dashed border-charcoal-950/10 dark:border-sand-50/10 pb-3"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <MapPin size={14} className="text-terracotta-500" />
                    {route.label}
                  </span>
                  <span className="text-xl font-extrabold text-terracotta-600 dark:text-terracotta-400">
                    {route.price}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white font-semibold px-5 py-3 rounded-lg transition"
            >
              <MessageCircle size={18} fill="white" strokeWidth={0} />
              Réserver ce transfert
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
