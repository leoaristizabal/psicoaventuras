import React from "react";
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mi</h2>
      <span className="section__subtitle1">¡Hola! Mi nombre es Daniela Abuchaibe y me hace muy feliz que estes
          aquí hoy y poder contarte un poco sobre mi y mi historia como
          psicóloga infanto – juvenil.</span>

      <div className="about__container container grid">
        <img src='' alt="" className="about__img" />
        <Info />
      </div>

      <div className="about__data">
        <p className="about__description">
          Me gradué en el 2016 de la Universidad Metropolitana en Caracas y
          desde entonces he tenido el privilegio de trabajar muy de cerca con
          niños, adolescentes y por supuesto familias.
          <br />
          <br />
          He trabajado exitosamente en maternales y colegios, como docente y
          como psicóloga del área de preescolar y primaria, para luego trabajar
          independiente creando mis propios planes pedagógicos vacacionales,
          escuelas de padres, consultas y asesoramiento personalizados y
          actividades de estimulación temprana. <br />
          <br />
          Me fui por 4 años de mi país, en los cuales tuve la oportunidad de
          realizar un diplomado en psicología positiva y más de 10 cursos y
          talleres enfocados en el entendimiento de cada etapa del desarrollo
          infantil, de condiciones como el autismo y déficit de atención. Desde
          ese tiempo me he dedicado a ejercer mi profesión de forma online,
          realizando maravillosos talleres y foros como “Limites una forma de
          amar”, “Habilidades sociales para niños”, “Autoestima para niños”,
          “Conociendo y comprendiendo el TEA” con más de 150 personas y
          asesorías con padres y maestras por zoom personalizadas.
          <br />
          <br />
          En mi práctica, creo firmemente en adaptar mis intervenciones a las necesidades únicas de cada niño y familia.  Utilizo una variedad de enfoques terapéuticos siendo la base de todo el juego, la innovación y la creatividad. La terapia cognitivo - conductual y el asesoramiento familiar guían mis consultas. Mi trabajo con los niños debe ir de la mano del trabajo y colaboración de sus padres y maestras. 
          <br/><br/>
          Como puedes ver, mi meta es proporcionarte un espacio seguro y de
          apoyo donde tanto tu como tus niños puedan aprender, explorar sus
          emociones, desarrollar habilidades adaptativas y de comunicación sanas
          que los llevaran a alcanzar su máximo potencial como individuos y como
          familia. Estoy muy contenta de que hayas llegado hasta aquí y hasta mi
          para poder trabajar juntos.
        </p>
        <span className="section__subtitle1">!Gracias por permitirme compartirte un poco sobre mi!</span>
      </div>
    </section>
  );
};

export default About;
