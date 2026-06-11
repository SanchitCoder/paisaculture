import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Shield, Banknote, TrendingUp, LineChart, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import { useReducedMotion } from '../hooks/useReducedMotion'

const services = [
  {
    title: 'Insurance',
    tagline: 'Protection first, always.',
    description: 'Life, health, vehicle, travel, property, and corporate insurance. Retail and industrial. We cover all risk exposures for individuals, families, and businesses.',
    highlights: ['Life & Health Insurance', 'Vehicle & Travel Cover', 'Keyman & Group Insurance', 'Industrial All Risk'],
    href: '/services/insurance',
    icon: <Shield size={28} strokeWidth={1.6} />,
    accent: 'text-primary',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    cta: 'Explore Insurance',
    image: 'https://picsum.photos/seed/insurance-advisory-pune/600/400',
  },
  {
    title: 'Loans',
    tagline: 'Borrow responsibly. Build confidently.',
    description: 'Home, business, vehicle, personal, gold, agriculture, and more — via deep tie-ups with leading PSU and private banks. Lowest available rates, minimal documentation.',
    highlights: ['Home & Vehicle Loans', 'Business & Personal Loans', 'Gold & Education Loans', 'Loan Against Property'],
    href: '/services/loans',
    icon: <Banknote size={28} strokeWidth={1.6} />,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    cta: 'Explore Loans',
    image: 'https://picsum.photos/seed/loans-banking-india/600/400',
  },
  {
    title: 'Investment',
    tagline: 'Grow your money. Control your future.',
    description: 'Equity and debt mutual funds, guaranteed income plans, pension funds, and asset-class diversification — structured to match your risk appetite and time horizon.',
    highlights: ['Equity & Debt Mutual Funds', 'Guaranteed Income Plans', 'Pension Funds', 'Asset Diversification'],
    href: '/services/investment',
    icon: <TrendingUp size={28} strokeWidth={1.6} />,
    accent: 'text-accent',
    bg: 'bg-accent-50',
    border: 'border-accent-100',
    cta: 'Explore Investment',
    image: 'https://picsum.photos/seed/investment-mutual-funds-india/600/400',
  },
  {
    title: 'Advisory',
    tagline: 'Strategy. Clarity. Results.',
    description: 'Portfolio Management Services (PMS), risk analysis, and comprehensive financial planning — for clients who want a managed, coordinated approach to their entire financial picture.',
    highlights: ['Portfolio Management (PMS)', 'Risk Analysis & Assessment', 'Financial Planning', 'Retirement Strategy'],
    href: '/services/advisory',
    icon: <LineChart size={28} strokeWidth={1.6} />,
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    cta: 'Explore Advisory',
    image: 'https://picsum.photos/seed/financial-advisory-planning/600/400',
  },
]

export default function Services() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Services - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="PAISACULTURE offers Insurance, Loans, Investment, and Advisory services under one roof in Pune. Explore all our financial services."
        />
      </Helmet>

      {/* PAGE HERO */}
      <section className="bg-dark-900 pt-24 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/7 blur-3xl" />
        </div>
        <div className="container-xl relative">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow text-primary-300 mb-5 inline-flex">
              <span className="w-4 h-px bg-current mt-[7px]" />
              What We Offer
              <span className="w-4 h-px bg-current mt-[7px]" />
            </span>
            <h1 className="font-serif text-display-lg font-bold text-white mb-4 max-w-xl text-balance">
              All Financial Services, All Under One Roof
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
              Four service lines. One advisor relationship. Every product decision coordinated for your benefit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-[#F7F6F2] section-pad">
        <div className="container-xl">
          <div className="flex flex-col gap-6">
            {services.map((svc, i) => (
              <motion.article
                key={svc.title}
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-56 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={svc.image}
                      alt={`${svc.title} services`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                    <div className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-black/20`} />
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center mb-5`}>
                      <span className={svc.accent}>{svc.icon}</span>
                    </div>

                    <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${svc.accent} mb-2`}>
                      {svc.tagline}
                    </p>
                    <h2 className="font-serif font-bold text-2xl text-dark-900 mb-3">{svc.title}</h2>
                    <p className="text-[14.5px] text-dark-600 leading-relaxed mb-5">{svc.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 mb-7">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[13px] text-dark-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${svc.bg.replace('bg-', 'bg-').replace('-50', '-400')}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={svc.href}
                      className={`inline-flex items-center gap-2 font-semibold text-[14px] ${svc.accent} hover:gap-3 transition-all duration-200`}
                    >
                      {svc.cta}
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        subtitle="Book a free consultation and we will help you identify exactly which services apply to your situation."
        primaryLabel="Book Free Consultation"
        primaryHref="/book-appointment"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  )
}
