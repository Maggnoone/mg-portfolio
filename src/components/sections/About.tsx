import { FaDownload, FaProjectDiagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-transparent text-foreground pb-10 pt-24 lg:py-10 min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-5/12 flex justify-center w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[384px] lg:max-w-[450px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-6" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-surface-raised">
                <img
                  src="/images/profile-photo.webp"
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-7/12 text-center lg:text-left space-y-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-primary-soft font-medium tracking-wide uppercase text-sm">{profile.role}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {profile.headline.split(' ').slice(0, 2).join(' ')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-soft to-accent">
                  {profile.name}
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-strong"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>{profile.bio}</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-on-primary bg-primary-strong hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <FaWhatsapp className="mr-2 text-base group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-accent-strong hover:bg-accent transition-all duration-300 shadow-lg"
              >
                <FaDownload className="mr-2 text-base group-hover:scale-110 transition-transform" />
                Download CV
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-foreground bg-surface-raised hover:bg-border border border-border transition-all duration-300"
              >
                <FaProjectDiagram className="mr-2 text-base group-hover:scale-110 transition-transform" />
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
