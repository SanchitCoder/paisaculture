import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { LeadCaptureDisplayMode, LeadCaptureOptions, LeadCaptureSource } from '../types'

type WidgetStep = 'questions' | 'form' | 'submitting' | 'success' | 'error'

interface LeadCaptureContextValue {
  displayMode: LeadCaptureDisplayMode | null
  step: WidgetStep
  currentQuestionIndex: number
  answers: Record<string, string>
  source: LeadCaptureSource
  ctaLabel?: string
  contactForm: { name: string; email: string; phone: string }
  errorMessage: string
  openLeadCapture: (options?: LeadCaptureOptions) => void
  closeLeadCapture: () => void
  answerQuestion: (questionId: string, answer: string) => void
  setContactField: (field: 'name' | 'email' | 'phone', value: string) => void
  submitContactForm: () => Promise<void>
  resetLeadCapture: () => void
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null)

const emptyContact = { name: '', email: '', phone: '' }

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [displayMode, setDisplayMode] = useState<LeadCaptureDisplayMode | null>(null)
  const [step, setStep] = useState<WidgetStep>('questions')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [source, setSource] = useState<LeadCaptureSource>('chatbot')
  const [ctaLabel, setCtaLabel] = useState<string | undefined>()
  const [contactForm, setContactForm] = useState(emptyContact)
  const [errorMessage, setErrorMessage] = useState('')

  const resetState = useCallback(() => {
    setStep('questions')
    setCurrentQuestionIndex(0)
    setAnswers({})
    setContactForm(emptyContact)
    setErrorMessage('')
  }, [])

  const openLeadCapture = useCallback((options?: LeadCaptureOptions) => {
    resetState()
    const nextSource = options?.source ?? 'chatbot'
    setSource(nextSource)
    setCtaLabel(options?.ctaLabel)
    setDisplayMode(nextSource === 'cta' ? 'popup' : 'chatbot')
  }, [resetState])

  const closeLeadCapture = useCallback(() => {
    setDisplayMode(null)
  }, [])

  const resetLeadCapture = useCallback(() => {
    resetState()
    setStep('questions')
  }, [resetState])

  const answerQuestion = useCallback((questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    setCurrentQuestionIndex((prev) => {
      const next = prev + 1
      if (next >= 5) {
        setStep('form')
      }
      return next
    })
  }, [])

  const setContactField = useCallback((field: 'name' | 'email' | 'phone', value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
    setErrorMessage('')
  }, [])

  const submitContactForm = useCallback(async () => {
    const { name, email, phone } = contactForm
    if (!name.trim()) {
      setErrorMessage('Please enter your name.')
      return
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }
    const digits = phone.replace(/\s/g, '')
    if (!digits || !/^[6-9]\d{9}$/.test(digits)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      return
    }

    setStep('submitting')
    setErrorMessage('')

    const { submitLead } = await import('../services/submitLead')
    const result = await submitLead({
      source,
      ctaLabel,
      answers,
      name: name.trim(),
      email: email.trim(),
      phone: digits,
      submittedAt: new Date().toISOString(),
    })

    if (result.ok) {
      setStep('success')
    } else {
      setErrorMessage(result.error ?? 'Submission failed.')
      setStep('error')
    }
  }, [answers, contactForm, ctaLabel, source])

  const value = useMemo(
    () => ({
      displayMode,
      step,
      currentQuestionIndex,
      answers,
      source,
      ctaLabel,
      contactForm,
      errorMessage,
      openLeadCapture,
      closeLeadCapture,
      answerQuestion,
      setContactField,
      submitContactForm,
      resetLeadCapture,
    }),
    [
      displayMode,
      step,
      currentQuestionIndex,
      answers,
      source,
      ctaLabel,
      contactForm,
      errorMessage,
      openLeadCapture,
      closeLeadCapture,
      answerQuestion,
      setContactField,
      submitContactForm,
      resetLeadCapture,
    ],
  )

  return (
    <LeadCaptureContext.Provider value={value}>
      {children}
    </LeadCaptureContext.Provider>
  )
}

export function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext)
  if (!ctx) {
    throw new Error('useLeadCapture must be used within LeadCaptureProvider')
  }
  return ctx
}
