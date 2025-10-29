import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <div className="h-16 w-16 rounded-xl bg-white/10 grid place-items-center text-xl font-black tracking-tight">
            AC
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-2 text-zinc-400 text-sm">Design systems • Human-computer interaction • Robotics</p>
        </div>

        <div className="md:col-span-2 space-y-6">
          <p className="text-zinc-300 leading-relaxed">
            I craft elegant, high-performance interfaces that bridge research and production. My
            work spans real-time 3D visualizations, robotics UX, and interactive learning tools —
            always centered on clarity, motion, and measurable outcomes.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300 list-disc list-inside">
                <li>Doctorate in HCI & Robotics</li>
                <li>Real-time 3D experiences with Spline</li>
                <li>Motion-first product thinking</li>
                <li>Data-driven usability improvements</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Core Tools</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                {['Spline','Framer Motion','React','Python','FastAPI','ThreeJS','Figma','Notion'].map(t => (
                  <li key={t} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
