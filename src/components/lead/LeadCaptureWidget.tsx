import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Loader2 } from 'lucide-react'
import { useLeadCapture } from '../../context/LeadCaptureContext'
import { leadQuestions } from '../../data/leadQuestions'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ContactFormFields } from './ContactFormFields'
import { ErrorState, SuccessState } from './LeadCaptureStates'

export default function LeadCaptureWidget() {
  const prefersReduced = useReducedMotion()
  const {
    displayMode,
    step,
    currentQuestionIndex,
    answers,
    contactForm,
    errorMessage,
    openLeadCapture,
    closeLeadCapture,
    answerQuestion,
    setContactField,
    submitContactForm,
    resetLeadCapture,
  } = useLeadCapture()

  const scrollRef = useRef<HTMLDivElement>(null)
  const isChatOpen = displayMode === 'chatbot'

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [currentQuestionIndex, step, answers])

  const currentQuestion = leadQuestions[currentQuestionIndex]
  const answeredEntries = leadQuestions
    .slice(0, currentQuestionIndex)
    .map((q) => ({ question: q.question, answer: answers[q.id] }))
    .filter((e) => e.answer)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void submitContactForm()
  }

  return (
    <>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            role="dialog"
            aria-label="Lead qualification chat"
            aria-modal="true"
            initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[min(560px,calc(100vh-7rem))] flex flex-col rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] border border-[rgba(30,41,59,0.08)] overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3.5 bg-primary text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageCircle size={16} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold leading-tight">PAISACULTURE Assistant</p>
                  <p className="text-[11px] text-white/60">We typically reply within a few hours</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeLeadCapture}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8FAFC] min-h-[280px]">
              <BotBubble>
                Hi! I&apos;m here to help you get started with PAISACULTURE. Let me ask a few quick questions so we can connect you with the right advisor.
              </BotBubble>

              {answeredEntries.map((entry) => (
                <div key={entry.question} className="space-y-2">
                  <BotBubble>{entry.question}</BotBubble>
                  <UserBubble>{entry.answer}</UserBubble>
                </div>
              ))}

              {step === 'questions' && currentQuestion && (
                <BotBubble>{currentQuestion.question}</BotBubble>
              )}

              {step === 'form' && (
                <>
                  <BotBubble>
                    Great — just one last step. Share your contact details and our team will reach out shortly.
                  </BotBubble>
                  <div className="bg-white rounded-xl border border-[rgba(30,41,59,0.08)] p-4 shadow-sm">
                    <ContactFormFields
                      idPrefix="chat"
                      contactForm={contactForm}
                      errorMessage={errorMessage}
                      onFieldChange={setContactField}
                      onSubmit={handleFormSubmit}
                    />
                  </div>
                </>
              )}

              {step === 'submitting' && (
                <div className="flex items-center gap-2.5 px-4 py-3 bg-white rounded-xl border border-[rgba(30,41,59,0.08)]">
                  <Loader2 size={18} className="text-primary animate-spin" />
                  <p className="text-[13px] text-dark-600">Submitting your details…</p>
                </div>
              )}

              {step === 'success' && (
                <SuccessState onClose={() => { resetLeadCapture(); closeLeadCapture() }} />
              )}

              {step === 'error' && (
                <ErrorState message={errorMessage} onRetry={() => void submitContactForm()} />
              )}
            </div>

            {step === 'questions' && currentQuestion && (
              <div className="px-4 py-3 bg-white border-t border-[rgba(30,41,59,0.06)] space-y-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answerQuestion(currentQuestion.id, option)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl border border-[rgba(30,41,59,0.1)] text-[13px] font-medium text-dark-700 hover:border-primary/30 hover:bg-primary-50 hover:text-primary transition-all duration-150"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isChatOpen && (
        <motion.button
          type="button"
          aria-label="Open chat assistant"
          onClick={() => openLeadCapture({ source: 'chatbot' })}
          initial={prefersReduced ? false : { scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-[0_4px_20px_rgba(27,54,93,0.35)]"
        >
          <MessageCircle size={24} strokeWidth={1.8} />
        </motion.button>
      )}
    </>
  )
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-white border border-[rgba(30,41,59,0.07)] text-[13px] text-dark-700 leading-relaxed shadow-sm">
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[88%] px-3.5 py-2.5 rounded-2xl rounded-br-md bg-primary text-white text-[13px] leading-relaxed">
        {children}
      </div>
    </div>
  )
}
