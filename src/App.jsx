import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Testimonios from './Components/Testimonios/Testimonios';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Experiencia from './Components/Experiencia/Experiencia';
import Footer from './Components/Footer/Footer';
import Scrollup from './Components/Scrollup/Scrollup';
import Enfoques from './Components/Enfoques/Enfoques';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import AvatarWa from './assets/AboutDani1.4.svg';
import { Helmet } from 'react-helmet';
import NewsletterForm from './Components/NewsletterForm';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // Mostrar el pop-up al cargar la página
    setShowPopup(true);

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <ScrollToSection />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Psicoaventuras | Psicólogo Infantil en Caracas</title>
              <meta name="description" content="Soy Daniela Abuchaibe, psicóloga infantil con más de 8 años de experiencia en terapia presencial y en línea.Ayudamos a niños y adolescentes a superar sus desafíos emocionales acompañando a padres y maestros a abordar comportamientos desafiantes, mejorando la gestión emocional y conductual de los niños" />
            </Helmet>
            <Home />
          </>
        } />
        <Route path="/about" element={
          <>
            <Helmet>
              <title>Sobre Nosotros | Psicoaventuras</title>
              <meta name="description" content="Conoce más sobre Psicoaventuras y nuestra experiencia en psicología infantil en Caracas y Online." />
            </Helmet>
            <About />
          </>
        } />
        <Route path="/enfoques" element={
          <>
            <Helmet>
              <title>Nuestros Enfoques | Psicoaventuras</title>
              <meta name="description" content="Descubre los enfoques y métodos que utilizamos en Psicoaventuras para apoyar a niños y adolescentes." />
            </Helmet>
            <Enfoques />
          </>
        } />
        <Route path="/services" element={
          <>
            <Helmet>
              <title>Servicios | Psicoaventuras</title>
              <meta name="description" content="Ofrecemos una variedad de servicios en Psicoaventuras para apoyar el desarrollo emocional y psicológico de niños y adolescentes." />
            </Helmet>
            <Services />
          </>
        } />
        <Route path="/experiencia" element={
          <>
            <Helmet>
              <title>Experiencia | Psicoaventuras</title>
              <meta name="description" content="Conoce la experiencia y el recorrido profesional de Daniela Abuchaibe en Psicoaventuras." />
            </Helmet>
            <Experiencia />
          </>
        } />
        <Route path="/testimonios" element={
          <>
            <Helmet>
              <title>Testimonios | Psicoaventuras</title>
              <meta name="description" content="Lee los testimonios de nuestros clientes y conoce cómo hemos ayudado a familias en línea." />
            </Helmet>
            <Testimonios />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Helmet>
              <title>Contacto | Psicoaventuras</title>
              <meta name="description" content="Ponte en contacto con Psicoaventuras para más información sobre nuestros servicios de psicología infantil." />
            </Helmet>
            <Contact />
          </>
        } />
      
        <Route path="/newsletter" element={
          <>
            <Helmet>
              <title>Newsletter | Psicoaventuras</title>
              <meta name="description" content="Descarga nuestras guias gratuitas y suscribete a nuestro Newsletter con Psicoaventuras para más información sobre nuestros servicios de psicología infantil." />
            </Helmet>
            <NewsletterForm />
          </>
        } />
      </Routes>
      <main className="main">
        <Enfoques id="enfoques" />
        <Services id="services" />
        <Experiencia id="experiencia" />
        <NewsletterForm id="newsletter" />
        <Testimonios id="testimonios" />
        <Contact id="contact" />
      </main>
      <Footer />
      <FloatingWhatsApp
        phoneNumber='584120426747'
        accountName='Psicoaventuras'
        avatar={AvatarWa}
        statusMessage='En Línea'
        placeholder='Mensaje'
        chatMessage='Hola! Gracias por escribir a Psicoaventuras, ¿Cómo puedo ayudarte?'
      />
      <Scrollup />
      
      {showPopup && (
        <div className="popup">
          <div className="popup-inner" ref={popupRef}>
            <button className="close-btn" onClick={handleClosePopup}><i className='bx bx-x-circle'></i></button>
            <NewsletterForm />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
