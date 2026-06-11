import type { PartnerLogo, Testimonial } from '../types'

export const partnerBanks: PartnerLogo[] = [
  { id: 'sbi', name: 'SBI', category: 'bank' },
  { id: 'icici', name: 'ICICI Bank', category: 'bank' },
  { id: 'hdfc', name: 'HDFC Bank', category: 'bank' },
  { id: 'kotak', name: 'Kotak Mahindra', category: 'bank' },
  { id: 'axis', name: 'Axis Bank', category: 'bank' },
  { id: 'idfc', name: 'IDFC First Bank', category: 'bank' },
  { id: 'bob', name: 'Bank of Baroda', category: 'bank' },
  { id: 'central', name: 'Central Bank of India', category: 'bank' },
]

export const partnerInsurers: PartnerLogo[] = [
  { id: 'bajaj', name: 'Bajaj Allianz', category: 'insurer' },
  { id: 'hdfc-life', name: 'HDFC Life', category: 'insurer' },
  { id: 'icici-lombard', name: 'ICICI Lombard', category: 'insurer' },
  { id: 'tata-aia', name: 'TATA AIA Life', category: 'insurer' },
  { id: 'future', name: 'Future Generali', category: 'insurer' },
]

export const partnerBrokers: PartnerLogo[] = [
  { id: 'edelweiss', name: 'Edelweiss', category: 'broker' },
  { id: 'wealth', name: 'Wealth Management', category: 'broker' },
]

export const allPartners = [...partnerBanks, ...partnerInsurers, ...partnerBrokers]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'PAISACULTURE helped me restructure all my financial products under one advisor. What used to take multiple agents now gets done in a single call. The clarity they bring is exceptional.',
    author: 'Rahul Joshi',
    role: 'Operations Manager',
    company: 'Manufacturing firm, Pune',
    avatar: 'https://picsum.photos/seed/rahul-joshi-pune/80/80',
  },
  {
    id: 't2',
    quote: 'I came to them for a home loan and left with a full financial plan. Their portfolio management service has genuinely changed how I think about money.',
    author: 'Priya Deshmukh',
    role: 'Senior Software Engineer',
    company: 'IT sector, Pune',
    avatar: 'https://picsum.photos/seed/priya-deshmukh-tech/80/80',
  },
  {
    id: 't3',
    quote: 'As a business owner, I needed someone who understood both corporate insurance and personal wealth. PAISACULTURE covered both with complete professionalism.',
    author: 'Suresh Patil',
    role: 'Entrepreneur',
    company: 'SME business owner, Maharashtra',
    avatar: 'https://picsum.photos/seed/suresh-patil-business/80/80',
  },
]
