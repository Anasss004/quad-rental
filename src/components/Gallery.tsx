"use client";

const photos = [
  "/images/quad.png",
  "/images/elta-quad-gallery-4.jpg",
  "/images/elta-quad-gallery-2.jpg",
  "/images/gallery4.png",
  "/images/gallery6.png",
  "/images/gallery8.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#EDE7DB] py-20 md:py-28"
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-terracotta-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-terracotta-300/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-terracotta-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
              Galerie
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-charcoal-950 md:text-5xl">
            Nos aventures
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-600 md:text-lg">
            Photos d&apos;illustration de nos sorties en quad.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {photos.map((src, i) => (
            <div
              key={src}
              className="
                group
                relative
                h-72
                overflow-hidden
                rounded-2xl
                bg-charcoal-900
                md:h-80
              "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Sortie quad Elta Quad ${i + 1}`}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}