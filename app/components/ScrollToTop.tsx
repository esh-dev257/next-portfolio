"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2.5 right-6 z-50 p-3 bg-slate-900/70 border-2 border-retro-green text-retro-green
        shadow-pixel hover:bg-retro-green hover:text-black transition-all duration-300 active:translate-y-1 active:shadow-none
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <i className="hn hn-chevron-up-solid " style={{ fontSize: "20px" }}></i>
    </button>
  );
};

export default ScrollToTop;
