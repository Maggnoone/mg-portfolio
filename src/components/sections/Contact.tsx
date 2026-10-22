import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { contactMethods } from '../../data/contact'
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-transparent text-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionTitle title="Get In Touch" subtitle="Let's discuss your next project" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: FaMapMarkerAlt, label: 'Location', value: profile.location },
              { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: FaPhone, label: 'Phone', value: profile.phone },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4 group min-w-0">
                <div className="p-3 bg-surface-raised rounded-xl border border-border group-hover:border-primary/50 transition-colors shrink-0">
                  <row.icon className="text-primary text-xl" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-foreground font-semibold text-lg mb-1">{row.label}</h3>
                  {row.href ? (
                    <a href={row.href} className="text-muted hover:text-primary-soft transition-colors break-all">
                      {row.value}
                    </a>
                  ) : (
                    <p className="text-muted break-words">{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6 min-w-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
                </div>
                <h3 className="text-foreground font-bold text-xl">Available for Work (prueba)</h3>
              </div>
              <p className="text-muted-strong text-sm">Texto de prueba para la tarjeta de disponibilidad.</p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-muted transition-all duration-300 shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between gap-4 min-w-0">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${method.gradientClass} group-hover:scale-110 transition-transform shrink-0`}>
                        <method.icon className="text-white text-2xl" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-foreground font-bold text-lg mb-1">{method.title}</h3>
                        <p className="text-muted text-sm">{method.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block shrink-0">
                      <span className="px-4 py-2 bg-background text-foreground rounded-lg text-sm font-medium group-hover:bg-black transition-colors">
                        {method.buttonText} →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-background hover:bg-black text-muted-strong hover:text-foreground py-4 rounded-xl border border-border hover:border-muted transition-all group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              <span className="font-medium">View My GitHub Profile</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
