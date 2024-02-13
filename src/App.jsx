import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Testimonios from './Components/Testimonios/Testimonios';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Experiencia from './Components/Experiencia/Experiencia';
import Wabutton from './Components/WhatsappButton/wabutton';

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Services/>
        <Experiencia/>
        <Testimonios/>
        <Contact/>
      </main>
        <Wabutton/>
    </>
  )
}

export default App
