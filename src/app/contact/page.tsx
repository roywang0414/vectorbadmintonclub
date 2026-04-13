import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vector Badminton Club",
  description:
    "Get in touch with Vector Badminton Club in Coquitlam, BC. Find our location, email, and venue details.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero banner */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Have questions about sessions or registration? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re looking to register your child, learn more
                  about our coaching programs, or just want to say hello, reach
                  out any time.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <a
                      href="mailto:register@vectorbadmintonclub.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      register@vectorbadmintonclub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Venue</h3>
                    <p className="text-gray-600">
                      Pinetree Community Centre
                      <br />
                      1260 Pinetree Way, Coquitlam BC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Session Times
                    </h3>
                    <p className="text-gray-600">
                      Saturdays, 5:30 PM &ndash; 7:30 PM
                      <br />
                      Apr 5 &ndash; Jun 21, 2026
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://forms.gle/vZbirzMnccSWyS8f6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
              >
                Register Now
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-full md:min-h-[450px]">
              <iframe
                title="Pinetree Community Centre map"
                src="https://www.google.com/maps?q=Pinetree+Community+Centre,+1260+Pinetree+Way,+Coquitlam+BC&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
