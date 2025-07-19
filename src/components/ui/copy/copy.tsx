'use client'
import { useMedia } from 'react-use'
import './copy.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface CopyProps {
  children: React.ReactNode
  animateOnScroll?: boolean
  delay?: number
}

const Copy = ({ children, animateOnScroll = true, delay = 0 }: CopyProps) => {
  const isMobile = useMedia('(max-width: 768px)')
  const containerRef = useRef<HTMLDivElement | null>(null)
  const elementRefs = useRef<(HTMLDivElement | Element)[]>([])
  const splitRefs = useRef<SplitText[]>([])
  const lines = useRef<Element[]>([])

  const waitForFonts = async () => {
    try {
      await document.fonts.ready

      const customFonts = ['nm', 'DM Mono']
      const fontCheckPromises = customFonts.map(fontFamily => {
        return document.fonts.check(`16px ${fontFamily}`)
      })

      await Promise.all(fontCheckPromises)
      await new Promise(resolve => setTimeout(resolve, 100))

      return true
    } catch (error) {
      console.warn('Font loading check failed, proceeding anyway:', error)
      await new Promise(resolve => setTimeout(resolve, 200))
      return true
    }
  }

  useGSAP(
    () => {
      const initializeSplitText = async () => {
        await waitForFonts()

        if (!containerRef.current) return

        splitRefs.current = []
        lines.current = []
        elementRefs.current = []

        let elements: (HTMLDivElement | Element)[] = []
        if (containerRef.current.hasAttribute('data-copy-wrapper')) {
          elements = Array.from(containerRef.current.children)
        } else {
          elements = [containerRef.current]
        }

        elements.forEach(element => {
          if (!element) return

          elementRefs.current.push(element)

          const split = SplitText.create(element, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'line++',
            lineThreshold: 0.1,
          })

          splitRefs.current.push(split)

          const computedStyle = window.getComputedStyle(element)
          const textIndent = computedStyle.textIndent

          if (textIndent && textIndent !== '0px') {
            if (split.lines.length > 0 && split.lines[0] instanceof HTMLElement) {
              ;(split.lines[0] as HTMLElement).style.paddingLeft = textIndent
            }
            if (element instanceof HTMLElement) {
              element.style.textIndent = '0'
            }
          }

          lines.current.push(...split.lines)
        })

        gsap.set(lines.current, { y: '100%' })

        const animationProps = {
          y: '0%',
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
          delay: delay,
        }

        if (animateOnScroll) {
          if (isMobile) {
            gsap.to(lines.current, {
              ...animationProps,
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
                once: true,
              },
            })
          } else
            gsap.to(lines.current, {
              ...animationProps,
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                once: true,
              },
            })
        } else {
          gsap.to(lines.current, animationProps)
        }
      }
      initializeSplitText()

      return () => {
        splitRefs.current.forEach(split => {
          if (split) {
            split.revert()
          }
        })
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] },
  )
  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
    >
      {children}
    </div>
  )
}

export default Copy
