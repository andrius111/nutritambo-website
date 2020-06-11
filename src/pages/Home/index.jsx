import React from 'react'

import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import About from '../../components/About'
import Representations from '../../components/Representations'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
     
      <main>
        <Carousel />
        <About />
        <Representations />
      </main>
    </React.Fragment>
  )
}

export default Home