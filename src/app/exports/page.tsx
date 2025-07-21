import React from 'react'
import HeroSection from './_components/hero-section'
import CapabilitiesSection from './_components/capabilities-section'
import IndustriesSection from './_components/industries-section'
import TaglineQuote from '@/components/ui/tagline-quote'
import { TAGLINES } from '@/lib/constants'
import CTASection from '@/components/sections/cta-section'
import ProcessSection from './_components/process-section'

export default function ExportsPage() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <TaglineQuote testimonial={TAGLINES['exports']} />
      <ProcessSection />
      <CTASection />
    </main>
  )
}
