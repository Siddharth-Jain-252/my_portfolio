import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e) => {
      x.set(e.clientX); y.set(e.clientY)
      setActive(!!e.target.closest('a, button'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden [@media(hover:hover)]:block"
    >
      <motion.div
        animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="-ml-2 -mt-2 h-4 w-4 rounded-full border border-accent bg-accent/20 mix-blend-screen"
      />
    </motion.div>
  )
}
