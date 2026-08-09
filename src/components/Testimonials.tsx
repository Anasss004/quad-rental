import { Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
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

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
        Ce qu&apos;en disent nos clients
      </h2>
      <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-12 max-w-md mx-auto">
        Avis d&apos;exemple — remplacez par de vrais avis clients Elta Quad.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="rounded-xl p-6 bg-white dark:bg-charcoal-900 border border-charcoal-950/10 dark:border-sand-50/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-terracotta-500 text-terracotta-500" />
                ))}
              </div>
              <p className="text-charcoal-700/80 dark:text-sand-100/80 text-sm mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
