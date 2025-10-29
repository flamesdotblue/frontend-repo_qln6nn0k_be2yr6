import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let’s Collaborate</h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-md">
              Have a project in robotics, real-time 3D, or advanced UI? I’d love to hear about it.
              Share a few details and I’ll get back to you.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              {[
                { label: 'Email', href: 'mailto:hello@alvarocintas.dev' },
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center hover:bg-white/10">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-300">Name</label>
                <input
                  className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="you@domain.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-zinc-300">Project details</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                placeholder="Tell me about your goals, timeline, and budget."
                required
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-zinc-400">I usually reply within 1–2 business days.</p>
              <button className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-emerald-400">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
