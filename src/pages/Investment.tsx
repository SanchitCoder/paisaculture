import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { TrendingUp, Shield, Coins, BarChart3, Layers, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import LeadCTAButton from '../components/lead/LeadCTAButton'
import PageHero from '../components/common/PageHero'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { heroImages, sectionImages } from '../data/images'
import { assetClasses } from '../data/services'

const featuredProducts = [
  {
    title: 'Guaranteed Income Plans',
    tagline: 'Predictable. Safe. Assured.',
    desc: 'Plans that provide guaranteed returns on your investment — no market risk, no uncertainty. Ideal for conservative investors and retirement planning.',
    features: ['Capital protection guaranteed', 'Fixed payout on maturity', 'IRDAI-regulated products', 'Tax benefits under Section 80C'],
    icon: <Shield size={22} strokeWidth={1.8} />,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    featured: false,
  },
  {
    title: 'Guaranteed Pension Funds',
    tagline: 'Our Flagship Product',
    desc: 'Structured pension solutions that guarantee a fixed monthly income for life after retirement — no matter what happens to markets. This is the cornerstone of a secure retirement plan.',
    features: ['Guaranteed monthly pension for life', 'Option for spouse pension', 'Tax-efficient annuity structures', 'Multiple payout frequency options'],
    icon: <Star size={22} strokeWidth={1.8} />,
    accent: 'text-accent',
    bg: 'bg-accent-50',
    featured: true,
  },
  {
    title: 'Mutual Funds',
    tagline: 'Equity & Debt. SIP & Lumpsum.',
    desc: 'Professionally managed equity and debt funds to grow your wealth over time. We select funds based on your goals, risk tolerance, and investment horizon.',
    features: ['Curated fund selection', 'SIP & lumpsum strategies', 'Goal-based fund mapping', 'Regular portfolio reviews'],
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
    accent: 'text-primary',
    bg: 'bg-primary-50',
    featured: false,
  },
]

export default function Investment() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Investment - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Mutual funds, guaranteed income plans, pension funds, and asset class diversification from PAISACULTURE in Pune. Plan your investment portfolio today."
        />
      </Helmet>

      <PageHero
        eyebrow="Investment"
        eyebrowClass="text-accent-300"
        title="Grow Your Wealth. Secure Your Future."
        subtitle="From guaranteed income for the cautious to equity growth for the ambitious — investment solutions structured around your life, not market trends."
        imageSrc={heroImages.investment.src}
        imageAlt={heroImages.investment.alt}
      />

      {/* FEATURED PRODUCTS */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Featured Products"
            title="Built Around Your Goals"
            subtitle="Three core product families — each serving a different stage and objective of your financial journey."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.title}
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`relative bg-white rounded-2xl border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                  p.featured
                    ? 'border-accent ring-1 ring-accent/20'
                    : 'border-[rgba(30,41,59,0.07)]'
                }`}
              >
                {p.featured && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                    Flagship
                  </div>
                )}
                <div className="p-7">
                  <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>
                    <span className={p.accent}>{p.icon}</span>
                  </div>

                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${p.accent} mb-1`}>
                    {p.tagline}
                  </p>
                  <h3 className="font-serif font-bold text-xl text-dark-900 mb-3">{p.title}</h3>
                  <p className="text-[14px] text-dark-600 leading-relaxed mb-5">{p.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-dark-600">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${p.accent.replace('text-', 'bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/book-appointment"
                    className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${p.accent} hover:gap-3 transition-all duration-200`}
                  >
                    Learn More <ArrowRight size={13} strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSET CLASSES */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 mb-14 items-center">
            <SectionHeading
              eyebrow="Asset Classes"
              title="Understanding Your Investment Universe"
              subtitle="A diversified portfolio draws from multiple asset classes. We help you understand — and balance — each one."
              align="left"
              className="mb-0"
            />
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden h-[200px] lg:h-[240px] shadow-card"
            >
              <img
                src={sectionImages.portfolioCharts.src}
                alt={sectionImages.portfolioCharts.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {assetClasses.map((ac, i) => (
              <motion.div
                key={ac.id}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-5 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ac.color} mb-4 flex items-center justify-center`}>
                  <Layers size={16} strokeWidth={2} className="text-white" />
                </div>
                <h4 className="font-sans font-semibold text-[15px] text-dark-900 mb-2">{ac.title}</h4>
                <p className="text-[12.5px] text-dark-500 leading-relaxed mb-3">{ac.description}</p>
                <div className="flex flex-wrap gap-1">
                  {ac.examples.slice(0, 2).map((ex) => (
                    <span key={ex} className="text-[11px] bg-dark-100 text-dark-500 rounded-full px-2 py-0.5">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-dark-50 border-y border-dark-200">
        <div className="container-xl py-4">
          <p className="text-[11.5px] text-dark-500 text-center leading-relaxed">
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Guaranteed products are subject to insurer solvency and IRDAI regulations.
          </p>
        </div>
      </div>

      {/* GUARANTEED PENSION SPOTLIGHT */}
      <section className="bg-primary-900 section-pad relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[420px] shadow-card order-2 lg:order-1"
            >
              <img
                src={sectionImages.piggyBank.src}
                alt={sectionImages.piggyBank.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" aria-hidden="true" />
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-accent/20 items-center justify-center mb-6">
                <Coins size={26} strokeWidth={1.6} className="text-accent-400" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 mb-3">Our Flagship</p>
              <h2 className="font-serif text-display-md font-bold text-white mb-5">
                Guaranteed Pension Fund
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-6">
                The one product that gives you certainty in an uncertain world. A fixed monthly income for life — no matter how long you live, no matter what happens to markets. This is the financial foundation every retirement plan needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { v: '100%', l: 'Guaranteed Returns' },
                  { v: 'Life', l: 'Payout Duration' },
                  { v: 'Tax', l: 'Efficient Structure' },
                ].map((s) => (
                  <div key={s.l} className="py-4 px-5 rounded-xl bg-white/5 border border-white/8">
                    <p className="font-serif font-bold text-2xl text-accent-400">{s.v}</p>
                    <p className="text-[12px] font-medium text-white/50 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
              <LeadCTAButton ctaLabel="Plan My Pension" className="btn-primary">
                Plan My Pension <ArrowRight size={15} />
              </LeadCTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Build Your Investment Portfolio"
        subtitle="A 30-minute conversation with our investment team can set the direction for the next 30 years."
        primaryLabel="Plan My Portfolio"
        secondaryLabel="Explore Advisory"
        secondaryHref="/services/advisory"
        variant="gradient"
      />
    </>
  )
}
