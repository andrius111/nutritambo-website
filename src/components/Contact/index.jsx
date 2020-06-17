import React from 'react'

import Style from './style.module.scss'

const Contact = () => {
  return (
    <section 
      className={ Style.contact_container }
      id="contato"
    >
      <h1>Contato</h1>

      <div>
        <form className={ Style.contact_form }>
          <input
            data-aos="zoom-out-right"
            id="name"
            placeholder="Nome"
            required={ true }
            type="text"
          />

          <input
            data-aos="zoom-out-left"
            id="email"
            placeholder="E-mail"
            required={ true }
            type="email"
          />

          <input
            data-aos="zoom-out-right"
            id="phone"
            placeholder="Telefone"
            required={ true }
            type="text"
          />

          <textarea 
            data-aos="zoom-out-left"
            id="message"
            placeholder="Mensagem"
          />

          <button 
            data-aos="zoom-out-right"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact