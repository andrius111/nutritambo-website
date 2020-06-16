import React from 'react'

import Style from './style.module.scss'

const Parallax = (props) => (
  <div 
    className={ Style.parallax } 
    style={{ backgroundImage: `url(${ props.background })` }} 
  />
)

export default Parallax