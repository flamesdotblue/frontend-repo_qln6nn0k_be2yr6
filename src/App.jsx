import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    document.title = 'Dr. Alvaro Cintas — Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100">
      {/* Simple fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40 bg-zinc-900/30 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800 text-xs font-bold">AC</span>
            <span>Dr. Alvaro Cintas</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 space-y-24">
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/5 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Dr. Alvaro Cintas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
