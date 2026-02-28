"use client";

import React, { useState, useEffect } from "react";


const navLinks = [
  { href: "#experience", label: "Experience", hoverColor: "hover:text-retro-green" },
  { href: "#recent-work", label: "Live", hoverColor: "hover:text-retro-cyan" },
  { href: "#achievements", label: "Trophies", hoverColor: "hover:text-retro-purple" },
  { href: "#projects", label: "Projects", hoverColor: "hover:text-retro-pink" },
  { href: "#stats", label: "Stats", hoverColor: "hover:text-retro-cyan" },
  { href: "#contact", label: "Contact", hoverColor: "hover:text-retro-purple" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-retro-bg/70 border-b-4 border-white backdrop-blur-md"
            : "bg-retro-bg/90 border-b-4 border-white backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="font-pixel mt-1 text-retro-yellow text-xs sm:text-sm md:text-base animate-pulse"
          >
            &lt;EB/&gt;
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 font-pixel text-[10px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-white ${link.hoverColor} hover:underline transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-white bg-slate-800 hover:bg-slate-700 transition-colors active:translate-y-0.5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <i className="hn hn-times text-retro-pink" style={{ fontSize: '20px' }} ></i>
            ) : (
              <i className="hn hn-bars text-retro-green" style={{ fontSize: '20px' }} ></i>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-[60px] left-0 w-full bg-retro-bg border-b-4 border-white animate-slideDown">
            <div className="flex flex-col items-center py-6 gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`w-full text-center py-3 px-6 font-pixel text-xs text-white ${link.hoverColor} hover:bg-slate-800 transition-all`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
