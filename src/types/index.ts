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

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
  isComingSoon?: boolean
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
  aboutHero: {
    imageLink: string
    heading: string
    tagline: string
    description: string
    cta: string
    ctaLink: string
  }
  aboutPhilosophy: {
    heading: string
    headLine: string
    description: string[]
    imageLink: string
  }
  aboutLeadership: {
    heading: string
    headLine: string
    description: string
    cardContent: {
      abb: string
      title: string
      description: string
    }[]
  }
  aboutTimeline: {
    heading: string
    headLine: string
    description: string
    timelineItems: TimelineItem[]
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  email: string
  social: {
    linkedin: string
    instagram: string
    twitter: string
  }
}
