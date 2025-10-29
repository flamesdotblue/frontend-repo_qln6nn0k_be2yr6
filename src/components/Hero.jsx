import React from 'react';
import Spline from '@splinetool/react-spline';

// Goal: visually blend the robot with the hero background
// Strategy:
// - Keep scene interactive (no overlays intercepting pointer events)
// - Use transparent canvas and soft radial mask to fade edges
// - Add subtle color wash using mix-blend on a pointer-events-none layer

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/10 via-transparent to-fuchsia-500/10" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for collaborations
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Futuristic Robotics & Interactive Experiences
          </h1>
          <p className="text-zinc-300 max-w-xl">
            I’m Dr. Alvaro Cintas — designing human-centered, motion-rich interfaces and
            intelligent systems. Real-time 3D, delightful interactions, and research-grade rigor.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Let’s Collaborate
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2 text-xs text-zinc-400">
            <span>3D • Spline</span>
            <span>Motion • Framer</span>
            <span>Design • Systems</span>
          </div>
        </div>

        {/* Right: 3D Robot with background removed and blended */}
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px] w-full">
          {/* Color wash to help blend the scene into page background */}
          <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
               style={{
                 background:
                   'radial-gradient(60% 60% at 70% 50%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0) 60%), radial-gradient(50% 50% at 30% 30%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 60%)'
               }}
          />

          {/* Container with soft radial mask to "erase" hard scene edges */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              WebkitMaskImage:
                'radial-gradient(70% 70% at 60% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)',
              maskImage:
                'radial-gradient(70% 70% at 60% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)'
            }}
          >
            <Spline
              scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode"
              style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
          </div>

          {/* Subtle vignette to merge further, doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl"
               style={{
                 background:
                   'radial-gradient(120% 100% at 70% 50%, rgba(24,24,27,0) 40%, rgba(24,24,27,0.35) 80%)'
               }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
