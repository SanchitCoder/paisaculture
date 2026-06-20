import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Car, Briefcase, User, Sprout, Home, GraduationCap, Gem, Building2, TrendingUp, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import PageHero from '../components/common/PageHero'
import SegmentPhoto from '../components/common/SegmentPhoto'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { heroImages, serviceImages } from '../data/images'

const loanTypes = [
  { title: 'Vehicle Loan', desc: 'Finance your two-wheeler or car at competitive rates with flexible 12-84 month tenures.', Icon: Car, bg: 'bg-amber-50', color: 'text-amber-600' },
  { title: 'Business Loan', desc: 'Unsecured or secured business credit from Rs. 5 lakh to Rs. 2 crore for growth capital.', Icon: Briefcase, bg: 'bg-primary-50', color: 'text-primary' },
  { title: 'Personal Loan', desc: 'Quick-disbursal personal loans with minimal documentation for personal needs.', Icon: User, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  { title: 'Agriculture Loan', desc: 'Dedicated credit products for farmers, agri-processors, and agri-entrepreneurs.', Icon: Sprout, bg: 'bg-lime-50', color: 'text-lime-700' },
  { title: 'Home Loan', desc: 'Long-tenure, low-rate home financing from leading PSU and private banks. Up to 90% LTV.', Icon: Home, bg: 'bg-sky-50', color: 'text-sky-600' },
  { title: 'Education Loan', desc: 'Domestic and overseas study covered. Moratorium period, tax-deductible interest.', Icon: GraduationCap, bg: 'bg-violet-50', color: 'text-violet-600' },
  { title: 'Gold Loan', desc: 'Instant liquidity against your gold at 75% LTV. 24-hour processing, no income proof needed.', Icon: Gem, bg: 'bg-accent-50', color: 'text-accent' },
  { title: 'Loan Against Property', desc: 'Unlock the value of your property for large capital requirements at low interest rates.', Icon: Building2, bg: 'bg-rose-50', color: 'text-rose-500' },
  { title: 'Loan Against Securities', desc: 'Borrow against your equity portfolio, mutual funds, or bonds without liquidating your position.', Icon: TrendingUp, bg: 'bg-teal-50', color: 'text-teal-600' },
]

const processSteps = [
  { step: '01', title: 'Free Eligibility Check', desc: 'We check your eligibility across multiple lenders without impacting your credit score.' },
  { step: '02', title: 'Lender Comparison', desc: 'We compare rates, processing fees, and terms across our bank network to find the best deal.' },
  { step: '03', title: 'Documentation Support', desc: 'Our team guides you through every document required and helps you organize them correctly.' },
  { step: '04', title: 'Application & Follow-up', desc: 'We submit the application and follow up with the bank on your behalf until disbursement.' },
]

export default function Loans() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Loans - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Home, business, vehicle, personal, gold, education, and more — lowest rates via PAISACULTURE's tie-ups with leading PSU and private banks in Pune."
        />
      </Helmet>

      <PageHero
        eyebrow="Loans"
        eyebrowClass="text-accent-300"
        title="Borrow Responsibly at the Lowest Available Rates"
        subtitle="Deep tie-ups with 8+ leading PSU and private banks mean you always get access to the best rates and terms — without running from bank to bank."
        imageSrc={heroImages.loans.src}
        imageAlt={heroImages.loans.alt}
      />

      {/* 9 LOAN TYPES */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Loan Products"
            title="Nine Types of Loans. One Advisor."
            subtitle="Whether you are buying your first home or funding your next business expansion, we have the right loan product for you."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanTypes.map(({ title, desc, Icon, bg, color }, i) => (
              <motion.div
                key={title}
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} strokeWidth={1.8} className={color} />
                </div>
                <h3 className="font-sans font-semibold text-[16px] text-dark-900 mb-2">{title}</h3>
                <p className="text-[13.5px] text-dark-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BORROW THROUGH US */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <SectionHeading
              eyebrow="Our Loan Process"
              title="How We Help You Borrow Better"
              subtitle="We handle the complex parts — lender selection, documentation, and follow-up — so you focus on what matters."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-5"
                >
                  <span className="font-mono text-[12px] font-bold text-primary mb-2 block">{step.step}</span>
                  <h4 className="font-sans font-semibold text-dark-900 text-[15px] mb-1.5">{step.title}</h4>
                  <p className="text-[13px] text-dark-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partner bank trust strip */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-14 p-8 rounded-2xl bg-canvas-alt border border-dark-100"
          >
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-400 mb-5">
              Bank Network
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['SBI', 'ICICI Bank', 'HDFC Bank', 'Kotak Mahindra', 'Axis Bank', 'IDFC First Bank', 'Bank of Baroda', 'Central Bank of India'].map((name) => (
                <div
                  key={name}
                  className="px-4 py-2 rounded-xl bg-white border border-dark-100 text-[13px] font-semibold text-dark-700"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-canvas-alt border-y border-[rgba(27,54,93,0.08)]">
        <div className="container-xl py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-3">Home & Business Finance</p>
              <h2 className="font-serif text-display-md font-bold text-dark-900 mb-4 max-w-[18ch]">
                Finance built around your goals
              </h2>
              <p className="text-[15px] text-dark-600 leading-relaxed max-w-[48ch]">
                Whether you are buying a home, expanding a business, or funding education, we match you with the right loan product and bank — at the best available rate.
              </p>
            </div>
            <SegmentPhoto
              src={serviceImages.loans.src}
              alt={serviceImages.loans.alt}
              className="rounded-2xl h-[240px] md:h-[320px] shadow-card order-1 lg:order-2"
              overlay
            />
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-canvas-alt py-16">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Lowest Rates', d: 'Access to bank-negotiated rates not available over-the-counter' },
              { t: 'Faster Processing', d: 'Our relationships with bank teams speed up approvals' },
              { t: 'No Hidden Fees', d: 'Full transparency on all charges before you sign anything' },
              { t: 'End-to-End Support', d: 'From application to disbursal to EMI management' },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-5 rounded-2xl border border-[rgba(30,41,59,0.07)] shadow-card flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div>
                  <h4 className="font-sans font-semibold text-[14.5px] text-dark-900 mb-0.5">{b.t}</h4>
                  <p className="text-[13px] text-dark-500">{b.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Check Your Loan Eligibility"
        subtitle="Free, no-obligation eligibility check across our network of banks. Get a call back within 24 hours."
        primaryLabel="Check My Eligibility"
        primaryHref="/book-appointment"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  )
}
