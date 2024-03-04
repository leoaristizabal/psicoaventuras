import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Testimonios from './Components/Testimonios/Testimonios';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Experiencia from './Components/Experiencia/Experiencia';
import Footer from './Components/Footer/Footer';
import Wabutton from './Components/WhatsappButton/Wabutton';
import Scrollup from './Components/Scrollup/Scrollup';
import Buybutton from './Components/Buybutton/Buybutton';

function App() {

  return (
    <>

      <Header/>
        <Home />
      <main className="main">
        <About/>
        <Services/>
        <Experiencia/>
        <Buybutton/>
        <Testimonios />
        <Contact/>
      </main>
        <Footer/>
        <Wabutton/>
        <Scrollup/>
    </>
  )
}

export default App
