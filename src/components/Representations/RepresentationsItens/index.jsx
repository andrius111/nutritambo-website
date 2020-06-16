import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import Style from './style.module.scss'

import Rumo from '../../../assets/representations/rumo.jpg'
import KWS from '../../../assets/representations/kws.jpg'
import SementesAdriana from '../../../assets/representations/sementesadriana.jpg'
import Biotrigo from '../../../assets/representations/biotrigo.jpg'
import CargaPesada from '../../../assets/representations/cargapesada.jpg'
import Gmax from '../../../assets/representations/gmax.jpg'

const RepresentationsItens = () => {
  const representations = [
    {
      title: 'Representante Rumo',
      img: Rumo,
      textAlign: 'left',
      text: `Linha completa de <strong> Minerais Rumo</strong>, a solução perfeita para cada situação. <br />
      A empresa destaca-se por vários fatores, mas os princiapais são:
      - Matérias primas selecionadas para a formulação dos produtos;
      - Flexibilidade na formulação de novos produtos;
      - Possibilidade de produzir marcas próprias para parceiros comerciais;
      - Equipe técnica de suporte são os próprios proprietários do negócio com alto conhecimento no assunto.`,
    },

    {
      title: 'Representante KWS',
      img: KWS,
      textAlign: 'right',
      text: `Semente de milho <strong> KWS</strong>, os melhores milhos para silagem, campeã nos ensaios CCGL safra 18/19. <br />
      - Quantidade aliado a qualidade, entregando muito mais leite por há produzido;
      - Acentuado stay green que amplia a janela de corte para silagem;
      - Grão profundo que facilita a quebra no mesmo no processo de ensilagem;
      - Fibra com alta digestibilidade.`,
    },

    {
      title: 'Representante ATTO Adriana Sementes',
      img: SementesAdriana,
      textAlign: 'left',
      text: `Sementes de pastagens<strong> ATTO Adriana Sementes</strong>, os melhores milhetos e azevéns disponíveis no mercado e agora com a novidade Trevo Alexandrino Tigri também. <br />
      - Milheto híbrido ADRf 6010 o melhor material para pastagem de verão, alta produtividade com muita proteína, redução de custo na propriedade é o que entrega;
      - Azevens diploide e tetraploide, ciclo alongado, alta produção de MS/ha, resistência a doenças e alta conversão em leite;
      - Trevo alexandrino variedade Tigri, um material que veio para marcar época, a melhor opção para sobressemeadura em gramas no inverno;`,
    },

    {
      title: 'Representante Biotrigo',
      img: Biotrigo,
      textAlign: 'right',
      text: `<strong> Trigo Lenox da Biotrigo </strong> é uma tecnologia nova que vem para entregar muito mais quantidade com qualidade em termos de pastagens superiores. Um material com vários diferenciais: <br />
      - Alta palatabilidade;
      - Elevada produção e MS/ha podendo chegar a 100 kg/dia;
      - Chega a 30% de PB, resultando em economia ao produtor com a redução da PB da ração;
      - Sistema radicular muito agressivo, colaborando inclusive para descompactação do solo;
      - Sanidade foliar;
      - Alta capacidade de rebrote que lhe confere um grande número de pastejos;
      - Excelente conversão em leite e carne por kg de MS.`,
    },

    {
      title: 'Representante Lonas Carga Pesada',
      img: CargaPesada,
      textAlign: 'left',
      text: `Toda linha de <strong>Lonas Carga Pesada </strong>, material altamente resistente, produzido com a melhor matéria prima e aditivos especiais, entregando segurança ao produto armazenado.`,
    },

    {
      title: 'Representante Gmax',
      img: Gmax,
      textAlign: 'right',
      text: `<strong> Aveia GMX Bagual</strong> , uma aveia forrageira diferenciada para altas produtividades de MS/há e com qualidade <br />
      - Alta capacidade de rebrote
      - Ciclo longo
      - Alto teor de proteína e qualidade de fibra
      - Super resistente ao pisoteio
      -Alta resistência a doenças`,
    }
  ]

  return (
    <React.Fragment>
      {
        representations.map(representation => {
          let className = Style.representations_items_container

          if (representation.textAlign === 'right') {
            className += ' ' + Style.reverse
          }  

          return (
            <div 
              className={ className }
              data-aos={ "zoom-out-" + representation.textAlign }
              data-aos-duration="1000"
              key={ representation.title }
            >
              <p className={ Style["text_" + representation.textAlign] }>
                { ReactHtmlParser(representation.text) }
              </p>
  
              <img src={ representation.img } alt={ representation.title } />
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default RepresentationsItens