import { motion } from 'framer-motion'
import { skillCategories, skillCategoryIconMap } from '../../data/skills'
import SectionTitle from '../ui/SectionTitle'

const gradientMap: Record<string, string> = {
  'from-green-500|to-emerald-600': 'from-[#f6e3ba] to-[#e7cd9c]',
  'from-blue-500|to-cyan-600': 'from-blue-500 to-cyan-600',
  'from-purple-500|to-pink-500': 'from-purple-500 to-pink-500',
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-transparent text-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionTitle title="Skills & Expertise" subtitle="Technologies and abilities I work with" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category) => {
            const Icon = skillCategoryIconMap[category.title as keyof typeof skillCategoryIconMap]
            const gradient = gradientMap[`${category.gradientFrom}|${category.gradientTo}`] ?? 'from-green-500 to-emerald-600'

            return (
              <motion.div
                key={category.title}
                className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border-subtle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6 min-w-0">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg shrink-0`}>
                    {Icon && <Icon className="text-2xl text-white" />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">{category.title}</h3>
                </div>
                <p className="text-muted text-center mb-8">{category.subtitle}</p>

                <div className="flex flex-col gap-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-3 px-4 py-3 bg-surface-raised rounded-lg border border-border hover:border-muted transition-all min-w-0"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <item.icon style={{ color: item.colorToken }} className="text-xl shrink-0" />
                      <span className="text-sm font-medium text-muted-strong break-words">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
