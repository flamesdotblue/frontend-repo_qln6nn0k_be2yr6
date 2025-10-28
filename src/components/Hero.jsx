import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0B0F] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,76,255,0.35),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,83,112,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/10 via-transparent to-[#0A0B0F]" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-40">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
          <Rocket className="h-4 w-4 text-blue-400" />
          <span className="text-white/80">Dr. Alvaro Cintas • Creator • Developer • Educator</span>
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Building Stories in Code and Content
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          Innovative digital storytelling across full-stack systems and media. I design immersive products and teach the craft behind them.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20">
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/15">
            Let’s Collaborate
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-8 flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15">
            <Twitter className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
