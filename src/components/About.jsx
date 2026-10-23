import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { aboutData } from '../data'

gsap.registerPlugin(ScrollTrigger)
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function About() {
  const bio = useRef(null)

  // GSAP ScrollTrigger scrub: words light up as you read
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.word', { opacity: 0.15 }, {
        opacity: 1, stagger: 0.1, ease: 'none',
        scrollTrigger: { trigger: bio.current, start: 'top 80%', end: 'bottom 50%', scrub: true },
      })
    }, bio)
    return () => ctx.revert()
  }, [])

  const facts = [['Studying', aboutData.university], ['Based in', aboutData.location], ['Email', aboutData.email]]

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid gap-16 md:grid-cols-12">
        <motion.h2 {...fadeInUp} className="text-3xl font-semibold tracking-tight md:col-span-3">About</motion.h2>
        <div className="md:col-span-8 md:col-start-5">
          <p ref={bio} className="text-2xl font-medium leading-snug tracking-tight md:text-4xl">
            {aboutData.bio.split(' ').map((w, i) => (
              <span key={i} className="word inline-block pr-[0.28em]">{w}</span>
            ))}
          </p>
          <dl className="mt-16 divide-y divide-zinc-800 border-y border-zinc-800">
            {facts.map(([k, v]) => (
              <motion.div key={k} {...fadeInUp} className="flex justify-between gap-6 py-4 text-sm">
                <dt className="text-zinc-500">{k}</dt>
                <dd className="text-right">{v}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
