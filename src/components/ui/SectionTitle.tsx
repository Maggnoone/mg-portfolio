import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">{title}</h2>
      <p className="text-muted text-lg">{subtitle}</p>
    </motion.div>
  )
}
