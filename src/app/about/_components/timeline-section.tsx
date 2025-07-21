import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { ABOUT_TIMELINE_CONTENT } from '@/lib/constants'
import React from 'react'
import Timeline from './timeline'

const TimelineSection = () => {
  return (
    <Container
      className="flex flex-col items-center justify-center"
      id="timeline"
    >
      <div className="flex w-full max-w-3xl flex-col items-center justify-center px-5 py-10">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {ABOUT_TIMELINE_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{ABOUT_TIMELINE_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">{ABOUT_TIMELINE_CONTENT.description}</p>
          </Copy>
        </div>
        <div className="mt-12 w-full sm:mt-16">
          <Timeline
            items={ABOUT_TIMELINE_CONTENT.timelineItems}
            className="mx-auto max-w-4xl"
          />
        </div>
      </div>
    </Container>
  )
}

export default TimelineSection
