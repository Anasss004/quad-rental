const quads = [
  {
    emoji: "🛵",
    name: "Quad Solo 250cc",
    desc: "Idéal pour une première expérience, facile à prendre en main.",
  },
  {
    emoji: "🏍️",
    name: "Quad Sport 400cc",
    desc: "Plus de puissance pour les amateurs de sensations.",
  },
  {
    emoji: "👥",
    name: "Quad Biplace",
    desc: "Partagez l'aventure à deux, confort et sécurité.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-center">Nos Quads</h2>
      <p className="text-center text-gray-500 mb-12">
        La flotte Elta Quad, adaptée à toutes les envies, du débutant au
        confirmé.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {quads.map((q) => (
          <div
            key={q.name}
            className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">{q.emoji}</div>
            <h3 className="font-bold text-lg mb-2">{q.name}</h3>
            <p className="text-gray-500 text-sm">{q.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-400 mt-8">
        Remplacez ces fiches par vos vrais modèles et photos.
      </p>
    </section>
  );
}
