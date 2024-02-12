import React from "react";
import "./experiencia.css";
import { useState } from "react";

const Experiencia = () => {

  const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="experiencia section" id="experiencia">
      <h2 className="section__title">Mi Experiencia </h2>
      <span className="section__subtitle">Academica - Laboral</span>

      <div className="experiencia__container container">
        <div className="experiencia__tabs">

          
          <div 
          className={
            toggleState === 1 
              ? "experiencia__button experiencia__active button--flex" 
              : "experiencia__button button--flex"
              }
              onClick={()=> toggleTab(1)}
            > {/**logica de activacion */}
            
            <i className="uil uil-graduation-cap experiencia-icon"></i>
            Educacion
          </div>

          <div className={
            toggleState === 2 
            ? "experiencia__button experiencia__active button--flex" 
            : "experiencia__button button--flex"
            }
            onClick={()=> toggleTab(2)}
            >{/**logica de activacion */}

            <i className="uil uil-briefcase-alt experiencia-icon"></i>
            Laboral
          </div>
        </div>

        <div className="experiencia__sections">

{/***********************Experiencia Content 1 ******************/}
          <div className={
            toggleState === 1 
            ? "experiencia__content experiencia__content-active" 
            : "experiencia__content"
            }
            >{/**logica de activacion */}


            {/***********************Experiencia Data1 sin <div> (educacion - izquierda) ******************/}
            <div className="experiencia__data">
             {/* <div></div>  /****ERROR????****/}

              <div>

                <h3 className="experiencia__title">Web Designe 2.1</h3>
                <span className="experiencia__subtitle">
                  Universidad Metropolitana
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - Presente {/****Hasta aqui bien****/}
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
                <h3 className="experiencia__title">Art Director</h3>
                <span className="experiencia__subtitle">
                  Universidad Metropolitana
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            {/***********************Experiencia Data3 sin <div> (Educacion) (izquierda)******************/}
            <div className="experiencia__data">
             {/* <div></div>  /****ERROR????****/}

              <div>

                <h3 className="experiencia__title">Web Development 1.1</h3>
                <span className="experiencia__subtitle">
                  Universidad Metropolitana
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020 {/****Hasta aqui bien****/}
                </div>
              </div>

              
              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>




            </div>

            {/***********************Expereincia Data 2.1*******************/}
            <div className="experiencia__data">
              <div></div>

              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>

              <div>
                <h3 className="experiencia__title">UX Expert</h3>
                <span className="experiencia__subtitle">
                  Universidad Metropolitana
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>
            
          </div>

{/***********************Experiencia Content 2 ******************/}
          <div className={
            toggleState === 2 
            ? "experiencia__content experiencia__content-active" 
            : "experiencia__content"
            }
            >{/**logica de activacion */}


            {/***********************Experiencia Data1 sin <div> (Educacion - Izquierda) ******************/}
            <div className="experiencia__data">
             {/* <div></div>  /****ERROR????****/}

              <div>

                <h3 className="experiencia__title">Product Designer </h3>
                <span className="experiencia__subtitle">
                  Microsoft - Barinas
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - Presente {/****Hasta aqui bien****/}
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
                <h3 className="experiencia__title">UX Designer</h3>
                <span className="experiencia__subtitle">
                  Apple Inc - Barinas
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            {/***********************Experiencia Data3 sin<div>******************/}
            <div className="experiencia__data">
             {/* <div></div>  /****ERROR????****/}

              <div>

                <h3 className="experiencia__title">Web Designer</h3>
                <span className="experiencia__subtitle">
                  Figma CA - Barinas
                </span>
                <div className="experiencia__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020 {/****Hasta aqui bien****/}
                </div>
              </div>

              
              <div>
                <span className="experiencia__rounder"></span>
                <span className="experiencia__line"></span>
              </div>




            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
