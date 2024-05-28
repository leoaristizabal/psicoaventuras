import React from "react";
import "./experiencia.css";
import { useState } from "react";

const Experiencia = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="experiencia section" id="experiencia">
      <h2 className="section__title">Mi Experiencia </h2>
      <span className="section__subtitle">Académica - Laboral</span>

      <div className="experiencia__container container">
        <div className="experiencia__tabs">
          <div
            className={
              toggleState === 1
                ? "experiencia__button experiencia__active button--flex"
                : "experiencia__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            {" "}
            {/**logica de activacion */}
            <i className="uil uil-graduation-cap experiencia__icon"></i>
            Educación
          </div>

          <div
            className={
              toggleState === 2
                ? "experiencia__button experiencia__active button--flex"
                : "experiencia__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            {/**logica de activacion */}
            <i className="uil uil-briefcase-alt experiencia__icon"></i>
            Laboral
          </div>
        </div>

        <div className="experiencia__sections">
          {/***********************Experiencia Content 1 (EDUCACION EDUACIONNNN) ******************/}
          <div
            className={
              toggleState === 1
                ? "experiencia__content experiencia__content-active"
                : "experiencia__content"
            }
          >
            {/**logica de activacion */}

            {/***********************Experiencia Data1 sin <div> (educacion - izquierda) ******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  Principios de la Psicología Positiva
                </h3>
                <span className="experiencia__subtitle">
                  Curso 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 2*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  Psicología positiva: bases para el bienestar
                </h3>
                <span className="experiencia__subtitle"></span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015
                </div>
              </div>
            </div>

            {/***********************Experiencia Data3 sin <div> (Educacion) (izquierda)******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  Licenciatura En Psicología Positiva
                </h3>
                <span className="experiencia__subtitle"></span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016{" "}
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 4.1*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  {" "}
                  Taller Resilencia Familiar.
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017
                </div>
              </div>
            </div>

            {/***********************Experiencia Data5 sin <div> (educacion - izquierda) ******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  ¿Como promover el desarrollo positivo del adolescente?
                </h3>
                <span className="experiencia__subtitle">
                  Taller
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 6*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  Bases biológicas del autismo
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
            </div>

            {/***********************Experiencia Data7 sin <div> (Educacion) (izquierda)******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  Intervenciones centradas en la familia
                </h3>
                <span className="experiencia__subtitle">
                  Curso 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019{" "}
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 8.1*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  {" "}
                  Estrategias de intervención en conductas problemáticas.
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
            </div>

            {/***********************Experiencia Data9 sin <div> (educacion - izquierda) ******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  Neurociencias para padres: una nueva mirada sobre el TDAH
                </h3>
                <span className="experiencia__subtitle">
                  Curso 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 10***************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  Rutinas diarias como herramienta para instaurar conductas
                  efectivas.
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            {/***********************Experiencia Data13 sin <div> (educacion - izquierda) ******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">
                  Neurodiversidad: un concepto que nos incluye a todos
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 12.1*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">
                  Neurodiversidad en entornos escolares.
                </h3>
                <span className="experiencia__subtitle">
                  Taller 
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>

            
          </div>

          {/***********************Experiencia Content 2 (LABORAL LABORALLLL) ******************/}
          <div
            className={
              toggleState === 2
                ? "experiencia__content experiencia__content-active"
                : "experiencia__content"
            }
          >
            {/**logica de activacion */}

            {/********************Experiencia Data1 sin <div> (Educacion - Izquierda) ******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">Psicología 4to año de bachillerato.</h3>
                <span className="experiencia__subtitle">
                  Docente
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 2****************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">Psicóloga del Dpto. de Psicología (Preescolar - Primaria)</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017
                </div>
              </div>
            </div>

            {/***********************Experiencia Data3 sin<div>******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">Asistencia y asesoramiento a padres en la primera infancia (Maternal)</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 4****************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">Plan vacacional de estimulación de áreas del desarrollo para niños entre 3 y 6 anos</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>

            {/***********************Experiencia Data5 sin<div>******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">Consultas y asesoramiento personalizado a niños, adolescentes y familias</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - Presente
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/***********************Expereincia Data 6****************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">Consultas y asesoramiento personalizado a maestros.</h3>
                <span className="experiencia__subtitle">
                  
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - Presente
                </div>
              </div>
            </div>

            {/***********************Experiencia Data7 sin<div>******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">Escuela para padres (Mas de 20 talleres realizados)</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>

            {/*********************Expereincia Data 8*****************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">Gestión de personal y área recursos humanos. Empresa de hostelería. Reino Unido</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>
            </div>

            {/***********************Experiencia Data 9 sin<div>******************/}
            <div className="experiencia__data">
              {/* <div></div>  /****ERROR????****/}

              <div>
                <h3 className="experiencia__title">Gestión de talento, selección y reclutamiento de personal. Empresa de hostelería. Reino Unido</h3>
                <span className="experiencia__subtitle">
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                  {/****Hasta aqui bien****/}
                </div>
              </div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>
            </div>
            {/***********************Expereincia Data 10*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">Dirección académica en LeRobotica – Venezuela</h3>
                <span className="experiencia__subtitle">
                  
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
