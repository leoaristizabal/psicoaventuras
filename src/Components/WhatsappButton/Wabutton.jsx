import React from 'react'
import './wabutton.css'

const Wabutton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=+584245989755&text=Hola%20¿cómo%20puedo%20ayudarte?" className="floating-btn" target="_blank" rel="noopener noreferrer">
             <i className="bx bxl-whatsapp"></i> {/* Ícono de WhatsApp */}
        </a>
  )
}

export default Wabutton;