import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import RecentWork from './components/RecentWork';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-retro-pink selection:text-white">
      {/* Pixelated Background */}
      <div className="pixel-bg" />

      {/* Retro floating decorations */}

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-16">
          <Hero />

          <ScrollReveal>
            <Experience />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <RecentWork />
          </ScrollReveal>

          <ScrollReveal>
            <Achievements />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Projects />
          </ScrollReveal>

          <ScrollReveal>
            <Stats />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Skills />
          </ScrollReveal>

          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>

        <footer className="bg-[#000000]/65 py-6 text-center border-t-4 border-white">
             <p className="font-retro text-xl text-white-500">&copy; Eshita Bhawsar. All rights reserved.</p>
        </footer>

        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
