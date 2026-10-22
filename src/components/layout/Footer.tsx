import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-transparent text-foreground border-t border-border/60">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="text-center md:text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-soft">MG</span> Dev
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-muted">Full-Stack Web Developer | TypeScript, Next.js, React | Node.js</p>
            <a href={profile.cvUrl} download className="inline-block px-6 py-2 border border-border rounded-md text-sm hover:bg-surface-raised transition-colors">
              View Full CV
            </a>
          </motion.div>

          <motion.div className="text-center md:text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{ name: 'Home', href: '#about' }, ...navLinks.slice(1)].map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="hover:text-primary-soft transition-colors text-sm cursor-pointer hover:underline">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="text-center md:text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <a href={`mailto:${profile.email}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-primary-soft transition-colors text-sm break-all">
                <FaEnvelope className="text-primary shrink-0" />
                {profile.email}
              </a>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted">
                <FaPhone className="text-primary shrink-0" />
                {profile.phone}
              </p>
            </div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { name: 'GitHub', icon: FaGithub, url: profile.githubUrl },
                { name: 'LinkedIn', icon: FaLinkedin, url: profile.linkedinUrl },
                { name: 'WhatsApp', icon: FaWhatsapp, url: profile.whatsappUrl },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-raised rounded-lg border border-border transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left text-muted">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
