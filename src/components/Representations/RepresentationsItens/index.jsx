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
      - Matérias primas selecionadas para a formulação dos produtos;
      - Flexibilidade na formulação de novos produtos;
      - Desenvolvimento de marcas próprias para parceiros comerciais;
      - Equipe técnica de suporte com especialistas no segmento.`,
    },

    {
      title: 'Representante KWS',
      img: KWS,
      textAlign: 'right',
      text: `A <strong>KWS</strong> é especialista em produção de sementes de milho e soja. <br />
      - Desde 1856 produzindo os melhores híbridos de milho na Alemanha;
      - Qualidade e produtividade nos materiais para silagem e grão;
      - Melhor conversão de litros de leite por kg/MS;
      - Qualidade e vigor nas sementes;
      - Variedades de soja super produtivas e com ciclo curto;`,
    },

    {
      title: 'Representante ATTO Adriana Sementes',
      img: SementesAdriana,
      textAlign: 'left',
      text: `<strong>ATTO Adriana Sementes</strong> oferta as melhores opções em milhetos, azevéns, trevo e crotalária.<br />
      - Milheto híbrido ADRf 6010 - Valente e ADR 500 os melhores materiais para pastagens de verão;
      - Azevéns Nibbio e Ceronte a certeza de produtividade com qualidade no inverno;
      - ADR 300 e Crotalária são a garantia de uma cobertura com segurança e resultados.
      - Trevo Tigri vem para melhorar a qualidade das forragens`,
    },

    {
      title: 'Representante Biotrigo',
      img: Biotrigo,
      textAlign: 'right',
      text: `A <strong>Biotrigo Genética</strong> agora também com a linha Nutrição Animal. <br />
      - Com genética européia o Trigo Lenox entrega qualidade e quantidade na entressafra de pastagens;
      - O Trigo Energix é a melhor opção para pré-secado e silagem de inverno
      - Os trigos entregam altas produtividades com qualidade, além de estabilidade.`,
    },

    {
      title: 'Representante Lonas Carga Pesada',
      img: CargaPesada,
      textAlign: 'left',
      text: `A <strong>Carga Pesada</strong> chega ao RS com o que ha de melhor em lonas para silagem.<br>
      - Produtos fabricados com a melhor matéria prima;
      - Aditivos especiais garantem a qualidade;
      - Lona Premium é a grande novidade do mercado de lonas.`,
    },

    {
      title: 'Representante Gmax',
      img: Gmax,
      textAlign: 'right',
      text: `<strong>Gmax Genética Gaúcha</strong> traz novidades no mercado de aveias superiores. <br />
      - As aveias GMX Bagual e GMX Tambo são materiais superiores;
      - Ciclo longo e com alto teto produtivo;
      - Alta conversão em leite por Kg/MS consumido.`,
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
              <p>
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