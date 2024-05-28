import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Psicoaventuras</h1>

        <ul className="footer__list">
          <li>
            <a href="/" className="footer__link">
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#enfoques" className="footer__link">
              Asesorías
            </a>
          </li>
          <li>
            <a href="https://calendly.com/psicoaventuras-vzla/asesoria-online" className="footer__link" target="_blank" rel="noopener noreferrer">
              Citas
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/psicoaventuras/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="uil uil-instagram" aria-hidden="true"></i>
          </a>

          <a
            href="https://wa.link/9ah2kw"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="uil uil-whatsapp" aria-hidden="true"></i>
          </a>

          <a
            href="https://calendly.com/psicoaventuras-vzla/asesoria-online"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calendly"
          >
            <i className="uil uil-calendar-alt" aria-hidden="true"></i>
          </a>
        </div>
        
        <span className="footer__copy">
          &#169; 2024. Designed by <a href="https://avocodesign.vercel.app/" className="footer__link" target="_blank" rel="noopener noreferrer">AvocoDesign</a>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
