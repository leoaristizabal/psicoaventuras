import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  
  //estado para abrir el toggle menu
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#enfoques");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Psicoaventuras
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                Sobre Mi
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#enfoques"
                onClick={() => setActiveNav("#enfoques")}
                className={
                  activeNav === "#enfoques"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"> </i>
                Asesorias
              </a>
            </li>
            <li className="nav__item">
              <a href="#buybutton" onClick={() => setActiveNav("#citas")}
                className={
                  activeNav === "#citas" ? "nav__link active-link" : "nav__link"
                }
                >
                <i className="uil uil-calendar-alt nav__icon"></i>
                Citas
              </a>
            </li>
            <li className="nav__item">
              <a href="https://anad20dw6vduv7sn-69119410394.shopifypreview.com/" onClick={() => setActiveNav("#tienda")}
                className={
                  activeNav === "#tienda" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-shopping-cart-alt nav__icon"></i>
                Tienda
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                Contacto
              </a>
            </li>
            
          </ul>

          <i
            className="uil uil-times nav__close "
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
