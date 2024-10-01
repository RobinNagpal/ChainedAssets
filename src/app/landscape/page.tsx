'use client'

import { Treemap } from '@/components/TreeMap'
import { data } from '@/app/data'

export default function LandscapePage() {
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <div className="flex justify-center">
      <Treemap data={data} width={width * 0.9} height={height} />
    </div>
  )
}
