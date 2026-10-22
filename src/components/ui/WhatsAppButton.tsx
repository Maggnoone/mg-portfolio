import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../../data/profile'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <motion.a
        href={profile.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full p-4 shadow-2xl hover:shadow-[#22c55e]/50 transition-all duration-300 group relative block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-20" />
      </motion.a>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-surface text-foreground px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border border-border hidden sm:block"
          >
            <p className="text-sm font-medium">Chat on WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
