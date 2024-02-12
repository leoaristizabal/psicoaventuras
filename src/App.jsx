import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Enfoques from './Components/Enfoques/Enfoques';
import Testimonios from './Components/Testimonios/Testimonios';

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Enfoques/>
        <Testimonios/>
      </main>
    </>
  )
}

export default App
