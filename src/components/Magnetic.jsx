import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Element gently pulls toward the pointer
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={reset} className="inline-block">
      {children}
    </motion.div>
  )
}
