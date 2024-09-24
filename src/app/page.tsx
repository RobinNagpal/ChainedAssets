import { NavBar } from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import Challenges from '@/components/Challenges'
import ConsequencesOfBreaches from '@/components/ConsequencesOfBreaches'
import Services from '@/components/Services'
import ImportanceOfTesting from '@/components/ImportanceOfTesting'
import ContactPage from '@/components/ContactPage'
import { Footer } from '@/components/Footer'
import AIBenefits from '@/components/AIBenefits'

export default function Home() {
  return (
    <>
      <HomePage />
      <NavBar />
      <AIBenefits />
      <Challenges />
      <ConsequencesOfBreaches />
      <Services />
      <ImportanceOfTesting />
      <ContactPage />
      <Footer />
    </>
  )
}
