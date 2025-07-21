'use client'
import { WHAT_WE_DO_CONTENT } from '@/lib/constants'
import Container from '../layout/container'
import Copy from '../ui/copy/copy'
import CounterDots from '../ui/counter-dots'
import Button from '../ui/button'
import { ExternalLink } from 'lucide-react'
import { slideInOut } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'
import FadeIn from '../animations/fade-in'

const ServicesSection = () => {
  const router = useTransitionRouter()
  const navigateTo = (path: string) => {
    router.push(path, {
      onTransitionReady: slideInOut,
    })
  }
  return (
    <Container
      className="flex flex-col items-center justify-center"
      id="services"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center rounded-4xl bg-amber-100/50 px-5 py-10">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {WHAT_WE_DO_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{WHAT_WE_DO_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">{WHAT_WE_DO_CONTENT.description}</p>
          </Copy>
        </div>
        <FadeIn
          duration={0.8}
          stagger={0.1}
          easing="power2.out"
          className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:p-5 lg:grid-cols-2"
        >
          {WHAT_WE_DO_CONTENT.services.map((service, index) => (
            <article
              key={service.id}
              className="bg-background relative w-full rounded-4xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <CounterDots count={index + 1} />

              <div className="mx-5 mt-16 mb-10">
                <h3 className="text-primary mb-2 text-2xl font-medium">{service.title}</h3>
                <p className="text-primary/80 mb-4 text-sm font-medium uppercase">{service.tagline}</p>
                <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                  {service.features.map(feature => (
                    <div
                      className="flex items-center gap-2"
                      key={feature}
                    >
                      <div className="bg-primary h-2 w-2 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                {service.testimonial && (
                  <blockquote className="border-primary mb-4 border-l-4 pl-3 sm:pl-4">
                    <p className="text-xs leading-relaxed text-gray-700 italic sm:text-sm">
                      &ldquo;{service.testimonial}&rdquo;
                    </p>
                  </blockquote>
                )}
                {service.isComingSoon ? (
                  <p className="text-primary/80 text-sm font-medium">Stay tuned for updates</p>
                ) : (
                  <Button
                    size="md"
                    variant="link"
                    onClick={() => navigateTo(service.route)}
                    className="relative flex items-center gap-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </article>
          ))}
        </FadeIn>
      </div>
    </Container>
  )
}

export default ServicesSection
