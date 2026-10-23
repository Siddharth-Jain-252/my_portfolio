import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { aboutData } from '../data'
import Magnetic from './Magnetic'

const ROLES = ["Backend Developer",
  "AI/ML Engineer",
  "Data Structures & Algorithms Enthusiast",
  "Open Source Contributor",
  "Software Developer",]
const GLYPHS = '!<>-_\\/[]{}=+*^?#'

// Scrambles from random glyphs into each role, then holds
function useScramble(words, hold = 2200) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    let i = 0, raf, timer, alive = true
    const run = (to) => {
      let f = 0
      const total = 26
      const tick = () => {
        if (!alive) return
        const p = f / total
        setText(to.split('').map((c, k) => (k < p * to.length || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join(''))
        if (f++ < total) raf = requestAnimationFrame(tick)
        else timer = setTimeout(() => { i = (i + 1) % words.length; run(words[i]) }, hold)
      }
      tick()
    }
    run(words[0])
    return () => { alive = false; cancelAnimationFrame(raf); clearTimeout(timer) }
  }, [])
  return text
}

export default function Hero() {
  const root = useRef(null)
  const role = useScramble(ROLES)

  // GSAP: masked per-letter rise on page load
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.letter', { yPercent: 115, rotate: 6, duration: 1, ease: 'power4.out', stagger: 0.035, delay: 0.3 })
    }, root)
    return () => ctx.revert()
  }, [])

  // Cursor spotlight
  const onMove = (e) => {
    const r = root.current.getBoundingClientRect()
    root.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    root.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const [first, ...rest] = aboutData.name.split(' ')
  const lines = [first, rest.join(' ')]

  return (
    <section
      id="top"
      ref={root}
      onMouseMove={onMove}
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32"
      style={{ '--mx': '70%', '--my': '30%' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(480px circle at var(--mx) var(--my), rgba(79,209,165,0.10), transparent 60%)' }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-9">
          <p className="mb-6 text-sm text-zinc-400">{aboutData.university}, based in {aboutData.location}</p>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.95] tracking-tighter" aria-label={aboutData.name}>
            {lines.map((line, li) => (
              <span key={li} className={`block overflow-hidden pb-2 ${li === 1 ? 'md:pl-24' : ''}`} aria-hidden>
                {line.split('').map((c, i) => (
                  <span key={i} className="letter inline-block">{c === ' ' ? '\u00A0' : c}</span>
                ))}
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 min-h-[2.5rem] font-medium text-accent text-2xl tracking-tight md:pl-24"
          >
            {role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap gap-4 md:pl-24"
          >
            <Magnetic>
              <a href="#projects" className="block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition active:scale-95 focus-visible:ring-2 focus-visible:ring-white">
                See my projects
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${aboutData.email}`} className="block rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold transition-colors hover:border-zinc-500 active:scale-95">
                Email me
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
          className="relative hidden self-end justify-self-end md:col-span-3 md:block"
        >
          <div className="relative grid h-40 w-40 place-items-center">
            <div className="absolute inset-0 animate-spin360 rounded-full border border-dashed border-zinc-700" />
            <div className="grid h-32 w-32 place-items-center rounded-full border border-zinc-800 bg-zinc-900 text-3xl font-semibold tracking-tight">
              {aboutData.avatar}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
