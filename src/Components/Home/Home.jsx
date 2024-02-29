import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Wave from "./Wave";

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
      </div>
    </section>
  );
};

export default Home;
