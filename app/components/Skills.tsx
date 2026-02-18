"use client";

import { useState } from "react";
import {
  Cpu,
  Globe,
  Database,
  Wrench,
  ChevronRight,
  Terminal,
  Sparkles,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    title: "Frontend",
    icon: <Globe size={20} />,
    color: "retro-cyan",
    borderColor: "border-retro-cyan",
    bgColor: "bg-retro-cyan",
    textColor: "text-retro-cyan",
    hoverGlowClass: "hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
    bgTintColor: "bg-retro-cyan/20",
    shadowColor: "shadow-retro-cyan/20",
    description: "Crafting pixel-perfect interfaces",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    icon: <Database size={20} />,
    color: "retro-green",
    borderColor: "border-retro-green",
    bgColor: "bg-retro-green",
    textColor: "text-retro-green",
    hoverGlowClass: "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    bgTintColor: "bg-retro-green/20",
    shadowColor: "shadow-retro-green/20",
    description: "Building robust server systems",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench size={20} />,
    color: "retro-purple",
    borderColor: "border-retro-purple",
    bgColor: "bg-retro-purple",
    textColor: "text-retro-purple",
    hoverGlowClass: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    bgTintColor: "bg-retro-purple/20",
    shadowColor: "shadow-retro-purple/20",
    description: "Essential dev toolkit",
    items: [{ name: "Git", icon: "📦" }],
  },
];

const SkillCard: React.FC<{
  skill: { name: string; icon: string };
  category: (typeof categories)[0];
  index: number;
}> = ({ skill, category, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative bg-slate-800/50 border border-slate-700 p-4
        hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-500
        ${category.hoverGlowClass} cursor-default overflow-hidden
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated scan line on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent
          transition-transform duration-700 ${isHovered ? "translate-y-full" : "-translate-y-full"}`}
      />

      {/* Corner accents */}
      <div
        className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${category.borderColor} 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div
        className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${category.borderColor}
          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div
        className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${category.borderColor}
          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div
        className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${category.borderColor}
          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Background glow pulse */}
      <div
        className={`absolute -inset-1 ${category.bgTintColor} opacity-0 group-hover:opacity-100 
          blur-xl transition-opacity duration-500 -z-10`}
      />

      <div className="relative flex items-center gap-3">
        {/* Icon container */}
        <div
          className={`
            w-10 h-10 flex items-center justify-center text-lg
            border ${category.borderColor} ${category.bgTintColor}
            group-hover:scale-110 transition-transform duration-300
          `}
        >
          {skill.icon}
        </div>

        {/* Skill name */}
        <div className="flex-1">
          <span
            className={`font-retro text-base text-gray-300 group-hover:${category.textColor} transition-colors duration-300`}
          >
            {skill.name}
          </span>

          {/* Animated underline */}
          <div className="mt-1 h-px w-0 group-hover:w-full transition-all duration-500">
            <div className={`h-full ${category.bgColor}`} />
          </div>
        </div>

        {/* Chevron */}
        <ChevronRight
          size={16}
          className={`${category.textColor} opacity-0 group-hover:opacity-100 
            -translate-x-2 group-hover:translate-x-0 transition-all duration-300`}
        />
      </div>

      {/* Decorative pixel dots */}
      <div className="absolute bottom-1 right-2 flex gap-1 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 ${category.bgColor}`}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeCat = categories[activeCategory];

  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader title="Skill Tree" icon={<Cpu size={32} />} />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`
              font-pixel text-sm px-6 py-3 border-4 transition-all duration-300
              flex items-center gap-2 relative overflow-hidden
              ${
                activeCategory === idx
                  ? `${cat.borderColor} ${cat.textColor} bg-slate-800 scale-105`
                  : "border-slate-600 text-gray-500 bg-slate-900 hover:border-slate-400 hover:text-gray-300"
              }
            `}
          >
            {/* Active tab glow */}
            {activeCategory === idx && (
              <div
                className={`absolute inset-0 ${cat.bgTintColor} opacity-30`}
              />
            )}
            <span className="relative">{cat.icon}</span>
            <span className="relative">{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="relative">
        {/* Decorative corner brackets */}
        <div
          className={`absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 ${activeCat.borderColor}`}
        />
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 ${activeCat.borderColor}`}
        />
        <div
          className={`absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 ${activeCat.borderColor}`}
        />
        <div
          className={`absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 ${activeCat.borderColor}`}
        />

        <div className="bg-slate-900/80 border-2 border-slate-700 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700">
            <div
              className={`p-2 ${activeCat.bgTintColor} border ${activeCat.borderColor}
                shadow-lg ${activeCat.shadowColor}`}
            >
              {activeCat.icon}
            </div>
            <div>
              <h3 className={`font-pixel text-lg ${activeCat.textColor}`}>
                {activeCat.title}
              </h3>
              <p className="font-retro text-xs text-gray-500 mt-1">
                {activeCat.description}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Sparkles size={14} className={activeCat.textColor} />
              <span className={`font-pixel text-xs ${activeCat.textColor}`}>
                {activeCat.items.length} UNLOCKED
              </span>
            </div>
          </div>

          {/* Terminal-style decorator */}
          <div className="flex items-center gap-2 mb-4 px-2">
            <Terminal size={12} className="text-gray-600" />
            <span className="font-pixel text-[10px] text-gray-600">
              ~/skills/{activeCat.title.toLowerCase().replace(/ & /g, "-")}
            </span>
            <span className="font-pixel text-[10px] text-gray-600 animate-pulse">
              █
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCat.items.map((skill, sIdx) => (
              <SkillCard
                key={sIdx}
                skill={skill}
                category={activeCat}
                index={sIdx}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-slate-700">
            <div className="flex items-center justify-center gap-3">
              {/* Animated dots */}
              <div className="flex gap-1">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`w-3 h-3 border transition-all duration-300 ${
                      activeCategory === idx
                        ? `${cat.bgColor} ${cat.borderColor} scale-125`
                        : "bg-slate-800 border-slate-600 hover:border-slate-400"
                    }`}
                  />
                ))}
              </div>

              <div className="w-px h-4 bg-slate-700" />

              {/* Total skills count */}
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[10px] text-gray-500">
                  TOTAL ARSENAL:
                </span>
                <span className={`font-pixel text-sm ${activeCat.textColor}`}>
                  {categories.reduce((acc, cat) => acc + cat.items.length, 0)}{" "}
                  SKILLS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}