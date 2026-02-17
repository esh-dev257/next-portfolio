"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { Monitor, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import RetroButton from "./RetroButton";

import Educerns from "../../public/educerns.png";
import Vizuara from "../../public/vizuara.ai.png";
import FirstPrincipleLabs from "../../public/first-principle-labs.png";
import ResearchVizuara from "../../public/research-vizuara.png";

const RecentWork: React.FC = () => {
  const works = [
    {
      title: "Vizuara",
      url: "https://vizuara.com",
      status: "Production",
      tech: ["React", "Firebase"],
      color: "border-retro-green",
      desc: "Led migration from WordPress to a scalable React + Firebase architecture, improving performance and enhancing user experience for 10,000+ monthly users.",
      img: Vizuara,
    },
    {
      title: "Fly-Videsh",
      url: "https://flyvidesh.online",
      status: "Production",
      tech: ["React", "Firebase"],
      color: "border-retro-green",
      desc: "Designed and developed a high-conversion, responsive platform with optimized UI components and seamless cross-browser compatibility.",
      img: Vizuara,
    },
    {
      title: "First Principle Labs",
      url: "https://firstprinciplelabs.ai/",
      status: "Live",
      tech: ["React", "Tailwind"],
      color: "border-retro-purple",
      desc: "Architected and built the platform from scratch using modular React components and clean UI design for industry professionals.",
      img: FirstPrincipleLabs,
    },
    {
      title: "Research Vizuara",
      url: "https://research.vizuara.ai/",
      status: "Live",
      tech: ["Next.js", "Tailwind", "Firebase"],
      color: "border-retro-green",
      desc: "Engineered a dynamic research platform with complex state management, admin workflows, and performance-optimized UI.",
      img: ResearchVizuara,
    },
    {
      title: "Educerns",
      url: "https://educerns.org/",
      status: "Live",
      tech: ["React.js", "Tailwind", "MongoDB", "Node.js", "Express"],
      color: "border-retro-purple",
      desc: "Developed and optimized full-stack features including responsive UI, backend integration, and performance improvements for Pan-India users.",
      img: Educerns,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds

    // Cleanup interval on unmount or when currentIndex changes
    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer when user manually navigates

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentWork = works[currentIndex];

  return (
    <section
      id="recent-work"
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-gray-700"
    >
      <SectionHeader title="Live Deployments" icon={<Monitor size={32} />} />

      <div className="relative flex items-center justify-center gap-4 md:gap-8">
        {/* Prev Button (Desktop) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex bg-slate-800 p-2 border-2 border-white hover:bg-slate-700 active:scale-95 transition-all text-white"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Carousel Container */}
        <div
          className="w-full max-w-3xl flex flex-col items-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Monitor Frame */}
          <div className="bg-[#2c2c2c] p-6 rounded-[2rem] border-b-8 border-r-8 border-[#1a1a1a] shadow-2xl relative w-full">
            {/* Power Light */}
            <div className="absolute bottom-4 right-8 w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></div>

            {/* Screen Bezel */}
            <div className="bg-[#0f0f0f] p-2 rounded-xl shadow-inner border-4 border-[#1f1f1f]">
              {/* Screen Container with Curvature */}
              <div className="bg-black overflow-hidden relative aspect-video rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-gray-800 group">
                {/* Content (Image Preview) */}
                <div className="w-full h-full relative z-0">
                  <Image
                    key={currentWork.title}
                    src={currentWork.img}
                    alt={`${currentWork.title} Preview`}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* CRT Effects */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
                  {/* Flicker */}
                  <div className="absolute inset-0 bg-white opacity-[0.02] animate-pulse"></div>
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,0.5)_100%)]"></div>
                  {/* Curved Glass Reflection */}
                  <div className="absolute top-0 right-0 w-full h-16 bg-linear-to-b from-white/5 to-transparent skew-x-12"></div>
                </div>

                {/* Info Overlay (Visible on Hover or Active) */}
                <div className="absolute bottom-0 left-0 w-full bg-black/80 border-t border-retro-green p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-center backdrop-blur-sm">
                  <div>
                    <h3 className="font-pixel text-white text-sm sm:text-lg">
                      {currentWork.title}
                    </h3>
                    <p className="font-retro text-retro-green text-sm">
                      {currentWork.desc}
                    </p>
                  </div>
                  <a
                    href={currentWork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RetroButton variant="primary" className="text-[10px] py-2">
                      <span className="flex items-center gap-1">
                        VISIT <ExternalLink size={12} />
                      </span>
                    </RetroButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Monitor Brand */}
            <div className="text-center mt-1">
              <span className="font-pixel text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                Sony Trinitron
              </span>
            </div>
          </div>

          {/* Mobile Controls & Indicator */}
          <div className="flex justify-between items-center w-full mt-4 md:hidden px-4">
            <button
              onClick={prevSlide}
              className="bg-slate-800 p-2 border border-white text-white"
            >
              <ChevronLeft />
            </button>
            <span className="font-pixel text-xs text-white">
              {currentIndex + 1} / {works.length}
            </span>
            <button
              onClick={nextSlide}
              className="bg-slate-800 p-2 border border-white text-white"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Tech Stack Tags (Below Monitor) */}
          <div
            className={`mt-6 flex flex-wrap justify-center gap-2 transition-all duration-300`}
          >
            {currentWork.tech.map((t) => (
              <span
                key={t}
                className={`font-pixel text-xs px-3 py-1 border-2 bg-slate-900 text-white ${currentWork.color.replace("border", "border")}`}
              >
                {t}
              </span>
            ))}
            <span className="font-pixel text-xs px-3 py-1 bg-retro-green text-black border-2 border-white animate-pulse">
              {currentWork.status}
            </span>
          </div>
        </div>

        {/* Next Button (Desktop) */}
        <button
          onClick={nextSlide}
          className="hidden md:flex bg-slate-800 p-2 border-2 border-white hover:bg-slate-700 active:scale-95 transition-all text-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default RecentWork;
