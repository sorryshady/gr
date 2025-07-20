'use client'

import React, { useRef } from 'react'
import './heading.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import { useMedia } from 'react-use'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface HeadingProps {
  text: string
  animateOnScroll?: boolean
  delay?: number
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ animateOnScroll = true, delay = 0, type = 'h1', text }: HeadingProps) => {
  const headingRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMedia('(max-width: 768px)', false)

  useGSAP(
    () => {
      if (!headingRef.current) return

      const split = SplitText.create(headingRef.current, {
        type: 'chars',
        charsClass: 'char++',
      })

      split.chars.forEach(char => {
        const wrapper = document.createElement('span')
        wrapper.className = 'char-mask'
        wrapper.style.overflow = 'hidden'
        wrapper.style.display = 'inline-block'
        char.parentNode?.insertBefore(wrapper, char)
        wrapper.appendChild(char)
      })

      gsap.set(split.chars, { y: '100%' })

      const animationProps = {
        y: '0%',
        duration: 0.2,
        stagger: 0.05,
        delay: delay,
        ease: 'power3.out',
      }

      if (animateOnScroll) {
        gsap.to(split.chars, {
          ...animationProps,
          scrollTrigger: {
            trigger: headingRef.current,
            start: isMobile ? 'top 90%' : 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      } else {
        gsap.to(split.chars, animationProps)
      }

      return () => {
        if (split && typeof split.revert === 'function') {
          split.revert()
        }
      }
    },
    {
      scope: headingRef,
      dependencies: [animateOnScroll, delay],
    },
  )
  const Tag = type
  const baseClasses = {
    h1: 'text-5xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold',
  }
  return (
    <Tag
      ref={headingRef}
      className={`heading relative ${baseClasses[type]}`}
    >
      {text}
    </Tag>
  )
}

export default Heading
