'use client'
import React, { useRef, useEffect, useState } from 'react'

import { useLenis } from 'lenis/react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  grayscale?: boolean
  width?: number
  height?: number
}

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

const ParallaxImage = ({
  src,
  alt,
  speed = 0.3,
  grayscale = false,
  width = 1000,
  height = 1000,
}: ParallaxImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const bounds = useRef<{ top: number; bottom: number; height: number } | null>(null)
  const currentTranslateY = useRef(0)
  const targetTranslateY = useRef(0)
  const rafId = useRef<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 900)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        }
      }
    }

    updateBounds()
    window.addEventListener('resize', updateBounds)

    const animate = () => {
      if (imageRef.current && bounds.current) {
        currentTranslateY.current = lerp(currentTranslateY.current, targetTranslateY.current, 0.1)

        if (Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px)`
        }
      }
      rafId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateBounds)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [isDesktop])

  useLenis(({ scroll }) => {
    if (!isDesktop || !bounds.current) return

    const windowHeight = window.innerHeight
    const elementMiddle = bounds.current.top + bounds.current.height / 2
    const windowMiddle = scroll + windowHeight / 2
    const distanceFromCenter = windowMiddle - elementMiddle

    targetTranslateY.current = distanceFromCenter * speed
  })

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        willChange: isDesktop ? 'transform' : 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: grayscale ? 'grayscale(100%)' : 'none',
      }}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  )
}

export default ParallaxImage
