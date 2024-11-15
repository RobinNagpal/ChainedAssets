import serviceProviderData from '@/app/data/generated-json/ecosystem-service-provider-data.json'
import { Tree } from '@/app/types/ecosystemTypes'
import EcosystemMap from '@/components/ReactTreeMap'
import { defaultViewport, getDefaultMetadata } from '@/utils/seoConfig'

export const viewport = defaultViewport

const treeData: Tree[] = serviceProviderData.children.map((category) => ({
  ...category,
  type: 'node',
  children: category.children.map((serviceProvider) => ({
    ...serviceProvider,
    type: 'leaf',
    value: 50,
  })),
}))

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
      <EcosystemMap data={treeData} />
    </div>
  )
}
