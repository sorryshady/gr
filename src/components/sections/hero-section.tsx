'use client'
import React from 'react'
import { HERO_CONTENT } from '@/lib/constants'
import ParallaxImage from '../ui/ParallaxImage'
import Button from '../ui/button'
import FadeIn from '../animations/fade-in'
import { scrollTo, slideInOut } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'

const HeroSection = () => {
  const router = useTransitionRouter()
  const navigateTo = (path: string) => {
    router.push(path, {
      onTransitionReady: slideInOut,
    })
  }
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <ParallaxImage
          src={HERO_CONTENT.backgroundImage}
          alt={HERO_CONTENT.headline}
          speed={0.2}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <FadeIn
        stagger={0.1}
        duration={1.1}
        direction="right"
        className="text-background absolute bottom-20 left-4 z-10 flex max-w-3xl flex-col gap-4 md:left-[80px] xl:left-[100px]"
      >
        <h1 className="text-4xl font-medium sm:text-5xl md:text-7xl">{HERO_CONTENT.headline}</h1>
        <h2 className="text-lg font-medium tracking-wide sm:text-xl md:text-2xl">{HERO_CONTENT.subtext}</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigateTo(HERO_CONTENT.primaryCtaLink)}
          >
            {HERO_CONTENT.primaryCta}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo(HERO_CONTENT.secondaryCtaLink)}
          >
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>
      </FadeIn>
    </section>
  )
}

export default HeroSection
