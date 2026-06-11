import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface FeatureBenefitCardProps {
  number?: number
  icon?: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

export default function FeatureBenefitCard({
  number,
  icon,
  title,
  description,
  delay = 0,
  className = '',
}: FeatureBenefitCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: delay * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-out-expo ${className}`}
    >
      <div className="flex items-start gap-4">
        {number !== undefined && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
            <span className="font-mono text-[13px] font-bold text-primary">{number}</span>
          </div>
        )}
        {icon && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center text-accent">
            {icon}
          </div>
        )}
        <div>
          <h4 className="font-sans font-semibold text-[15px] text-dark-900 mb-1">{title}</h4>
          <p className="text-[13.5px] text-dark-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
