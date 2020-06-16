import React from 'react'

import Style from './style.module.scss'

const AboutCards = (props) => {
  return (
    <div 
      className={ Style.about_cards }
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      { props.icon }
     <p>{ props.text }</p>
    </div>
  )
}

export default AboutCards