export interface LeadQuestion {
  id: string
  question: string
  options: string[]
}

export const leadQuestions: LeadQuestion[] = [
  {
    id: 'service',
    question: 'What service are you most interested in?',
    options: ['Insurance', 'Loans', 'Investments', 'Portfolio Management', 'General Advisory'],
  },
  {
    id: 'lifeStage',
    question: 'Which life stage best describes you?',
    options: ['25–30 years', '30–40 years', '40–50 years', '50+ years'],
  },
  {
    id: 'hasAdvisor',
    question: 'Do you currently work with a financial advisor?',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    id: 'budget',
    question: 'What is your approximate monthly budget for financial products?',
    options: ['Under ₹10,000', '₹10,000 – ₹50,000', 'Above ₹50,000', 'Prefer not to say'],
  },
  {
    id: 'timeline',
    question: 'How soon would you like to get started?',
    options: ['Immediately', 'Within a month', 'Just exploring'],
  },
]
