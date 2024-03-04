import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Wave from "./Wave";
import Scrolldown from "./Scrolldown";


const Home = () => {
  return (
    <section className="home section" id="home">
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
