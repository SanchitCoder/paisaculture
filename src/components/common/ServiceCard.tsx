import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Shield, TrendingUp, Banknote, LineChart, type LucideIcon } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  TrendingUp,
  Banknote,
  LineChart,
}

interface ServiceCardProps {
  title: string
  description: string
  iconName: string
  href: string
  accentColor: string
  bgColor: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  iconName,
  href,
  accentColor,
  bgColor,
  delay = 0,
}: ServiceCardProps) {
  const prefersReduced = useReducedMotion()
  const Icon = iconMap[iconName] ?? Shield

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: delay * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={href} className="group block h-full">
        <div className="h-full bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 lg:p-8 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-card-hover">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
            <Icon size={22} strokeWidth={1.8} className={accentColor} />
          </div>

          {/* Content */}
          <h3 className="font-serif font-bold text-xl text-dark-900 mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[14px] text-dark-500 leading-relaxed mb-5">{description}</p>

          {/* Arrow CTA */}
          <div className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${accentColor} transition-all duration-200`}>
            Explore
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
