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
import { defaultViewport, getDefaultMetadata } from '@/utils/seoConfig'

export const viewport = defaultViewport

export const metadata = getDefaultMetadata(
  'https://chainedassets.com/',
  'Chained Assets - Comprehensive Guide to Real-World Asset Tokenization',
  'DoDAO simplifies the process of bringing real-world assets (RWAs) to the blockchain. We offer research, consulting, and business development services to help you navigate regulatory challenges and drive sustainable growth.',
  [
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
)

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
