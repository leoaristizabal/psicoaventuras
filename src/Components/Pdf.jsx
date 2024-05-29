import React from 'react'
import Guia from "../assets/Guia.pdf"
const Pdf = () => {
  return (
    <div>
            <h1>Descargar Guía - Pequeños Abitos / Grandes Logros</h1>
            <a href={Guia} download>Descargar PDF</a>
        </div>
  )
}

export default Pdf