import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import HeaderLogo from '../../assets/header-logo.png'
import Style from './style.module.scss'

const Header = () => {
  return (
    <header className={ Style.header_container }>
      <div className={ Style.header_topbar_container }>
        <div className={ Style.header_topbar_content }>
          <div className={ Style.header_top_bar_contacts }>
            <div><strong>André:</strong> 54 99917-2275</div>
            <div><strong>Martini:</strong> 54 99961-6386</div>
          </div>
        </div>
      </div>

      <nav className={ Style.nav_container }>
        <a href="#home">
          <img 
            alt="Nutritambo Logomarca" 
            className={ Style.logo }
            src={ HeaderLogo } 
          />
        </a>

        <a href="#sobre">
          Sobre
        </a>

        <a href="#representacoes">
          Representações
        </a>

        <a href="#contato">
          Contato
        </a>

        <div className={ Style.social_media_links }>
          <FaFacebook 
            color="#3A5897"
            cursor="pointer"
            onClick={ () => window.open('https://www.facebook.com/nutritambo', '_blank') }
            size={ 35 } 
            title="Acesse nosso Facebook"
          />

          <FaInstagram 
            color="#D1294A"
            size={ 35 }  
            cursor="pointer"
            title="Acesse nosso Instagram"
            onClick={ () => window.open('https://www.instagram.com/nutritambo', '_blank') }
          />
        </div>
      </nav>
    </header>
  )
}

export default Header