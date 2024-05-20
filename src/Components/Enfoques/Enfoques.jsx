import React from 'react';
import Emocional from './Emocional';
import "./enfoques.css";
import Description from './Description';

const Enfoques = () => {
  return (
    <section className="enfoques section" id='enfoques'>
        <h2 className="section__title">Asesorias Online(Prueba)</h2>
        <p className="enfoques__subtitle"> La asesoría te brindará orientacion y apoyo integral para potenciar el desarrollo de tus hijos a través de herramientas, estrategias, ejercicios, y guías para utilizar en casa y en su rutina diaria.
        </p>

        <div className="enfoques__container container grid">
          <Emocional/>
          <Description/>
        </div>
    </section>
  )
}

export default Enfoques