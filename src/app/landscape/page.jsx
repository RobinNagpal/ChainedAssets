'use client'

import { Treemap } from '@/components/TreeMap'
import { data } from '@/app/data'
import { useEffect, useState } from 'react'

export default function LandscapePage() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions and add event listener for window resizing
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Render nothing until dimensions are set to avoid SSR issues
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null
  }

  return (
    <div className="flex justify-center">
      <Treemap data={data} width={width * 0.9} height={height} />
    </div>
  )
}
