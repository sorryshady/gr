'use client'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useMedia } from 'react-use'

gsap.registerPlugin(ScrollTrigger)

interface FadeInProps {
  children: React.ReactNode
  stagger?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  easing?: string
  className?: string
  animateOnScroll?: boolean
}

const FadeIn = ({
  children,
  stagger = 0.1,
  direction = 'up',
  delay = 0,
  duration = 1.5,
  easing = 'power4.inOut',
  className,
  animateOnScroll = true,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useMedia('(max-width: 767px)', false)

  useGSAP(
    () => {
      if (!ref.current) return
      gsap.set(ref.current.children, {
        opacity: 0,
        y: direction === 'up' ? '20%' : direction === 'down' ? '-20%' : '0%',
        x: direction === 'left' ? '20%' : direction === 'right' ? '-20%' : '0%',
      })
      const animationProps = {
        y: '0%',
        x: '0%',
        opacity: 1,
        stagger: stagger,
        delay: delay,
        duration: duration,
        ease: easing,
      }
      if (animateOnScroll) {
        gsap.to(ref.current.children, {
          ...animationProps,
          scrollTrigger: {
            trigger: ref.current,
            start: isMobile ? 'top 90%' : 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      } else {
        gsap.to(ref.current.children, animationProps)
      }
    },
    {
      scope: ref,
      dependencies: [animateOnScroll],
    },
  )
  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  )
}

export default FadeIn
