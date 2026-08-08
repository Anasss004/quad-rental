const steps = [
  {
    emoji: "📅",
    title: "1. Choisissez votre créneau",
    desc: "Date, heure et durée qui vous conviennent.",
  },
  {
    emoji: "📝",
    title: "2. Remplissez le formulaire",
    desc: "Vos coordonnées et le nombre de quads souhaités.",
  },
  {
    emoji: "✅",
    title: "3. Confirmation",
    desc: "Nous confirmons votre rendez-vous par téléphone ou email.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Comment ça marche
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((s) => (
          <div key={s.title}>
            <div className="text-4xl mb-3">{s.emoji}</div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
