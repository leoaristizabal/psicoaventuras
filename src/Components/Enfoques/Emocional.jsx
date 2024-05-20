import React from 'react'

const Emocional = () => {
  return (
    <div className="enfoques__content">

      <div className="enfoques__box">

        <div className="enfoques__group">

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">No logras entender que pasa con tu hijo</h3>
              {/*<span className="enfoques__level"></span> EJEMPLO POR SI SE QUIERE AGREAGR ALGO ABAJO*/}
            </div>
          </div>

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Es muy activo en su entorno: pega, grita, muerde y empuja a otros compañeros</h3>
              
            </div>
          </div>

          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">No sigue instrucciones</h3>
            </div>
          </div>
          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Pierde el enfoque facilmente</h3>
            </div>
          </div>
          <div className="enfoques__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="enfoques__name">Tiene problemas para comer y dormir</h3>
            </div>
          </div>


        </div>
        
        
      </div>
    </div>
  );
}

export default Emocional