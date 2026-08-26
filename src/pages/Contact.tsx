import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { FormStatus } from '../types'

const serviceOptions = ['Insurance', 'Loans', 'Investment', 'Advisory', 'Other']

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormData = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const prefersReduced = useReducedMotion()
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit mobile number'
    if (!form.service) newErrors.service = 'Please select a service'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-white border border-dark-200 text-[14.5px] text-dark-800 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200'

  return (
    <>
      <Helmet>
        <title>Contact - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Get in touch with PAISACULTURE SERVICES LLP in Pune. Call +91 70283 83848 or email info@paisaculture.com for insurance, loan, investment, and advisory queries."
        />
      </Helmet>

      {/* PAGE HERO */}
      <section className="bg-dark-900 pt-24 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-primary/7 blur-3xl" />
        </div>
        <div className="container-xl relative">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow text-primary-300 mb-5 inline-flex">
              <span className="w-4 h-px bg-current mt-[7px]" />
              Contact Us
              <span className="w-4 h-px bg-current mt-[7px]" />
            </span>
            <h1 className="font-serif text-display-lg font-bold text-white mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-lg">
              We respond to every inquiry within one business day. Send us a message or call directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* CONTACT FORM */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif font-bold text-2xl text-dark-900 mb-6">Send Us a Message</h2>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-16 px-8 bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] shadow-card"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-emerald-500" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-dark-900 mb-2">Message Received</h3>
                  <p className="text-dark-500 text-[14.5px] mb-6">
                    Thank you, {form.name.split(' ')[0]}. We will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => { setForm(initialForm); setStatus('idle') }}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 bg-white p-7 rounded-2xl border border-[rgba(30,41,59,0.07)] shadow-card">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" value={form.name}
                        onChange={handleChange} placeholder="Your full name"
                        className={`${inputBase} ${errors.name ? 'border-rose-400 focus:ring-rose-400/40' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-[12px] text-rose-500 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                        Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" value={form.phone}
                        onChange={handleChange} placeholder="10-digit mobile number"
                        className={`${inputBase} ${errors.phone ? 'border-rose-400 focus:ring-rose-400/40' : ''}`}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-[12px] text-rose-500 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="you@example.com"
                      className={`${inputBase} ${errors.email ? 'border-rose-400 focus:ring-rose-400/40' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Service Interested In <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service" name="service" value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.service ? 'border-rose-400' : ''}`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4} value={form.message}
                      onChange={handleChange} placeholder="Tell us how we can help..."
                      className={`${inputBase} resize-none ${errors.message ? 'border-rose-400' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60 28" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* CONTACT DETAILS + MAP */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-serif font-bold text-2xl text-dark-900">Our Office</h2>

              <div className="space-y-4">
                {[
                  { Icon: Phone, label: 'Phone', value: '+91 70283 83848', href: 'tel:+917028383848' },
                  { Icon: Mail, label: 'Email', value: 'info@paisaculture.com', href: 'mailto:info@paisaculture.com' },
                  { Icon: MapPin, label: 'Address', value: 'Pune, Maharashtra, India', href: undefined },
                  { Icon: Clock, label: 'Hours', value: 'Mon-Sat: 10:00 AM - 7:00 PM', href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[rgba(30,41,59,0.07)] shadow-card">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} strokeWidth={2} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-dark-400">{label}</p>
                      {href ? (
                        <a href={href} className="text-[14.5px] text-dark-800 hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[14.5px] text-dark-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-dark-200 h-64 bg-dark-50 relative">
                <iframe
                  title="PAISACULTURE office location in Pune"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242180.68388596963!2d73.72544625390625!3d18.52435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717152000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-5 rounded-xl bg-primary-50 border border-primary-100">
                <p className="text-[13.5px] text-primary-800 leading-relaxed">
                  <strong>Prefer to chat?</strong> WhatsApp us directly at{' '}
                  <a
                    href="https://wa.me/919922418172?text=Hi%2C%20I%27m%20interested%20in%20PAISACULTURE%27s%20financial%20services"
                    className="underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 99224 18172
                  </a>{' '}
                  — we typically reply within 2 hours on business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
