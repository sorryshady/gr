'use client'
import { CONTACT_CTA } from '@/lib/constants'
import { slideInOut } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'
import FadeIn from '../animations/fade-in'
import Button from '../ui/button'
import Copy from '../ui/copy/copy'

const CTASection = () => {
  const router = useTransitionRouter()
  const navigateTo = (path: string) => {
    router.push(path, {
      onTransitionReady: slideInOut,
    })
  }
  return (
    <div
      className="m-5 flex items-center pt-[60px]!"
      id="cta"
    >
      <div className="bg-primary/80 w-full rounded-4xl py-[60px]">
        <div className="flex flex-col justify-center gap-5">
          <Copy className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
            <h2 className="text-background text-4xl font-medium md:text-5xl">{CONTACT_CTA.headline}</h2>
            <p className="text-background text-base font-medium md:text-lg">{CONTACT_CTA.description}</p>
          </Copy>
          <FadeIn
            className="mx-auto w-fit"
            duration={0.8}
          >
            <Button
              onClick={() => navigateTo(CONTACT_CTA.ctaLink)}
              variant="secondary"
            >
              {CONTACT_CTA.ctaText}
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

export default CTASection
