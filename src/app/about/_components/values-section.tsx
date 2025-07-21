import FadeIn from '@/components/animations/fade-in'
import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { ABOUT_VALUES_CONTENT } from '@/lib/constants'
import React from 'react'

const ValuesSection = () => {
  return (
    <Container
      className="flex flex-col items-center justify-center"
      id="values"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center px-5 py-10">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {ABOUT_VALUES_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{ABOUT_VALUES_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">{ABOUT_VALUES_CONTENT.description}</p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-2 md:p-5 lg:grid-cols-4">
          {ABOUT_VALUES_CONTENT.values.map((value, index) => (
            <FadeIn
              key={value.title}
              delay={index * 0.1}
            >
              <article className="flex h-full flex-col items-center gap-2">
                <div className="bg-primary mx-auto flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-14 sm:w-14">
                  {React.createElement(value.icon, { className: 'text-xl font-bold text-white sm:text-xl' })}
                </div>
                <h3 className="text-primary mb-2 text-center text-2xl font-medium">{value.title}</h3>
                <p className="text-primary/80 mb-4 text-center font-medium">{value.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ValuesSection
