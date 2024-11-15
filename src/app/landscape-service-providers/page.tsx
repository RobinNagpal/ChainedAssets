import { data } from '@/app/ecosystem-service-provider-data'
import EcosystemMap from '@/components/ReactTreeMap'
import { defaultViewport, getDefaultMetadata } from '@/utils/seoConfig'

export const viewport = defaultViewport

export const metadata = getDefaultMetadata(
  'https://chainedassets.com/landscape-service-providers',
  'Chained Assets - RWA Service Providers Ecosystem',
  'Explore the RWA Service Providers Landscape with Chained Assets. Discover key players, market insights, and opportunities for growth in the real-world asset ecosystem.',
  [
    'Chained Assets',
    'RWA Landscape',
    'Real World Assets',
    'Ecosystem Map',
    'Servce Providers',
    'RWA Ecosystem',
    'RWA Service Providers',
    'RWA Service Providers Map',
  ],
)

export default function LandscapePage() {
  return (
    <div className="flex justify-center bg-gray-900">
      <EcosystemMap data={data.children} />
    </div>
  )
}
