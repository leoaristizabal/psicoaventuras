import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Testimonios from './Components/Testimonios/Testimonios';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Experiencia from './Components/Experiencia/Experiencia';
import WaButton from './Components/WhatsappButton/WaButton';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>

      <Header/>
        <Home />
      <main className="main">
        <About/>
        <Services/>
        <Experiencia/>
        <Testimonios />
        {/**<Buybutton/> */}
        <Contact/>
      </main>
        <Footer/>
        <WaButton/>
    </>
  )
}

export default App
