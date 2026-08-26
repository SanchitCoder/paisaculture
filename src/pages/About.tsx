import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Users, Briefcase, Target, Eye, Heart } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import StatBadge from '../components/common/StatBadge'
import CTASection from '../components/common/CTASection'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { teamMembers } from '../data/team'

const values = [
  {
    icon: <Target size={22} strokeWidth={1.8} className="text-primary" />,
    title: 'Customer First',
    desc: 'Every decision we make is evaluated by one criterion: is this genuinely in the client\'s best interest?',
    bg: 'bg-primary-50',
  },
  {
    icon: <Eye size={22} strokeWidth={1.8} className="text-accent" />,
    title: 'Transparency',
    desc: 'We explain every recommendation in plain language, including costs, risks, and realistic outcomes.',
    bg: 'bg-accent-50',
  },
  {
    icon: <Heart size={22} strokeWidth={1.8} className="text-rose-500" />,
    title: 'Long-term Relationship',
    desc: 'We are not transactional. We build relationships that last across careers, life stages, and generations.',
    bg: 'bg-rose-50',
  },
  {
    icon: <Briefcase size={22} strokeWidth={1.8} className="text-emerald-600" />,
    title: 'Domain Expertise',
    desc: 'Our co-founders bring deep domain expertise across insurance, loans, investments, and advisory — your questions get answered by the right specialist.',
    bg: 'bg-emerald-50',
  },
]

export default function About() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>About Us - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Founded by Kounal Chorrdiyaa and Harshal Chordiya in Pune, PAISACULTURE simplifies financial complexity with a single-window advisory across insurance, loans, investments, and advisory."
        />
      </Helmet>

      {/* PAGE HERO */}
      <section className="relative bg-dark-900 pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container-xl relative">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow text-primary-300 mb-5 inline-flex">
              <span className="w-4 h-px bg-current mt-[7px]" />
              About Us
              <span className="w-4 h-px bg-current mt-[7px]" />
            </span>
            <h1 className="font-serif text-display-lg font-bold text-white mb-5 max-w-2xl text-balance">
              Built by Entrepreneurs, for Everyone
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
              PAISACULTURE was born from a shared frustration: financial advice was fragmented, jargon-heavy, and rarely in the client's corner. We set out to fix that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-display-md font-bold text-dark-900 mb-5">
                Our Story
              </h2>
              <div className="space-y-4 text-[15px] text-dark-600 leading-relaxed">
                <p>
                  Kounal Chorrdiyaa and Harshal Chordiya saw the same problem from different angles — financial advice was fragmented, jargon-heavy, and rarely in the client's corner. Insurance, loans, and investments were handled by separate agents with no one looking at the full picture.
                </p>
                <p>
                  That shared frustration became PAISACULTURE SERVICES LLP. Together they pooled their expertise across insurance, banking, investments, and financial planning — and built a firm that gives every client what they could not find themselves: one trusted advisor for every financial need.
                </p>
                <p>
                  Today we serve working professionals, business owners, and rural clients across Maharashtra and beyond. Our network of preferred banks, insurers, and broking partners means you always get best-in-class products — with independent advice about which one is right for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              {/* Pull quote */}
              <div className="p-8 rounded-2xl bg-dark-50 border-l-4 border-primary">
                <p className="font-serif italic text-lg text-dark-800 leading-relaxed">
                  "Money Saved is Money Earned. Every recommendation we make is measured against that single principle."
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-dark-100">
                <MapPin size={18} className="text-primary flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-[13px] font-semibold text-dark-800">Based in Pune, Maharashtra</p>
                  <p className="text-[12.5px] text-dark-500">Serving clients locally, nationally, and in rural India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-dark-100">
                <Users size={18} className="text-primary flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-[13px] font-semibold text-dark-800">2 Co-Founders, One Vision</p>
                  <p className="text-[12.5px] text-dark-500">Cross-domain expertise in a single advisory relationship</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-dark-900 py-16">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2, suffix: '', label: 'Co-Founders' },
              { value: 10, suffix: '+', label: 'Businesses' },
              { value: 8, suffix: '+', label: 'Years in Business' },
              { value: 20, suffix: '+', label: 'Partner Banks & Insurers' },
            ].map((stat, i) => (
              <StatBadge
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 150}
                light
              />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-8 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <Target size={20} strokeWidth={1.8} className="text-primary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-dark-900 mb-3">Our Mission</h3>
              <p className="text-[14.5px] text-dark-600 leading-relaxed">
                To simplify financial complexity for every Indian household and business — providing clear, trustworthy, all-under-one-roof advisory that puts the client's financial wellbeing first.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-8 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Eye size={20} strokeWidth={1.8} className="text-accent" />
              </div>
              <h3 className="font-serif font-bold text-xl text-dark-900 mb-3">Our Vision</h3>
              <p className="text-[14.5px] text-dark-600 leading-relaxed">
                To become India's most trusted single-window financial advisory firm — known for independence, expertise, and the courage to always say what the client needs to hear.
              </p>
            </motion.div>
          </div>

          <SectionHeading
            eyebrow="Our Values"
            title="Principles We Never Compromise"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  {v.icon}
                </div>
                <h4 className="font-sans font-semibold text-dark-900 mb-2">{v.title}</h4>
                <p className="text-[13.5px] text-dark-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Founders"
            title="Meet Our Co-Founders"
            subtitle="The visionaries behind Paisa Culture — bringing insurance, investments, loans, and wealth management under one trusted roof."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden bg-primary-50">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-sans font-semibold text-[15px] text-dark-900">{member.name}</h4>
                  <p className="text-[12px] font-medium text-primary mt-0.5 mb-2">{member.role}</p>
                  <p className="text-[12.5px] text-dark-500 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-canvas-alt section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <SectionHeading
              eyebrow="Why Choose PAISACULTURE"
              title="Single-Window. Expert. Independent."
              subtitle="We are not tied to any single product, bank, or insurer. Our only obligation is to give you the best solution for your needs."
              align="left"
            />

            <div className="grid grid-cols-1 gap-4">
              {[
                { t: 'No product push', d: 'We recommend what is right for you, not what earns us the highest commission.' },
                { t: 'Coordinated strategy', d: 'Insurance, loans, and investments reviewed together so there are no gaps or conflicts.' },
                { t: 'Accessible across India', d: 'Serving urban professionals, rural clients, and everyone in between.' },
                { t: 'Post-sales support', d: 'Claims assistance, policy reviews, and loan management — we stay with you.' },
              ].map((item, i) => (
                <motion.div
                  key={item.t}
                  initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[rgba(30,41,59,0.07)] shadow-card"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                    <span className="font-mono text-[12px] font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[14.5px] text-dark-900">{item.t}</p>
                    <p className="text-[13px] text-dark-500">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Simplify Your Finances?"
        subtitle="Talk to our team and get a clear picture of where you stand — and where you could be."
        primaryLabel="Book Free Consultation"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  )
}
