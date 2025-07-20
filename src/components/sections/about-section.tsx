'use client'
import React from 'react'
import ParallaxImage from '../ui/ParallaxImage'
import { ABOUT_CONTENT } from '@/lib/constants'
import Container from '../layout/container'
import Copy from '../ui/copy/copy'
import Button from '../ui/button'
import { useTransitionRouter } from 'next-view-transitions'
import { slideInOut } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import FadeIn from '../animations/fade-in'

const AboutSection = () => {
  const router = useTransitionRouter()
  const navigateTo = (path: string) => {
    router.push(path, {
      onTransitionReady: slideInOut,
    })
  }

  return (
    <Container
      className="flex items-center justify-center"
      id="about"
    >
      <div className="flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:justify-center">
        <div className="w-full max-w-3xl">
          <Copy className="mb-8 flex max-w-xl flex-col gap-4">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">{ABOUT_CONTENT.heading}</h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{ABOUT_CONTENT.headLine}</h2>
            <>
              {ABOUT_CONTENT.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-primary/80 text-base font-medium md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </>
          </Copy>
          <FadeIn direction="up">
            <Button
              size="md"
              variant="link"
              onClick={() => navigateTo(ABOUT_CONTENT.learnMoreLink)}
              className="relative flex items-center gap-2"
            >
              <span>Learn More</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
        <div className="relative h-[500px] w-full overflow-hidden lg:w-3xl">
          <div className="relative size-full overflow-hidden">
            <ParallaxImage
              src={ABOUT_CONTENT.imageLink}
              alt={ABOUT_CONTENT.heading}
              speed={0.2}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutSection
