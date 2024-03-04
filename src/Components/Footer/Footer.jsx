import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Psicoaventuras</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Servicios
            </a>
          </li>
          <li>
            <a href="#buybutton" className="footer__link">
              Citas
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/psicoaventuras/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://wa.link/9ah2kw"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-whatsapp"></i>
          </a>

          <a href="https://anad20dw6vduv7sn-69119410394.shopifypreview.com/" className="footer__social-link" target="_blank">
            <i class="uil uil-calendar-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; 2024 <a href="https://github.com/leoaristizabal" className="footer__link">Leoaristizabal</a>. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
