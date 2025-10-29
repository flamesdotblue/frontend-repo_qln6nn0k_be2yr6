import React from 'react';

const projects = [
  {
    title: 'Haptic Robot Console',
    img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Autonomous Vision System',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AR Training Toolkit',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-zinc-400 text-sm">Select work across robotics, visualization, and interfaces.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">Start a project</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-zinc-400 text-sm">Prototype • Research • UI/UX</p>
              </div>
            </article>
          ))}
        </div>

        {/* Content & Tutorials */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold">Content & Tutorials</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {[
              'https://www.youtube.com/embed/8p0V-NL5QuM',
              'https://www.youtube.com/embed/dQw4w9WgXcQ',
              'https://www.youtube.com/embed/aqz-KE-bpKQ',
            ].map((src, i) => (
              <div key={src} className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video">
                <iframe
                  src={src}
                  title={`video-${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
