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
