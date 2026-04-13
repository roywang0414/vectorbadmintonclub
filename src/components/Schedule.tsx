const schedule = [
  {
    month: "April",
    dates: ["April 5", "April 12", "April 19", "April 26"],
  },
  {
    month: "May",
    dates: ["May 3", "May 10", "May 17", "May 31"],
  },
  {
    month: "June",
    dates: ["June 7", "June 14", "June 21"],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Session Schedule
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Apr 5 &ndash; Jun 21, 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5:30 PM &ndash; 7:30 PM
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {schedule.map((block) => (
            <div
              key={block.month}
              className="bg-white/10 backdrop-blur rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {block.month}
              </h3>
              <ul className="space-y-0">
                {block.dates.map((date) => (
                  <li
                    key={date}
                    className="py-3 border-b border-white/10 last:border-0 text-gray-200 font-medium"
                  >
                    {date}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/vZbirzMnccSWyS8f6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
