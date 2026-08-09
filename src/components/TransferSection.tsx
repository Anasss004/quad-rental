"use client";

import { MapPin, Users, ArrowRight, Compass } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

const routes = [
  { label: "Carrefour Targa", price: "20€" },
  { label: "Guéliz · Carré Eden", price: "30€" },
];

const WHATSAPP_PHONE = "212664350232";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite réserver un transfert aller-retour."
);

export default function TransferSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-terracotta-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-terracotta-400/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-terracotta-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
                Transfert
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-black tracking-tight text-charcoal-950">
              Commencez l&apos;aventure
              <span className="block text-terracotta-500">
                dès votre départ.
              </span>
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-charcoal-600 max-w-xl">
              Nous venons vous chercher et vous ramener après votre aventure.
              Un transfert simple, confortable et sans prise de tête.
            </p>
          </div>
        </Reveal>

        {/* Main Card */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2rem] border border-charcoal-950/10 bg-white shadow-xl shadow-charcoal-950/5">

            {/* Image */}
            <div className="relative h-[260px] md:h-[340px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/transfer.jpg"
                alt="Véhicule de transfert Elta Quad"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-white/40 px-4 py-2 text-xs font-bold text-charcoal-950 shadow-lg">
                  <Compass
                    size={14}
                    className="text-terracotta-500"
                  />

                  Transfert vers la base
                </div>
              </div>

              {/* Image bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                      Véhicule privé
                    </p>

                    <h3 className="text-lg md:text-xl font-black text-white">
                      Jusqu&apos;à 7 personnes
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-sm text-white/80">
                      <Users size={16} />

                      <span>
                        Confortable · Climatisé · Aller-retour
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-white text-charcoal-950 transition-all duration-300 group-hover:bg-terracotta-500 group-hover:text-white group-hover:border-terracotta-500">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom content */}
            <div className="p-4 md:p-5">

              {/* Departure title */}
              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-full bg-terracotta-50 border border-terracotta-500/10 flex items-center justify-center">
                  <MapPin
                    size={17}
                    className="text-terracotta-500"
                  />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal-400">
                    Points de
                  </p>

                  <p className="text-sm font-bold text-charcoal-950">
                    Départ
                  </p>
                </div>

              </div>

              {/* Departure locations */}
              <div className="grid md:grid-cols-2 gap-3 mb-6">

                {routes.map((route) => (
                  <div
                    key={route.label}
                    className="group/route flex items-center justify-between gap-4 rounded-2xl border border-charcoal-950/10 bg-sand-50/60 px-4 py-4 transition-all duration-300 hover:bg-white hover:border-terracotta-500/30 hover:shadow-md"
                  >

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 shrink-0 rounded-full bg-white border border-charcoal-950/5 flex items-center justify-center">
                        <MapPin
                          size={15}
                          className="text-terracotta-500"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-charcoal-950">
                          {route.label}
                        </p>

                        <p className="text-[11px] text-charcoal-400 mt-0.5">
                          Point de départ
                        </p>
                      </div>

                    </div>

                    <span className="text-base font-black text-terracotta-600">
                      {route.price}
                    </span>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5b] text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <WhatsAppIcon size={19} />

                <span>Réserver mon transfert</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

              <p className="text-center text-[11px] text-charcoal-400 mt-4">
                Réservation rapide par WhatsApp
              </p>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}