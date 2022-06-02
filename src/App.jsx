import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App