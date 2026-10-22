import { useEffect, useState } from 'react'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import SectionTitle from '../ui/SectionTitle'

export default function Experience() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches)

    mediaQuery.addEventListener('change', updateIsDesktop)
    return () => mediaQuery.removeEventListener('change', updateIsDesktop)
  }, [])

  return (
    <section id="experience" className="relative bg-transparent text-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-soft via-primary to-primary-strong" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isFirst = index === 0
              const isLast = index === experiences.length - 1
              const segment = isFirst
                ? 'top-10 -bottom-12'
                : isLast
                  ? '-top-12 h-[88px]'
                  : '-top-12 -bottom-12'
              return (
              <div key={`${exp.company}-${index}`} className="relative">
              <div
                aria-hidden="true"
                className={`md:hidden absolute left-6 w-0.5 bg-gradient-to-b from-primary-soft via-primary to-primary-strong ${segment}`}
              />
              <motion.div
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: isDesktop ? (index % 2 === 0 ? -100 : 100) : 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="absolute left-6 md:left-1/2 top-8 md:top-0 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-surface-raised z-10" />

                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div className="bg-surface rounded-xl p-6 shadow-xl border border-foreground hover:border-primary/50 transition-all duration-300" whileHover={{ scale: 1.02 }}>
                    <div className="mb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <FaBriefcase className="text-primary text-2xl shrink-0" />
                        <h3 className="text-xl sm:text-2xl font-bold break-words">{exp.title}</h3>
                      </div>
                      <p className="text-lg text-primary-soft font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted">
                        <FaCalendar className="text-sm shrink-0" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-muted-strong text-sm leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-surface-raised text-primary-soft text-xs font-medium rounded-full border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
