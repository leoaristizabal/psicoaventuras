import React from 'react'
import './scrollup.css'

const Scrollup = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        //Cuando el scroll es mayor a 560 de altura viewport, agrega show-scroll class a la etiqueta con la clase scroll-top
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup