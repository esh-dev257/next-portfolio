"use client";
import React, { useState } from "react";
import {
  Folder,
  FileCode,
  HardDrive,
  ChevronDown,
  Monitor,
  Cpu,
  Terminal,
  Layers,
  Layout,
  Palette,
  Braces,
  Code2,
  Hexagon,
  Server,
  Database as DbIcon,
  Box,
  Plug,
  GitBranch,
  Cloud,
  MessageSquare,
  Flame,
  Key,
  Move,
  Share2,
  Boxes,
  Component,
  Triangle,
  Shield,
  TrendingUp,
  TabletSmartphone,
  Blocks,
  Webhook,
  CloudUpload,
  Database,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const fileSystem = [
  {
    id: "root",
    name: "Skillset",
    type: "drive",
    icon: <HardDrive size={16} className="text-slate-400" />,
    children: [
      {
        id: "languages",
        name: "Languages",
        type: "folder",
        icon: <Folder size={16} className="text-red-400" />,
        children: [
          {
            id: "cpp",
            name: "C++",
            icon: <Code2 />,
            type: "Language",
            ver: "20",
            desc: "A high-performance language used for systems programming, game development, and competitive programming.",
          },
          {
            id: "js",
            name: "JavaScript ES6+",
            icon: <Braces />,
            type: "Language",
            ver: "ES2022",
            desc: "The core language of the web, enabling dynamic and interactive user experiences.",
          },
          {
            id: "ts",
            name: "TypeScript",
            icon: <FileCode />,
            type: "Language",
            ver: "5.3.0",
            desc: "A statically typed superset of JavaScript that enhances code quality and maintainability.",
          },
          {
            id: "html",
            name: "HTML5",
            icon: <Code2 />,
            type: "Markup",
            ver: "5.2",
            desc: "The standard markup language for creating web pages and web applications.",
          },
          {
            id: "css",
            name: "CSS3",
            icon: <Palette />,
            type: "Stylesheet",
            ver: "Level 3",
            desc: "The language for describing the presentation of web pages, including colors, layout, and fonts.",
          },
          {
            id: "sql",
            name: "SQL",
            icon: <Database />,
            type: "Query Language",
            ver: "SQL:2023",
            desc: "A standard language for storing, manipulating and retrieving data in relational databases.",
          },
        ],
      },
      {
        id: "frontend",
        name: "Frontend",
        type: "folder",
        icon: <Folder size={16} className="text-blue-400" />,
        children: [
          {
            id: "react",
            name: "React.js",
            icon: <Layers />,
            type: "Library",
            ver: "18.2.0",
            desc: "A JavaScript library for building user interfaces with a component-based architecture.",
          },
          {
            id: "next",
            name: "Next.js",
            icon: <Layout />,
            type: "Framework",
            ver: "14.1.0",
            desc: "The React Framework for production. Enables SSR, ISR, and edge routing capabilities.",
          },
          {
            id: "redux",
            name: "Redux Toolkit",
            icon: <Boxes />,
            type: "State Management",
            ver: "2.1.0",
            desc: "The official, opinionated, batteries-included toolset for efficient Redux development.",
          },
          {
            id: "context",
            name: "Context API",
            icon: <Share2 />,
            type: "React Feature",
            ver: "18.2.0",
            desc: "A React structure that allows passing data through the component tree without prop-drilling.",
          },
          {
            id: "tailwind",
            name: "Tailwind CSS",
            icon: <Palette />,
            type: "CSS Framework",
            ver: "3.4.0",
            desc: "A utility-first CSS framework for rapid UI development and composable design systems.",
          },
          {
            id: "framer",
            name: "Framer Motion",
            icon: <Move />,
            type: "Animation Library",
            ver: "11.0",
            desc: "A production-ready motion library for React, making complex animations simple.",
          },
          {
            id: "bootstrap",
            name: "Bootstrap",
            icon: <Component />,
            type: "CSS Framework",
            ver: "5.3",
            desc: "A popular front-end toolkit for designing responsive, mobile-first websites.",
          },
        ],
      },
      {
        id: "backend",
        name: "Backend & Cloud",
        type: "folder",
        icon: <Folder size={16} className="text-green-400" />,
        children: [
          {
            id: "node",
            name: "Node.js",
            icon: <Hexagon />,
            type: "Runtime",
            ver: "20.11",
            desc: "A JavaScript runtime built on Chrome's V8 engine, featuring asynchronous I/O.",
          },
          {
            id: "express",
            name: "Express.js",
            icon: <Server />,
            type: "Framework",
            ver: "4.18",
            desc: "A minimal and flexible Node.js web application framework for building APIs and web apps.",
          },
          {
            id: "firebase",
            name: "Firebase",
            icon: <Flame />,
            type: "BaaS",
            ver: "Latest",
            desc: "A platform by Google for creating mobile and web applications, offering a suite of cloud services.",
          },
          {
            id: "mongo",
            name: "MongoDB",
            icon: <DbIcon />,
            type: "NoSQL Database",
            ver: "7.0",
            desc: "A document-oriented NoSQL database used for high-volume data storage.",
          },
          {
            id: "rest",
            name: "RESTful APIs",
            icon: <Plug />,
            type: "API Architecture",
            ver: "N/A",
            desc: "An architectural style for designing networked applications, based on stateless communication.",
          },
          {
            id: "cloudinary",
            name: "Cloudinary",
            icon: <CloudUpload />,
            type: "Media Service",
            ver: "Latest",
            desc: "An end-to-end media management service for images and videos.",
          },
          {
            id: "jwt",
            name: "JWT Auth",
            icon: <Key />,
            type: "Authentication",
            ver: "N/A",
            desc: "JSON Web Tokens, a compact standard for creating access tokens for an application.",
          },
        ],
      },
      {
        id: "concepts",
        name: "Tools & Concepts",
        type: "folder",
        icon: <Folder size={16} className="text-yellow-400" />,
        children: [
          {
            id: "git",
            name: "Git/GitHub",
            icon: <GitBranch />,
            type: "VCS",
            ver: "2.43",
            desc: "Distributed version control and a collaborative platform for code hosting.",
          },
          {
            id: "postman",
            name: "Postman",
            icon: <MessageSquare />,
            type: "API Tool",
            ver: "10.17",
            desc: "A collaborative platform for API development, testing, and documentation.",
          },
          {
            id: "vercel",
            name: "Vercel",
            icon: <Triangle />,
            type: "Deployment",
            ver: "Latest",
            desc: "A cloud platform for static sites and Serverless Functions, specializing in Next.js.",
          },
          {
            id: "recaptcha",
            name: "reCAPTCHA",
            icon: <Shield />,
            type: "Security",
            ver: "v3",
            desc: "A Google service that helps protect sites from spam and abuse by distinguishing humans from bots.",
          },
          {
            id: "seo",
            name: "SEO",
            icon: <TrendingUp />,
            type: "Concept",
            ver: "N/A",
            desc: "Search Engine Optimization, the process of improving site quality to increase visibility.",
          },
          {
            id: "responsive",
            name: "Responsive Design",
            icon: <TabletSmartphone />,
            type: "Concept",
            ver: "N/A",
            desc: "A web design approach to make web pages render well on a variety of devices and screen sizes.",
          },
          {
            id: "oops",
            name: "OOPs",
            icon: <Blocks />,
            type: "Paradigm",
            ver: "N/A",
            desc: "Object-Oriented Programming, a paradigm based on the concept of 'objects'.",
          },
          {
            id: "dsa",
            name: "DSA",
            icon: <Webhook />,
            type: "Concept",
            ver: "N/A",
            desc: "Data Structures and Algorithms, the foundation for efficient problem-solving and software design.",
          },
        ],
      },
    ],
  },
];

export default function Skills() {
  const drive = fileSystem[0];
  const folders = drive.children;

  const [activeFolderId, setActiveFolderId] = useState("languages");
  const [selectedFileId, setSelectedFileId] = useState<string | null>("cpp");

  const activeFolder =
    folders.find((f) => f.id === activeFolderId) || folders[0];
  const selectedFile = activeFolder.children?.find(
    (f) => f.id === selectedFileId,
  );

  const handleFolderClick = (folderId: string) => {
    setActiveFolderId(folderId);
    const firstFileId =
      folders.find((f) => f.id === folderId)?.children?.[0]?.id || null;
    setSelectedFileId(firstFileId);
  };

  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-gray-700"
    >
      <SectionHeader title="Skills" icon={<Cpu size={24} />} />

      <div className="max-w-5xl mx-auto bg-[#1a2328]/50 border border-slate-700 rounded-lg shadow-2xl shadow-black/30 overflow-hidden">
        <div className="bg-slate-900/80 px-2 sm:px-3 py-1.5 flex justify-between items-center select-none border-b border-slate-700/50">
          <div className="flex items-center gap-1 sm:gap-2">
            <Monitor size={12} className="text-cyan-400 sm:hidden" />
            <Monitor size={14} className="text-cyan-400 hidden sm:block" />
            <span className="font-pixel text-[10px] sm:text-xs text-slate-300 tracking-wider truncate">
              SKILL_EXPLORER.EXE
            </span>
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="bg-slate-800 p-1.5 sm:p-2 flex gap-2 items-center border-b border-slate-700">
          <div className="flex gap-1 text-slate-500">
            {/* These are just decorative, no functionality needed */}
          </div>
          <div className="flex-1 bg-slate-900 border border-slate-700 rounded-md px-2 py-1 text-[10px] sm:text-xs font-mono text-slate-300 flex items-center gap-1 sm:gap-2 overflow-x-auto">
            <span className="text-slate-500 whitespace-nowrap">{drive.name}:</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400 truncate">
              {activeFolder.name.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[500px] lg:h-[550px] bg-slate-900/50 font-sans text-slate-300">
          <div className="w-full lg:w-56 bg-black/10 border-b lg:border-b-0 lg:border-r border-slate-800 p-2 overflow-y-auto max-h-[200px] lg:max-h-none">
            <div className="font-mono text-xs sm:text-sm space-y-1">
              <div>
                <div className="flex items-center gap-2 py-1 px-2 text-slate-400 text-xs sm:text-sm">
                  <ChevronDown size={14} className="sm:hidden" />
                  <ChevronDown size={16} className="hidden sm:block" />
                  {drive.icon}
                  <span className="truncate">{drive.name}</span>
                </div>
                <div className="pl-2 sm:pl-4 border-l border-dotted border-slate-700 ml-2 sm:ml-4 lg:block flex flex-wrap gap-1 lg:gap-0">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      onClick={() => handleFolderClick(folder.id)}
                      className={`flex items-center gap-1 sm:gap-2 py-1.5 px-2 sm:px-3 cursor-pointer rounded-md transition-colors touch-manipulation text-xs sm:text-sm ${
                        activeFolderId === folder.id
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "hover:bg-slate-700/50 active:bg-slate-700/70 text-slate-400"
                      }`}
                    >
                      {folder.icon}
                      <span className="whitespace-nowrap">{folder.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-black/20 p-3 sm:p-4 overflow-y-auto">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 content-start">
              {activeFolder.children?.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`group flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg transition-colors touch-manipulation ${
                    selectedFileId === file.id
                      ? "bg-cyan-500/30"
                      : "hover:bg-slate-700/50 active:bg-slate-700/70"
                  }`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-2xl sm:text-3xl transition-transform group-hover:scale-110 duration-200 text-slate-300 group-hover:text-cyan-300">
                    {file.icon}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-mono text-center w-full truncate px-1 py-0.5 rounded-sm transition-colors ${
                      selectedFileId === file.id
                        ? "bg-cyan-500 text-slate-900"
                        : "text-slate-300"
                    }`}
                  >
                    {file.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {selectedFile && (
            <div className="w-full lg:w-72 bg-black/30 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col">
              <div className="p-3 sm:p-4 border-b border-slate-800 text-center flex flex-col items-center">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 text-cyan-400">
                  {selectedFile.icon}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-100">
                  {selectedFile.name}
                </h3>
                <p className="text-xs text-slate-400">{selectedFile.type}</p>
              </div>

              <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
                <div className="space-y-3 sm:space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Description
                    </span>
                    <p className="text-slate-300 mt-1 leading-relaxed text-[11px] sm:text-xs">
                      {selectedFile.desc}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Version
                    </span>
                    <span className="text-slate-300 text-[11px] sm:text-xs">{selectedFile.ver}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                      Status
                    </span>
                    <span className="text-green-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      INSTALLED & ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2 sm:p-3 bg-slate-900/50 border-t border-slate-800">
                <button className="w-full bg-slate-700/80 border border-slate-600 rounded-md py-2 px-2 text-xs font-mono text-slate-300 hover:bg-slate-700 active:bg-slate-600 shadow-sm flex items-center justify-center gap-2 touch-manipulation">
                  <Terminal size={14} />
                  EXECUTE
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-slate-800/80 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono text-slate-500 border-t border-slate-700 flex justify-between items-center">
          <div className="flex gap-2 sm:gap-4 truncate">
            <span className="whitespace-nowrap">{activeFolder.children?.length} object(s)</span>
            <span className="hidden sm:inline">{selectedFile ? "1 selected" : "0 selected"}</span>
          </div>
          <div className="whitespace-nowrap">{drive.name}\</div>
        </div>
      </div>
    </section>
  );
}
