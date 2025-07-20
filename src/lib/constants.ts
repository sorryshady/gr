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

export const WHAT_WE_DO_CONTENT: PageContent['whatWeDo'] = {
  heading: 'What We Do',
  headLine: 'Crafting Impact Across Industries',
  description:
    'GR Group operates across a spectrum of high-value industries, delivering excellence through global exports, signature events, and emerging lifestyle ventures. Each vertical reflects our commitment to precision, partnership, and purpose-driven growth. From logistics to luxury, we create experiences and ecosystems that elevate brands and build lasting value.',
  services: [
    {
      id: 'global-exports',
      title: 'Global Exports',
      tagline: 'Premium Products. Trusted Sourcing. Seamless Delivery.',
      description:
        'We connect global markets with premium products through trusted sourcing networks and seamless logistics solutions.',
      testimonial: 'We deliver what we promise — excellence in every shipment.',
      features: ['Premium Product Sourcing', 'Global Logistics Network', 'Quality Assurance', 'Trusted Partnerships'],
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', // Unsplash ID - shipping/logistics
      isComingSoon: false,
      route: '/exports',
    },
    {
      id: 'signature-events',
      title: 'Signature Events',
      tagline: 'Experiences That Define Excellence.',
      description:
        'From luxury automobile showcases to brand launches, we create unforgettable experiences that build brands and move markets.',
      testimonial: 'Our events make headlines, build brands, and move markets.',
      features: ['Luxury Automobile Showcases', 'Product Launches', 'Experiential Marketing', 'Corporate Gatherings'],
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', // Unsplash ID - luxury event
      isComingSoon: false,
      route: '/events',
    },
    {
      id: 'lifestyle-ventures',
      title: 'Lifestyle Ventures',
      tagline: 'Fashion-Forward. Sustainable. Conscious.',
      description:
        'Building the next generation of lifestyle brands that merge sustainability with craftsmanship for conscious consumers.',
      features: ['Sustainable Fashion', 'Artisan Collaborations', 'Conscious Consumerism', 'Creative Partnerships'],
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8', // Unsplash ID - fashion/lifestyle
      isComingSoon: true,
      route: '/ventures',
    },
    {
      id: 'collaborations',
      title: 'Collaborations & Community',
      tagline: 'Co-Creating the Future.',
      description:
        'Partnering with entrepreneurs, agencies, and artists to create innovative solutions and impact-first ventures.',
      features: ['Creative Hubs', 'Limited-Edition Projects', 'Impact-First Ventures', 'Community Building'],
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', // Unsplash ID - collaboration/teamwork
      isComingSoon: true,
      route: '/collaborations',
    },
  ],
}
