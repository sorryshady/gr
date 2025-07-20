'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMedia } from 'react-use'
import { NavigationItem } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { NAVIGATION_ITEMS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const pathName = usePathname()
  const [activeLink, setActiveLink] = useState<NavigationItem['name']>('Home')
  useEffect(() => {
    const activeLink = NAVIGATION_ITEMS.find(item => item.href === pathName)
    setActiveLink(activeLink?.name || 'Home')
  }, [pathName])

  return (
    <nav className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2">
      <div>{activeLink}</div>
    </nav>
  )
}

export default Header
