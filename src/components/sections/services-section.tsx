'use client'
import { WHAT_WE_DO_CONTENT } from '@/lib/constants'
import Container from '../layout/container'
import Copy from '../ui/copy/copy'
import FadeIn from '../animations/fade-in'

const ServicesSection = () => {
  return (
    <Container
      className="flex min-h-screen flex-col items-center justify-center"
      id="services"
    >
      <div>
        <Copy className="flex max-w-4xl flex-col gap-4 text-center">
          <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
            {WHAT_WE_DO_CONTENT.heading}
          </h3>
          <h2 className="text-primary text-4xl font-medium md:text-5xl">{WHAT_WE_DO_CONTENT.headLine}</h2>
          <p className="text-primary/80 text-base font-medium md:text-lg">{WHAT_WE_DO_CONTENT.description}</p>
        </Copy>
      </div>
      <div className="mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {WHAT_WE_DO_CONTENT.services.map(service => (
          <FadeIn key={service.id}>
            <article className="">
              <h3 className="mb-2 font-serif text-xl leading-tight font-bold text-gray-900 sm:text-2xl">
                {service.title}
              </h3>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export default ServicesSection
