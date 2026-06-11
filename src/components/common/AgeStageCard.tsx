import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { AgeStage } from '../../types'

interface AgeStageCardProps {
  stage: AgeStage
  index: number
}

export default function AgeStageCard({ stage, index }: AgeStageCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out-expo"
    >
      {/* Age badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${stage.color} mb-4`}>
        <span className={`font-mono text-[12px] font-bold tracking-tight ${stage.accent}`}>
          {stage.range}
        </span>
      </div>

      <h3 className="font-serif font-bold text-lg text-dark-900 mb-3">{stage.label}</h3>

      <ul className="space-y-1.5">
        {stage.needs.map((need) => (
          <li key={need} className="flex items-start gap-2">
            <Check size={13} strokeWidth={2.5} className={`mt-0.5 flex-shrink-0 ${stage.accent}`} />
            <span className="text-[13px] text-dark-600">{need}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
