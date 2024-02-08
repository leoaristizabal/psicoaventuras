import React, { useState } from "react";
import './services.css';

const Services = () => {

  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }



  return (
    <section className="services section" id="services">
      <h2 className="section__title">Atencion Especializada (Servicios)</h2>
      <span className="section__subtitle">
        Descubre como puedo ayudarte en el camino
      </span>

      <div className="services__container container grid">

        
{/**Separacion de services contente 1*/}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Terapias<br/>Online <br/>Personalizadas</h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(1)}>
            Ver Mas
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Terapia Personalizada para Niños y Familias</h3>
              <p className="services__modal-description">
                Examina cómo los niños pequeños aprenden a regular sus
                emociones, incluida la gestión de la frustración, la ira y la
                ansiedad, y cómo los adultos pueden apoyar este proceso de
                desarrollo.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>


{/**Separacion de services contente 2*/}

        <div className="services__content">
          <div>
            <i className="uil uil-band-aid services__icon"></i>
            <h3 className="services__title">Apoyo &<br/>Bienestar<br/>Emocional</h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(2)}>
            Ver Mas
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Brindando Orientación y Apoyo para Niños y Padres</h3>
              <p className="services__modal-description">
                Examina cómo los niños pequeños aprenden a regular sus
                emociones, incluida la gestión de la frustración, la ira y la
                ansiedad, y cómo los adultos pueden apoyar este proceso de
                desarrollo.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

{/**Separacion de services content 3 */}
        <div className="services__content">
          <div>
          <i class="uil uil-kid services__icon"></i>
            <h3 className="services__title">Evaluacion &<br/>Estimulacion<br/> Infantil</h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(3)}>
            Ver Mas
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Titulo3 Titulo3</h3>
              <p className="services__modal-description">
                Examina cómo los niños pequeños aprenden a regular sus
                emociones, incluida la gestión de la frustración, la ira y la
                ansiedad, y cómo los adultos pueden apoyar este proceso de
                desarrollo.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
