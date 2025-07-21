'use client'
import type { TimelineItem } from '@/types'
import FadeIn from '@/components/animations/fade-in'

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line - hidden on mobile, visible on larger screens */}
      <div className="timeline-line from-primary absolute top-0 left-4 h-full w-0.5 origin-top bg-gradient-to-b via-black to-transparent sm:left-1/2 sm:-translate-x-1/2 sm:transform" />

      {/* Timeline items */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <FadeIn
            key={item.id}
            direction={index % 2 === 0 ? 'right' : 'left'}
            className={`relative flex items-start sm:items-center ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } flex-row`}
          >
            {/* Timeline marker */}
            <div className="timeline-marker absolute left-4 z-10 mt-2 -translate-x-1/2 transform sm:left-1/2 sm:mt-0">
              <div
                className={`border-primary h-3 w-3 rounded-full border-2 shadow-lg sm:h-4 sm:w-4 sm:border-4 ${
                  item.isComingSoon ? 'bg-background' : 'bg-primary'
                }`}
              />
            </div>

            {/* Content card */}
            <div className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
              <div
                className={`rounded-4xl bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:p-6 ${
                  item.isComingSoon ? 'opacity-75' : ''
                }`}
              >
                {/* Year badge */}
                <div
                  className={`bg-primary/10 text-primary mb-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium sm:mb-3 sm:px-3 sm:py-1 sm:text-sm`}
                >
                  {item.isComingSoon && <span className="mr-1 text-xs sm:mr-2">Coming Soon</span>}
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="timeline-title text-primary mb-2 text-lg leading-tight font-semibold sm:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="timeline-description text-primary/70 font-sans text-sm leading-relaxed sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Empty space for alternating layout - only on larger screens */}
            <div className="hidden sm:block sm:w-5/12" />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
