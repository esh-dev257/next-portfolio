"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import {
  BarChart3,
  Github,
  Code2,
  ExternalLink,
  Loader2,
  Calendar,
  TrendingUp,
} from "lucide-react";
import RetroButton from "./RetroButton";
import dynamic from "next/dynamic";

// Render GitHub calendar only on client to avoid SSR/CSR markup mismatch
const GitHubCalendar: any = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar || mod.default || mod,
    ),
  { ssr: false },
);

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface PieChartProps {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

// Custom Retro Pie Chart Component
const RetroPieChart: React.FC<PieChartProps> = ({
  easy,
  medium,
  hard,
  total,
}) => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  if (total === 0) {
    return (
      <div className="w-48 h-48 rounded-full border-4 border-dashed border-slate-600 flex items-center justify-center">
        <span className="font-pixel text-gray-500 text-xs">NO DATA</span>
      </div>
    );
  }

  const easyPercent = (easy / total) * 100;
  const mediumPercent = (medium / total) * 100;
  const hardPercent = (hard / total) * 100;

  // Calculate angles for pie segments
  const easyAngle = (easyPercent / 100) * 360;
  const mediumAngle = (mediumPercent / 100) * 360;
  const hardAngle = (hardPercent / 100) * 360;

  // Helper function to create path for pie segment
  const createPiePath = (
    startAngle: number,
    endAngle: number,
    offset: number = 0,
  ) => {
    const centerX = 90;
    const centerY = 90;
    const radius = 70;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + (radius + offset) * Math.cos(startAngleRad);
    const y1 = centerY + (radius + offset) * Math.sin(startAngleRad);
    const x2 = centerX + (radius + offset) * Math.cos(endAngleRad);
    const y2 = centerY + (radius + offset) * Math.sin(endAngleRad);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${centerX + offset * Math.cos((((startAngle + endAngle) / 2) * Math.PI) / 180)} ${centerY + offset * Math.sin((((startAngle + endAngle) / 2) * Math.PI) / 180)}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      Z
    `;
  };

  return (
    <div className="relative w-48 h-48">
      {/* Outer glow effect (reduced) */}
      <div className="absolute inset-0 rounded-full bg-retro-yellow/5 blur-md" />

      <svg viewBox="0 0 180 180" className="w-full h-full">
        {/* Background circle */}
        <circle
          cx="90"
          cy="90"
          r="70"
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Easy segment - Cyan */}
        <g className="transition-all duration-300 ease-out">
          <path
            d={createPiePath(
              -90,
              -90 + easyAngle,
              hoveredSegment === "easy" ? 8 : 0,
            )}
            fill="#00ffff"
            stroke="#00ffff"
            strokeWidth="2"
            style={{
              filter:
                hoveredSegment === "easy"
                  ? "drop-shadow(0 0 8px rgba(0,255,255,0.8))"
                  : "drop-shadow(0 0 2px rgba(0,255,255,0.4))",
              opacity: hoveredSegment && hoveredSegment !== "easy" ? 0.7 : 1,
            }}
            onMouseEnter={() => setHoveredSegment("easy")}
            onMouseLeave={() => setHoveredSegment(null)}
            className="cursor-pointer"
          />
        </g>

        {/* Medium segment - Yellow */}
        <g className="transition-all duration-300 ease-out">
          <path
            d={createPiePath(
              -90 + easyAngle,
              -90 + easyAngle + mediumAngle,
              hoveredSegment === "medium" ? 8 : 0,
            )}
            fill="#ffd700"
            stroke="#ffd700"
            strokeWidth="2"
            style={{
              filter:
                hoveredSegment === "medium"
                  ? "drop-shadow(0 0 8px rgba(255,215,0,0.8))"
                  : "drop-shadow(0 0 2px rgba(255,215,0,0.4))",
              opacity: hoveredSegment && hoveredSegment !== "medium" ? 0.7 : 1,
            }}
            onMouseEnter={() => setHoveredSegment("medium")}
            onMouseLeave={() => setHoveredSegment(null)}
            className="cursor-pointer"
          />
        </g>

        {/* Hard segment - Pink */}
        <g className="transition-all duration-300 ease-out">
          <path
            d={createPiePath(
              -90 + easyAngle + mediumAngle,
              -90 + easyAngle + mediumAngle + hardAngle,
              hoveredSegment === "hard" ? 8 : 0,
            )}
            fill="#ff6b9d"
            stroke="#ff6b9d"
            strokeWidth="2"
            style={{
              filter:
                hoveredSegment === "hard"
                  ? "drop-shadow(0 0 8px rgba(255,107,157,0.8))"
                  : "drop-shadow(0 0 2px rgba(255,107,157,0.4))",
              opacity: hoveredSegment && hoveredSegment !== "hard" ? 0.7 : 1,
            }}
            onMouseEnter={() => setHoveredSegment("hard")}
            onMouseLeave={() => setHoveredSegment(null)}
            className="cursor-pointer"
          />
        </g>

        {/* Inner circle for donut effect */}
        <circle
          cx="90"
          cy="90"
          r="45"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Center display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-pixel text-3xl text-white">{total}</span>
        <span className="font-pixel text-xs text-gray-400 mt-1">SOLVED</span>
      </div>

      {/* Labels on hover showing per-difficulty counts */}
      {hoveredSegment && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/95 border-2 px-3 py-2 rounded-sm shadow-xl animate-fadeIn">
            {hoveredSegment === "easy" && (
              <div className="text-center">
                <span className="font-pixel text-xs text-cyan-300 block">
                  EASY
                </span>
                <span className="font-pixel text-2xl text-cyan-400">
                  {easy}
                </span>
                <span className="font-pixel text-xs text-gray-400 block">
                  {easyPercent.toFixed(1)}%
                </span>
              </div>
            )}
            {hoveredSegment === "medium" && (
              <div className="text-center">
                <span className="font-pixel text-xs text-yellow-300 block">
                  MEDIUM
                </span>
                <span className="font-pixel text-2xl text-yellow-400">
                  {medium}
                </span>
                <span className="font-pixel text-xs text-gray-400 block">
                  {mediumPercent.toFixed(1)}%
                </span>
              </div>
            )}
            {hoveredSegment === "hard" && (
              <div className="text-center">
                <span className="font-pixel text-xs text-pink-300 block">
                  HARD
                </span>
                <span className="font-pixel text-2xl text-pink-400">
                  {hard}
                </span>
                <span className="font-pixel text-xs text-gray-400 block">
                  {hardPercent.toFixed(1)}%
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Decorative corner pixels */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-retro-green opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-retro-green opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-retro-green opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-retro-green opacity-50" />
    </div>
  );
};

// Legend Item Component
const LegendItem: React.FC<{
  color: string;
  label: string;
  value: number;
  percentage: number;
  glowColor: string;
}> = ({ color, label, value, percentage, glowColor }) => (
  <div className="flex items-center gap-3">
    <div
      className="w-4 h-4 border-2 border-white/30"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 4px ${glowColor}`,
      }}
    />
    <div className="flex-1 flex justify-between items-center">
      <span className="font-retro text-lg text-white">{label}</span>
      <span className="font-pixel text-sm text-gray-300">
        <span style={{ color }}>{value}</span>
        <span className="ml-1 text-gray-500">({percentage.toFixed(1)}%)</span>
      </span>
    </div>
  </div>
);

