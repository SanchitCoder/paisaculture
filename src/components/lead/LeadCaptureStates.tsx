import { CheckCircle2, RotateCcw } from 'lucide-react'

export function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-4 px-2">
      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
        <CheckCircle2 size={24} className="text-emerald-600" />
      </div>
      <p className="font-semibold text-[15px] text-dark-900 mb-1">Thank you!</p>
      <p className="text-[13px] text-dark-500 leading-relaxed mb-4">
        We&apos;ve received your details. Our team will contact you within one business day.
      </p>
      <button type="button" onClick={onClose} className="btn-secondary text-[13px] mx-auto">
        <RotateCcw size={13} />
        Close
      </button>
    </div>
  )
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="text-center py-4 px-2">
      <p className="text-[13px] text-accent font-medium mb-3">{message}</p>
      <button type="button" onClick={onRetry} className="btn-primary text-[13px] mx-auto">
        Try Again
      </button>
    </div>
  )
}
