import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80",
    alt: "Badminton player performing a jump smash",
  },
  {
    src: "https://images.unsplash.com/photo-1722003180803-577efd6d2ecc?auto=format&fit=crop&w=800&q=80",
    alt: "Badminton racket with white shuttle",
  },
  {
    src: "https://images.unsplash.com/photo-1564226803380-91139fdcb4d0?auto=format&fit=crop&w=800&q=80",
    alt: "White badminton shuttlecock",
  },
  {
    src: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=800&q=80",
    alt: "Shuttlecock on badminton racket",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-tight">
            Life at the Club
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Action, energy, and community on every court.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "h-64 sm:h-full min-h-[320px]" : "h-48 sm:h-56"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
