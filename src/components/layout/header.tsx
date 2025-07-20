'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMedia } from 'react-use'
import { NavigationItem } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const isMobile = useMedia('(max-width: 767px)', false)
  const pathName = usePathname()
  const [activeLink, setActiveLink] = useState<NavigationItem['name']>('Home')
  useEffect(() => {
    const activeLink = NAVIGATION_ITEMS.find(item => item.href === pathName)
    setActiveLink(activeLink?.name || 'Home')
  }, [pathName])

  return (
    <nav className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2">
      <div className="flex h-36 w-36 flex-col-reverse items-center justify-center rounded-xl border border-red-500 p-1 md:h-20 md:w-64 md:flex-row">
        <div className="flex size-full items-center justify-center">{isMobile ? <Menu /> : <span>Menu</span>}</div>
        <div className="flex size-full items-center justify-center rounded-xl bg-black text-white">{activeLink}</div>
      </div>
    </nav>
  )
}

export default Header
