export interface SegmentImage {
  src: string
  alt: string
}

export const serviceImages = {
  insurance: {
    src: '/images/services/insurance.jpg',
    alt: 'Health and life insurance protection for families',
  },
  loans: {
    src: '/images/services/loans.jpg',
    alt: 'Home loan keys representing responsible borrowing',
  },
  investment: {
    src: '/images/services/investment.jpg',
    alt: 'Stock market charts showing investment growth',
  },
  advisory: {
    src: '/images/services/advisory.jpg',
    alt: 'Portfolio analytics dashboard for wealth management',
  },
  wealthOverview: {
    src: '/images/services/wealth-overview.jpg',
    alt: 'Financial advisor reviewing wealth management plans',
  },
} as const satisfies Record<string, SegmentImage>

export const lifeStageImages = {
  '25-30': {
    src: '/images/life-stages/foundation.jpg',
    alt: 'Piggy bank representing savings and financial foundation',
  },
  '30-35': {
    src: '/images/life-stages/growth.jpg',
    alt: 'House keys representing home loan and family growth planning',
  },
  '35-40': {
    src: '/images/life-stages/accumulation.jpg',
    alt: 'Trading charts representing wealth accumulation',
  },
  '40-45': {
    src: '/images/life-stages/optimization.jpg',
    alt: 'Investment dashboard for portfolio optimization',
  },
  '50+': {
    src: '/images/life-stages/legacy.jpg',
    alt: 'Indian currency notes representing retirement and legacy planning',
  },
} as const satisfies Record<string, SegmentImage>

export const heroImages = {
  insurance: {
    src: '/images/heroes/insurance-hero.jpg',
    alt: 'Umbrella symbolizing insurance protection and coverage',
  },
  loans: {
    src: '/images/heroes/loans-hero.jpg',
    alt: 'Indian rupee notes representing loan and credit services',
  },
  investment: {
    src: '/images/heroes/investment-hero.jpg',
    alt: 'Financial charts and market data for investments',
  },
  advisory: {
    src: '/images/heroes/advisory-hero.jpg',
    alt: 'Wealth management consultation with financial charts',
  },
  services: {
    src: '/images/services/wealth-overview.jpg',
    alt: 'Comprehensive financial planning under one roof',
  },
} as const satisfies Record<string, SegmentImage>

export const sectionImages = {
  piggyBank: {
    src: '/images/sections/piggy-bank.jpg',
    alt: 'Pink piggy bank for savings and emergency funds',
  },
  portfolioCharts: {
    src: '/images/sections/portfolio-charts.jpg',
    alt: 'Analytics charts for portfolio and wealth management',
  },
  financialPlanning: {
    src: '/images/sections/financial-planning.jpg',
    alt: 'Calculator and documents for financial planning',
  },
  insuranceShield: {
    src: '/images/sections/insurance-shield.jpg',
    alt: 'Umbrella representing insurance and risk protection',
  },
} as const satisfies Record<string, SegmentImage>

/** Initials-based avatars — clearer than random stock photos for testimonials */
export function avatarUrl(name: string, size = 80): string {
  const encoded = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encoded}&background=1B365D&color=fff&size=${size}&bold=true`
}
