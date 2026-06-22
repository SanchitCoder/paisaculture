import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import LeadCTAButton from '../lead/LeadCTAButton'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryLabel: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'dark' | 'light' | 'gradient'
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  secondaryHref,
  variant = 'dark',
}: CTASectionProps) {
  const prefersReduced = useReducedMotion()

  const bgClass =
    variant === 'dark'
      ? 'bg-primary-900'
      : variant === 'gradient'
      ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900'
      : 'bg-primary-600'

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/[0.05] blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="container-xl section-pad relative">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-display-md font-bold text-white mb-4 text-balance">
            {title}
          </h2>
          <p className="text-white/55 text-[15px] leading-relaxed mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <LeadCTAButton ctaLabel={primaryLabel} className="btn-primary group">
              <Calendar size={15} />
              {primaryLabel}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </LeadCTAButton>

            {secondaryLabel && secondaryHref && (
              isExternalHref(secondaryHref) ? (
                <a href={secondaryHref} className="btn-outline-white" target="_blank" rel="noopener noreferrer">
                  {secondaryLabel}
                </a>
              ) : (
                <Link to={secondaryHref} className="btn-outline-white">
                  {secondaryLabel}
                </Link>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
