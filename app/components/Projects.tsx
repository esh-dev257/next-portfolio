"use client";

import React, { useState, useEffect, useCallback } from "react";
import SectionHeader from "./SectionHeader";
import titanic from "../../public/titanic.png";
import brain from "../../public/brain-tumor.png";
import trick from "../../public/trick-ai.png";
import handwriting from "../../public/handwriting.png";
import {
  Rocket,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Brain,
  Terminal,
  Ship,
  Scan,
  Fingerprint,
  PenTool,
} from "lucide-react";
import RetroButton from "./RetroButton";
import Image from "next/image";

// ─── ML Projects Data ───
const mlProjects = [
  {
    title: "Titanic Survival Prediction",
    icon: <Ship size={28} />,
    borderColor: "border-retro-purple",
    textColor: "text-retro-purple",
    bgColor: "bg-retro-purple",
    bgTint: "bg-retro-purple/10",
    glowColor: "rgba(168,85,247,0.4)",
    shadowClass: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    description:
      "Machine learning model that predicts passenger survival on the Titanic based on various features. Built using React, Tailwind CSS for the frontend, and Python ML libraries (Scikit-learn, Pandas) for data processing and model training.",
    link: "https://titanic-expedition-ml-theta.vercel.app/",
    tags: [],
    image: titanic,
  },
  {
    title: "Brain Tumor Detection",
    icon: <Scan size={28} />,
    borderColor: "border-retro-green",
    textColor: "text-retro-green",
    bgColor: "bg-retro-green",
    bgTint: "bg-retro-green/10",
    glowColor: "rgba(34,197,94,0.4)",
    shadowClass: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    description:
      "Deep learning model for detecting and classifying brain tumors from MRI scans using CNNs. Built with React and Tailwind CSS for the UI, leveraging Python ML libraries (TensorFlow, Keras) for neural network training and inference.",
    link: "https://brain-tumor-prediction-five.vercel.app/",
    tags: [],
    image: brain,
  },
  {
    title: "Modify Images & Trick AI",
    icon: <Fingerprint size={28} />,
    borderColor: "border-retro-pink",
    textColor: "text-retro-pink",
    bgColor: "bg-retro-pink",
    bgTint: "bg-retro-pink/10",
    glowColor: "rgba(236,72,153,0.4)",
    shadowClass: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    description:
      "Adversarial attack demonstration showing how to modify images to fool AI classification models. Built using React and Tailwind CSS, with Python ML libraries (TensorFlow, NumPy) for adversarial perturbation generation and model manipulation.",
    link: "https://modify-images-and-trick-ai.vercel.app/",
    tags: [],
    image: trick,
  },
  {
    title: "Handwriting Recognition",
    icon: <PenTool size={28} />,
    borderColor: "border-retro-cyan",
    textColor: "text-retro-cyan",
    bgColor: "bg-retro-cyan",
    bgTint: "bg-retro-cyan/10",
    glowColor: "rgba(34,211,238,0.4)",
    shadowClass: "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
    description:
      "Neural network model that recognizes handwritten digits and characters with real-time drawing interface. Developed using React and Tailwind CSS for the interactive UI, powered by Python ML libraries (TensorFlow, Keras) and JavaScript ML (TensorFlow.js) for model inference.",
    link: "https://handwriting-recognition-xi.vercel.app/",
    tags: [],
    image: handwriting,
  },
];

