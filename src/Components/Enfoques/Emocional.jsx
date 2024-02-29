import React from 'react'

const Emocional = () => {
  return (
    <div className="enfoques__content">
      <h3 className="enfoques__title">Desarrollo Socioemocional</h3>

      <div className="enfoques__box">

        <div className="enfoques__group">

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Emociones y Comunicacion</h3>
              {/*<span className="enfoques__level"></span> EJEMPLO POR SI SE QUIERE AGREAGR ALGO ABAJO*/}
            </div>
          </div>

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Vinculos Afectivos</h3>
              
            </div>
          </div>

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Desarrollo Empatico</h3>
            </div>
          </div>


        </div>
        
        <div className="enfoques__group">

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Autoestima e Identidad</h3>
            </div>
          </div>


          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Resilencia Infantil</h3>
            </div>
          </div>

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Autoconciencia</h3>
              <span className="enfoques__level"></span>
            </div>
          </div>


        </div>
        
      </div>
    </div>
  );
}

export default Emocional