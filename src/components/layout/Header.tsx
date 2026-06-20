import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Insurance', href: '/services/insurance' },
      { label: 'Loans', href: '/services/loans' },
      { label: 'Investment', href: '/services/investment' },
      { label: 'Advisory', href: '/services/advisory' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    /* Outer wrapper: full-width, pointer-events-none so transparent areas don't capture clicks */
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 pointer-events-none">
      {/* Floating pill — restores pointer events */}
      <div
        className={`pointer-events-auto w-full max-w-[900px] flex items-center justify-between h-[52px] px-4 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-pill-elevated ring-1 ring-black/[0.06]'
            : 'bg-white/80 backdrop-blur-md shadow-pill ring-1 ring-black/[0.05]'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out)' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <img
            src="/logo.png"
            alt="Paisa Culture"
            className="h-9 w-auto object-contain"
            width={120}
            height={36}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-[13px] font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-primary bg-primary-50'
                        : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50/80'
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className={`opacity-60 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </NavLink>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-0 pt-2 w-48"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(20,24,33,0.10)] border border-[rgba(20,24,33,0.06)] p-1.5 overflow-hidden">
                        {link.children.map((child, i) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.035, duration: 0.18 }}
                          >
                            <NavLink
                              to={child.href}
                              className={({ isActive }) =>
                                `flex items-center px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors duration-120 ${
                                  isActive
                                    ? 'bg-primary-50 text-primary'
                                    : 'text-dark-700 hover:bg-dark-50 hover:text-dark-900'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-[13px] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-primary bg-primary-50'
                      : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="tel:+919922418172"
            className="text-[12.5px] font-medium text-dark-500 hover:text-primary transition-colors duration-150 px-3 py-1.5"
          >
            +91 99224 18172
          </a>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-[12.5px] font-semibold rounded-xl transition-[transform,background-color] duration-[160ms] hover:bg-primary-700 active:scale-[0.97]"
            style={{ transitionTimingFunction: 'var(--ease-out)' }}
          >
            Book Consult
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-dark-50 transition-colors duration-150 active:scale-[0.97]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} className="text-dark-800" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={18} className="text-dark-800" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile overlay — full screen, slides in */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="pointer-events-auto lg:hidden fixed inset-0 top-[68px] bg-white/98 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <nav className="container-xl pt-6 pb-10 flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => (
                <div key={link.href} className="border-b border-[rgba(20,24,33,0.06)] last:border-0">
                  <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      className={({ isActive }) =>
                        `block py-4 text-[22px] font-serif font-bold transition-colors ${
                          isActive ? 'text-primary' : 'text-dark-900 hover:text-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                  {link.children && (
                    <div className="pb-3 flex flex-col gap-0.5 pl-4">
                      {link.children.map((child, childIdx) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 + childIdx * 0.04 + 0.1, duration: 0.24 }}
                        >
                          <NavLink
                            to={child.href}
                            className={({ isActive }) =>
                              `block py-2 text-[15px] font-medium transition-colors ${
                                isActive ? 'text-primary' : 'text-dark-500 hover:text-primary'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.28 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="tel:+919922418172"
                  className="text-[14px] font-medium text-dark-600 hover:text-primary transition-colors"
                >
                  +91 99224 18172
                </a>
                <Link to="/book-appointment" className="btn-primary justify-center">
                  Book Free Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
