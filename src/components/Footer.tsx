import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-extrabold tracking-tight">
              Vector Badminton Club
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Building strong, confident young athletes through badminton since
              2008 in Coquitlam, British Columbia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#schedule"
                  className="hover:text-white transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/vZbirzMnccSWyS8f6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="http://vectorbadmintonclub.com/VBC%20consent%20%20and%20waiver%20form_2021-08-08.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Waiver Form
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:register@vectorbadmintonclub.com"
                  className="hover:text-white transition-colors"
                >
                  register@vectorbadmintonclub.com
                </a>
              </li>
              <li>Pinetree Community Centre</li>
              <li>1260 Pinetree Way, Coquitlam BC</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vector Badminton Club &middot; Coquitlam, BC</p>
        </div>
      </div>
    </footer>
  );
}
