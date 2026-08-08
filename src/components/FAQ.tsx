"use client";

import { useState } from "react";

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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className="border rounded-lg bg-white overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  {f.q}
                  <span className="text-orange-700 text-xl leading-none">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-4 text-sm text-gray-600">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
