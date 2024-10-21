import { data } from '@/app/data'
import EcosystemMap from '@/components/ReactTreeMap'
import { defaultViewport, getDefaultMetadata } from '@/utils/seoConfig'

export const viewport = defaultViewport

export const metadata = getDefaultMetadata(
  'https://chainedassets.com/landscape',
  'Chained Assets - RWA Landscape',
  'Explore the comprehensive RWA Landscape with Chained Assets. Discover key players, market insights, and opportunities for growth in the real-world asset tokenization ecosystem.',
  [
    'Chained Assets',
    'RWA Landscape',
    'Real World Assets',
    'Blockchain',
    'Ecosystem Map',
    'Tokenization',
    'Blockchain Consulting',
    'Regulatory Compliance',
    'RWA TreeMap',
    'RWA Ecosystem',
    'RWA Market',
    'RWA Projects',
  ],
)

export default function LandscapePage() {
  return (
    <div className="flex justify-center bg-gray-900">
      <EcosystemMap data={data.children} />
    </div>
  )
}
