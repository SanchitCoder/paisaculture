import type { AgeStage, AssetClass, InsuranceType, LoanType } from '../types'

export const ageStages: AgeStage[] = [
  {
    range: '25-30',
    label: 'Foundation',
    needs: ['Term Life Insurance', 'Emergency Fund', 'Equity SIPs', 'Health Cover'],
    color: 'bg-primary-50',
    accent: 'text-primary-600',
  },
  {
    range: '30-35',
    label: 'Growth',
    needs: ['Home Loan Planning', 'Child Education Fund', 'ULIP Plans', 'Critical Illness Cover'],
    color: 'bg-accent-50',
    accent: 'text-accent-600',
  },
  {
    range: '35-40',
    label: 'Accumulation',
    needs: ['Wealth Building', 'Retirement Corpus', 'Portfolio Management', 'Tax Efficiency'],
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    range: '40-45',
    label: 'Optimization',
    needs: ['Health Care Planning', 'Senior Parent Cover', 'PMS Strategy', 'Debt Restructuring'],
    color: 'bg-purple-50',
    accent: 'text-purple-600',
  },
  {
    range: '50+',
    label: 'Legacy',
    needs: ['Pension Plans', 'Guaranteed Income', 'Estate Planning', 'Medical Cover'],
    color: 'bg-rose-50',
    accent: 'text-rose-600',
  },
]

export const loanTypes: LoanType[] = [
  { id: 'vehicle', title: 'Vehicle Loan', description: 'Finance your two-wheeler or car at competitive rates with flexible tenures.', icon: 'Car' },
  { id: 'business', title: 'Business Loan', description: 'Fuel your enterprise growth with unsecured or secured business credit.', icon: 'Briefcase' },
  { id: 'personal', title: 'Personal Loan', description: 'Meet personal needs quickly with minimal documentation and fast disbursals.', icon: 'User' },
  { id: 'agriculture', title: 'Agriculture Loan', description: 'Dedicated credit products for farmers and agri-entrepreneurs.', icon: 'Sprout' },
  { id: 'home', title: 'Home Loan', description: 'Realize your dream home with long-tenure, low-rate financing from top PSU and private banks.', icon: 'Home' },
  { id: 'education', title: 'Education Loan', description: 'Invest in education without financial pressure. Domestic and overseas study covered.', icon: 'GraduationCap' },
  { id: 'gold', title: 'Gold Loan', description: 'Instant liquidity against your gold at attractive interest rates.', icon: 'Gem' },
  { id: 'lap', title: 'Loan Against Property', description: 'Unlock the value of your property for large capital requirements.', icon: 'Building2' },
  { id: 'las', title: 'Loan Against Securities', description: 'Borrow against your equity portfolio, mutual funds, or bonds without liquidating.', icon: 'TrendingUp' },
]

export const insuranceCategories: InsuranceType[] = [
  { id: 'life', title: 'Life Insurance', description: 'Term, endowment, and ULIP products for comprehensive life cover.', icon: 'Heart', subcategory: 'retail' },
  { id: 'health', title: 'Health Insurance', description: 'Individual, family floater, and senior citizen health policies.', icon: 'Shield', subcategory: 'retail' },
  { id: 'vehicle', title: 'Vehicle Insurance', description: 'Comprehensive and third-party cover for two-wheelers and cars.', icon: 'Car', subcategory: 'retail' },
  { id: 'travel', title: 'Travel Insurance', description: 'Domestic and international travel protection for individuals and families.', icon: 'Plane', subcategory: 'retail' },
  { id: 'home-ins', title: 'Home Insurance', description: 'Protect your property from fire, theft, natural calamities, and more.', icon: 'HomeIcon', subcategory: 'retail' },
  { id: 'accident', title: 'Personal Accident', description: 'Financial protection for accidental injury, disability, or death.', icon: 'AlertCircle', subcategory: 'retail' },
  { id: 'car', title: "Contractor's All Risk", description: "Covers civil engineering projects against unforeseen physical damage.", icon: 'HardHat', subcategory: 'industrial' },
  { id: 'keyman', title: 'Keyman Insurance', description: 'Protect your business from the loss of a key employee or founder.', icon: 'Users', subcategory: 'industrial' },
  { id: 'trade-credit', title: 'Trade Credit Insurance', description: 'Safeguard your receivables against buyer default or insolvency.', icon: 'CreditCard', subcategory: 'industrial' },
  { id: 'group', title: 'Group Insurance', description: 'Health, life, and accident cover for your entire workforce.', icon: 'UserCheck', subcategory: 'industrial' },
  { id: 'iar', title: 'Industrial All Risk', description: 'Comprehensive protection for industrial plants and machinery.', icon: 'Factory', subcategory: 'industrial' },
  { id: 'special-perils', title: 'Special Perils', description: 'Coverage for earthquake, flood, and other natural catastrophes.', icon: 'Zap', subcategory: 'industrial' },
]

