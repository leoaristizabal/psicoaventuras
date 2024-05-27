// App.jsx
import './App.css';
import React, { useEffect } from 'react';
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
import AvatarWa from './assets/profileDani1.2.svg';
import { PopupWidget } from "react-calendly";

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

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enfoques" element={<Enfoques />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <main className="main">
        <Enfoques id="enfoques" />
        <Services id="services" />
        <Experiencia id="experiencia" />
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
    </Router>
  );
}

export default App;
