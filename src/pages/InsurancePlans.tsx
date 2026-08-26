import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  MapPin, ShieldCheck, FileText, Landmark, Users, Headset, BadgeCheck, Layers,
  Clock, FileCheck, Home as HomeIcon, RefreshCw,
  HeartPulse, ShieldAlert, CircleDollarSign, TrendingUp, Gauge, Wrench, Award, LifeBuoy,
  Car, Heart, Calendar, ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle, Send,
} from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import StatBadge from '../components/common/StatBadge'
import CTASection from '../components/common/CTASection'
import LeadCTAButton from '../components/lead/LeadCTAButton'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { heroImages, serviceImages, sectionImages } from '../data/images'
import type { FormStatus } from '../types'

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

const WA_LINK =
  'https://wa.me/919922418172?text=Hi%2C%20I%27m%20interested%20in%20Term%2C%20Life%20or%20Vehicle%20Insurance%20from%20PAISACULTURE'

/* ── Overview info grid ─────────────────────────────────────── */
const overviewFacts = [
  { Icon: MapPin, label: 'Pune, Maharashtra' },
  { Icon: ShieldCheck, label: '15+ Insurers Compared' },
  { Icon: FileText, label: 'Term, Life & Vehicle Insurance' },
  { Icon: Landmark, label: '₹100 Cr+ Insurance Cover Protected' },
  { Icon: Users, label: 'Single-Window, Unbiased Advisory' },
  { Icon: Headset, label: 'Dedicated Claim Support Team' },
  { Icon: BadgeCheck, label: 'IRDAI-Compliant Advisory', check: true },
  { Icon: Layers, label: 'Retail & Corporate Insurance' },
]

/* ── Highlights ──────────────────────────────────────────────── */
const differentiators = [
  'Independent advice — we compare plans across 15+ insurers, not just one',
  'Licensed, in-house advisory team — no outsourced call centres',
  'Dedicated claim assistance from filing to settlement',
  'Transparent premiums — no hidden loading or bundled add-ons',
  'One advisor for insurance, loans, investments & advisory',
]

const whatYouGet = [
  'Free policy comparison & needs analysis',
  'Doorstep document pickup — zero paperwork hassle',
  'Instant e-policy copy on issuance',
  'Annual policy health check-up, at no extra cost',
]

/* ── How it works ───────────────────────────────────────────── */
const processSteps = [
  { num: '01', title: 'Free Consultation', desc: 'Share your protection needs and budget with our advisors.', image: sectionImages.financialPlanning },
  { num: '02', title: 'Compare 15+ Insurers', desc: 'We shortlist the best-fit plans across insurers, side by side.', image: sectionImages.insuranceShield },
  { num: '03', title: 'Choose & Buy', desc: 'Pick your plan — we handle the paperwork and issuance.', image: serviceImages.insurance },
  { num: '04', title: 'Claim Assistance', desc: 'From intimation to settlement, we stay with you.', image: serviceImages.wealthOverview },
]

/* ── Plans ───────────────────────────────────────────────────── */
const plans = [
  {
    title: 'Term & Life Insurance',
    Icon: Heart,
    metaLabel: 'Cover Amount',
    metaValue: 'Up to ₹2 Cr+',
    priceLabel: 'Premium',
    priceValue: 'Starting ₹436/month*',
    bullets: [
      'Tax benefit under 80C & 10(10D)',
      'Riders: critical illness, accidental death & more',
      'Claim assistance included',
    ],
  },
  {
    title: 'Vehicle Insurance',
    Icon: Car,
    metaLabel: 'Cover Type',
    metaValue: 'Comprehensive & Third-Party',
    priceLabel: 'Premium',
    priceValue: 'Starting ₹2,072/year*',
    bullets: [
      'Own damage + third-party liability',
      'Cashless network garages',
      'Instant policy copy & NCB transfer',
    ],
  },
]

/* ── Claim & support advantage ──────────────────────────────── */
const supportRows = [
  { Icon: Clock, value: '24 Hrs', label: 'Policy issuance turnaround' },
  { Icon: FileCheck, value: '48 Hrs', label: 'Claim intimation response' },
  { Icon: ShieldCheck, value: '15+', label: 'Insurers compared for the best fit' },
  { Icon: Users, value: '1:1', label: 'Dedicated relationship manager' },
  { Icon: Headset, value: '24x7', label: 'Claim support helpline' },
  { Icon: BadgeCheck, value: 'Zero', label: 'Hidden charges or product bias' },
  { Icon: HomeIcon, value: 'Doorstep', label: 'Document pickup & KYC' },
  { Icon: RefreshCw, value: 'Annual', label: 'Policy health check-up' },
]

