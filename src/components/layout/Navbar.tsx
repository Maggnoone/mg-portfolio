import { useEffect, useState } from 'react'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const wasMenuOpen = isOpen
    setIsOpen(false)
    const element = document.querySelector(href)
    if (!element) return
    if (wasMenuOpen) {
      window.setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 250)
    } else {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group cursor-pointer"
            aria-label="Go to top"
          >
            <div className="p-2 bg-gradient-to-br from-primary to-primary-strong rounded-lg group-hover:scale-110 transition-transform">
              <FaCode className="text-on-primary text-xl" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary-soft transition-colors">
              MG<span className="text-primary-soft">Dev</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-muted-strong hover:text-foreground text-base font-medium rounded-lg hover:bg-surface-raised/50 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <div className="h-6 w-px bg-border mx-2" />
            <div className="flex items-center gap-2">
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted-strong hover:text-accent-soft transition-all hover:scale-110 rounded-lg hover:bg-surface-raised/50">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted-strong hover:text-foreground transition-all hover:scale-110 rounded-lg hover:bg-surface-raised/50">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-strong hover:text-foreground hover:bg-surface-raised/50 rounded-lg transition-all"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="px-2 pt-2 pb-4 space-y-1 bg-surface/95 backdrop-blur-md border-t border-border-subtle" aria-label="Mobile">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-strong hover:text-foreground hover:bg-surface-raised/50 px-4 py-3 rounded-lg text-base font-medium transition-all w-full text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
