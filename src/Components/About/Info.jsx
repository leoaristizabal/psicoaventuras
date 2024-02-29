import React from "react";

const Info = () => {
  return (
    
      <div className="about__info grid">
        <div className="about__box">
          <i class="uil uil-award  about__icon"></i>
          <h3 className="about__title">Experiencia</h3>
          <span className="about__subtitle">+ de 8 a;os</span>
        </div>

        <div className="about__box">
          <i class="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Certificados</h3>
          <span className="about__subtitle">+15 Cursos Comp.</span>
        </div>

        <div className="about__box">
          <i class="uil uil-folder-open about__icon"></i>
          <h3 className="about__title">Talleres</h3>
          <span className="about__subtitle"> + 25 Completados</span>
        </div>
      </div>
    
  );
};

export default Info;
