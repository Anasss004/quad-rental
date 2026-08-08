const photos = [
  "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508776108219-2ea3860f18bd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516934024742-b461ee5df3f1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Galerie</h2>
        <p className="text-center text-gray-500 mb-12">
          Photos d&apos;illustration — remplacez-les par vos propres photos
          d&apos;Elta Quad.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`Sortie quad Elta Quad ${i + 1}`}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg shadow-sm hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
