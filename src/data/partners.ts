import type { PartnerLogo, Testimonial } from '../types'

import { avatarUrl } from './images'

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
  { id: 'bajaj', name: 'Bajaj Allianz', category: 'insurer', logoUrl: '/partners/bajaj-allianz.svg' },
  { id: 'hdfc-life', name: 'HDFC Life', category: 'insurer', logoUrl: '/partners/hdfc-life.svg' },
  { id: 'icici-prudential', name: 'ICICI Prudential', category: 'insurer', logoUrl: '/partners/icici-prudential.svg' },
  { id: 'icici-lombard', name: 'ICICI Lombard', category: 'insurer', logoUrl: '/partners/icici-lombard.svg' },
  { id: 'sbi-life', name: 'SBI Life', category: 'insurer', logoUrl: '/partners/sbi-life.svg' },
  { id: 'niva-bupa', name: 'Niva Bupa', category: 'insurer', logoUrl: '/partners/niva-bupa.svg' },
  { id: 'tata-aia', name: 'Tata AIA', category: 'insurer', logoUrl: '/partners/tata-aia.svg' },
  { id: 'future', name: 'Future Generali', category: 'insurer' },
]

export const partnerBrokers: PartnerLogo[] = [
  { id: 'edelweiss', name: 'Edelweiss', category: 'broker' },
  { id: 'wealth', name: 'Wealth Management', category: 'broker' },
]

/** Featured partners shown on the home page trust strip */
export const featuredPartners: PartnerLogo[] = [
  { id: 'hdfc-life', name: 'HDFC Life', category: 'insurer', logoUrl: '/partners/hdfc-life.svg' },
  { id: 'icici-prudential', name: 'ICICI Prudential', category: 'insurer', logoUrl: '/partners/icici-prudential.svg' },
  { id: 'sbi-life', name: 'SBI Life', category: 'insurer', logoUrl: '/partners/sbi-life.svg' },
  { id: 'niva-bupa', name: 'Niva Bupa', category: 'insurer', logoUrl: '/partners/niva-bupa.svg' },
  { id: 'tata-aia', name: 'Tata AIA', category: 'insurer', logoUrl: '/partners/tata-aia.svg' },
  { id: 'icici-lombard', name: 'ICICI Lombard', category: 'insurer', logoUrl: '/partners/icici-lombard.svg' },
  { id: 'bajaj', name: 'Bajaj Allianz', category: 'insurer', logoUrl: '/partners/bajaj-allianz.svg' },
]

export const allPartners = [...partnerBanks, ...partnerInsurers, ...partnerBrokers]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'PAISACULTURE helped me restructure all my financial products under one advisor. What used to take multiple agents now gets done in a single call. The clarity they bring is exceptional.',
    author: 'Rahul Joshi',
    role: 'Operations Manager',
    company: 'Manufacturing firm, Pune',
    avatar: avatarUrl('Rahul Joshi'),
  },
  {
    id: 't2',
    quote: 'I came to them for a home loan and left with a full financial plan. Their portfolio management service has genuinely changed how I think about money.',
    author: 'Priya Deshmukh',
    role: 'Senior Software Engineer',
    company: 'IT sector, Pune',
    avatar: avatarUrl('Priya Deshmukh'),
  },
  {
    id: 't3',
    quote: 'As a business owner, I needed someone who understood both corporate insurance and personal wealth. PAISACULTURE covered both with complete professionalism.',
    author: 'Suresh Patil',
    role: 'Entrepreneur',
    company: 'SME business owner, Maharashtra',
    avatar: avatarUrl('Suresh Patil'),
  },
]
