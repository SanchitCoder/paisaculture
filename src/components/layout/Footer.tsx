import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const serviceLinks = [
  { label: 'Insurance', href: '/services/insurance' },
  { label: 'Loans', href: '/services/loans' },
  { label: 'Investment', href: '/services/investment' },
  { label: 'Advisory', href: '/services/advisory' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Twitter/X', href: '#', Icon: Twitter },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Instagram', href: '#', Icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-xl">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 py-10 md:py-16 lg:py-20 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex">
                <img
                  src="/logo.png"
                  alt="Paisa Culture"
                  className="h-8 w-auto object-contain"
                  width={110}
                  height={32}
                />
              </div>
            </Link>

            <p className="font-serif italic text-[15px] text-accent-400 mb-4">
              "Money Saved is Money Earned"
            </p>

            <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
              5 entrepreneur friends. 10+ businesses. One-window financial advisory covering insurance, loans, investments, and portfolio management.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[14px] text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[14px] text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919922418172"
                  className="flex items-start gap-3 text-[14px] text-white/65 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                  +91 99224 18172
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@paisaculture.com"
                  className="flex items-start gap-3 text-[14px] text-white/65 hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                  info@paisaculture.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.paisaculture.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[14px] text-white/65 hover:text-white transition-colors"
                >
                  <Globe size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                  www.paisaculture.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[14px] text-white/65">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-[12px] text-white/40 mb-1">Office Hours</p>
              <p className="text-[13px] text-white/60">Mon-Sat: 10:00 AM - 7:00 PM</p>
              <p className="text-[13px] text-white/60">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-[12.5px] text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} PAISACULTURE SERVICES LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[12.5px] text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-4 border-t border-white/[0.04]">
          <p className="text-[11px] text-white/25 text-center leading-relaxed">
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Insurance is subject to IRDAI regulations. PAISACULTURE SERVICES LLP is registered as a financial services advisory firm. This website is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
