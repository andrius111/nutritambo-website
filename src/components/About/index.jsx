import React from 'react'
import { BsStar } from 'react-icons/bs'
import { FiThumbsUp, FiBarChart, FiTrendingUp } from 'react-icons/fi'
import { FcSupport } from 'react-icons/fc'
import { FaRegHandshake, FaPeopleCarry, FaRegCopyright } from 'react-icons/fa'

import AboutCards from './AboutCards'
import Parallax from '../Parallax'

import Style from './style.module.scss'
import ParallaxBackground from '../../assets/parallax/02.jpg'

const About = () => {
  const aboutItems = [
    { text: 'Produtos Diferenciados', icon: <BsStar size={ 70 } color="#91D331" /> },
    { text: 'Qualidade Garantida', icon: <FiThumbsUp size={ 70 } color="#DC8E29" /> },
    { text: 'Suporte Técnico', icon: <FcSupport size={ 70 } /> },
    { text: 'Atendimento Diferenciado', icon: <FaRegHandshake size={ 80 } color="#2197D2" /> },
    { text: 'Pós-venda Garantido', icon: <FiBarChart size={ 70 } color="#E1A028" /> },
    { text: 'Agilidade Nos Processos', icon: <FiTrendingUp size={ 70 } color="#91D331" /> },
    { text: 'Treinamentos Técnicos', icon: <FaPeopleCarry size={ 70 } color="#2197D2" /> },
    { text: 'Desenvolvimento de Marcas Próprias', icon: <FaRegCopyright size={ 70 } color="#91D331" /> }
  ]

  return (
    <section 
      className={ Style.about_container }
      data-aos="fade-right"
      data-aos-duration="1000"
      id="sobre"
    >
      <h1>Sobre</h1>

      <p 
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Trabalhamos com  distribuição e representação de produtos para o setor agropecuário. <br /><br />
        Temos como foco principal disponibilizar produtos diferenciados que entregam mais resultados aos nossos clientes, sejam eles revendas ou agricultores. <br /><br />
        Nossa meta não é apenas entregar produtos com qualidade, mas levar conhecimento aos nossos parceiros comerciais e ao produtor rural. <br /><br />
        Venha ser o Novo, venha ser Nutritambo você também. <br /><br />
     </p>

     <div className={ Style.about_items }>
        { 
          aboutItems.map(item => 
            <AboutCards 
              icon={ item.icon } 
              key={ item.text } 
              text={ item.text } 
            />
          ) 
        }
     </div>

     <Parallax background={ ParallaxBackground } />
    </section>
  )
}

export default About