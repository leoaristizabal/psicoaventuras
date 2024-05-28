import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Wave from "./Wave";
import Scrolldown from "./Scrolldown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <Helmet>
        <title>Psicoaventuras | Psicólogo Infantil en Caracas</title>
        <meta name="description" content="Psicoaventuras ofrece servicios de psicología infantil en Caracas. Ayudamos a niños y adolescentes a superar sus desafíos emocionales y psicológicos." />
        <meta name="keywords" content="psicólogo infantil, Caracas, psicología infantil, terapia infantil, Psicoaventuras" />
        <meta property="og:title" content="Psicoaventuras | Psicólogo Infantil en Caracas" />
        <meta property="og:description" content="Psicoaventuras ofrece servicios de psicología infantil en Caracas. Ayudamos a niños y adolescentes a superar sus desafíos emocionales y psicológicos." />
        <meta property="og:image" content="/src/assets/navicon/logopsicoaventuras2.png" />
        <meta property="og:url" content="https://www.psicoaventuras.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Psicoaventuras | Psicólogo Infantil en Caracas" />
        <meta name="twitter:description" content="Psicoaventuras ofrece servicios de psicología infantil en Caracas. Ayudamos a niños y adolescentes a superar sus desafíos emocionales y psicológicos." />
        <meta name="twitter:image" content="/src/assets/navicon/logopsicoaventuras2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Wave />
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <Scrolldown/>
      </div>
    </section>
  );
};

export default Home;
