import { NavigationItem, PageContent } from '@/types'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Exports', href: '/exports' },
  { name: 'Events', href: '/events' },
  { name: 'Ventures', href: '/ventures' },
  { name: 'Collaborations', href: '/collaborations' },
  { name: 'Contact', href: '/contact' },
]

export const HERO_CONTENT: PageContent['hero'] = {
  headline: 'Redefining Lifestyle. Driving Global Change.',
  subtext:
    'A multidisciplinary conglomerate building bridges between premium products, unforgettable experiences, and innovative ventures.',
  primaryCta: 'Get in Touch',
  primaryCtaLink: '/contact',
  secondaryCta: 'Learn More',
  secondaryCtaLink: '#about',
  backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0', // Unsplash ID
}

export const ABOUT_CONTENT: PageContent['about'] = {
  heading: 'About Us',
  headLine: 'Where Vision Becomes Legacy',
  description: [
    'GR Group is a multifaceted enterprise shaping the future of global exports, signature events, and visionary ventures. With roots in precision and ambition, we bring together world-class execution and forward-thinking strategy to create meaningful impact across industries.',
    'Our work bridges commerce, culture, and innovation — driven by a belief that true legacy is built through intentional action and bold partnerships. Every initiative we undertake is designed to elevate, inspire, and endure.',
  ],
  learnMoreLink: '/about',
  imageLink: 'https://images.unsplash.com/photo-1646733367524-50c25e6e2022',
}
