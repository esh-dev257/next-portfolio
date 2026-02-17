import React from "react";
import SectionHeader from "./SectionHeader";
import { Rocket } from "lucide-react";
import RetroButton from "./RetroButton";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-gray-700"
    >
      <SectionHeader title="Inventory / Projects" icon={<Rocket size={32} />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MVP Project */}
        <div className="md:col-span-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-retro-pink to-retro-purple opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-retro-bg border-4 border-white p-6 md:p-8">
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
                <RetroButton variant="secondary">View Demo</RetroButton>
              </a>
              <a
                href="https://github.com/esh-dev257/Ed-Tech-Platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="primary">Source Code</RetroButton>
              </a>
            </div>
          </div>
        </div>

        {/* DSA Visualizer */}
        <div className="bg-slate-800 border-4 border-slate-600 p-6 shadow-pixel hover:border-retro-cyan transition-colors">
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
            <RetroButton variant="primary">Repo</RetroButton>
          </a>
        </div>

        {/* MERN E-Commerce */}
        <div className="bg-slate-800 border-4 border-slate-600 p-6 shadow-pixel hover:border-retro-cyan transition-colors">
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
            <RetroButton variant="primary">Repo</RetroButton>
          </a>
        </div>
      </div>

      {/* ================= ML PROJECTS ================= */}

      <div className="mt-20">
        <SectionHeader title="AI / ML Projects" icon={<Rocket size={28} />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Titanic */}
        <div className="bg-slate-900 border-4 border-retro-purple p-6 hover:shadow-retro-purple transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-pixel text-xl text-retro-purple">
              Titanic Survival Prediction
            </h3>
            <span className="text-retro-purple text-2xl">🚢</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Machine learning model that predicts passenger survival on the
            Titanic based on various features like age, class, and gender.
          </p>

         

          <a
            href="https://titanic-expedition-ml-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <RetroButton variant="primary">View Project →</RetroButton>
          </a>
        </div>

        {/* Brain Tumor */}
        <div className="bg-slate-900 border-4 border-retro-green p-6 hover:shadow-retro-green transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-pixel text-xl text-retro-green">
              Brain Tumor Detection
            </h3>
            <span className="text-retro-green text-2xl">🧠</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Deep learning model for detecting and classifying brain tumors from
            MRI scans using convolutional neural networks.
          </p>

         

          <a
            href="https://brain-tumor-prediction-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <RetroButton variant="primary">View Project →</RetroButton>
          </a>
        </div>

        {/* Modify AI */}
        <div className="bg-slate-900 border-4 border-retro-pink p-6 hover:shadow-retro-pink transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-pixel text-xl text-retro-pink">
              Modify Images & Trick AI
            </h3>
            <span className="text-retro-pink text-2xl">🎨</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Adversarial attack demonstration showing how to modify images to
            fool AI classification models.
          </p>

         

          <a
            href="https://modify-images-and-trick-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <RetroButton variant="primary">View Project →</RetroButton>
          </a>
        </div>

        {/* Handwriting */}
        <div className="bg-slate-900 border-4 border-retro-cyan p-6 hover:shadow-retro-cyan transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-pixel text-xl text-retro-cyan">
              Handwriting Recognition
            </h3>
            <span className="text-retro-cyan text-2xl">✍️</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Neural network model that recognizes handwritten digits and
            characters with real-time drawing interface.
          </p>

          

          <a
            href="https://handwriting-recognition-xi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <RetroButton variant="primary">View Project →</RetroButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
