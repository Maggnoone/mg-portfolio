import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import type { ContactMethod } from '../types/portfolio'
import { profile } from './profile'

export const contactMethods: ContactMethod[] = [
  {
    title: 'WhatsApp',
    description: 'Chat with me instantly',
    icon: FaWhatsapp,
    gradientClass: 'from-green-500 to-emerald-600',
    url: profile.whatsappUrl,
    buttonText: 'Start Chat',
  },
  {
    title: 'Email',
    description: 'Send me an email',
    icon: FaEnvelope,
    gradientClass: 'from-blue-500 to-cyan-600',
    url: `mailto:${profile.email}`,
    buttonText: 'Send Email',
  },
  {
    title: 'LinkedIn',
    description: 'Connect professionally',
    icon: FaLinkedin,
    gradientClass: 'from-blue-600 to-blue-700',
    url: profile.linkedinUrl,
    buttonText: 'View Profile',
  },
]
