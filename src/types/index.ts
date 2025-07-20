export interface NavigationItem {
  name: string
  href: string
}

export interface BusinessVertical {
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
  sections: BusinessVertical[]
}
