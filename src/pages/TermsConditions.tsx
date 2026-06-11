import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function TermsConditions() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - PAISACULTURE SERVICES LLP</title>
        <meta name="description" content="Terms and Conditions for PAISACULTURE SERVICES LLP financial advisory services. Important disclaimers, service terms, and regulatory information." />
      </Helmet>

      <section className="bg-dark-900 pt-32 pb-16">
        <div className="container-xl">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
            <p className="text-white/50 text-sm">Last updated: June 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-xl">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl prose prose-slate prose-headings:font-serif prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-dark-600 prose-li:text-[15px] prose-li:text-dark-600"
          >
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 mb-8 not-prose">
              <p className="text-[13.5px] text-amber-800 leading-relaxed font-medium">
                <strong>Important Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Insurance is subject to IRDAI regulations. All advisory services provided by PAISACULTURE SERVICES LLP are for informational purposes and do not constitute guaranteed financial advice. Returns are not guaranteed unless explicitly stated in product documentation.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at www.paisaculture.com or engaging the services of PAISACULTURE SERVICES LLP, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2>2. Nature of Services</h2>
            <p>PAISACULTURE SERVICES LLP provides financial intermediary and advisory services including:</p>
            <ul>
              <li>Insurance advisory and distribution (subject to IRDAI regulations)</li>
              <li>Loan facilitation via tie-ups with scheduled commercial banks and NBFCs</li>
              <li>Mutual fund distribution (subject to AMFI/SEBI regulations)</li>
              <li>Investment advisory and portfolio management services (subject to SEBI regulations)</li>
              <li>General financial planning and consultation</li>
            </ul>

            <h2>3. Investment and Insurance Disclaimers</h2>

            <h3>3.1 Mutual Funds</h3>
            <p>
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. The NAV of schemes may go up or down based on market conditions. Past performance of a scheme is not indicative of its future performance.
            </p>

            <h3>3.2 Life and General Insurance</h3>
            <p>
              Insurance products are regulated by the Insurance Regulatory and Development Authority of India (IRDAI). All insurance products are subject to the terms and conditions of the respective insurance policies. Tax benefits are subject to changes in applicable tax laws. PAISACULTURE SERVICES LLP is a registered insurance broker/agent as applicable.
            </p>

            <h3>3.3 Portfolio Management Services</h3>
            <p>
              Portfolio Management Services (PMS) are regulated by SEBI. PMS investments are subject to market risks. Returns from PMS are not guaranteed and are subject to investment risk. The minimum investment threshold for SEBI-regulated PMS is Rs. 50 lakh. Clients should read all disclosure documents before investing in PMS.
            </p>

            <h3>3.4 Guaranteed Products</h3>
            <p>
              Guaranteed income and pension plans are subject to the solvency and terms of the respective insurance companies. Guarantees are backed by the insurer's balance sheet and are regulated by IRDAI. PAISACULTURE SERVICES LLP does not independently guarantee any financial product.
            </p>

            <h2>4. Loan Services</h2>
            <p>
              PAISACULTURE SERVICES LLP acts as a facilitator for loan products offered by its partner banks and financial institutions. Loan approval, interest rates, and terms are determined solely by the lending institution and are subject to the borrower's eligibility, creditworthiness, and the lender's policies. PAISACULTURE SERVICES LLP does not guarantee loan approval.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              PAISACULTURE SERVICES LLP shall not be liable for any direct, indirect, incidental, or consequential loss arising from:
            </p>
            <ul>
              <li>Investment decisions made based on information provided on this website</li>
              <li>Market fluctuations affecting investment returns</li>
              <li>Decisions made by partner banks, insurers, or broking firms</li>
              <li>Technical errors or downtime on this website</li>
              <li>Any unauthorized access to your personal or financial data outside of our control</li>
            </ul>

            <h2>6. No Guarantee of Returns</h2>
            <p>
              Nothing on this website or in any communication from PAISACULTURE SERVICES LLP constitutes a guarantee of financial returns, unless explicitly stated in a product's regulatory documentation. All projections, illustrations, and examples are for informational purposes only.
            </p>

            <h2>7. Regulatory Compliance</h2>
            <p>
              PAISACULTURE SERVICES LLP operates in compliance with applicable regulations from IRDAI, AMFI, SEBI, and RBI. Our registration details and compliance certificates are available on request.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of PAISACULTURE SERVICES LLP and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms and Conditions, contact:<br />
              PAISACULTURE SERVICES LLP<br />
              Email: <a href="mailto:info@paisaculture.com" className="text-primary">info@paisaculture.com</a><br />
              Phone: +91 99224 18172
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
