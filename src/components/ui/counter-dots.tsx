import React from 'react'

interface CounterDotsProps {
  count: number
}

const CounterDots = ({ count }: CounterDotsProps) => {
  return (
    <div className="absolute top-5 left-5 grid grid-cols-2 grid-rows-2 items-center justify-center gap-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`bg-primary h-3 w-3 rounded-full`}
          style={{ opacity: index < count ? 1 : 0.3 }}
        />
      ))}
    </div>
  )
}

export default CounterDots
