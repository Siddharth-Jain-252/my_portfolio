import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, FileText, Code2 } from 'lucide-react'
import { aboutData } from '../data'
import Magnetic from './Magnetic'
import { fadeInUp } from './About'

const icons = { gh: Github, li: Linkedin, tw: Twitter, cv: FileText, lc: Code2 }

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-800 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2 {...fadeInUp} className="text-3xl font-semibold tracking-tight">Let's build something.</motion.h2>
        <motion.a
          {...fadeInUp}
          href={`mailto:${aboutData.email}`}
          className="mt-8 block break-all text-3xl font-semibold tracking-tighter transition-colors hover:text-accent md:text-6xl"
        >
          {aboutData.email}
        </motion.a>
        <ul className="mt-16 flex flex-wrap gap-4">
          {aboutData.links.map((l) => {
            const Icon = icons[l.icon]
            return (
              <li key={l.label}>
                <Magnetic strength={0.5}>
                  <a
                    href={l.url} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm transition-colors hover:border-zinc-500 active:scale-95"
                  >
                    <Icon size={16} /> {l.label}
                  </a>
                </Magnetic>
              </li>
            )
          })}
        </ul>
        <p className="mt-20 text-sm text-zinc-600">© {new Date().getFullYear()} {aboutData.name}</p>
      </div>
    </footer>
  )
}
