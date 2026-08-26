import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, Video, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { FormStatus } from '../types'

interface BookingForm {
  name: string
  phone: string
  email: string
  date: string
  time: string
  service: string
  mode: string
  notes: string
}

const initial: BookingForm = {
  name: '', phone: '', email: '', date: '', time: '', service: '', mode: '', notes: ''
}

const serviceOptions = ['Insurance Review', 'Loan Eligibility', 'Investment Planning', 'Portfolio Management (PMS)', 'Financial Planning', 'General Consultation']
const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
const modeOptions = [
  { value: 'call', label: 'Phone Call', Icon: Phone },
  { value: 'video', label: 'Video Call', Icon: Video },
  { value: 'inperson', label: 'In-Person', Icon: MapPin },
]

export default function BookAppointment() {
  const prefersReduced = useReducedMotion()
  const [form, setForm] = useState<BookingForm>(initial)
  const [errors, setErrors] = useState<Partial<BookingForm>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = (): boolean => {
    const e: Partial<BookingForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid mobile number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.date) e.date = 'Please select a date'
    if (!form.time) e.time = 'Please select a time'
    if (!form.service) e.service = 'Please select a service type'
    if (!form.mode) e.mode = 'Please select a meeting mode'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1600))
    setStatus('success')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof BookingForm]) {
      setErrors((p) => ({ ...p, [name]: undefined }))
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-white border border-dark-200 text-[14.5px] text-dark-800 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200'

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <>
      <Helmet>
        <title>Book Appointment - PAISACULTURE SERVICES LLP</title>
        <meta
          name="description"
          content="Book a free consultation with PAISACULTURE SERVICES LLP. Choose phone, video, or in-person meeting in Pune. Insurance, loans, investments, and advisory."
        />
      </Helmet>

      <section className="bg-dark-900 pt-24 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/7 blur-3xl" />
        </div>
        <div className="container-xl relative text-center">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow text-primary-300 mb-5 inline-flex justify-center">
              <span className="w-4 h-px bg-current mt-[7px]" />
              Free Consultation
              <span className="w-4 h-px bg-current mt-[7px]" />
            </span>
            <h1 className="font-serif text-display-lg font-bold text-white mb-4">
              Book Your Appointment
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto">
              30 minutes with our team. No sales pitch, no obligation. Just honest, expert financial advice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-xl max-w-3xl">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center py-20 px-8 bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] shadow-card"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={40} className="text-emerald-500" strokeWidth={1.8} />
                </motion.div>

                <h2 className="font-serif font-bold text-2xl text-dark-900 mb-3">Appointment Confirmed!</h2>
                <p className="text-dark-500 text-[15px] leading-relaxed mb-2 max-w-sm">
                  Thank you, <strong>{form.name.split(' ')[0]}</strong>. Your consultation has been scheduled.
                </p>
                <div className="bg-white rounded-xl p-4 mt-4 mb-8 text-left w-full max-w-xs space-y-2">
                  <div className="flex items-center gap-2 text-[13.5px] text-dark-700">
                    <Calendar size={14} className="text-primary" />
                    {form.date}
                  </div>
                  <div className="flex items-center gap-2 text-[13.5px] text-dark-700">
                    <Clock size={14} className="text-primary" />
                    {form.time}
                  </div>
                  <div className="flex items-center gap-2 text-[13.5px] text-dark-700">
                    {form.mode === 'call' ? <Phone size={14} className="text-primary" /> :
                     form.mode === 'video' ? <Video size={14} className="text-primary" /> :
                     <MapPin size={14} className="text-primary" />}
                    {modeOptions.find(m => m.value === form.mode)?.label}
                  </div>
                </div>
                <p className="text-[13px] text-dark-400 mb-6">
                  You will receive a confirmation call from our team. For urgent queries, call us directly at +91 70283 83848.
                </p>
                <button
                  onClick={() => { setForm(initial); setStatus('idle') }}
                  className="btn-secondary"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-[rgba(30,41,59,0.07)] p-5 sm:p-8 shadow-card space-y-6"
              >
                <h2 className="font-serif font-bold text-xl text-dark-900">Your Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name" className={`${inputBase} ${errors.name ? 'border-rose-400' : ''}`} />
                    {errors.name && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="10-digit mobile" className={`${inputBase} ${errors.phone ? 'border-rose-400' : ''}`} />
                    {errors.phone && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com" className={`${inputBase} ${errors.email ? 'border-rose-400' : ''}`} />
                  {errors.email && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.email}</p>}
                </div>

                <div className="border-t border-dark-100 pt-6">
                  <h3 className="font-serif font-semibold text-[17px] text-dark-900 mb-4">Schedule</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <input id="date" name="date" type="date" value={form.date} min={minDate} onChange={handleChange}
                        className={`${inputBase} ${errors.date ? 'border-rose-400' : ''}`} />
                      {errors.date && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.date}</p>}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                        Preferred Time <span className="text-rose-500">*</span>
                      </label>
                      <select id="time" name="time" value={form.time} onChange={handleChange}
                        className={`${inputBase} ${errors.time ? 'border-rose-400' : ''}`}>
                        <option value="">Select time</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.time && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.time}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                      Service Type <span className="text-rose-500">*</span>
                    </label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}
                      className={`${inputBase} ${errors.service ? 'border-rose-400' : ''}`}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.service}</p>}
                  </div>

                  {/* Meeting mode */}
                  <div>
                    <p className="text-[13px] font-semibold text-dark-700 mb-2.5">
                      Preferred Mode <span className="text-rose-500">*</span>
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {modeOptions.map(({ value, label, Icon }) => (
                        <label
                          key={value}
                          className={`flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            form.mode === value
                              ? 'border-primary bg-primary-50 text-primary'
                              : 'border-dark-200 bg-white text-dark-600 hover:border-primary/40'
                          }`}
                        >
                          <input
                            type="radio" name="mode" value={value}
                            checked={form.mode === value} onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon size={18} strokeWidth={1.8} />
                          <span className="text-[12px] font-semibold text-center">{label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.mode && <p className="mt-1 text-[12px] text-rose-500 flex items-center gap-1"><AlertCircle size={11}/>{errors.mode}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-[13px] font-semibold text-dark-700 mb-1.5">
                    Additional Notes <span className="text-dark-400 font-normal">(optional)</span>
                  </label>
                  <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange}
                    placeholder="Any specific questions or context for our team..."
                    className={`${inputBase} resize-none`} />
                </div>

                <button
                  type="submit" disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-base disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60 28" />
                      </svg>
                      Booking...
                    </span>
                  ) : (
                    <><Calendar size={16} /> Confirm Appointment</>
                  )}
                </button>

                <p className="text-[12px] text-dark-400 text-center">
                  By submitting, you agree to be contacted by PAISACULTURE SERVICES LLP regarding your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
