// components/CustomCursor.tsx
'use client'

import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)`,
      }}
    >
      <div className="w-6 h-6 rounded-full border border-gold/70 bg-gold/10 blur-[1px] transition-all duration-150 ease-out" />
    </div>
  )
}

export default CustomCursor
