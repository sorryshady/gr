import React from 'react'
import HeroSection from './_components/hero-section'
import PhilosophySection from './_components/philosophy-section'
import LeadershipSection from './_components/leadership-section'
import TimelineSection from './_components/timeline-section'
import ValuesSection from './_components/values-section'
import CTASection from '@/components/sections/cta-section'

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <LeadershipSection />
      <TimelineSection />
      <ValuesSection />
      <CTASection />
    </main>
  )
}
