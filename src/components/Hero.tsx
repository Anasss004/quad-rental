export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(30,27,18,0.75), rgba(120,72,20,0.55)), url('https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-white">
        <p className="uppercase tracking-widest text-orange-300 font-semibold mb-3">
          Elta Quad
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Location de Quads
          <br />à l&apos;heure
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-100">
          Vivez une sortie ou une randonnée inoubliable. Choisissez votre
          créneau, réservez en ligne, on s&apos;occupe du reste.
        </p>
        <a
          href="#reservation"
          className="inline-block bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-full font-semibold text-lg"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
