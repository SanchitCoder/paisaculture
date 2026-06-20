import { useReducedMotion } from '../../hooks/useReducedMotion'

interface LogoItem {
  id: string
  name: string
  category: string
  logoUrl?: string
}

interface LogoCloudProps {
  items: LogoItem[]
  title?: string
}

const categoryColors: Record<string, string> = {
  bank: 'bg-primary-50 border-primary-100 text-primary-700',
  insurer: 'bg-white border-[rgba(20,24,33,0.08)] text-dark-700',
  broker: 'bg-primary-50 border-primary-100 text-primary-700',
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
          className={`flex gap-4 ${prefersReduced ? '' : 'animate-marquee'}`}
          aria-hidden={!prefersReduced}
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className={`flex-shrink-0 flex items-center justify-center h-[56px] min-w-[160px] px-4 rounded-xl border shadow-card ${
                categoryColors[item.category] ?? 'bg-dark-50 border-dark-100 text-dark-600'
              }`}
            >
              {item.logoUrl ? (
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="h-10 w-auto max-w-[140px] object-contain"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <span className="text-[13px] font-semibold">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
