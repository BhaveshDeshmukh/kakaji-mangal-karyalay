import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#5A0E0E]/95 to-[#3B0909]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-b border-gold/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-1">

        <a href="#home">
          <div className="flex items-center gap-4 cursor-pointer">

            <div className="relative flex items-center justify-center">

              <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-gold/10 blur-2xl rounded-full"></div>

              <img
                src={logo}
                alt="Kakaji Logo"
                className="relative w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(212,160,23,0.35)]"
              />

            </div>

            <div className="hidden md:block">

              <p className="text-gold text-sm tracking-[5px] uppercase font-semibold">
                Kakaji
              </p>

              <p className="text-cream text-[10px] tracking-[4px] uppercase mt-1">
                Luxury Celebrations
              </p>

            </div>

          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-cream text-xs uppercase tracking-[3px] font-medium">

          <a
            href="#home"
            className="hover:text-gold transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-gold transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-gold transition duration-300"
          >
            Services
          </a>

          <a
            href="#facilities"
            className="hover:text-gold transition duration-300"
          >
            Facilities
          </a>

          <a
            href="#footer"
            className="hover:text-gold transition duration-300"
          >
            Contact
          </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden bg-[#5A0E0E]/95 backdrop-blur-xl px-8 py-8 flex flex-col gap-6 text-cream uppercase tracking-[3px] text-sm font-medium border-t border-gold/10">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            Services
          </a>

          <a
            href="#facilities"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            Facilities
          </a>

          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            Gallery
          </a>

          <a
            href="#footer"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gold transition duration-300"
          >
            Contact
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;