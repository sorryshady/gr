import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <section
      className={cn('relative w-full px-4 pt-[120px] md:px-[80px] xl:px-[100px]', className)}
      id={id}
    >
      {children}
    </section>
  )
}

export default Container
