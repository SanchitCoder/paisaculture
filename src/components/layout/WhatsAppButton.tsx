import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const WA_LINK =
  'https://wa.me/919922418172?text=Hi%2C%20I%27m%20interested%20in%20PAISACULTURE%27s%20financial%20services'

export default function WhatsAppButton() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="fixed bottom-6 right-6 z-40" aria-label="Chat on WhatsApp">
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] text-white"
      >
        {/* Pulse ring */}
        {!prefersReduced && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <WhatsAppIcon />
      </motion.a>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.45 16.84L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.85L4.43 19.65L5.25 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.51 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 15.99C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.98C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.31C14.22 13.44 13.9 13.86 13.73 14.04C13.58 14.22 13.42 14.24 13.17 14.11C12.92 14 12.09 13.73 11.11 12.86C10.35 12.19 9.83 11.36 9.67 11.11C9.56 10.86 9.67 10.73 9.78 10.61C9.9 10.5 10.03 10.31 10.15 10.16C10.28 10.02 10.32 9.9 10.41 9.73C10.5 9.55 10.45 9.4 10.39 9.27C10.32 9.15 9.81 7.93 9.6 7.43C9.39 6.95 9.17 7.01 9 7.01C8.9 7 8.71 7 8.53 7.33Z" />
    </svg>
  )
}
