export interface NavigationItem {
  name: string
  href: string
}

export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  testimonial?: string
  features: string[]
  imageUrl: string
  isComingSoon: boolean
  route: string
}

export interface PageContent {
  hero: {
    headline: string
    subtext: string
    primaryCta: string
    primaryCtaLink: string
    secondaryCta: string
    secondaryCtaLink: string
    backgroundImage: string
  }
  about: {
    heading: string
    headLine: string
    description: string[]
    learnMoreLink: string
    imageLink: string
  }
  whatWeDo: {
    heading: string
    headLine: string
    description: string
    services: Service[]
  }
  services: Service[]
}
