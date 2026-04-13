"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#schedule", label: "Schedule" },
  {
    href: "https://forms.gle/vZbirzMnccSWyS8f6",
    label: "Registration",
    external: true,
  },
  {
    href: "http://vectorbadmintonclub.com/VBC%20consent%20%20and%20waiver%20form_2021-08-08.pdf",
    label: "Waiver",
    external: true,
  },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
          Vector Badminton Club
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://forms.gle/vZbirzMnccSWyS8f6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Now
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1 bg-white">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-base font-semibold text-gray-700 hover:text-blue-600 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-base font-semibold text-gray-700 hover:text-blue-600 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://forms.gle/vZbirzMnccSWyS8f6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-blue-600 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
}
