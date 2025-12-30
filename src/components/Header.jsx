import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Classical", path: "/category/Classical" },
    { name: "Bollywood", path: "/category/Bollywood" },
    { name: "Indie", path: "/category/Indie" },
    { name: "Fusion", path: "/category/Fusion" },
  ];

  return (
    <>
      {/* Hamesha solid white background, glass effect ke sath */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Logo - Always Dark/Orange */}
            <Link to="/" className="flex items-center gap-2 group outline-none">
              <span className="text-2xl transform group-hover:rotate-12 transition-transform">
                🎹
              </span>
              <span className="text-xl font-black tracking-tighter text-gray-900">
                Raga<span className="text-orange-500">Rhythm</span>
              </span>
            </Link>

            {/* Desktop Nav - Always Gray/Orange */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${location.pathname === link.path ? "text-orange-600" : "text-gray-600 hover:text-orange-600"
                    }`}
                >
                  {link.name}
                  {/* Underline Indicator */}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </Link>
              ))}
            </div>

            {/* Right Side CTA */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setIsAuthOpen(true)}
                className="px-8 py-2.5 rounded-full bg-gray-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-gray-900/10 hover:shadow-orange-600/20"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Solid White Slide Down */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-bold ${location.pathname === link.path ? "text-orange-600" : "text-gray-900"}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => { setIsAuthOpen(true); setIsMenuOpen(false); }}
                className="w-full mt-4 px-6 py-4 rounded-full bg-gray-900 text-white font-bold uppercase tracking-widest text-xs"
              >
                Sign In / Up
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;