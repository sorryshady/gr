import FadeIn from '@/components/animations/fade-in'
import Container from '@/components/layout/container'
import Copy from '@/components/ui/copy/copy'
import { ABOUT_LEADERSHIP_CONTENT } from '@/lib/constants'

const LeadershipSection = () => {
  return (
    <Container
      className="flex flex-col items-center justify-center"
      id="leadership"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center px-5 py-10">
        <div>
          <Copy className="flex max-w-4xl flex-col gap-4 text-center">
            <h3 className="text-primary/50 text-lg font-medium tracking-wide md:text-2xl">
              {ABOUT_LEADERSHIP_CONTENT.heading}
            </h3>
            <h2 className="text-primary text-4xl font-medium md:text-5xl">{ABOUT_LEADERSHIP_CONTENT.headLine}</h2>
            <p className="text-primary/80 text-base font-medium md:text-lg">{ABOUT_LEADERSHIP_CONTENT.description}</p>
          </Copy>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 p-0 md:grid-cols-2 md:p-5 lg:grid-cols-3">
          {ABOUT_LEADERSHIP_CONTENT.cardContent.map((card, index) => (
            <FadeIn
              key={card.abb}
              delay={index * 0.1}
              className="md:last:col-span-2 lg:last:col-span-1"
            >
              <article className="flex h-full flex-col items-center gap-2 rounded-4xl bg-blue-200/10 p-5 shadow-xl">
                <div className="from-primary to-primary/60 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br sm:mb-6 sm:h-20 sm:w-20">
                  <span className="text-xl font-bold text-white sm:text-xl">{card.abb}</span>
                </div>
                <h3 className="text-primary mb-2 text-center text-2xl font-medium">{card.title}</h3>
                <p className="text-primary/80 mb-4 text-center font-medium">{card.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default LeadershipSection
