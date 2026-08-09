"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quel âge minimum pour conduire un quad ?",
    a: "Il faut avoir 16 ans minimum et être titulaire du permis AM (ou équivalent) pour conduire seul. Les mineurs doivent être accompagnés d'un adulte responsable.",
  },
  {
    q: "Le matériel de sécurité est-il fourni ?",
    a: "Oui, casque et gants sont fournis gratuitement pour chaque participant. Nous recommandons de porter des vêtements couvrants et des chaussures fermées.",
  },
  {
    q: "Que se passe-t-il en cas de mauvais temps ?",
    a: "En cas de conditions dangereuses (fortes pluies, orage), nous vous proposons de reporter gratuitement votre créneau.",
  },
  {
    q: "Puis-je annuler ou modifier ma réservation ?",
    a: "Oui, un lien d'annulation est inclus dans votre email de confirmation. Vous pouvez aussi nous contacter directement par téléphone ou WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-sand-100 dark:bg-charcoal-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className="border border-charcoal-950/10 dark:border-sand-50/10 rounded-lg bg-white dark:bg-charcoal-950 overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-4 font-medium flex justify-between items-center gap-4"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  {f.q}
                  <Plus
                    size={18}
                    className={`shrink-0 text-terracotta-600 dark:text-terracotta-400 transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-4 text-sm text-charcoal-700/70 dark:text-sand-200/60">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
