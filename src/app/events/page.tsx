import React from 'react'
import HeroSection from './_components/hero-section'
import CTASection from '@/components/sections/cta-section'
import CapabilitiesSection from './_components/capabilities-section'
import TaglineQuote from '@/components/ui/tagline-quote'
import { TAGLINES } from '@/lib/constants'
import NotableSection from './_components/notable-section'
import ProcessSection from './_components/process-section'
import ShowcaseSection from './_components/showcase-section'

export default function EventsPage() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <TaglineQuote testimonial={TAGLINES['events']} />
      <NotableSection />
      <ProcessSection />
      {/* <ShowcaseSection /> */}
      <CTASection />
    </main>
  )
}
