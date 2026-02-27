"use client";

import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import PixelAvatar from "./PixelAvatar";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative border-b-4 border-white p-4 pt-24 md:pt-4"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>

      <div className="bg-retro-bg border-4 border-white p-6 sm:p-10 max-w-5xl w-full shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative z-10 text-center flex flex-col items-center">
        {/* Avatar Section */}
        <div className="mb-6">
          <PixelAvatar />
        </div>

        <h1 className="font-pixel text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white leading-tight sm:leading-relaxed">
          PLAYER:<span className="text-retro-pink block sm:inline mt-2 sm:mt-0">ESHITA BHAWSAR</span>
        </h1>

        <div className="flex items-center justify-center gap-2 sm:gap-3 font-retro text-lg sm:text-3xl md:text-4xl text-retro-green mb-6 sm:mb-8 min-h-[2.5rem] sm:min-h-[2.5rem]">
          <Terminal size={20} className="sm:hidden" />
          <Terminal size={28} className="hidden sm:block md:hidden" />
          <Terminal size={32} className="hidden md:block" />
          <span className="truncate">{text}</span>
          <span className="animate-ping">_</span>
        </div>

        <p className="font-retro text-base sm:text-xl md:text-2xl text-retro-comment max-w-2xl mx-auto leading-relaxed px-2">
          Constructing scalable digital worlds. Specializing in component-driven
          architecture and high-performance React applications.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          <div className="bg-retro-bg border-2 border-slate-600 px-3 py-2 sm:px-4 font-pixel text-[10px] sm:text-xs text-retro-yellow">
            Level: 22
          </div>
          <div className="bg-retro-bg border-2 border-slate-600 px-3 py-2 sm:px-4 font-pixel text-[10px] sm:text-xs text-retro-cyan">
            Class: Engineer
          </div>
          <div className="bg-retro-bg border-2 border-slate-600 px-3 py-2 sm:px-4 font-pixel text-[10px] sm:text-xs text-retro-green">
            Status: Online
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
