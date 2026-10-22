import { FaBrain, FaCode, FaLanguage } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { SkillCategory } from '../types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Technical Skills',
    subtitle: 'My technology stack.',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600',
    items: [
      { name: 'TypeScript', icon: SiTypescript, colorToken: 'var(--color-brand-typescript)' },
      { name: 'React', icon: SiReact, colorToken: 'var(--color-brand-react)' },
      { name: 'Next.js', icon: SiNextdotjs, colorToken: 'var(--color-brand-next)' },
      { name: 'MongoDB', icon: SiMongodb, colorToken: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, colorToken: '#336791' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, colorToken: 'var(--color-brand-tailwind)' },
    ],
  },
  {
    title: 'Soft Skills',
    subtitle: 'Personal abilities that help me work effectively with teams.',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-600',
    items: [
      { name: 'Communication', icon: FaBrain, colorToken: 'var(--color-accent-soft)' },
      { name: 'Teamwork', icon: FaBrain, colorToken: 'var(--color-accent-soft)' },
      { name: 'Adaptability', icon: FaBrain, colorToken: 'var(--color-accent-soft)' },
      { name: 'Problem Solving', icon: FaBrain, colorToken: 'var(--color-accent-soft)' },
      { name: 'Critical Thinking', icon: FaBrain, colorToken: 'var(--color-accent-soft)' },
    ],
  },
  {
    title: 'Languages',
    subtitle: 'Languages I speak.',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    items: [
      { name: 'Spanish - Native', icon: FaLanguage, colorToken: '#A855F7' },
      { name: 'English - B1', icon: FaLanguage, colorToken: '#A855F7' },
    ],
  },
]

export const skillCategoryIconMap = {
  'Technical Skills': FaCode,
  'Soft Skills': FaBrain,
  Languages: FaLanguage,
} as const
