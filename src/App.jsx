import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Fleet from './components/Fleet'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactFooter from './components/ContactFooter'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <ContactFooter />
      <FloatingCTA />
    </div>
  )
}

export default App
