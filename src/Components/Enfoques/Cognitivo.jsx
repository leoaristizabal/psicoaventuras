import React from "react";

const Cognitivo = () => {
  return (
    <div className="enfoques__content">
      <h3 className="enfoques__title">Desarrollo Cognitivo</h3>

      <div className="enfoques__box">

        <div className="enfoques__group">

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Teorias de Aprendizaje</h3>
              {/*<span className="enfoques__level">ALGO</span>* EJEMPLO POR SI PONER ALGO MAS ABAJO*/}
            </div>
          </div>


          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Lenguaje y Comunicacion</h3>
            </div>
          </div>


          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Resolucion de Problemas</h3>
              <span className="enfoques__level"></span>
            </div>
          </div>


        </div>

        <div className="enfoques__group">

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Autismo (TEA)</h3>
            </div>
          </div>


          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Memoria y Atencion</h3>
              <span className="enfoques__level"></span>
            </div>
          </div>


          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Pensamiento Critico</h3>
              <span className="enfoques__level"></span>
            </div>
          </div>


        </div>
        
      </div>
    </div>
  );
};

export default Cognitivo;
