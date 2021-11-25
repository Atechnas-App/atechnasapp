import React from 'react'
import "../Home/Carrucel/Carrusel.css"
import der from "../../assets/img/der.png"
import izq from "../../assets/img/izq.png"

function CardsCarrusel() {
  return (
    <div id="conteItemsCarrusel">
      <div className="itemCarrusel" id="itemCarrusel-1">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80"
            alt="imagen"
            className="image"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-3">
            <img src={izq} alt="I"/>
          </a>
          <a href="#itemCarrusel-2">
            <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      <div className="itemCarrusel" id="itemCarrusel-2">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.2uENtVzunaEfelM6j-eP-wHaD_&pid=Api"
            alt="imagen"
            className="image"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-1">
            <img src={izq} alt="I"  />
          </a>
          <a href="#itemCarrusel-3">
            <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      <div className="itemCarrusel" id="itemCarrusel-3">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.UVBoB7hPko6P1qWMi0chVAHaH6&pid=Api"
            alt="imagen"
            className="image"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-2">
            <img src={izq} alt="I"/>
          </a>
          <a href="#itemCarrusel-1">
           <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      <div id="contePuntos">
        <a href="#itemCarrusel-1">*</a>
        <a href="#itemCarrusel-2">*</a>
        <a href="#itemCarrusel-3">*</a>
      </div>
    </div>
  );
}

export default CardsCarrusel
