import { motion, useScroll, useSpring } from 'framer-motion'
import { aboutData } from '../data'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]

export default function Navbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight">{aboutData.avatar}</a>
        <ul className="flex gap-5 text-sm text-zinc-400 sm:gap-8">
          {links.map(([l, h]) => (
            <li key={l}><a href={h} className="transition-colors hover:text-white">{l}</a></li>
          ))}
        </ul>
      </nav>
      <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent" />
    </motion.header>
  )
}
