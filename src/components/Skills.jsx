import { motion } from 'framer-motion'
import { skillsData } from '../data'
import { fadeInUp } from './About'

const all = [...new Set(skillsData.flatMap((s) => s.technologies))]

function Marquee({ reverse }) {
  const items = reverse ? [...all].reverse() : all
  return (
    <div className="flex overflow-hidden border-y border-zinc-800 py-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`flex shrink-0 gap-10 pr-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="whitespace-nowrap text-2xl font-semibold tracking-tight text-zinc-600 md:text-4xl">{t}</span>
        ))}
      </div>
      <div aria-hidden className={`flex shrink-0 gap-10 pr-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="whitespace-nowrap text-2xl font-semibold tracking-tight text-zinc-600 md:text-4xl">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="space-y-4"><Marquee /><Marquee reverse /></div>
      <div className="mx-auto mt-28 max-w-6xl px-6">
        <motion.h2 {...fadeInUp} className="text-3xl font-semibold tracking-tight">Skills</motion.h2>
        <div className="mt-12 space-y-4">
          {skillsData.map((s, i) => (
            <motion.div
              key={s.broad}
              {...fadeInUp}
              whileHover={{ x: 8 }}
              className={`group grid gap-4 rounded-lg border border-zinc-800 p-6 transition-colors hover:border-zinc-600 md:grid-cols-12 ${i % 2 ? 'md:ml-24' : 'md:mr-24'}`}
            >
              <h3 className="font-semibold tracking-tight transition-colors group-hover:text-accent md:col-span-4">{s.broad}</h3>
              <ul className="flex flex-wrap gap-2 md:col-span-8">
                {s.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
