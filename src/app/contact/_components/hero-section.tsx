'use client'
import React from 'react'
import { CONTACT_HERO_CONTENT } from '@/lib/constants'
import ParallaxImage from '@/components/ui/ParallaxImage'
import Button from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { formatImageUrl } from '@/lib/utils'
import { Mail, Phone } from 'lucide-react'

const ContactHeroSection = () => {
  const imageUrl = formatImageUrl(CONTACT_HERO_CONTENT.imageLink, 1200, 800)

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_HERO_CONTENT.primaryContactEmail}`
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_HERO_CONTENT.primaryContactPhone}`
  }

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      id="contact-hero"
    >
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <ParallaxImage
          src={imageUrl}
          alt={CONTACT_HERO_CONTENT.heading}
          speed={0.2}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <FadeIn
        stagger={0.1}
        duration={1.1}
        delay={0.2}
        direction="right"
        className="text-background absolute bottom-20 z-10 flex max-w-4xl flex-col gap-6 px-4 md:left-[80px] xl:left-[100px]"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium sm:text-5xl md:text-7xl">{CONTACT_HERO_CONTENT.heading}</h1>
          <h2 className="text-lg font-medium tracking-wide sm:text-xl md:text-2xl">{CONTACT_HERO_CONTENT.tagline}</h2>
          <p className="max-w-2xl text-base opacity-90 sm:text-lg">{CONTACT_HERO_CONTENT.description}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Button>
        </div>

        <div className="flex flex-col gap-2 text-sm opacity-80">
          <p>
            <span className="font-medium">Business Hours:</span> {CONTACT_HERO_CONTENT.businessHours}
          </p>
          <p>
            <span className="font-medium">Response Time:</span> {CONTACT_HERO_CONTENT.responseTime}
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

export default ContactHeroSection
