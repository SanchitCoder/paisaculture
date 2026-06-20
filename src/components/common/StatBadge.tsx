import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface StatBadgeProps {
  value: number
  suffix: string
  prefix?: string
  label: string
  delay?: number
  light?: boolean
}

export default function StatBadge({ value, suffix, prefix = '', label, delay = 0, light = false }: StatBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReduced = useReducedMotion()
  const { count, startAnimation } = useCountUp({ end: value, delay })

  useEffect(() => {
    if (isInView) startAnimation()
  }, [isInView]) // eslint-disable-line

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay * 0.001, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col items-center text-center ${light ? 'text-white' : 'text-dark-900'}`}
    >
      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span
            className={`font-serif font-bold text-2xl md:text-3xl ${
              light ? 'text-accent-400' : 'text-accent'
            }`}
          >
            {prefix}
          </span>
        )}
        <span
          className={`font-serif font-bold text-4xl md:text-5xl tabular-nums ${
            light ? 'text-accent-400' : 'text-accent'
          }`}
        >
          {count}
        </span>
        <span
          className={`font-serif font-bold text-2xl md:text-3xl ${
            light ? 'text-accent-400' : 'text-accent'
          }`}
        >
          {suffix}
        </span>
      </div>
      <p className={`mt-1 text-[13px] font-medium uppercase tracking-wider ${light ? 'text-white/60' : 'text-dark-500'}`}>
        {label}
      </p>
    </motion.div>
  )
}
