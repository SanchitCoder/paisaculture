import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Shield, Heart, Car, Plane, Home, AlertCircle, HardHat, Users, CreditCard, UserCheck, Factory, Zap } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import FeatureBenefitCard from '../components/common/FeatureBenefitCard'
import CTASection from '../components/common/CTASection'
import PageHero from '../components/common/PageHero'
import SegmentPhoto from '../components/common/SegmentPhoto'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { heroImages, sectionImages } from '../data/images'

const retailCards = [
  { title: 'Life Insurance', desc: 'Term, endowment, ULIP, and whole life — protection and wealth together.', Icon: Heart, bg: 'bg-rose-50', color: 'text-rose-500' },
  { title: 'Health Insurance', desc: 'Individual, family floater, and senior citizen policies from top insurers.', Icon: Shield, bg: 'bg-primary-50', color: 'text-primary' },
  { title: 'Vehicle Insurance', desc: 'Comprehensive and third-party for two-wheelers and cars at best rates.', Icon: Car, bg: 'bg-amber-50', color: 'text-amber-600' },
  { title: 'Travel Insurance', desc: 'Domestic and international travel protection, medical emergencies included.', Icon: Plane, bg: 'bg-sky-50', color: 'text-sky-500' },
  { title: 'Home Insurance', desc: 'Protect your property from fire, theft, natural calamities, and structural damage.', Icon: Home, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  { title: 'Personal Accident', desc: 'Cover for accidental injury, permanent disability, and accidental death.', Icon: AlertCircle, bg: 'bg-orange-50', color: 'text-orange-500' },
]

const industrialCards = [
  {
    title: "Contractor's All Risk",
    desc: 'Covers civil engineering projects and construction works against unforeseen physical loss or damage.',
    Icon: HardHat,
    bg: 'bg-slate-50',
    color: 'text-slate-600',
  },
  {
    title: 'Keyman Insurance',
    desc: 'Financial protection for a business when a key employee or founder becomes unable to work.',
    Icon: Users,
    bg: 'bg-primary-50',
    color: 'text-primary',
  },
  {
    title: 'Trade Credit Insurance',
    desc: 'Protect your business receivables against buyer default, insolvency, or political risks.',
    Icon: CreditCard,
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
  },
  {
    title: 'Group Insurance',
    desc: 'Health, life, and accident cover for your entire workforce — ideal for SMEs and large enterprises.',
    Icon: UserCheck,
    bg: 'bg-accent-50',
    color: 'text-accent',
  },
  {
    title: 'Industrial All Risk',
    desc: 'Comprehensive coverage for industrial plants, machinery, and plant-related risks.',
    Icon: Factory,
    bg: 'bg-stone-50',
    color: 'text-stone-600',
  },
  {
    title: 'Special Perils',
    desc: 'Additional coverage for earthquake, flood, subsidence, and other natural catastrophe risks.',
    Icon: Zap,
    bg: 'bg-rose-50',
    color: 'text-rose-500',
  },
]

const keymanBenefits = [
  { t: 'Business continuity', d: 'Keeps the business running if a key decision-maker is incapacitated.' },
  { t: 'Loan collateral cover', d: 'Banks may require keyman insurance as a condition for business loans.' },
  { t: 'Talent retention tool', d: 'Demonstrates commitment to senior staff through executive benefit programs.' },
  { t: 'Tax benefit', d: "Premiums are often deductible as a business expense under the IT Act." },
  { t: 'Buy-sell agreements', d: 'Funds partnership buyouts cleanly when a key founder exits.' },
  { t: 'Shareholder protection', d: 'Protects minority shareholders from loss of a majority-driving partner.' },
]

export default function Insurance() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Insurance - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Retail and industrial insurance from PAISACULTURE: life, health, vehicle, travel, keyman, group, trade credit, and more. Get a free insurance review in Pune."
        />
      </Helmet>

      <PageHero
        eyebrow="Insurance"
        title="Protection for Every Life Stage and Business"
        subtitle="Retail and industrial insurance across all categories — with independent advice on which products genuinely protect you."
        imageSrc={heroImages.insurance.src}
        imageAlt={heroImages.insurance.alt}
      />

      {/* RETAIL INSURANCE */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Retail Insurance"
            title="Individual & Family Protection"
            subtitle="Coverage for every life event — from the unexpected to the unavoidable."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {retailCards.map(({ title, desc, Icon, bg, color }, i) => (
              <motion.div
                key={title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} strokeWidth={1.8} className={color} />
                </div>
                <h3 className="font-sans font-semibold text-[16px] text-dark-900 mb-1.5">{title}</h3>
                <p className="text-[13.5px] text-dark-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — insurance protection */}
      <section className="bg-canvas-alt border-y border-[rgba(27,54,93,0.08)]">
        <div className="container-xl py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <SegmentPhoto
              src={sectionImages.insuranceShield.src}
              alt={sectionImages.insuranceShield.alt}
              className="rounded-2xl h-[240px] md:h-[320px] shadow-card"
              overlay
            />
            <div>
              <p className="eyebrow mb-3">Coverage That Fits</p>
              <h2 className="font-serif text-display-md font-bold text-dark-900 mb-4 max-w-[20ch]">
                Shield what matters most
              </h2>
              <p className="text-[15px] text-dark-600 leading-relaxed max-w-[48ch]">
                From health emergencies to business continuity, the right insurance policy protects your savings, your family, and your enterprise — without paying for cover you do not need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL & COMMERCIAL */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Industrial & Commercial"
            title="Business Risk Coverage"
            subtitle="Comprehensive insurance solutions for SMEs, corporates, and industrial enterprises."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {industrialCards.map(({ title, desc, Icon, bg, color }, i) => (
              <motion.div
                key={title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} strokeWidth={1.8} className={color} />
                </div>
                <h3 className="font-sans font-semibold text-[16px] text-dark-900 mb-1.5">{title}</h3>
                <p className="text-[13.5px] text-dark-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Keyman deep dive */}
          <div className="bg-dark-50 rounded-2xl border border-dark-200 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Users size={20} strokeWidth={1.8} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-dark-900 mb-1">Keyman Insurance in Focus</h3>
                <p className="text-[14px] text-dark-600">
                  When a key person in your business becomes unavailable, the financial consequences can be severe. Keyman insurance is the professional safety net every SME needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {keymanBenefits.map((b, i) => (
                <FeatureBenefitCard
                  key={b.t}
                  number={i + 1}
                  title={b.t}
                  description={b.d}
                  delay={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get a Free Insurance Review"
        subtitle="We audit your existing policies and identify coverage gaps — at no cost to you."
        primaryLabel="Book Free Review"
        primaryHref="/book-appointment"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  )
}
