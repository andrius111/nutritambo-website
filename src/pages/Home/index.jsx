import React, { useEffect } from 'react'
import AOS from 'aos'

import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import About from '../../components/About'
import Representations from '../../components/Representations'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import WhatsAppFloatButton from '../../components/WhatsAppFloatButton'

import '../../../node_modules/aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <React.Fragment>
      <Header />
     
      <main>
        <Carousel />
        <About />
        <Representations />
        <Contact />
      </main>

      <Footer />

      <WhatsAppFloatButton />
    </React.Fragment>
  )
}

export default Home