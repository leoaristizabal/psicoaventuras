import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Testimonios from './Components/Testimonios/Testimonios';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Experiencia from './Components/Experiencia/Experiencia';
import Footer from './Components/Footer/Footer';
import AvatarWa from './assets/AboutDani1.4.svg'
import Scrollup from './Components/Scrollup/Scrollup';
import Buybutton from './Components/Buybutton/Buybutton';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Enfoques from './Components/Enfoques/Enfoques';

function App() {

  return (
    <>

      <Header/>
        <Home />
      <main className="main">
        <About/>
        <Enfoques/>
        <Services/>
        <Experiencia/>
        <Testimonios />
        <Contact/>
      </main>
        <Footer/>
        <FloatingWhatsApp phoneNumber='584120426747' accountName='Psicoaventuras' avatar={AvatarWa} statusMessage='En Línea' placeholder='Mensaje' chatMessage='Hola! Gracias por escribir a Psicoaventuras, ¿Cómo puedo ayudarte?'/>
        <Scrollup/>
    </>
  )
}

export default App
