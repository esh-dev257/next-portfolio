import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import RecentWork from './components/RecentWork';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-retro-bg overflow-x-hidden selection:bg-retro-pink selection:text-white">
      {/* Decorative Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
            backgroundImage: `linear-gradient(#41fa75 1px, transparent 1px), linear-gradient(90deg, #41fa75 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Simple Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full bg-slate-900/90 border-b-4 border-white z-50 px-4 py-3 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span className="font-pixel mt-1 text-retro-yellow text-xs sm:text-sm md:text-base animate-pulse"></span>
                <div className="hidden md:flex gap-6 font-pixel text-[10px]">
                    <a href="#experience" className="text-white hover:text-retro-green hover:underline">Experience</a>
                    <a href="#recent-work" className="text-white hover:text-retro-cyan hover:underline">Live</a>
                    <a href="#achievements" className="text-white hover:text-retro-purple hover:underline">Trophies</a>
                    <a href="#projects" className="text-white hover:text-retro-pink hover:underline">Projects</a>
                    <a href="#stats" className="text-white hover:text-retro-cyan hover:underline">Stats</a>
                    <a href="#contact" className="text-white hover:text-retro-purple hover:underline">Contact</a>
                </div>
            </div>
        </nav>

        <main className="pt-16">
          <Hero />
          <Experience />
          <RecentWork />
          <Achievements />
          <Projects />
          <Stats />
          <Skills />
          <Contact />
        </main>

        <footer className="bg-black py-6 text-center border-t-4 border-white">
             <p className="font-retro text-lg text-gray-500">© Eshita Bhawsar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;