/* ── Riders & add-ons ───────────────────────────────────────── */
const riders = [
  { Icon: HeartPulse, label: 'Critical Illness Rider' },
  { Icon: ShieldAlert, label: 'Accidental Death Benefit' },
  { Icon: CircleDollarSign, label: 'Waiver of Premium' },
  { Icon: TrendingUp, label: 'Income Benefit Rider' },
  { Icon: Gauge, label: 'Zero Depreciation Cover' },
  { Icon: Wrench, label: 'Engine Protect Cover' },
  { Icon: Award, label: 'No Claim Bonus Protection' },
  { Icon: LifeBuoy, label: '24x7 Roadside Assistance' },
]

/* ── FAQs ────────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Is term insurance enough, or do I need a separate life insurance plan?',
    a: 'Term insurance covers pure protection at a low cost. If you also want savings or investment along with cover, we compare endowment and ULIP plans that fit your goals.',
  },
  {
    q: 'Will comparing plans with Paisa Culture cost me anything?',
    a: 'No. Our policy comparison and needs analysis is completely free, regardless of whether you buy through us.',
  },
  {
    q: 'Do you help with claims after the policy is bought?',
    a: 'Yes. Our team stays with you from claim intimation to settlement — for both life and vehicle insurance.',
  },
  {
    q: 'Can I switch my existing vehicle insurance to a better plan?',
    a: 'Yes, at renewal you can port your policy — we compare your current cover against 15+ insurers first.',
  },
  {
    q: 'How is Paisa Culture different from buying directly from an insurer?',
    a: "We're not tied to one insurer, so our recommendation is based on your needs, not a single company's product line.",
  },
  {
    q: 'How soon can I get a quote?',
    a: 'Most quotes are shared within a few hours of sharing your details — book a free consultation to get started.',
  },
]

/* ── About stats ─────────────────────────────────────────────── */
const aboutStats = [
  { value: 100, prefix: '₹', suffix: ' Cr+', label: 'Insurance Cover Protected' },
  { value: 15, suffix: '+', label: 'Insurers Compared' },
  { value: 5, suffix: '', label: 'Founders, 10+ Businesses' },
]

const interestOptions = ['Term Insurance', 'Life Insurance', 'Vehicle Insurance', 'Not Sure Yet']

interface QuoteForm {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

const initialQuoteForm: QuoteForm = { name: '', email: '', phone: '', interest: '', message: '' }

export default function InsurancePlans() {
  const prefersReduced = useReducedMotion()
  const [form, setForm] = useState<QuoteForm>(initialQuoteForm)
  const [errors, setErrors] = useState<Partial<QuoteForm>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitError, setSubmitError] = useState('')

  const inputBase =
    'w-full px-3.5 py-2.5 rounded-xl bg-white border border-dark-200 text-[13.5px] text-dark-800 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200'

  const validate = (): boolean => {
    const next: Partial<QuoteForm> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a valid 10-digit mobile number'
    if (!form.interest) next.interest = 'Please select what you need'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof QuoteForm]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setSubmitError('')

    const { submitLead } = await import('../services/submitLead')
    const result = await submitLead({
      source: 'cta',
      ctaLabel: 'Insurance Landing — Get a Free Quote',
      answers: { interestedIn: form.interest, message: form.message },
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.replace(/\s/g, ''),
      submittedAt: new Date().toISOString(),
    })

