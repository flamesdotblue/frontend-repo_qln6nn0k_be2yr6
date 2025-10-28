import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0A0B0F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-indigo-400" />
            <h2 className="text-xl font-semibold">Let’s Collaborate</h2>
          </div>
          <p className="text-sm text-white/70">
            Have a project in mind — a product, a series, or a workshop? I partner with brands and teams to build premium, performant experiences.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a href="mailto:hello@alvarocintas.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-indigo-500/10 transition hover:-translate-y-0.5 hover:shadow-indigo-500/20">
              Email Me
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15"><Github className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15"><Linkedin className="h-4 w-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/15"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="md:col-span-3 grid grid-cols-1 gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Name">
              <input required type="text" placeholder="Your name" className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-400" />
            </Field>
            <Field label="Email">
              <input required type="email" placeholder="you@email.com" className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-400" />
            </Field>
          </div>
          <Field label="Message">
            <textarea required placeholder="Tell me about your project" rows={5} className="w-full resize-none rounded-lg bg-white/5 px-3 py-2 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-400" />
          </Field>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/50">Response within 48 hours</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-indigo-500/10 transition hover:-translate-y-0.5 hover:shadow-indigo-500/20">
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}
