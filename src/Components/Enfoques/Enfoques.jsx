import React from 'react';
import Emocional from './Emocional';
import "./enfoques.css";
import Description from './Description';
import { InlineWidget } from 'react-calendly';

const Enfoques = ({id}) => {
  return (
    <section className="enfoques section" id={id}>
        <h2 className="section__title">Asesorías Online</h2>
        <p className="enfoques__subtitle"> Con la asesoría online obtendrás información y apoyo para mejorar la conducta de tu hijo y potenciar su desarrollo a través de guías, estrategias y ejercicios prácticos para aplicar en casa.
        </p>
        
        <div className="enfoques__container container grid">
          <Description/>
          <Emocional/>
        </div>
        
        <InlineWidget styles={{
          height: '688px',
          margin: '25px',
          }} url="https://calendly.com/psicoaventuras-vzla/asesoria-online" />

      
    </section>
  )
}

export default Enfoques