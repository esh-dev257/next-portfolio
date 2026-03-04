import React from "react";
import { Experience as ExperienceType } from "../../types";
import SectionHeader from "./SectionHeader";

const experiences: ExperienceType[] = [
  {
    company: "Vizuara AI",
    role: "Full Stack Developer Intern",
    duration: "Sept 2025 - Jan 2026",
    color: "border-retro-green",
    description: [
      "Led system migration from WordPress to a React + Firebase architecture, improving overall platform performance by 40% for 10,000+ monthly active users.",
      "Developed the Vizuara.ai landing page, service pages, and admin-controlled pop-up features using modular and reusable React components.",
      "Integrated Google reCAPTCHA v3 to enhance security and prevent spam submissions.",
      "Architected and built the First Principle Labs platform using React.js, currently used by industry professionals.",
      "Engineered the Research Platform frontend, managing complex state logic and structured admin dashboard workflows.",
      "Designed high-conversion UI for Flyvidesh, ensuring cross-browser compatibility and mobile responsiveness.",
    ],
    link: "https://vizuara.com",
  },
  {
    company: "Educerns Technologies Pvt Ltd",
    role: "Frontend Developer Intern",
    duration: "May 2025 - July 2025",
    color: "border-retro-purple",
    description: [
      "Developed and optimized multiple product pages including GST Simulator, EduSkill Exam Platform, and the main website using React and Tailwind CSS.",
      "Converted Figma designs into pixel-perfect, reusable UI components following best frontend practices.",
      "Actively participated in code reviews and product discussions for a platform built for Pan-India usage, improving overall user experience by approximately 50%.",
      "Implemented responsive design principles to enhance mobile usability and increase user engagement.",
    ],
    link: "https://educerns.org/",
  },
  {
    company: "Jobsdoor360",
    role: "Frontend Developer Intern",
    duration: "June 2024 - July 2024",
    color: "border-retro-green",
    description: [
      "Worked on a live production website under mentorship, enhancing multiple sections and implementing new features.",
      "Collaborated with the development team to optimize website performance and improve overall user experience.",
      "Resolved critical UI bugs and contributed to performance improvements in a real-world environment.",
      "Strengthened practical knowledge of frontend workflows, version control, and team collaboration.",
    ],
    link: "https://educerns.com",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader
        title="Experience"
        icon={<i className="hn hn-business " style={{ fontSize: "32px" }}></i>}
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative bg-[#1a2520]/80  border-4 ${exp.color} p-6 shadow-pixel hover:translate-x-2 transition-transform`}
          >
            {/* Corner decorations */}
            <div
              className={`absolute top-0 left-0 w-4 h-4 bg-white -mt-1 -ml-1`}
            ></div>
            <div
              className={`absolute top-0 right-0 w-4 h-4 bg-white -mt-1 -mr-1`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-4 h-4 bg-white -mb-1 -ml-1`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 w-4 h-4 bg-white -mb-1 -mr-1`}
            ></div>

            <div className="flex flex-col md:flex-row justify-between m-2 items-start md:items-center mb-4 border-b-2 border-dashed border-gray-600 pb-4">
              <div>
                <h3 className="font-pixel text-sm md:text-lg text-white mb-2 mt-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-retro-cyan font-retro text-xl">
                  <span>@ {exp.company}</span>
                  {exp.link && exp.link !== "#" && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      <i
                        className="hn hn-external-link "
                        style={{ fontSize: "16px" }}
                      ></i>
                    </a>
                  )}
                </div>
              </div>
              <span className="font-pixel text-xs bg-black text-retro-yellow px-3 py-1 mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.description.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start font-retro text-2xl text-gray-300"
                >
                  <span className="text-retro-green mr-2">{">"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
