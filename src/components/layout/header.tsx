'use client'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { NavigationItem } from '@/types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'
import { useTransitionRouter } from 'next-view-transitions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import Button from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const pathName = usePathname()
  const router = useTransitionRouter()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  // Initial fade-in animation
  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
      )
    }
  }, [])

  // Mobile menu animation
  useGSAP(() => {
    if (mobileMenuRef.current && mobileMenuItemsRef.current) {
      if (isMobileMenuOpen) {
        // Set initial state
        gsap.set(mobileMenuRef.current, { height: 0, opacity: 0 })
        gsap.set(mobileMenuItemsRef.current.children, { y: -20, opacity: 0 })

        // Animate in
        const tl = gsap.timeline()
        tl.to(mobileMenuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        }).to(
          mobileMenuItemsRef.current.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          },
          '-=0.2',
        )

        timelineRef.current = tl
      }
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu()
    } else {
      setIsMobileMenuOpen(true)
    }
  }

  const closeMobileMenu = () => {
    if (mobileMenuRef.current && mobileMenuItemsRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setIsMobileMenuOpen(false),
      })
      tl.to(mobileMenuItemsRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: 'power2.in',
      }).to(
        mobileMenuRef.current,
        {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        },
        '-=0.1',
      )
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  const isExactPath = (path: string) => {
    return pathName === path
  }

  const navigateTo = (path: string) => {
    if (isAnimating) return

    if (isExactPath(path)) {
      closeMobileMenu()
      return
    }

    closeMobileMenu()
    setIsAnimating(true)

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      })
      setIsAnimating(false)
    }, 750)
  }

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: 'translateY(0)',
        },
        {
          opacity: 0.2,
          transform: 'translateY(-35%)',
        },
      ],
      {
        duration: 1200,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 1200,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }

  const handleBackdropClick = () => {
    closeMobileMenu()
  }

  return (
    <>
      <nav
        ref={headerRef}
        className="bg-background fixed top-2 right-4 left-4 z-50 rounded-full border border-gray-200/30 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-sm md:right-[80px] md:left-[80px] lg:right-[100px] lg:left-[100px]"
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={e => {
              e.preventDefault()
              navigateTo('/')
            }}
          >
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg sm:h-10 sm:w-10">
              <span className="text-sm font-bold text-white md:text-base">GR</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 md:text-2xl">GR Groups</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {NAVIGATION_ITEMS.slice(1, -1).map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={e => {
                  e.preventDefault()
                  navigateTo(item.href)
                }}
                className={`hover:text-primary group relative text-lg font-medium transition-all duration-200 ${
                  pathName === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.name}
                <span
                  className={`bg-primary absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 ${pathName === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  aria-hidden="true"
                />
              </Link>
            ))}
            <Button onClick={() => navigateTo('/contact')}>Get in Touch</Button>
          </div>

          {/* Mobile Navigation - Contact Button + Menu */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Button onClick={() => navigateTo('/contact')}>Contact</Button>

            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="icon"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-[70px] right-4 left-4 mt-5 overflow-hidden rounded-2xl border border-gray-200/30 bg-white shadow-lg md:right-[80px] md:left-[80px] lg:right-[100px] lg:left-[100px]"
            style={{ height: 0 }}
          >
            <div
              ref={mobileMenuItemsRef}
              className="px-6 py-4"
            >
              <div className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.slice(1, -1).map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault()
                      navigateTo(item.href)
                    }}
                    className={`py-2 text-lg font-medium transition-all duration-200 ${
                      pathName === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
