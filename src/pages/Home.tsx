import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, ArrowUpRight, Shield, TrendingUp, Banknote, LineChart,
  Quote, Calendar,
} from 'lucide-react'
import StatBadge from '../components/common/StatBadge'
import LogoCloud from '../components/common/LogoCloud'
import CTASection from '../components/common/CTASection'
import HeroVisual from '../components/hero/HeroVisual'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ageStages } from '../data/services'
import { allPartners, testimonials } from '../data/partners'

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 5,   suffix: '',  label: 'Co-Founders' },
  { value: 10,  suffix: '+', label: 'Businesses' },
  { value: 8,   suffix: '+', label: 'Years Active' },
]

const services = [
  {
    title: 'Insurance',
    description: 'Life, health, general, and corporate — all product lines, one trusted advisor.',
    icon: <Shield size={19} strokeWidth={1.8} />,
    href: '/services/insurance',
    accent: 'text-primary',
    bg: 'bg-primary-50',
  },
  {
    title: 'Loans',
    description: 'Home, business, vehicle, gold, and five more via tie-ups with top banks.',
    icon: <Banknote size={19} strokeWidth={1.8} />,
    href: '/services/loans',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Investment',
    description: 'Mutual funds, guaranteed income plans, pension funds, and diversified portfolios.',
    icon: <TrendingUp size={19} strokeWidth={1.8} />,
    href: '/services/investment',
    accent: 'text-accent',
    bg: 'bg-accent-50',
  },
  {
    title: 'Advisory',
    description: 'Portfolio management, risk framework, and structured financial planning.',
    icon: <LineChart size={19} strokeWidth={1.8} />,
    href: '/services/advisory',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const startItems = [
  { letter: 'S', word: 'Simplicity',        desc: 'No jargon. Clean, plain-language financial plans you can act on immediately.' },
  { letter: 'T', word: 'Tax Efficient',      desc: 'Every recommendation accounts for your tax liability and how to reduce it legally.' },
  { letter: 'A', word: 'Assurance',          desc: 'Assured life cover is woven into every financial plan — protection before growth.' },
  { letter: 'R', word: 'Range of Benefits',  desc: 'Insurance, loans, investments, and advisory in one coordinated strategy.' },
  { letter: 'T', word: 'Tailor Made',        desc: 'No two clients are alike. Your plan is built for your life stage, goals, and obligations.' },
]

const whyUsItems = [
  {
    num: '01',
    title: 'Customer First',
    desc: 'Every recommendation is made with your interest — not our commission — as the priority. We are not tied to any single product line.',
  },
  {
    num: '02',
    title: 'Expert Founders',
    desc: 'Five founders, each running their own businesses. You get cross-domain expertise — legal, tax, operations, and financial planning — in one conversation.',
  },
  {
    num: '03',
    title: 'One-Window Advisory',
    desc: 'From your first SIP to your retirement pension — insurance, loans, investments, advisory — every chapter of your financial life, under one roof.',
  },
]

export default function Home() {
  const prefersReduced = useReducedMotion()

  /* ── Parallax refs ──────────────────────────────────────────── */
  const heroRef    = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  /* Text column rises slightly faster than the visual — creates depth */
  const heroTextY   = useTransform(heroProgress, [0, 1], ['0px', '-50px'])
  const heroVisualY = useTransform(heroProgress, [0, 1], ['0px', '-22px'])

  const { scrollYProgress: svcProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  })
  /* Image drifts slower than section scroll — classic parallax */
  const svcImgY = useTransform(svcProgress, [0, 1], ['28px', '-28px'])

  return (
    <>
      <Helmet>
        <title>PAISACULTURE SERVICES LLP - Money Saved is Money Earned</title>
        <meta
          name="description"
          content="Pune's trusted all-under-one-roof financial advisory. Insurance, Loans, Investments, and Portfolio Management by 5 expert founders with 10+ businesses."
        />
        <meta property="og:title"       content="PAISACULTURE SERVICES LLP" />
        <meta property="og:description" content="Money Saved is Money Earned. All financial services under one roof, Pune." />
      </Helmet>

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center bg-[#F7F6F2] overflow-hidden"
        aria-label="Hero"
      >
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-accent/[0.05] blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="container-xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">

          {/* Left: Editorial headline — parallax layer */}
          <motion.div
            className="max-w-lg lg:max-w-none"
            style={prefersReduced ? {} : { y: heroTextY }}
          >
            {/* Only eyebrow on the page */}
            <motion.span
              initial={prefersReduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="eyebrow mb-6 block"
            >
              All Under One Roof
            </motion.span>

            {/* 3-line stacked headline — weight/style contrast creates typographic drama */}
            <h1 className="font-serif font-bold text-dark-900 mb-6">
              <motion.span
                className="block text-display-xl"
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: easeOut }}
              >
                Money Saved
              </motion.span>
              <motion.span
                className="block text-display-xl italic font-semibold text-dark-400"
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.19, ease: easeOut }}
              >
                is Money
              </motion.span>
              <motion.span
                className="block text-display-xl relative"
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.26, ease: easeOut }}
              >
                Earned.
                {/* Amber underline draws in after text appears */}
                <motion.span
                  className="block h-[3px] bg-accent rounded-full mt-1 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: 0.72, ease: easeOut }}
                  aria-hidden="true"
                />
              </motion.span>
            </h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: easeOut }}
              className="text-[15.5px] text-dark-500 leading-relaxed mb-8 max-w-[42ch]"
            >
              Five entrepreneur founders. One-window advisory for insurance, loans,
              investments, and portfolio management — in Pune and beyond.
            </motion.p>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/book-appointment" className="btn-primary group">
                <Calendar size={15} />
                Book Free Consultation
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Animated financial chart — parallax layer */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: easeOut }}
            className="relative"
            style={prefersReduced ? {} : { y: heroVisualY }}
          >
            {/* Double-bezel frame */}
            <div className="rounded-3xl p-[5px] bg-[rgba(20,24,33,0.04)] ring-1 ring-[rgba(20,24,33,0.06)]">
              <div className="rounded-[calc(1.5rem-5px)] overflow-hidden bg-[rgba(20,24,33,0.025)] aspect-square min-h-[320px] lg:min-h-[400px]">
                <HeroVisual />
              </div>
            </div>

            {/* Floating badge — clients */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85, ease: easeOut }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-card ring-1 ring-[rgba(20,24,33,0.06)]"
            >
              <p className="font-serif font-bold text-[22px] text-accent leading-none">500+</p>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-dark-400 mt-0.5">Clients</p>
            </motion.div>

            {/* Floating badge — AUM */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.05, ease: easeOut }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-card ring-1 ring-[rgba(20,24,33,0.06)]"
            >
              <p className="font-serif font-bold text-[22px] text-primary leading-none">₹50Cr+</p>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-dark-400 mt-0.5">Managed</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-white border-y border-[rgba(20,24,33,0.06)] py-10">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatBadge
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 110}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES — Editorial split with photography ──────── */}
      <section ref={servicesRef} className="bg-[#F7F6F2] section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Editorial image — sticky desktop, below list on mobile */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="relative rounded-3xl overflow-hidden h-[340px] lg:h-[580px] order-2 lg:order-1 lg:sticky lg:top-28"
            >
              {/* Image with parallax */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                  alt="Professional financial consultation"
                  className="w-full h-[116%] object-cover object-center"
                  loading="lazy"
                  style={prefersReduced ? {} : { y: svcImgY }}
                  onError={(e) => {
                    const frame = e.currentTarget.closest('[class*="rounded-3xl"]') as HTMLElement | null
                    if (frame) frame.style.background = '#141821'
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/72 via-dark-900/12 to-transparent pointer-events-none" />
              {/* Quote card */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: easeOut }}
                className="absolute bottom-0 left-0 right-0 p-7"
              >
                <p className="font-serif italic text-[20px] md:text-[22px] text-white leading-snug">
                  "One conversation for every financial decision."
                </p>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/40 mt-3">
                  PAISACULTURE SERVICES LLP — PUNE
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Heading + service list */}
            <div className="order-1 lg:order-2">
              <div className="flex items-end justify-between mb-10">
                <motion.h2
                  initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: easeOut }}
                  className="font-serif text-display-md font-bold text-dark-900 max-w-[18ch] leading-tight"
                >
                  Everything Financial,<br className="hidden sm:block" /> In One Place
                </motion.h2>
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Link
                    to="/services"
                    className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-semibold text-dark-400 hover:text-primary transition-colors duration-150"
                  >
                    View All Services
                    <ArrowRight size={13} />
                  </Link>
                </motion.div>
              </div>

              <div className="border-t border-[rgba(20,24,33,0.06)]">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                  >
                    <Link
                      to={svc.href}
                      className="group flex items-center gap-5 py-5 border-b border-[rgba(20,24,33,0.06)] last:border-0 -mx-3 px-3 rounded-xl hover:bg-[rgba(14,165,233,0.03)] transition-colors duration-150"
                    >
                      <span className="font-mono text-[10px] tracking-[0.15em] text-dark-300 w-7 flex-shrink-0 select-none">
                        0{i + 1}
                      </span>
                      <div className={`w-9 h-9 rounded-xl ${svc.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.06]`}>
                        <span className={svc.accent}>{svc.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-bold text-[19px] text-dark-900 group-hover:text-primary transition-colors duration-150 leading-tight">
                          {svc.title}
                        </h3>
                        <p className="text-[13px] text-dark-400 hidden sm:block mt-0.5 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="text-dark-300 flex-shrink-0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. LIFE STAGES — Horizontal scroll cards ────────────── */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="mb-10">
            <motion.span
              initial={prefersReduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="eyebrow mb-3 block"
            >
              Life Stages
            </motion.span>
            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.07, ease: easeOut }}
              className="font-serif text-display-md font-bold text-dark-900 max-w-[22ch]"
            >
              Advice that grows with you
            </motion.h2>
          </div>

          <div className="overflow-x-auto no-scrollbar -mx-4 px-4">
            <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
              {ageStages.map((stage, i) => (
                <motion.div
                  key={stage.range}
                  initial={prefersReduced ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                  className="w-[196px] flex-shrink-0 rounded-2xl bg-[#F7F6F2] border border-[rgba(20,24,33,0.06)] p-5 hover:-translate-y-1 hover:shadow-card transition-all duration-200"
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                >
                  <span className="font-mono text-[9.5px] tracking-[0.18em] text-dark-400 uppercase">
                    Age {stage.range}
                  </span>
                  <p className="font-serif font-bold text-[20px] text-accent mt-1.5 mb-3 leading-tight">
                    {stage.label}
                  </p>
                  <ul className="space-y-1.5">
                    {stage.needs.map((need) => (
                      <li key={need} className="flex items-center gap-2 text-[12.5px] text-dark-600">
                        <span className="w-1 h-1 rounded-full bg-dark-300 flex-shrink-0" aria-hidden="true" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. START — Kinetic letter rows ──────────────────────── */}
      <section className="relative bg-[#141821] section-pad overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/[0.06] blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full bg-accent/[0.05] blur-[80px] pointer-events-none" aria-hidden="true" />

        <div className="container-xl relative">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-12"
          >
            <h2 className="font-serif text-display-md font-bold text-white">
              Why we say{' '}
              <em className="text-accent not-italic">START</em>
              {' '}with us
            </h2>
            <p className="text-white/50 text-[14.5px] mt-2 max-w-[44ch]">
              Every letter stands for a principle we apply to every client, every recommendation.
            </p>
          </motion.div>

          <div className="border-t border-white/[0.08]">
            {startItems.map((item, i) => (
              <motion.div
                key={`start-${i}`}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: easeOut }}
                className="grid grid-cols-[72px_1fr] md:grid-cols-[100px_1fr] gap-5 md:gap-8 py-6 border-b border-white/[0.07] last:border-0 group"
              >
                <div className="flex items-start pt-1">
                  <span
                    className="font-serif italic font-bold text-[72px] md:text-[88px] leading-none text-accent/60 group-hover:text-accent transition-colors duration-250 select-none"
                    style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  >
                    {item.letter}
                  </span>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="font-serif font-bold text-[20px] md:text-[22px] text-white mb-1.5 leading-tight">
                    {item.word}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed max-w-[52ch]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY US — Numbered editorial rows + flagship ─────── */}
      <section className="bg-[#F7F6F2] section-pad">
        <div className="container-xl">
          <motion.h2
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-serif text-display-md font-bold text-dark-900 max-w-[22ch] mb-14"
          >
            Built on trust, delivered with expertise
          </motion.h2>

          <div className="border-t border-[rgba(20,24,33,0.06)]">
            {whyUsItems.map((item, i) => (
              <motion.div
                key={item.num}
                initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 border-b border-[rgba(20,24,33,0.06)] last:border-0"
              >
                <span className="font-mono text-[10.5px] tracking-[0.15em] text-dark-300 pt-1 select-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-[22px] text-dark-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-dark-500 leading-relaxed max-w-[58ch]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flagship callout */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="mt-10 rounded-3xl bg-dark-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-7 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="flex-1 relative">
              <span className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-accent/75 mb-2 block">
                Flagship Services
              </span>
              <h3 className="font-serif font-bold text-[22px] md:text-[26px] text-white leading-tight mb-2">
                Portfolio Management &amp; Guaranteed Pension
              </h3>
              <p className="text-white/50 text-[14px] leading-relaxed max-w-[52ch]">
                PMS for wealth builders. Guaranteed Pension for certainty. Our two flagship offerings handle growth and protection together.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 relative">
              <Link to="/services/advisory"   className="btn-primary text-[13px]">Explore PMS</Link>
              <Link to="/services/investment" className="btn-outline-white text-[13px]">Pension Plans</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. TRUST STRIP ──────────────────────────────────────── */}
      <section className="bg-white py-12 border-y border-[rgba(20,24,33,0.06)]">
        <div className="container-xl">
          <LogoCloud items={allPartners} title="Trusted Partners" />
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-[#EEECE6] section-pad">
        <div className="container-xl">
          <motion.h2
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-serif text-display-md font-bold text-dark-900 mb-12 text-center"
          >
            Trusted across Maharashtra
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={prefersReduced ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className="bg-white rounded-2xl border border-[rgba(20,24,33,0.06)] p-6 shadow-card flex flex-col hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200"
                style={{ transitionTimingFunction: 'var(--ease-out)' }}
              >
                <Quote size={20} className="text-primary/25 mb-4 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-[14px] text-dark-700 leading-relaxed mb-5 flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(20,24,33,0.06)]">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover bg-dark-100"
                    loading="lazy"
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className="text-[13.5px] font-semibold text-dark-900">{t.author}</p>
                    <p className="text-[11.5px] text-dark-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Start Your Financial Journey"
        subtitle="Book a free 30-minute consultation. No obligation, no jargon — just clear, honest advice."
        primaryLabel="Book Free Consultation"
        primaryHref="/book-appointment"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref="https://wa.me/919922418172?text=Hi%2C%20I%27m%20interested%20in%20PAISACULTURE%27s%20financial%20services"
        variant="dark"
      />
    </>
  )
}