export const assetClasses: AssetClass[] = [
  {
    id: 'equity',
    title: 'Equity',
    description: 'Ownership stakes in companies. Highest long-term wealth creation potential with commensurate volatility.',
    examples: ['Listed shares', 'Equity mutual funds', 'ETFs', 'ULIPs (equity)'],
    color: 'from-primary-500 to-primary-700',
  },
  {
    id: 'fixed-income',
    title: 'Fixed Income',
    description: 'Predictable returns with capital preservation. Ideal for medium-term goals.',
    examples: ['Government bonds', 'Debt mutual funds', 'Fixed deposits', 'NCDs'],
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'alternative',
    title: 'Alternative Investments',
    description: 'Diversification beyond traditional asset classes for sophisticated investors.',
    examples: ['REITs', 'InvITs', 'Gold ETFs', 'Structured products'],
    color: 'from-accent-500 to-accent-700',
  },
  {
    id: 'cash',
    title: 'Cash & Equivalents',
    description: 'Liquidity buffer for emergencies and opportunistic deployment.',
    examples: ['Savings accounts', 'Liquid funds', 'Short-term FDs', 'Sweep accounts'],
    color: 'from-slate-500 to-slate-700',
  },
  {
    id: 'commodities',
    title: 'Commodities',
    description: 'Real assets that hedge against inflation and currency risk.',
    examples: ['Digital gold', 'Gold ETFs', 'Sovereign Gold Bonds', 'Commodity funds'],
    color: 'from-yellow-500 to-yellow-700',
  },
]

export const performanceTable = [
  { year: '2010', gold: 24.6, bonds: 5.8, equity: 17.9, housing: 14.2, inflation: 9.6, cash: 5.5 },
  { year: '2011', gold: 31.9, bonds: 6.2, equity: -24.6, housing: 13.1, inflation: 8.9, cash: 5.8 },
  { year: '2012', gold: 12.7, bonds: 8.1, equity: 25.7, housing: 12.0, inflation: 9.3, cash: 5.5 },
  { year: '2013', gold: -8.1, bonds: 4.8, equity: 6.8, housing: 11.5, inflation: 9.1, cash: 5.6 },
  { year: '2014', gold: -3.2, bonds: 15.2, equity: 29.9, housing: 10.3, inflation: 5.8, cash: 5.9 },
  { year: '2015', gold: -5.7, bonds: 6.8, equity: -4.1, housing: 9.8, inflation: 4.9, cash: 5.7 },
  { year: '2016', gold: 11.5, bonds: 11.1, equity: 1.4, housing: 8.5, inflation: 4.5, cash: 5.4 },
  { year: '2017', gold: 5.8, bonds: 3.8, equity: 28.6, housing: 7.9, inflation: 3.3, cash: 5.1 },
  { year: '2018', gold: 8.4, bonds: 6.4, equity: 3.2, housing: 7.4, inflation: 3.4, cash: 5.5 },
  { year: '2019', gold: 24.8, bonds: 12.7, equity: 12.0, housing: 6.8, inflation: 4.8, cash: 5.4 },
]
