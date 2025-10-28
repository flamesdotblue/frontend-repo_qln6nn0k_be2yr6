import { motion } from 'framer-motion';
import { Code, User } from 'lucide-react';

const tools = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Tailwind',
  'Framer Motion',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0B0F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-5">
        {/* Profile card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-xl ring-1 ring-white/20">
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" alt="Dr. Alvaro Cintas" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Dr. Alvaro Cintas</h3>
              <p className="text-sm text-white/70">Content Creator • Full‑Stack Developer • Tech Educator</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            I craft premium digital experiences that merge narrative, interaction, and performance. From cinematic web apps to studio‑grade content, I build systems that feel alive.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
            <User className="h-4 w-4" />
            <span>Available for select collaborations</span>
          </div>
        </motion.div>

        {/* Achievements & Stack */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
            <h4 className="text-base font-semibold">Highlights</h4>
            <ul className="mt-3 grid grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-3">
              <li className="rounded-lg bg-white/5 p-3">10M+ views across platforms</li>
              <li className="rounded-lg bg-white/5 p-3">Launched 30+ full‑stack products</li>
              <li className="rounded-lg bg-white/5 p-3">Keynote speaker & mentor</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
            <div className="mb-3 flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-400" />
              <h4 className="text-base font-semibold">Core Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
