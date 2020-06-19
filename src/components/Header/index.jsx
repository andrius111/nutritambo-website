import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa'

import HeaderLogo from '../../assets/header-logo.png'
import Style from './style.module.scss'

const Header = () => {
  const [menuBurgerClass, setMenuBurgerClass] = useState(Style.nav_container_responsive + ' ' + Style.hidden)
  const [headerContainerClass, setHeaderContainerClass] = useState(Style.header_container)

  const handleBurgerMenu = () => {
    if (menuBurgerClass === Style.nav_container_responsive) {
      setMenuBurgerClass(Style.nav_container_responsive + ' ' + Style.hidden)
      setHeaderContainerClass(Style.header_container)
    } else {
      setMenuBurgerClass(Style.nav_container_responsive)
      setHeaderContainerClass(Style.header_container + ' ' + Style.header_container_300)
    }
  }

  return (
    <header className={ headerContainerClass }>
      <div className={ Style.header_topbar_container }>
        <div className={ Style.header_topbar_content }>
          <div className={ Style.header_top_bar_contacts }>
            <div className={ Style.header_top_bar_contacts_item }><strong>André:</strong> 54 99917-2275</div>
            <div className={ Style.header_top_bar_contacts_item }><strong>Martini:</strong> 54 99961-6386</div>
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

        <div className={ Style.burger_menu_icon }>
          <FaBars
            cursor="pointer"
            size={ 30 }
            onClick={ () => handleBurgerMenu() }
          />
        </div>
      </nav>

      <nav className={ menuBurgerClass }>
        <a href="#sobre">
          Sobre
        </a>

        <a href="#representacoes">
          Representações
        </a>

        <a href="#contato">
          Contato
        </a>
      </nav>
    </header>
  )
}

export default Header