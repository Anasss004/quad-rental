export default function MapSection() {
  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Nous trouver</h2>
      <p className="text-center text-gray-500 mb-1">
        📍 Adresse : à compléter
      </p>
      <p className="text-center text-gray-500 mb-1">
        📞 Téléphone : à compléter
      </p>
      <p className="text-center text-gray-500 mb-8">
        ✉️ Email : à compléter
      </p>
      <div className="rounded-xl overflow-hidden shadow-sm border">
        {/*
          Remplacez le src ci-dessous par l'URL d'intégration de VOTRE adresse :
          Google Maps > Rechercher votre adresse > Partager > Intégrer une carte > Copier le HTML
        */}
        <iframe
          title="Localisation Elta Quad"
          src="https://www.google.com/maps?q=quad%20rental&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
