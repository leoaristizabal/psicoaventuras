// Components/Header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavClick = (hash) => {
    setActiveNav(hash);
    showMenu(false); // Cierra el menú de navegación móvil
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={() => handleNavClick("#home")}>
          Psicoaventuras
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/#home"
                onClick={() => handleNavClick("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </Link>
            </li>
            
            <li className="nav__item">
              <Link
                to="/#enfoques"
                onClick={() => handleNavClick("#enfoques")}
                className={activeNav === "#enfoques" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"> </i>
                Asesorias
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/#experiencia"
                onClick={() => handleNavClick("#experiencia")}
                className={activeNav === "#experiencia" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-calendar-alt nav__icon"></i>
                Mi Experiencia
              </Link>
            </li>
            <li className="nav__item">
              <a
                href="https://anad20dw6vduv7sn-69119410394.shopifypreview.com/"
                onClick={() => handleNavClick("#tienda")}
                className={activeNav === "#tienda" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-shopping-cart-alt nav__icon"></i>
                Tienda
              </a>
            </li>
            <li className="nav__item">
              <Link
                to="/#contact"
                onClick={() => handleNavClick("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i>
                Contacto
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