// ─── ML Carousel Component ───
const MLCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const project = mlProjects[current];

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating || index === current) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [isAnimating, current],
  );

  const next = useCallback(() => {
    goTo((current + 1) % mlProjects.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + mlProjects.length) % mlProjects.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Corner brackets */}
      <div className="relative">
        <div
          className={`absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 ${project.borderColor} transition-colors duration-500`}
        />
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 ${project.borderColor} transition-colors duration-500`}
        />
        <div
          className={`absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 ${project.borderColor} transition-colors duration-500`}
        />
        <div
          className={`absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 ${project.borderColor} transition-colors duration-500`}
        />

        <div
          className={`bg-[#1a2328]/90 border-4 ${project.borderColor}
            transition-all duration-500 ${project.shadowClass} relative overflow-hidden`}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${project.glowColor} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 md:px-10 pt-6 relative">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-gray-600" />
              <span className="font-pixel text-[10px] text-gray-600">
                ~/ai-ml/project-{String(current + 1).padStart(2, "0")}
              </span>
              <span className="font-pixel text-[10px] text-gray-600 animate-pulse">
                █
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-pixel text-sm ${project.textColor}`}>
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="font-pixel text-sm text-gray-600">/</span>
              <span className="font-pixel text-sm text-gray-600">
                {String(mlProjects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Main content — Image left, Info right */}
          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-10">
              {/* Image */}
              <div className="md:w-1/2 relative">
                <div
                  className={`relative w-full h-56 md:h-72 border-2 ${project.borderColor} overflow-hidden bg-slate-950 group`}
                >
                  {/* CRT scan lines */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />

                  {/* Glow on hover */}
                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"
                    style={{ backgroundColor: project.glowColor }}
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Image corner accents */}
                  <div
                    className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${project.borderColor} z-10`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${project.borderColor} z-10`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${project.borderColor} z-10`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${project.borderColor} z-10`}
                  />

                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-[5]" />
                </div>
              </div>

              {/* Info */}
              <div className="md:w-1/2 flex flex-col justify-center">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 border-2 ${project.borderColor} ${project.bgTint} ${project.textColor}`}
                  >
                    {project.icon}
                  </div>
                  <h3
                    className={`font-pixel text-xl md:text-2xl ${project.textColor}`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-xs font-pixel border ${project.borderColor} ${project.textColor} ${project.bgTint}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className={`flex-1 h-px ${project.bgColor} opacity-30`}
                  />
                  <div
                    className={`w-1.5 h-1.5 ${project.bgColor} opacity-50`}
                  />
                  <div
                    className={`flex-1 h-px ${project.bgColor} opacity-30`}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-retro">
                  {project.description}
                </p>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start"
                >
                  <RetroButton variant="primary">
                    <span className="flex items-center gap-2">
                      View Project <ExternalLink size={14} />
                    </span>
                  </RetroButton>
                </a>
              </div>
            </div>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 border-2 ${project.borderColor}
              bg-slate-900/90 transition-all duration-300 opacity-60 hover:opacity-100 z-20 group/btn`}
          >
            <ChevronLeft
              size={20}
              className={`${project.textColor} group-hover/btn:scale-110 transition-transform`}
            />
          </button>
          <button
            onClick={next}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 border-2 ${project.borderColor}
              bg-slate-900/90 transition-all duration-300 opacity-60 hover:opacity-100 z-20 group/btn`}
          >
            <ChevronRight
              size={20}
              className={`${project.textColor} group-hover/btn:scale-110 transition-transform`}
            />
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {mlProjects.map((p, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx, idx > current ? "right" : "left")}
            className="relative"
          >
            {current === idx && (
              <div
                className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-full h-0.5 ${p.bgColor}`}
              />
            )}

            <div
              className={`px-3 py-2 border-2 font-pixel text-[10px] transition-all duration-500 ${
                current === idx
                  ? `${p.borderColor} ${p.textColor} ${p.bgTint} ${p.shadowClass}`
                  : "border-slate-700 text-gray-600 bg-slate-900 hover:border-slate-500 hover:text-gray-400"
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </div>

            {current === idx && (
              <div
                className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-full h-0.5 ${p.bgColor}`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 flex justify-center">
        <div className="w-48 h-1 bg-slate-800 overflow-hidden">
          <div
            className={`h-full ${project.bgColor} transition-all duration-500`}
            style={{
              width: `${((current + 1) / mlProjects.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-gray-700"
    >
      <SectionHeader title="Inventory / Projects" icon={<Rocket size={32} />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MVP */}
        <div className="md:col-span-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-retro-pink to-retro-purple opacity-25 blur group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-retro-bg/70 border-4 border-white p-6 md:p-8">
            <div className="absolute top-0 right-0 p-2 bg-retro-yellow text-black font-pixel text-xs border-b-4 border-l-4 border-black">
              ★ MVP ★
            </div>

            <h3 className="font-pixel text-xl md:text-2xl text-retro-pink mb-4">
              Ed-Tech Platform
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "React",
                "Redux",
                "Node.js",
                "Express",
                "MongoDB",
                "Razorpay",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-slate-700 text-retro-cyan font-retro text-lg border border-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-retro text-xl text-gray-300 mb-6 leading-relaxed">
              A scalable full-stack learning platform with role-based access,
              JWT authentication, course management, and Razorpay payment
              integration.
            </p>

            <div className="flex gap-4">
              <a
                href="https://studynotion-eshita.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="secondary">
                  <span className="flex items-center gap-2">
                    View Demo <ExternalLink size={14} />
                  </span>
                </RetroButton>
              </a>
              <a
                href="https://github.com/esh-dev257/Ed-Tech-Platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="primary">
                  <span className="flex items-center gap-2">
                    Source Code <Github size={14} />
                  </span>
                </RetroButton>
              </a>
            </div>
          </div>
        </div>

        {/* DSA */}
        <div className="bg-[#201a28]/85 border-4 border-slate-600 p-6 shadow-pixel hover:border-retro-cyan transition-colors">
          <h3 className="font-pixel text-lg text-retro-green mb-4">
            DSA Sorting Visualizer
          </h3>
          <p className="font-retro text-xl text-gray-400 mb-6">
            Interactive visualizer for Bubble, Selection, Insertion, Merge, and
            Quick Sort with adjustable animation speeds.
          </p>
          <a
            href="YOUR_DSA_REPO_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RetroButton variant="primary">
              <span className="flex items-center gap-2">
                Repo <Github size={14} />
              </span>
            </RetroButton>
          </a>
        </div>

        {/* MERN */}
        <div className="bg-[#201a28]/85 border-4 border-slate-600 p-6 shadow-pixel hover:border-retro-cyan transition-colors">
          <h3 className="font-pixel text-lg text-retro-green mb-4">
            MERN E-commerce
          </h3>
          <p className="font-retro text-xl text-gray-400 mb-6">
            Full-stack e-commerce platform with authentication, cart system,
            admin dashboard, and order management.
          </p>
          <a
            href="YOUR_MERN_REPO_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RetroButton variant="primary">
              <span className="flex items-center gap-2">
                Repo <Github size={14} />
              </span>
            </RetroButton>
          </a>
        </div>
      </div>

      {/* ═══════════ AI / ML CAROUSEL ═══════════ */}

      <div className="mt-20">
        <SectionHeader title="AI / ML Projects" icon={<Brain size={28} />} />
      </div>

      <div className="mt-10">
        <MLCarousel />
      </div>
    </section>
  );
};

export default Projects;
