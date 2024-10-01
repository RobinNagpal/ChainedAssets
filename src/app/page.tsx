'use client'

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
import { Treemap } from '@/components/TreeMap'
import { data } from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route
          path="/landscape"
          element={<Treemap data={data} width={width * 0.9} height={height} />}
        />
      </Routes>
    </Router>
  )
}
