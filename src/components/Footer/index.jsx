import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import Logo from '../../assets/logo.png'
import Style from './style.module.scss'

const Footer = () => {
  return (
    <footer className={ Style.footer_container }>
      <div className={ Style.footer_content }>
        <img src={ Logo } alt="Nutritambo" />

        <div className={ Style.footer_contacts }>
          <h3>Siga nossas Redes Sociais:</h3>

          <div className={ Style.footer_social_media }>
            <FaFacebook 
              color="#3A5897"
              cursor="pointer"
              onClick={ () => window.open('https://www.facebook.com/nutritambo', '_blank') }
              size={ 60 } 
              title="Acesse nosso Facebook"
            />

            <FaInstagram 
              color="#D1294A"
              size={ 60 }  
              cursor="pointer"
              title="Acesse nosso Instagram"
              onClick={ () => window.open('https://www.instagram.com/nutritambo', '_blank') }
            />
          </div>
        </div>

        <div className={ Style.footer_address }>
          <h3>Endereço:</h3>

          Rua Franklin Siliprandi, 25 <br/>
          Constantina / RS <br/>
          CEP: 99680-000
        </div>

        <div className={ Style.footer_contacts }>
          <h3>Contatos:</h3>
          <ul>
            <li><strong>Email:</strong> nutritambo@nutritambo.com.br</li>
            <li><strong>André Carboni:</strong> 54 99917-2275</li>
            <li><strong>Deomir Martini:</strong> 54 99961-6386</li>
          </ul>
        </div>    
      </div>
    </footer>
  )
}

export default Footer