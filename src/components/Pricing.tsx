const tiers = [
  { label: "1 heure", price: "40€" },
  { label: "2 heures", price: "70€" },
  { label: "Demi-journée", price: "120€" },
  { label: "Journée complète", price: "200€" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Tarifs à l&apos;heure
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Prix indicatifs Elta Quad — à adapter selon votre activité.
        </p>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {tiers.map((t) => (
            <div key={t.label} className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500 mb-1">{t.label}</p>
              <p className="text-3xl font-bold text-orange-700">{t.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
