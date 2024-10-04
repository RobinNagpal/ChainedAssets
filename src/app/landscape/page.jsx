'use client'

import { data } from '@/app/data'
import EcosystemMap from '@/components/ReactTreeMap'

export default function LandscapePage() {
  return (
    <div className="flex justify-center bg-gray-900">
      <EcosystemMap data={data.children} />
    </div>
  )
}
