export interface ServiceCard {
  id: string
  title: string
  description: string
  icon: string
  href: string
  color: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  avatar: string
}

export interface PartnerLogo {
  id: string
  name: string
  category: 'bank' | 'insurer' | 'broker'
}

export interface AgeStage {
  range: string
  label: string
  needs: string[]
  color: string
  accent: string
}

export interface LoanType {
  id: string
  title: string
  description: string
  icon: string
}

export interface InsuranceType {
  id: string
  title: string
  description: string
  icon: string
  subcategory?: string
}

export interface AssetClass {
  id: string
  title: string
  description: string
  examples: string[]
  color: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required: boolean
  options?: string[]
  placeholder?: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface StatItem {
  value: number
  suffix: string
  label: string
}
