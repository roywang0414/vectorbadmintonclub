// Session dates for the Apr 5 – Jun 21, 2026 season (Sundays)
const sessionDates: Record<number, number[]> = {
  4: [5, 12, 19, 26],   // April
  5: [3, 10, 17, 31],   // May
  6: [7, 14, 21],        // June
};

// Non-session Sundays within the season window
const nonSessionSundays: Record<number, number[]> = {
  5: [24],   // May 24
  6: [28],   // June 28
};

const months = [
  { month: 4, year: 2026, name: "April" },
  { month: 5, year: 2026, name: "May" },
  { month: 6, year: 2026, name: "June" },
];

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  // 0 = Sunday
  return new Date(year, month - 1, 1).getDay();
}

function MonthCalendar({
  year,
  month,
  name,
}: {
  year: number;
  month: number;
  name: string;
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const sessions = sessionDates[month] || [];
  const noSessionSundays = nonSessionSundays[month] || [];

  // Build calendar grid cells
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  // Pad to fill last row
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/10 p-4 sm:p-6">
      <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">
        {name} {year}
      </h3>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayLabels.map((label) => (
          <div
            key={label}
            className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-1"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="aspect-square" />;
          }

          const isSession = sessions.includes(day);
          const isNoSessionSunday = noSessionSundays.includes(day);

          let cellClass =
            "aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors ";

          if (isSession) {
            // Session Sunday — bright green highlight
            cellClass +=
              "bg-emerald-500 text-white font-bold ring-2 ring-emerald-400/50 shadow-lg shadow-emerald-500/20";
          } else if (isNoSessionSunday) {
            // Non-session Sunday — muted orange/amber
            cellClass +=
              "bg-amber-500/20 text-amber-300 border border-amber-500/30";
          } else {
            // Regular day
            cellClass += "text-gray-300 hover:bg-white/5";
          }

          return (
            <div key={day} className={cellClass}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Apr 5 &ndash; Jun 21, 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
              <svg
                className="w-4 h-4"
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
              Sundays, 5:30 PM &ndash; 7:30 PM
            </span>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {months.map((m) => (
            <MonthCalendar
              key={m.month}
              year={m.year}
              month={m.month}
              name={m.name}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-emerald-500 inline-block" />
            <span className="text-gray-300">Session Day</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-amber-500/30 border border-amber-500/40 inline-block" />
            <span className="text-gray-300">No Session</span>
          </div>
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
