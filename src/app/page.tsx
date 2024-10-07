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
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Chained Assets - Comprehensive Guide to Real-World Asset Tokenization
        </title>
        <meta
          name="description"
          content="DoDAO simplifies the process of bringing real-world assets (RWAs) to the blockchain. We offer research, consulting, and business development services to help you navigate regulatory challenges and drive sustainable growth."
        />
        <meta
          name="keywords"
          content="Chained Assets, DoDAO, Real World Assets, Blockchain, RWA Solutions, RWA Research, RWA Landscape, Consultations, Business Development, Blockchain Consulting, Regulatory Compliance, Tokenization of Real World Assets"
        />
        <meta name="author" content="DoDAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for social media sharing */}
        <meta
          property="og:title"
          content="Chained Assets - Comprehensive Guide to Real-World Asset Tokenization"
        />
        <meta
          property="og:description"
          content="Simplify the process of bringing real-world assets to blockchain with DoDAO's expert services in research, consulting, and business development."
        />
        <meta property="og:image" content="/dodao_logo.png" />
        <meta property="og:url" content="https://chained-assets.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chained Assets - Comprehensive Guide to Real-World Asset Tokenization"
        />
        <meta
          name="twitter:description"
          content="Simplify the process of bringing real-world assets to blockchain with DoDAO's expert services in research, consulting, and business development."
        />
        <meta name="twitter:image" content="/dodao_logo.png" />

        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Chained Assets" />
        <link rel="canonical" href="https://chained-assets.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
