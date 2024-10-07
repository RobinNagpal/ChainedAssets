import { NavBar } from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import Challenges from '@/components/Challenges'
import ContactPage from '@/components/ContactPage'
import { Footer } from '@/components/Footer'
import RwaSolutions from '@/components/RwaSolutions'
import RwaResearch from '@/components/RwaResearch'
import RwaLandscape from '@/components/RwaLandscape'
import BusinessDevelopment from '@/components/BusinessDevelopment'
import Consultations from '@/components/Consultations'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://chained-assets.vercel.app'),
  title:
    'Chained Assets - Comprehensive Guide to Real-World Asset Tokenization',
  description:
    'DoDAO simplifies the process of bringing real-world assets (RWAs) to the blockchain. We offer research, consulting, and business development services to help you navigate regulatory challenges and drive sustainable growth.',
  keywords: [
    'Chained Assets',
    'DoDAO',
    'Real World Assets',
    'Blockchain',
    'RWA Solutions',
    'RWA Research',
    'RWA Landscape',
    'Consultations',
    'Business Development',
    'Blockchain Consulting',
    'Regulatory Compliance',
    'Tokenization of Real World Assets',
  ],
  authors: { name: 'DoDAO' },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      'Chained Assets - Comprehensive Guide to Real-World Asset Tokenization',
    description:
      "Simplify the process of bringing real-world assets to blockchain with DoDAO's expert services in research, consulting, and business development.",
    url: 'https://chained-assets.vercel.app/',
    siteName: 'Chained Assets',
    images: [
      {
        url: '/dodao_logo.png',
        alt: 'Chained Assets Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Chained Assets - Comprehensive Guide to Real-World Asset Tokenization',
    description:
      "Simplify the process of bringing real-world assets to blockchain with DoDAO's expert services in research, consulting, and business development.",
    images: ['/dodao_logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://chained-assets.vercel.app/',
  },
}

export default function Home() {
  return (
    <>
      <HomePage />
      <NavBar />
      <Challenges />
      <RwaSolutions />
      <RwaResearch />
      <RwaLandscape />
      <BusinessDevelopment />
      <Consultations />
      <ContactPage />
      <Footer />
    </>
  )
}
