import { data } from '@/app/data'
import EcosystemMap from '@/components/ReactTreeMap'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://chained-assets.vercel.app/landscape'),
  title: 'Chained Assets - RWA Landscape',
  description:
    'Explore the comprehensive RWA Landscape with Chained Assets. Discover key players, market insights, and opportunities for growth in the real-world asset tokenization ecosystem.',
  keywords: [
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
  openGraph: {
    title: 'Chained Assets - RWA Landscape',
    description:
      'Discover the RWA Landscape with Chained Assets. Navigate the ecosystem easily and find growth opportunities.',
    url: 'https://chained-assets.vercel.app/landscape',
    siteName: 'Chained Assets',
    images: [
      {
        url: '/dodao_logo.png',
        width: 800,
        height: 600,
        alt: 'Chained Assets RWA Landscape',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chained Assets - RWA Landscape',
    description:
      'Explore the RWA Landscape with Chained Assets. Navigate the ecosystem and discover growth opportunities.',
    images: ['/dodao_logo.png'],
  },
  alternates: {
    canonical: 'https://chained-assets.vercel.app/landscape',
  },
}

export default function LandscapePage() {
  return (
    <div className="flex justify-center bg-gray-900">
      <EcosystemMap data={data.children} />
    </div>
  )
}
