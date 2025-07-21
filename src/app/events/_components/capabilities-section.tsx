import FadeIn from '@/components/animations/fade-in'
import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { EVENTS_CAPABILITIES_CONTENT } from '@/lib/constants'
import React from 'react'

const CapibilitiesSection = () => {
  return (
    <Container
      className="flex items-center justify-center"
      id="capabilities"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center px-5">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {EVENTS_CAPABILITIES_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{EVENTS_CAPABILITIES_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">
              {EVENTS_CAPABILITIES_CONTENT.description}
            </p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-2 md:p-5">
          {EVENTS_CAPABILITIES_CONTENT.capabilities.map((capability, index) => (
            <FadeIn
              key={capability.title}
              delay={index * 0.1}
              className="md:last:col-span-2 lg:last:col-span-1"
            >
              <article className="flex h-full flex-col items-start gap-2 rounded-4xl bg-blue-200/10 p-10 shadow-xl">
                <h3 className="text-primary mb-2 text-2xl font-medium">{capability.title}</h3>
                <p className="text-primary/80 mb-4 font-medium">{capability.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default CapibilitiesSection
