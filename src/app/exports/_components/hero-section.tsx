'use client'
import FadeIn from '@/components/animations/fade-in'
import Button from '@/components/ui/button'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { EXPORTS_HERO_CONTENT } from '@/lib/constants'
import { formatImageUrl, scrollTo } from '@/lib/utils'
import React from 'react'

const HeroSection = () => {
  const imageUrl = formatImageUrl(EXPORTS_HERO_CONTENT.imageLink, 1200, 800)
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src={imageUrl}
          alt={EXPORTS_HERO_CONTENT.heading}
          speed={0.2}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="text-background relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <FadeIn
          duration={1.1}
          direction="up"
          className="flex flex-col gap-8"
          delay={0.2}
        >
          <h1 className="text-4xl font-medium sm:text-5xl md:text-7xl">{EXPORTS_HERO_CONTENT.heading}</h1>

          <h2 className="text-lg font-medium tracking-wide sm:text-xl md:text-2xl">{EXPORTS_HERO_CONTENT.tagline}</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed font-medium tracking-wide text-gray-300 sm:text-lg md:text-xl">
            {EXPORTS_HERO_CONTENT.description}
          </p>

          <Button
            variant="outline"
            size="lg"
            className="mx-auto w-fit"
            onClick={() => scrollTo(EXPORTS_HERO_CONTENT.ctaLink)}
          >
            {EXPORTS_HERO_CONTENT.cta}
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
