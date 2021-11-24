import React from 'react'
import "../Home/Carrucel/Carrusel.css"

function CardsCarrusel() {
  return (
    <div id="conteItemsCarrusel">
        <div className="itemCarrusel" id="itemCarrusel-1">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
            <img src="https://tse1.mm.bing.net/th?id=OIP.gPV2eYm5ki_7pkn2XzrOZwHaD3&pid=Api" />
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-3">
              <i>I</i>
            </a>
            <a href="#itemCarrusel-2">
              <i>D</i>
            </a>
          </div>
        </div>
          <div className="itemCarrusel" id="itemCarrusel-2">
            <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
              <img src="https://tse4.mm.bing.net/th?id=OIP.2uENtVzunaEfelM6j-eP-wHaD_&pid=Api" />
            </div>
            <div className="flechasCarrusel">
              <a href="#itemCarrusel-1">
                <i>I</i>
              </a>
              <a href="#itemCarrusel-3">
                <i>D</i>
              </a>
            </div>
        </div>
            <div className="itemCarrusel" id="itemCarrusel-3">
              <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
                <img src="https://tse4.mm.bing.net/th?id=OIP.UVBoB7hPko6P1qWMi0chVAHaH6&pid=Api" />
              </div>
              <div className="flechasCarrusel">
                <a href="#itemCarrusel-2">
                  <i>I</i>
                </a>
                <a href="#itemCarrusel-1">
                  <i>D</i>
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
