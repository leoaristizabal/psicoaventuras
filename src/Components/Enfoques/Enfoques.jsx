import React from 'react';
import Cognitivo from './Cognitivo';
import Emocional from './Emocional';
import "./enfoques.css";

const Enfoques = () => {
  return (
    <section className="enfoques section" id='enfoques'>
        <h2 className="section__title">Enfoques </h2>
        <span className="section__subtitle">Nivel Tecnico</span>

        <div className="enfoques__container container grid">
          <Cognitivo/>
          <Emocional/>
        </div>
    </section>
  )
}

export default Enfoques