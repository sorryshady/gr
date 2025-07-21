'use client'
import gsap from 'gsap'
import type { TimelineItem } from '@/types'
import { useEffect, useRef } from 'react'

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!timelineRef.current) return

    const ctx = gsap.context(() => {
      // Enhanced timeline item animations
      itemsRef.current.forEach((item, index) => {
        if (!item) return

        const card = item.querySelector('.timeline-card')
        const marker = item.querySelector('.timeline-marker')
        const badge = item.querySelector('.timeline-badge')
        const title = item.querySelector('.timeline-title')
        const description = item.querySelector('.timeline-description')

        // Create sophisticated timeline for each item
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        })

        // Set initial states
        gsap.set([card, marker], {
          opacity: 0,
          scale: 0.8,
        })

        gsap.set(card, {
          x: index % 2 === 0 ? -60 : 60,
          rotationY: index % 2 === 0 ? -15 : 15,
        })

        gsap.set([badge, title, description], {
          opacity: 0,
          y: 20,
        })

        // Animate marker first
        tl.to(marker, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        })

          // Then animate card
          .to(
            card,
            {
              opacity: 1,
              scale: 1,
              x: 0,
              rotationY: 0,
              duration: 0.6,
              ease: 'power2.out',
            },
            '-=0.2',
          )

          // Finally animate content with stagger
          .to(
            [badge, title, description],
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
              stagger: 0.1,
            },
            '-=0.3',
          )
      })

      // Enhanced connecting line animation
      const line = timelineRef.current?.querySelector('.timeline-line')
      if (line) {
        gsap.fromTo(
          line,
          {
            scaleY: 0,
            transformOrigin: 'top center',
          },
          {
            scaleY: 1,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          },
        )
      }

      // Add subtle parallax effect to timeline markers
      const markers = timelineRef.current?.querySelectorAll('.timeline-marker')
      if (markers) {
        markers.forEach((marker, index) => {
          gsap.to(marker, {
            y: -10,
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          })
        })
      }
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={timelineRef}
      className={`relative ${className}`}
    >
      {/* Connecting line - hidden on mobile, visible on larger screens */}
      <div className="timeline-line from-primary absolute top-0 left-4 h-full w-0.5 origin-top bg-gradient-to-b via-black to-transparent sm:left-1/2 sm:-translate-x-1/2 sm:transform" />

      {/* Timeline items */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={el => {
              itemsRef.current[index] = el
            }}
            className={`relative flex items-start sm:items-center ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } flex-row`}
          >
            {/* Timeline marker */}
            <div className="timeline-marker absolute left-4 z-10 mt-2 -translate-x-1/2 transform sm:left-1/2 sm:mt-0">
              <div
                className={`border-primary/10 h-3 w-3 rounded-full border-2 shadow-lg sm:h-4 sm:w-4 sm:border-4 ${
                  item.isComingSoon ? 'bg-background' : 'bg-primary'
                }`}
              />
            </div>

            {/* Content card */}
            <div className={`ml-12 w-full sm:ml-0 sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
              <div
                className={`timeline-card border-border touch-manipulation rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6 ${
                  item.isComingSoon ? 'opacity-75' : ''
                }`}
              >
                {/* Year badge */}
                <div
                  className={`timeline-badge mb-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium sm:mb-3 sm:px-3 sm:py-1 sm:text-sm ${
                    item.isComingSoon ? 'bg-muted text-foreground/60' : 'bg-accent/10 text-accent'
                  }`}
                >
                  {item.isComingSoon && <span className="mr-1 text-xs sm:mr-2">Coming Soon</span>}
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="timeline-title text-foreground mb-2 font-serif text-lg leading-tight font-semibold sm:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="timeline-description text-foreground/70 text-sm leading-relaxed sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Empty space for alternating layout - only on larger screens */}
            <div className="hidden sm:block sm:w-5/12" />
          </div>
        ))}
      </div>
    </div>
  )
}
