import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Solution" },
  { href: "/blogs", label: "Blogs" },
  { href: "/Event", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg font-sans hover:border-b-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="text-blue-400">One</span>Alumni
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-xl font-semibold text-gray-800">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group"
            >
              <span className="transition-colors group-hover:text-blue-600">
                {l.label}
              </span>
              {/* underline animation */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 bg-transparent border-2 border-blue-600 text-blue-600 
                       hover:bg-blue-600 hover:text-white rounded-full font-bold shadow-md 
                       transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white 
                       rounded-full font-bold shadow-lg transition duration-300"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XMarkIcon className="h-7 w-7 text-gray-800" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-6 py-6 flex flex-col gap-4 bg-white shadow-md">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-lg font-semibold text-gray-900 py-2 
                           hover:text-blue-600 transition group"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <Link
                href="/login"
                className="flex-1 px-5 py-2 border-2 border-blue-600 text-blue-600 
                           hover:bg-blue-600 hover:text-white rounded-full text-center font-bold 
                           transition duration-300"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex-1 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white 
                           rounded-full text-center font-bold shadow-md transition"
                onClick={() => setOpen(false)}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
