import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion()
  const isCenter = align === 'center'
  const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.09 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  return (
    <motion.div
      className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}
      variants={container}
      initial={prefersReduced ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow && (
        <motion.span
          variants={item}
          className={`eyebrow mb-3 block ${light ? 'text-primary-300' : 'text-primary'}`}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={item}
        className={`font-serif text-display-md font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-dark-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={item}
          className={`text-[15px] leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${
            light ? 'text-white/60' : 'text-dark-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
