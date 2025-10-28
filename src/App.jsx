import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    document.title = 'Dr. Alvaro Cintas — Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0F] font-sans antialiased">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-b-2xl bg-[#0A0B0F]/60 px-6 py-4 backdrop-blur-xl ring-1 ring-white/10">
        <a href="#home" className="text-sm font-semibold text-white/90">AC</a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#content" className="hover:text-white">Content</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:shadow-blue-500/20">
          Let’s Collaborate
        </a>
      </header>

      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#07080C] py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Dr. Alvaro Cintas. All rights reserved.
      </footer>
    </div>
  );
}
