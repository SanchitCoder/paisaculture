import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  delay?: number
}

export function useCountUp({ end, duration = 2000, start = 0, delay = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const prefersReduced = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasStarted = useRef(false)

  const startAnimation = () => {
    if (hasStarted.current) return
    hasStarted.current = true

    if (prefersReduced) {
      setCount(end)
      return
    }

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp
        const elapsed = timestamp - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(start + (end - start) * eased))

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { count, startAnimation }
}