    if (result.ok) {
      setStatus('success')
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again or call us directly.')
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Term, Life & Vehicle Insurance Plans - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Compare Term, Life and Vehicle Insurance from 15+ insurers with PAISACULTURE, Pune's independent insurance advisory. Free comparison, dedicated claim support, and a quote in hours."
        />
      </Helmet>

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-primary-900 pt-24 md:pt-28 overflow-hidden">
        <div className="relative h-[420px] md:h-[560px]">
          <img
            src={heroImages.insurance.src}
            alt={heroImages.insurance.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/55 to-primary-900/25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 right-1/5 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          </div>

          {/* Floating hero card */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-xl pb-8 md:pb-12">
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: easeOut }}
                className="max-w-xl bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-pill-elevated"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-50 text-accent text-[12px] font-semibold mb-4">
                  Term Cover Starting ₹436/month*
                </span>
                <h1 className="font-serif text-display-md md:text-display-lg font-bold text-dark-900 mb-2 leading-[1.05] text-balance">
                  Insurance That Actually Has Your Back
                </h1>
                <p className="text-[14.5px] text-dark-500 mb-5">
                  Independent Advisory · Pune, Maharashtra
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-50 border border-dark-200 text-[12.5px] font-medium text-dark-700">
                    <ShieldCheck size={14} className="text-primary" />
                    Compare 15+ Insurers, One Advisor
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-[12.5px] font-medium text-emerald-700">
                    <BadgeCheck size={14} />
                    IRDAI-Compliant Advisory
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <LeadCTAButton ctaLabel="Book Free Consultation — Hero" className="btn-primary group">
                    <Calendar size={15} />
                    Book Free Consultation
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </LeadCTAButton>
                  <a href="tel:+917028383848" className="btn-secondary">
                    <Phone size={15} />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OVERVIEW ─────────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Overview"
            className="mb-10"
          />
          <p className="text-[15px] text-dark-600 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            PAISACULTURE SERVICES LLP is Pune's independent insurance advisory — part of a
            five-founder financial advisory group covering insurance, loans, investments and
            portfolio management. On insurance, we compare Term, Life and Vehicle plans across
            15+ leading insurers so you get the policy that fits your life, not the one that
            pays the highest commission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
            {overviewFacts.map(({ Icon, label, check }, i) => (
              <motion.div
                key={label}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="flex items-center gap-3 bg-white rounded-xl border border-[rgba(30,41,59,0.08)] px-4 py-3 shadow-card"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} strokeWidth={1.8} className="text-primary" />
                </div>
                <span className="text-[13.5px] font-medium text-dark-800">{label}</span>
                {check && <CheckCircle2 size={15} className="text-emerald-500 ml-auto flex-shrink-0" />}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+917028383848" className="btn-secondary">
              <Phone size={15} />
              Call +91 70283 83848
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-[14px] font-semibold rounded-xl transition-[transform,box-shadow] duration-150 hover:shadow-[0_4px_16px_rgba(37,211,102,0.32)] active:scale-[0.97]"
            >
              <MessageCircle size={15} />
              WhatsApp Now
            </a>
            <LeadCTAButton ctaLabel="Book Free Consultation" className="btn-primary group">
              <Calendar size={15} />
              Book Free Consultation
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </LeadCTAButton>
          </div>
        </div>
      </section>

      {/* ─── 3. HIGHLIGHTS ───────────────────────────────────────── */}
      <section className="bg-canvas-alt section-pad border-y border-[rgba(27,54,93,0.08)]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Why Choose Us"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="bg-white rounded-2xl border border-[rgba(30,41,59,0.08)] p-7 md:p-8 shadow-card"
            >
              <h3 className="font-serif font-bold text-xl text-dark-900 mb-5">What Makes Us Different</h3>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[14px] text-dark-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
              className="bg-primary-900 rounded-2xl p-7 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden="true" />
              <h3 className="font-serif font-bold text-xl text-white mb-5 relative">What You Get</h3>
              <ul className="space-y-4 relative">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[14px] text-white/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="How It Works"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={prefersReduced ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className="relative rounded-2xl overflow-hidden h-[220px] group"
              >
                <img
                  src={step.image.src}
                  alt={step.image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent-400 uppercase">
                    Step {step.num}
                  </span>
                  <h3 className="font-serif font-bold text-[18px] text-white mt-1 mb-1">{step.title}</h3>
                  <p className="text-[12.5px] text-white/70 leading-relaxed max-w-[36ch]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PLANS ────────────────────────────────────────────── */}
      <section className="bg-canvas-alt section-pad border-y border-[rgba(27,54,93,0.08)]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Plans We Compare"
            subtitle="Two of our most-requested categories — matched to your profile from 15+ insurers."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: easeOut }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.08)] p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <plan.Icon size={20} strokeWidth={1.8} className="text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-dark-900 mb-4">{plan.title}</h3>

                <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-[rgba(30,41,59,0.08)]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-dark-400 mb-1">{plan.metaLabel}</p>
                    <p className="text-[14px] font-semibold text-dark-900">{plan.metaValue}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-dark-400 mb-1">{plan.priceLabel}</p>
                    <p className="text-[14px] font-semibold text-accent">{plan.priceValue}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] text-dark-600 leading-relaxed">
                      <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <LeadCTAButton ctaLabel={`Enquire — ${plan.title}`} className="btn-primary w-full justify-center text-[13px]">
                  Enquire Now
                </LeadCTAButton>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[12px] text-dark-400 mt-6 max-w-2xl mx-auto">
            *Premiums are indicative and vary by insurer, age, vehicle and profile. Final premium confirmed by the insurer at issuance.
          </p>
        </div>
      </section>

      {/* ─── 6. CLAIM & SUPPORT ADVANTAGE ────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Claim & Support Advantage"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="relative rounded-2xl overflow-hidden h-[300px] md:h-[380px]"
            >
              <img
                src={sectionImages.portfolioCharts.src}
                alt={sectionImages.portfolioCharts.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-primary-900/10 to-transparent" aria-hidden="true" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {supportRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[rgba(30,41,59,0.08)] px-4 py-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <row.Icon size={16} strokeWidth={1.8} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-dark-900 leading-tight">{row.value}</p>
                    <p className="text-[11.5px] text-dark-500 leading-tight">{row.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. RIDERS & ADD-ONS ─────────────────────────────────── */}
      <section className="bg-canvas-alt section-pad border-y border-[rgba(27,54,93,0.08)]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Riders & Add-Ons"
            subtitle="Strengthen your base policy with the right add-ons — we help you pick only what you need."
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {riders.map((r, i) => (
              <motion.div
                key={r.label}
                initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="flex flex-col items-center text-center gap-3 bg-primary-900 rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <r.Icon size={20} strokeWidth={1.8} className="text-accent-400" />
                </div>
                <span className="text-[12.5px] font-semibold text-white leading-tight">{r.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. MID CTA BANNER ───────────────────────────────────── */}
      <section className="bg-primary-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/[0.06] blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="container-xl py-8 md:py-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-white">Ready to Get Insured?</h3>
              <p className="text-white/55 text-[13.5px] mt-1">Compare plans and get a free quote in minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-[14px] font-semibold rounded-xl transition-[transform,box-shadow] duration-150 hover:shadow-[0_4px_16px_rgba(37,211,102,0.32)] active:scale-[0.97] w-full sm:w-auto justify-center"
              >
                <MessageCircle size={15} />
                WhatsApp Now
              </a>
              <a href="tel:+917028383848" className="btn-outline-white w-full sm:w-auto justify-center">
                <Phone size={15} />
                +91 70283 83848
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Paisa Culture"
            title="Common Questions"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto border-t border-[rgba(20,24,33,0.06)]">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                className="grid grid-cols-[44px_1fr] gap-4 py-6 border-b border-[rgba(20,24,33,0.06)] last:border-0"
              >
                <span className="font-mono text-[11px] tracking-[0.15em] text-dark-300 pt-1 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-[15.5px] text-dark-900 mb-1.5 leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-[13.5px] text-dark-500 leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-canvas-alt rounded-2xl border border-[rgba(30,41,59,0.08)] px-6 py-6"
          >
            <div className="text-center sm:text-left">
              <h3 className="font-serif font-bold text-lg text-dark-900">Still have questions?</h3>
              <p className="text-[13.5px] text-dark-500 mt-0.5">Talk to an advisor — no cost, no obligation.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <LeadCTAButton ctaLabel="Book Free Consultation — FAQ" className="btn-primary w-full sm:w-auto justify-center text-[13.5px]">
                <Calendar size={14} />
                Book Free Consultation
              </LeadCTAButton>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-[13.5px] font-semibold rounded-xl transition-[transform,box-shadow] duration-150 hover:shadow-[0_4px_16px_rgba(37,211,102,0.32)] active:scale-[0.97] w-full sm:w-auto"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 10. VISUAL BREAK ────────────────────────────────────── */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={heroImages.advisory.src}
          alt={heroImages.advisory.alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/92 via-primary-900/40 to-primary-900/10" aria-hidden="true" />
        <div className="container-xl relative h-full flex items-end pb-10 md:pb-14">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <p className="font-serif italic text-[22px] md:text-[28px] text-white leading-snug max-w-2xl">
              "Real protection starts with honest advice."
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/40 mt-3">
              PAISACULTURE SERVICES LLP — INSURANCE ADVISORY, PUNE
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 11. ABOUT + ENQUIRY FORM ────────────────────────────── */}
      <section className="bg-canvas-alt section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <span className="eyebrow mb-3 block">About Paisa Culture</span>
              <h2 className="font-serif text-display-md font-bold text-dark-900 mb-5 max-w-[18ch]">
                One Advisor. Every Policy Compared.
              </h2>
              <p className="text-[14.5px] text-dark-600 leading-relaxed mb-4 max-w-[54ch]">
                PAISACULTURE SERVICES LLP is a Pune-based, single-window financial advisory
                built by five entrepreneur friends running 10+ businesses of their own. On
                insurance, that means one advisor who understands term, life and vehicle cover
                well enough to compare them honestly — not five different agents selling five
                different products.
              </p>
              <p className="text-[14.5px] text-dark-600 leading-relaxed mb-8 max-w-[54ch]">
                We're not captive to any single insurer. Every recommendation is measured
                against one standard: is this genuinely the right cover for you.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-[rgba(20,24,33,0.08)]">
                {aboutStats.map((stat, i) => (
                  <StatBadge
                    key={stat.label}
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={i * 110}
                  />
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-primary hover:text-primary-700 transition-colors duration-150"
              >
                More about us
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Enquiry form */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
              className="bg-white rounded-2xl border border-[rgba(30,41,59,0.08)] shadow-card p-7 md:p-8"
            >
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-xl text-dark-900 mb-2">Quote request received</h3>
                  <p className="text-[14px] text-dark-500 leading-relaxed">
                    Thank you — our team will reach out within a few hours with your comparison.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif font-bold text-xl text-dark-900 mb-1">Get a Free Quote</h3>
                  <p className="text-[13.5px] text-dark-500 mb-6">
                    Tell us a bit about what you need — we'll get back within a few hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label htmlFor="qf-name" className="block text-[12px] font-semibold text-dark-700 mb-1">Full Name</label>
                      <input
                        id="qf-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={inputBase}
                      />
                      {errors.name && <p className="text-[11.5px] text-accent font-medium mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="qf-email" className="block text-[12px] font-semibold text-dark-700 mb-1">Email</label>
                      <input
                        id="qf-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputBase}
                      />
                      {errors.email && <p className="text-[11.5px] text-accent font-medium mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="qf-phone" className="block text-[12px] font-semibold text-dark-700 mb-1">Phone</label>
                      <input
                        id="qf-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        autoComplete="tel"
                        className={inputBase}
                      />
                      {errors.phone && <p className="text-[11.5px] text-accent font-medium mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="qf-interest" className="block text-[12px] font-semibold text-dark-700 mb-1">Interested In</label>
                      <select
                        id="qf-interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select an option</option>
                        {interestOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.interest && <p className="text-[11.5px] text-accent font-medium mt-1">{errors.interest}</p>}
                    </div>

                    <div>
                      <label htmlFor="qf-message" className="block text-[12px] font-semibold text-dark-700 mb-1">Message (optional)</label>
                      <textarea
                        id="qf-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us anything specific — current policy, age, vehicle model, etc."
                        rows={3}
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="flex items-center gap-1.5 text-[12.5px] text-accent font-medium">
                        <AlertCircle size={14} />
                        {submitError}
                      </p>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-[13.5px] disabled:opacity-60">
                      <Send size={14} />
                      {status === 'loading' ? 'Sending…' : 'Get My Free Quote'}
                    </button>
                  </form>

                  <div className="flex items-center gap-3 my-5">
                    <span className="flex-1 h-px bg-[rgba(20,24,33,0.08)]" />
                    <span className="text-[11px] font-medium text-dark-400 uppercase tracking-wide">or</span>
                    <span className="flex-1 h-px bg-[rgba(20,24,33,0.08)]" />
                  </div>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-[13.5px] font-semibold transition-colors duration-150 hover:bg-emerald-100"
                  >
                    <MessageCircle size={15} />
                    Chat on WhatsApp Instead
                  </a>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ───────────────────────────────────────── */}
      <CTASection
        title="Book Your Free Insurance Consultation"
        subtitle="30 minutes, no obligation — we'll map your term, life and vehicle cover against 15+ insurers and tell you exactly where you stand."
        primaryLabel="Book Free Consultation"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={WA_LINK}
        variant="dark"
      />

      {/* ─── 13. DISCLAIMER ──────────────────────────────────────── */}
      <section className="bg-dark-50 border-t border-[rgba(27,54,93,0.08)] py-6">
        <div className="container-xl">
          <p className="text-[11.5px] text-dark-400 leading-relaxed text-center max-w-4xl mx-auto">
            Disclaimer: Insurance is the subject matter of solicitation. PAISACULTURE SERVICES LLP
            is a registered insurance intermediary and does not underwrite any policy. Please read
            the policy wording, terms, exclusions and premium details carefully before concluding
            a sale. Premiums, coverage amounts and turnaround times shown on this page are
            indicative, subject to insurer underwriting, and may vary by insurer, product, age,
            and profile.
          </p>
        </div>
      </section>
    </>
  )
}
