import React from 'react'

import RepresentationsItems from './RepresentationsItens'
import Parallax from '../Parallax'

import Style from './style.module.scss'
import ParallaxBackground from '../../assets/parallax/01.jpg'

const Representations = () => {
  return (
    <section 
      className={ Style.representations_container }
      data-aos="fade-right"
      data-aos-duration="1000"
      id="representacoes"
    >
      <h1>Representações</h1>

      <RepresentationsItems />

      <Parallax background={ ParallaxBackground } />
    </section>
  )
}

export default Representations