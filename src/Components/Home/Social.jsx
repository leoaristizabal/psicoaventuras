import React, { useState } from "react";

const Social = () => {
  const [igText, setIgText] = useState("");
  const [citaText, setCitaText] = useState("");
  const [tiendaText, setTiendaText] = useState("");

  const handleMouseEnterIg = (text) => {
    setIgText(text);
  };

  const handleMouseLeaveIg = ()=>{
    setIgText("")
  }
  const handleMouseEnterCita = (text) => {
    setCitaText(text);
  };

  const handleMouseLeaveCita = ()=>{
    setCitaText("")
  }
  const handleMouseEnterTienda = (text) => {
    setTiendaText(text);
  };

  const handleMouseLeaveTienda = ()=>{
    setTiendaText("")
  }

  return (
    <div className="home__social">
      
      <a
        href="www.instagram.com/psicoaventuras"
        className="home__social-icon"
        target="_blank"
        onMouseEnter={()=> handleMouseEnterIg(" Instagram")}
        onMouseLeave={handleMouseLeaveIg}
      >
      <i class="uil uil-instagram"></i>
      <span className="social-text">{igText}</span>
      </a>

      <a href="www.shopify.com" className="home__social-icon" target="_blank"
      onMouseEnter={()=> handleMouseEnterTienda(" Tienda")}
      onMouseLeave={handleMouseLeaveTienda}
      >
      <i class="uil uil-store"></i>
      <span className="social-text">{tiendaText}</span>
      </a>

      <a href="" className="home__social-icon" target="_blank"
      onMouseEnter={()=> handleMouseEnterCita(" Agendar Cita")}
      onMouseLeave={handleMouseLeaveCita}
      >
      <i class="uil uil-calendar-alt"></i>
      <span className="social-text">{citaText}</span>
      </a>


    </div>
  );
};

export default Social;
