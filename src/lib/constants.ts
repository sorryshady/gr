import { ContactMethod, NavigationItem, PageContent, SiteConfig } from '@/types'
import {
  CircleCheck,
  Clock,
  Globe,
  Handshake,
  Mail,
  PackageSearch,
  Phone,
  ShieldCheck,
  Sparkle,
  Sprout,
} from 'lucide-react'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Exports', href: '/exports' },
  { name: 'Events', href: '/events' },
  //   { name: 'Ventures', href: '/ventures' },
  //   { name: 'Collaborations', href: '/collaborations' },
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

export const CONTACT_HERO_CONTENT: PageContent['contactHero'] = {
  imageLink: 'photo-1423666639041-f56000c27a9a', // Professional office/business setting
  heading: 'Contact Us',
  tagline: 'Your Gateway to Global Excellence.',
  description:
    "Ready to explore partnership opportunities, discuss your next project, or learn more about our services? We're here to turn ambitious ideas into reality through meaningful collaboration.",
  primaryContactEmail: SITE_CONFIG.email,
  primaryContactPhone: '+1 (555) 123-4567',
  businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
  responseTime: 'We typically respond within 24 hours',
} as const

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

export const EXPORTS_HERO_CONTENT: PageContent['exportsHero'] = {
  imageLink: 'photo-1586528116311-ad8dd3c8310d',
  heading: 'Global Exports',
  tagline: 'Premium Products. Trusted Sourcing. Seamless Delivery.',
  description:
    'We connect global markets with premium products through our extensive network of trusted suppliers and seamless logistics solutions. Our commitment to excellence ensures that every shipment meets the highest standards of quality and reliability.',
  cta: 'Learn More',
  ctaLink: '#capabilities',
}

export const EXPORTS_CAPABILITIES_CONTENT: PageContent['exportsCapabilities'] = {
  heading: 'Our Capabilities',
  headLine: 'Delivering Excellence at Every Stage',
  description:
    'Our export operations are built on precision, consistency, and trust. From sourcing premium products to managing seamless international logistics, we ensure quality and reliability at every step of the journey. Our global partner network and rigorous standards reflect our commitment to delivering excellence without compromise.',
  capabilities: [
    {
      title: 'Premium Product Sourcing',
      description: 'Access to high-quality products from verified suppliers worldwide',
      icon: PackageSearch,
    },
    {
      title: 'Global Logistics Network',
      description: 'Seamless delivery solutions across international markets',
      icon: Globe,
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes at every step',
      icon: ShieldCheck,
    },
    {
      title: 'Trusted Partnerships',
      description: 'Long-term relationships built on reliability and excellence',
      icon: Handshake,
    },
  ],
}

export const EXPORTS_INDUSTRIES_CONTENT: PageContent['exportsIndustries'] = {
  heading: 'Industries We Serve',
  headLine: 'Serving a Diverse Range of Industries',
  description:
    'Our expertise spans across multiple industries, ensuring specialized knowledge and tailored solutions for every sector.',
  industries: [
    'Consumer Electronics',
    'Fashion & Textiles',
    'Home & Garden',
    'Automotive Parts',
    'Industrial Equipment',
    'More to come...',
  ],
}

export const EXPORTS_PROCESS_CONTENT: PageContent['exportsProcess'] = {
  heading: 'Our Process',
  headLine: 'From Vision to Reality',
  description:
    'From initial consultation to final delivery, we ensure a seamless experience at every step of the export process.',
  process: [
    {
      title: 'Consultation & Planning',
      description:
        ' We work closely with you to understand your requirements and develop a customized export strategy.',
    },
    {
      title: 'Sourcing & Quality Control',
      description: 'Our network of trusted suppliers ensures premium products that meet rigorous quality standards.',
    },
    {
      title: 'Logistics & Delivery',
      description:
        'Seamless logistics management ensures your products reach their destination on time and in perfect condition.',
    },
  ],
}

export const EVENTS_HERO_CONTENT: PageContent['eventsHero'] = {
  heading: 'Signature Events',
  tagline: 'Experiences That Define Excellence.',
  description:
    'From luxury automobile showcases to high-profile brand launches, we create unforgettable experiences that capture attention, build brands, and drive market impact. Our events are meticulously crafted to deliver exceptional results.',
  imageLink: 'photo-1492684223066-81342ee5ff30',
  cta: 'Learn More',
  ctaLink: '#capabilities',
}

export const EVENTS_CAPABILITIES_CONTENT: PageContent['eventsCapabilities'] = {
  heading: 'Event Capabilities',
  headLine: 'Crafting Exceptional Experiences',
  description:
    'We specialize in creating exceptional experiences across multiple event categories, each designed to deliver maximum impact and lasting impressions.',
  capabilities: [
    {
      title: 'Luxury Automobile Showcases',
      description: 'Exclusive automotive events that highlight premium vehicles and cutting-edge technology',
    },
    {
      title: 'Product Launches',
      description: 'Strategic launch events that generate buzz and drive market adoption',
    },
    {
      title: 'Experiential Marketing',
      description: 'Immersive brand experiences that create lasting connections with audiences',
    },
    {
      title: 'Corporate Gatherings',
      description: 'Professional events that strengthen business relationships and drive growth',
    },
  ],
}

export const EVENTS_NOTABLE_EVENTS_CONTENT: PageContent['eventsNotableEvents'] = {
  heading: 'Notable Events',
  description:
    'A selection of our signature events that have made headlines and delivered exceptional results for our clients.',
  events: [
    'Luxury Car Exhibition 2023',
    'Tech Innovation Summit',
    'Fashion Week Showcase',
    'Corporate Leadership Forum',
  ],
}

export const EVENTS_PROCESS_CONTENT: PageContent['eventsProcess'] = {
  heading: 'Our Process',
  headLine: 'From Vision to Reality',
  description:
    'From concept to execution, we manage every detail to ensure your event exceeds expectations and achieves its objectives.',
  process: [
    {
      title: 'Strategy & Concept',
      description:
        '   We develop a comprehensive event strategy aligned with your brand objectives and target audience.',
    },
    {
      title: 'Planning & Design',
      description:
        'Detailed planning and creative design ensure every element contributes to an exceptional experience.',
    },
    {
      title: 'Production & Setup',
      description: 'Professional production and meticulous setup create the perfect environment for your event.',
    },
    {
      title: 'Execution & Follow-up',
      description: 'Flawless execution and comprehensive follow-up ensure lasting impact and measurable results.',
    },
  ],
}

export const TAGLINES = {
  exports: 'We deliver what we promise — excellence in every shipment.',
  events: 'Our events make headlines, build brands, and move markets.',
}

export const IMAGES = [
  'photo-1497366216548-37526070297c',
  'photo-1497366216548-37526070297c',
  'photo-1441986300917-64674bd600d8',
]

export const CONTACT_METHODS: ContactMethod[] = [
  {
    type: 'email',
    label: 'Email Us',
    value: SITE_CONFIG.email,
    action: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    type: 'phone',
    label: 'Call Us',
    value: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    icon: Phone,
  },
  {
    type: 'hours',
    label: 'Business Hours',
    value: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
    icon: Clock,
  },
] as const
