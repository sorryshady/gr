import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollTo = (target: string) => {
  gsap.to(window, {
    scrollTo: {
      y: target,
    },
    duration: 1,
    ease: 'power2.inOut',
  })
}

export function slideInOut() {
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
