import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  eyebrowClass?: string
  children?: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  eyebrowClass = 'text-primary-300',
  children,
}: PageHeroProps) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative bg-primary-900 pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="eager"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/88 to-primary-800/75"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-xl relative">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`eyebrow ${eyebrowClass} mb-5 inline-flex`}>
            <span className="w-4 h-px bg-current mt-[7px]" />
            {eyebrow}
            <span className="w-4 h-px bg-current mt-[7px]" />
          </span>
          <h1 className="font-serif text-display-lg font-bold text-white mb-4 max-w-xl text-balance">
            {title}
          </h1>
          <p className="text-white/65 text-base md:text-lg max-w-lg leading-relaxed">
            {subtitle}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
