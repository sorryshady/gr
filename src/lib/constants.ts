import { NavigationItem, PageContent, SiteConfig } from '@/types'
import { CircleCheck, Handshake, Sparkle, Sprout } from 'lucide-react'

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
  backgroundImage: 'photo-1557804506-669a67965ba0', // Unsplash ID
}

export const ABOUT_CONTENT: PageContent['about'] = {
  heading: 'About Us',
  headLine: 'Where Vision Becomes Legacy',
  description: [
    'GR Group is a multifaceted enterprise shaping the future of global exports, signature events, and visionary ventures. With roots in precision and ambition, we bring together world-class execution and forward-thinking strategy to create meaningful impact across industries.',
    'Our work bridges commerce, culture, and innovation — driven by a belief that true legacy is built through intentional action and bold partnerships. Every initiative we undertake is designed to elevate, inspire, and endure.',
  ],
  learnMoreLink: '/about',
  imageLink: 'photo-1646733367524-50c25e6e2022',
}

export const WHAT_WE_DO_CONTENT: PageContent['whatWeDo'] = {
  heading: 'What We Do?',
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
      imageUrl: 'photo-1586528116311-ad8dd3c8310d', // Unsplash ID - shipping/logistics
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
      imageUrl: 'photo-1492684223066-81342ee5ff30', // Unsplash ID - luxury event
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
      imageUrl: 'photo-1441986300917-64674bd600d8', // Unsplash ID - fashion/lifestyle
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
      imageUrl: 'photo-1522202176988-66273c2fd55f', // Unsplash ID - collaboration/teamwork
      isComingSoon: true,
      route: '/collaborations',
    },
  ],
}

export const CONTACT_CTA = {
  headline: "Let's Build Something Exceptional",
  description:
    "Ready to explore partnership opportunities or discuss your next project? We're here to turn ambitious ideas into reality.",
  ctaText: 'Get In Touch',
  ctaLink: '/contact',
} as const

export const SITE_CONFIG: SiteConfig = {
  name: 'GR Group',
  description:
    'A multidisciplinary conglomerate specializing in premium exports, signature events, lifestyle ventures, and strategic collaborations.',
  url: 'https://grgroup.com',
  email: 'hello@grgroup.com',
  social: {
    linkedin: 'https://linkedin.com/company/grgroup',
    instagram: 'https://instagram.com/grgroup',
    twitter: 'https://twitter.com/grgroup',
  },
}

export const ABOUT_HERO_CONTENT: PageContent['aboutHero'] = {
  imageLink: 'photo-1497366216548-37526070297c',
  heading: 'About GR Group',
  tagline: 'Redefining Lifestyle. Driving Global Change.',
  description:
    ' A multidisciplinary conglomerate building bridges between premium products, unforgettable experiences, and innovative ventures.',
  cta: 'View Philosophy',
  ctaLink: '#philosophy',
}

export const ABOUT_PHILOSOPHY_CONTENT: PageContent['aboutPhilosophy'] = {
  heading: 'Our Philosophy',
  headLine: 'Driven by Purpose, Defined by Vision',
  description: [
    'At GR Group, we believe that true innovation happens at theintersection of diverse industries and perspectives. Our multidisciplinary approach allows us to see opportunities where others see boundaries.',
    'We are committed to excellence in everything we do, from sourcing premium products for global markets to creating unforgettable experiences that build brands and move markets. Our vision extends beyond traditional business models to embrace sustainability, craftsmanship, and conscious consumerism.',
    'Every partnership we forge, every event we create, and every venture we launch is guided by our core principle: to redefine lifestyle while driving meaningful global change.',
  ],
  imageLink: 'photo-1552664730-d307ca884978',
}

export const ABOUT_LEADERSHIP_CONTENT: PageContent['aboutLeadership'] = {
  heading: 'Leadership & Vision',
  headLine: 'Leading with Vision, Building with Purpose',
  description:
    'Our leadership team is at the forefront of shaping the future of GR Group. With a shared vision of innovation, sustainability, and impact, they drive our mission forward with precision and purpose.',
  cardContent: [
    {
      abb: 'GR',
      title: 'Global Exports Leadership',
      description:
        'Driving excellence in international trade with a focus on premium products and trusted partnerships across global markets.',
    },
    {
      abb: 'SE',
      title: 'Signature Events Leadership',
      description:
        'Creating unforgettable experiences that make headlines, build brands, and move markets through innovative event management.',
    },
    {
      abb: 'FV',
      title: 'Future Ventures Leadership',
      description:
        'Pioneering sustainable lifestyle ventures and creative collaborations that shape the future of conscious consumerism.',
    },
  ],
}

export const ABOUT_TIMELINE_CONTENT: PageContent['aboutTimeline'] = {
  heading: 'Our Journey',
  headLine: 'From Vision to Realization',
  description:
    "From our founding vision to our ambitious future plans, explore the milestones that define GR Group's evolution and growth.",
  timelineItems: [
    {
      id: 'foundation',
      year: '2020',
      title: 'Foundation & Vision',
      description:
        'GR Group was founded with a vision to bridge premium products, unforgettable experiences, and innovative ventures across global markets.',
    },
    {
      id: 'exports-launch',
      year: '2021',
      title: 'Global Exports Division',
      description:
        'Launched our premium export operations, establishing trusted sourcing networks and seamless logistics solutions across multiple industries.',
    },
    {
      id: 'events-expansion',
      year: '2022',
      title: 'Signature Events Portfolio',
      description:
        'Expanded into luxury event management, creating headline-making experiences for automotive showcases, product launches, and corporate gatherings.',
    },
    {
      id: 'current-growth',
      year: '2024',
      title: 'Strategic Growth Phase',
      description:
        'Strengthening our core verticals while preparing for expansion into lifestyle ventures and creative collaborations.',
    },
    {
      id: 'lifestyle-ventures',
      year: '2025',
      title: 'Lifestyle Ventures Launch',
      description:
        'Launching our fashion-forward sustainable brands division, focusing on conscious consumerism and artisan collaborations.',
      isComingSoon: true,
    },
    {
      id: 'collaboration-hub',
      year: '2025',
      title: 'Collaboration & Community Hub',
      description:
        'Opening our creative collaboration space for entrepreneurs, agencies, and artists to co-create impact-first ventures.',
      isComingSoon: true,
    },
  ],
}

export const ABOUT_VALUES_CONTENT: PageContent['aboutValues'] = {
  heading: 'Our Values',
  headLine: 'Guiding Our Mission',
  description: 'The principles that guide every decision we make and every partnership we forge.',
  values: [
    {
      title: 'Excellence',
      description: 'We deliver what we promise — excellence in every shipment, event, and venture.',
      icon: CircleCheck,
    },
    {
      title: 'Innovation',
      description:
        "We see opportunities where others see boundaries, constantly pushing the limits of what's possible.",
      icon: Sparkle,
    },
    {
      title: 'Sustainability',
      description: ' Our future ventures prioritize conscious consumerism and sustainable practices.',
      icon: Sprout,
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnerships to create meaningful impact and drive change.',
      icon: Handshake,
    },
  ],
}
