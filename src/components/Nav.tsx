"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#games", label: "Games" },
  { href: "#about", label: "About" },
  { href: "#belief", label: "Our Promise" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] bg-cream/85 backdrop-blur-[16px] border-b border-parchment transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-coral to-sunshine flex items-center justify-center font-heading text-xl font-extrabold text-white">
            T
          </div>
          <span className="font-heading text-[22px] font-extrabold text-rich-black">
            tapped
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-deep-brown p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading text-[15px] font-semibold text-soft-brown hover:text-coral transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-coral after:rounded-sm after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col absolute top-16 left-0 right-0 bg-cream/[0.98] backdrop-blur-[16px] px-8 py-5 gap-4 border-b border-parchment list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-[15px] font-semibold text-soft-brown hover:text-coral transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
