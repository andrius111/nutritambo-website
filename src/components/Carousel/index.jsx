import React from 'react'
import Slider from 'react-slick'

import NutritamboBanner from '../../assets/banners/nutritambo.jpg'
import BiotrigoBanner from '../../assets/banners/biotrigo.jpg'
import RumoBanner from '../../assets/banners/rumo.jpg'
import CargaPesadaBanner from '../../assets/banners/cargapesada.jpg'
import SementesAdrianaBanner from '../../assets/banners/semestesadriana.jpg'
import KWSBanner from '../../assets/banners/kws.jpg'
import Gmax from '../../assets/banners/gmax.jpg'

import Style from './style.module.scss'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const SliderSettings = {
    autoplay: true,
    dots: true,
    speed: 500,
  }

  return (
    <section className={ Style.carousel }>
      <Slider { ...SliderSettings }>
        <div><img src={ NutritamboBanner } alt="Nutritambo Banner" /></div>
        <div><img src={ KWSBanner } alt="KWS Banner" /></div>
        <div><img src={ SementesAdrianaBanner } alt="Sementes Adriana Banner" /></div>
        <div><img src={ BiotrigoBanner } alt="Biotrigo Banner" /></div>
        <div><img src={ RumoBanner } alt="Rumo Banner" /></div>
        <div><img src={ CargaPesadaBanner } alt="Carga Pesada Banner" /></div>
        <div><img src={ Gmax } alt="Gmax Banner" /></div>
      </Slider>
    </section>
  )
}

export default Carousel