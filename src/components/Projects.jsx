import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projectsData } from '../data'

gsap.registerPlugin(ScrollTrigger)

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 3) * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`group flex w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-colors hover:border-zinc-600 hover:bg-zinc-900/60 md:w-[26rem] ${i % 2 ? 'md:mt-20' : ''}`}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
        <img
          src={p.picture} alt={`${p.name} screenshot`} loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex gap-5 pt-6 text-sm">
          <a href={p.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 transition-colors hover:text-accent">
            <Github size={16} /> Code
          </a>
          {p.websiteLink && (
            <a href={p.websiteLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 transition-colors hover:text-accent">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const section = useRef(null)
  const track = useRef(null)
  const bar = useRef(null)

  // GSAP: pin the section and translate the track sideways as you scroll (desktop).
  // On small screens the track is a native swipeable, snap-scrolling row.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const dist = () => track.current.scrollWidth - window.innerWidth
      gsap.to(track.current, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
          trigger: section.current, pin: true, scrub: 0.6, start: 'top top',
          end: () => `+=${dist()}`, invalidateOnRefresh: true,
          onUpdate: (s) => { bar.current.style.transform = `scaleX(${s.progress})` },
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="projects" ref={section} className="relative overflow-hidden py-24 md:flex md:h-screen md:flex-col md:justify-center md:py-0">
      <div className="mx-auto mb-10 flex w-full max-w-6xl items-end justify-between px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
        <p className="hidden text-sm text-zinc-500 md:block">Keep scrolling, the row moves sideways</p>
        <p className="text-sm text-zinc-500 md:hidden">Swipe</p>
      </div>
      <div ref={track} className="flex snap-x gap-6 overflow-x-auto px-6 pb-4 md:w-max md:snap-none md:overflow-visible md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-24">
        {projectsData.map((p, i) => <Card key={p.name} p={p} i={i} />)}
      </div>
      <div className="mx-auto mt-8 hidden h-px w-full max-w-6xl bg-zinc-800 md:block">
        <div ref={bar} className="h-px origin-left scale-x-0 bg-accent" />
      </div>
    </section>
  )
}
