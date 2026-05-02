'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  once?: boolean
}

const initial: Record<string, object> = {
  up:    { opacity: 0, y: 36 },
  left:  { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
  none:  { opacity: 0 },
}

export default function AnimatedSection({
  children, className, delay = 0, direction = 'up', once = true,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -70px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial[direction]}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Stagger helpers ─── */
interface StaggerProps { children: React.ReactNode; className?: string; delay?: number }

export function StaggerContainer({ children, className, delay = 0.08 }: StaggerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
