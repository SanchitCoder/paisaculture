import { useReducedMotion } from '../../hooks/useReducedMotion'

interface LogoItem {
  id: string
  name: string
  category: string
}

interface LogoCloudProps {
  items: LogoItem[]
  title?: string
}

const categoryColors: Record<string, string> = {
  bank: 'bg-primary-50 border-primary-100 text-primary-700',
  insurer: 'bg-accent-50 border-accent-100 text-accent-700',
  broker: 'bg-emerald-50 border-emerald-100 text-emerald-700',
}

export default function LogoCloud({ items, title }: LogoCloudProps) {
  const prefersReduced = useReducedMotion()
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden">
      {title && (
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-dark-400 mb-6">
          {title}
        </p>
      )}
      <div className="relative flex">
        <div
          className={`flex gap-3 ${prefersReduced ? '' : 'animate-marquee'}`}
          aria-hidden={!prefersReduced}
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className={`flex-shrink-0 flex items-center justify-center px-5 py-2.5 rounded-xl border text-[13px] font-semibold ${
                categoryColors[item.category] ?? 'bg-dark-50 border-dark-100 text-dark-600'
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
