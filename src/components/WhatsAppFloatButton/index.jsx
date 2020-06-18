import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import Style from './style.module.scss'

const WhatsAppFloatButton = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=+555499616386&text=Olá, vim através do site." 
      className={ Style.whatsapp_float_button } 
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp style={{ marginTop: '16px' }} />
    </a>
  )
}

export default WhatsAppFloatButton