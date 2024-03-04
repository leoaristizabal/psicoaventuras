import React, { useState } from "react";
import './services.css';

const Services = () => {

  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }



  return (
    <section className="services section" id="services">
      <h2 className="section__title">Áreas de Atención</h2>
      <span className="section__subtitle">
        Descubre como puedo ayudarte en el camino
      </span>

      <div className="services__container container grid">

        
{/**Separacion de services content 1*/}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Evaluación <br/> & <br/>Diagnóstico <br/> </h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(1)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Evaluación y Diagnóstico</h3>
              <p className="services__modal-description">
              Observación y evaluación profunda y detallada de todas las áreas del desarrollo de niños y adolescentes. (socio – emocional, lenguaje y comunicación, cognitivo, comunicación y motricidad) Ideal para:

              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diagnósticos Tempranos.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Orientación para padres.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Herramientas en base a sus necesidades para potenciar sus fortalezas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>


{/**Separacion de services contente 2*/}

        <div className="services__content">
          <div>
            <i className="uil uil-users-alt services__icon"></i>
            <h3 className="services__title">Asesoramiento<br/> Padres &<br/>Madres</h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(2)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Asesoramiento a padres y madres</h3>
              <p className="services__modal-description">
              Brindar orientación, acompañamiento y apoyo a padres mediante tips y estrategias de crianza asertivas y actualizadas lo que les permitira manejar mejor el comportamiento de tu hijo/a. Es ideal para abordar:

              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Dinámicas familiares efectivas.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Establecimiento de rutinas diarias.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Herramientas para una conversacion efectiva sobre temas como, duelos, divorcios, mudanzas y/o cambios significativos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

{/**Separacion de services content 3 */}
        <div className="services__content">
          <div>
          <i class="uil uil-band-aid services__icon"></i>
            <h3 className="services__title">Intervención<br/> Terapias <br/> Personalizadas</h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(3)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Intervención en terapiaa personalizadaa</h3>
              <p className="services__modal-description">
              Utilizando diferentes herramientas psicológicas y pedagógicas, y siendo el juego la base de nuestro método de aprendizaje, las terapias personalizadas ayudan a estimular el desarrollo de los niños y/o abordar temas infantiles como la ansiedad, dificultades escolares, conductas disruptivas, etc. Ideal para:

              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Recomendar adaptaciones curriculares necesarias.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Trabajo personalizado con niños con diagnóstico de autismo, déficit de atención e hiperactividad.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Estimulación personalizada de áreas de desarrollo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

{/**Separacion de services content 4 */}
<div className="services__content">
          <div>
          <i class="uil uil-graduation-cap services__icon"></i>
            <h3 className="services__title">Escuela de<br/> Padres &<br/>Maestras<br/> </h3>
          </div>

          <span className="services__button" onClick={()=> setToggleState(4)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Escuela de padres y maestras</h3>
              <p className="services__modal-description">Por medio de talleres y formaciones grupales, padres y maestras obtendrán información sobre el desarrollo físico, emocional, cognitivo y social de los niños, lo que les ayudara a comprender mejor sus necesidades y comportamientos en diferentes etapas de la infancia y adolescencia. Ideal para:
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Aprender estrategias de crianza y eduación efectivas.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Promover relaciones familiares y sociales sanas.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Brindar mayor seguridad en su capacidad de criar y educar.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Tener un espacio donde compartir experiencias y preocupaciones.
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
