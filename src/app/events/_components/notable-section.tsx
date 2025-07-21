import FadeIn from '@/components/animations/fade-in'
import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { EVENTS_NOTABLE_EVENTS_CONTENT } from '@/lib/constants'
import React from 'react'

const NotableSection = () => {
  return (
    <Container
      className="flex items-center justify-center"
      id="notable"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center px-5">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{EVENTS_NOTABLE_EVENTS_CONTENT.heading}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">
              {EVENTS_NOTABLE_EVENTS_CONTENT.description}
            </p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-2 md:p-5">
          {EVENTS_NOTABLE_EVENTS_CONTENT.events.map((event, index) => (
            <FadeIn
              key={event}
              delay={index * 0.1}
              className="md:last:col-span-2 lg:last:col-span-1"
            >
              <article className="flex h-full flex-col items-start gap-2 rounded-4xl bg-blue-200/10 p-10 shadow-xl">
                <h3 className="text-primary mb-2 w-full text-center! text-2xl font-medium">{event}</h3>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default NotableSection
