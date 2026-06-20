import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { LineChart, BarChart2, Target, Shield, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import PageHero from '../components/common/PageHero'
import SegmentPhoto from '../components/common/SegmentPhoto'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { performanceTable } from '../data/services'
import { heroImages, serviceImages } from '../data/images'

const pmsFeatures = [
  { title: 'Dedicated Portfolio Manager', desc: 'A named advisor manages your portfolio end-to-end with full accountability.' },
  { title: 'Customized Strategy', desc: 'No off-the-shelf portfolios. Your risk profile, goals, and timeline drive every decision.' },
  { title: 'Regular Reporting', desc: 'Monthly performance reports with clear attribution and commentary.' },
  { title: 'Active Rebalancing', desc: 'We rebalance proactively as markets move — not reactively after damage is done.' },
  { title: 'Tax Optimization', desc: 'Every transaction is reviewed through a tax lens to preserve post-tax returns.' },
  { title: 'Minimum Investment', desc: 'SEBI-regulated PMS available from Rs. 50 lakh. Personalized advisory below that threshold.' },
]

const riskFramework = [
  { step: '01', title: 'Risk Profiling', desc: 'We assess your financial situation, goals, income stability, and psychological risk tolerance.' },
  { step: '02', title: 'Gap Analysis', desc: 'We identify gaps between your current portfolio and what is required to meet your goals.' },
  { step: '03', title: 'Exposure Review', desc: 'We map your existing insurance, loans, and investments to identify over-concentration and blind spots.' },
  { step: '04', title: 'Recommendations', desc: 'A written action plan with specific, prioritized steps — starting with the highest-impact changes.' },
]

export default function Advisory() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Advisory - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Portfolio Management Services (PMS), risk analysis, and financial planning from PAISACULTURE in Pune. Flagship advisory for investors seeking a managed approach."
        />
      </Helmet>

      <PageHero
        eyebrow="Advisory"
        eyebrowClass="text-accent-300"
        title="Strategy, Clarity, and Active Portfolio Management"
        subtitle="For clients who want more than a product — they want a financial partner who actively manages and optimizes their wealth."
        imageSrc={heroImages.advisory.src}
        imageAlt={heroImages.advisory.alt}
      />

      {/* PMS - FLAGSHIP */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="eyebrow mb-4 inline-flex">
                  <span className="w-4 h-px bg-current mt-[7px]" />
                  Flagship Service
                  <span className="w-4 h-px bg-current mt-[7px]" />
                </span>
                <h2 className="font-serif text-display-md font-bold text-dark-900 mb-5">
                  Portfolio Management Services
                </h2>
                <p className="text-[15px] text-dark-600 leading-relaxed mb-6">
                  PMS is not for everyone — it is for clients who have accumulated meaningful wealth and want an active, personalized, and accountable management strategy. We offer SEBI-compliant PMS with full transparency and regular reporting.
                </p>
                <p className="text-[15px] text-dark-600 leading-relaxed mb-8">
                  Unlike mutual funds, where your money goes into a pooled structure, PMS means your portfolio is individually managed with your name on every holding.
                </p>
                <Link to="/book-appointment" className="btn-primary">
                  Explore PMS <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden h-[280px] lg:min-h-[420px] shadow-card"
            >
              <SegmentPhoto
                src={serviceImages.advisory.src}
                alt={serviceImages.advisory.alt}
                className="h-full"
                overlay
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
              {pmsFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl border border-[rgba(30,41,59,0.07)] p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center mb-2.5">
                    <TrendingUp size={13} strokeWidth={2.5} className="text-purple-600" />
                  </div>
                  <h4 className="font-sans font-semibold text-[14px] text-dark-900 mb-1">{f.title}</h4>
                  <p className="text-[12.5px] text-dark-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* RISK ANALYSIS */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="grid grid-cols-1 gap-4">
              {riskFramework.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={prefersReduced ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[rgba(30,41,59,0.07)]"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white border border-primary-100 flex items-center justify-center shadow-sm">
                    <span className="font-mono text-[12px] font-bold text-primary">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] text-dark-900 mb-1">{step.title}</h4>
                    <p className="text-[13.5px] text-dark-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <SectionHeading
              eyebrow="Risk Analysis"
              title="Know Your Risks Before They Know You"
              subtitle="Most clients do not realize they are underinsured, overexposed, or holding conflicting financial products. Our risk analysis framework surfaces those issues — and fixes them."
              align="left"
            />
          </div>
        </div>
      </section>

      {/* FINANCIAL PLANNING */}
      <section className="bg-canvas-alt section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Financial Planning"
            title="A Map for Your Financial Life"
            subtitle="A comprehensive financial plan links your income, expenses, insurance, loans, and investments into a single coherent strategy."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Target size={20} strokeWidth={1.8} className="text-primary" />,
                bg: 'bg-primary-50',
                title: 'Goal-Based Planning',
                desc: 'Every plan starts with your goals — home, children\'s education, retirement, or wealth creation — and works backwards to required actions today.',
              },
              {
                icon: <Shield size={20} strokeWidth={1.8} className="text-emerald-600" />,
                bg: 'bg-emerald-50',
                title: 'Protection First',
                desc: 'We ensure adequate life, health, and income protection before allocating resources to growth. The right order matters.',
              },
              {
                icon: <BarChart2 size={20} strokeWidth={1.8} className="text-accent" />,
                bg: 'bg-accent-50',
                title: 'Regular Review',
                desc: 'Life changes. Your plan should too. Annual reviews ensure your financial strategy stays aligned with your evolving goals.',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center mb-5`}>
                  {p.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-dark-900 mb-2">{p.title}</h3>
                <p className="text-[14px] text-dark-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSET CLASS PERFORMANCE TABLE */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Historical Context"
            title="Asset Class Performance (2010-2019)"
            subtitle="Illustrative data for educational purposes. Past performance does not guarantee future returns."
            className="mb-10"
          />

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-2xl border border-dark-100"
          >
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-dark-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Year</th>
                  <th className="text-right px-4 py-3 font-semibold text-accent-300">Gold %</th>
                  <th className="text-right px-4 py-3 font-semibold text-emerald-300">Bonds %</th>
                  <th className="text-right px-4 py-3 font-semibold text-primary-300">Equity %</th>
                  <th className="text-right px-4 py-3 font-semibold text-purple-300">Housing %</th>
                  <th className="text-right px-4 py-3 font-semibold text-rose-300">Inflation %</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-300">Cash %</th>
                </tr>
              </thead>
              <tbody>
                {performanceTable.map((row, i) => (
                  <tr
                    key={row.year}
                    className={`border-t border-dark-100 ${i % 2 === 0 ? 'bg-white' : 'bg-white'} hover:bg-primary-50/50 transition-colors`}
                  >
                    <td className="px-4 py-2.5 font-mono font-semibold text-dark-800">{row.year}</td>
                    <td className={`px-4 py-2.5 text-right font-mono ${row.gold > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {row.gold > 0 ? '+' : ''}{row.gold.toFixed(1)}
                    </td>
                    <td className={`px-4 py-2.5 text-right font-mono ${row.bonds > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {row.bonds > 0 ? '+' : ''}{row.bonds.toFixed(1)}
                    </td>
                    <td className={`px-4 py-2.5 text-right font-mono font-semibold ${row.equity > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {row.equity > 0 ? '+' : ''}{row.equity.toFixed(1)}
                    </td>
                    <td className={`px-4 py-2.5 text-right font-mono ${row.housing > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {row.housing > 0 ? '+' : ''}{row.housing.toFixed(1)}
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-dark-500">{row.inflation.toFixed(1)}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-dark-500">{row.cash.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-[11px] text-dark-400 mt-3 text-center">
            Illustrative data for educational purposes only. Sourced from public indices. Not investment advice.
          </p>
        </div>
      </section>

      <CTASection
        title="Talk to a Portfolio Advisor"
        subtitle="Get a professional assessment of your current financial position and a clear plan to optimize it."
        primaryLabel="Book Advisory Session"
        primaryHref="/book-appointment"
        secondaryLabel="Explore Investments"
        secondaryHref="/services/investment"
        variant="dark"
      />
    </>
  )
}
