export default function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            More than just a game,{" "}
            <span className="text-blue-600">it&apos;s a community</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Vector Badminton Club, every member is coached with care,
            challenged at the right pace, and celebrated for effort as much as
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 border border-blue-100">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe badminton can shape strong, confident young people. Our
              goal is simple: create a positive sports community where players
              learn discipline, teamwork, and joy in movement &mdash; on and off the
              court.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 border border-blue-100">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Our History
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vector Badminton Club began in 2008 with coach Syd Sydorak&apos;s
              mission to provide quality badminton training for youth in
              Coquitlam. With more than 40 years of coaching experience, Syd
              built the club on volunteer spirit, inclusive coaching, and a
              passion for helping kids grow through sport.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Today, VBC continues that tradition by welcoming ages 7 to 18 into
              a high-energy, supportive environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
