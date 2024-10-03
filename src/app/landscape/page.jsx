'use client'

import { Treemap } from '@/components/TreeMap'
import { data } from '@/app/data'
import { useEffect, useState } from 'react'
import EcosystemMap from '@/components/ReactTreeMap'

export default function LandscapePage() {
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     })
  //   }

  //   updateDimensions()
  //   window.addEventListener('resize', updateDimensions)

  //   return () => window.removeEventListener('resize', updateDimensions)
  // }, [])

  // // Render nothing until dimensions are set to avoid SSR issues
  // if (dimensions.width === 0 || dimensions.height === 0) {
  //   return null
  // }

  return (
    <div className="flex justify-center">
      {/* <Treemap
        data={data}
        width={dimensions.width * 0.9}
        height={dimensions.height}
      /> */}
      <EcosystemMap data={data.children} />
    </div>
  )
}
