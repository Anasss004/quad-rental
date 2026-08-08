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
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Ce qu&apos;en disent nos clients
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Avis d&apos;exemple — remplacez par de vrais avis clients Elta Quad.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border rounded-xl p-6 shadow-sm bg-white"
          >
            <p className="text-yellow-500 mb-3">★★★★★</p>
            <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="font-semibold text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
