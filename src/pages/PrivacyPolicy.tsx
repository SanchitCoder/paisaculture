import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PrivacyPolicy() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Privacy Policy - PAISACULTURE SERVICES LLP</title>
        <meta name="description" content="Privacy Policy for PAISACULTURE SERVICES LLP. Learn how we collect, use, and protect your personal and financial data." />
      </Helmet>

      <section className="bg-dark-900 pt-32 pb-16">
        <div className="container-xl">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
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
            <h2>1. Information We Collect</h2>
            <p>
              PAISACULTURE SERVICES LLP ("we", "us", "our") collects the following categories of personal and financial information when you use our website, contact us, or engage our services:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> Name, date of birth, PAN, Aadhaar number (for KYC compliance as required under IRDAI, AMFI, and RBI guidelines)</li>
              <li><strong>Contact Data:</strong> Email address, phone number, postal address</li>
              <li><strong>Financial Data:</strong> Income details, existing insurance policies, loan information, investment portfolio details</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies and usage data</li>
              <li><strong>Communication Data:</strong> Records of your interactions with us by phone, email, or form submissions</li>
            </ul>

            <h2>2. KYC and Regulatory Compliance</h2>
            <p>
              As a registered financial services intermediary, we are required by law to collect and verify certain identity documents (KYC). This includes government-issued photo ID, address proof, and PAN card. KYC data is collected in accordance with the Prevention of Money Laundering Act (PMLA) and regulations prescribed by IRDAI, AMFI, SEBI, and RBI as applicable.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>To provide financial advisory, insurance, loan, and investment services</li>
              <li>To process applications with our partner banks, insurance companies, and broking partners</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To communicate service updates, policy renewals, and relevant product information</li>
              <li>To improve our website and service quality</li>
              <li>To respond to your inquiries and appointment requests</li>
            </ul>

            <h2>4. Sharing with Partner Institutions</h2>
            <p>
              We share your data with our partner banks, insurance companies, and broking partners only when required to process your application or provide a service you have requested. These partners include:
            </p>
            <ul>
              <li>Partner Banks: SBI, ICICI Bank, HDFC Bank, Kotak Mahindra Bank, Axis Bank, IDFC First Bank, Bank of Baroda, Central Bank of India</li>
              <li>Partner Insurers: Bajaj Allianz, HDFC Life, ICICI Lombard, TATA AIA Life, Future Generali</li>
              <li>Broking Partners: Edelweiss and associated wealth management platforms</li>
            </ul>
            <p>
              All partner institutions are bound by their own privacy policies and applicable IRDAI, AMFI, and RBI data protection guidelines.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website uses essential cookies to ensure basic functionality. We also use analytics cookies (such as Google Analytics) to understand how visitors use our site. You may disable non-essential cookies through your browser settings. Essential cookies cannot be disabled as they are required for the site to function.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. Financial data is transmitted using SSL/TLS encryption. Access to sensitive data is restricted to authorized personnel only.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data for as long as required to provide our services and to comply with applicable legal and regulatory retention requirements. KYC records are retained for a minimum of 5 years as required by PMLA. Contact and inquiry data is retained for 3 years.
            </p>

            <h2>8. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your data, subject to regulatory retention requirements</li>
              <li><strong>Objection:</strong> Object to processing for direct marketing purposes</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:info@paisaculture.com" className="text-primary">info@paisaculture.com</a>.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We recommend reviewing the privacy policies of any third-party sites you visit.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after any changes constitutes acceptance of the revised policy.
            </p>

            <h2>11. Contact</h2>
            <p>
              For any privacy-related questions or to exercise your rights, contact:
            </p>
            <p>
              PAISACULTURE SERVICES LLP<br />
              Email: <a href="mailto:info@paisaculture.com" className="text-primary">info@paisaculture.com</a><br />
              Phone: +91 70283 83848<br />
              Address: Pune, Maharashtra, India
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
