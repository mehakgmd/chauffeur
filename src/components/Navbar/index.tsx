import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Fleets", href: "#fleets" },
    { name: "Cooperation", href: "#cooperation" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md pb-6">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          LIMSON
        </a>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:bg-[#5c4a3e] rounded-md px-2 py-3 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#5c4a3e] transition">
<IoIosGlobe size={20} />
              <span className="text-sm font-medium">{language}</span>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-28 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <ul className="text-sm text-white">
                <li>
                  <button
                    onClick={() => setLanguage("ENG")}
                    className="flex items-center gap-2 px-3 py-2 w-full hover:bg-[#5c4a3e]"
                  >
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="ENG"
                      className="w-5 h-4 rounded-sm"
                    />
                    ENG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage("FRA")}
                    className="flex items-center gap-2 px-3 py-2 w-full hover:bg-[#5c4a3e]"
                  >
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      alt="FRA"
                      className="w-5 h-4 rounded-sm"
                    />
                    FRA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage("ESP")}
                    className="flex items-center gap-1 px-3 py-2 w-full hover:bg-[#5c4a3e]"
                  >
                    <img
                      src="https://flagcdn.com/w20/es.png"
                      alt="ESP"
                      className="w-5 h-4 rounded-sm"
                    />
                    ESP
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Auth Buttons */}
          <a
            href="#login"
            className="px-4 py-2 text-sm font-medium text-white hover:bg-[#5c4a3e] rounded-md transition"
          >
            Log in
          </a>
          <a
  href="#signup"
  className="px-4 py-2 bg-[#5c4a3e] text-white text-sm font-semibold rounded-md 
             border border-transparent hover:bg-transparent hover:border-[#5c4a3e] transition"
>
  Sign up
</a>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center py-3 space-y-1 text-white text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:bg-[#5c4a3e] rounded-md px-2 py-3 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="border-t border-gray-700 w-2/3 my-2"></div>

            {/* Mobile Language Dropdown */}
            {/* <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="flag"
                className="w-5 h-4 rounded-sm"
              />
              <span>{language}</span>
            </div> */}

            <a
              href="#login"
            className="px-4 py-2 text-sm font-medium text-white hover:bg-[#5c4a3e] rounded-md transition"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <a
              href="#signup"
className="px-4 py-2 bg-[#5c4a3e] text-white text-sm font-semibold rounded-md 
             border border-transparent hover:bg-transparent hover:border-[#5c4a3e] transition"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
