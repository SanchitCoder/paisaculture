import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useLeadCapture } from '../../context/LeadCaptureContext'

interface LeadCTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  ctaLabel?: string
}

export default function LeadCTAButton({
  children,
  ctaLabel,
  className,
  onClick,
  ...rest
}: LeadCTAButtonProps) {
  const { openLeadCapture } = useLeadCapture()

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e)
        openLeadCapture({ source: 'cta', ctaLabel })
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
