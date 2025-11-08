
import React from 'react'
import Hero from './sections/Hero'
import Modules from './sections/Modules'
import Benefits from './sections/Benefits'
import About from './sections/About'
import Footer from './sections/Footer'

export default function App(){ 
  return (
    <div className="page">
      <Hero />
      <main className="container">
        <Benefits />
        <Modules />
        <About />
      </main>
      <Footer />
    </div>
  )
}
