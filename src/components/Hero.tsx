import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1920&q=80"
        alt="Badminton court with dramatic lighting"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          Coquitlam, British Columbia
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight tracking-tight">
          Vector Your Way to Smashing Times{" "}<br/>
          <span className="text-blue-400">one shuttle at a time</span>
        </h1>
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          From backyard fun to Olympic dreams, Vector Badminton Club brings the
          energy. Founded in 2008, our volunteer coaches help kids build skills,
          confidence, and a love for the game.
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-300 font-semibold">
          Ages 7 &ndash; 18 &mdash; come play, improve, and maybe even out-smash your
          parents!
        </p>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://forms.gle/vZbirzMnccSWyS8f6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-lg transition-colors"
          >
            Join a Session
          </a>
          <a
            href="#vision"
            className="inline-block border-2 border-white/40 hover:border-white text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
