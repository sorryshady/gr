import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { ABOUT_PHILOSOPHY_CONTENT } from '@/lib/constants'
import { formatImageUrl } from '@/lib/utils'
import React from 'react'

const PhilosophySection = () => {
  const imageUrl = formatImageUrl(ABOUT_PHILOSOPHY_CONTENT.imageLink, 600, 400)
  return (
    <Container
      className="flex items-center justify-center"
      id="philosophy"
    >
      <div className="flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:justify-center">
        <div className="w-full max-w-3xl">
          <Copy className="mb-8 flex max-w-xl flex-col gap-4">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {ABOUT_PHILOSOPHY_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{ABOUT_PHILOSOPHY_CONTENT.headLine}</h2>
            <>
              {ABOUT_PHILOSOPHY_CONTENT.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-primary/80 text-base font-medium md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </>
          </Copy>
        </div>
        <div className="relative h-[500px] w-full overflow-hidden lg:w-3xl">
          <div className="relative size-full overflow-hidden">
            <ParallaxImage
              src={imageUrl}
              alt={ABOUT_PHILOSOPHY_CONTENT.heading}
              speed={0.2}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PhilosophySection
