import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import PageTransition from './components/common/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Insurance from './pages/Insurance'
import Loans from './pages/Loans'
import Investment from './pages/Investment'
import Advisory from './pages/Advisory'
import Contact from './pages/Contact'
import BookAppointment from './pages/BookAppointment'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/insurance" element={<PageTransition><Insurance /></PageTransition>} />
        <Route path="/services/loans" element={<PageTransition><Loans /></PageTransition>} />
        <Route path="/services/investment" element={<PageTransition><Investment /></PageTransition>} />
        <Route path="/services/advisory" element={<PageTransition><Advisory /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/book-appointment" element={<PageTransition><BookAppointment /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-conditions" element={<PageTransition><TermsConditions /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
