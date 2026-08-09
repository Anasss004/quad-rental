const photos = [
  "/images/quad.png",
  "/images/quad.png",
  "/images/quad.png",
  "/images/quad.png",
  "/images/quad.png",
  "/images/quad.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 bg-sand-100 dark:bg-charcoal-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
          Galerie
        </h2>
        <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-12 max-w-md mx-auto">
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
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}