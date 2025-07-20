import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled,
  type = 'button',
  isLoading,
}: ButtonProps) => {
  const buttonClasses = cn(
    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-500 cursor-pointer relative group',
    className,
  )

  const buttonVariants = {
    primary: 'bg-primary text-white hover:bg-primary/10 hover:text-primary',
    secondary: 'bg-background text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
    link: 'text-primary/70 hover:text-primary p-0',
    outline: 'border border-primary text-primary hover:bg-primary/10',
  }

  const buttonSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    icon: 'p-2',
  }

  return (
    <button
      className={cn(
        buttonClasses,
        buttonVariants[variant],
        buttonSize[size],
        isLoading && 'pointer-events-none opacity-50',
      )}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          {children}
          {variant === 'link' && (
            <span
              className={`bg-primary absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-200 group-hover:w-full`}
              aria-hidden="true"
            />
          )}
        </>
      )}
    </button>
  )
}

export default Button
