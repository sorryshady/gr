'use client'
import { useEffect, useState } from 'react'

import { ReactLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollSettings = isMobile
    ? {
        duration: 0.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.2,
        wheelMultiplier: 1.5,
        orientation: 'vertical' as const,
        smoothWheel: true,
        syncTouch: true,
      }
    : {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: 'vertical' as const,
        smoothWheel: true,
        syncTouch: true,
      }

  return (
    <ReactLenis
      root
      options={scrollSettings}
      className="relative"
      key={pathname}
    >
      {children}
    </ReactLenis>
  )
}
