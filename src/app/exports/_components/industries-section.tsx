import FadeIn from '@/components/animations/fade-in'
import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { EXPORTS_INDUSTRIES_CONTENT } from '@/lib/constants'

import React from 'react'

const IndustriesSection = () => {
  return (
    <Container id="industries">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5">
        <div>
          <Copy className="flex flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {EXPORTS_INDUSTRIES_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{EXPORTS_INDUSTRIES_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">{EXPORTS_INDUSTRIES_CONTENT.description}</p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-2 md:p-5 lg:grid-cols-3">
          {EXPORTS_INDUSTRIES_CONTENT.industries.map((industry, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
            >
              <article className="text-primary/70 hover:text-primary border-primary/50 cursor-default rounded-4xl border bg-blue-200/10 p-5 text-2xl font-medium shadow-lg transition-[colors,box-shadow] duration-300 hover:shadow-2xl">
                <p className="text-center">{industry}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default IndustriesSection
