import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Enfoques from './Components/Enfoques/Enfoques';
import Services from './Components/Services/Services';

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Enfoques/>
      </main>
    </>
  )
}

export default App
