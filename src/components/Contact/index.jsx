import React, { useState } from 'react'
import { FiLoader } from 'react-icons/fi'
import axios from 'axios'
import Swal from 'sweetalert2'

import Style from './style.module.scss'
import '@sweetalert2/theme-borderless/borderless.scss';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sendingMail, setSendingMail] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    setSendingMail(true)

    axios.post(process.env.REACT_APP_SEND_MAIL_URL, {
      name,
      email,
      phone,
      message 
    }).then(response => {
      if (response.data.error) {
        Swal.fire({
          title: 'Não foi possível enviar o email...',
          html: response.data.error,
          showCloseButton: true,
          icon: 'error'
        })
      } else {
        Swal.fire({
          title: 'Email enviado com sucesso...',
          html: 'Logo entraremos em contato!',
          showCloseButton: true,
          icon: 'success'
        })

        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }

      setSendingMail(false)
    })
  }

  return (
    <section 
      className={ Style.contact_container }
      id="contato"
    >
      <h1>Contato</h1>

      <form 
        className={ Style.contact_form }
        onSubmit={ handleSubmit }
      >
        <input
          data-aos="zoom-out-right"
          id="name"
          onChange={ event => setName(event.target.value) }
          placeholder="Nome"
          required={ true }
          type="text"
          value={ name }
        />

        <input
          data-aos="zoom-out-left"
          id="email"
          onChange={ event => setEmail(event.target.value) }
          placeholder="E-mail"
          required={ true }
          type="email"
          value={ email }
        />

        <input
          data-aos="zoom-out-right"
          id="phone"
          onChange={ event => setPhone(event.target.value) }
          placeholder="Telefone"
          required={ true }
          type="text"
          value={ phone }
        />

        <textarea 
          data-aos="zoom-out-left"
          id="message"
          onChange={ event => setMessage(event.target.value) }
          placeholder="Mensagem"
          required={ true }
          value={ message }
        />

        <button 
          data-aos="zoom-out-right"
          type="submit"
          disabled={ sendingMail }
        >
          { 
            sendingMail 
              ? <FiLoader 
                  className={ Style.icon_spin }
                  size={ 30 } 
                /> 
              : 'Enviar' 
          }
        </button>
      </form>
    </section>
  )
}

export default Contact