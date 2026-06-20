import { motion, useReducedMotion } from 'framer-motion'

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

const POINTS = [
  { x: 40,  y: 320, label: "'19" },
  { x: 104, y: 306, label: "'20" },
  { x: 168, y: 234, label: "'21" },
  { x: 232, y: 221, label: "'22" },
  { x: 296, y: 155, label: "'23" },
  { x: 360, y: 60,  label: "'24" },
]

const LINE =
  'M 40,320 C 72,318 88,308 104,306 C 132,304 152,238 168,234 C 188,230 218,224 232,221 C 250,218 278,160 296,155 C 318,150 342,66 360,60'

const AREA = `${LINE} L 360,334 L 40,334 Z`

const GRID_Y = [107, 155, 210, 265, 320]

export default function HeroVisual() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="areaGradient"
            x1="0" y1="60" x2="0" y2="334"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#1B365D" stopOpacity="0.22" />
            <stop offset="55%"  stopColor="#1B365D" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#1B365D" stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <motion.g
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {GRID_Y.map((y) => (
            <line
              key={y}
              x1="28" y1={y} x2="375" y2={y}
              stroke="rgba(20,24,33,0.07)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
          ))}
        </motion.g>

        {/* Area fill */}
        <motion.path
          d={AREA}
          fill="url(#areaGradient)"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.3 }}
        />

        {/* Main line — draws left-to-right */}
        <motion.path
          d={LINE}
          stroke="#1B365D"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.8, delay: 0.5, ease: easeOut },
            opacity:    { duration: 0.1, delay: 0.5 },
          }}
        />

        {/* Data point rings + dots + year labels */}
        {POINTS.map((pt, i) => (
          <motion.g
            key={pt.label}
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.75 + i * 0.08 }}
          >
            <circle cx={pt.x} cy={pt.y} r="7"   fill="#1B365D" fillOpacity="0.14" />
            <circle cx={pt.x} cy={pt.y} r="3.5" fill="#1B365D" />
            <text
              x={pt.x} y="354"
              textAnchor="middle"
              fontSize="10"
              fill="rgba(20,24,33,0.33)"
              fontFamily="JetBrains Mono, monospace"
            >
              {pt.label}
            </text>
          </motion.g>
        ))}

        {/* Growth badge — animates in last */}
        <motion.g
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 2.25, ease: easeOut }}
        >
          <rect x="258" y="13" width="124" height="38" rx="10"
            fill="white" fillOpacity="0.93" />
          <rect x="258" y="13" width="124" height="38" rx="10"
            fill="none" stroke="rgba(20,24,33,0.08)" strokeWidth="1" />
          <text x="270" y="36" fontSize="13.5"
            fontFamily="JetBrains Mono, monospace"
            fill="#C1272D" fontWeight="700">
            +145%
          </text>
          <text x="320" y="36" fontSize="9.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fill="rgba(20,24,33,0.44)">
            since 2019
          </text>
          {/* Dashed connector to 2024 dot */}
          <line x1="360" y1="57" x2="353" y2="34"
            stroke="rgba(14,165,233,0.35)"
            strokeWidth="1.5"
            strokeDasharray="2 3" />
        </motion.g>

        {/* Index label — top left */}
        <motion.text
          x="28" y="47"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          fill="rgba(20,24,33,0.27)"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Portfolio Index
        </motion.text>
      </svg>
    </div>
  )
}
