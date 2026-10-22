import type { IconType } from 'react-icons'

export interface Profile {
  name: string
  role: string
  headline: string
  bio: string
  location: string
  email: string
  phone: string
  cvUrl: string
  whatsappUrl: string
  githubUrl: string
  linkedinUrl: string
}

export interface NavLink {
  name: string
  href: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export interface SkillItem {
  name: string
  icon: IconType
  colorToken: string
}

export interface SkillCategory {
  title: string
  subtitle: string
  gradientFrom: string
  gradientTo: string
  items: SkillItem[]
}

export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  htmlUrl: string
  liveUrl?: string
  image: string
  createdAt: string
}

export interface ContactMethod {
  title: string
  description: string
  icon: IconType
  gradientClass: string
  url: string
  buttonText: string
}