const Stats: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const LEETCODE_USERNAME = "eshitaaaaaaaa";
  const GITHUB_USERNAME = "esh-dev257";

  const gfgStats = {
    total: 100,
  };

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setLoading(true);

      const fallback = {
        totalSolved: 300,
        easySolved: 120,
        mediumSolved: 150,
        hardSolved: 30,
      };

      try {
        // use a short timeout in case the external API is down or blocked
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`,
          { signal: controller.signal },
        ).catch((err) => {
          console.warn("LeetCode fetch failed (network):", err);
          return null;
        });

        clearTimeout(timeout);

        if (!response) {
          setStats(fallback);
          return;
        }

        if (!response.ok) {
          console.warn("LeetCode API returned non-ok status:", response.status);
          setStats(fallback);
          return;
        }

        const data = await response.json().catch((err) => {
          console.warn("Failed to parse LeetCode response JSON:", err);
          return null;
        });

        if (!data || data.status !== "success") {
          console.warn(
            "LeetCode API responded with error or unexpected shape:",
            data,
          );
          setStats(fallback);
          return;
        }

        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
        });
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.warn("LeetCode fetch aborted due to timeout");
        } else {
          console.warn("Unexpected error fetching LeetCode stats:", err);
        }
        setStats(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  // Calculate percentages based on total solved
  const easyPercent =
    stats.totalSolved > 0 ? (stats.easySolved / stats.totalSolved) * 100 : 0;
  const mediumPercent =
    stats.totalSolved > 0 ? (stats.mediumSolved / stats.totalSolved) * 100 : 0;
  const hardPercent =
    stats.totalSolved > 0 ? (stats.hardSolved / stats.totalSolved) * 100 : 0;

  // Custom theme for GitHub calendar to match retro style
  const retroTheme = {
    dark: ["#0f172a", "#1e3a2e", "#2d5a3d", "#3b7a4c", "#4ade80"],
  };

  // Function to select last 4 months of contributions
  const selectLastMonths = (contributions: any) => {
    const currentDate = new Date();
    const fourMonthsAgo = new Date();
    fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

    return contributions.filter((activity: any) => {
      const activityDate = new Date(activity.date);
      return activityDate >= fourMonthsAgo && activityDate <= currentDate;
    });
  };

  return (
    <section id="stats" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <SectionHeader title="Player Stats" icon={<BarChart3 size={32} />} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Github Activity Card */}
        <div className="bg-slate-900 border-4 border-retro-green p-6 relative flex flex-col h-full">
          <div className="absolute -top-3 left-4 bg-retro-bg px-2">
            <h3 className="flex items-center gap-2 font-pixel text-sm text-retro-green">
              <Github size={16} /> ACTIVITY
            </h3>
          </div>

          <div className="mt-4 grow flex flex-col justify-center">
            {/* Calendar Container */}
            <div className="bg-slate-800 border-2 border-dashed border-slate-700 p-6 rounded-sm w-full h-full flex flex-col justify-center">
              <div className="mb-4">
                <p className="font-pixel text-xs text-gray-400">
                  LAST 4 MONTHS
                </p>
              </div>

              {/* GitHub Calendar with last 4 months */}
              <div
                className="github-calendar-wrapper flex justify-center w-full"
                style={{ fontSize: "14px" }}
              >
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  transformData={selectLastMonths}
                  theme={retroTheme}
                  blockSize={14}
                  blockMargin={4}
                  fontSize={14}
                  renderColorLegend={() => <></>}
                  style={{
                    fontFamily: "monospace",
                    maxWidth: "100%",
                  }}
                />
              </div>

              {/* Custom Legend */}
              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[9px] text-gray-500">
                    LESS
                  </span>
                  <div className="flex gap-1">
                    {[
                      "#0f172a",
                      "#1e3a2e",
                      "#2d5a3d",
                      "#3b7a4c",
                      "#4ade80",
                    ].map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 border border-slate-600"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="font-pixel text-[9px] text-gray-500">
                    MORE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <RetroButton
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
              >
                Visit Github Profile <ExternalLink size={16} />
              </RetroButton>
            </a>
          </div>
        </div>

        {/* LeetCode Stats Card */}
        <div className="bg-slate-900 border-4 border-retro-yellow p-6 relative flex flex-col h-full">
          <div className="absolute -top-3 left-4 bg-retro-bg px-2">
            <h3 className="flex items-center gap-2 font-pixel text-sm text-retro-yellow">
              <Code2 size={16} /> LEETCODE
            </h3>
          </div>

          {loading ? (
            <div className="mt-4 flex flex-col items-center justify-center h-64">
              <Loader2 className="animate-spin text-retro-yellow" size={48} />
              <p className="font-retro text-lg text-gray-400 mt-4">
                Loading stats...
              </p>
              <div className="flex gap-1 mt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-retro-yellow animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center">
              {/* Pie Chart */}
              <div className="mb-6">
                <RetroPieChart
                  easy={stats.easySolved}
                  medium={stats.mediumSolved}
                  hard={stats.hardSolved}
                  total={stats.totalSolved}
                />
              </div>

              {/* Legend */}
              <div className="w-full space-y-3 px-2">
                <LegendItem
                  color="#00ffff"
                  glowColor="rgba(0, 255, 255, 0.4)"
                  label="Easy"
                  value={stats.easySolved}
                  percentage={easyPercent}
                />
                <LegendItem
                  color="#ffd700"
                  glowColor="rgba(255, 215, 0, 0.4)"
                  label="Medium"
                  value={stats.mediumSolved}
                  percentage={mediumPercent}
                />
                <LegendItem
                  color="#ff6b9d"
                  glowColor="rgba(255, 107, 157, 0.4)"
                  label="Hard"
                  value={stats.hardSolved}
                  percentage={hardPercent}
                />
              </div>

              {/* GFG Stats */}
              <div className="w-full text-right pt-4 border-t border-slate-700 mt-4">
                <span className="font-retro text-lg text-gray-400">
                  GeeksForGeeks:{" "}
                  <span className="text-retro-green">{gfgStats.total}+</span>{" "}
                  Solved
                </span>
              </div>
            </div>
          )}

          {/* Profile Button */}
          <div className="mt-auto pt-4 flex justify-center">
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <RetroButton
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                View LeetCode Profile <ExternalLink size={16} />
              </RetroButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
