'use client'
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { slideInOut } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import Button from '../ui/button'
import Copy from '../ui/copy/copy'
import FadeIn from '../animations/fade-in'

const Footer = () => {
  const router = useTransitionRouter()
  const pathName = usePathname()
  const navigateTo = (path: string) => {
    if (pathName === path) return
    router.push(path, {
      onTransitionReady: slideInOut,
    })
  }
  return (
    <footer
      className="m-5 rounded-4xl bg-blue-200 p-10"
      // style={{ height: 'calc(100svh - 40px)' }}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 xl:px-[100px]">
        <div className="md:col-span-2">
          <Copy>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">GR Group</h3>
            <p className="mb-2 max-w-lg font-medium text-gray-700">{SITE_CONFIG.description}</p>
            <div className="text-primary font-medium">
              <Button
                variant="link"
                onClick={() => {
                  window.open(`mailto:${SITE_CONFIG.email}`, '_blank')
                }}
              >
                {SITE_CONFIG.email}
              </Button>
            </div>
          </Copy>
        </div>
        <div className="md:col-span-1">
          <Copy>
            <h3 className="mb-3 text-lg font-medium text-gray-900 underline">Navigation</h3>
            <div className="flex flex-col gap-1">
              {NAVIGATION_ITEMS.map(item => (
                <Button
                  variant="link"
                  onClick={() => {
                    navigateTo(item.href)
                  }}
                  className="text-gray-700!"
                  key={item.href}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </Copy>
        </div>
        <div className="md:col-span-1">
          <Copy>
            <h3 className="mb-3 text-lg font-medium text-gray-900 underline">Socials</h3>
            <div className="flex flex-col items-start gap-1">
              <Button
                variant="link"
                onClick={() => {
                  window.open(SITE_CONFIG.social.instagram, '_blank')
                }}
                className="text-gray-700!"
              >
                Instagram
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  window.open(SITE_CONFIG.social.linkedin, '_blank')
                }}
                className="text-gray-700!"
              >
                LinkedIn
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  window.open(SITE_CONFIG.social.twitter, '_blank')
                }}
                className="text-gray-700!"
              >
                Twitter
              </Button>
            </div>
          </Copy>
        </div>
      </div>
      <div className="bg-background my-5 h-[2px] w-full" />
      <div className="mt-4 flex flex-col items-center justify-between md:flex-row">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
        </div>
        <div className="mt-4 flex gap-4 md:mt-0">
          <Button
            variant="link"
            onClick={() => navigateTo('/terms')}
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            onClick={() => navigateTo('/privacy')}
          >
            Privacy Policy
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
