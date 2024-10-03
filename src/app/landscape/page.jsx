'use client'

import { data } from '@/app/data'
import EcosystemMap from '@/components/ReactTreeMap'

export default function LandscapePage() {
  return (
    <div className="flex justify-center">
      <EcosystemMap data={data.children} />
    </div>
  )
}
