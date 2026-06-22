import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Loader2 } from 'lucide-react'
import { useLeadCapture } from '../../context/LeadCaptureContext'
import { leadQuestions } from '../../data/leadQuestions'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ContactFormFields } from './ContactFormFields'
import { ErrorState, SuccessState } from './LeadCaptureStates'

export default function LeadCapturePopup() {
  const prefersReduced = useReducedMotion()
  const {
    displayMode,
    step,
    currentQuestionIndex,
    ctaLabel,
    contactForm,
    errorMessage,
    closeLeadCapture,
    answerQuestion,
    setContactField,
    submitContactForm,
    resetLeadCapture,
  } = useLeadCapture()

  const isOpen = displayMode === 'popup'
  const currentQuestion = leadQuestions[currentQuestionIndex]
  const totalSteps = leadQuestions.length + 1
  const currentStep =
    step === 'form' || step === 'submitting' || step === 'success' || step === 'error'
      ? leadQuestions.length + 1
      : currentQuestionIndex + 1

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isOpen])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void submitContactForm()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-label="Get started with PAISACULTURE"
          aria-modal="true"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"
            onClick={closeLeadCapture}
          />

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_24px_80px_rgba(15,23,42,0.22)] border border-[rgba(30,41,59,0.08)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-[rgba(30,41,59,0.06)]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-1">
                  {step === 'success' ? 'Submitted' : `Step ${currentStep} of ${totalSteps}`}
                </p>
                <h2 className="font-serif text-xl font-bold text-dark-900 leading-tight">
                  {step === 'success'
                    ? 'You\'re all set'
                    : step === 'form' || step === 'submitting' || step === 'error'
                    ? 'Your contact details'
                    : ctaLabel ?? 'Get Started'}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeLeadCapture}
                className="w-9 h-9 rounded-xl hover:bg-dark-50 flex items-center justify-center text-dark-500 transition-colors flex-shrink-0"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-5 max-h-[min(70vh,520px)] overflow-y-auto">
              {step === 'questions' && currentQuestion && (
                <div className="space-y-4">
                  <p className="text-[15px] text-dark-700 leading-relaxed font-medium">
                    {currentQuestion.question}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => answerQuestion(currentQuestion.id, option)}
                        className="w-full text-left px-4 py-3 rounded-xl border border-[rgba(30,41,59,0.1)] text-[13.5px] font-medium text-dark-700 hover:border-primary/30 hover:bg-primary-50 hover:text-primary transition-all duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 'form' && (
                <div className="space-y-4">
                  <p className="text-[14px] text-dark-500 leading-relaxed">
                    Almost done — share your details and our team will reach out shortly.
                  </p>
                  <ContactFormFields
                    idPrefix="popup"
                    contactForm={contactForm}
                    errorMessage={errorMessage}
                    onFieldChange={setContactField}
                    onSubmit={handleFormSubmit}
                  />
                </div>
              )}

              {step === 'submitting' && (
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                  <Loader2 size={28} className="text-primary animate-spin" />
                  <p className="text-[14px] text-dark-600">Submitting your details…</p>
                </div>
              )}

              {step === 'success' && (
                <SuccessState onClose={() => { resetLeadCapture(); closeLeadCapture() }} />
              )}

              {step === 'error' && (
                <ErrorState message={errorMessage} onRetry={() => void submitContactForm()} />
              )}
            </div>

            {step !== 'questions' && step !== 'form' && (
              <div className="h-2" aria-hidden="true" />
            )}

            {(step === 'questions' || step === 'form') && (
              <div className="px-6 pb-5">
                <div className="h-1.5 rounded-full bg-dark-100 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
