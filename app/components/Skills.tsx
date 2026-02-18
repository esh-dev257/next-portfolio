"use client";

import { useState } from "react";
import {
  Cpu,
  Code,
  Database,
  Globe,
  Wrench,
  Zap,
  ChevronRight,
  Star,
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
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
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
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 90 },
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
    items: [{ name: "Git", level: 85 }],
  },
];

const PixelBar: React.FC<{ level: number; colorClass: string }> = ({
  level,
  colorClass,
}) => {
  const totalBlocks = 10;
  const filledBlocks = Math.round(level / 10);

  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: totalBlocks }).map((_, i) => (
        <div
          key={i}
          className={`h-4 w-3 transition-all duration-300 ${
            i < filledBlocks ? colorClass : "bg-slate-700/50"
          }`}
          style={{
            opacity: i < filledBlocks ? 0.5 + (i / filledBlocks) * 0.5 : 0.2,
          }}
        />
      ))}
      <span className="font-pixel text-[10px] text-gray-400 ml-2 w-8">
        {level}%
      </span>
    </div>
  );
};

const getLevelTitle = (level: number): { title: string; stars: number } => {
  if (level >= 90) return { title: "MASTER", stars: 5 };
  if (level >= 80) return { title: "EXPERT", stars: 4 };
  if (level >= 70) return { title: "ADEPT", stars: 3 };
  if (level >= 60) return { title: "SKILLED", stars: 2 };
  return { title: "NOVICE", stars: 1 };
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

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
              flex items-center gap-2
              ${
                activeCategory === idx
                  ? `${cat.borderColor} ${cat.textColor} bg-slate-800 scale-105`
                  : "border-slate-600 text-gray-500 bg-slate-900 hover:border-slate-400 hover:text-gray-300"
              }
            `}
          >
            {cat.icon}
            {cat.title}
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="relative">
        {/* Decorative corner brackets */}
        <div
          className={`absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 ${categories[activeCategory].borderColor}`}
        />
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 ${categories[activeCategory].borderColor}`}
        />
        <div
          className={`absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 ${categories[activeCategory].borderColor}`}
        />
        <div
          className={`absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 ${categories[activeCategory].borderColor}`}
        />

        <div className="bg-slate-900/80 border-2 border-slate-700 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700">
            <div
              className={`p-2 ${categories[activeCategory].bgTintColor} border ${categories[activeCategory].borderColor}`}
            >
              {categories[activeCategory].icon}
            </div>
            <div>
              <h3
                className={`font-pixel text-lg ${categories[activeCategory].textColor}`}
              >
                {categories[activeCategory].title}
              </h3>
              <p className="font-retro text-xs text-gray-500 mt-1">
                {categories[activeCategory].items.length} skills unlocked
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Zap size={14} className={categories[activeCategory].textColor} />
              <span
                className={`font-pixel text-xs ${categories[activeCategory].textColor}`}
              >
                LVL{" "}
                {Math.round(
                  categories[activeCategory].items.reduce(
                    (a, b) => a + b.level,
                    0,
                  ) / categories[activeCategory].items.length,
                )}
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories[activeCategory].items.map((skill, sIdx) => {
              const { title, stars } = getLevelTitle(skill.level);
              return (
                <div
                  key={sIdx}
                  className={`
                    group relative bg-slate-800/50 border border-slate-700 p-4
                    hover:border-slate-500 hover:bg-slate-800 transition-all duration-300
                    ${categories[activeCategory].hoverGlowClass}
                  `}
                  style={{ animationDelay: `${sIdx * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ChevronRight
                        size={14}
                        className={`${categories[activeCategory].textColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="font-retro text-lg text-white group-hover:text-retro-cyan transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`font-pixel text-[10px] px-2 py-0.5 border ${categories[activeCategory].borderColor} ${categories[activeCategory].textColor} bg-slate-900`}
                    >
                      {title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <PixelBar
                      level={skill.level}
                      colorClass={categories[activeCategory].bgColor}
                    />
                    <div className="flex gap-0.5 ml-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={
                            i < stars
                              ? `${categories[activeCategory].textColor} fill-current`
                              : "text-slate-700"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Stats */}
          <div className="mt-8 pt-4 border-t border-slate-700 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <p
                className={`font-pixel text-2xl ${categories[activeCategory].textColor}`}
              >
                {
                  categories[activeCategory].items.filter((s) => s.level >= 90)
                    .length
                }
              </p>
              <p className="font-pixel text-[10px] text-gray-500 mt-1">
                MASTERED
              </p>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <p
                className={`font-pixel text-2xl ${categories[activeCategory].textColor}`}
              >
                {
                  categories[activeCategory].items.filter((s) => s.level >= 70)
                    .length
                }
              </p>
              <p className="font-pixel text-[10px] text-gray-500 mt-1">
                PROFICIENT
              </p>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <p
                className={`font-pixel text-2xl ${categories[activeCategory].textColor}`}
              >
                {Math.round(
                  categories[activeCategory].items.reduce(
                    (a, b) => a + b.level,
                    0,
                  ) / categories[activeCategory].items.length,
                )}
                %
              </p>
              <p className="font-pixel text-[10px] text-gray-500 mt-1">
                AVG POWER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
