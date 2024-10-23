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
