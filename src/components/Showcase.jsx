import { motion } from 'framer-motion';
import { Code, Video, Star } from 'lucide-react';

const projectItems = [
  {
    title: 'Neon Story Engine',
    type: 'Web App',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Reactive Commerce Kit',
    type: 'Full‑Stack',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Cinematic UI Pack',
    type: 'Design',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    url: '#',
  },
];

// Updated with provided YouTube links
const contentItems = [
  {
    title: 'Featured Video 1',
    video: 'https://www.youtube.com/embed/1Bqwr2OBPsQ',
  },
  {
    title: 'Featured Video 2',
    video: 'https://www.youtube.com/embed/XARr6RnBOc8',
  },
  {
    title: 'Featured Video 3',
    video: 'https://www.youtube.com/embed/YfdEC-P-e34',
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="relative w-full bg-[#07080C] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Projects */}
        <div className="mb-12 flex items-center gap-3">
          <Code className="h-5 w-5 text-blue-400" />
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectItems.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-xs text-white/60">{p.type}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 mix-blend-overlay" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Content Grid */}
        <div id="content" className="mt-20">
          <div className="mb-12 flex items-center gap-3">
            <Video className="h-5 w-5 text-pink-400" />
            <h2 className="text-2xl font-semibold">Content & Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contentItems.map((c, i) => (
              <motion.div
                key={c.video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    className="h-full w-full"
                    src={c.video}
                    title={c.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium">{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div id="testimonials" className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Star className="h-5 w-5 text-amber-400" />
            <h2 className="text-2xl font-semibold">Testimonials</h2>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  const items = [
    {
      quote:
        'Alvaro brings a cinematic sensibility to engineering. The result is software that feels like art.',
      name: 'Marta L.',
      role: 'Creative Director, Lumen.io',
    },
    {
      quote:
        'A rare blend of educator and practitioner — our team shipped faster and learned more working with him.',
      name: 'Jon P.',
      role: 'Head of Product, Atlas Labs',
    },
    {
      quote:
        'Thoughtful, precise, and visually stunning. Our audience engagement doubled after launch.',
      name: 'Tara S.',
      role: 'Founder, Reverie Studio',
    },
  ];

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {items.map((t) => (
          <motion.div
            key={t.name}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 text-white/90 backdrop-blur-xl ring-1 ring-white/10"
          >
            <p className="text-sm leading-relaxed">“{t.quote}”</p>
            <div className="mt-4 text-xs text-white/60">
              <span className="font-medium text-white/80">{t.name}</span> • {t.role}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
